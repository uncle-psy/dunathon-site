---
name: kiduna-builder-kit-spec
description: >-
  Specify or extend the Kiduna Builder Kit product specification — the
  downloadable kit, API, and connector that let outside developers create Dunas,
  frameworks, Program Templates, Allies, and Performers and build their own
  apps on the Kiduna network. Produces a Word (.docx, Kiduna house style) and
  Markdown spec. Use whenever the user wants to design, spec, or refine the
  Builder Kit, the Kiduna Kit, the developer API/SDK, the connector, Handles for
  external addressing, the "create an Ally / be an Ally" modes, or how outside
  developers build on Kiduna. This is about UNDERSTANDING AND CREATING the kit —
  not the assets shipped inside it. Produces a SPECIFICATION, not code.
---

# Kiduna Builder Kit specification

Specifies the Builder Kit: the downloadable kit + API + connector that opens the
Kiduna network to outside developers. Produces a Word + Markdown spec. This skill
is about understanding and creating the kit itself, not the starter assets that
ship inside it (those are specified by the framework/template skills).

## What the kit is
Three parts: a **downloadable kit** (a zip, or a connection from a coding agent
such as Claude Code, carrying the skills and an API key tied to a member
account); an **API** (the programmatic surface for everything a person does
in-product); and a **connector** (authenticates the kit to the account and
network, exchanges Codes, keeps local work in sync).

## The governing principle
Everything a member can do, a developer can do — plus everything a developer
needs — with one boundary: they cannot modify Kiduna's core code. They build on
the foundation, not in it.

## What to specify
- **The three parts** and how they fit (kit, API, connector).
- **Two modes** — create an Ally (build/register entities from outside) and be an
  Ally (the developer's own client acts as an Ally on the network).
- **The API surface** — auth (member account, API key, FROST or external
  wallet); create/define Dunas, frameworks, Program Templates, Allies,
  Performers (the five phases); registration, Handles, Codes; registry/directory
  read and search; Handle resolution and Code verification; code exchange and
  sessions; transact-and-settle through the Distribution Waterfall; read/write
  graph state; publish Offers and Program Templates.
- **Handles** — the root-handle namespace, uniqueness, and levels; a prerequisite.
- **Graph database** — the prerequisite that makes the relationships clean to
  expose.
- **Parity, trust, safety** — parity with the in-product builder; trust only
  through Handle + registry + Code + session; the Sentinel safety check on
  anything published.
- **Open source & fees** — the open-source path once the code base is ready; the
  small per-transaction fee model.
- **Sequencing** — built last, after the framework system, Handles, and the graph
  database.
- **Acceptance criteria and open questions.**

## Workflow
1. Confirm scope (full kit spec or a refinement of one area).
2. Specify the three parts, the two modes, and the API surface.
3. Specify Handles and the graph-DB dependency; parity, trust, and safety.
4. Cover open source, fees, and sequencing.
5. Write the spec, render with the bundled converter (`npm install docx`; copy
   `scripts/build_docx.js`; run it), save both files, and present.

## Principles
- The kit exposes the whole network — so it ships last, once the rest works.
- Trust for kit-built Allies is identical to in-product Allies: Handle, registry,
  Code, session, Sentinel.
- The boundary (no core-code modification) is what keeps independently-built
  clients coherent.
- A specification, not code. Don't fabricate; flag packaging, fee, and
  open-source-timing questions.
