self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('multiplication-game').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/script.js',
        '/styles.css',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/sounds/correct.mp3',
        '/sounds/wrong.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});