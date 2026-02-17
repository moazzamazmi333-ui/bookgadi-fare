// sw.js - Minimal for PWA install prompt
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://www.bookgadi.com/driver')); 
});

console.log('BookGadi Service Worker ready!');
