# Academic Challenge Website

A static site for Academic Challenge, generated from data files by a small
Node script. No framework, no build tool beyond plain Node — the deployed
output is plain HTML/CSS/JS in `dist/`.

## Run it locally

```
npm install                 # only needed once, for Playwright (testing)
node build.js                # generates the site into dist/
node scripts/serve.js        # serves dist/ at http://localhost:8080
```

Then open http://localhost:8080. Re-run `node build.js` after any data or
template change and refresh the browser.

## Where to edit content

Everything editable lives in `data/`. The HTML is generated — don't hand-edit
files in `dist/`, they get wiped and regenerated on every build.

| To change...                                              | Edit...              |
| ----------------------------------------------------------- | --------------------- |
| Club name, tagline, home page copy, about page copy, meeting time/location, advisor | `data/site.js` |
| General email, mailing list link/copy, social links | `data/contact.js` |
| A program's overview, participation info, achievements, upcoming competitions | `data/programs.js` |
| Adding a **new program** | Add one object to the array in `data/programs.js` — nav, dropdowns, footer sitemap, and prev/next links update automatically |
| Officers, captains, alumni — names, bios, emails, roles | `data/people.js` |
| Adding a **new person** | Add one object to the array in `data/people.js` with an `id`, `status` (`"current"`/`"alumni"`), and a `roles` array. Their bio page, roster card, and (if a captain) program-page listing are all generated from this one record — nothing else to edit. |
| Giving someone a **second role** (e.g. an officer who also captains a program) | Add another entry to that person's `roles` array in `data/people.js` |
| Instagram posts shown on the home page | `data/instagram.js` — see below |

After editing any file in `data/`, run `node build.js` again.

## Instagram feed

The home page "Follow Us" section has two modes, controlled by `data/instagram.js`:

**Manual list (current default).** `posts` is an array of post permalinks
(`https://www.instagram.com/p/XXXXXXXXXXX/`). Each renders as a real, live
Instagram embed (via Instagram's own `embed.js`) in a one-at-a-time
carousel with prev/next buttons. To update it: add or remove a permalink in
the `posts` array and run `node build.js`. This does not update itself —
you (or ask a Claude Code session to) refresh the list when there's a new
post to add.

**Live widget (auto-updates).** Instagram doesn't offer a public "always
show my latest post" embed on its own — getting one requires a third-party
service that polls your account for you. To set it up:

1. Create a free account at [lightwidget.com](https://lightwidget.com) or
   [snapwidget.com](https://snapwidget.com).
2. Connect/authorize `@msj_academic_challenge` through their official
   Instagram login flow (they don't see your password).
3. Choose a **Carousel** or **Slideshow** layout to match the current
   one-post-at-a-time style.
4. Copy the embed snippet they give you (usually an `<iframe>` tag).
5. Paste it as the value of `widgetEmbedHtml` in `data/instagram.js`
   (replacing `null`), then run `node build.js`.

Once `widgetEmbedHtml` is set, it takes over from the manual `posts` list
automatically and the feed stays current with no further edits needed here.

## Adding a photo

By default every person renders as a styled initials block (no photo files
needed). To use a real photo:

1. Drop the image file into `public/assets/photos/` (e.g. `member-05.jpg`).
2. In `data/people.js`, set that person's `photo` field to the relative path,
   e.g. `photo: "assets/photos/member-05.jpg"`.
3. Run `node build.js`. The template automatically swaps the initials block
   for an `<img>` — no markup changes needed.

## Verifying changes

```
node scripts/crawl-links.js          # checks every internal link + anchor across dist/ for 404s
node scripts/screenshot.js /index.html /about.html   # screenshots specific pages at 1440px + 390px (requires the local server running)
```

`scripts/crawl-links.js` takes no arguments and checks the whole built site.
`scripts/screenshot.js` takes a list of root-relative page paths.

## Deploying

`dist/` is a complete static site. Deploy it as-is:

- **Drag-and-drop** the `dist/` folder onto Cloudflare Pages or a similar
  static host.
- **GitHub Pages**: point Pages at the `dist/` folder (or copy its contents
  to a `docs/` folder / `gh-pages` branch, whichever your repo setup uses).
- **Custom domain**: works with either host once configured there — the site
  uses root-absolute links (`/about.html`, `/programs/quiz-bowl.html`, etc.),
  so it must be served from the domain root, not a subpath.

## Project structure

```
data/            content — the only files you should normally edit
  site.js        club-wide copy, meeting/advisor info
  contact.js     contact page content
  programs.js    the five programs, one object each
  people.js      every officer/captain/alumnus, one object each
  instagram.js   home page Instagram feed (manual list or live widget)

lib/
  render.js      shared helpers: nav, breadcrumbs, footer sitemap, avatars,
                  tables — everything URL/derivation-related lives here
  templates/     one file per page type; each reads from data/ via render.js

public/          static assets copied as-is into dist/
  css/styles.css design system ("Scoreboard")
  js/main.js     dropdown/mobile-nav/scroll-spy behavior
  assets/photos/ drop person photos here

scripts/
  serve.js       zero-dependency local static server
  screenshot.js  Playwright screenshot helper
  crawl-links.js internal link/anchor checker
  interact-check.js  Playwright interaction smoke test (dropdowns, nav, scroll-spy)

build.js         the generator — run this after any data/template change
dist/            generated output — this is what you deploy
```
