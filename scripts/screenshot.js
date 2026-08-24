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
      await page.screenshot({ path: path.join(OUT, `${name}_${width}.png`), fullPage: true });
      if (consoleErrors.length) console.log(`[console errors] ${p} @ ${width}:`, consoleErrors);
      await page.close();
    }
  }
  await browser.close();
  console.log("Done. Screenshots in", OUT);
})();
