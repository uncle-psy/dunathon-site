---
title: Program Templates
subtitle: Publishable Programs (deep-agent routines) for Allies and Performers
author: David Levine, Kinship Systems
date: June 16, 2026
status: Draft for engineering
footer: Program Templates — Product Specification
---

# 1. What a Template is now

"Template" has a specific, reserved meaning. A **Template** is a publishable **Program** — a reusable deep-agent routine that can be added to an Ally or a Performer for a specific task. Templates are smaller than Frameworks. A [Framework](../frameworks/index.html) is for a whole DUNA; a Template is for one task an agent performs.

The distinction that matters: a **Program** is private — you create it in the Enact phase and use it yourself. A **Template** is a Program that has been **published**, so anyone can choose it and add it to their own Ally or Performer. You build a Program for yourself; you make it a Template to share it.

# 2. Program versus Template

In the Enact phase you can create a Program or a Template. They are the same kind of object — one Prompt; many Sequences, Triggers, Database Connections, Polling/Web Hook listeners, and Tools; built on the deep-agent runtime — and they differ only in who can use them.

| | Program | Template |
| --- | --- | --- |
| Who can use it | Just you | Anyone (within the DUNA where it is created; beyond that, if made an Offer) |
| Visibility | Private | Public within its DUNA |
| Where it appears | Your own Allies and Performers | The Template picker when anyone builds an Ally or Performer in that DUNA |
| Can be sold | No | Yes, by making it an Offer |

A Template that is not made an Offer is free, and free Templates within a DUNA are always public within that DUNA — any member can choose and deploy them. Making a Template an Offer is what carries it beyond its home DUNA (section 4).

# 3. How Templates are used — Allies and Performers

Templates are chosen, not rebuilt. When a person creates or modifies an Ally or a Performer, the build flow shows a **Template picker** under the skills section: the predefined Templates the team ships, plus Templates other members have created. The person selects predefined Templates rather than authoring a routine from scratch, and can still create new ones.

This fits the broader assembly model: a person connects their accounts once in Empower, configures Performers separately, and then assembles an Ally by selecting the Performers and Templates that make it up. A Template is one of the composable pieces in that studio of components. Over time a person accumulates more components and can mix and match to do more.

# 4. Publishing, sharing, and Offers

Anyone can create a Template, and the design intent is that a public Template is available immediately, without a manual approval queue. Safety comes from the Sentinel: before a Template is published, a Sentinel agent checks it for malicious content and prompt injection, so "anyone can publish" does not mean "anything can publish."

Sharing has two scopes:

- **Within a DUNA.** A Template created in a DUNA is public within that DUNA. You cannot charge for it there — you are a member of that DUNA, and free Templates within the DUNA are part of its commons.
- **Across DUNAs.** To share a Template with other DUNAs, make it an **Offer**. As an Offer it propagates and becomes available to other DUNAs, appears in the Offers surface, and can carry a price. When a Template is an Offer, it shows in the Enact/Template picker marked free or priced, and a person buys or deploys it. The author appears on it, and lineage routes commissions back to the author when it is reused.

# 5. Two levels of Templates

There are Templates at more than one level. There are smaller Templates *within* Programs — a routine you can grab and drop into a Program you are building — and there are full Program Templates that stand alone as a complete routine. Both are selected from the picker; the difference is granularity. The system should let an author publish at either level and let a builder compose them.

# 6. Relationship to Frameworks

A [Framework](../frameworks/index.html) assembles many things for a DUNA, including Programs. Frameworks and Templates therefore nest: a Framework can ship with Templates already chosen, and a person adopting a Framework can add more Templates to its Allies and Performers. The big Framework specifications are, in effect, aggregates that include Templates among their parts. Specifying Frameworks and Templates as distinct objects lets the team build a Template once and reuse it across many Frameworks.

# 7. What the system must provide

- **T1.** In Enact, the ability to create either a Program (private) or a Template (publishable), same object, different visibility.
- **T2.** A Template picker under the skills section when creating or modifying an Ally or a Performer, listing predefined and member-created Templates, with selection rather than re-authoring.
- **T3.** Public-within-DUNA visibility for free Templates; no charging inside the home DUNA.
- **T4.** Publishing a Template as an Offer to propagate it across DUNAs, with free or priced display in the picker, author attribution, and lineage.
- **T5.** A Sentinel safety check (malicious-content and prompt-injection screening) before publish, in place of a manual approval queue.
- **T6.** Support for Templates at two levels — routines within a Program, and standalone Program Templates — both composable.

# 8. Open questions

- Confirm whether Template publishing needs any upload/approval flow before the Sentinel safety check is built, or whether predefined Templates carry the launch while user-created Templates follow.
- Confirm how a Template's lineage and pricing interact with the DUNA where it was authored versus the DUNAs that adopt it.
- Confirm the picker's surface and how predefined versus community Templates are distinguished and ranked.
