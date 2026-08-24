// ---------------------------------------------------------------------------
// INSTAGRAM. The home page embeds individual posts using Instagram's own
// official embed (instagram.com/embed.js) — this is the only way to show
// real, live posts on a static site without a backend token, but it can
// only embed posts you list by permalink one at a time (Instagram doesn't
// offer a public "whole feed" embed).
//
// To add a post to the home page:
//   1. Open the post on instagram.com and copy its URL, e.g.
//      https://www.instagram.com/p/AbCdEfGhIjK/
//   2. Add it as a string to the `posts` array below.
//   3. Run `node build.js`.
// Posts render in the order listed here. Remove an entry to remove it from
// the page.
// ---------------------------------------------------------------------------
module.exports = {
  handle: "@msj_academic_challenge",
  profileUrl: "https://www.instagram.com/msj_academic_challenge/",
  posts: [
    "https://www.instagram.com/p/DbFTAfvhryg/",
    "https://www.instagram.com/p/DbFS9A8upuk/",
    "https://www.instagram.com/p/DbFS4SOusQy/",
    "https://www.instagram.com/p/DcXcyuRm-XS/",
    "https://www.instagram.com/p/DbFUwbWheUx/",
    "https://www.instagram.com/p/DbCtwxWFQgb/",
  ],
};
