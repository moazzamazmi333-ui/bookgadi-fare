// sw.js - Minimal for PWA install prompt
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

console.log('BookGadi Service Worker ready!');
