#!/usr/bin/env node
"use strict";
// Screenshot every page passed on argv at 1440px and 390px, saving to
// /Users/vincenthuang/academic-challenge/screenshots/. Run the local
// server first (node scripts/serve.js).
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE = process.env.BASE_URL || "http://localhost:8080";
const OUT = path.join(__dirname, "..", "screenshots");
fs.mkdirSync(OUT, { recursive: true });

const pages = process.argv.slice(2);
if (!pages.length) {
  console.error("Usage: node scripts/screenshot.js /index.html /about.html ...");
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch();
  for (const p of pages) {
    const name = p.replace(/^\//, "").replace(/\//g, "_").replace(/\.html$/, "") || "index";
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const consoleErrors = [];
      page.on("pageerror", (err) => consoleErrors.push(String(err)));
      page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
      await page.goto(BASE + p, { waitUntil: "networkidle" });
      // Walk the page top-to-bottom first so the scroll-reveal effect (see
      // public/js/main.js) has resolved for every section before the
      // fullPage capture — otherwise Playwright's post-load viewport
      // resize can catch lower sections mid-transition.
      await page.evaluate(async () => {
        // behavior: "instant" bypasses the site's `scroll-behavior: smooth`,
        // which otherwise animates each jump and leaves it incomplete by
        // the time the next iteration reads/sets scroll position.
        const step = Math.max(300, window.innerHeight - 100);
        const max = document.scrollingElement.scrollHeight;
        for (let y = 0; y <= max; y += step) {
          window.scrollTo({ top: y, left: 0, behavior: "instant" });
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
      await page.waitForTimeout(200);
      await page.screenshot({ path: path.join(OUT, `${name}_${width}.png`), fullPage: true });
      if (consoleErrors.length) console.log(`[console errors] ${p} @ ${width}:`, consoleErrors);
      await page.close();
    }
  }
  await browser.close();
  console.log("Done. Screenshots in", OUT);
})();
