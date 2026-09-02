// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS. The content now lives in site.json so the /admin CMS
// can edit it; this shim keeps `require("../data/site.js")` working.
// Edit site.json (or use the admin panel) to change the club name, tagline,
// or meeting info shown in the header, footer, home page, and about page.
// ---------------------------------------------------------------------------
module.exports = require("./site.json");
