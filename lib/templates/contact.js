"use strict";
const { site, contact, escapeHtml } = require("../render.js");

module.exports = function contactTemplate() {
  const emailRows = contact.emails
    .map(
      (e) => `<li><span class="contact-role">${escapeHtml(e.label)}</span> <a href="mailto:${escapeHtml(e.email)}">${escapeHtml(e.email)}</a></li>`
    )
    .join("");

  const socialLinks = contact.socials
    .map((s) => `<li><a href="${escapeHtml(s.href)}">${escapeHtml(s.label)}</a></li>`)
    .join("");

  return `
  <header class="page-header">
    <p class="eyebrow">Contact</p>
    <h1>Contact Us</h1>
  </header>

  <section class="section" aria-labelledby="general-heading">
    <h2 id="general-heading">General Contact</h2>
    <!-- EDITABLE: emails and social links — edit data/contact.js (emails, socials) -->
    <ul class="contact-list">${emailRows}</ul>
    <ul class="link-list">${socialLinks}</ul>
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
  `;
};
