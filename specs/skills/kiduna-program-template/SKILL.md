---
name: kiduna-program-template
description: >-
  Specify a Kiduna Program Template — a publishable Program (a reusable
  deep-agent routine) that gets added to Allies and Performers for a specific
  task. Produces an engineer-ready spec as a Word document (.docx, Kiduna house
  style) and Markdown. Use whenever the user wants to design, spec, or define a
  Program Template, a publishable Program, a "skill" in the old sense, a
  deep-agent routine, or a task routine added to an Ally or Performer; or to
  define how Templates are picked, published, priced, or turned into Offers.
  Note the reserved meaning: a Template is a publishable Program (a Program is
  private; a Template is shared). This is NOT for DUNA-level Frameworks — use
  kiduna-framework-spec for those. Produces a SPECIFICATION, not code.
---

# Kiduna Program Template specification

Specifies one Program Template — a publishable Program (a reusable deep-agent
routine) added to an Ally or a Performer for a specific task. Produces a Word +
Markdown spec. For the concept and the rules, read the Program Templates page in
the Kiduna Club Product Specifications; for DUNA-level work use
**kiduna-framework-spec** instead.

## The reserved meaning
A **Program** is private to you. A **Template** is a Program you publish so others
can choose it. Same object (one Prompt; many Sequences, Triggers, Database
Connections, Polling/Web Hook listeners, Tools; on the deep-agent runtime); the
difference is visibility. Free Templates are public within their home DUNA; to
share across DUNAs, a Template is made an **Offer** (free or priced, with author
attribution and lineage).

## What to specify for one Template
- **Identity** — name, the task it performs, the Actor it attaches to (Ally
  and/or Performer), the DUNA it is authored in.
- **The routine** — the single Prompt; the Sequence of steps; Triggers; Database
  Connections; Polling/Web Hook listeners; the Tools/Abilities it uses; and the
  human-approval points for consequential actions.
- **Inputs and outputs** — what the Template needs (which Abilities must be
  connected) and what it produces.
- **Level** — whether it is a standalone Program Template or a smaller routine
  meant to drop inside another Program.
- **Publishing** — visibility (public within DUNA), whether it becomes an Offer
  (free or priced), author attribution, and lineage.
- **Safety** — the Sentinel check (malicious content, prompt injection) it must
  pass before publishing; the approval expectation (no manual queue once the
  Sentinel check exists).
- **Picker presentation** — how it appears in the Template picker under the
  skills section when someone builds an Ally or Performer (predefined vs
  community; free vs priced).
- **Acceptance criteria.**

## Workflow
1. Pin the Template's task, the Actor it attaches to, and its home DUNA.
2. Specify the routine (Prompt + Sequence + Triggers + Data + Polling + Tools),
   honoring one Prompt per Program and marking approval points.
3. Specify inputs/outputs, level, publishing (and Offer terms if shared), and
   the Sentinel safety check.
4. Write the spec, render with the bundled converter
   (`npm install docx`; copy `scripts/build_docx.js`; run it), save both files,
   and present.

## Principles
- Keep one Prompt per Program; everything else can be many.
- Templates are chosen, not rebuilt — design them to be picked and composed.
- Safety is the Sentinel's job, applied before publish.
- A specification, not code. Don't fabricate; flag open publishing/pricing
  questions.
