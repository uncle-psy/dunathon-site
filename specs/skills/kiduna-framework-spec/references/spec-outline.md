# Output spec — section-by-section prompts

The deliverable follows the structure below. `assets/spec-template.md` is the
fill-in skeleton; this file explains what each section must answer. Keep the
prose concrete and technology-agnostic. Describe experience and functionality.

## Front matter

Title (`<Framework name> — Framework Specification`), subtitle (the domain and
Actor type), author, date, status. The converter uses this for the title page.

## 1. Identity

Name, version, author, the **Actor type** the resulting Ally represents (DUNA,
Alliance, Member/User, Sponsor, Offer), the domain, and a one-paragraph
description of what the resulting Ally does for adopters.

## 2. Summary

One or two paragraphs an engineer can orient from: what this framework is for,
who adopts it, and the shape of the Ally it produces. Mention the headline
Programs.

## 3. Inform / Wisdom

The starter knowledge base. What ships, what is discovered on the network, and
how the Ally presents knowledge (cards, grids, diagrams, sequences with links).
Mark each item fixed / fill-in / discovered. End with acceptance criteria.

## 4. Instruct / Stance

The actual draft system prompt for the domain, with fill-in slots clearly marked
(for example `[business name]`, `[tone]`). Remember: one Stance per Ally.

## 5. Empower / Abilities

A table of required and optional Abilities, each with the reason it is needed and
the plain-language scope. Note which Programs depend on which Abilities.

## 6. Enact / Programs

One subsection per Program. For each: Prompt (exactly one), Sequence (ordered
steps), Triggers, Database Connections, Polling/Web Hook listeners, Tools, and
the human-approval points. Note long-running and delegation behavior. End with
acceptance criteria covering the cardinality rules and durability.

## 7. Align / Sentinel

Default HEARTS dial settings for the domain and their adjustable ranges; what the
Sentinel watches for; when it brings a human in. If the canonical HEARTS dial set
is not established, say so and propose defaults; list it under open questions.

## 8. Assembly

The Actor binding, the naming and Code issuance, and how the five outputs compose
into the Ally. Note any composition with a parent DUNA or an Alliance.

## 9. Discovery

A single clear statement of what the Ally searches for on the network so the
adopter supplies as little as possible by hand.

## 10. Slots

The consolidated list of every fill-in slot across all phases — the short set of
inputs the adopt flow presents to the person.

## 11. Acceptance criteria and open questions

Pull the per-phase acceptance criteria together, and list open questions and
decisions that need the team (HEARTS dials, any domain-specific unknowns).

---

## Style

Write like a careful engineer: plain, specific, varied sentence length. Avoid
manifesto cadence, avoid "not X, but Y" constructions, avoid ending on a
flourish. The document is rendered in Georgia, black type, by the bundled
converter — don't add colors or styling in the Markdown beyond headings, tables,
lists, bold, and links.
