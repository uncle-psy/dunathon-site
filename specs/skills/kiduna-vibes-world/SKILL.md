---
name: kiduna-vibes-world
description: >-
  Specify a Kiduna Vibes world — the isometric, game-like, continually-updated
  environment that represents a Duna and its actors spatially, and that is
  sometimes itself a game. Produces a Word (.docx, Kiduna house style) and
  Markdown spec. Use whenever the user wants to design or spec Vibes, an
  isometric world or space for a Duna, sprites/figures for Allies, a communal
  "world" with live state, Vibe Rooms, game platforms, Quests, Studios & Media,
  Nightpapers, or how documents/coins/Alliances are represented spatially. Part
  of the Kiduna Factory family (see kiduna-factory-spec). Produces a
  SPECIFICATION, not code or a game build.
---

# Kiduna Vibes world specification

Specifies a **Vibe**: an isometric, spatial, sometimes-playable world that
represents a Duna and its actors, with state that updates continuously because
agents are always active. Where Chat is the conversation, Vibes is the place.
Produces a Word + Markdown spec. Ground it in the Dunathon prototype's Vibe
surface. Shared model: `kiduna-factory-spec/references/operating-model.md`.

## Why Vibes exist
Before agentic AI, people passed files back and forth and the state of a shared
effort lived in those files. Agents change continuously. A Vibe is a communal
world where state is continually updated, so the current state of a Duna is
something you move through rather than reconstruct from a folder.

## What a Vibe represents
- **Spaces** for Dunas and Alliances (a Duna is a place; its Alliances are places
  within it).
- **Sprites / figures** for the Allies of Members, Dunas, Alliances, Sponsors,
  and Programs.
- **Document objects** — Google Docs, Drive folders, decks, video, images.
- **Economic objects** — a coin, a treasury, an Offer.
- **Live state** — sprites move when their Ally acts; document objects change with
  the document; the treasury reflects the balance; a new Alliance appears as a
  new space.

## Kinds of Vibe (the Genesis set)
Game Platforms (isometric games played with your Allies), Vibe Rooms (live,
Ally-hosted spaces), Quests (missions posted by Dunas that earn coin), Studios &
Media (creative tools by Builders), Nightpapers (the living canon — read,
discuss, remix), and an index of all experiences. Some Vibes are pure
representation; some are interactive rooms; some are full games.

## Alignment
Vibes are interactions, so HEARTS applies (Harmony, Empowerment, Artistry,
Reason, Trust, Synthesis). A Code's `vibes` Claim binds the profile
(`hearts:default`); a Code can splash a person straight into a Vibe
(`splash: vibe:<id>`).

## What to specify
For a Vibe world, capture: which Duna/Alliances it represents and their spatial
layout; the actor sprites and how they map to Allies; the document and economic
objects shown; the live-state update rules (what changes, when, from what
source); the Vibe kind(s) (representation, room, game, quest, studio, Nightpaper)
and any game mechanics; entry via Code splash; the HEARTS alignment; and how the
Vibe connects to Chat (the dock Ally is present), the economy (Quest/contest
rewards), and notifications (live-room alerts). Mark human-approval points for
anything that spends or commits inside a Vibe.

## Workflow
1. Identify the Duna and the Vibe's purpose (representation, room, game, quest…).
2. Lay out the spaces (Duna, Alliances) and the sprites (Allies).
3. Specify document and economic objects and their live-state sources.
4. Specify the Vibe kind and mechanics; entry via Code; HEARTS alignment.
5. Connect to Chat, economy, and notifications.
6. Fill `assets/spec-template.md` → `<duna>-vibe-spec.md`; render with the bundled
   converter; save both files and present.

## Principles
- A Vibe is live, communal state — not a static scene.
- Everything in a Vibe is an Actor or an object with a source of truth elsewhere
  (an Ally, a document, the treasury); the Vibe reflects it.
- HEARTS governs behavior inside the world.
- A specification, not a game build. Describe experience and functionality.
