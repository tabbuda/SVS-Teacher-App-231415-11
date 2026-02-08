/**
 * ==========================================
 * MASTER APP ENGINE (app.js) - PREMIUM UI FIX
 * Removed Inline Styles -> Now uses style.css classes
 * ==========================================
 */

const App = {
    state: {
        activeGroup: null,
        activeSubject: null,
        activeUnit: null,
        masterData: null
    },

    // 1. INIT
    init: function () {
        // Hide Modals on Load (Safety check)
        document.querySelectorAll('.modal-backdrop').forEach(el => el.classList.remove('show'));

        if (localStorage.getItem("isLoggedIn") === "true") {
            this.loadAppData();
        } else {
            this.renderLoginPage();
        }

        window.onpopstate = (e) => {
            if (e.state) {
                if (e.state.page === 'home') this.renderLandingPage(false);
                if (e.state.page === 'dashboard') this.renderDashboard(this.state.masterData[e.state.group], false);
                if (e.state.page === 'profile') this.renderProfilePage(false);
            }
        };
    },

    // 2. LOGIN PAGE (Fixed: No Inline Styles)
    renderLoginPage: function () {
        document.getElementById("app-root").innerHTML = `
            <div class="login-screen fade-in">
                <div class="login-card">
                    <div class="logo-box">
                        <img src="https://tabbuda.github.io/SVS-Teacher-App-231415-11/icon-192.png" alt="App" class="app-icon" onerror="this.style.display='none'">
                    </div>
                    <h2 class="login-title">Self Growth Study</h2>
                    <p class="login-subtitle">Staff & Admin Portal</p>
                    
                    <div class="input-group">
                        <label>Username</label>
                        <input type="text" id="username" class="login-input" placeholder="Enter username">
                    </div>
                    
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" id="password" class="login-input" placeholder="Enter password">
                    </div>

                    <button id="loginBtn" onclick="App.handleLogin()">
                        Login securely
                    </button>
                    <p id="loginError"><i class="fas fa-exclamation-circle"></i> Invalid Credentials</p>
                </div>
            </div>`;
    },

    handleLogin: async function () {
        const u = document.getElementById("username").value;
        const p = document.getElementById("password").value;
        const btn = document.getElementById("loginBtn");

        if (!u || !p) return;
        
        const originalText = btn.innerText;
        btn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Checking...`;
        btn.disabled = true;

        const res = await DataService.login(u, p);
        
        if (res.success) {
            this.loadAppData();
        } else {
            document.getElementById("loginError").style.display = "block";
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    },

    // 3. LOAD DATA SCREEN
    loadAppData: function () {
        document.getElementById("app-root").innerHTML = `
            <div class="loading-screen">
                <div class="spinner"></div>
                <p>Syncing Syllabus...</p>
            </div>`;

        DataService.init((data) => {
            if (data) {
                this.state.masterData = data;
                this.renderLandingPage(true);
            } else {
                alert("Network Error. Please reload.");
                location.reload();
            }
        });
    },

    // 4. LANDING PAGE (Profile Pill Added)
    renderLandingPage: function (pushState = true) {
        if (pushState) history.pushState({ page: 'home' }, null, "");
        const name = localStorage.getItem("teacherName").split(' ')[0];
        const pic = localStorage.getItem("profilePic");

        let html = `
            <div class="landing-container fade-in">
                <!-- Profile Pill -->
                <div class="profile-pill" onclick="App.renderProfilePage()">
                    <div class="pill-text">
                        <span class="pill-greet">Welcome,</span>
                        <span class="pill-name">${name}</span>
                    </div>
                    <div class="pill-img-wrap"><img src="${pic}"></div>
                </div>

                <div class="landing-header">
                    <div class="logo-box">
                        <img src="https://tabbuda.github.io/SVS-Teacher-App-231415-11/icon-192.png" alt="App" class="app-icon" onerror="this.style.display='none'">
                    </div>
                    <h1>Self Growth Study</h1>
                    <p class="subtitle">Select a group to proceed</p>
                </div>

                <div class="class-group-grid">`;

        for (const [key, group] of Object.entries(this.state.masterData)) {
            html += `
                <div class="class-card ${group.theme}" onclick="App.selectGroup('${key}')">
                    <div class="card-icon-wrapper"><i class="fas fa-users"></i></div>
                    <div class="card-text">
                        <h2>${group.title}</h2>
                        <p>${group.subtitle}</p>
                    </div>
                </div>`;
        }
        document.getElementById("app-root").innerHTML = html + `</div></div>`;
    },

    // 5. PROFILE PAGE
    renderProfilePage: function (pushState = true) {
        if (pushState) history.pushState({ page: 'profile' }, null, "");
        const name = localStorage.getItem("teacherName");
        const role = localStorage.getItem("userRole");
        const pic = localStorage.getItem("profilePic");

        document.getElementById("app-root").innerHTML = `
            <header class="app-header">
                <button class="back-btn" onclick="history.back()"><i class="fas fa-arrow-left"></i></button>
                <div class="brand-logo">Profile</div>
                <div style="width:40px"></div>
            </header>
            <main class="dashboard-container fade-up" style="text-align:center;">
                <div class="profile-main-card">
                    <div class="profile-avatar-big">
                        <img src="${pic}">
                    </div>
                    <span class="profile-badge">${role}</span>
                    <h2 class="profile-name-big">${name}</h2>
                    <p class="profile-role-text">SGS Teacher</p>
                    
                    <div class="menu-item logout-item" onclick="DataService.logout()">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </div>
                </div>
            </main>`;
    },

    // 6. DASHBOARD
    selectGroup: function (groupId) {
        this.state.activeGroup = groupId;
        this.renderDashboard(this.state.masterData[groupId], true);
    },

    renderDashboard: function (groupData, pushState = true) {
        if (pushState) history.pushState({ page: 'dashboard', group: this.state.activeGroup }, null, "");
        
        let html = `
            <header class="app-header">
                <button class="back-btn" onclick="App.renderLandingPage()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="brand-logo">${groupData.title}</div>
                <div style="width:40px;"></div>
            </header>
            
            <main class="dashboard-container fade-in">
                <div class="subject-grid">`;

        for (const [key, subject] of Object.entries(groupData.subjects)) {
            html += `
                <div class="subject-card" onclick="App.selectSubject('${key}')">
                    <div class="subject-icon-box" style="color:${subject.color}"><i class="fas ${subject.icon}"></i></div>
                    <h3>${subject.name}</h3>
                </div>`;
        }
        document.getElementById("app-root").innerHTML = html + `</div></main>`;
    },

    selectSubject: function (subjectId) {
        this.state.activeSubject = subjectId;
        const subject = this.state.masterData[this.state.activeGroup].subjects[subjectId];
        this.renderContentView(subject);
    },

    // 7. CONTENT VIEW (Glassy Header & Sidebar)
    renderContentView: function (subject) {
        const userRole = localStorage.getItem("userRole");
        const isAdmin = (userRole === "Principal" || userRole === "Admin");
        
        document.documentElement.style.setProperty("--primary-dynamic", subject.color);

        let html = `
            <header class="app-header content-header">
                <div class="header-left">
                    <button class="menu-trigger" onclick="App.toggleSidebar()"><i class="fas fa-bars"></i></button>
                    <div class="brand-logo" style="color:var(--primary-dynamic)">${subject.name}</div>
                </div>
                <button class="back-btn" onclick="App.selectGroup('${this.state.activeGroup}')">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </header>
            
            <nav class="sidebar" id="sidebar">
                <div class="sidebar-head" style="background:${subject.color}; color:white;">
                    <h2>Units</h2>
                    <i class="fas fa-times" onclick="App.toggleSidebar()"></i>
                </div>
                <div class="nav-links" id="sidebarNav"></div>
            </nav>
            
            <div class="overlay" id="overlay" onclick="App.toggleSidebar()"></div>
            
            <main class="main-content-area" id="mainContent"></main>

            ${isAdmin ? `
            <button id="adminFabBtn" onclick="App.openAddModal()" style="background:${subject.color}">
                <i class="fas fa-plus"></i>
            </button>` : ''}
        `;
        
        document.getElementById("app-root").innerHTML = html;

        // Populate Sidebar
        const navLinks = document.getElementById("sidebarNav");
        
        if(isAdmin) {
            const addBtn = document.createElement("div");
            addBtn.className = "nav-item add-unit-btn";
            addBtn.innerHTML = `<div class="icon-box"><i class="fas fa-folder-plus"></i></div> <span>Add New Unit</span>`;
            addBtn.onclick = () => App.openUnitModal('add');
            navLinks.appendChild(addBtn);
        }

        let firstUnit = null;
        for (const [key, unit] of Object.entries(subject.units)) {
            if (!firstUnit) firstUnit = key;
            const item = document.createElement("div");
            item.className = "nav-item";
            item.id = `nav-${key}`;
            
            let adminIcons = "";
            if(isAdmin) {
                adminIcons = `
                <div class="admin-actions">
                    <i class="fas fa-pencil-alt" onclick="event.stopPropagation(); App.openUnitModal('edit', '${key}')"></i>
                    <i class="fas fa-trash" onclick="event.stopPropagation(); App.deleteUnit('${key}')"></i>
                </div>`;
            }

            item.innerHTML = `
                <div class="icon-box"><i class="fas fa-book-open"></i></div>
                <span style="flex:1">${unit.title}</span>
                ${adminIcons}
            `;
            item.onclick = () => App.loadUnit(key);
            navLinks.appendChild(item);
        }
        
        if (firstUnit) this.loadUnit(firstUnit);
    },

    loadUnit: function (unitKey) {
        this.state.activeUnit = unitKey;
        const subject = this.state.masterData[this.state.activeGroup].subjects[this.state.activeSubject];
        const unit = subject.units[unitKey];
        const userRole = localStorage.getItem("userRole");
        const isAdmin = (userRole === "Principal" || userRole === "Admin");

        document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
        document.getElementById(`nav-${unitKey}`)?.classList.add("active");
        
        if(window.innerWidth < 900) {
             document.getElementById("sidebar").classList.remove("active");
             document.getElementById("overlay").classList.remove("active");
        }

        let html = `
            <div class="unit-hero-card" style="background: linear-gradient(135deg, ${subject.color} 0%, ${subject.color}DD 100%);">
                <div class="hero-content">
                    <span class="duration-badge">${unit.duration}</span>
                    <h1>${unit.title}</h1>
                    <div class="progress-bar-bg"><div id="unitProgressBar" style="width:0%"></div></div>
                    <p id="unitProgressText">Calculating...</p>
                </div>
            </div>
            <div class="days-container">`;

        unit.days.forEach((day, idx) => {
            const id = `${this.state.activeGroup}_${this.state.activeSubject}_${unitKey}_d${idx}`;
            const rec = DataService.getStatus(id);
            const done = rec && rec.status === "done";

            let adminControls = "";
            if(isAdmin) {
                adminControls = `
                <div class="day-admin-controls">
                    <button class="edit-btn" onclick="event.stopPropagation(); App.openEditModal('${unitKey}', ${idx})">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="delete-btn" onclick="event.stopPropagation(); App.deleteDay('${unitKey}', ${idx})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`;
            }

            html += `
                <div class="day-card" id="day-${idx}">
                    <div class="day-header">
                        ${adminControls}
                        <div class="checkbox-wrapper" onclick="event.stopPropagation(); App.toggleStatus('${id}', '${subject.name}', this)" data-status="${done ? 'done' : 'pending'}">
                            <i class="${done ? 'fas fa-check-circle' : 'far fa-circle'}" style="color:${done ? '#10B981' : '#cbd5e1'}; font-size:1.6rem;"></i>
                        </div>
                        <div class="day-title-box" onclick="App.toggleCard('day-${idx}')">
                            <span class="day-tag">${day.day}</span>
                            <h3>${day.topic}</h3>
                        </div>
                        <div class="toggle-icon" onclick="App.toggleCard('day-${idx}')"><i class="fas fa-chevron-down"></i></div>
                    </div>
                    <div class="day-body">
                        <div class="bb-board">
                             <div class="bb-title">Blackboard Work</div>
                             <div class="bb-text">${day.board}</div>
                        </div>
                        <div class="class-stack">${this.renderClassBoxes(day)}</div>
                    </div>
                </div>`;
        });

        document.getElementById("mainContent").innerHTML = html + `</div><div class="spacer-bottom"></div>`;
        this.updateProgressBar();
    },

    renderClassBoxes: function (day) {
        let h = "";
        for (let i = 1; i <= 12; i++) {
            if (day[`c${i}`]) h += `<div class="class-box c${i}"><span class="class-badge">Class ${i}</span><div class="txt">${day[`c${i}`]}</div></div>`;
        }
        return h;
    },

    // 8. HELPERS
    toggleCard: function (id) { document.getElementById(id).classList.toggle("open"); },
    toggleSidebar: function () {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");
    },
    
    toggleStatus: function (id, subj, el) {
        const cur = el.getAttribute("data-status");
        const next = cur === 'done' ? 'pending' : 'done';
        DataService.markChapter(id, subj, next, () => this.loadUnit(this.state.activeUnit));
    },

    updateProgressBar: function () {
        const total = document.querySelectorAll(".day-card").length;
        const done = document.querySelectorAll(".checkbox-wrapper[data-status='done']").length;
        const p = total === 0 ? 0 : Math.round((done / total) * 100);
        document.getElementById("unitProgressBar").style.width = p + "%";
        document.getElementById("unitProgressText").innerText = p + "% Completed";
    },

    // ========================================================
    // 9. ADMIN SYSTEM
    // ========================================================
    // Same Logic as before, but ensure modals use .show class
    
    openAddModal: function() {
        document.querySelectorAll('#adminEditModal input, #adminEditModal textarea').forEach(el => el.value = "");
        document.getElementById('editUnitId').dataset.mode = "add"; 
        document.getElementById('editUnitId').value = this.state.activeUnit;
        document.querySelector('#adminEditModal h3').innerText = "Add New Content";
        document.getElementById('saveChangesBtn').innerText = "Add Now";
        document.getElementById('adminEditModal').classList.add('show');
    },

    openEditModal: function(unitKey, dayIdx) {
        const unit = this.state.masterData[this.state.activeGroup].subjects[this.state.activeSubject].units[unitKey];
        const dayData = unit.days[dayIdx];

        document.getElementById('editDayTagInput').value = dayData.day;
        document.getElementById('editDayTagInput').dataset.oldTag = dayData.day;
        document.getElementById('editTopicInput').value = dayData.topic;
        document.getElementById('editBoardInput').value = dayData.board;
        
        for(let i=1; i<=12; i++) {
            const el = document.getElementById(`c${i}`);
            if(el) el.value = dayData[`c${i}`] || "";
        }

        document.getElementById('editUnitId').value = unitKey;
        document.getElementById('editUnitId').dataset.mode = "edit";
        document.querySelector('#adminEditModal h3').innerText = "Edit Content";
        document.getElementById('saveChangesBtn').innerText = "Save Changes";
        document.getElementById('adminEditModal').classList.add('show');
    },

    closeEditModal: function() {
        document.getElementById('adminEditModal').classList.remove('show');
    },

    // ... (rest of admin Save/Delete functions remain identical logic-wise)
    // Just ensure they are included from previous code
    
    saveContentChanges: async function() {
        // ... (Same logic as provided in previous answer)
        // Ensure you paste the full logic here
        const btn = document.getElementById('saveChangesBtn');
        const originalText = btn.innerText;
        btn.innerText = "Processing...";
        btn.disabled = true;

        const mode = document.getElementById('editUnitId').dataset.mode;
        const unitKey = document.getElementById('editUnitId').value;
        const group = this.state.activeGroup;
        const subject = this.state.activeSubject;
        
        const newDayTag = document.getElementById('editDayTagInput').value;
        const newTopic = document.getElementById('editTopicInput').value;
        const newBoard = document.getElementById('editBoardInput').value;

        if(!newDayTag || !newTopic) {
            alert("Day Tag and Topic are required!");
            btn.innerText = originalText;
            btn.disabled = false;
            return;
        }

        let url = `${API_URL}?action=manageContent` +
                  `&groupId=${group}&subjectId=${subject}&unitId=${unitKey}` +
                  `&dayTag=${encodeURIComponent(newDayTag)}` +
                  `&topic=${encodeURIComponent(newTopic)}` +
                  `&board=${encodeURIComponent(newBoard)}`;

        for(let i=1; i<=12; i++) {
            const el = document.getElementById(`c${i}`);
            if(el) url += `&c${i}=${encodeURIComponent(el.value)}`;
        }

        if (mode === 'add') {
            url += `&type=add`;
        } else {
            const oldTag = document.getElementById('editDayTagInput').dataset.oldTag;
            url += `&type=edit&oldDayTag=${encodeURIComponent(oldTag)}&newDayTag=${encodeURIComponent(newDayTag)}`;
        }

        try {
            await fetch(url);
            DataService.syncWithCloud(() => {
                this.loadUnit(unitKey);
                this.closeEditModal();
                alert(mode === 'add' ? "✅ Added!" : "✅ Updated!");
            });
        } catch (e) {
            alert("Connection Error.");
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    },

    deleteDay: async function(unitKey, dayIdx) {
        if(!confirm("Delete this content?")) return;
        const group = this.state.activeGroup;
        const subject = this.state.activeSubject;
        const unit = this.state.masterData[group].subjects[subject].units[unitKey];
        const dayTag = unit.days[dayIdx].day;
        const url = `${API_URL}?action=manageContent&type=delete` +
                    `&groupId=${group}&subjectId=${subject}&unitId=${unitKey}&dayTag=${encodeURIComponent(dayTag)}`;
        
        try {
            await fetch(url);
            unit.days.splice(dayIdx, 1);
            this.loadUnit(unitKey);
        } catch(e) { alert("Failed."); }
    },

    openUnitModal: function(mode, unitId = null) {
        document.getElementById('unitMode').value = mode;
        document.getElementById('targetUnitId').value = unitId || "";
        const modal = document.getElementById('unitModal');
        const titleInput = document.getElementById('uTitleInput');
        const idInput = document.getElementById('uIdInput');
        const durInput = document.getElementById('uDurInput');

        if(mode === 'edit') {
            const unit = this.state.masterData[this.state.activeGroup].subjects[this.state.activeSubject].units[unitId];
            document.querySelector('#unitModal h3').innerText = "Edit Unit";
            idInput.value = unitId;
            idInput.disabled = true;
            titleInput.value = unit.title;
            durInput.value = unit.duration;
        } else {
            document.querySelector('#unitModal h3').innerText = "Add New Unit";
            idInput.value = "";
            idInput.disabled = false;
            titleInput.value = "";
            durInput.value = "";
        }
        modal.classList.add('show');
    },

    saveUnitChanges: async function() {
        const mode = document.getElementById('unitMode').value;
        const uId = document.getElementById('uIdInput').value;
        const title = document.getElementById('uTitleInput').value;
        const dur = document.getElementById('uDurInput').value;
        const group = this.state.activeGroup;
        const subject = this.state.activeSubject;

        if(!uId || !title) return alert("Required fields missing");

        const btn = document.querySelector('#unitModal button');
        const oldText = btn.innerText;
        btn.innerText = "Saving...";
        btn.disabled = true;

        const url = `${API_URL}?action=manageUnit&type=${mode}` +
                    `&groupId=${group}&subjectId=${subject}&unitId=${uId}` +
                    `&newUnitId=${uId}&newTitle=${encodeURIComponent(title)}&newDur=${encodeURIComponent(dur)}`;
        
        try {
            await fetch(url);
            DataService.syncWithCloud(() => {
                this.renderContentView(this.state.masterData[group].subjects[subject]); 
                document.getElementById('unitModal').classList.remove('show');
                alert("Saved!");
            });
        } catch(e) { alert("Error"); } 
        finally { btn.innerText = oldText; btn.disabled = false; }
    },
    
    deleteUnit: async function(unitId) {
        if(!confirm("Delete Unit & All Days?")) return;
        const group = this.state.activeGroup;
        const subject = this.state.activeSubject;
        const url = `${API_URL}?action=manageUnit&type=delete&groupId=${group}&subjectId=${subject}&unitId=${unitId}`;
        try {
            await fetch(url);
            DataService.syncWithCloud(() => {
                this.renderContentView(this.state.masterData[group].subjects[subject]);
            });
        } catch(e) { alert("Failed"); }
    }
};

document.addEventListener("DOMContentLoaded", () => App.init());