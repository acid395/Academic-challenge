"use strict";
const { programs, urls, escapeHtml } = require("../render.js");

module.exports = function programsIndexTemplate() {
  const cards = programs
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
  <header class="page-header">
    <p class="eyebrow">Programs</p>
    <h1>Our Five Programs</h1>
    <p class="page-header-lede">Every program follows the same structure: an overview of the competition, how to participate, notable achievements, current captains, and upcoming competitions.</p>
  </header>
  <!-- EDITABLE: program list/order/descriptions — edit data/programs.js -->
  <ul class="program-grid">${cards}</ul>
  `;
};
