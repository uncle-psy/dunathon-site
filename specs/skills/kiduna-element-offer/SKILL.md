---
name: kiduna-element-offer
description: >-
  Specify how Kiduna Elements (Wisdom, Stance, Programs/Magic, Vibes, Coin
  configs) are listed as Offers in the Big Kiduna marketplace — free or priced,
  shown in USD and Kiduna Coins but paid in KIDuna, with lineage — and how
  contests, Quests, and airdrops run through Codes. Produces a Word (.docx,
  Kiduna house style) and Markdown spec. Use whenever the user wants to design or
  spec Elements as Offers, the Element marketplace, pricing in USD/Coins, paying
  in KIDuna, the Element library, Founders picking Elements to start a Kiduna,
  lineage/royalties on Elements, or contests, Quests, and airdrops. Part of the
  Kiduna Factory family (see kiduna-factory-spec). Produces a SPECIFICATION, not
  code.
---

# Kiduna Elements-as-Offers specification

Specifies the marketplace through which the Factory grows the network: **Elements
listed as Offers**, and the growth mechanics (**Quests, contests, airdrops**)
that run through Codes. Produces a Word + Markdown spec. Shared model:
`kiduna-factory-spec/references/operating-model.md`.

## Elements
The reusable building blocks of a Kiduna: **Wisdom** (Inform), **Stance**
(Instruct), **Abilities** (Empower), **Programs / Magic** (Enact), **Sentinel /
HEARTS** (Align), plus **Vibes**, **Codes**, **Coin configs**, and **Offers**.
Founders **explore** the Big Kiduna's Elements and either add chosen Elements to
a Kiduna they run, or **start a new Kiduna by picking Elements**. Exploring
Elements is also how the Factory teaches.

## Elements as Offers
A maker lists an Element as an **Offer**, free or priced, under a Duna's
standing. Each Offer shows its price in **both USD and Kiduna Coins** so value is
legible, but the user **pays in KIDuna** — the USD figure is a reference;
settlement is in the coin. The price lives on the Offer's Code (`price`, e.g.
`usd:10/once`). Every Offer carries **lineage**: when an Element is acquired and
reused, the maker sits upstream and earns commissions through the Distribution
Waterfall. Many foundational Elements are **free**, because the Factory's first
job is to teach and lower the cost of starting a Kiduna; free and paid Elements
sit in the same library and are acquired the same way (the difference is the
price Claim).

## Contests, Quests, airdrops (via Codes)
- **Quests** — missions posted by Dunas that earn coin on completion; appear in
  Vibe; a primary way a new member earns first KIDuna.
- **Contests** — time-boxed competitions announced on social and in-app; rewards
  in coin or recognition.
- **Airdrops** — distributions triggered by a Code's `actions` Claim
  (`actions: airdrop:...`) on redemption, or run as a campaign; the `benefits`
  Claim attaches bonus coins.
All route through Codes and the economy, appear in Vibe and on the social
channels (Telegram, Bluesky), and notify through the Personal Ally.

## What to specify
The Element types listed as Offers; the listing flow; dual USD/Coins display with
KIDuna settlement; the price/benefits/actions Claims; lineage and Waterfall
routing to maker and referral chain; the free-vs-paid library and explore-and-pick
to start/extend a Kiduna; and the Quest/contest/airdrop mechanics with their
Codes. Mark human-approval points (a purchase spends; surface it).

## Workflow
1. Specify which Element types can be offered and the listing flow.
2. Specify pricing (USD + Coins display, KIDuna settlement) and the Claims used.
3. Specify lineage and Waterfall routing.
4. Specify the library and explore-and-pick to start/extend a Kiduna.
5. Specify Quests, contests, and airdrops and their Codes.
6. Fill `assets/spec-template.md` → `<duna>-offers-spec.md`; render with the
   bundled converter; save both files and present.

## Principles
- Value is shown in USD and Coins; settlement is always in KIDuna.
- Lineage makes authoring good Elements worthwhile — commissions recur.
- Free Elements are a teaching tool; keep the on-ramp cheap.
- Airdrops/contests/Quests run through Codes and the economy, not as one-offs.
- A specification, not code. Don't fabricate; flag pricing/display questions.
