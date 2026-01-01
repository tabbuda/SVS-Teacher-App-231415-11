/* 
   API SERVICE (The Bridge)
   Handles Google Sheet connection and Local Storage
*/

const API_URL = "https://script.google.com/macros/s/AKfycbxaxOP-qWRew2pLT65maxHNcZKzkNEMbnDTiFIbsYK642oXfnKxBHqlBjaUXXdJ_mgK/exec";

const DataService = {
    trackerCache: {}, // RAM में डेटा रखेगा ताकि ऐप तेज चले

    init: function () {
        // 1. Teacher Login (सिर्फ एक बार नाम पूछेगा)
        if (!localStorage.getItem("teacherName")) {
            const name = prompt("नमस्ते! अपनी हाज़िरी लगाने के लिए अपना नाम लिखें (e.g., Aman Sir):");
            if (name) localStorage.setItem("teacherName", name);
            else localStorage.setItem("teacherName", "Guest Teacher");
        }

        // 2. पुराने डेटा को Load करें (ताकि ऑफलाइन में भी चले)
        const localData = localStorage.getItem("trackerData");
        if (localData) {
            this.trackerCache = JSON.parse(localData);
        }

        // 3. इंटरनेट से नया डेटा मंगाएं (Sync)
        this.fetchTrackerData();
    },

    getTeacherName: function () {
        return localStorage.getItem("teacherName") || "Unknown";
    },

    // READ: शीट से डेटा लाना
    fetchTrackerData: function () {
        console.log("☁️ Checking for updates...");
        fetch(API_URL + "?action=read")
            .then(response => response.json())
            .then(json => {
                if (json.result === "success") {
                    this.trackerCache = json.data;
                    // लोकल मेमोरी अपडेट करें
                    localStorage.setItem("trackerData", JSON.stringify(this.trackerCache));
                    console.log("✅ Data Synced with Sheet!");

                    // अगर ऐप खुला है, तो UI रिफ्रेश करें (Optional)
                    if (typeof App !== 'undefined' && App.state.activeUnit) {
                        App.loadUnit(App.state.activeUnit); // Refresh current view
                    }
                }
            })
            .catch(e => console.log("⚠️ Offline Mode: Using local data"));
    },

    // WRITE: चेकबॉक्स टिक करने पर शीट को भेजना
    markChapter: function (chapterId, subject, status, callback) {
        const teacher = this.getTeacherName();

        // 1. तुरंत UI अपडेट करें (Optimistic Update)
        if (!this.trackerCache[chapterId]) this.trackerCache[chapterId] = {};
        this.trackerCache[chapterId].status = status;
        this.trackerCache[chapterId].by = teacher;
        this.trackerCache[chapterId].time = new Date();

        localStorage.setItem("trackerData", JSON.stringify(this.trackerCache));

        // 2. बैकग्राउंड में Google Sheet को भेजें
        const params = new URLSearchParams();
        params.append("action", "write");
        params.append("chapter_id", chapterId);
        params.append("status", status);
        params.append("marked_by", teacher);
        params.append("subject", subject);

        fetch(API_URL, {
            method: "POST",
            body: params
        })
            .then(res => res.json())
            .then(data => {
                console.log("☁️ Saved to Cloud:", data);
                if (callback) callback(true);
            })
            .catch(err => {
                console.warn("⚠️ Saved Locally Only (No Internet)");
                if (callback) callback(false);
            });
    },

    // Helper: किसी चैप्टर का स्टेटस पता करना
    getStatus: function (chapterId) {
        return this.trackerCache[chapterId] || null;
    }
};

// Start Service
DataService.init();