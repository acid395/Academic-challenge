#!/usr/bin/env node
"use strict";
// ---------------------------------------------------------------------------
// Static site generator. Reads data/*.js through lib/render.js, runs it
// through lib/templates/*.js, and writes plain HTML into dist/. The
// deployed output is the dist/ folder — drag-and-drop it (or point
// GitHub Pages / Cloudflare Pages at it) to publish.
//
// Usage:
//   node build.js            build every page
//   node build.js --preview  build only home, one program, team index,
//                             and one roster page (used while reviewing
//                             the pattern before generating everything)
// ---------------------------------------------------------------------------
const fs = require("fs");
const path = require("path");
const {
  site,
  programs,
  people,
  urls,
  layout,
} = require("./lib/render.js");

const homeTemplate = require("./lib/templates/home.js");
const aboutTemplate = require("./lib/templates/about.js");
const programsIndexTemplate = require("./lib/templates/programsIndex.js");
const programTemplate = require("./lib/templates/program.js");
const teamIndexTemplate = require("./lib/templates/teamIndex.js");
const officersTemplate = require("./lib/templates/officers.js");
const captainsTemplate = require("./lib/templates/captains.js");
const alumniTemplate = require("./lib/templates/alumni.js");
const personTemplate = require("./lib/templates/person.js");
const contactTemplate = require("./lib/templates/contact.js");

const DIST = path.join(__dirname, "dist");
const PREVIEW = process.argv.includes("--preview");

function write(relPath, html) {
  const fullPath = path.join(DIST, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, html, "utf8");
  console.log("wrote", relPath);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function buildHome() {
  write(
    "index.html",
    layout({
      title: "Home",
      activeKey: "home",
      breadcrumbs: null,
      bodyHtml: homeTemplate(),
    })
  );
}

function buildAbout() {
  write(
    "about.html",
    layout({
      title: "About",
      activeKey: "about",
      breadcrumbs: null,
      bodyHtml: aboutTemplate(),
    })
  );
}

function buildProgramsIndex() {
  write(
    "programs/index.html",
    layout({
      title: "Programs",
      activeKey: "programs",
      breadcrumbs: null,
      bodyHtml: programsIndexTemplate(),
    })
  );
}

function buildProgram(slug) {
  const program = programs.find((p) => p.slug === slug);
  write(
    `programs/${slug}.html`,
    layout({
      title: program.name,
      activeKey: `program:${slug}`,
      breadcrumbs: [
        { label: "Programs", href: urls.programsIndex },
        { label: program.name },
      ],
      bodyHtml: programTemplate(slug),
      pageIndex: programTemplate.sections,
    })
  );
}

function buildTeamIndex() {
  write(
    "team/index.html",
    layout({
      title: "Team",
      activeKey: "team",
      breadcrumbs: null,
      bodyHtml: teamIndexTemplate(),
    })
  );
}

function buildOfficers() {
  write(
    "team/officers.html",
    layout({
      title: "Officers",
      activeKey: "officers",
      breadcrumbs: [{ label: "Team", href: urls.teamIndex }, { label: "Officers" }],
      bodyHtml: officersTemplate(),
    })
  );
}

function buildCaptains() {
  write(
    "team/captains.html",
    layout({
      title: "Captains",
      activeKey: "captains",
      breadcrumbs: [{ label: "Team", href: urls.teamIndex }, { label: "Captains" }],
      bodyHtml: captainsTemplate(),
      pageIndex: captainsTemplate.sections(),
    })
  );
}

function buildAlumni() {
  write(
    "team/alumni.html",
    layout({
      title: "Alumni",
      activeKey: "alumni",
      breadcrumbs: [{ label: "Team", href: urls.teamIndex }, { label: "Alumni" }],
      bodyHtml: alumniTemplate(),
      pageIndex: alumniTemplate.sections(),
    })
  );
}

function buildPerson(id) {
  const person = people.find((p) => p.id === id);
  write(
    `team/people/${id}.html`,
    layout({
      title: person.name,
      activeKey: "team",
      breadcrumbs: [{ label: "Team", href: urls.teamIndex }, { label: person.name }],
      bodyHtml: personTemplate(id, person),
    })
  );
}

function buildContact() {
  write(
    "contact.html",
    layout({
      title: "Contact",
      activeKey: "contact",
      breadcrumbs: null,
      bodyHtml: contactTemplate(),
    })
  );
}

function main() {
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
  copyDir(path.join(__dirname, "public"), DIST);

  buildHome();

  if (PREVIEW) {
    buildProgram(programs[2].slug); // quiz-bowl
    buildTeamIndex();
    buildOfficers();
    console.log("\nPreview build complete:", programs[2].slug, "+ team index + officers");
    return;
  }

  buildAbout();
  buildProgramsIndex();
  for (const p of programs) buildProgram(p.slug);
  buildTeamIndex();
  buildOfficers();
  buildCaptains();
  buildAlumni();
  for (const p of people) buildPerson(p.id);
  buildContact();

  console.log(`\nBuild complete: ${1 + 1 + 1 + programs.length + 4 + people.length + 1} pages in dist/`);
}

main();
