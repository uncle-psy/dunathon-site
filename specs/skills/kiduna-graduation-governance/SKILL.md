---
name: kiduna-graduation-governance
description: >-
  Specify how Alliances are created and managed in a Kiduna, and how an Alliance
  graduates into its own Kiduna through the Governance Market — members voting on
  whether to graduate and how much to seed the new Kiduna (in the DUNA's coin,
  USDC from the treasury, or a combination). Produces a Word (.docx, Kiduna house
  style) and Markdown spec. Use whenever the user wants to design or spec
  Alliances, the Alliance→Kiduna graduation, spinning out a Kiduna, Decision
  Markets, governance markets, Objectives, Proposals, Electors, treasury seeding,
  or buy-in for a new DUNA. Part of the Kiduna Factory family (see
  kiduna-factory-spec). Produces a SPECIFICATION, not code.
---

# Kiduna graduation & governance specification

Specifies the defining Factory mechanic: members forming **Alliances** and
**graduating** them into their own Kidunas through the **Governance Market**.
Produces a Word + Markdown spec. Shared model:
`kiduna-factory-spec/references/operating-model.md`.

## Alliances
An Alliance is a container inside a DUNA where Allies collaborate; it has no legal
standing of its own (that belongs to the DUNA). It can hold Members, Allies,
Offers, Sponsors, and other Alliances. Specify: forming an Alliance; inviting
Allies by Code; giving it an Alliance Ally; shared resources (a squad's wallet);
running its conversations as a mediated group; and representing it as a space in
the Vibe. A Member can create an Alliance.

## Governance — Decision Markets
Governance runs through Decision Markets: **Objectives** hold **Proposals**; each
Proposal resolves through a conditional Pass/Fail market that members'
**Electors** trade at machine speed; a lagging time-weighted average resolves the
outcome; the resolved outcome executes. Asymmetric thresholds protect
mission-critical matters. Every order carries a signed rationale stored in the
graph. Specify the Objective/Proposal/Market/Elector flow and the resolver.

## Graduation
An Alliance graduates when it has enough **mass** — capital, members, or a
mission diverged from the parent. Readiness is judged by members through the
market, not a fixed threshold. The graduation Proposal decides **two things
together**:

1. **Whether** the Alliance should graduate into a new Kiduna.
2. **How much to seed it**, and from where — the new Kiduna's coin, USDC from the
   parent treasury, or a combination — to buy into the new Kiduna and start it.

## The buy-in and after
The seed amount **buys into** the new Kiduna: it becomes the new Kiduna's starting
treasury and the parent's stake. Because economics recirculate, this is the
network investing in its offspring. Lineage records the parent upstream and the
new founders at the apex of the new Kiduna's lineage. After graduation the new
Kiduna files its standing, stands up its DUNA Ally (often from picked Elements),
issues its coin, and appears in the Directory — itself a Factory.

## What to specify
Alliance creation/management; the governance objects (Objective, Proposal,
Market, Elector, resolver, thresholds); the graduation Proposal type (graduate +
seed amount + source); atomic execution of the buy-in into the new Kiduna's
treasury with lineage; and the stand-up of the new Kiduna from Elements. Mark
human-approval points (the buy-in spends treasury; surface for approval per the
governance rules).

## Workflow
1. Specify Alliance creation and management for the DUNA.
2. Specify the Decision-Market objects and resolver.
3. Specify the graduation Proposal (graduate? + seed amount + source).
4. Specify the buy-in execution, treasury seeding, and lineage.
5. Specify the new-Kiduna stand-up from Elements.
6. Fill `assets/spec-template.md` → `<duna>-graduation-spec.md`; render with the
   bundled converter; save both files and present.

## Principles
- Graduation is the network funding its own offspring; the buy-in is investment,
  not expense.
- The market decides both whether and how much, together.
- Lineage is permanent; the parent stays upstream.
- A specification, not code. Don't fabricate; flag open economic parameters.
