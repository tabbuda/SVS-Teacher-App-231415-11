/* =========================================
   SERVICE WORKER (OFFLINE MODE)
   ========================================= */

const CACHE_NAME = "sgs-app-v2"; // अगर कोड अपडेट करें, तो v2 को v3 कर दें
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./api.js",
    "./data/group1.js",
    "./data/group2.js",
    "./data/group3.js",
    "./icon-192.png",
    "./icon-512.png"
];

// 1. INSTALL EVENT (फाइलें डाउनलोड करें)
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[SW] Caching Assets...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. ACTIVATE EVENT (पुराना Cache हटाएं)
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log("[SW] Removing Old Cache", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. FETCH EVENT (नेट है तो नेट से लो, नहीं तो Cache से)
self.addEventListener("fetch", (event) => {
    
    // Google Sheets API को Cache मत करो (हमेशा लाइव डेटा चाहिए)
    if (event.request.url.includes("script.google.com")) {
        return; // Browser को हैंडल करने दो (Network Only)
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // अगर फाइल Cache में है, तो वहीं से दो
            if (cachedResponse) {
                return cachedResponse;
            }
            // नहीं तो इंटरनेट से लाओ
            return fetch(event.request).catch(() => {
                // अगर इंटरनेट भी नहीं है और फाइल भी नहीं है (Offline Error)
                // आप यहाँ कस्टम Offline Page दिखा सकते हैं (Optional)
            });
        })
    );
});