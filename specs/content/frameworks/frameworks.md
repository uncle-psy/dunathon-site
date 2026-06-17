---
title: Kiduna Frameworks
subtitle: Product specification — the system for building DUNA Frameworks
author: David Levine, Kinship Systems
date: June 15, 2026
status: Draft for engineering
footer: Kiduna Frameworks — Product Specification
---

# 1. Purpose and scope

This document specifies what a Kiduna framework is and how the system that produces and runs frameworks should behave. It is written for the engineers who will build that system. It describes user experience and functionality. It does not prescribe languages, frameworks, datastores, or hosting. Where a capability maps cleanly onto a known pattern (for example, the long-running agent behavior described in the Deep Agents material), the document names the pattern so the team has a shared reference, but the implementation choice stays with engineering.

This document is the main specification for **DUNA Frameworks**, and the hub that links to the individual framework specifications. A framework is the in-product experience that lets a person assemble a complete, working Ally by moving through five phases (Inform, Instruct, Empower, Enact, Align), together with the framework layer that pre-fills those phases for a given domain so a person can adopt a ready-made Ally and tailor it.

What this document is not: it is not a catalog of finished frameworks, and it does not commit the team to building any specific framework. Individual frameworks are specified separately, each using the companion framework-specification skill, and linked from here. The first two are the [Service Organizations Framework](../framework-service/index.html) and [The Kiduna Factory Framework](../framework-factory/index.html). This document defines the container those specifications fill.

**A note on terminology: Frameworks and Templates.** These are now distinct. A **Framework** is for a DUNA — it assembles the Wisdom, Stance, Abilities, Programs, roles, and offers for a whole kind of organization (a domain such as Travel, Service, or a Kiduna Factory). A **Template** is reserved for a publishable **Program** — a reusable deep-agent routine that can be added to an Ally or a Performer for a specific task. A Program is private to you; publishing it as a Template lets others add it, and a Template can be offered free or for a price. Templates are covered in [Program Templates](../program-templates/index.html). Elsewhere: *Kiduna* refers to the network and the product; the underlying coordination protocol is the Kinship Agentic Protocol; and *Program* (also called *Magic*) is what earlier drafts called a *skill* (section 5.4).

The **Builder Kit** — the downloadable kit, API, and connector that let someone build on the Kiduna network from outside the product — now has its own document: the [Builder Kit Product Specification](../builder-kit/index.html).

---

# 2. Context: what Kiduna is for

Kiduna is agentic commerce at internet scale and machine speed. The premise is that businesses and individuals will increasingly act through agents, and that those agents need a shared context to transact with each other safely. A bare agent runtime can plan, call tools, hold memory, and run for a long time. It does not, on its own, carry legal identity, delegated authority, organizational membership, governance, a treasury, verifiable accountability, or a way to discover and settle with other parties. Those are the gaps Kiduna fills.

A framework is how a business or an individual establishes that full context quickly. Instead of wiring identity, knowledge, tools, automated behavior, and safety boundaries by hand, a person starts from a framework that already has those parts assembled for their kind of work, then supplies their specifics. Much of the rest can be discovered on the network rather than entered by hand. A person joining a Travel context, for example, does not need to re-describe what travel hosts do; the context can search for and surface that.

The value compounds when these agents start communicating. One person's Ally discovers another's, they exchange codes to confirm both are part of the network and are who they claim to be, and they open a direct session to do business. Frameworks are what make a population of these agents coherent enough to interoperate. They are the unit of supply for the network.

---

# 3. Core concepts and vocabulary

Engineers and framework authors need to share precise language. This section defines the terms used throughout. Section 4 onward assumes these definitions.

## 3.1 Actors

An **Actor** is any entity on the network that has intelligence and is represented by an Ally. Actors are the things that participate: organizations, people, the goods and services they exchange, and the outside parties they contract with. Every Actor is *mediated* by an Ally. You never address an Actor directly; you talk to its Ally, and the Ally acts for it.

The Actor primitives are:

| Actor | What it is | Standing |
| --- | --- | --- |
| **DUNA** | A Decentralized Unincorporated Nonprofit Association registered with the West Virginia Secretary of State. An online organization with legal standing. | Registered |
| **Alliance** | An informal organization without legal standing. A collection that can contain DUNAs, Members, Offers, Sponsors, and Allies, and even other Alliances. | Not registered |
| **Member / User** | An individual human participant. Subtypes are defined in 3.2. | Varies |
| **Sponsor** | An outside entity that is not a DUNA but is registered somewhere else (LLC, corporation, non-profit, NGO) and holds a contractual relationship with a DUNA. | External |
| **Offer** | A good or service, digital or physical, that can be bought, sold, or transferred. Offers carry information and can communicate, so they are treated as Actors. | — |

A DUNA contains things that an Alliance does not. A DUNA can have its own **Coin** and a **Market**; an Alliance cannot. Both can hold Members, Allies, Sponsors, Offers, a shared **Squad's Wallet**, and nested Alliances. A DUNA's offers commonly include a **Membership** offer that defines how someone becomes a Member.

## 3.2 User subtypes

The Member/User Actor has a progression of states. A person's state is contextual to a given DUNA and to the Offer they have accepted.

| Subtype | Definition |
| --- | --- |
| **Visitor** | Not logged in, or not yet identified. |
| **Guest** | Logged in, but has not joined any DUNA as a Member. |
| **Member** | Has met the requirements of membership in a DUNA, defined by an Offer. Requirements may be a one-time payment, a subscription, or holding a threshold amount of a token in a wallet. |
| **Founder** | A Member who has met the requirements to create a new DUNA, also through an Offer. A Founder is a kind of Member, and is only a Founder in the context of the DUNA they created. |
| **Designee** | A designated representative of a DUNA who can be contacted by the Registered Agent. |
| **Registered Agent** | Holds a physical and mailing address in West Virginia. Designated by the Genesis DUNA (the Big Kiduna). |
| **Wizard** | System administrator with super-user access everywhere. Can fix or change things across the system. |

Membership is tied to an Offer. This matters for the framework system: a DUNA framework will normally ship a Membership Offer, and the requirements on that Offer determine who becomes a Member and on what terms.

## 3.3 Agent types

Kiduna distinguishes four kinds of agent. They are composable: each is created as a separate element, and they are assembled together. In a framework, they arrive pre-assembled as a complete Ally that can then be modified.

| Agent type | Role | Plain description |
| --- | --- | --- |
| **Ally** | The one you talk to | Represents an Actor and communicates in natural language with humans and other agents. Takes direction and supervises the work. An Ally is a supervisor; it can take a user prompt and a system prompt. |
| **Performer** | The one that does the work | Takes direction from an Ally and executes tasks using tools — drafting, posting, filing, paying, building. Where there is a job to run, a Performer runs it. |
| **Envoy** | The hand in governance | Acts in governance markets under a human's direction: proposing, voting, and trading positions exactly as instructed. Human judgment exercised at machine speed. |
| **Sentinel** | The one that keeps the field clean | Mediates and moderates, keeping the human and agentic relationship healthy. Manages relationships, repairs them when they fray, listens, and guides. Produced by the Align phase. |

The relationship to common agent architecture: an Ally is the supervisor an Actor speaks through; Performers are the workers it directs to carry out tasks (the subagents of a long-running agent run); Envoys are specialized agents scoped to governance actions; the Sentinel is the alignment layer that watches the relationship rather than doing the task work.

## 3.4 The five phases and what they produce

A complete Ally is built by going through five phases. Each phase produces a named part of the Ally. A framework is, at its core, a set of these parts pre-filled for a domain.

| Phase | Activity | Produces | Short name |
| --- | --- | --- | --- |
| **Inform** | Build a knowledge base from documents you upload or connect | **Wisdom** | knowledge |
| **Instruct** | Write the system prompt | **Stance** | system prompt |
| **Empower** | Connect tools and accounts | **Abilities** | accounts/tools |
| **Enact** | Create the automated behaviors | **Programs** | the engine |
| **Align** | Set the safety and relationship boundaries | a **Sentinel** | guardrails |

Sections 5.1 through 5.5 specify each phase in detail.

## 3.5 Supporting objects

| Object | Definition |
| --- | --- |
| **Coin** | A token associated with a DUNA. Used, among other things, to gate membership by holdings. A DUNA may have a Coin; an Alliance may not. |
| **Market** | A venue associated with a DUNA where offers and positions are exchanged. A DUNA may have a Market; an Alliance may not. |
| **Squad's Wallet** | A shared wallet held by a DUNA or an Alliance. |
| **Membership** | A specific kind of Offer that defines how a Guest becomes a Member of a DUNA. |
| **Code** | A credential placed on a website, app, or social presence that lets an Ally recognize a counterparty as part of the network and confirm who it is. Codes and the session tokens exchanged between Allies are described in section 9. |
| **Lineage** | The provenance record of an Offer as it is bought, sold, or transferred. Held in the graph database (section 9.4). |

---

# 4. What a framework is

A framework is a complete, pre-formed Ally for a kind of work, assembled across all five phases, that a person can adopt and then tailor. It is not a fragment and not a checklist. When someone picks a framework, they receive an Ally that already has Wisdom, a Stance, Abilities, Programs, and a Sentinel wired together and working. They then add their specifics, and they remove or adjust anything that does not fit.

This distinguishes a framework from building from scratch. Building from scratch means moving through the five phases yourself, creating each element and composing them. A framework collapses that into adopt-and-tailor. Both paths must exist. The five-phase builder is the general mechanism; frameworks are the fast path that most people will use.

Two ideas are essential to how frameworks behave.

**Frameworks target an Actor primitive.** A framework is for a DUNA, or for an Alliance, or for a Member, or for a Sponsor, or for an Offer. A Travel DUNA framework produces a DUNA with its Coin, Market, Membership Offer, and a host Ally. A traveler (Member) framework produces a personal Ally for someone who wants to travel. The phase structure is the same across all of them; what differs is the Actor the resulting Ally represents and the defaults each phase ships.

**Most specifics are discovered, not entered.** A framework should lean on the network. When a traveler adopts a Travel framework and joins the Travel DUNA, their Ally should be able to search the network for hosts, offers, and destinations rather than requiring the person to type them in. The framework defines what to look for and where; the person supplies only what cannot be discovered. The design goal is that adopting a framework feels like gaining a capable agent, not filling in a long form.

A framework also has a lifecycle: it is authored, published, adopted, and tailored, and it is versioned so that improvements can be shipped to people who adopted earlier versions. Section 7 specifies the authoring and lifecycle model.

---

# 5. Anatomy of a framework: the five phases

This is the core of the specification. Each phase is defined by what the person does, what the phase produces, the data it captures, the experience it should provide, and the criteria that tell engineering the phase is complete. A framework pre-fills each phase and marks which parts are fixed, which are fill-in slots, and which are discovered.

## 5.1 Inform — building Wisdom

**What it is.** Inform is where the Ally gets its knowledge. The person uploads or connects source material, and the system turns it into the Ally's knowledge base. Each item added is a unit of **Wisdom**. You add Wisdom to the Ally.

**Inputs.** Word documents, Google Docs, PDFs, and folders or drives that can be connected rather than uploaded. Connected sources (a linked Google Doc or Drive folder) should stay live, so that updating the source updates the Wisdom. Uploaded files are a point-in-time copy.

**What it produces.** A knowledge base attached to the Ally, composed of Wisdom items, each traceable to its source.

**Experience.** Knowledge should not be presented to the end user as a wall of text. When an Ally draws on its Wisdom in a conversation, it should be able to render that knowledge as structured cards: a grid of options, a diagram of a sequence with choices and links, an itinerary, a comparison. A Wisdom item should be able to link out to a Google Doc, a video, or an image. The intent is that a person reading the Ally's answer sees something laid out and navigable, with the underlying documents one click away. This connects to the spatial build-out surface (the isometric layout space) where sequences, options, and links can be arranged rather than written as prose.

**Framework behavior.** A framework ships a starter knowledge base for its domain and defines the structure the Ally should use when presenting it (which card layouts, which link types). It marks which Wisdom items are fixed domain knowledge and which are slots the adopter fills with their own material.

**Acceptance criteria.**

- A person can upload Word, Google Docs, and PDF files, and can connect a Google Doc or Drive folder, and see each become a Wisdom item.
- A connected source updates the Ally's Wisdom when the source changes.
- The Ally can present knowledge as cards, grids, diagrams, or sequences with links, not only as text.
- Each Wisdom item is traceable to its source document.
- A framework can pre-load Wisdom and mark items as fixed or fill-in.

## 5.2 Instruct — writing the Stance

**What it is.** Instruct is where the system prompt is written. The Ally's system prompt is called its **Stance**. The Stance sets who the Ally is, how it speaks, what it is trying to do, and how it should treat the people and agents it works with.

**What it produces.** One Stance per Ally.

**Experience.** A framework arrives with a written Stance for its domain, with clearly marked fill-in slots (the name of the business, its tone, its specific commitments). The person edits prose, not configuration. The Stance should be readable and editable as natural language.

**Framework behavior.** The Stance is the part of the framework that most defines its character. A Travel host's Stance reads differently from a veterans' service Stance. The framework author writes the Stance; the adopter personalizes the slots.

**Acceptance criteria.**

- Each Ally has exactly one Stance.
- A framework provides a complete draft Stance with marked fill-in slots.
- The person can edit the Stance as free text and preview its effect.

## 5.3 Empower — connecting Abilities

**What it is.** Empower is where the Ally is connected to tools and accounts. Each connection gives the Ally an **Ability**. The initial set of connectable accounts is Google (Gmail, Docs and Drive, Calendar, and Meet), Bluesky, Solana (an external wallet), and Telegram.

**What it produces.** A set of Abilities the Ally and its Programs can use.

**Experience.** The person authorizes accounts through a connection flow and sees which Abilities are now available. Each Ability should declare what it can do and what access it was granted, so the person understands the Ally's reach. The Solana connection is an external wallet; the system connects to it rather than custodying funds.

**Framework behavior.** A framework declares which Abilities it expects and why (a Travel host needs Calendar and email; a service organization may need Telegram and Bluesky for community). The adopter connects their own accounts to satisfy those declared needs. The framework should make clear which Abilities are required for its Programs to function and which are optional.

**Acceptance criteria.**

- A person can connect Gmail, Docs/Drive, Calendar, Meet, Bluesky, Solana (external wallet), and Telegram, and see each as an available Ability.
- Each Ability shows its granted scope in plain language.
- A framework declares required and optional Abilities, and the system shows the adopter which are not yet connected.
- A Program cannot run if a required Ability it depends on is unconnected; the system surfaces this clearly rather than failing silently.

## 5.4 Enact — building Programs

**What it is.** Enact is the engine of the Ally. Here the person creates **Programs** — the automated behaviors the Ally can run. *Program* is the term for what earlier work called a *skill*. The rename is deliberate: a single skill in the old sense is not an agent, and the word carried the wrong expectation. A Program is a composed unit of behavior; an Ally is the agent that owns and runs Programs. An Ally can have many Programs.

Programs are built to run long. They are the place where the Ally can decompose a goal, maintain a plan, delegate to Performers, work across many steps, and resume after interruption. This is the long-horizon, durable behavior described in the Deep Agents material, and Programs are where it lives.

**Sub-primitives of a Program.** A Program is assembled from these parts:

| Part | Cardinality | Purpose |
| --- | --- | --- |
| **Prompt** | exactly one | The instruction that drives the Program's work. A Program has a single Prompt. |
| **Sequence** | one or more | The ordered steps the Program runs. Steps can branch and can offer options. |
| **Trigger** | zero or more | What starts the Program. A Program can have multiple Triggers (for example, a travel-planning Program could be started by an inbound email or by a calendar event). |
| **Database Connection** | zero or more | Connections to data the Program reads or writes. A Program can have several. |
| **Polling / Web Hook** | zero or more | Listening mechanisms. The Program watches an inbox, an event source, or a pub/sub or webhook endpoint, and acts when something arrives. |
| **Tool / Ability reference** | zero or more | The Abilities (from Empower) the Program is allowed to use. |

The cardinality rules are part of the spec: one Prompt, but potentially many Triggers, Database Connections, Polling/Web Hook listeners, and Tools per Program.

**What it produces.** One or more Programs attached to the Ally, each runnable and observable.

**Behaviors a Program must support.** Because Programs run long and act on the world, the runtime needs to provide the following, regardless of the underlying technology:

- **Planning and progress.** A Program can break a goal into steps, keep a working plan, and track what is done.
- **Delegation to Performers.** A Program can hand sub-tasks to Performers, each with its own focused context, and integrate their results. This keeps a long run from collapsing under its own context.
- **Durable execution.** If a Program is interrupted, it can resume from where it left off rather than starting over. Long runs survive process restarts.
- **Human-in-the-loop.** A Program can pause and ask for approval before consequential actions (signing, paying, sending). The point where it pauses is explicit.
- **Working memory and artifacts.** A Program can keep files and notes as it works and carry state across sessions.

**Experience.** Building a Program is careful, hands-on work. The author wires the Prompt, lays out the Sequence, attaches Triggers, connects data, sets up listeners, and selects Abilities. The person adopting a framework inherits working Programs and adjusts them. The system should make a Program's structure legible: what starts it, what it does in order, what it can touch, and where it will pause for a human.

**Framework behavior.** A framework ships one or more complete Programs for its domain. A Travel framework might ship a trip-planning Program and a booking Program. Each ships with its Prompt written, its Sequence laid out, its Triggers and listeners defined, and its required Abilities declared. The adopter supplies credentials and any local specifics.

**Acceptance criteria.**

- A Program has exactly one Prompt and can have multiple Triggers, Database Connections, Polling/Web Hook listeners, and Tools.
- A Program can run for a long time, delegate to Performers, and resume after interruption.
- A Program can pause for human approval at defined points before consequential actions.
- A framework can ship multiple complete Programs, each with structure visible to the adopter.
- The system shows, for any Program, what triggers it, its ordered steps, its data connections, and its tool access.

## 5.5 Align — setting the Sentinel

**What it is.** Align produces the Ally's **Sentinel**. The Sentinel is the agent that keeps the human and agentic relationship healthy as the Ally operates. It mediates and moderates, manages relationships and repairs them when they fray, listens, and guides. Where Programs do the work, the Sentinel watches how the work affects the relationship and holds the Ally to its intended character.

**The boundaries.** Align sets the Sentinel's boundaries through a named set of dials referred to as **HEARTS**. The dials are set initially based on everything built in the prior phases, and can then be moved and tuned so the Ally stays aligned to its design and keeps the relational field clear.

The exact HEARTS dial set and the meaning of each dial is owned by the Align framework and should be confirmed with the team before implementation; this document treats HEARTS as an ordered set of bounded parameters with sensible defaults. What the spec fixes is the behavior: the dials have defaults derived from the rest of the build, they are adjustable, and the Sentinel enforces them while the Ally runs. (See open questions, section 12.)

**What it produces.** A Sentinel attached to the Ally, configured with HEARTS dial values.

**Experience.** The person sees the dials pre-set from their build and can adjust them. The Sentinel's role should be visible: the person can see when the Sentinel has intervened, mediated, or flagged something, and why.

**Framework behavior.** A framework ships default HEARTS settings appropriate to its domain. A service organization dealing with people in crisis will have different defaults from a gaming community. The adopter can tighten or loosen within allowed ranges.

**Acceptance criteria.**

- Every Ally has a Sentinel.
- HEARTS dials are pre-set from the build and are adjustable within defined ranges.
- The Sentinel enforces its boundaries while Programs run, and its interventions are visible to the person.
- A framework ships domain-appropriate default HEARTS settings.

---

# 6. Assembly: from elements to a complete Ally

The four agent types and the five phase-outputs are composable. Each is created as a separate element, and they are assembled into an Ally. A framework's job is to deliver them pre-assembled. This section specifies the assembly and instantiation flow.

**Composition.** An Ally is the assembly of: its Wisdom (Inform), its Stance (Instruct), its Abilities (Empower), its Programs (Enact), and its Sentinel (Align). Performers are directed by the Ally's Programs; Envoys are attached where the Ally needs to act in governance. Because the parts are independent, a person can swap one without rebuilding the others: change the Stance without touching the Programs, add an Ability that a Program then uses, retune the Sentinel without altering Wisdom.

**Binding to an Actor.** An Ally always represents an Actor. At assembly, the Ally is bound to the Actor it speaks for: this Ally is for this DUNA, this Ally is for this Alliance, this Ally is for this Member, and so on. An Ally takes the name of the Actor it represents — a DUNA Ally, an Alliance Ally, a Member Ally, a Sponsor Ally, an Offer Ally. The Actor type determines what the Ally can contain and do (a DUNA Ally can have a Coin and a Market; a Member Ally cannot).

**Naming and handle.** When the Ally is assembled, the person names it and the system creates a handle, or **Code**, for it. The Code is the Ally's identity on the network and the thing other Allies use to find and verify it (section 9).

**Instantiation flow — building from scratch.**

1. Choose the Actor the Ally will represent (DUNA, Alliance, Member, Sponsor, Offer).
2. **Inform:** add Wisdom by uploading or connecting documents.
3. **Instruct:** write the Stance.
4. **Empower:** connect the accounts the Ally needs, creating its Abilities.
5. **Enact:** create one or more Programs, wiring Prompt, Sequence, Triggers, Database Connections, Polling/Web Hook listeners, and Tools.
6. **Align:** set the Sentinel's HEARTS dials.
7. Name the Ally and receive its Code.
8. The Ally is live: it can converse, run its Programs, and interoperate on the network.

**Instantiation flow — adopting a framework.**

1. Choose a framework (which already targets an Actor type).
2. Review the pre-filled five phases and complete the fill-in slots (name, tone, specific commitments, credentials).
3. Connect the required Abilities.
4. Accept or adjust the default Programs and the default HEARTS settings.
5. Name the Ally and receive its Code.
6. The Ally is live, and can discover the rest of its specifics on the network.

The difference between the two flows is where the work sits. Building from scratch puts the authoring work on the person. Adopting a framework puts it on the framework author, and leaves the person with personalization and discovery.

---

# 7. How a framework is built (the authoring model)

This section specifies what a framework *is* as an authored artifact and how it is produced, published, and maintained. It is the "how to build it" the system must support, distinct from the end-user experience of adopting one.

## 7.1 Who builds frameworks

Two kinds of authors:

- **First-party authors** (the Kiduna team) create the initial library, working carefully and by hand, especially on Programs, where accuracy matters most.
- **Adopters who extend** start from a published framework and modify it, and may save the result as a new framework.

A third path is acknowledged and constrained: a person can create a Program or framework without developer help, but the accuracy of an un-reviewed, user-authored Program is not guaranteed, and the system should set that expectation. The recommended pattern is to start from a reviewed framework and tailor it, and to iterate and test before relying on it. The system should make iteration and testing easy, because that is how a rough user-authored Program becomes a reliable one.

## 7.2 What a framework definition contains

A framework is a definition that carries pre-filled content for all five phases, plus metadata. The fields below are technology-agnostic; Appendix B gives an illustrative manifest.

| Field group | Contents |
| --- | --- |
| **Identity** | Framework name, version, author, the Actor type it targets, domain, and a description of what the resulting Ally does. |
| **Inform** | Starter Wisdom (bundled or referenced documents), the presentation structures to use (card and diagram layouts), and which items are fixed versus fill-in. |
| **Instruct** | The draft Stance with marked fill-in slots. |
| **Empower** | Declared required and optional Abilities, with the reason each is needed. |
| **Enact** | One or more Program definitions, each with its Prompt, Sequence, Triggers, Database Connections, Polling/Web Hook listeners, and required Tools, plus the human-approval points. |
| **Align** | Default HEARTS dial values and their adjustable ranges. |
| **Discovery** | What the resulting Ally should search for on the network, so adopters get discovered specifics rather than entering them. |
| **Slots** | The consolidated list of fill-in slots across all phases, so the adopt flow can present them as a short, guided set of inputs. |

## 7.3 Fill-in slots, fixed content, and discovery

Every element a framework ships is one of three kinds, and the framework marks which:

- **Fixed** — domain content that should not change (how the domain works, standard sequences). The adopter inherits it as-is.
- **Fill-in** — slots the adopter must or may complete (their name, tone, credentials, specific offers).
- **Discovered** — content the Ally fetches from the network at run time rather than at adopt time.

A well-made framework minimizes fill-in by maximizing fixed and discovered content. The adopt experience should feel short because the framework has already done the work and the network supplies the rest.

## 7.4 Framework lifecycle

1. **Author** — create the definition, filling all five phases and marking slots. First-party Programs are built and tested with care.
2. **Test** — run the framework's Programs against realistic cases and confirm they behave. Iterate. This is where un-reviewed frameworks earn reliability.
3. **Publish** — make the framework available to adopt, at a specific version.
4. **Adopt** — a person instantiates an Ally from the framework (section 6).
5. **Tailor** — the adopter personalizes slots and adjusts Programs and HEARTS.
6. **Version and update** — the author ships improvements as new versions; adopters can see and take updates without losing their personalization.

## 7.5 Composability across frameworks

Frameworks and the Actors they create combine. A West Virginia Travel DUNA and a Southern California Travel DUNA can both exist, and can be joined under a Travel DUNA so that joining the parent makes you part of the family and lets you spin out your own. Alliances are the informal way to group DUNAs, Members, Offers, Sponsors, and Allies that do similar work. The framework system should support this: a framework can target a DUNA that is intended to nest under a parent DUNA or to participate in an Alliance, and the discovery configuration (7.2) is what lets a newly adopted Ally find its siblings.

---

# 8. Worked example

A concrete example makes the phase structure legible. The primary example is Travel and tourism, drawn from the New River Gorge case. A short Service contrast follows, to show the same structure carries to a very different domain.

## 8.1 Travel and tourism

The setup: a regional travel organization wants to help visitors discover and book experiences. People need food, transportation, a place to sleep, and things to do. A visitor from far away wants a concierge who can plan a trip and a way to book that keeps them inside a trusted network.

**Actor.** A Travel DUNA. It can have a Coin, a Market, a Membership Offer, hosts as Members, and a host (concierge) Ally. Individual travelers adopt a lighter traveler framework that produces a personal Ally.

**Inform → Wisdom.** The DUNA's knowledge base holds destinations, attractions, lodging, partners, and pricing. When the concierge Ally proposes a trip, it presents an itinerary as cards: a sequence of stops with options and links to a booking page, a video, or a map, rather than a paragraph of text.

**Instruct → Stance.** The host Ally's Stance is that of a concierge: it takes care of the visitor, plans the trip, and makes their life easy. A guest who is only a Visitor or Guest may be largely unknown, so the Stance directs the Ally to learn what the person is looking for before recommending.

**Empower → Abilities.** Calendar and email for scheduling and confirmations; a connection to the booking data; and the network connection that lets the Ally transact with hosts. A traveler's personal Ally connects that person's own calendar and messaging.

**Enact → Programs.** A trip-planning Program: triggered by an inbound request, it gathers the traveler's budget and dates, plans an itinerary, and presents options, pausing for the traveler to choose. A booking Program: it books with one of the network's hosts rather than the open web, so the traveler books with a verified host and does not get ripped off. Booking is a consequential action, so the Program pauses for confirmation before it commits.

**Align → Sentinel.** HEARTS defaults suited to hospitality: attentive, low-pressure, protective of the traveler's budget and data.

**Why a framework.** Because this is a framework, the West Virginia version and the Southern California version are the same structure with different Wisdom and hosts. Both can sit under a Travel DUNA. A traveler who joins the Travel DUNA gets an Ally that can search for hosts and offers across the family, so the traveler enters very little by hand.

## 8.2 Service organizations (brief contrast)

The setup: a veterans' service group and a law-enforcement group do similar work — training, history and experience, support, and community — and can use the same framework shape.

**Actor.** Often an Alliance (a Service Alliance) grouping DUNAs and Members, or a DUNA where standing and a treasury are needed.

**Inform → Wisdom.** Training materials, historical records, support resources, and community information, presented as navigable references rather than text dumps.

**Instruct → Stance.** A Stance oriented to service and support, careful with people who may be in difficulty.

**Empower → Abilities.** Community channels (Telegram, Bluesky) matter more here than booking; email and calendar for coordination.

**Enact → Programs.** Programs for intake, for routing a request to the right resource, and for keeping a community informed. Consequential or sensitive actions pause for a human.

**Align → Sentinel.** HEARTS defaults tuned for care: more conservative, more attentive to distress, quicker to bring a human in.

The phases, the cardinality rules, and the assembly flow are identical to Travel. Only the contents differ. That sameness is the point of the framework system.

---

## 8.3 The specified frameworks

The frameworks specified so far, each its own document: [Service Organizations](../framework-service/index.html) and [The Kiduna Factory](../framework-factory/index.html). The Kiduna Factory is the most important, because it is the framework for the Genesis DUNA — the first DUNA, and the one that seeds all the others.

# 9. Discovery, identity, and the Codes

Frameworks produce Allies; the network is where Allies find each other and do business. Agentic commerce needs four things beyond the agent itself: discovery, identity, authority, and accountability, plus a way to settle. This section specifies the parts of that layer the framework system must expose. It is written at the level of behavior and experience.

## 9.1 Codes on the open internet

An Ally's identity is its **Code**. Codes can live anywhere an Actor has a presence: on a website, in an app, on a social profile. A Code on a page tells a visiting Ally that the party is part of the Kiduna network and lets the visitor confirm who it is. This is analogous to a payment-capability code placed on a site, except it also carries identity and membership, so the visiting Ally knows the counterparty is safe and real rather than anonymous.

## 9.2 The registry

Because Codes are spread across the open internet, the network keeps a registry of the websites, pages, apps, and social presences that carry valid Codes. An Ally can consult the registry to learn what is part of the network and who is behind it. The registry is how an Ally avoids dealing with parties that only claim to be legitimate.

## 9.3 Exchanging codes and opening a session

When two Allies decide to work together, they exchange codes to establish a direct session. The exchange confirms both parties, sets the terms of how long they can work together and what is in scope, and produces a session token (a JWT) that scopes the collaboration. With the session open, the two Allies can do business: book, exchange money, share information. The experience for a person should be simple even though the underlying exchange is not: a person can ask their Ally to book a room, and the Ally finds a verified host, exchanges codes, opens the session, and books, all without the person leaving their own interface.

## 9.4 Lineage and the graph

Offers can be bought, sold, and transferred, and their provenance — their **Lineage** — is recorded in the graph database. The graph and the other datastores, rather than any single Program, hold this organizational state. Frameworks do not need to create wallets or run a settlement Program themselves; they rely on the network's graph and settlement layer. The framework's responsibility is to define Offers and to let the network track their Lineage.

## 9.5 What frameworks must expose

- A resulting Ally must have a Code and be registrable so other Allies can discover and verify it.
- A resulting Ally must be able to consult the registry and verify a counterparty's Code.
- A resulting Ally must be able to exchange codes and open a scoped session with another Ally.
- Offers created by a framework must be representable in the graph so their Lineage can be tracked.

---

# 10. The Builder Kit

The Builder Kit — the downloadable kit, API, and connector that let someone create an Ally and build their own interface on the Kiduna network from outside the product — is specified in its own document: the [Builder Kit Product Specification](../builder-kit/index.html). It is built last, after the framework system and the graph database, and it is the path to opening the network to outside developers and open source. See that specification for the kit's shape, the two modes (create an Ally, be an Ally), the API surface, handles, and acceptance criteria.


# 11. Functional and UX requirements summary

This consolidates the requirements stated above into a checklist engineering can track. Each is technology-agnostic.

## 11.1 The framework system

- **R1.** Provide a five-phase builder (Inform, Instruct, Empower, Enact, Align) that produces a complete Ally.
- **R2.** Inform: accept uploaded Word, Google Docs, and PDF files and connected Google Docs/Drive; produce traceable Wisdom; keep connected sources live.
- **R3.** Inform: let an Ally present knowledge as cards, grids, diagrams, and sequences with links, not only as text.
- **R4.** Instruct: one editable Stance per Ally.
- **R5.** Empower: connect Gmail, Docs/Drive, Calendar, Meet, Bluesky, Solana (external wallet), and Telegram as Abilities, each showing its granted scope.
- **R6.** Enact: build Programs with exactly one Prompt and zero-or-more Triggers, Database Connections, Polling/Web Hook listeners, and Tools.
- **R7.** Enact: Programs run long, plan, delegate to Performers, resume after interruption, and pause for human approval at defined points.
- **R8.** Align: every Ally has a Sentinel with HEARTS dials, pre-set from the build and adjustable, enforced at run time and visible when it intervenes.
- **R9.** Assemble the five outputs into an Ally, bind it to an Actor (DUNA, Alliance, Member, Sponsor, Offer), name it, and issue its Code.
- **R10.** Support both paths: build from scratch, and adopt-and-tailor a framework.

## 11.2 Frameworks as artifacts

- **R11.** A framework carries pre-filled content for all five phases plus identity, discovery, and slot metadata.
- **R12.** Each shipped element is marked fixed, fill-in, or discovered; frameworks minimize fill-in.
- **R13.** Support the framework lifecycle: author, test, publish, adopt, tailor, version, and update without losing personalization.
- **R14.** Support composition: DUNAs nesting under a parent DUNA, and Alliances grouping DUNAs, Members, Offers, Sponsors, and Allies; discovery config lets a new Ally find its siblings.
- **R15.** Make iteration and testing of Programs easy, and set expectations that un-reviewed user-authored Programs are not guaranteed accurate.

## 11.3 Network and commerce

- **R16.** Issue every Ally a Code and make it registrable and verifiable.
- **R17.** Maintain a registry of Codes across websites, apps, and social presences that Allies can consult.
- **R18.** Let two Allies exchange codes and open a scoped session (JWT) and then transact.
- **R19.** Record Offer Lineage in the graph; frameworks define Offers and rely on the network for settlement.

## 11.4 The Builder Kit

The Builder Kit's requirements live in the [Builder Kit Product Specification](../builder-kit/index.html).


## 11.5 Cross-cutting

- **R24.** Programs are long-running and durable, with observability into what a Program is doing, what triggered it, and where it paused.
- **R25.** Consequential actions (signing, paying, sending, booking) require explicit human approval by default.
- **R26.** The Sentinel and HEARTS provide the safety layer; safety is a first-class part of every Ally, not an add-on.

---

# 12. Out of scope and open questions

**Out of scope for this document.** Specific technologies, datastores, and hosting. The content of any particular framework (specified separately). Decentralization and on-chain specifics beyond the external Solana wallet connection; the team has chosen to set decentralization aside for now and to treat the existing lineage handling in the graph as the working approach, deprecating earlier program-based handling where it conflicts with the builder direction.

**Open questions for the team.**

- **HEARTS dials.** Confirm the canonical set of HEARTS dials, the meaning and range of each, and how defaults are derived from the prior phases. Section 5.5 depends on this.
- **Knowledge presentation.** Specify the card, grid, diagram, and sequence layouts the Inform phase supports, and how they connect to the spatial build-out surface. Section 5.1 names the need; the detailed UI spec is pending.
- **User-authored Program reliability.** Decide how the system communicates the reliability expectation for un-reviewed Programs, and what testing affordances ship to help users make their Programs reliable.
- **Builder Kit packaging.** Confirm the kit's form (the downloadable package, the connector, and the API-key flow) and the first coding-agent integrations to support.
- **Naming.** "Program" replaces "skill" in this document. Confirm the term across product surfaces, and confirm the network and product naming (Kiduna, Kinship Agentic Protocol) for external-facing materials.

---

# Appendix A. Glossary

| Term | Definition |
| --- | --- |
| **Actor** | An entity with intelligence on the network, mediated by an Ally: DUNA, Alliance, Member/User, Sponsor, or Offer. |
| **Ally** | The agent you communicate with; represents an Actor and supervises the work. |
| **Performer** | An agent that executes tasks with tools under an Ally's direction. |
| **Envoy** | An agent that acts in governance under a human's direction. |
| **Sentinel** | The agent produced by Align that keeps the human/agentic relationship healthy. |
| **DUNA** | A registered online organization (West Virginia) with standing; may have a Coin and a Market. |
| **Alliance** | An informal organization without standing; a collection of DUNAs, Members, Offers, Sponsors, Allies, and Alliances. |
| **Member / User** | An individual participant; states are Visitor, Guest, Member, Founder, Designee, Registered Agent, Wizard. |
| **Sponsor** | A registered outside entity (LLC, corporation, non-profit) under contract with a DUNA. |
| **Offer** | A good or service that can be bought, sold, or transferred; treated as an Actor. |
| **Inform / Wisdom** | The phase that builds the knowledge base; its output. |
| **Instruct / Stance** | The phase that writes the system prompt; its output. |
| **Empower / Abilities** | The phase that connects tools and accounts; its output. |
| **Enact / Programs** | The phase that builds automated behaviors; its output. Replaces the older term "skill." |
| **Align / Sentinel / HEARTS** | The phase that sets safety and relationship boundaries; its agent; the dial set it configures. |
| **Program sub-primitives** | Prompt (one), Sequence, Trigger, Database Connection, Polling/Web Hook, Tool reference. |
| **Code** | An Ally's network identity; placed on sites/apps/social and verified via the registry. |
| **Registry** | The network's index of valid Codes. |
| **Session / JWT** | The scoped collaboration two Allies open after exchanging codes. |
| **Lineage** | An Offer's provenance, recorded in the graph. |
| **Builder Kit / Kiduna Kit** | The downloadable kit plus API and connector for building Allies outside the product. |

# Appendix B. Illustrative framework manifest

The following describes the parts of a framework definition. It is illustrative and technology-agnostic; field names and encoding are engineering's choice.

- **identity:** name; version; author; target Actor type; domain; description of the resulting Ally.
- **inform:** list of starter Wisdom items (bundled or referenced), each marked fixed or fill-in; the presentation structures to use.
- **instruct:** the draft Stance text, with marked fill-in slots.
- **empower:** required Abilities and optional Abilities, each with the reason it is needed.
- **enact:** a list of Programs. Each Program: one Prompt; an ordered Sequence; zero-or-more Triggers; zero-or-more Database Connections; zero-or-more Polling/Web Hook listeners; required Tool/Ability references; human-approval points.
- **align:** default HEARTS dial values and adjustable ranges.
- **discovery:** what the resulting Ally should search for on the network.
- **slots:** the consolidated list of fill-in slots across phases, for the adopt flow.

# Appendix C. Initial framework domains

The first set of domains to specify as individual frameworks:

- Travel, tourism, local commerce, hospitality
- Service organizations (veterans, first responders, EMTs, pilots, social workers)
- Activist and advocacy organizations
- Health and wellbeing
- Gaming and entertainment
- Coaching, consulting, organizational development
- Culture, community, identity
- Charity, community, non-profit, NGO
- Finance and real estate
- Infrastructure (energy, solar, utilities, phone, mobile, wireless, storage, LLMs)
- Technology and startups
- Legal, accounting, professional services
- Family, home, community
- Psychology, philosophy, fringe, new earth, frontier culture

Each will be specified with the companion framework-specification skill, which walks an author through the five phases and the metadata above and produces a per-framework specification in both Word and Markdown form.
