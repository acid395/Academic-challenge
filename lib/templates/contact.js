"use strict";
const { site, contact, urls, escapeHtml, getOfficers } = require("../render.js");

module.exports = function contactTemplate() {
  const officers = getOfficers().filter((o) => o.person.email);
  const officerRows = officers
    .map(
      (o) => `<li><span class="contact-name">${escapeHtml(o.person.name)}</span> <span class="contact-role">${escapeHtml(o.role.title)}</span> <a href="mailto:${escapeHtml(o.person.email)}">${escapeHtml(o.person.email)}</a></li>`
    )
    .join("");

  const socialLinks = contact.socials
    .map((s) => `<li><a href="${escapeHtml(s.href)}">${escapeHtml(s.label)}</a></li>`)
    .join("");

  const emailRows = contact.emails
    .map(
      (e) => `<li><span class="contact-role">${escapeHtml(e.label)}</span> <a href="mailto:${escapeHtml(e.email)}">${escapeHtml(e.email)}</a></li>`
    )
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Contact</p>
    <h1>Contact Us</h1>
  </header>

  <section class="section" aria-labelledby="general-heading">
    <h2 id="general-heading">General Contact</h2>
    <!-- EDITABLE: emails — edit data/contact.js (emails) -->
    <ul class="contact-list">${emailRows}</ul>
    ${officers.length ? `<h3>Officers</h3><ul class="contact-list">${officerRows}</ul>` : ""}
  </section>

  <section class="section" aria-labelledby="meeting-heading">
    <h2 id="meeting-heading">Meeting Time &amp; Place</h2>
    <!-- EDITABLE: meeting info — edit data/site.js (meeting) -->
    <p>${escapeHtml(site.meeting.summary)} ${escapeHtml(site.meeting.detail)}</p>
  </section>

  <section class="section" aria-labelledby="mailing-heading">
    <h2 id="mailing-heading">Mailing List</h2>
    <!-- EDITABLE: mailing list info — edit data/contact.js (mailingList) -->
    <p>${escapeHtml(contact.mailingList.description)}</p>
    <a class="button button-primary" href="${escapeHtml(contact.mailingList.href)}">${escapeHtml(contact.mailingList.linkLabel)}</a>
  </section>

  <section class="section" aria-labelledby="social-heading">
    <h2 id="social-heading">Socials</h2>
    <!-- EDITABLE: social links — edit data/contact.js (socials) -->
    <ul class="link-list">${socialLinks}</ul>
  </section>
  `;
};
