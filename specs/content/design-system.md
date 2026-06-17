---
title: Brand & Design System
subtitle: Deep. Golden. Civic. — the brand and interface system for Kiduna.
---

The **Kiduna Design System** is a West Virginia fork of the Kinship design
system. It keeps Kinship's type stack and underlying palette, and re-points the
theme to West Virginia: an **Old Gold** pulse on **deep navy**, with **sky blue**
for linkage and a **celestial sun-and-moon** mark. The brand leads with *Kiduna*;
the West Virginia roots live in the colors and the Appalachian ridge motif.

> Wild, wonderful, and self-governed.

## The live system

The design system ships as a self-contained, dependency-free web project under
[`design-system/`](../design-system/index.html). Open it directly — it is the
source of truth for color, type, spacing, components, and logo usage.

- **[Design System reference](../design-system/index.html)** — the full
  foundations: logo, color, typography, space/radius/elevation, components, and
  voice.
- **[UI Kit (worked example)](../design-system/ui-kit.html)** — nav, hero with
  the ridge motif, stat strip, movement cards, activity feed, and pricing, all
  built from the tokens.
- **[`colors_and_type.css`](../design-system/colors_and_type.css)** — the token
  + base-style stylesheet. **Import this into everything.** Never redefine brand
  colors or fonts inline; use the CSS variables.

```html
<link rel="stylesheet" href="/design-system/colors_and_type.css">
```

## What changed from Kinship

| | Kinship | Kiduna |
|---|---|---|
| Primary action | Orange `#EB8000` | **Old Gold `#EAAA00`** |
| Text on primary | White | **Deep navy `#09073A`** (gold is light) |
| Surfaces | Kinship navy | Kinship navy (unchanged) |
| Secondary accent | Sky blue | Sky blue (unchanged) |
| Orange | Primary CTA | **Extended palette only — never an action** |
| New tokens | — | `--wv-gold`, `--wv-gold-hover`, `--wv-flagblue` (`#002855`), `--on-accent` |
| Motif | — | Appalachian ridgelines + a celestial sun/moon mark |
| Type | Goudy Heavyface + Avenir | **Same, + IBM Plex Sans for call-outs** |

Everything else — the spacing grid, radii, elevation, component patterns, and the
italic-emphasis signature move — carries over unchanged. Source files consume
`var(--accent)`, so most components re-theme for free.

## Color

One pulse of Old Gold on deep navy, with sky blue as the single secondary. **Text
on gold is always navy** — this blue-on-gold pairing is the most West Virginia
thing in the system. Orange and the wider palette are editorial-only, never UI
actions.

| Role | Name | Hex | Token |
|---|---|---|---|
| Primary pulse — every action | Old Gold | `#EAAA00` | `--wv-gold` / `--accent` |
| Page field; text on gold | Deep Navy | `#09073A` | `--bg` / `--on-accent` |
| Secondary — links, on-chain signal | Sky Blue | `#03CCD9` | `--link` / `--kin-skyblue` |
| Editorial fields, imagery | Flag Blue | `#002855` | `--wv-flagblue` |
| Cards | Surface | `#0A0D33` | `--surface` |
| Elevated cards | Surface Elev | `#100E59` | `--surface-elev` |
| Imagery only — *never* an action | Orange | `#F7941D` | `--kin-orange` |

## Typography

Goudy Heavyface carries display; Avenir handles everything else; **IBM Plex Sans
speaks only in call-outs** (asides, definitions, pull-facts, "how it works"
notes — never body, never display). The *Kiduna* wordmark is a custom logotype,
reserved for the lockup.

- **Display** — Goudy Heavyface, 54–76px, line-height ~1.0.
- **Body** — Avenir 400/700, 16px, line-height 1.5.
- **Eyebrow** — Avenir 700, 10–11px, caps, `letter-spacing: 0.16em`.
- **Call-out** — IBM Plex Sans, 15px, line-height 1.6, via `.wv-callout`.
- **Numbers are always Goudy** — every stat, count, treasury figure, and price.
  Round to three significant figures in dense UI (`$81.4k`); full precision in
  detail views.

**The signature move:** `em.wv-emph` (alias `.kin-emph`) — one italic Goudy
phrase, set in Old Gold, inside a display headline. *One phrase per headline,
never two.*

## Space, radius & elevation

A 4pt spacing grid (8/12/16/20/24 do most of the work). Pills for nav and badges
(`--radius-pill`); **buttons are squared with a slight radius** (`--radius-xs`,
4px); cards use `--radius-lg` (14px). Shadows are cool and dim on dark surfaces —
never bright. `--shadow-glow-accent` (gold) and `--shadow-glow-sky` are reserved
for *one* hero element per screen.

## Components

Built straight from the tokens. Gold primary with navy text; sky used sparingly;
text arrows (`→`) as the default "continue" glyph.

- **Buttons** — squared (`--radius-xs`). Primary = gold bg + navy text. Secondary
  = transparent + border. Only one primary (gold) CTA per viewport.
- **Cards** — `--surface`, `--radius-lg`, `--shadow-md`, 1px hairline border; lift
  `translateY(-2px)` on hover. Covers use a radial gradient in one brand hue.
- **Badges** — pill, 11px caps, colored background at ~0.14–0.18 alpha with
  matching solid text. The featured badge is gold.
- **Inputs** — `--radius-sm`; focus ring uses `--accent` + `--accent-soft`.

## Iconography & logo

Kiduna does not ship a general icon set. Use **text arrows** (`→ ↗ ←`) by default,
**Lucide** (stroke 1.75, 20px, `currentColor`) only when a glyph is genuinely
necessary, and the **Kiduna lockup** for brand. The mark is an Old-Gold sun
cradling a warm-cream crescent moon (`#FFF6D5`) ringed by sky-blue sparkles, paired
with the custom rounded "Kiduna" wordmark in sky blue.

- Full-color lockup ([`kiduna-logo.svg`](../design-system/assets/kiduna-logo.svg))
  on navy, deep, flag-blue fields.
- Navy lockup ([`kiduna-logo-navy.svg`](../design-system/assets/kiduna-logo-navy.svg))
  on gold and cream.
- White mono ([`kiduna-logo-white.svg`](../design-system/assets/kiduna-logo-white.svg))
  for single-ink treatments.
- Stacked lockup (`kiduna-logo-stacked*.svg`) for square/tight compositions; the
  standalone mark (`wv-cosmic-mark-*.svg`) for favicons and tight spaces.

The mark's two-color logic is fixed — **never recolor it** to orange, magenta,
lime, or violet.

## Voice

Warm, direct, slightly literary, with a civic/cooperative undertone. We write
*to* the reader and use "you" freely. We almost never say "users" — we say
*members*, *organizers*, *stewards*, *the block*, *kin*. A DUNA is a real legal
vehicle, so we are precise: associations *register* with the *Secretary of State*,
adopt *bylaws*, hold a *treasury*, and pass *proposals* by member *vote*.

**Avoid** buzzwords (*synergy*, *leverage*, *disrupt*), hollow CTAs (*Learn more*),
stacked emoji, and web3 jargon that isn't load-bearing.

## Before you ship a Kiduna screen

- Does exactly one headline carry the `em.wv-emph` italic-gold phrase?
- Are all numbers in Goudy?
- Is there exactly one primary (gold) CTA in the viewport, with navy text?
- Does the page use `var(--bg)` as its background, not a hand-picked hex?
- Is the logo the gold lockup on dark / navy on gold-cream / white mono — never
  orange or a rainbow hue?
</content>
</invoke>
