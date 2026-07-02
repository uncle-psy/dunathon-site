# Service-vertical primitives

Specializes the general Kiduna primitives for service organizations. For the
base vocabulary (Actors, agent types, the five phases, Program sub-primitives,
Codes, the registry) see the general kiduna-framework-spec skill.

## Roles

| Role | In this vertical | Maps to |
| --- | --- | --- |
| **Member** | A verified individual: veteran, serving member, sworn officer, firefighter/EMS, federal first responder, public-service professional, or eligible family member (spouse, child, Gold Star family) linked to a verified service member. | Member/User |
| **Organizational Member** | A vetted organization — VSO, unit association, IAFF local, FOP lodge, POST commission — managing its own members, heritage, and recognition. | Member (org) |
| **Founder** | One of the first verified cohort named on the filing; apex of lineage; heightened governance standing. A kind of Member. | Founder |
| **Sponsor** | The outside entity that stands the org up and holds issuer authority (test case: Service Alliance LLC). | Sponsor |
| **Curator** | An operator/program leader who runs a cohort or service for a defined share. | operator |
| **Verifying Authority** | The source confirming service/eligibility per domain. | verification |
| **Registered Agent** | The West Virginia agent of record a Duna requires. | Registered Agent |

The organization is usually a **Duna** (legal standing + treasury) or an
**Alliance** (informal grouping). A federation = a Duna with sub-groups, or an
Alliance of Dunas, with discovery linking them.

## Identity & verification

One member-owned verified identity per person, carried for life, signed into by
email with key custody abstracted (no seed phrases), readable by every tool and
by chosen outside parties. Verify once; never re-prove.

**Service credential:** non-transferable (soulbound), verified once at issuance,
anchored to an authoritative record. No personal data on-chain — only an issuer
signature, a credential hash, a status, a domain, and a pointer to off-chain
metadata the member controls and discloses field by field. Two states with a
one-way transition: active-service → separated (no reverse; re-entry mints a new
active credential; at most one active per domain, any number of separated).

**Credential domain family:**

| Domain | Population | Verification source |
| --- | --- | --- |
| Military / veterans | Veterans, Active, Guard, Reserve | DD-214; VA; DMDC/DPRIS; DoD |
| Law enforcement | Sworn officers | POST board + agency attestation |
| Fire & EMS | Firefighters, EMS | NFPA / NREMT / state EMS + dept attestation |
| Federal first responders | Federal responders | Federal agency + employment verification |
| Public-service professionals | Social workers, 911 telecommunicators, corrections, crisis-response, related | State licensing board + employer attestation |
| Family | Spouses, children, Gold Star family | Family-relationship authority; linked to the verified member |

**Verification tiers:** self-attestation + community vouching (provisional) →
validated source document (full) → authoritative cross-reference (higher) →
direct in-service/agency check (strongest). The tier must be visible; a low tier
cannot impersonate a high one. Support peer/association attestation where records
are lost. **Multi-party issuance:** no credential minted by one party (e.g.,
military credential = verification path + sponsor co-signer); issuance flows
through a time-locked, reversible instruction. Credentials survive expulsion and
dissolution.

## The tool suite (programs)

Adopt the whole suite or a subset. Each is a program (or small set) with an Ally
or Avatar in front.

| Tool | What it does |
| --- | --- |
| **Roll Call** | Community backbone: verified profiles, chapters/sub-groups, newsletter/comms hub, membership & dues, virtual reunions with AI summaries, migration off aging platforms. |
| **LegacyLog** | Mobile-first record digitization to recognized archival standards; submission to national repositories. |
| **Veteran Voices** | Oral-history capture: AI interviewer from a pre-survey, video, transcription, output for national collections. |
| **Service Connected** | Benefits navigation + the home of **Safe Harbor**: claims help, screening with provider connection, referral directory, facilities map. Highest-stakes tool. |
| **The Campaign** | Immersive mapping of unit movements and historical sites; educational mode. |
| **Wall of Honor** | Permanent memorial to the fallen: verified profiles, family-contributed records, anchored provenance, connection engine. |
| **Into the Breach** | Military-to-civilian transition: skill translation, federal-employment navigation, veteran-owned business hub, employer network, career coach. |
| **The Forge** | Leadership development & mentorship: matching, military-adapted curriculum (can draw on the org's own history), accountability cohorts, coaching marketplace. |
| **Recognition Market** | The closed recognition economy (below). |
| **Service-Made** | Verified veteran-owned-business storefront; ownership badge is a credential bound to the owner's identity. |

## Recognition economy (closed against cash)

Three object classes: **credentials** (non-transferable proofs of fact, gate
everything), **recognition tokens** (earned and gifted, never bought with cash,
never cashed out), and **expression items** (patches/pins/badges — earnable,
giftable, tradeable peer-to-peer, designable by members for a royalty,
redeemable for physical versions). Structural, permanent rule: closed against
government currency in both directions — no cash on-ramp, no off-ramp, no
published exchange rate. Bounded supply; an issuer of record per item. This
closure is un-amendable.

## Money substrate (Distribution Waterfall)

Real money (membership, sponsorship, computation, trading, offerings) splits
atomically: a portion pays lineage commissions up the enrollment chain
(four levels), the rest divides among treasury, sponsor, curator, and protocol.
Surplus reinvested in the mutual purpose; no outside shareholder to extract to.
Founders sit at the apex of their lineage with perpetual, protocol-enforced
commissions settling in withdrawable value. **Service-Made** is the
verified-ownership marketplace where sellers are member-owners, not tenants.

Keep all of this proportionate in any spec: it is the substrate, not the point.
