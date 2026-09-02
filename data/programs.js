// ---------------------------------------------------------------------------
// PROGRAMS. Each program is now its own file in data/programs/<slug>.json so
// the /admin CMS can edit and add them; this loader reads that folder and
// returns the array the rest of the site expects.
//
// Ordering: each file has an integer `order` field (1, 2, 3 …). It controls
// where the program appears in the nav, dropdowns, footer sitemap, home page
// list, and the prev/next links on program pages. To reorder, change the
// `order` numbers (or use the admin panel's "Sort order" field).
//
// To add a program: add data/programs/<slug>.json with the same shape as the
// others (or click "New Program" in the admin panel). Nothing else needs
// editing — every nav/dropdown/sitemap/pager entry is derived from this list.
// ---------------------------------------------------------------------------
"use strict";
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "programs");

module.exports = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
  .sort((a, b) => a.order - b.order);
