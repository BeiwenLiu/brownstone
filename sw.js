// Brownstone offline support: the page, its script and style files, icons and fonts are saved so it
// works on the subway. Strategy: load the latest page when online, fall back to the saved copy when
// offline. Script and style files have content-hashed names, so a saved copy is always correct.
// The build (scripts/sw-manifest.mjs) fills in BUILD and ASSETS with this release's files.
const BUILD = "d7b5d8ba51";
const ASSETS = ["./assets/Attempts-BtbFnff4.js","./assets/BackNav-B_nUimkD.js","./assets/Block3D-BMYPJiz6.js","./assets/Blocks-CkpZW0IO.js","./assets/Boards-BeX6tHnx.js","./assets/Building-D8d03Lsb.js","./assets/Checks-B3kgNaT_.js","./assets/CopyShader-BzTUYzf6.js","./assets/Course-DZwIBi9o.js","./assets/CourseTrack-BxeQBVLe.js","./assets/Cram-CHvrdTec.js","./assets/EffectComposer-DQVlWrAF.js","./assets/Exhibits-B_rfpC0k.js","./assets/Glossary-DhHCeAA-.js","./assets/Home-CSzeyZGr.js","./assets/InstallApp-DUxLCqS_.js","./assets/Interior-Bv62lxwO.js","./assets/Journey-D0gKDAXR.js","./assets/LabShell-crZZWMYa.js","./assets/Landing-Dy70Ofpp.js","./assets/LandmarkSvg-C2hzJkgr.js","./assets/Lesson-CloobwNo.js","./assets/MathLab-DJHukk1A.js","./assets/Md-CAWVVgCO.js","./assets/Notebook-DeIRdv1B.js","./assets/OutputPass-CCSo753r.js","./assets/PageHead-D_fkvk8y.js","./assets/Pass-CUk4xrth.js","./assets/Plan-7Kh-NC6T.js","./assets/Progress-D35XvkKv.js","./assets/Quiz-BEcydDOO.js","./assets/RenderPass-CnXjCefx.js","./assets/Roleplay-hxyAJwut.js","./assets/Tutor-DXL89ICY.js","./assets/UnrealBloomPass-BiTxdvTJ.js","./assets/Whiteboard-DPwcMBNX.js","./assets/account-C9wAx9JE.js","./assets/ai-BRfJL60d.js","./assets/answer-Cz2NVto4.js","./assets/boot-app-CmMNVOLU.js","./assets/cast-CUE-J10C.js","./assets/cityView-C1zZqdC-.js","./assets/client-DKYtYCFH.js","./assets/course-BRkNghuo.json","./assets/course-BTf9DMx4.js","./assets/course-source-DU2QqBON.js","./assets/dwell-BX6b2EgC.js","./assets/estate-timeline.lab-DJ_3-noZ.js","./assets/fasttrack-wiwROaBV.js","./assets/highlight-tGg07cIv.js","./assets/index-BDSLo_6j.js","./assets/index-CiFKNFoN.js","./assets/index-DPibaKUS.js","./assets/index-DuErVCKP.js","./assets/index-pBWW9LYY.js","./assets/journey-BbWTEfks.js","./assets/kit-McuusFoM.js","./assets/landing-BKZ0ukmT.js","./assets/landmarks-DFj_sSln.js","./assets/preload-helper-Ct5FWWRu.js","./assets/route-BgM3KVFx.js","./assets/router-CR-VRX5j.js","./assets/runtime-D77cMMod.js","./assets/s01-dos-hearing.lab-B1qKks4M.js","./assets/s01-license-street.lab-HlOIYPpU.js","./assets/s02-agency-ends.lab-B-MbAjeW.js","./assets/s02-agency-forms.lab-U229H3I1.js","./assets/s02-agency-map.lab-D0MD_P24.js","./assets/s02-contractor-machine.lab-goIDReHh.js","./assets/s02-dual-agency.lab-DuitV1Zq.js","./assets/s02-first-contact.lab-I9ACpqy4.js","./assets/s02-oldcar-shields.lab-VJR46Ml0.js","./assets/s03-bundle-of-rights.lab-GQaAEdVU.js","./assets/s03-closing-ledger.lab-DXXz7OV2.js","./assets/s03-coownership-facade.lab-BZv7Bra_.js","./assets/s03-deed-shields.lab-Bsmn24LE.js","./assets/s03-easement-plat.lab-BrNIQqmA.js","./assets/s03-lien-waterfall.lab-BipBZoPh.js","./assets/s03-title-chain.lab-Ck53a2XQ.js","./assets/s03-transfers-without-sale.lab-B4U4DtV_.js","./assets/s04-contract-machine.lab-BgV0JDao.js","./assets/s04-lease-scroll.lab-BOsVO97U.js","./assets/s04-upstate-downstate.lab-BnMXtr7k.js","./assets/s05-loan-river.lab-DBebwY_B.js","./assets/s05-mortgage-machine.lab-B4x3oLBn.js","./assets/s05-underwriter-desk.lab-BEcdzDNN.js","./assets/s06-pete-hands.lab-DqH9x4h2.js","./assets/s06-zoning-board.lab-DOIjs0TG.js","./assets/s07-flashlight.lab-Dxz2mU9W.js","./assets/s07-house-build.lab-D5QZWpPf.js","./assets/s07-lot-liability.lab-CQONf2Ks.js","./assets/s07-xray-systems.lab-BqySicr8.js","./assets/s08-cma-magnets.lab-4P2q3d_3.js","./assets/s08-three-lenses.lab-BDEoB_36.js","./assets/s09-agent-day.lab-BKHRmclb.js","./assets/s09-history-walk.lab-B_VEjaLO.js","./assets/s09-red-pen-desk.lab-BgrgGIUx.js","./assets/s09-wider-net.lab-BhZjjspR.js","./assets/s10-commission-waterfall.lab-BEnSDTi1.js","./assets/s10-measure-the-lot.lab-xvlOXOFO.js","./assets/s11-agency-subway.lab-U8pGNDZf.js","./assets/s11-town-hall.lab-C8u73ZKR.js","./assets/s12-storm-house.lab-B0Xa8nSa.js","./assets/s13-showing-day.lab-Cny2LCX2.js","./assets/s14-grievance-day.lab-OUrBXGze.js","./assets/s14-tax-machine.lab-NXth6fvP.js","./assets/s15-board-room.lab-RNRd6KNn.js","./assets/s15-condo-cutaway.lab-dMTyaSly.js","./assets/s15-offering-binder.lab-uwUo2dTA.js","./assets/s16-city-block.lab-BY61tmx4.js","./assets/s16-escalations.lab-B3rZhfTt.js","./assets/s16-floor-plate.lab-O5qaOhfb.js","./assets/s16-irv-triangle.lab-C76cK9NZ.js","./assets/s16-leverage-lever.lab-DsE0d0KZ.js","./assets/s16-reconstruct.lab-BXWaU8FE.js","./assets/s17-depreciation-1031.lab-Bd0ihPCP.js","./assets/s17-homeowner-return.lab-CyYm1oyY.js","./assets/s18-broker-banker.lab-CDo51Vmj.js","./assets/s19-agreement-desk.lab-CJT3oist.js","./assets/s19-waterfall.lab-cD5Te6sY.js","./assets/seat-ChIKQaUa.js","./assets/short-BIqpHcFy.js","./assets/stale-DzzeXFwp.js","./assets/style-Boxhs885.css","./assets/three.module-CkH-wQNC.js","./assets/useReadTracker-SGbSLTT7.js","./assets/web-CjNkSk9i.js","./assets/zoom-h-4DPE-1.js"];
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
