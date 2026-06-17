# Contextual chip catalog + notification events (starting set)

From the DUNATHON prototype's dock contexts. Each chip is a **question**
(answered inline from Wisdom), a **navigation** (to a view), or an **action**
(run a Program, with approval where needed). Scope every chip to the person's
level and Code.

## Per-context chips

| Context (page) | Dock intro | Starter chips |
| --- | --- | --- |
| Default / any page | "I'm the [DUNA] Ally. Ask me anything about [DUNA] or this page." | What can I do here? · Take me to the Directory (nav) · Open my wallet (nav) |
| Onboarding / Host chat | "Welcome to the DUNAVERSE. I'm the Big Kiduna, the Ally your host left running for you." | What can I do here? · Set up my profile & Ally (action) · Show me what's happening · Just exploring |
| Codes | "Codes are how trust travels. Want to make one, or understand the Claims?" | What's a Claim? · Create a Code (nav) · See my Code metrics · Who is my Host? (nav) |
| Account / standing | "Your role here is set by how many Coins you hold." | How do Coins set my role? · Why only up to Sponsor? · Load my wallet |
| Directory | "This is the network — DUNAs, Members, Alliances, and Programs." | Show me DUNAs · What's an Alliance? |
| Allies / Agents | "Allies represent people, DUNAs, Alliances, Programs, and Sponsors." | What types can I make? · Draft vs Testing vs Published? · Create a new Ally (nav) |
| Enact / Programs | "Enact turns intention into action. A Program bundles Skills." | What's a Skill.md? · New Program (action) |
| Markets / governance | "Governance markets price proposals, outcomes, and reputations." | How does a graduation vote work? · Open a Proposal (nav) · What's an Elector? |
| Vibe | "Experiences, games, and rooms across the network." | Show me live rooms (nav) · Play a game · What's a Quest? |

Acceptance: on any page, the DUNA Ally produces a small, correct chip set like
these from Stance + Wisdom + Programs, scoped to level and Code.

## Notification event classes

| Class | Example events |
| --- | --- |
| Economic | Host bonus received; coin gift; royalties from a published Ally/Element; level change; Offer sold; wallet funded |
| Governance | Proposal opened; treasury action; quorum reached; market resolved; graduation Proposal for your Alliance |
| Ally activity | Scheduled task finished; your Code redeemed; new member via your Code; approval requested |
| Community & Vibes | Live Vibe room; Quest posted; contest or airdrop; Alliance formed/changed/graduated |
| Direct | A mediated message from another Ally that your preferences allow through |

Preferences are set by talking to the Personal Ally (plus a settings surface).
Delivery is Ally-mediated (batch, prioritize, suppress) across in-app, push,
Telegram, Bluesky, email.
