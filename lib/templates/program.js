"use strict";
const {
  programs,
  urls,
  escapeHtml,
  getCaptainsForProgram,
  achievementsTableHtml,
  competitionsTableHtml,
  personCardHtml,
} = require("../render.js");

module.exports = function programTemplate(slug) {
  const index = programs.findIndex((p) => p.slug === slug);
  const program = programs[index];
  const prev = programs[(index - 1 + programs.length) % programs.length];
  const next = programs[(index + 1) % programs.length];
  const captains = getCaptainsForProgram(slug);

  const captainCards = captains.length
    ? `<ul class="person-grid">${captains.map((c) => `<li>${personCardHtml(c.person, c.role.title)}</li>`).join("")}</ul>`
    : `<p class="empty-note">Captains for this program haven't been announced yet.</p>`;

  // EDITABLE: org/tournament logos — edit data/programs.js (logos)
  const logosHtml = program.logos && program.logos.length
    ? `<div class="program-logos">${program.logos.map((l) => `<img src="/${l.src}" alt="${escapeHtml(l.alt)}" class="program-logo" />`).join("")}</div>`
    : "";

  // EDITABLE: team photos — edit data/programs.js (photos); add/remove an
  // entry to change the gallery, no markup needed
  const galleryHtml = program.photos && program.photos.length
    ? `<ul class="program-gallery">${program.photos
        .map(
          (p) => `<li class="gallery-item">
            <img src="/${p.src}" alt="${escapeHtml(p.alt)}" loading="lazy" />
            <span class="gallery-caption">${escapeHtml(p.caption)}</span>
          </li>`
        )
        .join("")}</ul>`
    : "";

  return `
  <header class="page-header">
    <p class="eyebrow">Program</p>
    <h1>${escapeHtml(program.name)}</h1>
    <p class="page-header-lede">${escapeHtml(program.shortDescription)}</p>
    ${logosHtml}
  </header>

  <section class="section" id="overview" aria-labelledby="overview-heading">
    <h2 id="overview-heading">Overview</h2>
    <!-- EDITABLE: program overview copy — edit data/programs.js (overview) -->
    <p>${escapeHtml(program.overview)}</p>
  </section>

  <section class="section" id="participate" aria-labelledby="participate-heading">
    <h2 id="participate-heading">How to Participate</h2>
    <!-- EDITABLE: participation details — edit data/programs.js (participate) -->
    <dl class="fact-list">
      <div><dt>Who can join</dt><dd>${escapeHtml(program.participate.whoCanJoin)}</dd></div>
      <div><dt>Selection process</dt><dd>${escapeHtml(program.participate.selectionProcess)}</dd></div>
      <div><dt>Time commitment</dt><dd>${escapeHtml(program.participate.timeCommitment)}</dd></div>
      <div><dt>Practice schedule</dt><dd>${escapeHtml(program.participate.practiceSchedule)}</dd></div>
      <div><dt>What to study</dt><dd>${escapeHtml(program.participate.whatToStudy)}</dd></div>
    </dl>
  </section>

  <section class="section" id="achievements" aria-labelledby="achievements-heading">
    <h2 id="achievements-heading">Notable Achievements</h2>
    <!-- EDITABLE: achievement rows — edit data/programs.js (achievements); add/remove a row, no markup needed -->
    ${achievementsTableHtml(program.achievements)}
    ${galleryHtml}
  </section>

  <section class="section" id="captains" aria-labelledby="captains-heading">
    <h2 id="captains-heading">Captains</h2>
    <!-- EDITABLE: captains are derived from data/people.js (roles: captain, program: "${slug}") -->
    ${captainCards}
    <p class="section-footnote"><a href="${urls.teamIndex}">See the full team &rarr;</a></p>
  </section>

  <section class="section" id="upcoming" aria-labelledby="upcoming-heading">
    <h2 id="upcoming-heading">Upcoming Competitions</h2>
    <!-- EDITABLE: competition rows — edit data/programs.js (upcomingCompetitions); add/remove a row, no markup needed -->
    ${competitionsTableHtml(program.upcomingCompetitions)}
  </section>

  <nav class="program-pager" aria-label="Other programs">
    <a class="pager-link pager-prev" href="${urls.program(prev.slug)}">
      <span class="pager-direction">&larr; Previous</span>
      <span class="pager-name">${escapeHtml(prev.name)}</span>
    </a>
    <a class="pager-link pager-next" href="${urls.program(next.slug)}">
      <span class="pager-direction">Next &rarr;</span>
      <span class="pager-name">${escapeHtml(next.name)}</span>
    </a>
  </nav>
  `;
};

module.exports.sections = [
  { id: "overview", label: "Overview" },
  { id: "participate", label: "How to Participate" },
  { id: "achievements", label: "Notable Achievements" },
  { id: "captains", label: "Captains" },
  { id: "upcoming", label: "Upcoming Competitions" },
];
