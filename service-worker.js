const CACHE = "tse-v2";

const FILES = [
  "./",
  "./index.html",
  "./manifest.json",

  // tous tes pdf
  "./topexosph.pdf",
  "./topexoschimie.pdf",
  "./cahph.pdf",
  "./cahch.pdf",
  "./nc.pdf",
  "./ar.pdf",
  "./tc.pdf",
  "./aa.pdf",
  "./pg.pdf",
  "./ac.pdf",
  "./sa.pdf",
  "./al.pdf",
  "./am.pdf",
  "./cem.pdf",
  "./pr.pdf",
  "./fn.pdf",
  "./fl.pdf",
  "./fe.pdf",
  "./pi.pdf",
  "./sn.pdf",
  "./co.pdf",
  "./ph.pdf",
  "./af.pdf",
  "./pro.pdf",
  "./su.pdf",
  "./sj.pdf"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE && caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
