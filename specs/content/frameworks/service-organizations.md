---
title: Service Organizations
subtitle: Kiduna framework specification for the service vertical — Service Alliance as test case
author: David Levine, Kinship Systems
date: June 15, 2026
status: Draft for engineering
footer: Service Organizations — Framework Specification
---

# 1. Purpose and scope

This document specifies the Service Organizations framework for the Kiduna Club platform: what it is, what the system must provide to support it, and how a service organization's Ally and its programs should behave. It is written for the engineers who will build the framework system and the service vertical on top of it. It describes experience and functionality. It does not prescribe languages, frameworks, or hosting.

The Service Organizations framework serves organizations and individuals built around service: military veterans and those still serving, law enforcement, firefighters and EMS, federal first responders, and public-service professionals such as social workers, dispatchers, and crisis-response staff. These are people in high-stress, high-consequence work, many carrying the weight of it long after the work ends. The framework has to hold what they actually need: connection, recognition, help in a hard moment, a place to keep their history, and an organization that can govern itself and last.

Service Alliance is the test case throughout. Service Alliance operates as a Movement on the Kinship Agentic Protocol, legally wrapped as the Service Alliance DUNA (SADuna), a West Virginia Decentralized Unincorporated Nonprofit Association filing under HB 5060 on July 1, 2026, sponsored by Service Alliance LLC and running on the substrate Kiduna Club operates. Service Alliance is used here to make the framework concrete. The framework itself is reusable: any service organization should be able to adopt it.

This specification builds on the master document, "Kiduna Frameworks — Product Specification," which defines frameworks, the five phases (Inform, Instruct, Empower, Enact, Align), the actor primitives, and the Builder Kit. This document does not repeat that material; it specializes it for the service vertical and goes deep on the two things that make this vertical different: the wellbeing and crisis architecture, and the range of ways agents act on behalf of people and organizations that carry real authority and real accountability.

A note on the source material. The design here is drawn from the Service Alliance portfolio, white papers, the SADuna back-brief, and the Service Alliance site. Where those sources disagree on a detail, the more recent source is followed, and the discrepancy is flagged in section 18. A few terms the team has used in conversation map onto documented concepts under different names; those mappings are also noted there.

---

# 2. Who this serves, and the mission

The population is large and specific. Roughly 18.5 million U.S. veterans, plus about 2.1 million currently serving in the Active, Guard, and Reserve components. Beyond the military domain: more than 800,000 sworn law enforcement officers across roughly 18,000 agencies; about 1.1 million firefighters and more than 250,000 EMS professionals; federal first responders; and a wide set of public-service professionals, including licensed social workers, 911 telecommunicators, corrections officers, and crisis-response specialists.

What these groups share is the shape of the work and what it leaves behind. The transition out is hard: more than 200,000 service members leave the military each year, and risk spikes in the first year after separation. The single statistic that organizes the wellbeing design is that roughly 17 veterans are lost to suicide each day, more than double the rate of the non-veteran population. The protective factor that shows up most consistently is connection to other people who understand the work. That finding shapes the whole framework: the system's job is to keep people connected to each other and to real help, and to do it without ever pretending to be the help itself.

The operating standard, stated plainly in the source material and adopted here, is simple: if it doesn't serve the person who served, it doesn't deploy. Service Alliance's values travel under the acronym M.I.S.S.I.O.N. — Merit Over Marketing, Identity Sovereignty, Service Beyond Self, Security by Design, Intelligent Community, Operational Excellence, No One Left Behind. A service organization adopting the framework should be able to express its own creed, but the framework ships with this disposition as its default.

The work also carries history and culture that matter to the people in it: unit lineage, deployments, the names of the fallen, the traditions that hold a community together. The framework treats that history as something to preserve and present with care, not as content to be mined.

---

# 3. Service first, commerce underneath

Agentic commerce runs underneath everything in this framework. It settles payments, carries verified identity between parties, records provenance, and keeps the organization solvent and self-governing without an outside shareholder to extract value. It is essential infrastructure. It is rarely what a member came for.

People come to a service organization for connection, recognition, help navigating benefits, support in a crisis, a place to record their service, and the company of others who did the same work. The framework keeps commerce in the background of that experience. A member should feel an organization that knows them and helps them, not a marketplace. The recognition economy described in section 14 is deliberately closed against cash, so that the thing being exchanged stays recognition rather than money. Where money does move — membership fees, sponsorships, the veteran-owned storefront — it moves through infrastructure the member rarely has to think about, and it recirculates into the mission rather than out to investors.

So the document is weighted the way the experience should be weighted. The wellbeing architecture (section 7) and the agent-interaction model (section 8) are the longest sections. The commerce mechanics (section 14) are specified because engineering needs them, and kept proportionate to their place in a member's day.

---

# 4. Core concepts for the service vertical

The master specification defines the actor primitives (Duna, Alliance, Member/User, Sponsor, Offer), the agent types (Ally, Performer, Envoy, Sentinel), and the five phases. This section maps those onto the roles a service organization actually has, and introduces the identity layer that the whole vertical depends on.

## 4.1 Roles in a service organization

| Role | Definition in this vertical | Maps to |
| --- | --- | --- |
| **Member** | A verified individual: a veteran, a serving member, a sworn officer, a firefighter or EMS professional, a federal first responder, a public-service professional, or an eligible family member (spouse, child, Gold Star family) linked to a verified service member. | Member/User |
| **Organizational Member** | A vetted organization — a VSO, unit association, IAFF local, FOP lodge, POST commission — that joins and manages its own members, heritage, and recognition. | Member (organizational) |
| **Founder** | One of the first cohort of verified members named on the organization's filing. Sits at the apex of lineage and holds heightened governance standing. A Founder is a kind of Member. | Founder |
| **Sponsor** | The outside entity that stands the organization up and holds issuer authority — for the test case, Service Alliance LLC. | Sponsor |
| **Curator** | An operator or program leader who runs a cohort or service and earns a defined share for doing so. | (operator role) |
| **Verifying Authority** | The source that confirms service or eligibility: the VA, DMDC/DPRIS, or DoD for military; a POST board, agency, or licensing body for the other domains; an equivalent authority for family relationship. | (verification role) |
| **Registered Agent** | The West Virginia agent of record required for a Duna. | Registered Agent |

The organization itself is usually a Duna when it needs legal standing and a treasury, or an Alliance when it is an informal grouping. A federation — a national body with semi-autonomous chapters — is modeled as a Duna with sub-groups, or as an Alliance of Dunas, with discovery linking them.

## 4.2 The identity layer

Everything in this vertical hangs off one verified identity per person, carried for life. In the test case this is MyServiceID: a member-owned identity wallet that begins the day someone enters service and follows them afterward, signed into by email, with key custody abstracted so there are no seed phrases to lose. It holds the member's service credential, their recognition items, and their permissions, and it is readable by every tool in the system and by outside parties the member chooses to show it to. The member verifies once and never re-proves who they are to move between tools.

This identity layer is the precondition for trust between agents (section 8) and for the safety of the wellbeing features (section 7). Section 5 specifies it.

---

# 5. Identity and verification

Trust in this vertical is not a checkbox. A claim to be a veteran, a sworn officer, or a licensed clinician carries weight and can be abused, so the system verifies it properly, records how strongly it was verified, and lets the member carry that proof without re-proving it.

## 5.1 The service credential

Each member holds a service credential in their identity wallet. It is non-transferable (soulbound to the member), verified once at issuance, and anchored to an authoritative record (the DD-214 for veterans, the domain equivalent for others). The on-chain token carries no personal information. It holds only an issuer signature, a hash of the credential, a status, a domain, and a pointer to off-chain metadata the member controls and discloses selectively. This is the rule the system must hold: no personal data on-chain, disclosure field by field, under the member's control.

The credential has two states and a one-way transition between them. While the person is serving, it is an active-service credential that accumulates their record over time. At separation, an authorized issuer converts it, one way, to a separated credential. There is no reverse function; re-entry to service mints a new active credential while the prior separated record persists. A member holds at most one active credential per domain and any number of separated ones, so a veteran who later becomes a police officer carries a separated military credential and an active law-enforcement credential at the same time.

## 5.2 The domain family

One credential design serves several domains, distinguished by a domain attribute that drives display and routing.

| Domain | Population | Verification source |
| --- | --- | --- |
| **Veterans / military** | Veterans, Active, Guard, Reserve | DD-214; VA; DMDC/DPRIS; DoD |
| **Law enforcement** | Sworn officers | POST board plus agency attestation |
| **Fire & EMS** | Firefighters, EMS professionals | NFPA / NREMT / state EMS plus department attestation |
| **Federal first responders** | Federal responders | Federal agency plus employment verification |
| **Public-service professionals** | Social workers, 911 telecommunicators, corrections, crisis-response, and similar | State licensing board plus employer attestation |

Family members (spouses, children, Gold Star family) are eligible, with their seats linked to the verified service member's identity.

## 5.3 Verification tiers and the Verifying Authority

Not every credential is verified the same way, and the system must make the difference visible rather than hide it. A tiered model captures the strength of verification: self-attestation with community vouching produces a provisional credential; a validated source document produces a full one; an authoritative cross-reference produces a higher tier; a direct in-service or agency check produces the strongest. A provisional credential cannot present itself as a fully verified one. This tiering matters in a field where records are sometimes lost — the 1973 National Personnel Records Center fire destroyed millions of files — so the design has to accommodate peer attestation and association-based verification alongside government records, while still recording the lower assurance level honestly.

Credentials are issued through a multi-party process, not by one party alone. A military credential requires the verification path plus the sponsoring organization as co-signer; a law-enforcement credential requires the licensing source plus the sponsor; an organizational affiliation requires the organization plus the sponsor. Issuance flows through a time-locked, reversible instruction so that fraud or error can be corrected. Credentials are never forfeited as punishment — they are evidence of fact — and they survive the dissolution of the organization that issued them.

## 5.4 What the system must provide for identity

- One verified identity per person, member-owned, reusable across every tool with zero re-verification.
- A non-transferable service credential carrying no personal data on-chain, with selective, member-controlled disclosure.
- A one-way active-to-separated transition callable only by an authorized issuer, with per-domain singleton rules for the active state.
- A visible verification tier on every credential, with lower tiers unable to impersonate higher ones, and support for peer and association-based attestation where records are missing.
- Multi-party issuance with a time-locked, reversible correction path.
- Member data export and deletion on demand; credentials that survive expulsion and dissolution.

---

# 6. The five phases for a service organization

A service organization's Ally is assembled through the same five phases as any Kiduna framework. This section states what each phase ships for this vertical. The Align phase carries more weight here than in most verticals and is specified at greater length, and connects directly to the wellbeing architecture in section 7.

## 6.1 Inform — Wisdom

The knowledge base for a service organization holds its history and lineage, its membership and chapters, its benefits and resource directories, its events and traditions, and its archival materials. Some of this is fixed domain knowledge (how VA claims work, what the organization's history is). Some is filled in by the adopting organization (its roster, its specific programs). A great deal should be discovered on the network rather than entered: when a member joins, their Ally should be able to find the chapters, members, and history relevant to where and when they served.

Knowledge should be presented as navigable cards, timelines, maps, and rosters rather than walls of text, and should link out to records, oral-history video, and memorial pages. Archival material should be captured to recognized standards so it can flow to national repositories (see LegacyLog and Veteran Voices in section 9).

## 6.2 Instruct — Stance

The Stance is the organization's Ally written as a system prompt: who it is, how it speaks to people who have done hard work, and what it will and will not do. For this vertical the Stance ships with a service disposition and, critically, with the wellbeing guardrails baked in: the Ally is warm and plain-spoken, it never poses as a clinician or a crisis counselor, and it routes people to human help and verified crisis lines when distress appears. The adopting organization personalizes tone, creed, and specific commitments. There is one Stance per Ally.

## 6.3 Empower — Abilities

The Abilities a service organization connects typically include email and calendar for coordination, community channels (the kind of messaging and social tools a membership lives on), document and archive storage, mapping services for facilities and historical sites, and the identity and recognition rails. The framework declares which Abilities each program depends on. Some Abilities touch sensitive data (health, benefits), and the framework marks those so their handling follows the protections in sections 5 and 7.

## 6.4 Enact — Programs

The programs are where the organization's recurring work runs: onboarding and verification, community and reunions, benefits navigation, archival capture, memorial workflows, governance, and recognition. Section 9 specifies the major programs as the tool suite. Each program follows the cardinality rules from the master spec (one Prompt; many Triggers, Database Connections, Polling/Web Hook listeners, and Tools) and marks its human-approval points. In this vertical the human-approval points are not a formality: anything touching a benefit, a crisis flag, or a member's credential pauses for a human.

## 6.5 Align — the Sentinel and HEARTS

Align produces the organization's Sentinel, and in this vertical it is load-bearing. The Sentinel keeps the relationship between members and the system healthy, watches for distress, and holds the Ally to its intended character. Its boundaries are set by the HEARTS framework, which the organization inherits from the protocol substrate.

HEARTS is a trauma-informed design framework with six dimensions: Harmony, Empowerment, Artistry, Reason, Trust, and Synthesis. It embeds trauma-informed principles directly into how the AI interacts with people — prioritizing safety, trust, and user autonomy, recognizing difficult patterns, and steering toward healthy options and human connection. It is explicit on the limit: the AI facilitates connection to peers and professionals and does not attempt to replace genuine human connection or professional clinical care. The same six dimensions also score the health of governance processes (section 8.5), so HEARTS is both the Sentinel's dial set and the measure of whether the organization's decision-making is staying humane.

For a service organization, the Sentinel's defaults are conservative: quicker to surface concern, quicker to bring a human in, careful with anything that looks like a crisis. The defaults are adjustable within ranges, but the protections that matter most are not removable (section 7.4). The Sentinel's interventions are visible to the people responsible for the community, so a human can follow up.

---

# 7. Wellbeing and crisis: the Safe Harbor architecture

This is the part of the system that has to be right. The population carries elevated risk of suicide, post-traumatic stress, and substance use, and the system will at times be in contact with someone in real danger. The design principle is consistent across every source and is adopted here without exception: the AI detects and assists; a human delivers care. Agents surface, assist, and draft. Humans decide. There is no autonomous action on a member's crisis flag, claim, or benefit without a human-verified handoff.

## 7.1 What Safe Harbor is

Safe Harbor is the crisis pathway that lives inside the benefits-and-wellbeing program (Service Connected in the test case). Its job is to notice when a member may be struggling and to connect that member to human help quickly and reliably. It has a few parts:

- **One-tap connection to the right human crisis line**, available at all times, surfaced prominently and reachable without friction. For the military domain this is the Veterans Crisis Line. For the broader population it includes the 988 Suicide and Crisis Lifeline and, for substance use, the SAMHSA National Helpline. The exact numbers are listed in Appendix D and must be kept current from authoritative sources.
- **AI wellness check-ins** that use validated screening instruments (the PHQ-9 for depression and the PCL-5 for post-traumatic stress) to notice when someone may need support. These are screeners that prompt a human connection, not diagnoses.
- **A peer-support network** so a member can reach another person who understands the work, which is the protective factor the data points to most strongly.
- **Gatekeeper training built in** (the QPR approach: Question, Persuade, Refer) so that people around a member, and the system itself, are oriented toward getting them to help.

## 7.2 How a crisis moment is handled

When the system detects possible crisis — through a screener, a message, or a pattern such as sleep disruption overlapping with other risk signs — it does not act on the person autonomously. It surfaces the concern and moves the member toward a human: it offers the one-tap crisis line, it can connect a peer-support specialist, and it alerts the humans responsible for that community's wellbeing pathway. A clinical professional owns the escalation pathway; in the test case a contracted mental-health professional reviews the workflows, trains the wellness check-in, and is accountable for crisis escalation from day one. The system's role is to detect, connect, and document the handoff, never to counsel or to decide a clinical question.

The Ally never substitutes for a clinician or a crisis responder. It does not attempt therapy. It does not talk a person through acute risk on its own. It gets them to someone trained, and it stays out of the way of that care. Disciplinary or administrative processes are never used in a way that endangers a member who is in crisis.

## 7.3 Scope of wellbeing support

Beyond acute crisis, the wellbeing scope includes navigating mental-health care and benefits, screening that prompts connection to licensed providers, peer support, and the practical things that reduce stress — help with a benefits claim, a financial hardship, a transition. Substance use is part of the picture, handled the same way as other crises: the system connects the member to appropriate human help and established resources rather than attempting treatment itself. A trusted, private form of mutual aid (a member articulating a need and being matched to resources and people who can help) is part of the design, kept inside the verified community so it is not exploited.

## 7.4 Protections that cannot be removed

Some commitments are constitutional in this vertical and the system must treat them as un-amendable. The wellbeing and Safe Harbor commitments and the member- and child-safety protections cannot be eliminated by any governance change, and changes that touch them require a materially higher threshold to pass than ordinary decisions. The duty to direct a member in crisis toward appropriate human support is written into the organization's charter and into the Founders' obligations. Veteran and member data is never sold. Health and disability information is handled with end-to-end encryption and to a HIPAA-adjacent standard, and the most sensitive active-service information (deployment locations, classified roles) is never stored even with consent.

## 7.5 What the system must provide for wellbeing

- A prominent, always-available, one-tap path to the correct human crisis line for each domain, kept current from authoritative sources.
- AI wellness check-ins built on validated screeners (PHQ-9, PCL-5) that prompt human connection, never diagnose.
- A peer-support network and built-in gatekeeper (QPR) orientation.
- A strict no-autonomy rule on crisis: AI detects and connects; a named human (with clinical ownership) delivers care and owns escalation.
- An Ally that never poses as a clinician or counselor and never attempts to handle acute risk alone.
- Un-amendable wellbeing, Safe Harbor, and child-safety protections, with higher governance thresholds to touch them.
- Encryption and HIPAA-adjacent handling for health data; sensitive active-service data never stored; member data never sold.

---

# 8. The agent-interaction model

The platform is agent-native, and this vertical needs a clear account of every way agents interact and what they are allowed to do, because the agents here act on behalf of real people and organizations and answer for it. The governing principle: agents research, surface, and draft; people decide. Material actions pass through a human-in-the-loop check and are logged.

## 8.1 The kinds of agent

| Agent | What it is | Role |
| --- | --- | --- |
| **Ally** | The agent a member or organization talks to. | Represents the actor; supervises the work; the front door to everything. |
| **Avatar** | A per-member Ally scoped to a single purpose. A member may hold several (for example, a career Avatar, a benefits Avatar, a peer-support Avatar). | Each holds only its own slice of context; the boundaries between them cannot be crossed, even by accident. |
| **Performer** | A task agent (also called a worker or executor) directed by an Ally or Avatar to do a specific job. | Executes scoped work — searching, drafting, filing, booking, verifying — and only for its defined purpose. |
| **Envoy / Elector** | A governance agent acting under a member's direction. | Trades in the organization's Decision Markets per the member's stated values; the member can override on any specific proposal. |
| **Sentinel** | The alignment agent from the Align phase. | Watches the relational field, enforces HEARTS boundaries, flags distress and consequential actions. |

A short-term workspace called a Gathering can convene people, Avatars, Performers, and human advisors around a single decision (a career move, a memorial, a governance question), then dissolve.

## 8.2 Authority and accountability

Every member, agent, and counterparty is addressable through a Code that resolves on the West Virginia registry. The Code carries identity, authorized capabilities, credentials, and lineage in one signed object. An agent acts only within the scope its Code grants. Agents cannot escalate their own authority. Outbound actions of consequence pass through an alignment or compliance check and are written to an audit log as artifacts. Members set per-agent transaction limits and the thresholds at which an action requires a human.

Because each side operates under a registered legal entity with court-recognized standing, an agent's actions are legally attributable to its organization. When one organization's agent deals with another's, the blockchain is the audit log and the registered entities are the accountable parties; a dispute resolves against the registry record. This is the difference between an agent that can act and an agent that can be held responsible for acting.

## 8.3 Context isolation between Avatars

A member's Avatars are deliberately walled off from each other. A benefits Avatar that handles disability information does not share context with a career Avatar that talks to employers. Each reads the member's identity from the shared wallet but holds only the context it needs for its one purpose. This is a privacy and safety requirement, not a convenience: it limits what any single agent can expose, and it keeps sensitive domains (health, crisis) from leaking into ordinary ones.

## 8.4 What agents actually do

Concrete workflows the system should support, each with a human in the loop at the points that matter:

- **Benefits navigation.** An Avatar researches a member's VA claim status, identifies the right support organizations, drafts an appeal letter, and lines up an appointment, then hands the draft and the plan to the member to approve before anything is filed or sent.
- **Crisis routing.** A wellbeing Avatar notices a risk pattern and routes the member to a verified human crisis line and a peer specialist, alerting the human pathway. Detection is automated; the connection and the care are human (section 7).
- **Onboarding and verification.** A Performer verifies a member's credential against the appropriate authority and tier, provisions their identity wallet, and enrolls them in the correct chapter and lineage. A cross-organization verification Performer can confirm several members' credentials in seconds when one organization needs to trust another's people.
- **Heritage and reconnection.** A heritage Avatar notices that a new member served in the same unit, place, or era as existing members and connects them; it surfaces relevant archive material in conversation; it reconnects families whose relatives served together.
- **Governance.** A governance Avatar carries a resolved decision into action: drafting the announcement, generating the letters, scheduling the event, allocating the budget, minting any recognition items, and posting to the memorial — work that took weeks done in an afternoon, with the decision itself made by the members.
- **Recognition and commerce.** A member's scoped Avatar can transact inside the network — sourcing a gift, ordering reunion merchandise from a verified veteran-owned storefront, booking a vendor booth and settling the deposit — verifying the counterparty's credential and settling in a single step, with spend limits the member set.
- **Community engagement.** An organization's Avatars (membership, heritage, governance) keep the roster current, surface events, suggest connections, and remember a member across every interaction so the relationship is continuous rather than a series of disconnected touches.

## 8.5 Governance through Decision Markets

The organization governs itself through Decision Markets rather than low-turnout voting. A market holds objectives, objectives hold proposals, and each proposal resolves through a conditional pass/fail market in which members' Electors trade on their behalf at machine speed, removing the participation decay that kills conventional voting. A deterministic resolver computes the outcome from a lagging time-weighted average price over a defined window, and the resolved outcome executes. Two safeguards apply: manipulation resistance through the lagging average and verified-identity membership, and asymmetric thresholds so that proposals touching the mission, the closed recognition economy, or the Safe Harbor and child-safety commitments must clear a much higher bar. Every order carries a cryptographically signed rationale stored in the graph, and outcomes are scored on the HEARTS dimensions so the organization can see whether its decision-making is staying healthy.

## 8.6 What the system must provide for agents

- Scoped agents addressable by a Code that carries identity, capabilities, credentials, and lineage; agents act only within scope and cannot self-escalate.
- Human-in-the-loop checks on every consequential action, with member-set transaction limits and approval thresholds.
- Context isolation between a member's Avatars, enforced, with sensitive domains walled off.
- An audit log of consequential agent actions as durable artifacts, and legal attributability of agent actions to a registered entity.
- The concrete workflows in 8.4, each pausing for human approval at the points that touch money, benefits, credentials, or crisis.
- Decision-Market governance with signed rationales, asymmetric thresholds for protected matters, and HEARTS scoring of process health.

---

# 9. The service tool suite as programs

A service organization's day-to-day capability is delivered as a suite of programs. In the test case this is the eight-tool Military Domain plus the identity and recognition layers. Each tool is a program (or a small set of programs) in framework terms, with its own prompt, sequences, triggers, data connections, and tools, and with an Ally or Avatar in front of it. The framework should let an organization adopt the whole suite or a subset. Each entry below states what the tool does, the agent's role, and the safety notes that apply.

| Tool | What it does | Agent role and safety notes |
| --- | --- | --- |
| **Roll Call** | The community backbone: verified member profiles, chapters and sub-groups, an integrated newsletter and communications hub, membership and dues administration, virtual reunions with AI summaries, and migration tools to move a community off aging platforms. | Membership and community Avatars keep the roster current and surface connections. Migration is a Performer workflow targeting a short, supervised cutover. |
| **LegacyLog** | Mobile-first digitization of service records to recognized archival standards, with guided scanning and submission pathways to national repositories. | A Performer guides capture and classification; archival standards are fixed so records remain valid for national repositories. |
| **Veteran Voices** | Oral-history capture: a pre-interview survey feeds an AI interviewer that generates personalized questions, with built-in video, transcription, and a formatted output suitable for national oral-history collections. | An oral-historian Avatar conducts the interview; output is the member's to control and share. |
| **Service Connected** | Benefits navigation and the home of Safe Harbor: AI-guided claims help, screening that connects to licensed providers, an accredited referral directory, and a map of facilities with practical information. | Highest-stakes tool. Everything consequential pauses for a human; Safe Harbor follows section 7 without exception. |
| **The Campaign** | Immersive mapping of unit movements and historical sites, with personal service overlays and an educational mode for schools and museums. | A history Avatar narrates and guides; content is built from verified records. |
| **Wall of Honor** | A permanent memorial to the fallen across branches, with verified memorial profiles, family-contributed records, provenance anchoring, and a connection engine linking those who served together. | Family controls govern visibility; memorial workflows are handled with care and human oversight. |
| **Into the Breach** | Military-to-civilian transition: skill translation, federal-employment navigation, a veteran-owned business hub, an employer network, and a career coach. | A career Avatar drafts and sources; applications and outreach pause for member approval. |
| **The Forge** | Leadership development and mentorship: mentor matching, a military-adapted curriculum, accountability cohorts, and a coaching marketplace. | A mentorship Avatar matches and schedules; curriculum can draw on the organization's own history (section 10). |
| **Recognition Market** | The closed economy of recognition items (section 14). | Recognition is earned and gifted, never cashed out; agents can transact within member-set limits. |
| **Service-Made** | The verified veteran-owned-business storefront and marketplace (section 14). | The veteran-owned badge is a credential bound to the owner's identity, readable by humans and agents in one step. |

The framework's job is to ship these as working programs with their prompts written, sequences laid out, data connections and listeners defined, required Abilities declared, and approval points marked, so an adopting organization inherits a functioning suite and supplies its own specifics.

---

# 10. Training

Training in this vertical is both practical and cultural. The practical side is leadership development and mentorship delivered through The Forge: structured mentor-mentee matching, a military-adapted curriculum, accountability cohorts, a speaking bureau, and a coaching marketplace where practitioners keep the large majority of what they earn. The cultural side is distinctive and worth specifying: an organization can build leadership training from its own verified history. The test case draws leadership courses and tactical-decision exercises from documented unit actions — a real engagement, a real commander's decision under pressure — turned into teaching material that is proprietary to that organization and can be offered as a premium program. The framework should support training programs that are grounded in an organization's own archives and oral histories, so that training and heritage reinforce each other rather than sitting in separate silos.

The system must let an organization author training that draws on its Wisdom (its records, its histories), match mentors to mentees with appropriate verification, run cohorts with accountability, and, where the organization chooses, offer training as a recognized or paid program that recirculates into the mission.

---

# 11. Community

Community is the protective factor the wellbeing data points to, so the framework treats it as primary rather than as a feature. Roll Call is the hub: verified profiles so members know who they are talking to, sub-groups for chapters and affinity groups, virtual reunions as first-class events with AI summaries, and a communications hub that replaces the patchwork of mailing lists and social groups most organizations run today. The texture of a real community matters — the regional chapters, the interest groups, the places where people remember the fallen together — and the framework should make those easy to create and keep alive.

Intelligent community engagement is where agents earn their place: an Avatar notices a new member who served at a given place or time and connects them to the relevant group and to members whose service overlapped; it surfaces archive content in conversation; it remembers a member across forum posts, photo comments, messages, and reunions so the relationship is one continuous thread rather than scattered fragments. Crucially, this connection-making serves the wellbeing mission directly: getting an isolated member into the company of people who understand the work is the intervention the data supports most.

The system must let an organization migrate an existing community without breaking it (a staged, supervised cutover that preserves archives and re-consents members), run sub-groups and reunions, and let agents make connections within the privacy boundaries of section 8.3.

---

# 12. History and memorials

Preserving what was earned, and honoring those who did not come home, is core to this vertical. Four capabilities carry it: digitization of records to national archival standards (LegacyLog), oral history captured and formatted for national collections (Veteran Voices), immersive mapping of the places where history was made (The Campaign), and a permanent memorial to the fallen (Wall of Honor).

The memorial design needs particular care. Memorial profiles are verified; families can contribute records and control visibility; provenance is anchored so the record cannot be quietly altered; and a connection engine links surviving members to the families of those they served with. A member's own identity can transition to a memorial state at death, family-controlled, and recognition items can be minted to a family memorial wallet so that remembrance has a place in the recognition economy. Every passing should be recorded with dignity. These are workflows that touch grieving families, so they run with human oversight and never with the bluntness of an automated process acting alone.

The system must provide standards-compliant capture and submission to national repositories, verified and family-controlled memorial records with anchored provenance, immersive historical content built from verified records, and memorial-state handling for a deceased member's identity.

---

# 13. Culture

A service organization carries a culture — a creed, a visual identity, a set of traditions — and the framework should let it express that rather than flatten it into a generic app. In the test case the identity is explicit: an ascending eagle, the language of being forged by service and elevated by AI, taglines about reconnecting, remembering, and thriving, and a values set (M.I.S.S.I.O.N.) that serves as the interpretive lens for the organization's rules, read in favor of the member, the protection of the vulnerable, and the durability of the mission. Each adopting organization brings its own motto, lineage, and traditions. The framework ships the disposition and the slots; the organization fills them with its own culture.

The system must let an organization express its creed, visual identity, and traditions through the Stance and the Wisdom, and must treat the organization's stated values as the lens for interpreting ambiguous situations in the member's favor.

---

# 14. Recognition and commerce

This section specifies the economic substrate. It is essential and it is kept in the background of the member experience (section 3). Two economies run in parallel and are deliberately kept apart.

## 14.1 The recognition economy (closed against cash)

Recognition is the cultural layer: the digital form of challenge coins, unit patches, and hall-of-fame plaques. It has three object classes. Credentials are the non-transferable proofs of fact from section 5. Recognition tokens are earned through service and gifted by units and the platform; they are never bought with cash and never cashed out. Expression items (patches, pins, badges) mark the days that mattered and are tradeable peer-to-peer, designable by community members who earn a royalty, and redeemable for physical versions through an authorized maker.

The foundational rule is structural and permanent: the recognition economy is closed against government currency in both directions. There is no cash on-ramp, no cash off-ramp, and no published exchange rate. The reason is both cultural and legal. Culturally, the moment recognition has a cash price it stops being recognition. Legally, the closure is designed to keep the recognition layer outside investment-contract and money-transmitter frameworks. Supply is bounded and every item has an issuer of record. This closure is one of the protections that governance cannot remove.

## 14.2 The money economy (the Distribution Waterfall)

Real money — membership fees, sponsorships, computation, trading, offerings — moves through a programmatic split that settles in the same transaction. The first portion pays lineage commissions up to four levels of the chain that brought a member in; the remainder is divided among the organization's treasury, the sponsor, the curator, and the protocol. The worked figures in the source material illustrate the intent: a small membership fee splits into a few cents up the lineage and the rest into the treasury and the operating roles, with nothing extracted to an outside shareholder. A Duna's surplus must be reinvested in its mutual purpose. The structure has nowhere to extract value to, which is the point: the decay pattern that degraded earlier platforms cannot run here.

Founders sit at the apex of their lineage and earn perpetual, protocol-enforced commissions on what they bring in. Lineage commissions settle in stable value and are withdrawable, so a member's recruiting and program work can become real income over time without turning the recognition layer into a currency.

## 14.3 Service-Made

Service-Made is the verified veteran-owned-business marketplace: every storefront is owned by a verified veteran, service member, or military-family member, with the owner's identity cryptographically bound to the storefront so the "veteran-owned" badge is a credential rather than a marketing claim, readable by humans and agents in one step. Sellers are members with a stake and a vote, not tenants who can be removed at will. An agent can transact here natively — a career Avatar sourcing a gift, an association's agent ordering reunion merchandise — within the member's limits.

## 14.4 What the system must provide for recognition and commerce

- A recognition economy permanently closed against cash, with bounded supply and an issuer of record per item; this closure un-amendable.
- Earned, gift-able, tradeable recognition items, designable by members, redeemable for physical versions.
- A programmatic money split (lineage, treasury, sponsor, curator, protocol) that settles atomically, with surplus reinvested and no outside-shareholder extraction.
- Perpetual, protocol-enforced lineage positions for founders, settling in withdrawable value.
- A verified-ownership storefront where the ownership badge is a credential and sellers are member-owners, transactable by scoped agents within limits.

---

# 15. What the system must provide (consolidated)

This section pulls the explicit requirements together so engineering has one checklist. Each is technology-agnostic. The requirements in earlier sections are referenced rather than repeated.

## 15.1 Identity and trust

- **S1.** One member-owned verified identity per person, reusable across every tool, zero re-verification.
- **S2.** A non-transferable service credential, no personal data on-chain, selective member-controlled disclosure, one-way active-to-separated transition, per-domain singleton for the active state.
- **S3.** Visible verification tiers that cannot impersonate one another, with support for peer and association-based attestation.
- **S4.** Multi-party credential issuance with a time-locked, reversible correction path; credentials survive expulsion and dissolution.

## 15.2 Wellbeing and safety

- **S5.** Always-available one-tap connection to the correct human crisis line per domain, kept current (Appendix D).
- **S6.** Validated screeners (PHQ-9, PCL-5) that prompt human connection, never diagnose; a peer-support network; QPR orientation.
- **S7.** A strict no-autonomy rule on crisis, benefits, and credentials: AI detects and connects, a named human with clinical ownership delivers care.
- **S8.** An Ally that never poses as a clinician and never handles acute risk alone.
- **S9.** Un-amendable wellbeing, Safe Harbor, and child-safety protections, with higher governance thresholds to touch them.
- **S10.** Encryption and HIPAA-adjacent handling of health data; sensitive active-service data never stored; member data never sold.

## 15.3 Agents

- **S11.** Scoped agents addressable by a Code carrying identity, capabilities, credentials, and lineage; no self-escalation.
- **S12.** Human-in-the-loop on every consequential action; member-set limits and thresholds.
- **S13.** Enforced context isolation between a member's Avatars.
- **S14.** A durable audit log of consequential actions; legal attributability to a registered entity.
- **S15.** Decision-Market governance with signed rationales, asymmetric thresholds for protected matters, and HEARTS process scoring.

## 15.4 Service capability

- **S16.** Community migration without breakage (staged, supervised, archive-preserving, re-consenting); sub-groups and reunions; agent-made connections within privacy boundaries.
- **S17.** Archival capture and submission to national repositories to recognized standards; oral-history capture; immersive historical content; verified, family-controlled memorials with anchored provenance and memorial-state identity.
- **S18.** Training authored from an organization's own history and archives; verified mentor matching; accountability cohorts.
- **S19.** Cultural expression through Stance and Wisdom; organization values as the interpretive lens.

## 15.5 Economic substrate

- **S20.** A cash-closed recognition economy (un-amendable), bounded supply, issuer of record; earnable, giftable, tradeable, designable items.
- **S21.** Atomic money split (lineage, treasury, sponsor, curator, protocol), surplus reinvested, no outside extraction; perpetual founder lineage in withdrawable value.
- **S22.** A verified-ownership storefront where ownership is a credential and sellers are member-owners.

---

# 16. Worked example

The example anchors on the flagship prototype and then notes briefly how the same framework serves the other domains.

## 16.1 2nd Cavalry Association / Dragoon Base

The 2nd Cavalry Association is the nation's oldest unit-specific veterans' organization, founded in 1899, tied to a regiment on continuous active duty since 1836. It has on the order of 4,000 members spread across every U.S. state and several countries, charges no dues, and lives today on an aging community platform with thousands of members, tens of thousands of photographs, and dozens of groups. It is the test case's anchor partner and first founder cohort.

**Actor.** The Association joins as an Organizational Member of the service Duna, with its own chapters as sub-groups and its own minting authority for unit and reunion recognition items.

**Inform.** Its Wisdom is its history (a regiment with eighteen Medals of Honor and nearly two centuries of lineage), its roster, its chapters (regional and interest-based groups, including the ones that remember the fallen), and its archives — photographs, videos, and pages accumulated over decades.

**Instruct.** The Ally's Stance carries the regiment's culture and motto and the service disposition, with the wellbeing guardrails baked in.

**Empower.** Community and communications, archive storage, mapping for historical sites and reunions, and the identity and recognition rails.

**Enact.** The programs are the suite: Roll Call to migrate the community off its current platform in a short supervised cutover and run reunions; LegacyLog and Veteran Voices to capture records and oral histories before they are lost; The Campaign to map the regiment's battles; Wall of Honor for its fallen; The Forge to build leadership training from the regiment's own documented history; Service Connected and Safe Harbor for benefits and wellbeing.

**Align.** A Sentinel with conservative HEARTS defaults, given the population.

The migration is the near-term proof: move an established association off a dying platform without losing its archive or its people, capture a first set of oral histories, and onboard a founder cohort. The framework makes that repeatable for the next association.

## 16.2 Law enforcement, fire, and EMS (brief contrast)

The same framework carries to the other domains with different verification sources and different program emphasis. A law-enforcement organization verifies through a POST board and agency attestation; a fire or EMS organization through NFPA, NREMT, or state EMS plus department attestation. The community, history, and memorial capabilities are largely the same. The wellbeing emphasis shifts with the population's specific stressors but the Safe Harbor architecture and the no-autonomy rule are identical. The recognition and commerce substrate is unchanged. What differs is the content, the credentialing path, and which programs lead; the structure does not.

---

# 17. Building a robust system

The brief asked how to build this robustly. The answer runs through a few engineering commitments that the preceding sections imply and that deserve to be stated together.

**Verify properly and show the strength.** Trust is tiered and visible (section 5). The system must support government records, authoritative cross-references, and, where records are lost, peer and association attestation, while recording the assurance level honestly and never letting a weak credential pass as a strong one.

**Issue through more than one party.** No credential is minted by a single party. Multi-party issuance with time-locked, reversible instructions means fraud and error have a correction path and no one actor can fabricate standing.

**Keep custody safe and recoverable.** Member key custody is split so that no single party, including the operator, can move a member's credentials alone, and recovery does not depend on a seed phrase a member will lose. Members set per-agent limits and approval thresholds.

**Keep sensitive context apart.** Avatars are isolated by purpose (section 8.3). Health and crisis context does not leak into career or community context. Personal data stays off-chain and is disclosed field by field.

**Make consequential actions auditable and attributable.** Every consequential agent action is logged as an artifact and is legally attributable to a registered entity, so the system is accountable and disputes resolve against a record.

**Migrate without breaking.** Communities move in a staged, supervised cutover that preserves archives and re-consents members, rather than a hard switch that risks an organization's continuity.

**Govern with safeguards.** Decision Markets resist manipulation through lagging averages and verified-identity membership, and protect the mission, the closed economy, and the safety commitments behind higher thresholds.

**Design for the member to outlast the platform.** Members can export or delete their data, credentials persist on-chain and survive dissolution, and schemas are standards-based, so the member's identity and record do not depend on the operator's survival.

**Put a clinician on the crisis path from day one.** The wellbeing pathway is owned by a human clinical professional, and the AI's role is bounded to detection, connection, and documentation (section 7).

Robustness here is mostly about restraint: verifying carefully, isolating context, keeping a human in the loop where it counts, and refusing to let the system act on its own where acting on its own would do harm.

---

# 18. Out of scope and open questions

**Out of scope.** Specific technologies, datastores, and hosting. The full content of any one organization's framework (produced with the companion skill). The securities and money-transmitter analysis of the economic layer, which is under separate counsel and must be completed before the relevant features ship.

**Open questions and source notes for the team.**

- **HEARTS as canonical.** The source material defines HEARTS as Harmony, Empowerment, Artistry, Reason, Trust, Synthesis, used both as the Sentinel's trauma-informed dial set and as the Decision-Market scoring framework, and names a "HEARTS Sentinel" component in the substrate. Confirm this is the canonical definition across the platform and that the master framework specification adopts the same.
- **Terminology.** "Kiduna Action Market" and "Kiduna sub-markets" appear in outward-facing copy; the documented mechanisms are Decision Markets, the Recognition Market, and Service-Made. Confirm the canonical terms so the spec and the product surfaces agree.
- **Dates.** July 1, 2026 is the West Virginia filing (Kiduna Day); a public co-launch is targeted later in 2026. Some portfolio passages give other dates; treat the filing date as fixed and confirm the public-launch date.
- **Technical substrate.** The current direction is Solana with the Token-2022 standard, superseding earlier EVM drafts in some documents. Confirm before any implementation detail is locked.
- **Examples that are illustrative.** Some composite organizations and personas in the source material are illustrative rather than real partners; verified real partners include the 2nd Cavalry Association and the founding organizations listed on the Service Alliance site. Keep the distinction when turning examples into specs.
- **Substance-use scope.** The sources cover suicide prevention, PTSD screening, and provider connection in depth; substance-use support is handled through connection and referral. Confirm how far the organization wants to go here and which resources to surface (Appendix D includes the SAMHSA National Helpline).

---

# Appendix A. Glossary (service vertical)

| Term | Definition |
| --- | --- |
| **Service organization** | An organization built around service — a VSO, unit association, IAFF local, FOP lodge, POST commission, or similar. |
| **MyServiceID (identity wallet)** | The member-owned, lifelong verified identity carried across every tool. |
| **Service credential** | The non-transferable proof of service held in the wallet, with active and separated states. |
| **Domain** | The service category of a credential: military, law enforcement, fire & EMS, federal first responder, public-service professional. |
| **Verifying Authority** | The source that confirms service or eligibility for a given domain. |
| **Safe Harbor** | The crisis pathway: AI-detected, human-delivered connection to crisis help. |
| **HEARTS** | The trauma-informed framework (Harmony, Empowerment, Artistry, Reason, Trust, Synthesis); the Sentinel's dial set and the governance scoring measure. |
| **Avatar** | A per-member Ally scoped to a single purpose, isolated from the member's other Avatars. |
| **Performer / Elector / Sentinel** | Worker agent; governance agent; alignment agent (see section 8). |
| **Code** | The signed object carrying an actor's identity, capabilities, credentials, and lineage; resolves on the registry. |
| **Recognition item** | A token, patch, pin, or badge in the closed recognition economy. |
| **Distribution Waterfall** | The programmatic split of real money across lineage, treasury, sponsor, curator, and protocol. |
| **Service-Made** | The verified veteran-owned-business marketplace. |
| **Decision Market** | The market-based governance mechanism. |
| **SADuna** | The Service Alliance Duna, the test-case organization. |

# Appendix B. Service-organization framework manifest

The framework definition for a service organization carries, in addition to the standard manifest fields from the master specification:

- **identity:** name, version, author, Actor type (usually Duna or Alliance), the service domains it covers, and a description of the resulting Ally.
- **inform:** starter Wisdom (history, rosters, benefits and resource directories, archives) marked fixed / fill-in / discovered; presentation structures (timelines, maps, rosters, memorial cards).
- **instruct:** the draft Stance with the service disposition and the wellbeing guardrails built in, and marked fill-in slots for creed and tone.
- **empower:** required and optional Abilities, with the sensitive ones (health, benefits) marked for protected handling.
- **enact:** the program suite (section 9), each with one Prompt, sequences, triggers, data connections, listeners, tools, and marked human-approval points.
- **align:** default HEARTS settings (conservative for this vertical) and adjustable ranges; the un-amendable protections.
- **wellbeing:** the Safe Harbor configuration, the crisis-line bindings per domain (Appendix D), the screeners, the clinical-ownership assignment.
- **identity & verification:** the domains covered, the Verifying Authorities, the tier policy, the issuer multisig.
- **discovery:** what a member's Ally searches for on the network (chapters, members, history relevant to their service).
- **slots:** the consolidated fill-in list for the adopt flow.

# Appendix C. Credential domain family

| Domain | Population covered | Verification source |
| --- | --- | --- |
| Military / veterans | Veterans, Active, Guard, Reserve | DD-214; VA; DMDC/DPRIS; DoD |
| Law enforcement | Sworn officers | POST board + agency attestation |
| Fire & EMS | Firefighters, EMS | NFPA / NREMT / state EMS + department attestation |
| Federal first responders | Federal responders | Federal agency + employment verification |
| Public-service professionals | Social workers, 911 telecommunicators, corrections, crisis-response, related | State licensing board + employer attestation |
| Family | Spouses, children, Gold Star family | Family-relationship authority; linked to the verified service member |

# Appendix D. Crisis-resource reference

These resources are surfaced by the wellbeing pathway and must be kept current from authoritative sources. Confirmed current as of June 2026.

- **Veterans / Military Crisis Line** — Dial **988, then press 1**; text **838255**; chat at VeteransCrisisLine.net/Chat. Available 24/7; responders are trained in military culture; available whether or not the person is enrolled in VA care.
- **988 Suicide & Crisis Lifeline** — Call or text **988**; chat at 988lifeline.org. Available 24/7 for anyone in the broader population.
- **SAMHSA National Helpline** — **1-800-662-HELP (4357)**; TTY **1-800-487-4889**; text a ZIP code to **435748 (HELP4U)**. Free, confidential, 24/7/365, English and Spanish; treatment referrals for mental health and substance use.

These are starting points the system routes a member toward. The system connects; trained humans provide the care.

---

*This document is a specification. It is sensitive in places — suicide, post-traumatic stress, and substance use are part of the population it serves. The design keeps the system in the role of detecting concern and connecting people to trained human help, and out of the role of providing that help. Anyone building from this should hold that line.*
