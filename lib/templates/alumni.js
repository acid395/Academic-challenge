"use strict";
const { escapeHtml, getAlumniByClass, personCardHtml } = require("../render.js");

function roleSummary(person) {
  return person.roles.map((r) => r.title).join(", ");
}

module.exports = function alumniTemplate() {
  const groups = getAlumniByClass();
  const sectionsHtml = groups
    .map((g) => {
      const cards = g.people
        .map((p) => `<li>${personCardHtml(p, roleSummary(p))}</li>`)
        .join("");
      const sectionId = `class-${g.classYear}`;
      return `<section class="section" id="${sectionId}" aria-labelledby="${sectionId}-heading">
        <h2 id="${sectionId}-heading">Class of ${escapeHtml(g.classYear)}</h2>
        <ul class="person-grid">${cards}</ul>
      </section>`;
    })
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Team</p>
    <h1>Alumni</h1>
    <p class="page-header-lede">Past officers and captains, by graduating class.</p>
  </header>
  <!-- EDITABLE: alumni are derived from data/people.js (status: "alumni", classYear) -->
  ${sectionsHtml}
  `;
};

module.exports.sections = function () {
  const groups = getAlumniByClass();
  return groups.map((g) => ({ id: `class-${g.classYear}`, label: `Class of ${g.classYear}` }));
};
