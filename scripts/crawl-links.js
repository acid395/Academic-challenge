#!/usr/bin/env node
"use strict";
// Crawls every internal link across the built dist/ site (no browser
// needed — parses the static HTML directly) and verifies: the target file
// exists, and any #anchor in the link resolves to a real id in that file's
// HTML. External links (http/https/mailto) are checked for well-formedness
// only, not fetched.
const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "..", "dist");

function listHtmlFiles(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(listHtmlFiles(full));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function extractHrefs(html) {
  const hrefs = [];
  const re = /<a\b[^>]*\shref="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) hrefs.push(m[1]);
  return hrefs;
}

function extractButtonTargets(html) {
  // page-index buttons use data-target="id" (no leading #) for scroll-spy
  const targets = [];
  const re = /<button\b[^>]*\sdata-target="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) targets.push(m[1]);
  return targets;
}

function extractIds(html) {
  const ids = new Set();
  const re = /\bid="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) ids.add(m[1]);
  return ids;
}

function resolveFilePath(href) {
  // root-absolute path like /programs/quiz-bowl.html
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null; // pure anchor on same page
  return path.join(DIST, clean);
}

const files = listHtmlFiles(DIST);
const idCache = new Map();
function idsFor(filePath) {
  if (!idCache.has(filePath)) {
    idCache.set(filePath, fs.existsSync(filePath) ? extractIds(fs.readFileSync(filePath, "utf8")) : null);
  }
  return idCache.get(filePath);
}

let checked = 0;
const failures = [];

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(DIST, file);

  for (const href of extractHrefs(html)) {
    checked++;
    if (href.startsWith("http://") || href.startsWith("https://")) {
      if (!/^https?:\/\/[^\s]+\.[^\s]+/.test(href)) failures.push(`${rel}: malformed external URL "${href}"`);
      continue;
    }
    if (href.startsWith("mailto:")) {
      if (!/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+/.test(href)) failures.push(`${rel}: malformed mailto "${href}"`);
      continue;
    }
    if (href === "" || href === "#") {
      failures.push(`${rel}: dead link href="${href}"`);
      continue;
    }
    if (href.startsWith("#")) {
      const ids = idsFor(file);
      if (!ids || !ids.has(href.slice(1))) failures.push(`${rel}: anchor ${href} not found in same file`);
      continue;
    }
    if (!href.startsWith("/")) {
      failures.push(`${rel}: non-root-relative href "${href}" (expected leading /)`);
      continue;
    }
    const [pathPart, hashPart] = href.split("#");
    const targetFile = resolveFilePath(pathPart);
    if (!fs.existsSync(targetFile)) {
      failures.push(`${rel}: links to missing file "${pathPart}" (href="${href}")`);
      continue;
    }
    if (hashPart) {
      const ids = idsFor(targetFile);
      if (!ids || !ids.has(hashPart)) {
        failures.push(`${rel}: links to ${pathPart}#${hashPart} but that id doesn't exist there`);
      }
    }
  }

  // page-index buttons: data-target must match an id in the same document
  for (const target of extractButtonTargets(html)) {
    checked++;
    const ids = idsFor(file);
    if (!ids || !ids.has(target)) {
      failures.push(`${rel}: page-index data-target="${target}" has no matching id in this document`);
    }
  }
}

console.log(`Checked ${checked} link targets across ${files.length} pages.`);
if (failures.length) {
  console.log(`\n${failures.length} FAILURES:`);
  failures.forEach((f) => console.log(" - " + f));
  process.exit(1);
} else {
  console.log("No broken links or missing anchors found.");
}
