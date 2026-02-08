const CACHE_NAME = 'sgs-app-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './api.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Mukta:wght@300;400;500;600;700;800&family=Teko:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 1. INSTALL EVENT (Filon ko Cache me daalo)
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 🔥 नया सर्विस वर्कर तुरंत एक्टिवेट होगा
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. ACTIVATE EVENT (Purana Cache saaf karo)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // 🔥 सभी टैब्स को तुरंत कंट्रोल में लेगा
});

// 3. FETCH EVENT (Internet nahi to Cache se dikhao)
self.addEventListener('fetch', (event) => {
  // Sirf API calls ko abhi network se hi jaane do (Data baad me handle karenge)
  if (event.request.url.includes('script.google.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Agar Cache me file mili to wahi de do, nahi to Internet se lao
      return response || fetch(event.request);
    })
  );
});