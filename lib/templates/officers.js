"use strict";
const { getOfficers, personCardHtml } = require("../render.js");

module.exports = function officersTemplate() {
  const officers = getOfficers();
  const cards = officers
    .map((o) => `<li>${personCardHtml(o.person, o.role.title)}</li>`)
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Team</p>
    <h1>Officers</h1>
    <p class="page-header-lede">The club's current officer board.</p>
  </header>
  <!-- EDITABLE: officers are derived from data/people.js (roles: officer) -->
  <ul class="person-grid">${cards}</ul>
  `;
};
