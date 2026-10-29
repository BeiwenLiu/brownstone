// Brownstone offline support: the page, its script and style files, icons and fonts are saved so it
// works on the subway. Strategy: load the latest page when online, fall back to the saved copy when
// offline. Script and style files have content-hashed names, so a saved copy is always correct.
// The build (scripts/sw-manifest.mjs) fills in BUILD and ASSETS with this release's files.
const BUILD = "fa0409eb0a";
const ASSETS = ["./assets/Block3D-DLLhgn3V.js","./assets/Landing-C140sjZF.js","./assets/boot-app-B9W5VK8s.js","./assets/index-BQrXc04a.js","./assets/style-CUEJXaFG.css","./assets/web-BiqizIG7.js"];
const CACHE = "brownstone-" + BUILD;
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", ...ASSETS];

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
    // the app page: always the latest version when online (an email link must never open an old
    // copy), the saved copy when offline or the network is too slow to wait for.
    e.respondWith(caches.open(CACHE).then(async (c) => {
      const fresh = fetch(req, { cache: "no-cache" }).then(async (res) => { if (res.ok) await c.put("./index.html", res.clone()); return res; });
      const slow = new Promise((r) => setTimeout(r, url.search.includes("auth=") ? 15000 : 3500));
      const res = await Promise.race([fresh.catch(() => null), slow]);
      if (res) return res;
      return (await c.match("./index.html")) || fresh;
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
