---
title: The Builder Kit
subtitle: Product specification — understanding and creating the Kiduna Builder Kit
author: David Levine, Kinship Systems
date: June 16, 2026
status: Draft for engineering
footer: The Builder Kit — Product Specification
---

# 1. Purpose and scope

This document specifies the Kiduna Builder Kit: what it is, what it must do, and how the team should think about building it. It is written for the engineers who will build the kit. It describes experience and functionality, and it is about *understanding and creating the Builder Kit* — not the assets that will eventually ship inside it. Those assets (starter frameworks, Program Templates, examples) are specified elsewhere in the knowledge base and merely referenced here.

The Builder Kit is the path that opens Kiduna to developers. Inside the product, a person assembles a Duna and its Allies through the five phases. The Builder Kit extends that same capability to anyone on the open internet: download a kit (or connect a coding agent), authenticate with a Kiduna account, and create Dunas, frameworks, Program Templates, Allies, and Performers programmatically — then build a custom interface, app, or website around them while still interoperating with the Kiduna network.

It is sequenced last. The framework system, Offers, Alliances, the graph database, and Handles come first, because the Builder Kit is meant to expose all of them. Building it last is deliberate: the team wants everything else working so that the kit can surface the whole network rather than a fragment of it.

# 2. What the Builder Kit is

The Builder Kit has three parts that work together:

- **A downloadable kit.** A package a developer can download (a zip), or connect to directly from a coding agent such as Claude Code. It carries the equivalent of the in-product capabilities, the skills, and an API key tied to the developer's Kiduna member account.
- **An API.** The programmatic surface that lets an external client do, through code, what a person does in the product: create and define Dunas, frameworks, Program Templates, Allies, and Performers; register them and obtain Handles and Codes; connect Abilities; run Programs; reach discovery, sessions, settlement, and the graph.
- **A connector.** The piece that authenticates the kit to the member's account and the network, exchanges Codes, and keeps the developer's local work in sync with the live network.

The model is the one a documentation platform uses when it ships a downloadable kit plus a connector that lets a developer manage everything locally and publish to the hosted service. Applied to Kiduna: download the kit, connect it with an account and an API key, and from then on build and manage Allies and Dunas from your own environment.

# 3. The principle: everything a member can do, a developer can do

A developer using the Builder Kit can do everything a member can do in the product, and everything a developer would additionally want to do — with one boundary. They cannot modify Kiduna's core code. They build *on* the foundation, not *in* it. Concretely, a developer can:

- Create Dunas, frameworks, Program Templates, Allies, and Performers through the API, using their member account.
- Get their own GitHub repository and build on the whole foundation fabric — their own complete websites, web apps, mobile apps, and desktop apps — that talk to the network.
- Transfer Codes and participate in agentic commerce through Handles: buy and sell, use the directory, address any Ally anywhere by its Handle.
- Use their own model and tools, and run the whole thing from their own environment.

What they cannot do is change the protocol itself. The core code, the registry mechanics, the settlement, and the safety layer remain Kiduna's. This is what keeps a network of independently-built clients coherent and safe.

# 4. Two modes

The kit supports two uses, and both must work.

**Create an Ally.** Use the kit to build and register an Ally (or a whole Duna, or a Program Template) that runs on the network — the same thing a person could build in-product, produced from outside. A developer can drive this with a coding agent: give the agent the kit and a prompt, and it stands up a working Ally.

**Be an Ally.** Use the kit so the developer's own client *acts as* an Ally. For example, a developer's app asks the network to book something, and the app — as an Ally — finds a verified counterparty by Handle, exchanges Codes, opens a session, and transacts. The developer is not only creating Allies; their own front end becomes one on the network.

# 5. Handles — addressing across the open internet

Handles are the addressing layer the Builder Kit depends on, and they need to be right before the kit ships. Every Duna, Member, Sponsor, and the other entities has a **root Handle** — `@my_duna`, `@my_name` — resolvable on the registry. Handles form a namespace with levels, like a domain name system, so an Ally can be reached at a particular Duna. Uniqueness and the namespace rules are part of this layer.

Handles are what let a developer's app, built anywhere, send a message to the right Ally and always know which Ally it is addressing. Because Handles resolve through the registry and carry into the Code exchange, commerce initiated from an outside app is still verified and attributable. This is why Handles are specified as a prerequisite for the Builder Kit.

# 6. The graph database dependency

The Builder Kit should come after the move to a graph database. The network is a web of active relationships — who hosts whom, which Ally represents which actor, what an Offer's lineage is, which Alliance a Member belongs to. Those relationships are awkward to maintain in a relational store and natural in a graph. Because the Builder Kit exposes exactly these relationships to outside developers, the graph should be in place first so the kit surfaces a clean, queryable model of the network rather than a brittle one.

# 7. What the API must expose

At the level of capability, the API must let an external client:

- Authenticate with a member account, an API key, and a connected wallet (FROST or external).
- Create and define a Duna, a framework, a Program Template, an Ally, or a Performer, including the five phases (Wisdom, Stance, Abilities, Programs, Sentinel).
- Register entities and obtain their Handles and Codes.
- Read and search the registry and directory; resolve a Handle; verify a counterparty's Code.
- Exchange Codes and open a scoped session with another Ally.
- Transact within a session — buy, sell, license, exchange value — and have it settle and route through the Distribution Waterfall.
- Read and write the relevant organizational state in the graph (an Offer and its lineage, an Alliance's membership, a treasury balance).
- Publish a Program Template or list an Element as an Offer.

# 8. Parity, trust, and safety

The Builder Kit should reach parity with the in-product builder over time: anything a person can assemble in the five-phase flow should be expressible through the kit and the API. Because external clients are less controlled than the in-product experience, the trust mechanisms matter more, not less. A kit-built Ally is recognized and trusted only through its Handle, its registry presence, its Code, and the code exchange — exactly like an in-product Ally. Anything a kit-built Ally publishes (a Program Template, an Offer) passes the same Sentinel safety check (malicious-content and prompt-injection screening) as anything built inside the product, so opening creation to outside developers does not open a hole in the network's safety.

# 9. Open source and the fee model

The intent is to open-source the platform once everything works and the code base is cleaned up, rather than at first launch. Opening the foundation to developers is how the network captures the category: first mover, with developers building on it. The economic model that makes this sustainable is a small per-transaction fee on the agentic commerce that flows across the network — on the order of a fraction of a percent — far cheaper than card or legacy payment rails, and viable precisely because settlement is on-chain. The Builder Kit is the mechanism that brings that volume: many developers, many apps, all transacting through the same protocol.

# 10. What the system must provide (consolidated)

- **B1.** A downloadable kit and a connector that authenticate to a member account and the network with an API key, and a path to drive the kit from a coding agent (Claude Code first).
- **B2.** An API exposing the full creation surface (Dunas, frameworks, Program Templates, Allies, Performers, the five phases), registration, Handles, and Codes.
- **B3.** Both modes: create an Ally, and be an Ally.
- **B4.** Registry and directory read/search, Handle resolution, Code verification, code exchange, and scoped sessions.
- **B5.** Transaction within a session, settling and routing through the Distribution Waterfall; read/write of graph state (offers, lineage, membership, treasury).
- **B6.** Publishing — list an Offer, publish a Program Template — under the same Sentinel safety check as in-product creation.
- **B7.** The boundary: everything a member can do plus everything a developer needs, but no modification of Kiduna's core code.
- **B8.** Handles (the root-Handle namespace) and the graph database in place as prerequisites.
- **B9.** A small per-transaction fee model on agentic commerce; an open-source path once the code base is ready.

# 11. Open questions

- **Kit packaging.** Confirm the exact form of the downloadable package, the connector, and the API-key flow, and the first coding-agent integration (Claude Code).
- **Core-code boundary.** Define precisely what counts as "core code" a developer may not modify versus what they may extend.
- **Open-source timing and license.** Confirm the target for open-sourcing and the license, given the licensing and securities work in progress.
- **Fee model.** Confirm the per-transaction fee and how it is taken and split.
- **Sequencing.** Confirm the kit ships after Handles and the graph database, as the last major build before launch readiness.
