"use strict";
const { site, programs, urls, escapeHtml } = require("../render.js");

module.exports = function homeTemplate() {
  const programCards = programs
    .map(
      (p) => `<li class="program-card">
        <a href="${urls.program(p.slug)}">
          <span class="program-card-name">${escapeHtml(p.name)}</span>
          <span class="program-card-desc">${escapeHtml(p.shortDescription)}</span>
          <span class="program-card-link" aria-hidden="true">View program &rarr;</span>
        </a>
      </li>`
    )
    .join("");

  return `
  <section class="hero">
    <p class="eyebrow">Student-Run Academic Competition Club</p>
    <h1>${escapeHtml(site.clubName)}</h1>
    <p class="hero-tagline">${escapeHtml(site.tagline)}</p>
    <!-- EDITABLE: home page intro copy — edit data/site.js (homeIntro) -->
    <p class="hero-intro">${escapeHtml(site.homeIntro)}</p>
    <div class="hero-actions">
      <a class="button button-primary" href="${urls.contact}">${escapeHtml(site.joinCta.linkLabel)}</a>
      <a class="button button-secondary" href="${urls.teamIndex}">Meet Our Team</a>
    </div>
  </section>

  <section class="section" aria-labelledby="programs-heading">
    <div class="section-heading-row">
      <h2 id="programs-heading">Our Programs</h2>
      <a class="section-heading-link" href="${urls.programsIndex}">View all programs &rarr;</a>
    </div>
    <!-- EDITABLE: program list/order/descriptions — edit data/programs.js -->
    <ul class="program-grid">${programCards}</ul>
  </section>

  <section class="section join-section" aria-labelledby="join-heading">
    <h2 id="join-heading">${escapeHtml(site.joinCta.heading)}</h2>
    <!-- EDITABLE: join call-to-action copy — edit data/site.js (joinCta) -->
    <p>${escapeHtml(site.joinCta.body)}</p>
    <a class="button button-primary" href="${urls.contact}">${escapeHtml(site.joinCta.linkLabel)}</a>
  </section>
  `;
};
