// Responsive screenshot harness.
//
// Boots the dev server if it isn't already running, then captures full-page
// screenshots of each route at a range of mobile/tablet/desktop widths so
// responsive regressions can be eyeballed instead of guessed at.
//
//   npm run shots                 # capture everything
//   SHOT_URL=http://localhost:3000 npm run shots   # target an already-running server
//   SHOT_WIDTHS=768,820 npm run shots              # only these widths
//   SHOT_ROUTES=/ npm run shots                    # only these routes
//
// Output lands in ./screenshots/<route>/<label>.png (gitignored).

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import path from "node:path";

const BASE_URL = (process.env.SHOT_URL || "http://localhost:3000").replace(/\/$/, "");
const OUT_DIR = path.resolve("screenshots");

// Named widths cover the bands that actually break: iPad portrait (768),
// the "large phone / small tablet" 820, the md→lg boundary (1024), and desktop.
const ALL_VIEWPORTS = [
  { label: "mobile-375", width: 375, height: 812 },
  { label: "tablet-768", width: 768, height: 1024 },
  { label: "tablet-820", width: 820, height: 1180 },
  { label: "tablet-land-1024", width: 1024, height: 768 },
  { label: "desktop-1280", width: 1280, height: 800 },
  { label: "desktop-1440", width: 1440, height: 900 },
];

const ALL_ROUTES = [
  { name: "home", path: "/" },
  { name: "terms", path: "/terms" },
];

function filterBy(items, envVar, keyFns) {
  const raw = process.env[envVar];
  if (!raw) return items;
  const wanted = raw.split(",").map((s) => s.trim()).filter(Boolean);
  return items.filter((it) => keyFns.some((fn) => wanted.includes(String(fn(it)))));
}

const viewports = filterBy(ALL_VIEWPORTS, "SHOT_WIDTHS", [
  (v) => v.width,
  (v) => v.label,
]);
const routes = filterBy(ALL_ROUTES, "SHOT_ROUTES", [(r) => r.path, (r) => r.name]);

async function isUp(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    return res.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isUp(url)) return true;
    await sleep(1000);
  }
  return false;
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  // Start the dev server ourselves only if nothing is already serving BASE_URL.
  let serverProc = null;
  if (!(await isUp(BASE_URL))) {
    console.log(`No server on ${BASE_URL} — starting \`npm run dev\`…`);
    serverProc = spawn("npm", ["run", "dev"], {
      stdio: ["ignore", "inherit", "inherit"],
      env: process.env,
    });
    const ready = await waitForServer(BASE_URL);
    if (!ready) {
      serverProc.kill("SIGTERM");
      throw new Error(`Dev server never became reachable at ${BASE_URL}`);
    }
  } else {
    console.log(`Reusing server already running at ${BASE_URL}`);
  }

  const browser = await chromium.launch();
  let count = 0;
  try {
    for (const route of routes) {
      await mkdir(path.join(OUT_DIR, route.name), { recursive: true });
      for (const vp of viewports) {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
          deviceScaleFactor: 2,
          reducedMotion: "reduce", // freeze the animated gradients for stable diffs
        });
        const page = await context.newPage();
        const url = `${BASE_URL}${route.path}`;
        await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
        // Let lazy images / maps settle before the shot.
        await sleep(600);
        const file = path.join(OUT_DIR, route.name, `${vp.label}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`  ✓ ${route.name}  ${vp.label.padEnd(16)} ${url}`);
        count++;
        await context.close();
      }
    }
  } finally {
    await browser.close();
    if (serverProc) serverProc.kill("SIGTERM");
  }

  console.log(`\nDone — ${count} screenshot(s) in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
