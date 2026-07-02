---
name: kiduna-factory-spec
description: >-
  Specify a Kiduna Factory framework and/or build a Genesis-style Duna — a Kiduna
  whose purpose is to teach, grow, manage, and spin out other Kidunas (for an
  accelerator, venture studio, or enterprise). Produces an engineer-ready spec
  as a Word document (.docx, Kiduna house style) and Markdown. Use whenever the
  user wants to spec, design, or build the Kiduna Factory, The Big Kiduna, the
  Genesis Duna, a Duna factory, an accelerator/venture-studio/enterprise Kiduna,
  or the foundational Programs that other frameworks inherit. This is the master
  skill of the Kiduna Factory family; it orchestrates four capability skills —
  kiduna-duna-chat, kiduna-vibes-world, kiduna-graduation-governance, and
  kiduna-element-offer — and covers the shared operating model (levels, roles,
  Allies, Codes, economy). Err toward using this whenever "Kiduna Factory",
  "Genesis Duna", "The Big Kiduna", "spin out a Kiduna", or "build the first
  Duna" come up. Produces a SPECIFICATION for engineers, not code.
---

# Kiduna Factory — master specification skill

This skill specifies a Kiduna Factory framework and/or instantiates a Genesis-style
Duna, and produces the spec as a Word document (`.docx`, Kiduna house style:
Georgia, black type, US Letter, TOC, page numbers) and a structured Markdown
file. It is the master of the Kiduna Factory family. The output is a design
document engineers build from, not code.

A **Kiduna Factory** is a Kiduna whose purpose is to teach about Kidunas, grow
them, manage them, and spin new ones out. **The Big Kiduna** is the canonical
instance — the Genesis Duna, the legal and economic root of the network, the
on-ramp everyone enters through, and the engine that seeds new Dunas. Its
Programs are foundational: they appear in most other frameworks, because every
Kiduna is in some way a Factory (most start broad and members spin Alliances out
into their own Kidunas when they reach mass — capital, members, or a diverged
mission).

Ground the work in the prototype in the Dunathon folder (a faithful front-end
model of the live system) wherever you can. Read `references/operating-model.md`
for the grounded model before writing.

## The family — when to hand off

This skill covers the whole Factory and the shared model. For deep work on one
capability, use the matching skill (each produces its own Word + Markdown spec):

- **kiduna-duna-chat** — the Duna Ally's Chat: Stance, Wisdom (Pinecone),
  contextual chips, chat mediation, and notifications.
- **kiduna-vibes-world** — Vibes isometric worlds (actors, sprites, documents,
  coins, live state, games/rooms/quests).
- **kiduna-graduation-governance** — Alliances and the Alliance→Kiduna
  graduation through the Governance Market (vote + seed buy-in).
- **kiduna-element-offer** — Elements listed as Offers (priced in USD + Coins,
  paid in KIDuna), plus contests and airdrops via Codes.

When the user's request is mostly one capability, run that skill. When it spans
the whole Factory or builds the Genesis Duna, run this one and pull the others in
as needed.

## Workflow

### 1. Establish identity and intent

Pin down: is this the Genesis DUNA (The Big Kiduna) or a Factory for an
accelerator / venture studio / enterprise? What does it teach and grow (broad
network, a vertical, a portfolio)? The Actor is a Duna. Write a paragraph on what
the resulting Duna Ally does for the people who enter.

### 2. Specify the shared model

From `references/operating-model.md`, lock: the levels (Guest → Luminary, set by
coin-holding, per-Duna multiplier, no subscription) and the level-to-capability
map; the two modes (Active / Builder); the five Ally types, three states, three
visibilities; the coin, treasury, and Distribution Waterfall; the Code/Claim set.

### 3. Specify the foundational Programs (Magic)

These appear in most frameworks: Welcome & Onboard, Contextual Help, Alliance
Manager, Graduation, Offer & Element, Treasury & Waterfall, Notifier, Social,
Quests/Contests/Airdrops, Vibe State. For each, note its Prompt, triggers, data,
tools, and human-approval points. A Program (also called **Magic**) bundles
**Skills** (lines in a Skill.md); one Prompt per Program, many of the rest.

### 4. Specify the capability areas

Cover Chat + chips, Vibes, Alliances + graduation, Elements-as-Offers, Codes,
economy, notifications, tools (internal + external: Telegram, Bluesky, Google,
Solana), and contests/games/airdrops — at the depth the request needs, handing
off to the capability skills for detail.

### 5. Write the Genesis build sequence

If building a Duna, include a concrete build blueprint: stand up the Duna and
coin; build the Duna Ally (Stance + Wisdom + Programs); wire Chat and the dock;
build the Vibe world; provision Codes; stand up the economy; set up social
(Telegram + Bluesky); configure notifications; seed growth (a first Quest,
welcome airdrop, first contest); open the graduation pipeline.

### 6. Write the spec, render, save, present

Fill `assets/spec-template.md` → `<name>-factory-spec.md`. Render with the
bundled converter:

```bash
npm install docx          # once per environment
cp "<this-skill>/scripts/build_docx.js" .
node build_docx.js "<name>-factory-spec.md" "<name>-factory-spec.docx"
```

Keep the front matter intact. Save both files to the user's Kiduna Factory folder
if connected, else outputs; present both.

## Principles

- **Ground in the prototype and the live system.** The prototype models the real
  app; where the live system differs, it governs (note it).
- **Chat and Vibes are co-equal surfaces.** Chat is the conversation; Vibes is the
  place. Spec both.
- **Everything flows through Allies** — person-to-person communication is mediated,
  Code-scoped, with human approval for consequential actions.
- **Service of the member first; commerce is the substrate** that funds growth and
  rewards Element makers.
- **This is a specification, not code.** Describe experience and functionality.
- **Don't fabricate.** Flag naming questions (Big Kiduna vs Dunathon; KIDuna;
  Magic/Programs/Skills) rather than inventing.
