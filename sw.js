// Files to cache
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
  '/static/app.js'
];

const contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });