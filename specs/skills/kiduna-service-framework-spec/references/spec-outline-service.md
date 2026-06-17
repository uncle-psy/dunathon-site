# Output spec — section-by-section prompts (service vertical)

The deliverable follows this structure. `assets/service-spec-template.md` is the
skeleton; this explains what each section answers. Keep prose concrete and
technology-agnostic. Service and wellbeing lead; commerce stays proportionate.

## Front matter
Title (`<Org> — Service Framework Specification`), subtitle (the domains and Actor
type), author, date, status. Used for the title page.

## 1. Identity
Name, version, author, Actor type (DUNA/Alliance), the service domains covered,
and one paragraph on what the resulting Ally does for members.

## 2. Summary
What the framework is for, who adopts it, the shape of the Ally, the headline
programs.

## 3. Mission & population
Who is served and the specific stressors (PTSD, suicide risk, substance use,
transition); the operating standard ("if it doesn't serve the person who served,
it doesn't deploy"); the organization's values as interpretive lens.

## 4. Identity & verification
The credential, the domains covered, the verification tiers and Verifying
Authorities, no-PII-on-chain and selective disclosure, multi-party issuance.

## 5. Inform / Wisdom
Starter knowledge, what is discovered, presentation, archival standards. Mark
fixed/fill-in/discovered. Acceptance criteria.

## 6. Instruct / Stance
The draft system prompt with the service disposition and wellbeing guardrails
baked in; marked slots.

## 7. Empower / Abilities
Required/optional Abilities with reasons and plain-language scope; sensitive ones
marked for protected handling.

## 8. Enact / Programs
One subsection per program from the suite. Prompt (one), Sequence, Triggers,
Database Connections, Polling/Web Hook, Tools, human-approval points, long-running
behavior. Acceptance criteria covering cardinality and the approval rule.

## 9. Align / Sentinel
HEARTS defaults (conservative) and ranges; the un-amendable protections; what the
Sentinel watches for and when it escalates.

## 10. Wellbeing & Safe Harbor (its own section)
The crisis architecture from wellbeing-and-safety.md: one-tap human crisis lines
per domain, screeners that prompt connection, peer support, QPR, clinical
ownership, the no-autonomy rule, the un-amendable protections. Be accurate and
plain; do not dramatize.

## 11. Agent-interaction model
Every agent (Ally, Avatar, Performer, Envoy/Elector, Sentinel), what each does,
scope via Code, context isolation between Avatars, human-in-the-loop on
consequential actions, the audit trail, legal attributability. The concrete
workflows. Decision-Market governance with signed rationales, asymmetric
thresholds for protected matters, HEARTS process scoring.

## 12. Training / Community / History & Memorials / Culture
Concrete features for each: training that can draw on the org's own history;
community as the protective factor; standards-compliant archives, oral history,
immersive history, family-controlled memorials with anchored provenance; cultural
expression through Stance and Wisdom.

## 13. Recognition & commerce (proportionate)
The closed (cash-closed) recognition economy; the atomic money split and lineage;
the verified-ownership storefront. Framed as substrate serving the mission.

## 14. What the system must provide
A consolidated, numbered requirements list across identity, wellbeing, agents,
service capability, and the economic substrate. This section is required — the
service vertical cares about robustness and about a clear capability checklist.

## 15. Worked example
Walk one real organization through the phases (anchor on a flagship VSO where
possible), then a brief cross-domain contrast (law enforcement / fire / EMS).

## 16. Acceptance criteria & open questions
Per-phase acceptance criteria pulled together; open questions and source notes
(naming, dates, technical substrate, illustrative vs real examples, canonical
HEARTS).

## Appendices
Glossary; the service-org framework manifest; the credential domain family; the
crisis-resource reference (verify current before including).

## Style
Plain, specific, varied sentence length. No manifesto cadence, no "not X, but Y",
no closing flourish. Especially careful and accurate in the wellbeing sections.
The converter renders Georgia/black — don't add color or styling beyond headings,
tables, lists, bold, and links.
