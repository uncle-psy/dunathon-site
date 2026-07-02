---
name: kiduna-duna-chat
description: >-
  Specify a Kiduna Duna Ally's chat experience — the Stance (system prompt), the
  Wisdom (knowledge base / vector store / Pinecone), the contextual chips, how
  chats are mediated through Allies, and notifications. Produces a Word (.docx,
  Kiduna house style) and Markdown spec. Use whenever the user wants to design or
  spec the Duna Ally chat, the always-on help dock, contextual chips/quick
  replies in chat, the Stance or system prompt for a Duna Ally, the knowledge
  base / Pinecone / vector store behind an Ally, how people and Allies
  communicate, chat mediation, multi-user chat, or notifications and how members
  set notification preferences by talking to their Personal Ally. Part of the
  Kiduna Factory family (see kiduna-factory-spec). Produces a SPECIFICATION, not
  code.
---

# Kiduna Duna-Ally chat specification

Specifies how a Duna Ally talks with people and how people talk with it: the
**Stance**, the **Wisdom**, the **contextual chips**, the **mediation** of all
communication through Allies, and **notifications**. Produces a Word + Markdown
spec. Ground it in the Dunathon prototype, which models the live chat surfaces.
For the shared operating model see `kiduna-factory-spec/references/operating-model.md`.

## The two chat surfaces

1. **Main Chat** — a person's conversations with the Duna Ally (their Host),
   their Personal Ally (concierge), and published Allies. Each opens from its
   Stance with a greeting and starter chips.
2. **The always-on contextual dock** — "Ask [Duna] ✦" on every page, opening the
   current Duna's Ally with a context-appropriate intro and chips. This is help;
   it is always available; it answers from Wisdom and can navigate the person.

## What to specify

### Stance (the system prompt)
Write the Duna Ally's Stance: who it is, how it speaks (briefly, concretely),
its rules for offering chips (always a low-pressure exploratory option; prefer
the next concrete step; never push spend), and its accountability posture (acts
under real identity; pauses for human approval on anything consequential; routes
to the right Ally/view rather than overreaching). One Stance per Ally, editable
as prose. Include a full draft Stance in the spec.

### Wisdom (knowledge base / vector store / Pinecone)
Specify what the Ally knows and how it is stored and retrieved. Wisdom lives in a
vector store (Pinecone is the working choice). Define: the topics covered; how
items are chunked; the tags (topic, and the level each item is relevant to);
source traceability; and the three jobs Wisdom serves — answering in main Chat,
answering question-chips, and deciding which chips are relevant on a page. Wisdom
is added via Inform (documents, connected Drive, or published Elements).

### Contextual chips — the mechanism
Chips are short suggested moves, of three kinds: **question** (answered inline),
**navigation** (go to a view), **action** (run a Program, with approval where
needed). Specify how chips are generated per context from three inputs: the
**Stance** (which moves to offer and the voice), the **Wisdom** (answers and
relevance), and the **Programs** (the actions). Chips are scoped to the person's
level and Code. Deliver a **per-context chip catalog** (intro + chips for each
page) as the starting set — see `references/chip-catalog.md`.

### Chat mediation
Specify that chat looks multi-user but every message is mediated by an Ally:
person-to-person exchanges are carried by each side's Ally under Code-scoped
permissions; a receiving Ally enforces its principal's preferences before
delivery; consequential requests are surfaced for human approval; the mediated
exchange is audited. A "group chat" is a set of Allies convened around a shared
context (Alliance, Gathering, Vibe room).

### Notifications
Specify the event classes (economic, governance, Ally activity, community/Vibes,
direct) and that preferences are set **by talking to the Personal Ally** in
natural language (plus a settings surface). Delivery is Ally-mediated — the
Personal Ally evaluates each event against preferences and batches, prioritizes,
suppresses, and delivers across in-app, push, Telegram, Bluesky, and email. See
`references/chip-catalog.md` for the notification event catalog too.

## Workflow
1. Identify the Duna and its Ally (name, handle, line).
2. Draft the Stance.
3. Specify the Wisdom (topics, chunking, tags, retrieval, the three jobs).
4. Build the per-context chip catalog (question/navigation/action), scoped.
5. Specify mediation and notifications.
6. Fill `assets/spec-template.md` → `<duna>-chat-spec.md`; render with the bundled
   converter (`npm install docx`; copy `scripts/build_docx.js`; run it); save
   both files and present.

## Principles
- The dock is the most important pattern: it teaches the network without a manual.
- Everything flows through Allies; mediation is the safety mechanism.
- Chips come from Stance + Wisdom + Programs, scoped to level and Code — not a
  hard-coded menu.
- A specification, not code. Don't fabricate; flag naming questions.
