// ---------------------------------------------------------------------------
// INSTAGRAM. Two modes, in priority order:
//
// 1. LIVE WIDGET (auto-updates — set `widgetEmbedHtml` to switch to this).
//    Instagram doesn't offer a public "always show my latest posts" embed
//    on its own — that requires a service (e.g. lightwidget.com or
//    snapwidget.com) that you connect your account to, which then polls
//    Instagram on your behalf and hands you a snippet that's always current.
//    To set this up:
//      a. Create a free account at lightwidget.com or snapwidget.com.
//      b. Connect/authorize @msj_academic_challenge (their official
//         Instagram login flow — the widget service never sees your
//         password).
//      c. Choose a "Carousel" or "Slideshow" layout so it matches the
//         one-post-at-a-time style already on the site.
//      d. Copy the embed snippet it gives you (usually an <iframe> tag)
//         and paste it as the value of `widgetEmbedHtml` below, replacing
//         `null`.
//      e. Run `node build.js`.
//    Once set, this replaces the manual post list below and the feed
//    updates on its own — no more edits needed here as you post.
//
// 2. MANUAL POST LIST (current mode — used whenever `widgetEmbedHtml` is
//    null). Shows real posts via Instagram's own embed.js, but only posts
//    you list by permalink; add or remove entries in `posts` and rebuild
//    to update what shows.
// ---------------------------------------------------------------------------
module.exports = {
  handle: "@msj_academic_challenge",
  profileUrl: "https://www.instagram.com/msj_academic_challenge/",

  // Paste a live-widget embed snippet here (see step 1 above) to switch to
  // an auto-updating feed. Leave as `null` to keep using the manual list.
  widgetEmbedHtml: null,

  posts: [
    "https://www.instagram.com/p/DbFTAfvhryg/",
    "https://www.instagram.com/p/DbFS9A8upuk/",
    "https://www.instagram.com/p/DbFS4SOusQy/",
    "https://www.instagram.com/p/DcXcyuRm-XS/",
    "https://www.instagram.com/p/DbFUwbWheUx/",
    "https://www.instagram.com/p/DbCtwxWFQgb/",
  ],
};
