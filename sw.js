/* Offline support for the public site (not used on the hosted Claude page).
   - The page itself: network first, so updates arrive; the saved copy is used offline.
   - Scripts, styles and images: saved copy first, fetched and saved on first use.
     Scripts and styles carry ?v=N, so a new version is a new URL; older versions are dropped.
   Bump CACHE (here and OFFLINE_CACHE in js/app.js) if an existing image is replaced
   with a different picture under the same file name. */
const CACHE = 'zg-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('zg-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // YouTube, fonts and thumbnails go straight to the network

  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(req);
        if (res.ok) cache.put('index.html', res.clone());
        return res;
      } catch (e) {
        return (await cache.match('index.html')) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') {
      await cache.put(req, res.clone());
      if (url.search) {
        for (const key of await cache.keys()) {
          const k = new URL(key.url);
          if (k.pathname === url.pathname && k.search !== url.search) cache.delete(key);
        }
      }
    }
    return res;
  })());
});
