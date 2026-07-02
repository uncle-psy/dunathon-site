# Five-phase interview checklist

Use this as your guide while specifying a framework. For each phase, capture the
listed items and mark every shipped element as **fixed**, **fill-in**, or
**discovered**:

- **fixed** — domain content the adopter inherits unchanged.
- **fill-in** — a slot the adopter completes (name, tone, credentials, offers).
- **discovered** — content the Ally fetches from the network at run time.

A strong framework maximizes fixed and discovered, and minimizes fill-in, so
adopting it feels like gaining a capable agent rather than filling out a form.

---

## 1. Inform → Wisdom (the knowledge base)

- What starter knowledge ships with the framework? List the documents or document
  types (Word, Google Docs, PDFs, connected Drive folders).
- Which Wisdom is fixed domain knowledge, and which is a fill-in slot for the
  adopter's own material?
- What should the Ally **discover** on the network instead of storing?
- How should the Ally **present** knowledge in conversation — cards, a grid of
  options, a diagram of a sequence with choices, an itinerary, a comparison?
  What does it link out to (Google Doc, video, image, booking page, map)?
- Should any connected source stay live (updating Wisdom when the source
  changes)?

Acceptance criteria to state: uploads and connections become traceable Wisdom;
the Ally can present knowledge as structured cards, not only text.

## 2. Instruct → Stance (the system prompt)

- Draft the actual Stance for this domain: who the Ally is, how it speaks, what
  it is trying to do, how it treats the people and agents it works with.
- Mark the fill-in slots inside it (business name, tone, specific commitments).
- One Stance per Ally — do not specify more than one.

Acceptance criteria: a complete draft Stance with marked slots, editable as
free text.

## 3. Empower → Abilities (tools and accounts)

For each connection, state whether it is **required** or **optional** and **why**
the framework needs it. Draw from the initial set: Gmail, Docs/Drive, Calendar,
Meet, Bluesky, Solana (external wallet), Telegram.

- Which Abilities do the Programs depend on? (A required-but-unconnected Ability
  must block its Program clearly, not fail silently.)
- What scope does each Ability need, in plain language?

Acceptance criteria: required vs optional Abilities declared with reasons; scope
shown plainly.

## 4. Enact → Programs (the engine)

Specify each Program the framework ships. For every Program capture:

- **Prompt** — the single instruction that drives it. (Exactly one.)
- **Sequence** — the ordered steps; note branches and option points.
- **Triggers** — what starts it. Zero or more (inbound email, calendar event, a
  user request, a schedule).
- **Database Connections** — data it reads/writes. Zero or more.
- **Polling / Web Hook** — what it listens to. Zero or more (an inbox, an event
  source, pub/sub, a webhook).
- **Tools / Abilities** — which Abilities it may use. Zero or more.
- **Human-approval points** — where it pauses for a person before a consequential
  action (paying, signing, sending, booking). Be explicit.
- **Long-running behavior** — note where it plans, delegates to Performers, or
  must resume after interruption.

State for each Program what triggers it, its ordered steps, what data it touches,
its tool access, and where it pauses. A framework can ship several Programs.

Acceptance criteria: one Prompt per Program; durable, long-running execution;
human approval at defined points; structure visible to the adopter.

## 5. Align → Sentinel (HEARTS)

- Give the **default HEARTS dial settings** appropriate to the domain, and the
  **adjustable range** for each.
- Note how the defaults follow from the rest of the build (a crisis-facing
  service Ally is more conservative than a gaming community Ally).
- Describe what the Sentinel watches for in this domain and when it should bring
  a human in.

Treat HEARTS as a named, ordered set of bounded dials. If the canonical dial set
and the meaning of each dial are not established, say so and propose sensible
defaults — do not invent definitive meanings. Flag it as an open question.

Acceptance criteria: every Ally has a Sentinel; dials are pre-set and adjustable
within ranges; interventions are visible to the person.

---

## After the phases

- **Assembly:** confirm the Actor the Ally is bound to, and that it is named and
  issued a Code at the end. Note any parts that compose unusually.
- **Discovery:** the consolidated statement of what the Ally searches for on the
  network (so adopters get discovered specifics, not data entry).
- **Slots:** gather every fill-in slot from all phases into one short list — this
  is what the adopt flow presents to the person.
- **Composition:** note if the resulting Actor is meant to nest under a parent
  Duna or join an Alliance, and how discovery helps it find its siblings.
