"use strict";
const { site, urls, escapeHtml } = require("../render.js");

module.exports = function aboutTemplate() {
  return `
  <header class="page-header">
    <p class="eyebrow">About</p>
    <h1>About ${escapeHtml(site.clubName)}</h1>
  </header>

  <section class="section" aria-labelledby="what-we-do-heading">
    <h2 id="what-we-do-heading">What We Do</h2>
    <!-- EDITABLE: club description — edit data/site.js (about.whatWeDo, about.school) -->
    <p>${escapeHtml(site.about.whatWeDo)}</p>
    <p>${escapeHtml(site.about.school)}</p>
    <p>Our five programs are <a href="${urls.programsIndex}">Science Olympiad, Science Bowl, Quiz Bowl, Ocean Science Bowl, and History Bowl</a>.</p>
  </section>

  <section class="section" aria-labelledby="organization-heading">
    <h2 id="organization-heading">How We're Organized</h2>
    <!-- EDITABLE: organization description — edit data/site.js (about.organization) -->
    <p>${escapeHtml(site.about.organization)}</p>
    <p>See the <a href="${urls.teamIndex}">Our Team</a> page for the current officer board, program captains, and club alumni.</p>
  </section>

  <section class="section" aria-labelledby="meeting-heading">
    <h2 id="meeting-heading">Meetings</h2>
    <!-- EDITABLE: meeting info — edit data/site.js (meeting) -->
    <p>${escapeHtml(site.meeting.summary)} ${escapeHtml(site.meeting.detail)}</p>
    <p>Full contact details and how to get on the mailing list are on the <a href="${urls.contact}">Contact</a> page.</p>
  </section>
  `;
};
