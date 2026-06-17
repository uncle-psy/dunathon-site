---
name: kiduna-club-product-specs
description: >-
  Navigate and maintain the Kiduna Club Product Specifications — the top-level
  HTML + Markdown knowledge base for the whole Kiduna Club project (Frameworks,
  Program Templates, the Builder Kit, Actors, Allies, Alliances, Offerings,
  Economy, Chat, Vibes, Notifications, Platform, and more). Use whenever the
  user wants to add or update a product spec, add a new product area, add or
  link a skill, regenerate the specs site, update the Dev Log after a standup,
  understand how the knowledge base is organized, or prepare the specs for
  GitHub/Vercel. This is the higher-order skill that ties all the other Kiduna
  skills and specs together. Err toward using it whenever someone is working on
  "the product specs", "the knowledge base", "the specs site", or "where does
  this spec go".
---

# Kiduna Club Product Specifications — knowledge base skill

This is the top-level skill for the Kiduna Club product knowledge base. It keeps
the specifications and skills organized, interlinked, and ready to publish. Use
it to find where something belongs, to add a new spec or area or skill, to update
the Dev Log after a standup, and to regenerate and deploy the site.

## How the knowledge base is organized
A static, interlinked HTML site generated from Markdown, plus a library of
skills. The structure:

```
kiduna-club-product-specs/
├── index.html              the top-level hub (generated)
├── <area>/index.html       one page per product area (generated)
├── skills/<skill>/         each skill: SKILL.md + references + scripts
├── content/                Markdown sources for area pages
│   ├── overview.md, builder-kit.md, program-templates.md, dev-log.md
│   └── frameworks/         frameworks.md, service-organizations.md, kiduna-factory.md
├── site.json               the taxonomy: groups → areas, and the skills list
├── build_site.js           the generator (Markdown → HTML)
├── styles.css              generated house style (Georgia, black)
└── README.md               GitHub + Vercel instructions
```

The product areas (in `site.json`): Foundations (Overview, Actors & Identity,
Allies/Performers/Phases); Frameworks, Templates & the Builder Kit (DUNA
Frameworks + each framework, Program Templates, Builder Kit); Organization &
People (Alliances); Economy & Commerce (Offerings, Economy/Markets/Launchpad,
Transactions & Commerce); Surfaces & Experience (Chat, Vibes, Documents & Media,
Notifications, Seek & Directory); Platform & Architecture.

## Core vocabulary (keep consistent across all specs)
- **Framework** — for a DUNA; assembles Wisdom, Stance, Programs, roles, offers
  for a kind of organization (a domain). Specified with **kiduna-framework-spec**.
- **Template** — a publishable **Program** (deep-agent routine) for Allies and
  Performers. A Program is private; a Template is shared. Specified with
  **kiduna-program-template**.
- **Program (Magic)** — the Enact-phase unit; bundles Skills.
- **Ally / Performer / Envoy / Sentinel**; **DUNA / Alliance / Member / Sponsor
  / Offer**; **Codes / Handles**; **Coin / Treasury / Distribution Waterfall**.
- **Builder Kit** — kit + API + connector for outside developers. Specified with
  **kiduna-builder-kit-spec**.

## Tasks

### Add or update a spec
1. Write or edit the Markdown in `content/` (front matter: title, subtitle,
   author, date, status, footer).
2. If it is a new area, add it to the right group in `site.json` (slug, title,
   desc, and `source` pointing at the Markdown; or leave `source` off and set
   `status: planned` for a stub).
3. Regenerate: `node build_site.js`.

### Add or link a skill
1. Put the skill at `skills/<slug>/SKILL.md` (plus references/scripts).
2. Add an entry to `skills` in `site.json` (slug, group, name, short).
3. Regenerate. The skill renders as a page and is downloadable as Markdown.

### Update the Dev Log after a standup
Add a dated entry at the top of `content/dev-log.md` (newest first) with
Decisions, Product structure, Priorities, and Status. Reconcile any decisions
into the affected specs. Regenerate.

### Regenerate the site
`node build_site.js` — pure Node, no dependencies. Open `index.html` to check.

### Deploy
See `README.md` for the Claude Code steps to create the GitHub repo and deploy to
Vercel.

## Principles
- Keep terminology consistent (Framework vs Template above all).
- Frameworks and the Builder Kit have full specs; most other areas are stubs to
  flesh out — keep stubs short and link to where the detail currently lives
  (often the Factory framework and its skills).
- Skills are Markdown so humans read them in the browser and agents download
  them; keep them in `skills/` and listed in `site.json`.
- Regenerate after every change so the HTML and the sources stay in step.
