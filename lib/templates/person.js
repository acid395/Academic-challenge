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

  // Club policy: only captains (any program) have contact info published on
  // their bio page. Officer-only bios don't show an email or Discord.
  const isCaptain = person.roles.some((r) => r.type === "captain");
  const hasContact = isCaptain && (person.email || person.discord);

  const bioSection = person.bio
    ? `<section class="section" aria-labelledby="bio-heading">
        <h2 id="bio-heading">Bio</h2>
        <!-- EDITABLE: bio copy — edit data/people.js ("${id}") bio field -->
        <p>${escapeHtml(person.bio)}</p>
      </section>`
    : "";

  const contactSection = hasContact
    ? `<section class="section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <!-- EDITABLE: contact info — edit data/people.js ("${id}") email/discord fields -->
        <dl class="fact-list">
          ${person.discord ? `<div><dt>Discord</dt><dd>${escapeHtml(person.discord)}</dd></div>` : ""}
          ${person.email ? `<div><dt>Email</dt><dd><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></dd></div>` : ""}
        </dl>
      </section>`
    : "";

  return `
  <header class="page-header person-header">
    <!-- EDITABLE: photo — set roles/photo in data/people.js ("${id}"); a real image path swaps in for the initials block -->
    ${avatarHtml(person, "lg")}
    <div>
      <p class="eyebrow">${person.status === "alumni" ? "Alumni" : "Team"}</p>
      <h1>${escapeHtml(person.name)}</h1>
      ${person.classYear ? `<p class="person-classyear">Class of ${escapeHtml(person.classYear)}</p>` : ""}
      ${person.grade ? `<p class="person-classyear">Grade ${escapeHtml(person.grade)}</p>` : ""}
    </div>
  </header>

  <section class="section" aria-labelledby="roles-heading">
    <h2 id="roles-heading">Roles</h2>
    <!-- EDITABLE: roles — edit data/people.js ("${id}") roles array -->
    <ul class="role-list">${roles}</ul>
  </section>

  ${bioSection}
  ${contactSection}

  <p class="section-footnote"><a href="${rosterHref}">&larr; Back to ${rosterLabel}</a></p>
  `;
};
