# Kiduna Club Product Specifications

The product knowledge base for Kiduna Club — an interlinked static HTML site plus
a library of Markdown skills. It is generated from Markdown by a small,
dependency-free Node script, so it deploys to any static host (Vercel) and the
skills read in a browser and download for an AI agent.

## Layout

```
index.html            top-level hub (generated)
<area>/index.html      one page per product area (generated)
dev-log/index.html     standup decisions, newest first (generated)
skills/                each skill: SKILL.md + references + scripts (Markdown)
design-system/         the live Kiduna design system — a self-contained,
                       dependency-free web project (index.html reference page,
                       ui-kit.html worked example, colors_and_type.css, fonts,
                       assets). NOT generated; edit in place. The "Brand &
                       Design" docs area links into it.
content/               Markdown sources for the pages
site.json              the taxonomy (groups → areas) and the skills list
build_site.js          the generator (Markdown → HTML); pure Node, no deps
styles.css             generated house style (Georgia, black type)
archive/               the original Word (.docx) specifications, retired
```

## Work locally

Regenerate the site after editing any Markdown or `site.json`:

```bash
node build_site.js
```

Preview it (any static server):

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

To add a page, edit/ create Markdown in `content/`, add an entry to `site.json`,
and regenerate. To add a skill, drop it in `skills/<slug>/` and list it in
`site.json`. The `kiduna-club-product-specs` skill documents this in detail.

## Publish: GitHub + Vercel

The site is pre-generated static HTML, so no build step is required on the host.
The steps below are written so you can hand them to Claude Code.

### Prerequisites
- `git`, the GitHub CLI (`gh`), and the Vercel CLI (`vercel`) installed and
  authenticated (`gh auth login`, `vercel login`).

### 1. Initialize the repository

```bash
cd "kiduna-club-product-specs"
git init
git add .
git commit -m "Kiduna Club Product Specifications — initial import"
```

### 2. Create the GitHub repo and push

```bash
# private repo under your account or org (change OWNER):
gh repo create OWNER/kiduna-club-product-specs --private --source=. --remote=origin --push
```

(Or create the repo in the GitHub UI, then `git remote add origin <url>` and
`git push -u origin main`.)

### 3. Deploy to Vercel

Because the HTML is already generated, deploy it as a static site with no build:

```bash
vercel link        # link this folder to a new Vercel project
vercel --prod      # deploy
```

When prompted for settings, choose **Other** as the framework, leave the
**Build Command** empty (or set it to `node build_site.js` to regenerate on each
deploy), and set the **Output Directory** to the repository root (`.`). The
included `vercel.json` already sets clean URLs.

Alternatively, in the Vercel dashboard: **Add New → Project → Import** the GitHub
repo, framework preset **Other**, no build command, output directory `.`, and
deploy. Every push to `main` then redeploys automatically, which is the simplest
way to share updates with the team.

### Ready-to-paste prompt for Claude Code

> Create a new private GitHub repo named `kiduna-club-product-specs` from this
> folder and push it, then deploy it to Vercel as a static site (framework
> preset "Other", no build command, output directory "."). Use the existing
> `vercel.json`. Give me the production URL and the GitHub URL when done.

## Updating

After a standup, add a dated entry to the top of `content/dev-log.md`, reconcile
any decisions into the affected specs, run `node build_site.js`, commit, and
push. Vercel redeploys on push.
