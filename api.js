/**
 * API SERVICE (api.js) - OFFLINE SYNC ENABLED
 * Handles Cloud Sync, Login, Queue System for Offline Writes
 */

const API_URL = "https://script.google.com/macros/s/AKfycbzpkSC-NzEzeBwlxbY0FnCWa7cLBvih8IwKYen6qxwK3VpOrxuCT3E6pEXwrWRUCNKK6Q/exec";

const DataService = {
    trackerCache: {}, 
    masterData: null,
    syncQueue: JSON.parse(localStorage.getItem("syncQueue") || "[]"), // पेंडिंग काम की लिस्ट

    // 1. LOGIN
    login: async function (username, password) {
        try {
            const res = await fetch(API_URL + `?action=login&username=${username}&password=${password}`);
            const json = await res.json();
            
            if (json.result === "success") {
                localStorage.setItem("teacherName", json.fullName);
                localStorage.setItem("userRole", json.role);
                localStorage.setItem("profilePic", json.profilePic);
                localStorage.setItem("isLoggedIn", "true");
                return { success: true };
            }
            return { success: false, message: json.message || "Login Failed" };
        } catch (e) {
            return { success: false, message: "Network Error - Check Internet" };
        }
    },

    logout: function () {
        if(confirm("Are you sure you want to logout?")) {
            localStorage.clear();
            location.reload();
        }
    },

    // 2. INITIALIZATION & SYNC
    init: async function (callback) {
        // Load Local Data
        const localTracker = localStorage.getItem("trackerData");
        const localSyllabus = localStorage.getItem("syllabusData");

        if (localTracker) this.trackerCache = JSON.parse(localTracker);
        if (localSyllabus) this.masterData = JSON.parse(localSyllabus);

        // Check for pending offline tasks
        await this.processQueue();

        // Sync with Cloud
        await this.syncWithCloud(callback);

        // Listen for Online Event
        window.addEventListener('online', () => {
            console.log("🌐 Online detected! Syncing...");
            this.processQueue();
            this.syncWithCloud(callback);
        });
    },

    // 🔄 CLOUD SYNC
    syncWithCloud: async function (callback) {
        if (!navigator.onLine) {
            console.warn("⚠️ Offline: Using Local Data");
            if (callback) callback(this.masterData);
            return;
        }

        try {
            // A. Load Syllabus
            const syllRes = await fetch(API_URL + "?action=loadSyllabus");
            const syllJson = await syllRes.json();
            if (syllJson.result === "success") {
                this.masterData = syllJson.data;
                localStorage.setItem("syllabusData", JSON.stringify(this.masterData));
            }

            // B. Load Attendance
            const trackRes = await fetch(API_URL + "?action=readTracker");
            const trackJson = await trackRes.json();
            if (trackJson.result === "success") {
                // Merge Logic: Don't overwrite if we have pending local changes
                // (Simple version: Server wins, but we re-apply queue later)
                this.trackerCache = trackJson.data;
                localStorage.setItem("trackerData", JSON.stringify(this.trackerCache));
            }

            if (callback) callback(this.masterData);
        } catch (e) {
            console.warn("Sync Failed:", e);
        }
    },

    // 3. MARK ATTENDANCE (Offline Safe)
    markChapter: function (chapterId, subject, status, callback) {
        const teacher = localStorage.getItem("teacherName") || "Guest";
        const time = new Date();

        // 1. Update Local Cache Immediately (Optimistic UI)
        this.trackerCache[chapterId] = { status: status, by: teacher, time: time };
        localStorage.setItem("trackerData", JSON.stringify(this.trackerCache));

        // 2. Create Request Data
        const params = {
            action: "markTracker",
            chapter_id: chapterId,
            status: status,
            marked_by: teacher,
            subject: subject
        };

        // 3. Try to Send
        if (navigator.onLine) {
            this.sendRequest(params, callback);
        } else {
            // 4. Save to Queue if Offline
            this.addToQueue(params);
            if (callback) callback(true); // UI update success
            alert("⚠️ Internet नहीं है. डेटा लोकल सेव कर लिया गया है। ऑनलाइन आते ही अपलोड हो जायेगा।");
        }
    },

    // 🛠️ QUEUE SYSTEM (The Magic Part)
    addToQueue: function(params) {
        this.syncQueue.push(params);
        localStorage.setItem("syncQueue", JSON.stringify(this.syncQueue));
        console.log("📥 Added to Offline Queue", this.syncQueue.length);
    },

    processQueue: async function() {
        if (this.syncQueue.length === 0) return;
        if (!navigator.onLine) return;

        console.log("♻️ Processing Offline Queue...", this.syncQueue.length);
        
        const queueCopy = [...this.syncQueue]; // Clone array
        this.syncQueue = []; // Clear main array
        localStorage.setItem("syncQueue", JSON.stringify([]));

        for (const params of queueCopy) {
            try {
                await fetch(API_URL, { 
                    method: "POST", 
                    body: new URLSearchParams(params) 
                });
                console.log("✅ Synced item:", params.chapter_id);
            } catch (e) {
                // If fails again, push back to queue
                this.addToQueue(params);
                console.error("❌ Retry failed, moved back to queue");
            }
        }
    },

    sendRequest: function(paramsObj, callback) {
        const params = new URLSearchParams(paramsObj);
        fetch(API_URL, { method: "POST", body: params })
            .then(res => res.json())
            .then(data => {
                console.log("☁️ Saved to Cloud");
                if (callback) callback(true);
            })
            .catch(err => {
                console.warn("⚠️ Network dropped. Adding to Queue.");
                this.addToQueue(paramsObj);
                if (callback) callback(true);
            });
    },

    getStatus: function (chapterId) {
        return this.trackerCache[chapterId] || null;
    },

    // 4. ADMIN CMS (Direct Online Only Recommended)
    // Admin features like 'Delete' are risky offline. We will keep them direct.
    
    adminEditContent: async function(params) {
        if(!navigator.onLine) {
            alert("❌ Editing requires Internet Connection!");
            return false;
        }
        // ... (Existing code logic for URL construction)
        const url = `${API_URL}?action=manageContent&type=edit` +
                    `&groupId=${params.groupId}` +
                    `&subjectId=${params.subjectId}` +
                    `&unitId=${params.unitId}` +
                    `&dayIndex=${encodeURIComponent(params.dayIndex)}` +
                    `&newTopic=${encodeURIComponent(params.newTopic)}` +
                    `&newBoard=${encodeURIComponent(params.newBoard)}`;
        
        try {
            const res = await fetch(url);
            const json = await res.json();
            return json.result === "success";
        } catch(e) { return false; }
    },

    adminDeleteContent: async function(params) {
        if(!navigator.onLine) return alert("❌ Need Internet to delete!");
        const url = `${API_URL}?action=manageContent&type=delete` +
                    `&groupId=${params.groupId}` +
                    `&subjectId=${params.subjectId}` +
                    `&unitId=${params.unitId}` +
                    `&dayIndex=${encodeURIComponent(params.dayIndex)}`;
        try {
            const res = await fetch(url);
            const json = await res.json();
            return json.result === "success";
        } catch(e) { return false; }
    }
};