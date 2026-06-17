# DUNATHON — Summerlong Dunathon website

Static, multi-page marketing site **plus** a prototype web app for the **Summerlong Dunathon** —
a launch celebration for West Virginia's DUNA Act (Decentralized Unincorporated Nonprofit
Association). Plain HTML/CSS/vanilla-JS. **No build step, no framework, no package.json.**

## Run & preview locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to production
Git remote `origin` → `https://github.com/uncle-psy/dunathon-site`. Hosted on Vercel
(production: `https://dunathon-site.vercel.app`; custom domain `kiduna.club` if mapped).
Static, zero-config. To ship:
```bash
git add -A && git commit -m "…" && git push        # if Vercel git is connected, this auto-deploys
vercel --prod --yes                                 # otherwise (or to force) deploy the folder
```
Never commit `WV DUNA-handoff (1).zip`, `.DS_Store`, `.vercel`, or `node_modules`
(already in `.gitignore` / `.vercelignore`). Loose source images in the project root
(`*.jpg`, `*.png`) are fine — the site references copies under `assets/`.

## Deploying from local with Claude Code
This machine is fully set up to ship end-to-end — no external tooling or manual steps.
When asked to "push this to production," do the whole flow locally:

**One-command flow (the normal path).** Vercel's Git integration auto-deploys every push
to `main`, so a push *is* a production deploy:
```bash
git add -A                       # or name specific files
git commit -m "…"
git push origin main             # Vercel auto-builds & promotes to production
```
A new Production deployment appears within seconds (confirm with `vercel ls dunathon-site`);
it typically reaches `● Ready` in a few seconds since the site is static/zero-config.

**Manual fallback.** Only needed if Git integration is ever disconnected, you must deploy
without a commit, or you want to force a rebuild from the current working tree:
```bash
vercel --prod --yes              # deploys the local folder straight to production
```

**Auth that makes this work (already in place):**
- GitHub: `gh` is installed and logged in (account `uncle-psy`, token scope includes `repo`),
  remote `origin` → `github.com/uncle-psy/dunathon-site` over HTTPS. `git push` authenticates
  with no prompt. Re-auth if ever needed: `gh auth login` (or add an SSH key and switch the remote).
- Vercel: CLI installed and logged in (`vercel whoami`), `.vercel/project.json` links this folder
  to project `dunathon-site`. Re-auth if ever needed: `npm i -g vercel && vercel login && vercel link`.

**URLs.** Production: `https://dunathon-site.vercel.app`. Custom domain: `kiduna.club` (if mapped —
the canonical `.vercel.app` URL is always live regardless).

**Never commit:** secrets, API tokens, `.env*` files — hard rule, no exceptions. Also (already
git-ignored) `*.zip`, `.DS_Store`, `.vercel`, `node_modules`, loose root images (`/*.jpg`, `/*.png`,
`/*.svg`, …), and the vendored specs build artifacts (`specs/archive/`, `specs/build_site.js`,
`specs/site.json`, `specs/vercel.json`). Run `git status` before staging; if `git add -A` would
catch anything outside the intended change, stage explicit paths instead.

**Pre-push checklist (see "After any change — verify" below for the full version):**
1. Tag balance — `<div>`/`</div>` and `<section>`/`</section>` counts match on every touched page.
2. Every internal link (`href="*.html"`) and asset path (`assets/…`) resolves.
3. Brand QA — one `wv-emph` per headline, one gold CTA per screenful, navy-on-gold, numbers in Goudy.
4. `git status` + `git diff` show only the intended change before committing.

## File map
- **Marketing pages** (shared look): `index.html` (home), `tech.html`, `law.html`,
  `economics.html`, `culture.html`, `events.html`, `showcase.html`, `register.html`.
  Plus `privacy.html`, `tos.html`.
- **`app.html`** — the integrated app: one file, an auth screen + the app SPA. Open
  `app.html?skiplogin=1` to enter straight into the app home. The genesis/home workspace
  is **DUNATHON**. App logic in `assets/app.js`, styles in `assets/app.css` + `assets/styles.css`.
- **`signup.html`** — the multi-step signup flow; its final button enters `app.html?skiplogin=1`.
- **`assets/colors_and_type.css`** — brand tokens + base type. **Source of truth.** Don't
  redefine colors or fonts anywhere else; consume the `var(--…)` tokens.
- **`assets/site.css`** — the component library for the marketing pages (nav, hero, sections,
  cards, `.stat-strip`, `.versus`, `.tiers`, `.timeline`, `.speakers`, `.duna-grid`, decision-market
  vote bars, `.fees`, etc.). Read it before adding markup; reuse these classes.
- **`assets/nav.js`** — shared marketing nav: mobile menu toggle + active-link highlight by filename.
- **`assets/fonts/`** — Goudy Heavyface (display) + Avenir (body).
- Logos: `assets/dunathon-logo*.svg` (lockup), `assets/wv-cosmic-mark*.svg` (mark),
  `assets/ridge-motif.svg`, `assets/kiduna-logo*.svg` (used in the app).
- Photos: `assets/speakers/<name>.jpg` (≈square), `assets/sponsors/*`.
- **`specs/`** — the vendored Kiduna Club **Product Specifications** docs site (33 pages; its own
  `styles.css` that `@import`s `specs/design-system/colors_and_type.css`, self-contained with relative
  links). It's linked from the main nav and the footer menu as **Specs** (`specs/index.html`), placed
  right after Showcase. Each spec page carries the shared site top bar + footer (class `dn-topbar` /
  `dn-footer`, injected into the page and styled at the bottom of `specs/styles.css`); the docs sidebar's
  logo was removed to avoid redundancy. If these pages are regenerated from their source build, the
  top bar/footer and the logo removal must be re-applied. Build/source leftovers under `specs/`
  (`archive/`, `build_site.js`, `site.json`, `vercel.json`) are git-ignored.

## Design system — keep these rules
- **Old Gold** `var(--accent)` (#EAAA00) on **deep navy** `var(--bg)`. Text/icons on gold are
  **navy** `var(--on-accent)`, never white.
- **Exactly one** italic-gold emphasis per headline: `<em class="wv-emph">…</em>`. Never two.
- **One** primary gold button (`.btn-primary`) per screenful; everything else is `.btn-secondary`
  or a text link.
- Numbers/stats render in **Goudy** — put them in `.stat .num` or a display heading.
- **Never hardcode hex or font names.** Use tokens. A small page-scoped `<style>` is OK for layout
  if it uses `var(--…)`.
- Ridge motif (`assets/ridge-motif.svg`) appears once per page, in the hero.
- **Voice:** warm, plainspoken, lightly literary. Say *members, organizers, stewards* — not "users".
  Explain jargon the first time. Avoid buzzwords, the "It's not X, it's Y" construction, emoji as UI,
  and em-dashes used for drama.

## Page conventions
- Copy the **NAV** block and **FOOTER** block verbatim from `index.html` into each marketing page;
  `nav.js` highlights the active link by filename automatically.
- Interior pages use the compact `.page-hero` (home uses the full-screen `.hero`) and a sticky
  `.subnav` linking the page's own section ids.
- Section shape: `<section class="section" id="…"><div class="wrap"> .sec-kicker / .sec-title (with one
  wv-emph) / .sec-lead / components </div></section>`.

## Content canon (keep facts consistent across pages)
- The **Dunathon runs July 7 – September 9, 2026.** All footers and run-date references use this range.
- **July 1, 2026** is **DUNA Day** (standalone — not part of the run range): the WV DUNA Act takes
  effect and the **Opening Ceremony** is at the WV Capitol Rotunda, Charleston, 8:30 AM EDT, streamed online.
- **July 2, 2026:** David Levine presents **Kiduna Club** at the **AI Engineer World's Fair**, San Francisco
  (events.html section 03; talk: "Beyond the Lethal Trifecta").
- **Conference:** September 17–19, Shepherdstown WV + online.
- The **genesis DUNA is DUNATHON** (WV DUNA is the statewide DUNA, not the genesis). David Levine is the
  registered agent.
- **Registration model:** "**Pay only for what you use**" — never "Free to join". Tiers: **Guest (Free),
  Member ($10), Founder ($100)**. The dollar amounts are **token holdings that set your level**, not fees.
- **events.html order:** 01 DUNA Day · 02 Speakers · 03 World's Fair · 04 Dunathon · 05 Conference ·
  06 Many Thanks (sponsors) · 07 How it works · 08 Allies & Guides.
- **Speakers** (events.html §02): Kris Warner (WV Secretary of State), Tristan Leavitt (Lead Sponsor,
  WV DUNA Act), Rob Dobson (West Virginia Adventures / Go To The Gorge), Shekinah Apedo (WV Blockchain
  Foundation / Stand With Crypto WV), Matt Simon (Service Alliance), Emma Casales (Mythic Endeavors).
  David Levine is featured in the **World's Fair** section, not the speakers row.
- **App "Align" view** (Builder rail, between Enact and Actions): create **HEARTS Sentinels** — seven
  signals (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis Inward, Synthesis Outward) on a
  −100…+100 meter, default centered at 0; presets (Aligned, Dominant, Accommodating, Guarded, Visionary).

## After any change — verify
- Tag balance: `<div>`/`</div>` and `<section>`/`</section>` counts match.
- Every internal link (`href="*.html"`) and asset path (`assets/…`) resolves.
- Brand QA: one `wv-emph` per headline, one gold CTA per screenful, navy-on-gold, numbers in Goudy.
