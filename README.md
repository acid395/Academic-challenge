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

## Two ways to edit content

**Non-developers:** use the admin panel at **`https://msjac.org/admin/`**. It's a
form-based editor — no code, no local setup. See
["Editing through the admin panel"](#editing-through-the-admin-panel) below.

**Developers:** edit the data files in `data/` directly and run `node build.js`.

## Where to edit content

Everything editable lives in `data/` (as JSON). The admin panel reads and writes
these same files. The HTML is generated — don't hand-edit files in `dist/`, they
get wiped and regenerated on every build.

| To change...                                              | Edit...              |
| ----------------------------------------------------------- | --------------------- |
| Club name, tagline, home page copy, about page copy, meeting time/location | `data/site.json` |
| General email, mailing list link/copy, social links | `data/contact.json` |
| A program's overview, participation info, achievements, upcoming competitions | `data/programs/<slug>.json` |
| Adding a **new program** | Add `data/programs/<slug>.json` (copy an existing one) — nav, dropdowns, footer sitemap, and prev/next links update automatically. The `order` field controls its position. |
| Officers, captains, alumni — names, bios, emails, roles | `data/people/<id>.json` |
| Adding a **new person** | Add `data/people/<id>.json` with an `id`, `status` (`"current"`/`"alumni"`), and a `roles` array. Their bio page, roster card, and (if a captain) program-page listing are all generated from this one record — nothing else to edit. |
| Giving someone a **second role** (e.g. an officer who also captains a program) | Add another entry to that person's `roles` array in `data/people/<id>.json` |
| Instagram posts shown on the home page | `data/instagram.json` — see below |

After editing any file in `data/`, run `node build.js` again. (The admin panel
does this for you — Cloudflare Pages rebuilds automatically on every save.)

## Editing through the admin panel

The live site serves a form-based content editor at **`https://msjac.org/admin/`**,
built with [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (a drop-in for
[Decap CMS](https://decapcms.org/) — swap the one `<script>` in
`public/admin/index.html` to switch). Editors click **Login with GitHub** and get
collections for **Site text**, **Contact**, **Instagram**, **Programs**, and
**People**, including an image picker for photos (uploads land in
`public/assets/uploads/`).

When an editor hits **Publish**, the CMS commits the change to the `main` branch
and Cloudflare Pages rebuilds the site with `node build.js` — live in about a
minute.

Editors need a free GitHub account with write access to the repo (see setup
step 4). They still only ever see the `/admin/` form UI — never code or git.

## Hosting & CMS setup (one time)

The site is hosted on **Cloudflare** (the `academic-challenge` Workers Build,
serving `dist/` as static assets) and the `/admin/` panel logs in through
**GitHub OAuth**, brokered by a tiny Cloudflare Worker.

**1. Cloudflare build** — the `academic-challenge` project (Workers & Pages) is
connected to `acid395/Academic-challenge`. Its build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` (runs `node build.js`) |
| Deploy command | `npx wrangler deploy` (uses `wrangler.jsonc` → uploads `dist/`) |
| Root directory | `/` |

`wrangler.jsonc` in the repo root defines the assets deploy (`name` must match
the Worker, `assets.directory` = `./dist`). `.node-version` pins Node 20. Every
push to `main` — including the CMS's commits — rebuilds and deploys to
`msjac.org` (attached under the project's **Domains** tab).

**2. GitHub OAuth App** — <https://github.com/settings/developers> → **New OAuth
App**:

- Homepage URL: `https://msjac.org`
- Authorization callback URL: `https://<worker-subdomain>.workers.dev/callback`
  (fill in after step 3, then edit)

Note the **Client ID** and generate a **Client secret**.

**3. Auth Worker** — deploy [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)
as a Cloudflare Worker (its README has a one-click deploy). Set these Worker
variables/secrets:

- `GITHUB_CLIENT_ID` — from step 2
- `GITHUB_CLIENT_SECRET` — from step 2
- `ALLOWED_DOMAINS` — `msjac.org`

Copy the Worker's URL, put it back into the GitHub OAuth App's callback URL
(step 2), and set it as `base_url` in `public/admin/config.yml` (replacing the
`REPLACE-WITH-YOUR-CMS-AUTH-WORKER-URL` placeholder).

**4. Give editors access** — GitHub repo → **Settings → Collaborators** → add
each editor (Write role). They accept the email invite, then can log in at
`https://msjac.org/admin/`.

## Instagram feed

The home page "Follow Us" section has two modes, controlled by `data/instagram.json`
(or the **Instagram feed** collection in the admin panel):

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
5. Paste it into the `widgetEmbedHtml` field (in the admin panel, or in
   `data/instagram.json` replacing `null`), then rebuild.

Once `widgetEmbedHtml` is set, it takes over from the manual `posts` list
automatically and the feed stays current with no further edits needed here.

## Adding a photo

By default every person renders as a styled initials block (no photo files
needed).

**In the admin panel:** open the person (or program), use the photo field's
image picker, Publish. The upload is saved to `public/assets/uploads/`.

**Editing files directly:**

1. Drop the image file into `public/assets/photos/` (e.g. `member-05.jpg`).
2. In `data/people/<id>.json`, set that person's `photo` field to the relative
   path, e.g. `"photo": "assets/photos/member-05.jpg"`.
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

**Cloudflare (current setup).** The `acid395/Academic-challenge` repo is
connected to the `academic-challenge` Cloudflare Workers Build: `npm run build`
regenerates `dist/`, then `npx wrangler deploy` (driven by `wrangler.jsonc`)
uploads `dist/` as static assets. Every push to `main` — including the commits
the `/admin/` CMS makes — triggers a rebuild and deploy to `https://msjac.org`.
See ["Hosting & CMS setup"](#hosting--cms-setup-one-time) above.

`dist/` is also a complete standalone static site — deploy it as-is anywhere:

- **Drag-and-drop** the `dist/` folder onto any static host.
- **GitHub Pages**: point Pages at the `dist/` folder (or copy its contents
  to a `docs/` folder / `gh-pages` branch, whichever your repo setup uses).
- **Custom domain**: the site uses root-absolute links (`/about.html`,
  `/programs/quiz-bowl.html`, etc.), so it must be served from the domain root,
  not a subpath.

## Project structure

```
data/            content — JSON, edited directly or via the /admin panel
  site.json      club-wide copy, meeting info
  contact.json   contact page content
  instagram.json home page Instagram feed (manual list or live widget)
  programs/      one <slug>.json per program
  people/        one <id>.json per officer/captain/alumnus
  *.js           thin loaders/shims so the templates can `require` the JSON

lib/
  render.js      shared helpers: nav, breadcrumbs, footer sitemap, avatars,
                  tables — everything URL/derivation-related lives here
  templates/     one file per page type; each reads from data/ via render.js

public/          static assets copied as-is into dist/
  admin/         the Sveltia/Decap CMS panel (index.html + config.yml) → served at /admin/
  css/styles.css design system ("Scoreboard")
  js/main.js     dropdown/mobile-nav/scroll-spy behavior
  assets/photos/ person photos (manual)
  assets/uploads/ photos added through the admin panel

scripts/
  serve.js       zero-dependency local static server
  screenshot.js  Playwright screenshot helper
  crawl-links.js internal link/anchor checker
  interact-check.js  Playwright interaction smoke test (dropdowns, nav, scroll-spy)

build.js         the generator — run this after any data/template change
dist/            generated output — this is what you deploy
```
