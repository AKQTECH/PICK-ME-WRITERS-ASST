const CACHE_NAME = 'pick-me-v3';
const urlsToCache = [
  '/PICK-ME-WRITERS-ASST/',
  '/PICK-ME-WRITERS-ASST/index.html',
  '/PICK-ME-WRITERS-ASST/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('/PICK-ME-WRITERS-ASST/index.html');
    })
  );
});
