// Brownstone offline support. The whole app is one HTML file, so caching it (plus the icons and fonts)
// makes it work on the subway. Strategy: serve the cached app instantly, fetch a fresh copy in the
// background, and tell the page when a newer version is ready.
const CACHE = "brownstone-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const isApp = (url) => url.origin === self.location.origin;
const isFont = (url) => url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (!isApp(url) && !isFont(url)) return; // accounts, sync and everything else go straight to the network

  if (req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html")) {
    // the app page: cached copy now, fresh copy for next time
    e.respondWith(caches.open(CACHE).then(async (c) => {
      const cached = await c.match("./index.html");
      const fresh = fetch(req).then(async (res) => {
        if (res.ok) {
          const prev = cached ? await cached.clone().text() : "";
          const next = await res.clone().text();
          await c.put("./index.html", res.clone());
          if (prev && prev !== next) (await self.clients.matchAll()).forEach((cl) => cl.postMessage({ type: "update-ready" }));
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    }));
    return;
  }
  // icons, manifest, fonts: cache first
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok || res.type === "opaque") c.put(req, res.clone());
    return res;
  }));
});
