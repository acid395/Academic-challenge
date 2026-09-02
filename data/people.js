// ---------------------------------------------------------------------------
// PEOPLE. Every officer, captain, and alumnus is now its own file in
// data/people/<id>.json so the /admin CMS can edit and add them; this loader
// reads that folder and returns the array the rest of the site expects.
//
// Fields per file:
//   order        integer used only to keep a stable listing order (assigned
//                in increments of 10). Rarely needs touching; lower shows
//                first. Roster position within Officers/Captains groups is
//                driven by each role's own `order`, not this one.
//   id           kebab-case, used to build team/people/<id>.html (matches
//                the filename). Don't change it after the page is published.
//   name         display name
//   photo        null / omitted -> renders a styled initials block. Set to a
//                path (e.g. "assets/uploads/member-01.jpg") for a real photo;
//                the admin panel's image picker fills this in.
//   status       "current" | "alumni"
//   classYear    graduating class (alumni only), groups the alumni roster
//   grade        current grade level, e.g. "12" (current members only)
//   email        contact email. By club policy only shown for people who
//                hold a CAPTAIN role. Never set for alumni.
//   discord      Discord handle, same show/hide rule as email.
//   bio          bio paragraph. Omit if none — the section is skipped.
//   roles        array of { type: "officer" | "captain", title, program,
//                order }. `program` (a program slug) is only used for captain
//                roles and drives that program page's Captains section.
//                `order` controls listing order within a roster/group.
//
// To add a person: add data/people/<id>.json (or click "New Person" in the
// admin panel). Their bio page, roster card, and any program-page captain
// listing are all generated from that one record.
// ---------------------------------------------------------------------------
"use strict";
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "people");

module.exports = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
  .sort(
    (a, b) =>
      (a.order ?? Infinity) - (b.order ?? Infinity) ||
      a.name.localeCompare(b.name)
  );
