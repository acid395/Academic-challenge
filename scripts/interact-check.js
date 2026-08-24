#!/usr/bin/env node
"use strict";
const { chromium } = require("playwright");
const path = require("path");

const BASE = process.env.BASE_URL || "http://localhost:8080";
const OUT = path.join(__dirname, "..", "screenshots");

(async () => {
  const browser = await chromium.launch();

  // Desktop: hover + keyboard dropdown
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(BASE + "/index.html");
  await desktop.hover("li.has-dropdown:has-text('Programs') .nav-link");
  await desktop.waitForTimeout(200);
  await desktop.screenshot({ path: path.join(OUT, "check_desktop_hover_dropdown.png") });

  // keyboard: tab to Programs toggle button, press Enter to open
  await desktop.click("body");
  const toggle = desktop.locator("li.has-dropdown:has-text('Team') .dropdown-toggle");
  await toggle.focus();
  await toggle.press("Enter");
  const expanded = await toggle.getAttribute("aria-expanded");
  console.log("Team dropdown toggle aria-expanded after Enter:", expanded);
  await desktop.screenshot({ path: path.join(OUT, "check_desktop_keyboard_dropdown.png") });
  await toggle.press("Escape");
  const expandedAfterEsc = await toggle.getAttribute("aria-expanded");
  console.log("Team dropdown toggle aria-expanded after Escape:", expandedAfterEsc);

  await desktop.close();

  // Mobile: hamburger toggle + dropdown tap
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(BASE + "/index.html");
  await mobile.click(".nav-toggle");
  await mobile.waitForTimeout(150);
  await mobile.screenshot({ path: path.join(OUT, "check_mobile_nav_open.png") });
  const navOpen = await mobile.locator("#site-nav").evaluate((el) => el.classList.contains("nav-open"));
  console.log("Mobile nav open after tap:", navOpen);

  await mobile.click("li.has-dropdown:has-text('Programs') .dropdown-toggle");
  await mobile.waitForTimeout(150);
  await mobile.screenshot({ path: path.join(OUT, "check_mobile_dropdown_open.png") });
  const programsExpanded = await mobile
    .locator("li.has-dropdown:has-text('Programs') .dropdown-toggle")
    .getAttribute("aria-expanded");
  console.log("Mobile Programs dropdown aria-expanded:", programsExpanded);

  // click a program link inside the open dropdown -> should navigate
  await mobile.click("li.has-dropdown:has-text('Programs') .dropdown-menu a:has-text('Quiz Bowl')");
  await mobile.waitForLoadState("networkidle");
  console.log("Mobile: navigated to", mobile.url());

  await mobile.close();

  // In-page index click-to-scroll + scroll spy on program page
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + "/programs/quiz-bowl.html");
  await page.click(".page-index-link:has-text('Captains')");
  await page.waitForTimeout(900);
  const current = await page.locator('.page-index-link[aria-current="true"]').textContent();
  console.log("Page-index current after clicking Captains:", current.trim());
  await page.screenshot({ path: path.join(OUT, "check_pageindex_scrolled.png") });
  await page.close();

  await browser.close();
  console.log("Interaction check done.");
})();
