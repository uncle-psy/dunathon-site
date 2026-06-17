---
name: kiduna-service-framework-spec
description: >-
  Specify a Kiduna framework for a SERVICE ORGANIZATION — groups serving
  veterans, active-duty/Guard/Reserve, law enforcement, firefighters and EMS,
  federal first responders, and public-service professionals (social workers,
  dispatchers, crisis-response staff), including people dealing with PTSD,
  suicide risk, and substance use. Produces an engineer-ready specification as
  BOTH a Word document (.docx, Kiduna house style) and Markdown. Use whenever
  the user wants to design, spec, or build a framework for a VSO, unit
  association, IAFF local, FOP lodge, POST commission, first-responder or
  veterans organization — e.g. "spec the 2nd Cavalry framework", "build a service
  framework for a fire department", "create the veterans org framework", "what
  does the Service Alliance framework need". Err toward using this skill whenever
  service organizations, veterans, first responders, Safe Harbor, wellbeing,
  suicide prevention, MyServiceID, the Recognition Market, or Roll Call come up
  alongside frameworks. This is the service-domain specialization of the general
  kiduna-framework-spec skill, with the wellbeing and crisis safety architecture
  built in. It produces a SPECIFICATION for engineers, not code.
---

# Kiduna service-organization framework specification

This skill specifies one Kiduna framework for a service organization, then
produces the spec as a Word document (`.docx`, Kiduna house style: Georgia,
black type, US Letter, TOC, page numbers) and a structured Markdown file. The
output is a design document engineers build from. It is not code, and it should
not prescribe technologies.

It is the service-vertical specialization of the general **kiduna-framework-spec**
skill. Use this one when the organization serves people in service or
high-stress, high-consequence work. The two skills compose (see "How this
composes" below).

## Read this first — the safety line

This vertical serves people who carry real risk of suicide, post-traumatic
stress, and substance use. Every spec this skill produces must hold one line,
without exception:

> The system detects concern and connects people to trained human help. It does
> not provide that help. AI detects and assists; a human delivers care. No
> autonomous action on a crisis flag, a benefit, or a credential without a
> human-verified handoff. The Ally never poses as a clinician or counselor and
> never tries to handle acute risk on its own.

Read `references/wellbeing-and-safety.md` before writing any spec. It carries the
Safe Harbor architecture, the HEARTS framework, the non-negotiable protections,
and the current crisis resources. Surface crisis resources only from
authoritative, current sources — verify them rather than trusting memory.

## Load the canonical material

- `references/service-primitives.md` — service roles, the credential domain
  family, identity & verification, the tool suite, the recognition economy.
- `references/wellbeing-and-safety.md` — the crisis architecture and the
  protections that cannot be removed. **Read this every time.**
- `references/five-phases-service.md` — the five-phase interview checklist
  tailored to service organizations.
- `references/spec-outline-service.md` — the exact section structure of the
  output document.

The fill-in skeleton you complete is `assets/service-spec-template.md`.

## Workflow

### 1. Establish identity

Pin down: the organization's name and what it does; the **service domains** it
covers (military/veterans, law enforcement, fire & EMS, federal first
responders, public-service professionals); the **Actor** it is (usually a DUNA
when it needs legal standing and a treasury, or an Alliance when it is an
informal grouping; a federation is a DUNA with sub-groups or an Alliance of
DUNAs); and a paragraph on what the resulting Ally does for members. Ask only
what changes the spec; infer sensible defaults and state them.

### 2. Interview across the five phases

Walk the phases using `references/five-phases-service.md`, marking each element
**fixed**, **fill-in**, or **discovered**. The phases that carry the most weight
here are Enact (the program suite) and Align (the Sentinel and HEARTS). Capture:

1. **Inform → Wisdom** — history and lineage, roster and chapters, benefits and
   resource directories, events and traditions, archives. What is discovered on
   the network rather than entered. How knowledge is presented (timelines, maps,
   rosters, memorial cards) and what it links to.
2. **Instruct → Stance** — the system prompt, with the service disposition and
   the wellbeing guardrails baked in, and marked slots for creed and tone.
3. **Empower → Abilities** — community/comms, archive storage, mapping, identity
   and recognition rails; mark the sensitive ones (health, benefits) for
   protected handling.
4. **Enact → Programs** — the program suite (Roll Call, LegacyLog, Veteran
   Voices, Service Connected + Safe Harbor, The Campaign, Wall of Honor, Into
   the Breach, The Forge, Recognition Market, Service-Made). One Prompt per
   program; many Triggers, Database Connections, Polling/Web Hook listeners, and
   Tools. Mark human-approval points — anything touching a benefit, a crisis
   flag, or a credential pauses for a human.
5. **Align → Sentinel (HEARTS)** — conservative defaults for this population;
   the un-amendable protections; what the Sentinel watches for and when it
   brings a human in.

Then capture the **agent-interaction model** (the Avatars, Performers, Electors,
and Sentinel the organization runs, scoped by Code, context-isolated, with
human-in-the-loop and an audit trail), the **wellbeing/Safe Harbor config**, the
**identity & verification** setup (domains, Verifying Authorities, tiers, issuer
multisig), the **discovery** config, and the **slot list**.

### 3. Make the document answer "what the system must provide"

The user of this vertical cares about robustness. Include an explicit
consolidated requirements section (the spec outline calls for it) that states,
plainly, what the system must provide across identity, wellbeing, agents,
service capability, and the economic substrate. Write acceptance criteria per
phase. Consider all the ways agents interact — member to org, org to org,
cross-organization — and what each does, with the human-in-the-loop points
named.

### 4. Keep commerce in its place

Agentic commerce is the substrate: it settles payments, carries identity, and
keeps the organization solvent and self-governing. It is rarely what a member
came for. Specify it (the closed recognition economy, the money split, the
verified-ownership storefront) because engineering needs it, and keep it
proportionate. Service and wellbeing lead; commerce runs underneath.

### 5. Write the Markdown, render the Word doc

Copy `assets/service-spec-template.md` to `<org-name>-service-framework-spec.md`
and fill every section, following `references/spec-outline-service.md`. Write
plainly and concretely: describe experience and functionality, not technology.
Avoid manifesto cadence and "not X, but Y" constructions. Be especially careful
and accurate in the wellbeing sections.

Render to the Kiduna house style with the bundled converter:

```bash
# from a writable working directory:
npm install docx                 # once per environment
cp "<this-skill>/scripts/build_docx.js" .
node build_docx.js "<org-name>-service-framework-spec.md" "<org-name>-service-framework-spec.docx"
```

Copying the script next to where `docx` is installed lets Node resolve the
dependency. Keep the front-matter block intact — the converter reads it for the
title page.

### 6. Save and present both files

Save the `.md` and `.docx` to the user's Service Frameworks folder if connected,
otherwise the outputs directory, and present both. Keep the closing note short.

## Output structure

```
1. Identity            name, version, Actor type, service domains, what it does
2. Summary
3. Mission & population the people served and the operating standard
4. Identity & verification   credential, domains, tiers, Verifying Authority
5. Inform / Wisdom
6. Instruct / Stance   (wellbeing guardrails baked in)
7. Empower / Abilities (sensitive ones marked)
8. Enact / Programs    the tool suite; one Prompt each; approval points
9. Align / Sentinel    HEARTS defaults; un-amendable protections
10. Wellbeing & Safe Harbor   the crisis architecture (its own section)
11. Agent-interaction model   every agent, what it does, scope, HITL, audit
12. Training / Community / History & Memorials / Culture
13. Recognition & commerce (kept proportionate)
14. What the system must provide   consolidated requirements
15. Worked example
16. Acceptance criteria & open questions
Appendices: glossary, manifest, credential domains, crisis-resource reference
```

## How this composes with the general skill

This skill specializes **kiduna-framework-spec** for the service vertical. The
general skill defines frameworks, the five phases, the actor primitives, and the
Builder Kit; consult it for any mechanic this skill does not cover, and use it
directly for non-service verticals. This skill adds: the service roles and
credential domains, the wellbeing and crisis safety architecture, the service
tool suite, the training/community/history/memorial/culture patterns, and the
"what the system must provide" emphasis. When both are installed, prefer this
one whenever the organization serves people in service or high-stress work.

## Principles to hold onto

- **The safety line above is absolute.** Detect and connect; never counsel,
  diagnose, or act autonomously on crisis. Verify crisis resources from current
  authoritative sources.
- **This is a specification, not code.** Describe experience and functionality.
- **Service first, commerce underneath.** Weight the document the way the member
  experience should be weighted.
- **Honor the cardinality rules** for Programs: one Prompt; many of the rest.
- **Mark fixed / fill-in / discovered**, and minimize fill-in.
- **Don't fabricate.** Flag composite/illustrative examples as such; confirm
  open items (naming, dates, the canonical HEARTS set) rather than inventing.
