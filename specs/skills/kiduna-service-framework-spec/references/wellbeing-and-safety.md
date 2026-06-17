# Wellbeing and crisis safety — read every time

This vertical serves people with elevated risk of suicide, post-traumatic
stress, and substance use. The system will at times be in contact with someone
in real danger. The design has one job in those moments: notice, and connect the
person to trained human help, quickly and reliably.

## The line that cannot move

> AI detects and assists; a human delivers care. Agents surface, assist, and
> draft; people decide. There is no autonomous action on a member's crisis flag,
> claim, or benefit without a human-verified handoff. The Ally never poses as a
> clinician or counselor, never attempts therapy, and never tries to talk a
> person through acute risk on its own. It gets them to someone trained and
> stays out of the way of that care.

Every spec this skill produces must state this line and design to it.

## Safe Harbor (the crisis pathway)

Safe Harbor lives inside the benefits-and-wellbeing program (Service Connected
in the test case). Components:

- **One-tap connection to the right human crisis line**, always available,
  surfaced prominently, reachable without friction (resources below).
- **AI wellness check-ins** built on validated screeners — **PHQ-9**
  (depression) and **PCL-5** (post-traumatic stress). These prompt a human
  connection; they do not diagnose.
- **A peer-support network** — connection to others who understand the work,
  which is the protective factor the data supports most strongly.
- **Gatekeeper orientation** built in — the **QPR** approach (Question, Persuade,
  Refer).

**How a crisis moment is handled:** the system detects possible crisis (a
screener, a message, a pattern such as sleep disruption overlapping other
signs), then surfaces concern and moves the member toward a human — offers the
one-tap line, can connect a peer specialist, alerts the human pathway. **A
clinical professional owns the escalation pathway** (a contracted mental-health
professional from day one reviews the workflows, trains the check-in, and is
accountable for escalation). The system detects, connects, and documents the
handoff. It does not counsel or decide a clinical question.

## HEARTS (the Sentinel's framework)

The Align phase produces the **Sentinel**, bounded by **HEARTS**: a
trauma-informed framework with six dimensions — **Harmony, Empowerment,
Artistry, Reason, Trust, Synthesis**. It embeds trauma-informed principles into
how the AI interacts: prioritizing safety, trust, and user autonomy, recognizing
difficult patterns, steering toward healthy options and human connection, and
never trying to replace genuine human connection or professional clinical care.
The same six dimensions score the health of governance processes. For a service
organization, the Sentinel's defaults are conservative: quicker to surface
concern, quicker to bring a human in. Defaults are adjustable within ranges; the
protections below are not.

(Confirm with the team that this HEARTS definition is canonical platform-wide
before presenting it as settled; flag as an open question if unsure.)

## Protections that cannot be removed

Treat these as un-amendable; changes that touch them require a much higher
governance threshold:

- The wellbeing and Safe Harbor commitments and the member- and child-safety
  protections cannot be eliminated by any governance change.
- A duty to direct a member in crisis toward appropriate human support is
  written into the charter and the Founders' obligations.
- Member data is never sold. Health/disability data is encrypted end-to-end and
  handled to a HIPAA-adjacent standard. The most sensitive active-service data
  (deployment locations, classified roles) is never stored, even with consent.
- Disciplinary or administrative processes are never used in a way that
  endangers a member in crisis.

## Scope beyond acute crisis

Navigating mental-health care and benefits; screening that connects to licensed
providers; peer support; practical stress reducers (a benefits claim, a
hardship, a transition). **Substance use** is handled the same way as other
crises — connect to appropriate human help and established resources (SAMHSA
below); the system does not attempt treatment. A trusted, private form of mutual
aid (a member articulating a need, matched to resources and people) is kept
inside the verified community so it is not exploited.

## Crisis resources (verify before use)

Surface these only from current authoritative sources — confirm with a search
rather than trusting memory, because numbers and services change. Confirmed
current as of June 2026:

- **Veterans / Military Crisis Line** — Dial **988, then press 1**; text
  **838255**; chat VeteransCrisisLine.net/Chat. 24/7; responders trained in
  military culture; available regardless of VA enrollment.
- **988 Suicide & Crisis Lifeline** — call or text **988**; chat 988lifeline.org.
  24/7, general population.
- **SAMHSA National Helpline** — **1-800-662-HELP (4357)**; TTY
  **1-800-487-4889**; text a ZIP to **435748**. Free, confidential, 24/7/365,
  English/Spanish; mental-health and substance-use treatment referrals.

Bind the right line to the right domain (military → Veterans Crisis Line; broader
population → 988; substance use → SAMHSA). The system connects; trained humans
provide the care.

## A note on writing these sections

Be accurate and plain. Do not dramatize. Do not write copy that amplifies
distress. Specify how the system gets a person to help and how it stays in its
lane. If you are unsure whether a feature crosses from "connect" into "treat,"
treat it as out of scope for the AI and route to a human.
