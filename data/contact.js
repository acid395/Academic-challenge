// ---------------------------------------------------------------------------
// CONTACT PAGE CONTENT. The content now lives in contact.json so the /admin
// CMS can edit it; this shim keeps `require("../data/contact.js")` working.
// Edit contact.json (or use the admin panel) to change club-wide emails,
// socials, and mailing-list info shown on contact.html.
// ---------------------------------------------------------------------------
module.exports = require("./contact.json");
