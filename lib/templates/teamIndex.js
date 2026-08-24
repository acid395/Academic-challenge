"use strict";
const { programs, urls, escapeHtml, getOfficers, getCaptainsGrouped, getAlumniByClass } = require("../render.js");

module.exports = function teamIndexTemplate() {
  const officerCount = getOfficers().length;
  const captainCount = getCaptainsGrouped().reduce((sum, g) => sum + g.captains.length, 0);
  const alumniCount = getAlumniByClass().reduce((sum, g) => sum + g.people.length, 0);

  const programLinks = programs
    .map((p) => `<li><a href="${urls.program(p.slug)}">${escapeHtml(p.name)}</a></li>`)
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Team</p>
    <h1>Our Team</h1>
    <p class="page-header-lede">${officerCount} officers, ${captainCount} program captains, and ${alumniCount} alumni have kept Academic Challenge running. Pick a roster below.</p>
  </header>

  <ul class="route-grid">
    <li class="route-card">
      <a href="${urls.officers}">
        <span class="route-card-name">Officers</span>
        <span class="route-card-desc">The club's current officer board.</span>
        <span class="route-card-link" aria-hidden="true">View officers &rarr;</span>
      </a>
    </li>
    <li class="route-card">
      <a href="${urls.captains}">
        <span class="route-card-name">Captains</span>
        <span class="route-card-desc">Program captains, grouped by program.</span>
        <span class="route-card-link" aria-hidden="true">View captains &rarr;</span>
      </a>
    </li>
    <li class="route-card">
      <a href="${urls.alumni}">
        <span class="route-card-name">Alumni</span>
        <span class="route-card-desc">Past officers and captains, by graduating class.</span>
        <span class="route-card-link" aria-hidden="true">View alumni &rarr;</span>
      </a>
    </li>
  </ul>

  <section class="section" aria-labelledby="team-programs-heading">
    <h2 id="team-programs-heading">By Program</h2>
    <p>Jump directly to a program page to see its current captains alongside the program's competitions and results.</p>
    <!-- EDITABLE: program list — edit data/programs.js -->
    <ul class="link-list">${programLinks}</ul>
  </section>
  `;
};
