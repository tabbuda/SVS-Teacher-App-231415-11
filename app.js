/**
 * ==========================================
 * MAIN LOGIC ENGINE (app.js)
 * ==========================================
 * Note: This file relies on 'window.SchoolData'
 */

// 1. DATA INITIALIZATION
const masterData = window.SchoolData || {};

if (Object.keys(masterData).length === 0) {
    console.error("Data Missing! Ensure group1.js, group2.js etc. are linked.");
}

// 2. APP CONTROLLER
const App = {
    state: {
        activeGroup: null,
        activeSubject: null,
        activeUnit: null,
        currentModalContent: ""
    },

    // A. INITIALIZATION
    init: function () {
        if (Object.keys(masterData).length > 0) {

            // 1. Initial State
            history.replaceState({ page: 'home' }, null, "");

            // 2. BACK BUTTON LISTENER
            window.onpopstate = function (event) {
                // A. Close Modals first
                if (document.querySelector(".modal-backdrop.show")) {
                    App.closeAllModals(false);
                    return;
                }
                // B. Close Sidebar
                if (document.getElementById("sidebar") && document.getElementById("sidebar").classList.contains("active")) {
                    App.toggleSidebar(false);
                    return;
                }
                // C. Page Navigation
                if (event.state) {
                    const page = event.state.page;
                    if (page === 'home') {
                        App.renderLandingPage(false);
                    } else if (page === 'dashboard') {
                        App.renderDashboard(masterData[event.state.group], false);
                    } else if (page === 'unit') {
                        App.renderDashboard(masterData[event.state.group], false);
                    } else if (page === 'analytics_home') {
                        App.renderAnalyticsHome(false);
                    } else if (page === 'analytics_subj') {
                        App.renderAnalyticsSubjects(event.state.group, false);
                    }
                }
            };

            this.renderLandingPage(true);
            this.attachGlobalListeners();

        } else {
            document.getElementById("app-root").innerHTML = `
                <div style="height:100vh;display:flex;justify-content:center;align-items:center;padding:20px;">
                    <h2>⚠️ Data Not Loaded</h2>
                </div>`;
        }
    },

    closeAllModals: function (goBack = true) {
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("show"));
        if (goBack) history.back();
    },

    // =========================================
    // LEVEL 1: LANDING PAGE
    // =========================================
    renderLandingPage: function (pushState = true) {
        if (pushState) history.pushState({ page: 'home' }, null, "");

        const container = document.getElementById("app-root");
        document.body.className = "default-theme";
        document.documentElement.style.removeProperty("--primary-dynamic");

        let html = `
            <div class="landing-container fade-in">
                <!-- Analytics Button -->
                <div style="position:absolute; top:20px; right:20px;">
                    <button onclick="App.renderAnalyticsHome()" style="background:white; border:none; padding:10px 15px; border-radius:30px; box-shadow:0 4px 6px rgba(0,0,0,0.1); color:#4F46E5; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-chart-line"></i> Reports
                    </button>
                </div>

                <div class="landing-header">
                    <div class="logo-box"><img src="icon-192.png" alt="App" class="app-icon" onerror="this.style.display='none'"></div>
                    <h1>Self Growth Study</h1>
                    <p>Select your Class Group</p>
                </div>
                <div class="class-group-grid">
        `;

        for (const [key, group] of Object.entries(masterData)) {
            html += `
                <div class="class-card ${group.theme}" onclick="App.selectGroup('${key}')">
                    <div class="card-icon-wrapper"><i class="fas fa-user-graduate"></i></div>
                    <div class="card-text">
                        <h2>${group.title}</h2>
                        <p>${group.subtitle}</p>
                    </div>
                    <div class="arrow-icon"><i class="fas fa-arrow-right"></i></div>
                </div>
            `;
        }
        html += `</div><div class="landing-footer">SGS Coaching App</div></div>`;
        container.innerHTML = html;
    },

    selectGroup: function (groupId) {
        this.state.activeGroup = groupId;
        document.body.className = masterData[groupId].theme;
        this.renderDashboard(masterData[groupId], true);
    },

    // =========================================
    // LEVEL 2: DASHBOARD
    // =========================================
    renderDashboard: function (groupData, pushState = true) {
        if (pushState) {
            history.pushState({ page: 'dashboard', group: this.state.activeGroup }, null, "");
        }
        const container = document.getElementById("app-root");

        // [FIXED] Removed Duplicate Header HTML here
        let html = `
            <header class="app-header">
                <button class="back-btn" onclick="App.renderLandingPage()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="brand-logo">${groupData.title}</div>
                <div class="user-avatar"><i class="fas fa-graduation-cap"></i></div>
            </header>
            <main class="dashboard-container fade-in">
                <div class="welcome-banner">
                    <div>
                        <h2>Namaste! 👋</h2>
                        <p>What shall we learn today?</p>
                    </div>
                    <i class="fas fa-book-reader banner-icon"></i>
                </div>
                <div class="subject-grid">
        `;

        for (const [key, subject] of Object.entries(groupData.subjects)) {
            const unitCount = subject.units ? Object.keys(subject.units).length : 0;
            html += `
                <div class="subject-card" style="--subject-color: ${subject.color}" onclick="App.selectSubject('${key}')">
                    <div class="subject-icon-box" style="background: ${subject.color}20; color: ${subject.color}">
                        <i class="fas ${subject.icon}"></i>
                    </div>
                    <div class="subject-info">
                        <h3>${subject.name}</h3>
                        <span class="unit-badge">${unitCount} Units</span>
                    </div>
                </div>
            `;
        }
        html += `</div></main>`;
        container.innerHTML = html;
    },

    selectSubject: function (subjectId) {
        this.state.activeSubject = subjectId;
        const group = masterData[this.state.activeGroup];
        const subject = group.subjects[subjectId];
        history.pushState({ page: 'unit', group: this.state.activeGroup, subject: subjectId }, null, "");
        this.renderContentView(subject);
    },

    // =========================================
    // LEVEL 3: CONTENT VIEW
    // =========================================
    renderContentView: function (subject) {
        const container = document.getElementById("app-root");
        document.documentElement.style.setProperty("--primary-dynamic", subject.color);

        let html = `
            <header class="app-header content-header">
                <div class="header-left">
                    <button class="menu-trigger" onclick="App.toggleSidebar()"><i class="fas fa-bars"></i></button>
                    <div class="brand-logo"><i class="fas ${subject.icon}"></i> &nbsp; ${subject.name}</div>
                </div>
                <button class="home-btn" onclick="App.renderDashboard(masterData['${this.state.activeGroup}'])">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </header>

            <nav class="sidebar" id="sidebar">
                <div class="sidebar-head" style="background: ${subject.color}">
                    <h2 style="color:white">Units</h2>
                    <button onclick="App.toggleSidebar()" style="color:white;background:none;border:none;font-size:1.2rem">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="nav-links">
        `;

        let firstUnitKey = null;
        for (const [key, unit] of Object.entries(subject.units)) {
            if (!firstUnitKey) firstUnitKey = key;
            html += `
                <div class="nav-item" id="nav-${key}" onclick="App.loadUnit('${key}')">
                    <div class="icon-box"><i class="fas ${unit.icon || 'fa-book'}"></i></div>
                    <span>${unit.title}</span>
                </div>
            `;
        }

        html += `
                </div>
                <div class="sidebar-footer">
                    <button onclick="App.renderDashboard(masterData['${this.state.activeGroup}'])">
                        <i class="fas fa-arrow-left"></i> &nbsp; Back
                    </button>
                </div>
            </nav>
            <div class="overlay" id="overlay" onclick="App.toggleSidebar()"></div>

            <main class="main-content-area" id="mainContent"></main>

            <!-- SYLLABUS MODAL -->
            <div id="syllabusModal" class="modal-backdrop">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Syllabus</h3>
                        <button onclick="App.closeModal()" class="modal-close-btn"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body" id="modalBodyContent"></div>
                </div>
            </div>

            <!-- CONFIRMATION MODAL -->
            <div id="confirmModal" class="modal-backdrop" style="z-index: 2100;">
                <div class="modal-content small-modal">
                    <div class="modal-header">
                        <h3>Update Status?</h3>
                        <button onclick="App.closeConfirmModal()" class="modal-close-btn"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <p id="confirmText" style="font-size:1.1rem; color:#444; margin:10px 0;">Are you sure?</p>
                    </div>
                    <div class="modal-footer" style="padding:15px 20px; border-top:1px solid #eee; display:flex; justify-content:flex-end; gap:10px;">
                        <button onclick="App.closeConfirmModal()" style="padding:8px 15px; border:1px solid #ddd; background:white; border-radius:6px;">Cancel</button>
                        <button onclick="App.executeToggle()" style="padding:8px 20px; border:none; background:#4F46E5; color:white; border-radius:6px;">Yes, Update</button>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        if (firstUnitKey) this.loadUnit(firstUnitKey);
    },

    // =========================================
    // CONFIRMATION LOGIC
    // =========================================
    pendingAction: null,

    confirmToggle: function (chapterId, subjectName, btnElement) {
        // [FIXED] Added pushState so Back Button closes modal
        history.pushState({ page: 'modal' }, null, "");

        const currentStatus = btnElement.getAttribute("data-status");
        const actionType = currentStatus === "done" ? "Un-mark (Pending)" : "Mark as Done";

        this.pendingAction = { chapterId, subjectName, element: btnElement };
        document.getElementById("confirmText").innerHTML = `Do you want to <b>${actionType}</b> this chapter?`;
        document.getElementById("confirmModal").classList.add("show");
    },

    executeToggle: function () {
        if (this.pendingAction) {
            const { chapterId, subjectName, element } = this.pendingAction;
            this.toggleChapterStatus(chapterId, subjectName, element);
            this.pendingAction = null;
        }
        // Don't call closeConfirmModal here because closeConfirmModal does history.back()
        // But we are already at the modal state, so we should go back.
        this.closeConfirmModal();
    },

    closeConfirmModal: function () {
        this.closeAllModals(true);
        this.pendingAction = null;
    },

    // =========================================
    // TOGGLE & PROGRESS LOGIC
    // =========================================

    // [FIXED] Removed Duplicate Definition, kept only the correct one
    toggleChapterStatus: function (chapterId, subjectName, btnElement) {
        const currentStatus = btnElement.getAttribute("data-status");
        const newStatus = currentStatus === "done" ? "pending" : "done";

        if (newStatus === "done") {
            btnElement.classList.add("checked");
            btnElement.innerHTML = '<i class="fas fa-check-square"></i>';
            btnElement.setAttribute("data-status", "done");
        } else {
            btnElement.classList.remove("checked");
            btnElement.innerHTML = '<i class="far fa-square"></i>';
            btnElement.setAttribute("data-status", "pending");
        }

        DataService.markChapter(chapterId, subjectName, newStatus, (success) => {
            this.updateProgressBar();
        });
    },

    updateProgressBar: function () {
        const checkboxes = document.querySelectorAll(".chapter-checkbox");
        const total = checkboxes.length;
        let completed = 0;
        checkboxes.forEach(box => {
            if (box.getAttribute("data-status") === "done") completed++;
        });

        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        const bar = document.getElementById("unitProgressBar");
        const text = document.getElementById("unitProgressText");
        if (bar) bar.style.width = percent + "%";
        if (text) text.innerText = `${completed}/${total} Completed (${percent}%)`;
    },

    // =========================================
    // LEVEL 4: LOAD UNIT
    // =========================================
    loadUnit: function (unitKey) {
        this.state.activeUnit = unitKey;
        const groupKey = this.state.activeGroup;
        const subjectKey = this.state.activeSubject;
        const group = masterData[groupKey];
        const subject = group.subjects[subjectKey];
        const unit = subject.units[unitKey];

        // Sidebar Active
        document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
        if (document.getElementById(`nav-${unitKey}`)) {
            document.getElementById(`nav-${unitKey}`).classList.add("active");
        }
        if (window.innerWidth < 900) this.toggleSidebar(false);

        const contentArea = document.getElementById("mainContent");

        // 1. Prepare Modal Content
        let modalHTML = `<div class="syllabus-grid">`;
        if (unit.mapping) {
            for (const [cls, topics] of Object.entries(unit.mapping)) {
                const className = "Class " + cls.replace('c', '');
                modalHTML += `
                    <div class="syllabus-item ${cls}">
                        <h4>${className}</h4>
                        <ul>${topics.map(t => `<li>${t}</li>`).join('')}</ul>
                    </div>`;
            }
        } else {
            modalHTML += `<p style="text-align:center;">Details coming soon.</p>`;
        }
        modalHTML += `</div>`;
        this.currentModalContent = modalHTML;

        // 2. Render Page
        let html = `
            <div class="unit-hero-card" style="background: linear-gradient(135deg, ${subject.color}, #222); padding-bottom:50px;">
                <button class="info-btn" onclick="App.openModal()" title="View Syllabus">
                    <i class="fas fa-info"></i>
                </button>
                <div class="hero-content">
                    <span class="duration-badge"><i class="far fa-clock"></i> ${unit.duration}</span>
                    <h1>${unit.title}</h1>
                    <div class="progress-container" style="background:rgba(255,255,255,0.2); height:10px; border-radius:5px; margin-top:15px; overflow:hidden;">
                        <div id="unitProgressBar" style="height:100%; width:0%; background:#4ADE80; transition:0.5s;"></div>
                    </div>
                    <p id="unitProgressText" style="font-size:0.85rem; margin-top:5px; opacity:0.9;">Loading...</p>
                    <p style="margin-top:10px; opacity:0.8;">${unit.desc}</p>
                </div>
                <i class="fas ${subject.icon} hero-bg-icon"></i>
            </div>
            <div class="days-container fade-up">
        `;

        if (unit.days && unit.days.length > 0) {
            unit.days.forEach((day, index) => {
                const chapterId = `${groupKey}_${subjectKey}_${unitKey}_d${index}`;
                const record = DataService.getStatus(chapterId);
                const isDone = record && record.status === "done";

                const checkIcon = isDone ? "fa-check-square" : "fa-square";
                const checkClass = isDone ? "checked" : "";
                const markedByText = (isDone && record.by) ? `<small style="display:block; font-size:0.7rem; color:${subject.color}; margin-top:4px;">Done by ${record.by}</small>` : "";

                let classContentHTML = "";
                for (let i = 1; i <= 8; i++) {
                    if (day[`c${i}`]) {
                        classContentHTML += `
                            <div class="class-box c${i}">
                                <span class="class-badge">Class ${i}</span>
                                <div class="txt">${day[`c${i}`]}</div>
                            </div>`;
                    }
                }

                html += `
                    <div class="day-card" id="day-${index}">
                        <div class="day-header">
                            <div class="checkbox-wrapper" style="margin-right:15px; text-align:center; min-width:40px;">
                                <button class="chapter-checkbox ${checkClass}" 
                                    data-id="${chapterId}" 
                                    data-status="${isDone ? 'done' : 'pending'}"
                                    onclick="event.stopPropagation(); App.confirmToggle('${chapterId}', '${subject.name}', this)"
                                    style="background:none; border:none; font-size:1.8rem; color:${subject.color}; cursor:pointer;">
                                    <i class="fas ${checkIcon}"></i>
                                </button>
                                ${markedByText}
                            </div>
                            <div class="day-title-box" style="flex:1" onclick="App.toggleCard('day-${index}')">
                                <span class="day-tag">${day.day}</span>
                                <h3>${day.topic}</h3>
                            </div>
                            <div class="toggle-icon" onclick="App.toggleCard('day-${index}')"><i class="fas fa-chevron-down"></i></div>
                        </div>
                        <div class="day-body">
                            <div class="bb-board">
                                <div class="bb-title">Blackboard Tip</div>
                                <div class="bb-text">${day.board ? day.board.replace(/\n/g, "<br>") : "No tips."}</div>
                            </div>
                            <div class="class-stack">${classContentHTML}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            html += `<div style="text-align:center;padding:20px;">No content added.</div>`;
        }
        html += `</div><div class="spacer-bottom"></div>`;

        contentArea.innerHTML = html;
        this.updateProgressBar();
        window.scrollTo(0, 0);
    },

    // =========================================
    // ANALYTICS MODULE
    // =========================================
    renderAnalyticsHome: function (pushState = true) {
        if (pushState) history.pushState({ page: 'analytics_home' }, null, "");
        const container = document.getElementById("app-root");

        let html = `
            <header class="app-header">
                <button class="back-btn" onclick="App.renderLandingPage()"><i class="fas fa-arrow-left"></i></button>
                <div class="brand-logo">Reports</div>
                <div></div>
            </header>
            <main class="dashboard-container fade-in">
                <div class="analytics-header">
                    <h2>Syllabus Tracker</h2>
                    <p>Select a Group</p>
                </div>
                <div class="class-group-grid">
        `;
        for (const [key, group] of Object.entries(masterData)) {
            html += `
                <div class="class-card ${group.theme}" onclick="App.renderAnalyticsSubjects('${key}')">
                    <div class="card-icon-wrapper"><i class="fas fa-chart-pie"></i></div>
                    <div class="card-text">
                        <h2>${group.title}</h2>
                        <p>View Reports</p>
                    </div>
                    <div class="arrow-icon"><i class="fas fa-chevron-right"></i></div>
                </div>`;
        }
        html += `</div></main>`;
        container.innerHTML = html;
    },

    renderAnalyticsSubjects: function (groupKey, pushState = true) {
        if (pushState) history.pushState({ page: 'analytics_subj', group: groupKey }, null, "");
        const container = document.getElementById("app-root");
        const group = masterData[groupKey];

        let html = `
            <header class="app-header">
                <button class="back-btn" onclick="App.renderAnalyticsHome()"><i class="fas fa-arrow-left"></i></button>
                <div class="brand-logo">${group.title} Reports</div>
                <div></div>
            </header>
            <main class="dashboard-container fade-in">
                <div class="subject-grid">
        `;
        for (const [subjKey, subject] of Object.entries(group.subjects)) {
            html += `
                <div class="subject-card" style="border-top: 4px solid ${subject.color}" onclick="App.renderAnalyticsStats('${groupKey}', '${subjKey}')">
                    <div class="subject-icon-box" style="color: ${subject.color}; background:#f3f4f6;">
                        <i class="fas ${subject.icon}"></i>
                    </div>
                    <h3>${subject.name}</h3>
                    <span class="unit-badge">View Report</span>
                </div>`;
        }
        html += `</div></main>`;
        container.innerHTML = html;
    },

    renderAnalyticsStats: function (groupKey, subjKey) {
        // Analytics Modal/Page Logic (Simple overlay for now or new page)
        // Re-using the logic you provided
        const container = document.getElementById("app-root");
        const group = masterData[groupKey];
        const subject = group.subjects[subjKey];

        let totalChapters = 0;
        let completedCount = 0;
        let teacherStats = {};

        for (const [unitKey, unit] of Object.entries(subject.units)) {
            if (unit.days) {
                unit.days.forEach((day, index) => {
                    totalChapters++;
                    const chapterId = `${groupKey}_${subjKey}_${unitKey}_d${index}`;
                    const record = DataService.getStatus(chapterId);
                    if (record && record.status === "done") {
                        completedCount++;
                        const teacherName = record.by || "Unknown";
                        if (!teacherStats[teacherName]) teacherStats[teacherName] = 0;
                        teacherStats[teacherName]++;
                    }
                });
            }
        }
        const pendingCount = totalChapters - completedCount;

        // Generate Chart HTML
        let barHTML = "";
        let legendHTML = "";
        let colorIndex = 0;

        for (const [teacher, count] of Object.entries(teacherStats)) {
            const percent = Math.round((count / totalChapters) * 100);
            if (percent > 0) {
                barHTML += `<div class="stack-segment color-${colorIndex % 4}" style="width:${percent}%">${percent}%</div>`;
                legendHTML += `
                    <div class="legend-item">
                        <div class="dot color-${colorIndex % 4}"></div>
                        <strong>${teacher}:</strong> &nbsp; ${count} Chapters
                    </div>`;
                colorIndex++;
            }
        }
        const pendingPercent = Math.round((pendingCount / totalChapters) * 100);
        if (pendingPercent > 0) {
            barHTML += `<div class="stack-segment color-rem" style="width:${pendingPercent}%">Pending</div>`;
        }

        let html = `
            <header class="app-header">
                <button class="back-btn" onclick="App.renderAnalyticsSubjects('${groupKey}')"><i class="fas fa-arrow-left"></i></button>
                <div class="brand-logo" style="color:${subject.color}">${subject.name} Analysis</div>
                <div></div>
            </header>
            <main class="dashboard-container fade-up">
                <div class="analytics-card">
                    <h3 style="margin:0 0 10px 0;">Total Coverage</h3>
                    <h1 style="font-size:3rem; margin:0; color:${subject.color}">${Math.round((completedCount / totalChapters) * 100)}%</h1>
                    <div class="stacked-bar-container">${barHTML}</div>
                    <div class="chart-legend">${legendHTML}</div>
                </div>
                <div class="analytics-card">
                    <h3>Contributions</h3>
                    <ul style="padding-left:20px;">
                        ${Object.entries(teacherStats).map(([name, count]) => `<li><b>${name}</b>: ${count} topics.</li>`).join('')}
                    </ul>
                </div>
            </main>
        `;
        container.innerHTML = html;
    },

    // =========================================
    // UTILITIES
    // =========================================
    openModal: function () {
        history.pushState({ page: 'modal' }, null, "");
        const modal = document.getElementById("syllabusModal");
        document.getElementById("modalBodyContent").innerHTML = this.currentModalContent;
        modal.classList.add("show");
    },

    closeModal: function () {
        this.closeAllModals(true);
    },

    toggleSidebar: function (force) {
        const sb = document.getElementById("sidebar");
        const ov = document.getElementById("overlay");

        if (!sb.classList.contains("active")) {
            history.pushState({ page: 'sidebar' }, null, "");
            sb.classList.add("active");
            ov.classList.add("active");
        } else {
            sb.classList.remove("active");
            ov.classList.remove("active");
            // Note: We rely on history.back() mostly, but if clicked X, we just remove classes
            // In a perfect world, we'd check if we should popstate, but this is safe enough.
        }
    },

    toggleCard: function (id) {
        document.getElementById(id).classList.toggle("open");
    },

    attachGlobalListeners: function () {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) this.toggleSidebar(false);
        });
        window.onclick = function (e) {
            const modal = document.getElementById("syllabusModal");
            if (e.target == modal) App.closeModal();
        }
    }
};


document.addEventListener("DOMContentLoaded", () => App.init());
