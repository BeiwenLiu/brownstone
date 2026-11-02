// Brownstone offline support: the page, its script and style files, icons and fonts are saved so it
// works on the subway. Strategy: load the latest page when online, fall back to the saved copy when
// offline. Script and style files have content-hashed names, so a saved copy is always correct.
// The build (scripts/sw-manifest.mjs) fills in BUILD and ASSETS with this release's files.
const BUILD = "32f6f3774d";
const ASSETS = ["./assets/Attempts-BTp9g4yA.js","./assets/BackNav-CxLdvpfb.js","./assets/Block3D-BMYPJiz6.js","./assets/Blocks-DYL-r2DW.js","./assets/Boards-Dpvv9r2i.js","./assets/Building-hCr6DXOH.js","./assets/Checks-fXz9HRvY.js","./assets/CopyShader-BzTUYzf6.js","./assets/Course-CuwRiKtd.js","./assets/CourseTrack-DUjxT8vX.js","./assets/Cram-t9tf2UgJ.js","./assets/EffectComposer-DQVlWrAF.js","./assets/Exhibits-B8HyaAHu.js","./assets/Glossary-DpbNH620.js","./assets/Home-B7t8Jq-0.js","./assets/InstallApp-CjF-Ozfh.js","./assets/Interior-BMqyhtbr.js","./assets/Journey-BU3_It3x.js","./assets/LabShell-BxERmXsr.js","./assets/Landing-CPqIL6xl.js","./assets/LandmarkSvg-C2hzJkgr.js","./assets/Lesson-YBSEuGxH.js","./assets/MathLab-B6j2YdOl.js","./assets/Md-CAWVVgCO.js","./assets/Notebook-nvlGat7S.js","./assets/OutputPass-CCSo753r.js","./assets/PageHead-BVHV0QAd.js","./assets/Pass-CUk4xrth.js","./assets/Plan-B8Uf1HYH.js","./assets/Progress-DPDJie5O.js","./assets/Quiz-GZ4A4uz8.js","./assets/RenderPass-CnXjCefx.js","./assets/Roleplay-C49uqg6z.js","./assets/Tutor-CxJaUyVh.js","./assets/UnrealBloomPass-BiTxdvTJ.js","./assets/Whiteboard-BGpk0L3J.js","./assets/account-YyQqh4PU.js","./assets/ai-BRfJL60d.js","./assets/answer--IakRN9g.js","./assets/boot-app-DI5ee_2W.js","./assets/cast-CUE-J10C.js","./assets/cityView-D4NDIVuY.js","./assets/client-DKYtYCFH.js","./assets/course-BA2M18qL.json","./assets/course-WYleBdvz.js","./assets/course-source-DIJMODi9.js","./assets/dwell-BX6b2EgC.js","./assets/estate-timeline.lab-DJ_3-noZ.js","./assets/fasttrack-CW9Ir7Bp.js","./assets/highlight-tGg07cIv.js","./assets/index-BDSLo_6j.js","./assets/index-DPibaKUS.js","./assets/index-DuErVCKP.js","./assets/index-ndpuXvCj.js","./assets/index-pBWW9LYY.js","./assets/journey-DLR72XrR.js","./assets/kit-McuusFoM.js","./assets/landing-BKZ0ukmT.js","./assets/landmarks-DFj_sSln.js","./assets/preload-helper-Ct5FWWRu.js","./assets/route-CBbD2Np6.js","./assets/router-CR-VRX5j.js","./assets/runtime-D77cMMod.js","./assets/s01-dos-hearing.lab-B1qKks4M.js","./assets/s01-license-street.lab-HlOIYPpU.js","./assets/s02-agency-ends.lab-B-MbAjeW.js","./assets/s02-agency-forms.lab-U229H3I1.js","./assets/s02-agency-map.lab-D0MD_P24.js","./assets/s02-contractor-machine.lab-goIDReHh.js","./assets/s02-dual-agency.lab-DuitV1Zq.js","./assets/s02-first-contact.lab-I9ACpqy4.js","./assets/s02-oldcar-shields.lab-VJR46Ml0.js","./assets/s03-bundle-of-rights.lab-GQaAEdVU.js","./assets/s03-closing-ledger.lab-DXXz7OV2.js","./assets/s03-coownership-facade.lab-BZv7Bra_.js","./assets/s03-deed-shields.lab-Bsmn24LE.js","./assets/s03-easement-plat.lab-BrNIQqmA.js","./assets/s03-lien-waterfall.lab-BipBZoPh.js","./assets/s03-title-chain.lab-Ck53a2XQ.js","./assets/s03-transfers-without-sale.lab-B4U4DtV_.js","./assets/s04-contract-machine.lab-BgV0JDao.js","./assets/s04-lease-scroll.lab-BOsVO97U.js","./assets/s04-upstate-downstate.lab-BnMXtr7k.js","./assets/s05-loan-river.lab-DBebwY_B.js","./assets/s05-mortgage-machine.lab-B4x3oLBn.js","./assets/s05-underwriter-desk.lab-BEcdzDNN.js","./assets/s06-pete-hands.lab-DqH9x4h2.js","./assets/s06-zoning-board.lab-DOIjs0TG.js","./assets/s07-flashlight.lab-Dxz2mU9W.js","./assets/s07-house-build.lab-D5QZWpPf.js","./assets/s07-lot-liability.lab-CQONf2Ks.js","./assets/s07-xray-systems.lab-BqySicr8.js","./assets/s08-cma-magnets.lab-4P2q3d_3.js","./assets/s08-three-lenses.lab-BDEoB_36.js","./assets/s09-agent-day.lab-BKHRmclb.js","./assets/s09-history-walk.lab-B_VEjaLO.js","./assets/s09-red-pen-desk.lab-BgrgGIUx.js","./assets/s09-wider-net.lab-BhZjjspR.js","./assets/s10-commission-waterfall.lab-BEnSDTi1.js","./assets/s10-measure-the-lot.lab-xvlOXOFO.js","./assets/s11-agency-subway.lab-U8pGNDZf.js","./assets/s11-town-hall.lab-C8u73ZKR.js","./assets/s12-storm-house.lab-B0Xa8nSa.js","./assets/s13-showing-day.lab-Cny2LCX2.js","./assets/s14-grievance-day.lab-OUrBXGze.js","./assets/s14-tax-machine.lab-NXth6fvP.js","./assets/s15-board-room.lab-RNRd6KNn.js","./assets/s15-condo-cutaway.lab-dMTyaSly.js","./assets/s15-offering-binder.lab-uwUo2dTA.js","./assets/s16-city-block.lab-BY61tmx4.js","./assets/s16-escalations.lab-B3rZhfTt.js","./assets/s16-floor-plate.lab-O5qaOhfb.js","./assets/s16-irv-triangle.lab-C76cK9NZ.js","./assets/s16-leverage-lever.lab-DsE0d0KZ.js","./assets/s16-reconstruct.lab-BXWaU8FE.js","./assets/s17-depreciation-1031.lab-Bd0ihPCP.js","./assets/s17-homeowner-return.lab-CyYm1oyY.js","./assets/s18-broker-banker.lab-CDo51Vmj.js","./assets/s19-agreement-desk.lab-CJT3oist.js","./assets/s19-waterfall.lab-cD5Te6sY.js","./assets/seat-DZQToPtM.js","./assets/short-BIqpHcFy.js","./assets/stale-DzzeXFwp.js","./assets/style-D_ITm02m.css","./assets/three.module-CkH-wQNC.js","./assets/useReadTracker-D0Z0gody.js","./assets/web-CjNkSk9i.js","./assets/zoom-jpVL3cr4.js"];
const CACHE = "brownstone-" + BUILD;
// The window views' building data (public/city) rarely changes, so it keeps its own cache across releases.
// Bump the number when scripts/pack-city.mjs output changes.
const CITY = "brownstone-city-1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", ...ASSETS];

// Files in assets/ have content-hashed names, so a file the previous release already saved is
// copied over instead of downloaded again: a release that only changes code doesn't re-download
// the 7 MB course, and one that only changes the course doesn't re-download the code.
const hashed = (u) => u.startsWith("./assets/");
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    const fresh = [];
    for (const u of SHELL) {
      const old = hashed(u) && await caches.match(u);
      if (old) await c.put(u, old); else fresh.push(u);
    }
    await c.addAll(fresh);
  }).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE && k !== CITY).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
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
  // this release's files (scripts, styles, the course), icons, manifest, fonts, the city: cache first
  e.respondWith(caches.open(url.pathname.includes("/city/") ? CITY : CACHE).then(async (c) => {
    const hit = await c.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok || res.type === "opaque") c.put(req, res.clone());
    return res;
  }));
});
