// Brownstone offline support: the page, its script and style files, icons and fonts are saved so it
// works on the subway. Strategy: load the latest page when online, fall back to the saved copy when
// offline. Script and style files have content-hashed names, so a saved copy is always correct.
// The build (scripts/sw-manifest.mjs) fills in BUILD and ASSETS with this release's files.
const BUILD = "ccc581755f";
const ASSETS = ["./assets/Attempts-8udGuTbr.js","./assets/BackNav-CO26cIu9.js","./assets/Block3D-CAZi2TJV.js","./assets/Blocks-9If_-tFE.js","./assets/Boards-Qfn2MGv2.js","./assets/Building-FMbUe9l-.js","./assets/Checks-TYaepz2s.js","./assets/CopyShader-BzTUYzf6.js","./assets/Course-Bp3JuDDl.js","./assets/CourseTrack-cbcyAcql.js","./assets/Cram-DO8PmTfU.js","./assets/EffectComposer-BEUVpNS7.js","./assets/Exhibits-SLf-YoKv.js","./assets/Glossary-DgqX18-x.js","./assets/Home-CC0zusom.js","./assets/InstallApp-CYuhd0WR.js","./assets/Interior-DPZgj7L_.js","./assets/Journey-DzXRKOHO.js","./assets/LabShell-bmipW9HF.js","./assets/Landing-BWwJw3gM.js","./assets/LandmarkSvg-C2hzJkgr.js","./assets/Lesson-Biqsg6Lv.js","./assets/MathLab-B1XGZS6Z.js","./assets/Md-CAWVVgCO.js","./assets/Notebook-rmSwz1Tm.js","./assets/OutputPass-C3ntBUNJ.js","./assets/PageHead-CTlBy3ty.js","./assets/Pass-CxS7z_TP.js","./assets/Plan-CWZ9ViXi.js","./assets/Progress-Lb2fB_tH.js","./assets/Quiz-CzWdwEm6.js","./assets/RenderPass-BQ4QctOQ.js","./assets/Roleplay-qWuR9_uA.js","./assets/Tutor-BTWiuU-T.js","./assets/UnrealBloomPass-V1oPSVAW.js","./assets/Whiteboard-F0ETYf9N.js","./assets/account-CH10NIKW.js","./assets/ai-BRfJL60d.js","./assets/answer-fPmqZUgY.js","./assets/boot-app-CF3kn1dT.js","./assets/cast-CUE-J10C.js","./assets/cityView-Bwz5V5_i.js","./assets/client-DKYtYCFH.js","./assets/course-B-OXNH6A.js","./assets/course-C6sYQKoH.json","./assets/course-source-BgTQN3DJ.js","./assets/dwell-BX6b2EgC.js","./assets/estate-timeline.lab-DJ_3-noZ.js","./assets/fasttrack-OiCbpHU-.js","./assets/highlight-tGg07cIv.js","./assets/index-BDSLo_6j.js","./assets/index-BebAnkKh.js","./assets/index-DPibaKUS.js","./assets/index-DuErVCKP.js","./assets/index-pBWW9LYY.js","./assets/journey-CFqBQe3s.js","./assets/kit-McuusFoM.js","./assets/landing-BKZ0ukmT.js","./assets/landmarks-DFj_sSln.js","./assets/preload-helper-Ct5FWWRu.js","./assets/route-D8yf0UTD.js","./assets/router-CR-VRX5j.js","./assets/runtime-D77cMMod.js","./assets/s01-dos-hearing.lab-B1qKks4M.js","./assets/s01-license-street.lab-HlOIYPpU.js","./assets/s02-agency-ends.lab-B-MbAjeW.js","./assets/s02-agency-forms.lab-U229H3I1.js","./assets/s02-agency-map.lab-D0MD_P24.js","./assets/s02-contractor-machine.lab-goIDReHh.js","./assets/s02-dual-agency.lab-DuitV1Zq.js","./assets/s02-first-contact.lab-I9ACpqy4.js","./assets/s02-oldcar-shields.lab-VJR46Ml0.js","./assets/s03-bundle-of-rights.lab-GQaAEdVU.js","./assets/s03-closing-ledger.lab-DXXz7OV2.js","./assets/s03-coownership-facade.lab-BZv7Bra_.js","./assets/s03-deed-shields.lab-Bsmn24LE.js","./assets/s03-easement-plat.lab-BrNIQqmA.js","./assets/s03-lien-waterfall.lab-BipBZoPh.js","./assets/s03-title-chain.lab-Ck53a2XQ.js","./assets/s03-transfers-without-sale.lab-B4U4DtV_.js","./assets/s04-contract-machine.lab-BgV0JDao.js","./assets/s04-lease-scroll.lab-BOsVO97U.js","./assets/s04-upstate-downstate.lab-BnMXtr7k.js","./assets/s05-loan-river.lab-DBebwY_B.js","./assets/s05-mortgage-machine.lab-B4x3oLBn.js","./assets/s05-underwriter-desk.lab-BEcdzDNN.js","./assets/s06-pete-hands.lab-DqH9x4h2.js","./assets/s06-zoning-board.lab-DOIjs0TG.js","./assets/s07-flashlight.lab-Dxz2mU9W.js","./assets/s07-house-build.lab-D5QZWpPf.js","./assets/s07-lot-liability.lab-CQONf2Ks.js","./assets/s07-xray-systems.lab-BqySicr8.js","./assets/s08-cma-magnets.lab-4P2q3d_3.js","./assets/s08-three-lenses.lab-BDEoB_36.js","./assets/s09-agent-day.lab-BKHRmclb.js","./assets/s09-history-walk.lab-B_VEjaLO.js","./assets/s09-red-pen-desk.lab-BgrgGIUx.js","./assets/s09-wider-net.lab-BhZjjspR.js","./assets/s10-commission-waterfall.lab-BEnSDTi1.js","./assets/s10-measure-the-lot.lab-xvlOXOFO.js","./assets/s11-agency-subway.lab-U8pGNDZf.js","./assets/s11-town-hall.lab-C8u73ZKR.js","./assets/s12-storm-house.lab-B0Xa8nSa.js","./assets/s13-showing-day.lab-Cny2LCX2.js","./assets/s14-grievance-day.lab-OUrBXGze.js","./assets/s14-tax-machine.lab-NXth6fvP.js","./assets/s15-board-room.lab-RNRd6KNn.js","./assets/s15-condo-cutaway.lab-dMTyaSly.js","./assets/s15-offering-binder.lab-uwUo2dTA.js","./assets/s16-city-block.lab-BY61tmx4.js","./assets/s16-escalations.lab-B3rZhfTt.js","./assets/s16-floor-plate.lab-O5qaOhfb.js","./assets/s16-irv-triangle.lab-C76cK9NZ.js","./assets/s16-leverage-lever.lab-DsE0d0KZ.js","./assets/s16-reconstruct.lab-BXWaU8FE.js","./assets/s17-depreciation-1031.lab-Bd0ihPCP.js","./assets/s17-homeowner-return.lab-CyYm1oyY.js","./assets/s18-broker-banker.lab-CDo51Vmj.js","./assets/s19-agreement-desk.lab-CJT3oist.js","./assets/s19-waterfall.lab-cD5Te6sY.js","./assets/seat-D635HclN.js","./assets/short-BIqpHcFy.js","./assets/stale-DzzeXFwp.js","./assets/style-BzAY3tlJ.css","./assets/three.module-DWjHNCb7.js","./assets/useReadTracker-D5dQ66Je.js","./assets/web-CjNkSk9i.js","./assets/zoom-DmPlP67I.js"];
const CACHE = "brownstone-" + BUILD;
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
  // this release's files (scripts, styles, the course), icons, manifest, fonts: cache first
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok || res.type === "opaque") c.put(req, res.clone());
    return res;
  }));
});
