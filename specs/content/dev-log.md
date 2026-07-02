---
title: Dev Log
subtitle: Decisions and standup notes — newest first
author: Kinship Systems
date: June 16, 2026
status: Draft
footer: Kiduna Club Product Specifications — Dev Log
---

This log is updated after standups. Each entry records decisions, priorities, and status, so the specifications and the build stay in step. Newest first.

# 2026-06-16 — David, Aashik, Jeya

**Terminology decisions.**

- **Frameworks vs Templates.** The big Duna-level "templates" are now **Frameworks** (Duna Frameworks) — they assemble the Wisdom, Stance, Programs, roles, and offers for a whole kind of DUNA (a domain). **Template** is reserved for a publishable **Program** added to Allies and Performers. A Program is private; a Template is published and choosable by anyone. See [Duna Frameworks](../frameworks/index.html) and [Program Templates](../program-templates/index.html).
- **Team → Alliance.** The "Team" concept is renamed **Alliance** throughout. An Alliance is an informal group inside a Duna, with a squad's wallet, roles, and its own Alliance Ally; it has no legal standing of its own.
- **Program = Magic**, and a Program bundles **Skills**. The Builder Kit is now its own [specification](../builder-kit/index.html).

**Product structure decisions.**

- **Performers separate from Allies.** Add a Performers item in the left menu under Allies. Configure a Performer on its own; when creating or modifying an Ally, select which Performers are part of it — so the same work is not done twice. This is part of the composability model: assemble from pieces already created.
- **Empower centralizes account connections.** A person connects each account (Google, Bluesky, Solana, …) once, in Empower, and then assembles Allies and Performers from those connections. Connecting the same Google account separately for every agent is the wrong flow. Tools can be added without connecting accounts more than once. (This reverses the current per-agent connection flow.)
- **Allies are the center.** One active Ally per entity. Dunas, Alliances, Members, Sponsors, and Offers each have an Ally. Everything commercial flows through an **Offer** (memberships, digital assets, media, physical goods, licenses); lineage is tied to Offers.
- **Settings.** Dark theme only (drop the light theme). Remove the desktop application for now — web and mobile until launch. Notifications are in-app (plus the channels the specs describe).

**Priorities (Trello order, toward the Oct 1 MVP — everything here becomes critical).**

1. Connect all tools and accounts in **Empower** (so a Performer can use them without reconnecting).
2. Add **Members** (Aashik, Ja) — high priority, quick.
3. **Separate Performers and Allies** (Performers item under Allies).
4. **Offers** — needs its own spec; comes before Alliances.
5. **Program Template creation** (predefined + user-created; picker under skills on the agent/sub-agent detail page).
6. **Alliances** (under Offers); change Team → Alliance.
7. **Handles** — after the graph database; the root-handle namespace, uniqueness, levels (needed for the Builder Kit).
8. **Roles** — a section of roles assignable within Dunas and Alliances.
9. **Frameworks** — assemble Templates, roles, offers for a DUNA (later; the domains).
10. **Builder Kit** — last, after the graph database and Handles, because it must expose everything else.

**Status.**

- **Launchpad** — done (integrated in the Dunathon landing page). Flow: Launchpad raise → on completion, create the **Market**; coins are created through the market.
- **Decision Markets** — not yet; expected ready to show this weekend.
- **Kinship graph (graph database)** — not finished; a near-term priority because the whole network is active relationships, and it should land before Handles and the Builder Kit.
- **Payload** — Jose: Next.js front end implemented, Python back end updated; resolving issues, will hand to Aashik to integrate with the Studio.
- **Wallets** — let a person choose between connecting an external wallet and using their internal FROST wallet; move everything to the internal wallet and add a way to move money.

**Other notes.** Build/test happens in **Kiduna Studio**, which migrates to **Kiduna Club** at launch. Lawyers are preparing licensing; open-sourcing the platform is likely once the code base is cleaned up (not at first launch), funded by a small per-transaction fee (~0.5–1%) on agentic commerce.

---

*Add the next entry above this line, dated, newest first.*
