// ---------------------------------------------------------------------------
// INSTAGRAM. The content now lives in instagram.json so the /admin CMS can
// edit it; this shim keeps `require("../data/instagram.js")` working.
//
// Two modes, in priority order:
//
// 1. LIVE WIDGET (auto-updates) — set `widgetEmbedHtml` in instagram.json to
//    a snippet from a service like lightwidget.com or snapwidget.com that
//    you connect your Instagram account to. Once set, it replaces the manual
//    list below and stays current on its own.
//
// 2. MANUAL POST LIST (default) — used whenever `widgetEmbedHtml` is null.
//    Shows the posts listed by permalink in the `posts` array via
//    Instagram's own embed.js. Add or remove permalinks and rebuild.
// ---------------------------------------------------------------------------
module.exports = require("./instagram.json");
