"use strict";
// ---------------------------------------------------------------------------
// Shared rendering helpers. Nav, dropdowns, breadcrumbs, footer sitemap, and
// prev/next program links are all derived here from data/*.js — page
// templates never hand-write a URL. This file is markup logic, not content;
// edit data/*.js to change what appears on the site.
// ---------------------------------------------------------------------------
const site = require("../data/site.js");
const contact = require("../data/contact.js");
const programs = require("../data/programs.js");
const people = require("../data/people.js");
const instagram = require("../data/instagram.js");

// ---- URL helpers (root-absolute; the site deploys from the domain root) --
const urls = {
  home: "/index.html",
  about: "/about.html",
  contact: "/contact.html",
  programsIndex: "/programs/index.html",
  program: (slug) => `/programs/${slug}.html`,
  teamIndex: "/team/index.html",
  officers: "/team/officers.html",
  captains: "/team/captains.html",
  alumni: "/team/alumni.html",
  person: (id) => `/team/people/${id}.html`,
  css: "/css/styles.css",
  js: "/js/main.js",
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function initials(name) {
  const words = String(name).trim().split(/\s+/).filter(Boolean);
  const chars = words.slice(0, 2).map((w) => w[0].toUpperCase());
  return chars.join("") || "?";
}

// ---- Data lookups ----------------------------------------------------------
function getProgram(slug) {
  const p = programs.find((p) => p.slug === slug);
  if (!p) throw new Error(`Unknown program slug: ${slug}`);
  return p;
}

function getPerson(id) {
  const p = people.find((p) => p.id === id);
  if (!p) throw new Error(`Unknown person id: ${id}`);
  return p;
}

function rolesOfType(person, type) {
  return person.roles.filter((r) => r.type === type);
}

function getOfficers() {
  return people
    .filter((p) => p.status === "current" && rolesOfType(p, "officer").length)
    .map((p) => ({ person: p, role: rolesOfType(p, "officer")[0] }))
    .sort((a, b) => a.role.order - b.role.order);
}

function getCaptainsForProgram(slug) {
  return people
    .filter((p) => p.status === "current")
    .flatMap((p) =>
      rolesOfType(p, "captain")
        .filter((r) => r.program === slug)
        .map((role) => ({ person: p, role }))
    )
    .sort((a, b) => a.role.order - b.role.order);
}

function getCaptainsGrouped() {
  return programs.map((prog) => ({
    program: prog,
    captains: getCaptainsForProgram(prog.slug),
  }));
}

function getAlumniByClass() {
  const alumni = people.filter((p) => p.status === "alumni");
  const classYears = [...new Set(alumni.map((p) => p.classYear))].sort();
  return classYears.map((classYear) => ({
    classYear,
    people: alumni.filter((p) => p.classYear === classYear),
  }));
}

// ---- Avatar (initials block by default, real <img> when photo is set) -----
function avatarHtml(person, size) {
  const sizeClass = size ? ` avatar--${size}` : "";
  if (person.photo) {
    return `<img class="avatar avatar-photo${sizeClass}" src="/${person.photo}" alt="${escapeHtml(person.name)}" />`;
  }
  return `<div class="avatar avatar-initials${sizeClass}" aria-hidden="true">${escapeHtml(initials(person.name))}</div>`;
}

// ---- Nav model (single source for header, dropdowns, footer sitemap) ------
function navModel() {
  return [
    { label: "Home", href: urls.home, key: "home" },
    { label: "About", href: urls.about, key: "about" },
    {
      label: "Programs",
      href: urls.programsIndex,
      key: "programs",
      children: programs.map((p) => ({ label: p.name, href: urls.program(p.slug), key: `program:${p.slug}` })),
    },
    {
      label: "Team",
      href: urls.teamIndex,
      key: "team",
      children: [
        { label: "Officers", href: urls.officers, key: "officers" },
        { label: "Captains", href: urls.captains, key: "captains" },
        { label: "Alumni", href: urls.alumni, key: "alumni" },
      ],
    },
    { label: "Contact", href: urls.contact, key: "contact" },
  ];
}

function headerHtml(activeKey) {
  const nav = navModel();
  const items = nav
    .map((item) => {
      const isActive = activeKey === item.key || (item.children && item.children.some((c) => c.key === activeKey));
      const current = isActive ? ' aria-current="page"' : "";
      if (item.children) {
        const dropdownId = `dropdown-${item.key}`;
        const children = item.children
          .map((c) => {
            const childCurrent = activeKey === c.key ? ' aria-current="page"' : "";
            return `<li><a href="${c.href}"${childCurrent}>${escapeHtml(c.label)}</a></li>`;
          })
          .join("");
        return `<li class="nav-item has-dropdown">
          <div class="nav-parent">
            <a href="${item.href}" class="nav-link"${current}>${escapeHtml(item.label)}</a>
            <button type="button" class="dropdown-toggle" aria-expanded="false" aria-controls="${dropdownId}" aria-label="Toggle ${escapeHtml(item.label)} menu">
              <span class="caret" aria-hidden="true">&#9662;</span>
            </button>
          </div>
          <ul class="dropdown-menu" id="${dropdownId}">${children}</ul>
        </li>`;
      }
      return `<li class="nav-item"><a href="${item.href}" class="nav-link"${current}>${escapeHtml(item.label)}</a></li>`;
    })
    .join("");

  return `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${urls.home}">
        <img class="brand-mark" src="/assets/logo.png" alt="" />
        <span class="brand-name">${escapeHtml(site.clubName)}</span>
      </a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Toggle menu</span>
        <span class="nav-toggle-bars" aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Primary">
        <ul>${items}</ul>
      </nav>
    </div>
  </header>`;
}

function footerHtml() {
  const groups = [
    {
      title: "Main",
      links: [
        { label: "Home", href: urls.home },
        { label: "About", href: urls.about },
        { label: "Contact", href: urls.contact },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "All Programs", href: urls.programsIndex },
        ...programs.map((p) => ({ label: p.name, href: urls.program(p.slug) })),
      ],
    },
    {
      title: "Team",
      links: [
        { label: "Team", href: urls.teamIndex },
        { label: "Officers", href: urls.officers },
        { label: "Captains", href: urls.captains },
        { label: "Alumni", href: urls.alumni },
      ],
    },
  ];

  const groupsHtml = groups
    .map(
      (g) => `<div class="footer-group">
        <h2>${escapeHtml(g.title)}</h2>
        <ul>${g.links.map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`).join("")}</ul>
      </div>`
    )
    .join("");

  return `<footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img class="brand-mark" src="/assets/logo.png" alt="" />
        <p>${escapeHtml(site.clubName)}<br /><span class="footer-tagline">${escapeHtml(site.tagline)}</span></p>
      </div>
      <nav class="footer-sitemap" aria-label="Site map">${groupsHtml}</nav>
    </div>
    <p class="footer-fineprint">${escapeHtml(site.footerNote)}</p>
  </footer>`;
}

function breadcrumbHtml(trail) {
  // trail: [{label, href}, ..., {label}] -- last item has no href (current page)
  if (!trail || trail.length < 2) return "";
  const items = trail
    .map((item, i) => {
      const isLast = i === trail.length - 1;
      if (isLast) {
        return `<li aria-current="page">${escapeHtml(item.label)}</li>`;
      }
      return `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`;
    })
    .join('<li class="crumb-sep" aria-hidden="true">/</li>');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function pageIndexHtml(sections) {
  if (!sections || sections.length < 2) return "";
  const items = sections
    .map((s, i) => `<li><button type="button" class="page-index-link" data-target="${s.id}"${i === 0 ? ' aria-current="true"' : ""}>${escapeHtml(s.label)}</button></li>`)
    .join("");
  return `<nav class="page-index" aria-label="On this page">
    <p class="page-index-label">On this page</p>
    <ul>${items}</ul>
  </nav>`;
}

function achievementsTableHtml(rows) {
  if (!rows || !rows.length) {
    return `<p class="empty-note">No achievements listed yet.</p>`;
  }
  const body = rows
    .map(
      (r) => `<tr><td class="col-year">${escapeHtml(r.year)}</td><td>${escapeHtml(r.competition)}</td><td>${escapeHtml(r.placement)}</td></tr>`
    )
    .join("");
  return `<div class="data-table-wrap"><table class="data-table achievements-table">
    <caption class="sr-only">Notable achievements</caption>
    <thead><tr><th scope="col">Year</th><th scope="col">Competition</th><th scope="col">Placement</th></tr></thead>
    <tbody>${body}</tbody>
  </table></div>`;
}

function competitionsTableHtml(rows) {
  if (!rows || !rows.length) {
    return `<p class="empty-note">No upcoming competitions listed yet.</p>`;
  }
  const body = rows
    .map(
      (r) => `<tr><td class="col-year">${escapeHtml(r.date)}</td><td>${escapeHtml(r.event)}</td><td>${escapeHtml(r.location)}</td></tr>`
    )
    .join("");
  return `<div class="data-table-wrap"><table class="data-table competitions-table">
    <caption class="sr-only">Upcoming competitions</caption>
    <thead><tr><th scope="col">Date</th><th scope="col">Event</th><th scope="col">Location</th></tr></thead>
    <tbody>${body}</tbody>
  </table></div>`;
}

function personCardHtml(person, roleLabel) {
  return `<a class="person-card" href="${urls.person(person.id)}">
    ${avatarHtml(person, "md")}
    <span class="person-card-body">
      <span class="person-card-name">${escapeHtml(person.name)}</span>
      ${roleLabel ? `<span class="person-card-role">${escapeHtml(roleLabel)}</span>` : ""}
    </span>
  </a>`;
}

function layout({ title, description, activeKey, breadcrumbs, bodyHtml, pageIndex }) {
  const crumbHtml = breadcrumbHtml(breadcrumbs);
  const indexHtml = pageIndexHtml(pageIndex);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)} · ${escapeHtml(site.clubName)}</title>
<meta name="description" content="${escapeHtml(description || site.tagline)}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="${urls.css}" />
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
${headerHtml(activeKey)}
<main id="main-content">
  <div class="page-shell">
    ${crumbHtml}
    ${indexHtml ? `<div class="page-with-index"><div class="page-index-rail">${indexHtml}</div><div class="page-body">${bodyHtml}</div></div>` : `<div class="page-body">${bodyHtml}</div>`}
  </div>
</main>
${footerHtml()}
<script src="${urls.js}"></script>
</body>
</html>`;
}

module.exports = {
  site,
  contact,
  programs,
  people,
  instagram,
  urls,
  escapeHtml,
  initials,
  getProgram,
  getPerson,
  getOfficers,
  getCaptainsForProgram,
  getCaptainsGrouped,
  getAlumniByClass,
  avatarHtml,
  navModel,
  headerHtml,
  footerHtml,
  breadcrumbHtml,
  pageIndexHtml,
  achievementsTableHtml,
  competitionsTableHtml,
  personCardHtml,
  layout,
};
