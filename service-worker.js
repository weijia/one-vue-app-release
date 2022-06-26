importScripts("/precache-manifest.c8c7ad2b21e288e3100e06f54b7e8eb2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Files to cache
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
  // '/static/app.js',
  // '/static/chunk-vendor.js'
];

const contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  // e.waitUntil((async () => {
  //   const cache = await caches.open(cacheName);
  //   console.log('[Service Worker] Caching all: app shell and content');
  //   await cache.addAll(contentToCache);
  // })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });
