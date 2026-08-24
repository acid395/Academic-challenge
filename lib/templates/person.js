"use strict";
const { urls, escapeHtml, avatarHtml, getProgram } = require("../render.js");

function roleLine(role) {
  if (role.type === "captain") {
    const program = getProgram(role.program);
    return `${escapeHtml(role.title)}, <a href="${urls.program(program.slug)}">${escapeHtml(program.name)}</a>`;
  }
  return escapeHtml(role.title);
}

module.exports = function personTemplate(id, person) {
  const roles = person.roles.map((r) => `<li>${roleLine(r)}</li>`).join("");
  const rosterHref = person.status === "alumni" ? urls.alumni : person.roles.some((r) => r.type === "officer") ? urls.officers : urls.captains;
  const rosterLabel = person.status === "alumni" ? "Alumni" : person.roles.some((r) => r.type === "officer") ? "Officers" : "Captains";

  return `
  <header class="page-header person-header">
    <!-- EDITABLE: photo — set roles/photo in data/people.js ("${id}"); a real image path swaps in for the initials block -->
    ${avatarHtml(person, "lg")}
    <div>
      <p class="eyebrow">${person.status === "alumni" ? "Alumni" : "Team"}</p>
      <h1>${escapeHtml(person.name)}</h1>
      ${person.classYear ? `<p class="person-classyear">Class of ${escapeHtml(person.classYear)}</p>` : ""}
    </div>
  </header>

  <section class="section" aria-labelledby="roles-heading">
    <h2 id="roles-heading">Roles</h2>
    <!-- EDITABLE: roles — edit data/people.js ("${id}") roles array -->
    <ul class="role-list">${roles}</ul>
  </section>

  <section class="section" aria-labelledby="bio-heading">
    <h2 id="bio-heading">Bio</h2>
    <!-- EDITABLE: bio copy — edit data/people.js ("${id}") bio field -->
    <p>${escapeHtml(person.bio)}</p>
    ${person.email ? `<p><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></p>` : ""}
  </section>

  <p class="section-footnote"><a href="${rosterHref}">&larr; Back to ${rosterLabel}</a></p>
  `;
};
