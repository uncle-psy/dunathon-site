---
name: kiduna-framework-spec
description: >-
  Specify a single Kiduna framework in full detail and produce an engineer-ready
  specification as BOTH a Word document (.docx) and Markdown. Use whenever the
  user wants to design, spec, define, draft, or create a Kiduna framework — e.g.
  "spec the Travel framework", "create a DUNA framework for veterans services",
  "define a Kiduna Offer framework", "let's build out the gaming framework", or
  "write the spec for a Member Ally". Also use for any request to fully describe
  one Kiduna Ally across the five phases (Inform, Instruct, Empower, Enact,
  Align) for a DUNA, Alliance, Member/User, Sponsor, or Offer. Err toward using
  this skill whenever "Kiduna" and "framework" appear together, or when the user
  is defining an Ally, its Wisdom, Stance, Abilities, Programs, or Sentinel.
  This skill produces a SPECIFICATION for engineers, not code.
---

# Kiduna framework specification

This skill walks an author through specifying one Kiduna framework in full, then
produces a polished, engineer-ready specification in two forms: a Word document
(`.docx`, in the Kiduna house style) and a structured Markdown file. The output
is a design document an engineering team can build from. It is not an
implementation, and it should not prescribe specific technologies.

A Kiduna framework is a complete, pre-formed **Ally** for a kind of work,
assembled across five phases, that a person can adopt and then tailor. Your job
when running this skill is to capture everything needed to build that Ally for
one specific domain and Actor, and to write it down clearly.

If you need the master concept reference (what frameworks are and how the system
works overall), it lives alongside this skill's output as "Kiduna Frameworks —
Product Specification". This skill specifies one framework; that document
specifies the system.

## Before you start: load the canonical definitions

Read these bundled references so you use the exact Kiduna vocabulary and don't
reinvent terms:

- `references/primitives.md` — Actors, user subtypes, the four agent types,
  supporting objects. The shared language.
- `references/five-phases.md` — the field-by-field checklist for each phase,
  including the Program cardinality rules. This is your interview guide.
- `references/spec-outline.md` — the exact section structure of the output
  document, with the question each section answers.

The fill-in skeleton you will complete is `assets/spec-template.md`.

## Workflow

### 1. Establish identity

Pin down three things first, because everything else depends on them:

- **Framework name** and the **domain** it serves (Travel, Service, Gaming, …).
- The **Actor** the resulting Ally represents: a DUNA, an Alliance, a
  Member/User, a Sponsor, or an Offer. The Actor type changes what the Ally can
  contain (only a DUNA can have a Coin and a Market, for example).
- A one-paragraph description of **what the resulting Ally does** for the people
  who adopt it.

If the user hasn't said, ask. Keep it to the few questions that actually change
the spec; infer sensible defaults for the rest and state them.

### 2. Interview across the five phases

Walk the five phases in order, using `references/five-phases.md` as the
checklist. For each phase, capture what the framework ships and mark each element
as **fixed**, **fill-in**, or **discovered**:

1. **Inform → Wisdom.** What starter knowledge ships? What does the Ally search
   for on the network instead of storing? How should it present knowledge
   (cards, grids, diagrams, sequences with links)?
2. **Instruct → Stance.** Draft the system prompt for this domain, with clearly
   marked fill-in slots (business name, tone, commitments).
3. **Empower → Abilities.** Which accounts/tools are required, which optional,
   and why each is needed (Gmail, Docs/Drive, Calendar, Meet, Bluesky, Solana
   external wallet, Telegram).
4. **Enact → Programs.** Specify each Program. Honor the cardinality rules:
   exactly **one Prompt** per Program; **zero or more** Triggers, Database
   Connections, Polling/Web Hook listeners, and Tools. Lay out the Sequence and
   mark the **human-approval points** before consequential actions (paying,
   signing, sending, booking).
5. **Align → Sentinel.** Give default HEARTS dial settings appropriate to the
   domain and their adjustable ranges. Treat HEARTS as a named set of bounded
   dials; if the canonical dial set is unknown, say so and propose sensible
   defaults rather than inventing definitive meanings.

Then capture the **discovery** configuration (what the Ally finds on the
network) and the consolidated **slot list** (every fill-in across phases), so
the adopt experience can be short.

### 3. Write the specification (Markdown)

Copy `assets/spec-template.md` to a working file named
`<framework-name>-framework-spec.md` and fill every section. Follow
`references/spec-outline.md` for what each section must answer.

Write the way a careful engineer writes a spec: concrete, technology-agnostic,
plain. Describe experience and functionality, not implementation. Avoid
manifesto cadence and avoid "not X, but Y" constructions. Keep sentences varied
and unforced. Include acceptance criteria for each phase so engineering knows
when it is done.

Minimize fill-in. A good framework ships most content as fixed or discovered, so
the adopter supplies very little. Say explicitly what is discovered from the
network versus entered by hand.

### 4. Render the Word document

The Markdown file is the source of truth. Render it to a Word document in the
Kiduna house style (Georgia font, black type, US Letter, auto table of
contents, page numbers) with the bundled converter.

The converter needs the `docx` npm package. The most reliable way to run it:

```bash
# from a writable working directory:
npm install docx                 # once per environment
cp "<this-skill>/scripts/build_docx.js" .
node build_docx.js "<framework-name>-framework-spec.md" "<framework-name>-framework-spec.docx"
```

Copying the script next to where `docx` is installed guarantees Node can resolve
the dependency. The converter reads the front matter at the top of the Markdown
for the title page, so keep that block intact.

If the host environment already provides a Word-document capability you prefer,
you may use it instead, but match the house style: Georgia, black type only,
clear headings, a table of contents, and page numbers.

### 5. Save and present both deliverables

Save both files (`.md` and `.docx`) to the user's Kiduna Frameworks folder if one
is connected, otherwise to the outputs directory. Then present both files to the
user. Keep the closing summary short; the documents speak for themselves.

## Output: what a finished framework spec contains

Every framework spec, regardless of domain, has these sections (see
`references/spec-outline.md` for the prompts behind each):

```
1. Identity            name, version, author, Actor type, domain, what it does
2. Summary             one or two paragraphs an engineer can orient from
3. Inform / Wisdom     starter knowledge, presentation, fixed/fill-in/discovered
4. Instruct / Stance   the draft system prompt with marked slots
5. Empower / Abilities required and optional connections, with reasons
6. Enact / Programs    each Program: Prompt, Sequence, Triggers, Data, Polling/
                       Web Hook, Tools, approval points  (one Prompt each)
7. Align / Sentinel    default HEARTS dials and ranges
8. Assembly            Actor binding, Code/handle, how the parts compose
9. Discovery           what the Ally finds on the network
10. Slots              the consolidated fill-in list for the adopt flow
11. Acceptance criteria per phase, plus open questions
```

## Principles to hold onto

- **This is a specification, not code.** Describe user experience and
  functionality. Leave technology choices to engineering.
- **Use the canonical vocabulary** from `references/primitives.md`. Don't coin
  new terms for things that already have names.
- **Honor the cardinality rules** for Programs: one Prompt; many Triggers, Data
  Connections, Polling/Web Hook listeners, and Tools.
- **Safety is first-class.** Every Ally has a Sentinel; consequential actions
  pause for human approval. Build that into the Programs you spec.
- **Mark fixed / fill-in / discovered** for everything, and minimize fill-in.
- **Don't fabricate.** If something (like the exact HEARTS dial set) is not
  established, say so and flag it as an open question rather than inventing it.
