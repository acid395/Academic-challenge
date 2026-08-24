"use strict";
const { urls, escapeHtml, getCaptainsGrouped, personCardHtml } = require("../render.js");

module.exports = function captainsTemplate() {
  const groups = getCaptainsGrouped();
  const sectionsHtml = groups
    .map((g) => {
      const cards = g.captains.length
        ? `<ul class="person-grid">${g.captains.map((c) => `<li>${personCardHtml(c.person, c.role.title)}</li>`).join("")}</ul>`
        : `<p class="empty-note">Captains for this program haven't been announced yet.</p>`;
      return `<section class="section" id="${g.program.slug}" aria-labelledby="${g.program.slug}-heading">
        <div class="section-heading-row">
          <h2 id="${g.program.slug}-heading">${escapeHtml(g.program.name)}</h2>
          <a class="section-heading-link" href="${urls.program(g.program.slug)}">Program page &rarr;</a>
        </div>
        ${cards}
      </section>`;
    })
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Team</p>
    <h1>Captains</h1>
    <p class="page-header-lede">Program captains, grouped by program.</p>
  </header>
  <!-- EDITABLE: captains are derived from data/people.js (roles: captain); groups come from data/programs.js -->
  ${sectionsHtml}
  `;
};

module.exports.sections = function () {
  const groups = getCaptainsGrouped();
  return groups.map((g) => ({ id: g.program.slug, label: g.program.name }));
};
