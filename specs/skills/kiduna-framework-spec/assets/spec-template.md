---
title: [Framework name] — Framework Specification
subtitle: [Domain] · [Actor type] framework
author: [Author], Kinship Systems
date: [Month DD, YYYY]
status: Draft for engineering
footer: [Framework name] — Framework Specification
---

# 1. Identity

- **Name:** [framework name]
- **Version:** [e.g., 0.1]
- **Author:** [name]
- **Actor type:** [DUNA | Alliance | Member/User | Sponsor | Offer]
- **Domain:** [domain]

[One paragraph: what the resulting Ally does for the people who adopt this framework.]

# 2. Summary

[One or two paragraphs an engineer can orient from: what the framework is for, who adopts it, the shape of the Ally it produces, and its headline Programs.]

# 3. Inform / Wisdom

[What starter knowledge ships. What the Ally discovers on the network instead of storing. How the Ally presents knowledge — cards, grids, diagrams, sequences with links — and what it links out to.]

| Wisdom item | Kind | Notes |
| --- | --- | --- |
| [item] | fixed / fill-in / discovered | [source, presentation] |

**Acceptance criteria.** [Uploads and connections become traceable Wisdom; the Ally presents knowledge as cards, not only text; …]

# 4. Instruct / Stance

[The draft system prompt for this domain, written out, with fill-in slots marked like [business name] and [tone]. One Stance per Ally.]

# 5. Empower / Abilities

| Ability | Required? | Why it is needed | Scope (plain language) |
| --- | --- | --- | --- |
| [Gmail / Calendar / Telegram / …] | required / optional | [reason] | [scope] |

[Note which Programs depend on which Abilities.]

# 6. Enact / Programs

## 6.1 [Program name]

- **Prompt (one):** [the single instruction driving this Program]
- **Sequence:** [ordered steps; note branches and option points]
- **Triggers:** [zero or more — inbound email, calendar event, user request, schedule]
- **Database Connections:** [zero or more]
- **Polling / Web Hook:** [zero or more — inbox, event source, pub/sub, webhook]
- **Tools / Abilities:** [zero or more, from Empower]
- **Human-approval points:** [where it pauses before consequential actions]
- **Long-running behavior:** [planning, delegation to Performers, resume-after-interruption]

[Repeat 6.x for each Program the framework ships.]

**Acceptance criteria.** [One Prompt per Program; durable long-running execution; human approval at defined points; structure visible to the adopter.]

# 7. Align / Sentinel

| HEARTS dial | Default | Adjustable range | Rationale |
| --- | --- | --- | --- |
| [dial] | [default] | [range] | [why this default for this domain] |

[What the Sentinel watches for in this domain and when it brings a human in. If the canonical HEARTS dial set is not established, say so here and list it under open questions.]

# 8. Assembly

[The Actor the Ally is bound to; naming and Code issuance at the end; how the five outputs compose. Note any composition with a parent DUNA or an Alliance.]

# 9. Discovery

[A single clear statement of what the Ally searches for on the network so the adopter enters as little as possible.]

# 10. Slots

[The consolidated list of every fill-in slot across all phases — the short set of inputs the adopt flow presents.]

- [slot 1]
- [slot 2]

# 11. Acceptance criteria and open questions

[Pull the per-phase acceptance criteria together.]

**Open questions**

- [decision needed from the team — e.g., HEARTS dial set, domain-specific unknowns]
