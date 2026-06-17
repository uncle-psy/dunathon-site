# Kiduna primitives — canonical vocabulary

Use these terms exactly. They are the shared language for frameworks and specs.
Kiduna is the network and product; the underlying protocol is the Kinship
Agentic Protocol. "Program" is the current term for what older work called a
"skill".

## Actors

An **Actor** is any entity with intelligence on the network, represented and
mediated by an Ally. You never address an Actor directly; you talk to its Ally.

| Actor | What it is | Standing |
| --- | --- | --- |
| **DUNA** | A Decentralized Unincorporated Nonprofit Association registered with the West Virginia Secretary of State. An online organization with legal standing. May have a Coin and a Market. | Registered |
| **Alliance** | An informal organization without legal standing. A collection that can contain DUNAs, Members, Offers, Sponsors, Allies, and other Alliances. No Coin, no Market. | Not registered |
| **Member / User** | An individual human participant. States below. | Varies |
| **Sponsor** | An outside entity that is not a DUNA but is registered elsewhere (LLC, corporation, non-profit, NGO) and holds a contractual relationship with a DUNA. | External |
| **Offer** | A good or service, digital or physical, that can be bought, sold, or transferred. Carries information and can communicate, so it is an Actor. | — |

Any Member can create an Offer, Alliance, Ally, or Sponsor, subject to the
conditions of the DUNA they work within. A Founder (a kind of Member) can create
a DUNA.

## User subtypes

A person's state is contextual to a DUNA and to the Offer they accepted.

| Subtype | Definition |
| --- | --- |
| **Visitor** | Not logged in, or not yet identified. |
| **Guest** | Logged in, but has not joined any DUNA as a Member. |
| **Member** | Met a DUNA's membership requirements, defined by an Offer: a one-time payment, a subscription, or holding a threshold of a token in a wallet. |
| **Founder** | A Member who met the requirements to create a new DUNA (also via an Offer). Only a Founder in the context of the DUNA they created. |
| **Designee** | A designated representative of a DUNA, contactable by the Registered Agent. |
| **Registered Agent** | Holds a physical and mailing address in West Virginia. Designated by the Genesis DUNA (the Big Kiduna). |
| **Wizard** | System administrator with super-user access everywhere. |

## The four agent types (composable)

Created separately, assembled into an Ally. A framework ships them pre-assembled.

| Type | Role | Description |
| --- | --- | --- |
| **Ally** | The one you talk to | Represents an Actor; communicates in natural language with people and other agents; takes direction and supervises the work. A supervisor that can take a user prompt and a system prompt. |
| **Performer** | The one that does the work | Takes direction from an Ally and executes tasks using tools — drafting, posting, filing, paying, building. |
| **Envoy** | The hand in governance | Acts in governance markets under a human's direction: proposing, voting, trading positions as instructed. |
| **Sentinel** | Keeps the field clean | Mediates and moderates; manages and repairs relationships; listens and guides. Produced by the Align phase. |

## The five phases and their outputs

| Phase | Activity | Output |
| --- | --- | --- |
| **Inform** | Build a knowledge base from uploaded or connected documents | **Wisdom** |
| **Instruct** | Write the system prompt | **Stance** |
| **Empower** | Connect tools and accounts | **Abilities** |
| **Enact** | Build the automated behaviors | **Programs** |
| **Align** | Set safety and relationship boundaries | a **Sentinel** (HEARTS dials) |

## Program sub-primitives (the Enact phase)

A Program is built on long-running, durable agent behavior (the "Deep Agents"
pattern: planning, delegation to Performers, context isolation, working memory,
durable execution, human-in-the-loop).

| Part | Cardinality | Purpose |
| --- | --- | --- |
| **Prompt** | exactly one | The instruction driving the Program's work. |
| **Sequence** | one or more | The ordered steps; can branch and offer options. |
| **Trigger** | zero or more | What starts the Program (an inbound email, a calendar event, …). |
| **Database Connection** | zero or more | Data the Program reads or writes. |
| **Polling / Web Hook** | zero or more | Listening: watch an inbox, event source, pub/sub, or webhook and act. |
| **Tool / Ability reference** | zero or more | The Abilities (from Empower) the Program may use. |

The rule that matters most: **one Prompt per Program; everything else can be
many.**

## Supporting objects

| Object | Definition |
| --- | --- |
| **Coin** | A token associated with a DUNA (e.g., to gate membership by holdings). DUNA only. |
| **Market** | A venue associated with a DUNA where offers and positions trade. DUNA only. |
| **Squad's Wallet** | A shared wallet held by a DUNA or an Alliance. |
| **Membership** | A kind of Offer that defines how a Guest becomes a Member. |
| **Code** | An Ally's network identity, placed on sites/apps/social and verified via the registry. |
| **Registry** | The network index of valid Codes. |
| **Session / JWT** | The scoped collaboration two Allies open after exchanging codes. |
| **Lineage** | An Offer's provenance (bought/sold/transferred), held in the graph database. |

## Connectable accounts (initial set, the Empower phase)

Google (Gmail, Docs and Drive, Calendar, Meet), Bluesky, Solana (an external
wallet — connected, not custodied), and Telegram.
