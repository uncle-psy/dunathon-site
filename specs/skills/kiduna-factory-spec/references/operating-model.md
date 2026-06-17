# Kiduna operating model (grounded in the prototype)

The shared model every Factory spec assumes. Drawn from the DUNATHON prototype,
a faithful front-end model of the live system.

## Modes
- **Active mode** — participate: Chat, Vibe, Seek, Vote, Earn.
- **Builder mode** — make/run: Allies, Programs, Offerings, Coins, Codes,
  Gatherings, Objectives, Markets, Electors, Team, Setup.

## Levels (set by coin-holding, USDC value; no subscription)

| Level | Base holding | Note |
| --- | --- | --- |
| Guest | $0 | read-only in most places |
| Member | $10 | vote, chat, join |
| Founder | $100 | run a DUNA, Offerings, Markets, Alliances |
| Builder | $1,000 | build Programs |
| Sponsor | $10,000 | Offering Allies, Electors |
| Catalyst | $100,000 | enterprise |
| Luminary | $1,000,000 | planetary |

Each DUNA applies a **multiplier** to these thresholds. Stripe caps ~$25k →
Catalyst/Luminary reached by loading USDC. Initial coin buys are non-transferable
30 days.

## Level → what you can create
- Member: Personal Allies, Alliances
- Founder: DUNA Allies
- Builder: Programs
- Sponsor: Offering Allies

## Allies
Five types: **DUNA Ally, Personal Ally (member), Alliance, Sponsor, Program.**
Any can be **Primary** for its principal. States: **Draft / Testing /
Published.** Visibilities: **Public** (any may connect, listed in Seek),
**Private** (listed, needs a Code with matching entry Claim), **Secret** (not
listed; reached only by entering its Code). Codes are always exchanged on
connect; visibility only decides who may initiate.

## Coin & economy
Each DUNA can issue a coin; The Big Kiduna's is **KIDUNA**. Custody = Solana
**FROST** wallet (key split, no single party can move funds, no seed phrase).
Fund via Stripe/on-ramps, external wallet (Phantom/Solflare), or USDC transfer.
**Distribution Waterfall:** money (membership, sponsorship, computation, trading,
offerings) splits atomically — lineage commissions up four levels, then DUNA
treasury / Sponsor / Curator / protocol. Surplus reinvests; no outside
shareholder. **Team** defines DUNA-level roles and revenue splits.

## Codes / Claims
A Code = invitation + credential in one, signed, resolving on the WV registry.
Claim set: issuer, wallet (FROST pubkey), agent (issuing Ally), context, role,
scope (e.g. chat:read, vibe:read), splash (where they land — chat:host-ally or
vibe:<id>), ref, redeem_by, ttl, max_uses, bound-to, actions (e.g.
airdrop:welcome), benefits (e.g. bonus:10%), vibes (e.g. hearts:default), price
(e.g. usd:10/once), terms, access (public/private/secret).

## Elements
The reusable building blocks of a Kiduna: Wisdom (Inform), Stance (Instruct),
Abilities (Empower), Programs/Magic (Enact), Sentinel/HEARTS (Align), plus Vibes,
Codes, Coin configs, Offers. Browsable as a library; listed as Offers (free or
priced) in the Big Kiduna. Founders explore-and-pick Elements to start or extend
a Kiduna.

## Programs (Magic)
Enact-phase unit of behavior; also called **Magic** in the marketplace. Bundles
**Skills** (lines in a Skill.md: "when this, do that"). One Prompt; many
Triggers, Database Connections, Polling/Web Hook listeners, Tools.

## Governance
Decision Markets: Objectives hold Proposals; Proposals resolve via conditional
Pass/Fail markets that members' **Electors** trade; lagging time-weighted average
resolves; outcome executes. Asymmetric thresholds protect mission-critical
matters. Signed rationales stored in the graph.

## The Factory mechanic
Members form **Alliances** (containers in a DUNA, no legal standing). When an
Alliance reaches mass, the Governance Market votes to **graduate** it into a new
Kiduna and how much to **seed** it (coin, treasury USDC, or a mix). The buy-in
becomes the new Kiduna's treasury; lineage records the parent upstream.

## Names to confirm
Genesis DUNA = **The Big Kiduna** (prototype themes it as DUNATHON for the launch
event; coin shows DT). Canonical coin = **KIDUNA**. Confirm before build.
