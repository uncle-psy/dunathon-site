---
title: The Kiduna Factory
subtitle: Framework specification and Genesis Duna blueprint — The Big Kiduna
author: David Levine, Kinship Systems
date: June 16, 2026
status: Draft for engineering
footer: The Kiduna Factory — Framework Specification
---

# 1. Purpose and scope

This document specifies the Kiduna Factory framework and, at the same time, the first Duna built from it: the Genesis Duna, known as The Big Kiduna. It is written for the engineers building the platform. It describes experience and functionality, grounded in the working prototype, and leaves technology choices to engineering except where a choice is already settled (Solana, FROST custody, a vector store for Wisdom).

A Kiduna Factory is a Kiduna whose purpose is to teach about Kidunas, grow them, manage them, and spin new ones out. An accelerator, a venture studio, or a large enterprise could run one. The Big Kiduna is the canonical instance: the legal and economic root of the network, the place everyone enters, and the engine that seeds every other Duna.

Two ideas make this framework unusual. First, its Programs are foundational. The behaviors specified here — onboarding through Chat, the contextual help dock, Vibes worlds, Alliance management, graduation through the Governance Market, Elements offered in a marketplace, Codes, notifications — appear in most other frameworks. A service organization, a travel Duna, a community mesh all inherit large parts of what is specified here. Second, every Kiduna is in some way a Factory. Most start with a broad scope, and members spin their Alliances out into their own Kidunas when those Alliances reach enough mass, in capital, in members, or in a mission that has drifted from the parent. So the Factory is both a specific framework and the substrate of the whole network.

This specification is grounded in the prototype in the Dunathon folder, which is a faithful front-end model of the live system. Where the prototype is branded "Dunathon" with a coin shown as "DT," that is the launch-event theming of the Genesis Duna; the canonical names used here are The Big Kiduna for the Genesis Duna and KIDuna for its coin. Section 19 records naming reconciliations.

It builds on two earlier documents — the master "Kiduna Frameworks — Product Specification" (the five phases, the actor primitives, the Builder Kit) and the "Service Organizations" specification — and does not repeat their definitions.

---

# 2. The Big Kiduna — the Genesis Duna

The Big Kiduna is the genesis Duna: the legal and economic root every other Duna grows from. Everyone in the network is a member of it, which is what gives people and their agents legal standing. Its stated purpose, taken from the prototype's own Duna page, is to onboard members into the network and to support the creation of new Dunas. That is the Factory mission in one line.

The network of Dunas is the DunaVERSE. The Big Kiduna is the on-ramp to it. A person arrives, is met by an Ally, gains standing by holding the genesis coin, learns how the network works by using it, forms Alliances, and — when an Alliance is ready — graduates it into a new Kiduna that the network helps fund. The Big Kiduna holds the treasury, the registry relationship, the issuer authority for the genesis coin, and the library of foundational Elements other Kidunas draw from.

The prototype shows the Genesis Duna with illustrative figures (members, treasury, Dunas seeded, a coin price). Those numbers are placeholders. What matters for the spec is the role: a Duna that exists to make more Dunas, and to keep them coordinated under one protocol, one registry, one economic waterfall.

---

# 3. The operating model (grounded in the app)

The prototype establishes a concrete model the Factory framework assumes. This section states it so the rest of the document can build on it.

## 3.1 Two modes

The app runs in two modes. **Active mode** is for participating: Chat, Vibe, Seek, Vote, Earn. **Builder mode** is for making and running things: Allies, Programs, Offerings, Coins, Codes, Gatherings, Objectives, Markets, Electors, Team, and the rest. A person moves between them; the rail and the bottom navigation change with the mode.

## 3.2 Levels set by coin-holding

A person's level in a Duna is set by how much of that Duna's coin they hold, valued in USDC. There is no subscription. Hold more, rise; sell, step down. The levels and their base thresholds:

| Level | Base holding (USDC) | Note |
| --- | --- | --- |
| Guest | $0 | Not yet a member; read-only in most places |
| Member | $10 | Can vote, chat, join |
| Founder | $100 | Can run a Duna, list Offerings, open Markets, build Alliances |
| Builder | $1,000 | Can build Programs, higher runtime |
| Sponsor | $10,000 | Offering Allies, Electors, at scale |
| Catalyst | $100,000 | Enterprise |
| Luminary | $1,000,000 | Planetary |

Each Duna carries a multiplier on these thresholds, so a coin can be worth more or less to hold than the genesis coin. Card purchases (Stripe) cap near $25,000, so Catalyst and Luminary are reached by loading a wallet with USDC directly. Initial coin purchases are non-transferable for 30 days. The level a person holds determines which Allies they can create and which Builder surfaces they can open.

## 3.3 Roles and what each can create

Level maps to creative capability:

| At this level | A person can create |
| --- | --- |
| Member | Personal Allies and Alliances |
| Founder | Duna Allies (run a Duna) |
| Builder | Programs |
| Sponsor | Offering Allies (Sponsor allies) |

This is the spine of the Factory: a person enters as a Guest, becomes a Member, forms Alliances, reaches Founder, and graduates an Alliance into a Duna with its own Duna Ally.

## 3.4 Allies — five types, three states, three visibilities

Allies are the intelligent agents that represent people, organizations, programs, and alliances. The five types are **Duna Allies**, **Personal Allies** (member allies), **Alliances**, **Sponsors**, and **Programs**. Any one can be the **Primary** for its principal. Each Ally is **Draft** (private, unfinished), **Testing** (shareable to invitees), or **Published** (live). Each also has a visibility: **Public** (accepts connection from any Ally, listed in Seek), **Private** (listed in Seek but requires a Code with a matching entry Claim), or **Secret** (not listed; reachable only by entering its Code somewhere that can read Codes — a search box, a Duna Ally, anywhere). Codes are always exchanged when two Allies connect; visibility only decides who may initiate.

---

# 4. Chat — how people and Allies communicate

Chat is the primary surface where people communicate with Allies and Allies communicate with people. The framework treats it as the front door to everything. Two distinct chat surfaces exist, and both matter.

## 4.1 The main Chat

The main Chat holds a person's conversations with the Allies that matter to them: the **Duna Ally** of the Duna they are in (their Host's Ally, for a new arrival this is The Big Kiduna), their **Personal Ally** (a concierge that tracks what matters to them across the DunaVERSE), and any **published Allies** they engage. Each conversation opens with a greeting written from that Ally's Stance. A new arrival's first conversation is with the Duna Ally, which greets them and offers a few starting moves rather than a blank box.

The composer supports text and voice and shows which model is answering (the prototype offers Auto, GPT, Claude, and an on-premise option). A standing line under the composer states the trust posture: Allies act for their principal under real identity, authority, and accountability.

## 4.2 The always-on contextual Duna-Ally dock

On every page there is a collapsible dock — "Ask [Duna] ✦" — that opens the **core Duna Ally for the Duna currently in use**. This is help, and it is contextual: it knows which page the person is on and opens with an intro and a set of chips relevant to that page. It is always available, on every surface, so a person is never more than one tap from the Ally that can explain the page or take them somewhere. The dock Ally answers from the Duna's Wisdom and can navigate the person to where they need to go.

This dock is the single most important interaction pattern in the framework, because it is how the network teaches itself to a newcomer without a manual.

## 4.3 How chats are mediated — everything flows through Allies

Chat looks multi-user, and in effect it is, but every message is mediated by an Ally. A person does not message another person directly; their Personal Ally and the other party's Ally carry the exchange, under the identity, authority, and permissions each Code grants. This is what makes the network safe at machine speed: an Ally can decline, summarize, schedule, or escalate; it can apply the alignment boundaries (Section 7.4) before anything reaches a person; and it can act on its principal's behalf when the principal is away. A "group chat" is a set of Allies convened around a shared context (an Alliance, a Gathering, a Vibe room), each representing its principal.

Mediation has consequences the spec must honor. Messages between principals carry the sender Ally's Code and scope. A receiving Ally enforces its principal's preferences (Section 14) before delivering. Consequential requests (payments, joins, commitments) are surfaced for human approval rather than executed silently. The audit trail records the mediated exchange.

## 4.4 Contextual chips — and what produces them

The dock and the main Chat present **chips**: short suggested moves. A chip is one of three kinds — a **question** the Ally answers inline, a **navigation** that takes the person to a view, or an **action** the Ally performs (with approval where needed). Chips are contextual: they change with the page, the person's level, and what the person is likely to need next.

The user asked that the spec include enough of the Stance, the Wisdom, and the Programs to *produce* these chips. Here is the mechanism the system must implement.

Chips are generated, per context, from three inputs:

1. **The Stance** (the Duna Ally's system prompt) sets the voice and the rules for which moves to offer — for example, never push a purchase, always offer an exploratory option, prefer the next concrete step.
2. **The Wisdom** (the knowledge base, Section 6.2) supplies the answers behind question-chips and the facts that decide which chips are relevant (what this Duna is, how levels work, what an Alliance is).
3. **The Programs** (Section 6.3) supply the action-chips — each action a chip can take corresponds to a Program the Ally can run, scoped to the person's level and Code.

The prototype encodes this directly: each Builder/Active view has a dock context with an intro and a list of chips, each chip carrying either an answer (`a`), a navigation target (`nav`), or an action. The catalog of these per-view chips is in Appendix C, drawn from the prototype, and is the starting set the Genesis Duna ships. The acceptance criterion is that, on any page, the Duna Ally can produce a small, correct set of chips from Stance + Wisdom + Programs, scoped to the person's standing.

## 4.5 What the system must provide for Chat

- A main Chat holding conversations with the Duna Ally, the Personal Ally, and published Allies, each opening from its Stance.
- An always-available contextual dock on every page, opening the current Duna's Ally with a context-appropriate intro and chips.
- Mediation of all person-to-person communication through Allies, with Code-scoped permissions, preference enforcement, human approval for consequential actions, and an audit trail.
- Chips of three kinds (question, navigation, action), generated per context from Stance + Wisdom + Programs and scoped to the person's level and Code.
- Text and voice input and a visible model selector.

---

# 5. The Duna Ally of the Genesis Duna

The Duna Ally is the agent that represents the Duna itself and greets every arrival. For The Big Kiduna it is named The Big Kiduna (handle @the_big_kiduna), and it carries the line "The Foundation of the Agentic Internet." This section specifies enough of its Elements to make the Chat and the chips work.

## 5.1 Stance (the system prompt)

The Stance is short and load-bearing. It should establish, in plain language: that the Ally is the host of the genesis Duna and the on-ramp to the DunaVERSE; that its job is to welcome people, explain the network, and help them get standing and form Alliances; that it never pressures a purchase and always offers an exploratory path; that it speaks plainly and briefly and offers concrete next steps as chips; that it acts under real identity and accountability and pauses for human approval on anything consequential; and that it routes a person to the right Ally or view rather than trying to do everything itself. An illustrative Stance is given in Appendix B. The Stance is one document per Ally and is editable as prose.

## 5.2 Wisdom (the knowledge base)

Wisdom is the Duna Ally's knowledge, held in a vector store (Pinecone is the working choice) so the Ally can retrieve the right passage for a question or a chip. For The Big Kiduna, Wisdom covers: what a Kiduna and a Duna are; the actor primitives; the levels and how coin-holding sets them; what Alliances are and how they graduate; what Elements and Offers are; how Codes and Claims work; how Vibes work; the treasury and the economic waterfall; safety and alignment; and the catalog of foundational Programs. Each Wisdom item is chunked for retrieval, tagged by topic and by the level it is relevant to, and traceable to a source document. The same Wisdom serves three jobs: answering in the main Chat, answering question-chips in the dock, and deciding which chips are relevant on a given page. Wisdom can be added through the Inform phase as documents, connected Drive folders, or published Elements from other Kidunas.

## 5.3 Programs (Magic)

Programs are the automated behaviors the Ally can run; in the Factory and the marketplace they are also called **Magic**. A Program is built in the Enact phase and bundles **Skills** (each Skill a line in a Skill.md file — "when this, do that"). One Program has one Prompt and can have many Triggers, Database Connections, Polling/Web Hook listeners, and Tools. The foundational Programs the Genesis Duna ships — and that most other frameworks inherit — are listed in Section 16. Each action-chip in the Chat corresponds to one of these Programs, scoped to the person's level and Code.

---

# 6. Elements — the building blocks, and the library

An **Element** is a reusable building block of a Kiduna. The Elements are the outputs of the five phases and a few more: **Wisdom** (Inform), **Stance** (Instruct), **Abilities** (Empower), **Programs / Magic** (Enact), and the **Sentinel / HEARTS** settings (Align), plus **Vibes** scenes, **Codes**, **Coin** configurations, and **Offers** themselves. Elements are what a Kiduna is made of.

The Factory's teaching-and-growth function runs on Elements. A Founder can **explore the Elements of The Big Kiduna** — its Wisdom, its Stance, its Magic, and the rest — and either add chosen Elements to a Kiduna they already run, or **start a new Kiduna by picking Elements** from the Big Kiduna's library. This is how a new Duna stands up quickly: it inherits proven foundational Elements rather than building from nothing. It is also how the Factory teaches, because exploring the Big Kiduna's Elements is how a person learns what a good Kiduna is made of.

The library of Elements is browsable in the network Directory and inside the Big Kiduna's own pages. Each Element shows what it is, who made it, its lineage, and its price.

---

# 7. Vibes — the spatial, living world of the Duna

Vibes are isometric, game-like environments that represent a Duna and its actors spatially, and that are sometimes themselves games. They are as important as Chat. Where Chat is the conversation, Vibes is the place.

## 7.1 Why Vibes exist

Before agentic AI, people moved files back and forth — documents, videos, images, slide decks — and the state of a shared effort lived in those files and in people's heads. Agents change that. Agents are always active, and things change continuously. Vibes are communal worlds where state is continually updated, so that the current state of a Duna is something you can see and move through rather than reconstruct from a folder of files.

## 7.2 What a Vibe shows

A Vibe organizes a Duna visually and spatially. In a Kiduna Factory, and in any Kiduna that inherits this, a Vibe shows:

- **Spaces that represent Dunas and Alliances** — a Duna is a place; the Alliances inside it are places within it.
- **Sprites or figures that represent Allies** — the Allies of Members, of Dunas, of Alliances, of Sponsors, and of Programs each appear as a figure in the world.
- **Documents represented as objects** — a Google Doc, a Drive folder, a slide deck, a video, an image can each appear as a thing in the space.
- **Coins and other economic objects** — a Duna's coin, a treasury, an Offer can be represented.

Because agents are always active, the world updates continuously: a sprite moves when its Ally acts, a document object changes when the document changes, a treasury object reflects the current balance, a new Alliance appears as a new space when it forms.

## 7.3 Kinds of Vibe

The prototype's Vibe surface lists the kinds the Genesis Duna ships: **Game Platforms** (isometric games played with your Allies), **Vibe Rooms** (live, Ally-hosted spaces around a shared interest), **Quests** (missions posted by Dunas that earn coin), **Studios & Media** (creative tools built by Builders), **Nightpapers** (the living canon of the DunaVERSE — read, discuss, remix), and an index of all experiences. Some Vibes are pure representation of a Duna's state; some are interactive rooms; some are full games. The framework supports all of these as published experiences.

## 7.4 Alignment inside Vibes

Vibes are interactions, so they carry alignment. A Code's `vibes` Claim binds an alignment profile (the prototype default is `hearts:default`), and the Sentinel's HEARTS settings (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis) govern how Allies behave inside a Vibe just as they do in Chat. A Code can also splash a person directly into a specific Vibe (`splash: vibe:<id>`), so an invitation can drop someone straight into a game or a room.

## 7.5 What the system must provide for Vibes

- Isometric, spatial worlds that represent a Duna and the Alliances within it as places.
- Sprites for the Allies of Members, Dunas, Alliances, Sponsors, and Programs.
- Representations of documents (Docs, Drive folders, decks, video, images) and economic objects (coins, treasury, Offers).
- Continuously updated shared state, reflecting that agents are always active.
- Vibe kinds: game platforms, rooms, quests, studios/media, Nightpapers, and an experiences index — some of which are games.
- HEARTS alignment inside Vibes, and Code splash directly into a Vibe.

---

# 8. Alliances — create and manage

An Alliance is a container inside a Duna where Allies collaborate. It has no legal standing of its own (that belongs to the Duna). It can hold Members, Allies, Offers, Sponsors, and other Alliances. Alliances are how work organizes itself inside a Duna before any of it is formal.

The Factory framework ships the tools to create and manage Alliances: forming one, inviting Allies into it (by Code), giving it its own Alliance Ally, holding shared resources (a squad's wallet), running its conversations as a mediated group, and representing it as a space in the Vibe. A Member can create an Alliance. Managing one includes membership, shared Offers, and the Alliance's readiness to graduate (Section 9).

Alliances matter to the Factory because they are the raw material of new Kidunas. Most new Dunas begin as an Alliance that grew.

---

# 9. Graduation — Alliance to Kiduna through the Governance Market

This is the defining Factory mechanic. An Alliance graduates into its own Kiduna when the members decide it should, and the network seeds it with capital. The decision and the funding both run through the Governance Market.

## 9.1 When an Alliance is ready

An Alliance graduates when it has enough mass: enough capital, enough members, or a mission that has diverged enough from the parent Duna that it should stand on its own. There is no fixed threshold; readiness is judged by the members through the market.

## 9.2 The graduation decision

Graduation is a governance decision made through Decision Markets, the same mechanism that governs every Duna. An Objective ("graduate this Alliance") holds a Proposal, and the Proposal resolves through a conditional market in which members' Electors trade Pass/Fail at machine speed. The market resolves on a lagging time-weighted average, and the resolved outcome executes. Members vote on two things together:

1. **Whether the Alliance should graduate** into a new Kiduna.
2. **How much money to seed it with**, and from where — the new Kiduna's own coin, USDC from the parent treasury, or a combination — to buy into the new Kiduna and get it started.

## 9.3 The buy-in and treasury seeding

Graduation is funded by a buy-in. The members decide an amount, denominated in the parent's coin, in USDC from the treasury, or a mix, and that amount buys into the new Kiduna — it becomes the new Kiduna's starting treasury and the parent's stake in it. Because every Duna's economics recirculate (Section 12), the buy-in is an investment by the network in its own offspring rather than an expense. Lineage records the relationship: the parent sits upstream of the new Kiduna, and the founders of the new Kiduna sit at the apex of its own lineage.

## 9.4 After graduation

The new Kiduna files its own legal standing, stands up its Duna Ally (often by picking Elements from the parent and the Big Kiduna), issues its own coin if it wants one, and appears in the Directory and the DunaVERSE. The parent keeps its lineage position. The new Kiduna is itself, in some way, a Factory.

## 9.5 What the system must provide for graduation

- Objectives, Proposals, and governance Markets (with signed rationales and asymmetric thresholds for protected matters) that members' Electors trade.
- A graduation Proposal type that decides both whether an Alliance graduates and the seed amount and source (coin, treasury USDC, or a combination).
- Atomic execution of the buy-in into the new Kiduna's treasury, with lineage recorded.
- Stand-up of the new Kiduna from chosen Elements, with its own Duna Ally, coin, and registry entry.

---

# 10. Elements as Offers — the marketplace

In The Big Kiduna, people can add Elements as **Offers**, free or paid. This is the marketplace through which the Factory grows the network: foundational Elements are offered, Founders acquire them, and new Kidunas are assembled from them.

## 10.1 How an Element becomes an Offer

A maker takes an Element — a piece of Wisdom, a Stance, a Program (Magic), a Vibe, a Coin configuration — and lists it as an Offer in the Big Kiduna. The Offer can be free or priced. Each Offer shows its price in **both** US dollars and Kiduna Coins, so the value is legible in familiar terms, but the user **pays in KIDuna**. The displayed USD figure is a reference; settlement is in the coin.

## 10.2 Pricing, payment, and lineage

The price Claim on the Offer's Code carries the amount (the prototype shows `price: usd:10/once`, displayed alongside the coin amount). Payment is in KIDuna, settled on-chain. Every Offer carries lineage, so when an Element is acquired and reused, the original maker sits upstream and earns lineage commissions through the Distribution Waterfall (Section 12). This is what makes authoring good Elements worthwhile: a well-made Program or Stance can be adopted across many Kidunas, and its maker earns each time.

## 10.3 Free Elements and teaching

Many foundational Elements are free, because the Factory's first job is to teach and to lower the cost of starting a Kiduna. A Founder can pick free Elements from the Big Kiduna to stand up a new Duna at no cost, and pay only for the specialized Elements they choose. Free and paid Elements sit in the same library and are acquired the same way; the difference is the price Claim.

## 10.4 What the system must provide for Offers

- Listing any Element as an Offer, free or priced, under a Duna's standing.
- Showing each Offer's price in USD and in Kiduna Coins, with settlement in KIDuna.
- Lineage on every Offer, with commissions routed through the Waterfall to the maker and the referral chain.
- A browsable library of Elements (Wisdom, Stance, Magic/Programs, Vibes, Coin configs) in the Directory and the Big Kiduna's pages.

---

# 11. Codes and Claims — how trust, onboarding, and value travel

Codes are how trust travels in the network, and they carry far more than an invitation. A Code is an invitation and a credential in one, signed by the Ally that issues it, resolving on the West Virginia registry. Codes are always exchanged when two Allies connect. They also carry onboarding, pricing, bonuses, airdrops, and the alignment profile, which makes them central to nearly everything the Factory does.

## 11.1 The Claims

A Code is a set of Claims. The Genesis Duna ships this Claim set (from the prototype):

| Claim | Meaning |
| --- | --- |
| issuer | the sender's Kinship handle |
| wallet | the issuer's Solana FROST wallet public key |
| agent | the Ally that created and delivers the Code |
| context | what the Code grants access to (e.g., a Duna) |
| role | the role assigned to the recipient |
| scope | specific permissions within the role (e.g., chat:read, vibe:read) |
| splash | what is unlocked and where the recipient lands first (e.g., a chat with the Duna Ally, or a specific Vibe) |
| ref | the referral chain, for attribution |
| redeem_by | when the Code can no longer be redeemed |
| ttl | how long access persists after redemption |
| max_uses | maximum redemptions |
| bound-to | restrict to a recipient, group, or domain |
| actions | operations triggered on redemption (e.g., an airdrop) |
| benefits | economic value attached (e.g., a bonus percentage of coins) |
| vibes | the alignment profile governing the interaction (e.g., hearts:default) |
| price | the price of the context (e.g., usd:10/once) |
| terms | additional contract terms (e.g., jurisdiction) |
| access | visibility of the shared context (public, private, secret) |

## 11.2 What Codes do for the Factory

- **Onboarding.** A Code brings a person in, sets their role and starting scope, splashes them into their first screen (usually a chat with the Duna Ally), and makes the issuer their Host. Host and joiner earn coin together.
- **Pricing Elements.** The price Claim turns a Code into the checkout for an Offer (Section 10).
- **Bonuses and airdrops.** The benefits Claim attaches bonus coins; the actions Claim can trigger an airdrop on redemption. This is the mechanism behind welcome bonuses, contests, and campaigns (Section 15).
- **Connecting Allies.** Every Ally-to-Ally connection exchanges Codes; visibility (public/private/secret) decides who may initiate.
- **Alignment.** The vibes Claim binds the HEARTS profile that governs the interaction.

Codes have Metrics — joins per Code, coin earned as Host, active Codes — so a person can see how their invitations and Offers perform.

---

# 12. The economy

The economy is the substrate that lets the Factory fund new Kidunas and reward the people who build Elements. It is specified here at the level the framework needs.

## 12.1 Coins

Each Duna can issue its own coin; The Big Kiduna's is KIDuna, the genesis coin. A coin's USDC price and the Duna's multiplier set what each level costs to hold. Coins are held in a Solana FROST wallet (the key split so no single party can move funds alone; recovery without a seed phrase). Wallets fund through Stripe and on-ramps, an external wallet (Phantom, Solflare), or a direct USDC transfer. Levels follow holdings automatically (Section 3.2).

## 12.2 Treasury and the Distribution Waterfall

A Duna holds a treasury. Real money — membership, sponsorship, computation, trading, and Offerings — flows through the Distribution Waterfall: a portion pays lineage commissions up the referral chain (four levels), and the remainder is split among the Duna treasury, the Sponsor, the Curator, and the protocol. Surplus reinvests in the Duna's purpose; there is no outside shareholder to extract to. The graduation buy-in (Section 9) draws from the treasury and the coin, and seeds the new Kiduna's treasury.

## 12.3 Team and splits

A Duna's Founders define roles and revenue splits at the Duna level — Founder, co-founders, operators, and a community pool — and can reassign the Founder role itself. This is how a graduated Kiduna divides what it earns.

---

# 13. Tools — internal and external

The Factory framework specifies both the internal surfaces an Ally uses and the external accounts it connects through the Empower phase.

## 13.1 Internal tools

Chat (main and the contextual dock), Vibes (worlds, rooms, games, quests), Codes, the Wallet and coin surfaces, Seek and the Directory, Markets and Objectives and Electors (governance), Gatherings (events, calls, votes), Library and Upload (assets and Wisdom intake), and Offerings. These are the surfaces the Duna Ally and the person share.

## 13.2 External tools

The Empower phase connects external accounts that become the Ally's Abilities. For the Genesis Duna specifically, the framework provisions and connects: **Telegram** (a Kiduna channel and bot for community and notifications), **Bluesky** (public posting and listening), Google (Gmail, Calendar, Drive/Docs for coordination and Wisdom intake), and the **Solana** wallet. The framework should treat social presence as first-class for a Factory, because the Factory grows by reaching people where they are.

## 13.3 Setting up the Genesis Duna's social presence

As part of standing up The Big Kiduna, the framework provisions the network's social and messaging channels: a Kiduna presence on Bluesky and a Kiduna Telegram channel and bot. The Duna Ally and its Programs post to and listen on these channels — announcing graduations, contests, and airdrops; welcoming new members who arrive through a social Code; and routing replies back into the mediated Chat. External posts carry the Duna's Code so that an agent encountering them anywhere knows they are part of the network.

---

# 14. Notifications

Notifications keep people current in a world where agents are always acting and state is always changing. The framework specifies what people are notified about, how they set their preferences, and how notifications are mediated.

## 14.1 What people are notified about

The events worth a notification fall into a few classes, drawn from the prototype and the model:

- **Economic.** A Host bonus or coin gift received; royalties earned from a published Ally or Element; a level change; an Offer sold; a wallet funded.
- **Governance.** A Proposal opened in a Duna you belong to; a treasury action; quorum reached; a market resolved; a graduation Proposal for an Alliance you are in.
- **Ally activity.** Your Personal Ally or a Program finished a scheduled task; a Code you issued was redeemed; someone joined through your Code; an Ally requested your approval for a consequential action.
- **Community and Vibes.** A live Vibe room you would care about; a Quest posted; a contest or airdrop; an Alliance you are in formed, changed, or graduated.
- **Direct.** A mediated message from another principal's Ally that your preferences say should reach you.

## 14.2 Preferences are set by talking to your Personal Ally

A person sets their notification preferences by talking to their Personal Ally (their Member Ally) in natural language — what they want to hear about, what to mute, how urgent something must be to interrupt them, and which channel to use for what. The Personal Ally holds these preferences and applies them. There is also a settings surface for toggles, but the primary, intended path is conversational: a person tells their Ally "only tell me about governance in Dunas where I can vote, and send anything urgent to Telegram," and the Ally configures it.

## 14.3 How notifications are mediated and delivered

Notifications flow through Allies, like everything else. An event happens somewhere in the network; the relevant Ally evaluates it against the person's preferences; if it passes, the Personal Ally delivers it on the chosen channel. Channels include in-app, push, **Telegram**, **Bluesky** (where appropriate), and email. Because the Personal Ally mediates, it can batch, summarize, prioritize, and suppress, rather than firehosing raw events. A person's notification experience is therefore a product of their Ally's judgment under their stated preferences, not a fixed feed.

## 14.4 What the system must provide for notifications

- The event classes above, emitted across the network.
- A conversational way to set and change preferences through the Personal Ally, plus a settings surface for toggles.
- Per-person, Ally-mediated evaluation, batching, prioritization, and delivery across in-app, push, Telegram, Bluesky, and email.
- Consequential-action approvals surfaced as notifications.

---

# 15. Contests, games, and airdrops

A Factory grows by drawing people in and giving them something to do. The framework ships the mechanics.

- **Quests** are missions posted by Dunas that earn coin on completion. They appear in Vibe and are a primary way a new member earns their first KIDuna.
- **Games** are Vibes that are fully playable, sometimes with allies, sometimes competitive, and can carry their own rewards.
- **Contests** are time-boxed competitions, announced on the social channels and in-app, with rewards paid in coin or recognition.
- **Airdrops** are distributions triggered by a Code's actions Claim (`actions: airdrop:...`) on redemption, or run as a campaign to a set of members. The benefits Claim attaches bonus coins. Airdrops are how the Genesis Duna seeds early holdings, rewards early members, and runs welcome campaigns.

All four route through Codes and the economy, appear in Vibe and the social channels, and notify through the Personal Ally. The Genesis build (Section 18) includes a first Quest, a first contest, and a welcome airdrop.

---

# 16. The five phases and the foundational Programs

The Factory framework is assembled through the five phases like any framework, but its Programs are the foundational set most other frameworks inherit.

- **Inform → Wisdom.** The knowledge base of Section 5.2, held in the vector store, covering the whole model. Ships with the Big Kiduna's canon and is extensible by Element.
- **Instruct → Stance.** The Duna Ally's system prompt (Section 5.1, Appendix B).
- **Empower → Abilities.** Telegram, Bluesky, Google, and Solana, plus the internal surfaces (Section 13).
- **Enact → Programs (Magic).** The foundational Programs:
  - **Welcome & Onboard** — greet an arrival, set them up by Code, explain the network, guide to first standing.
  - **Contextual Help** — produce the dock intro and chips per page from Stance + Wisdom + Programs.
  - **Alliance Manager** — form and manage Alliances, invite by Code, run the mediated group.
  - **Graduation** — run the Objective/Proposal/Market for graduating an Alliance and execute the buy-in.
  - **Offer & Element** — list an Element as an Offer, price it, settle in KIDuna, record lineage.
  - **Treasury & Waterfall** — route fees, lineage, and the seed buy-in; report standing.
  - **Notifier** — evaluate events against preferences and deliver through the Personal Ally.
  - **Social** — post to and listen on Telegram and Bluesky; welcome social arrivals.
  - **Quests, Contests & Airdrops** — post missions, run contests, trigger airdrops via Codes.
  - **Vibe State** — keep the Vibe world's representation of actors, documents, and coins current.
- **Align → Sentinel (HEARTS).** The alignment boundaries (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis) governing Chat and Vibes, conservative defaults for a public on-ramp, adjustable within ranges.

Because these Programs are foundational, they are offered as Elements in the marketplace (Section 10), and a new Kiduna typically starts by picking them.

---

# 17. What the system must provide (consolidated)

A single checklist across the framework. Each is technology-agnostic except where a choice is settled.

## 17.1 Identity, levels, roles
- **F1.** One member-owned identity per person; a Solana FROST wallet; levels set automatically by coin-holding with a per-Duna multiplier; no subscription.
- **F2.** The level-to-capability map (Member: Personal Allies and Alliances; Founder: Duna Allies; Builder: Programs; Sponsor: Offering Allies).
- **F3.** Five Ally types, three states (Draft/Testing/Published), three visibilities (Public/Private/Secret), with a Primary per principal.

## 17.2 Chat and the Duna Ally
- **F4.** A main Chat (Duna Ally, Personal Ally, published Allies) and an always-on contextual dock on every page opening the current Duna's Ally.
- **F5.** All person-to-person communication mediated through Allies, Code-scoped, preference-enforced, with approval for consequential actions and an audit trail.
- **F6.** Contextual chips (question, navigation, action) generated per context from Stance + Wisdom + Programs and scoped to level and Code.
- **F7.** A Duna Ally with an editable Stance, a vector-store Wisdom base, and the foundational Programs feeding Chat and chips.

## 17.3 Vibes
- **F8.** Isometric spatial worlds representing Dunas and Alliances as places and Allies as sprites, with documents and coins as objects, continuously updated.
- **F9.** Vibe kinds — games, rooms, quests, studios/media, Nightpapers — some fully playable; HEARTS alignment inside Vibes; Code splash into a Vibe.

## 17.4 Alliances and graduation
- **F10.** Create and manage Alliances (no legal standing; container inside a Duna), with an Alliance Ally and shared resources.
- **F11.** Graduation through the Governance Market: a Proposal deciding whether to graduate and the seed amount and source (coin, treasury USDC, or a mix); atomic buy-in into the new Kiduna; lineage recorded; stand-up from chosen Elements.

## 17.5 Elements, Offers, economy
- **F12.** Elements as the reusable building blocks; a browsable library; explore-and-pick to start or extend a Kiduna.
- **F13.** Elements listed as Offers, free or priced, shown in USD and Kiduna Coins, settled in KIDuna, with lineage and Waterfall commissions.
- **F14.** Coins, treasury, the Distribution Waterfall, Team splits, and Offerings.

## 17.6 Codes, notifications, tools, growth
- **F15.** The full Code/Claim set; Codes for onboarding, pricing, bonuses, airdrops, Ally connection, and alignment; Code Metrics.
- **F16.** Notifications across the event classes, preferences set conversationally through the Personal Ally, Ally-mediated delivery across in-app, push, Telegram, Bluesky, and email.
- **F17.** Internal tools (Chat, Vibes, Codes, Wallet, Seek/Directory, Markets/Objectives/Electors, Gatherings, Library/Upload, Offerings) and external tools (Telegram, Bluesky, Google, Solana), with the Genesis Duna's social channels provisioned.
- **F18.** Quests, games, contests, and airdrops, routed through Codes and the economy, surfaced in Vibe and on the social channels.

---

# 18. Building the Genesis Duna — a blueprint

This section turns the framework into a build sequence for The Big Kiduna, the first Duna. It is both an instantiation of the framework and the reference deployment every other Duna learns from.

1. **Stand up the Duna and its standing.** Register The Big Kiduna; set KIDuna as the genesis coin with its price and multiplier; open the treasury; connect the registry.
2. **Build the Duna Ally.** Name it The Big Kiduna (@the_big_kiduna). Write its Stance (Appendix B). Load its Wisdom into the vector store — the full canon of how the network works, chunked and tagged by topic and level. Attach the foundational Programs (Section 16).
3. **Wire the Chat.** Bring up the main Chat with the Duna Ally as Host and the Personal Ally (Concierge), and the always-on contextual dock with the per-page chip catalog (Appendix C).
4. **Build the Vibe world.** Create the Genesis Vibe: The Big Kiduna as a place, early Alliances as spaces, Allies as sprites, the treasury and KIDuna represented, the first rooms and a first game. Keep its state live.
5. **Provision Codes.** Issue the primary onboarding Code (splash into a chat with the Duna Ally, a welcome bonus, a welcome airdrop), and the Code frameworks for Elements, Alliances, and contests.
6. **Stand up the economy.** Treasury, Waterfall, Team splits, and the first Offerings — the foundational Elements listed as Offers, most of them free.
7. **Set up social.** Provision the Kiduna Bluesky presence and the Telegram channel and bot; connect them as Abilities; have the Social Program post and listen.
8. **Configure notifications.** Turn on the event classes; set conservative defaults; let each member tune them by talking to their Personal Ally.
9. **Seed growth.** Post the first Quest, run a welcome airdrop to the founding cohort, and announce the first contest on the social channels.
10. **Open the graduation pipeline.** Enable Alliances to form, and the Governance Market to run graduation Proposals, so the first Alliances can begin the path to becoming their own Kidunas.

The result is a working Factory: people arrive through a Code, are met by The Big Kiduna in Chat, learn the network through the dock and the Vibe, gain standing by holding KIDuna, form Alliances, and graduate them into new Kidunas the network funds — each new Kiduna itself a Factory.

---

# 19. Open questions and naming

- **Genesis names.** The prototype themes the Genesis Duna as "Dunathon" with coin "DT" for the July 1 launch event. This spec uses **The Big Kiduna** for the Genesis Duna and **KIDuna** for its coin. Confirm the canonical public names and whether Dunathon remains an event brand over the Genesis Duna.
- **Programs / Magic / Skills.** A **Program** (also called **Magic** in the marketplace) is the Enact-phase unit and bundles **Skills** (lines in a Skill.md). Confirm this three-level naming across product surfaces; the master framework specification uses "Program" for the same thing.
- **Elements.** "Element" is used here for the reusable building blocks (the phase outputs plus Vibes, Codes, Coin configs, Offers). Confirm the canonical list of Element types that can be offered.
- **Coin vs USDC display.** Offers show USD and Kiduna Coins and settle in KIDuna. Confirm the USD figure is always a reference (never a settlement currency) and how the displayed coin amount tracks price.
- **Live system vs this spec.** A live system exists; the prototype is a faithful front-end model. Where the live system already settles a detail differently, the live system governs; this spec should be reconciled to it before build.
- **HEARTS as canonical.** HEARTS (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis) governs Chat and Vibes here, consistent with the Service specification. Confirm canonical platform-wide.

---

# Appendix A. Glossary

| Term | Definition |
| --- | --- |
| **The Big Kiduna** | The Genesis Duna; the legal and economic root of the network and the canonical Kiduna Factory. |
| **Kiduna Factory** | A Kiduna whose purpose is to teach, grow, manage, and spin out Kidunas. |
| **DunaVERSE** | The network of Dunas. |
| **Level** | A person's standing in a Duna, set by coin-holding: Guest, Member, Founder, Builder, Sponsor, Catalyst, Luminary. |
| **Duna Ally** | The Ally that represents a Duna and greets arrivals; always available in the contextual dock. |
| **Personal / Member Ally** | A person's own Ally; mediates their communication and notifications. |
| **Alliance** | A container inside a Duna where Allies collaborate; no legal standing. |
| **Graduation** | Turning an Alliance into its own Kiduna through a Governance-Market decision and a seed buy-in. |
| **Element** | A reusable building block of a Kiduna: Wisdom, Stance, Abilities, Programs/Magic, Sentinel/HEARTS, Vibes, Codes, Coin configs, Offers. |
| **Offer** | An Element (or other good/service) listed in the marketplace, free or priced; shown in USD and Coins, paid in KIDuna. |
| **Program / Magic** | The Enact-phase unit of automated behavior; bundles Skills (lines in a Skill.md). |
| **Vibe** | An isometric, spatial, sometimes-playable world representing a Duna and its actors, with live state. |
| **Code / Claim** | The signed invitation-and-credential that carries identity, scope, splash, pricing, bonuses, airdrops, and alignment. |
| **KIDuna** | The genesis coin of The Big Kiduna. |
| **Distribution Waterfall** | The atomic split of money across lineage, treasury, Sponsor, Curator, and protocol. |
| **HEARTS** | The alignment framework (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis) governing Chat and Vibes. |

# Appendix B. Illustrative Stance for The Big Kiduna

> You are The Big Kiduna, the Ally of the genesis Duna and the host of the DunaVERSE. You greet everyone who arrives. Your job is to make people feel met, explain how the network works in plain language, and help them get standing and start doing something real. You speak briefly and concretely. You offer a few clear next moves as chips rather than long explanations, and you always include a low-pressure option to keep exploring. You never push anyone to spend money; standing comes from holding the coin, and there is always a free way to begin. You act under real identity and accountability: you can take actions on someone's behalf, but you pause for their approval on anything that spends, commits, or connects them. When something is better handled by another Ally or another page, you take the person there rather than pretending to do it yourself. You hold the network's knowledge and answer from it; when you do not know, you say so and find the Ally who does. Above all, you are the on-ramp: the first job is always to help this person take one real step into the DunaVERSE.

(One Stance per Ally; edited as prose. This is a starting draft.)

# Appendix C. Contextual chip catalog (starting set)

The Genesis Duna ships these per-context dock intros and chips, drawn from the prototype. Each chip is a question (answered inline), a navigation (to a view), or an action (run a Program, with approval where needed).

| Context (page) | Dock intro | Starter chips |
| --- | --- | --- |
| Default / any page | "I'm the [Duna] Ally. Ask me anything about [Duna] or this page." | What can I do here? · Take me to the Directory (nav) · Open my wallet (nav) |
| Onboarding / Host chat | "Welcome to the DunaVERSE. I'm the Big Kiduna, the Ally your host left running for you." | What can I do here? · Set up my profile & Ally (action) · Show me what's happening · Just exploring |
| Codes | "Codes are how trust travels. Want to make one, or understand the Claims?" | What's a Claim? · Create a Code (nav) · See my Code metrics · Who is my Host? (nav) |
| Account / standing | "Your role here is set by how many Coins you hold. I can explain the tiers or help you load your wallet." | How do Coins set my role? · Why only up to Sponsor? · Load my wallet |
| Directory | "This is the network — Dunas, Members, Alliances, and Programs. Open any card to meet its Ally." | Show me Dunas · What's an Alliance? |
| Allies / Agents | "Allies represent people, Dunas, Alliances, Programs, and Sponsors." | What types can I make? · Draft vs Testing vs Published? · Create a new Ally (nav) |
| Enact / Programs | "Enact turns intention into action. A Program bundles Skills." | What's a Skill.md? · New Program (action) |
| Markets / governance | "Governance markets price proposals, outcomes, and reputations." | How does a graduation vote work? · Open a Proposal (nav) · What's an Elector? |
| Vibe | "Experiences, games, and rooms across the network — for you and your allies." | Show me live rooms (nav) · Play a game · What's a Quest? |

The acceptance criterion: on any page, the Duna Ally produces a small, correct set of chips like these from Stance + Wisdom + Programs, scoped to the person's level and Code.

# Appendix D. Notification event catalog (starting set)

| Class | Example events |
| --- | --- |
| Economic | Host bonus received; coin gift; royalties from a published Ally or Element; level change; Offer sold; wallet funded |
| Governance | Proposal opened; treasury action; quorum reached; market resolved; graduation Proposal for your Alliance |
| Ally activity | Scheduled task finished; your Code redeemed; new member joined through your Code; approval requested |
| Community & Vibes | Live Vibe room; Quest posted; contest or airdrop; Alliance formed/changed/graduated |
| Direct | A mediated message from another Ally that your preferences allow through |

Preferences are set by talking to the Personal Ally; delivery is Ally-mediated across in-app, push, Telegram, Bluesky, and email.
