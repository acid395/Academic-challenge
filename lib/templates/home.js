"use strict";
const { site, programs, instagram, urls, escapeHtml } = require("../render.js");

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

  const missionParagraphs = site.mission.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  const joinParagraphs = site.joinCta.bodyParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");

  const instagramPosts = instagram.posts
    .map(
      (permalink) => `<li class="instagram-post">
        <blockquote class="instagram-media" data-instgrm-permalink="${escapeHtml(permalink)}" data-instgrm-version="14">
          <a href="${escapeHtml(permalink)}" target="_blank" rel="noopener">View this post on Instagram</a>
        </blockquote>
      </li>`
    )
    .join("");

  const instagramBody = instagram.posts.length
    ? `<ul class="instagram-grid">${instagramPosts}</ul>
       <script async src="https://www.instagram.com/embed.js"></script>`
    : `<p class="empty-note">No posts added yet — add Instagram post links in <code>data/instagram.js</code> to show them here.</p>
       <a class="button button-primary" href="${escapeHtml(instagram.profileUrl)}" target="_blank" rel="noopener">View our Instagram &rarr;</a>`;

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

  <section class="section" aria-labelledby="mission-heading">
    <h2 id="mission-heading">Our Mission</h2>
    <!-- EDITABLE: mission statement — edit data/site.js (mission.paragraphs) -->
    ${missionParagraphs}
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
    <!-- EDITABLE: get-involved copy — edit data/site.js (joinCta) -->
    ${joinParagraphs}
    <a class="button button-primary" href="${urls.contact}">${escapeHtml(site.joinCta.linkLabel)}</a>
  </section>

  <section class="section" aria-labelledby="donate-heading">
    <h2 id="donate-heading">${escapeHtml(site.donate.heading)}</h2>
    <!-- EDITABLE: donate copy — edit data/site.js (donate) -->
    <p>${escapeHtml(site.donate.body)}</p>
    <a class="button button-secondary" href="${urls.contact}">${escapeHtml(site.donate.linkLabel)}</a>
  </section>

  <section class="section instagram-section" aria-labelledby="instagram-heading">
    <div class="section-heading-row">
      <h2 id="instagram-heading">Follow Us</h2>
      <a class="section-heading-link" href="${escapeHtml(instagram.profileUrl)}" target="_blank" rel="noopener">${escapeHtml(instagram.handle)} on Instagram &rarr;</a>
    </div>
    <!-- EDITABLE: Instagram posts — edit data/instagram.js (posts); add a post permalink, no markup needed -->
    ${instagramBody}
  </section>
  `;
};
