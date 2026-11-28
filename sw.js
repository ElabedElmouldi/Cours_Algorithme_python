const CACHE_NAME = 'cours-algo-python-v3';
const ASSETS = [
  './',
  'index.html',
  'assets/style.css',
  'assets/app.js',
  'manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(resp => {
        return caches.open(CACHE_NAME).then(cache => {
          if (e.request.url.startsWith(self.location.origin)) {
            cache.put(e.request, resp.clone());
          }
          return resp;
        });
      });
    }).catch(() => caches.match('index.html'))
  );
});
