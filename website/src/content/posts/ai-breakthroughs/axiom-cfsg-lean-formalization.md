---
title: AI agents wrote a 43-million-line Lean proof of the classification of
  finite simple groups; outside checks are still pending
description: Axiom Math has released a Lean formalization that it says is the
  first complete computer-checked proof of the classification of finite simple
  groups, written mostly by swarms of AI agents in 24 days. The code is public,
  but no one outside the company has yet reported rebuilding it.
pubDate: 2026-11-20
tags:
  - formal verification
  - Lean
  - AI for mathematics
  - group theory
  - AI agents
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 26 and 27 October 2026 the startup Axiom Math released a Lean 4
  formalization of the Classification of Finite Simple Groups (CFSG), the
  theorem whose human proof runs to roughly 15,000 pages. Axiom says engineers
  and mathematicians directed swarms of AI agents for 24 days, producing about
  43.1 million lines of Lean that its README describes as sorry-free and
  dependent only on three standard axioms. While formalizing, the team reports
  finding counterexamples to a step in one published route to the Unbalanced
  Group Theorem and posted a preprint with an alternative argument. IEEE
  Spectrum covered the work on 18 November with comment from an outside group
  theorist. Independent write-ups stress that Lean checks the deductions, not
  whether the formal statement means CFSG, and that as of late October no
  outside party had reported a complete rebuild; TKDB found no such report as of
  20 November.
sources:
  - title: Formalizing the Enormous Theorem (Axiom Math)
    url: https://axiommath.ai/research/the-enormous-theorem-formalized/
  - title: "AxiomMath/CFSG: A Lean formalization of the Classification of Finite
      Simple Groups (GitHub)"
    url: https://github.com/AxiomMath/CFSG
  - title: The Unbalanced Group Theorem, hexagon:2610.00575v1 (Hexagon preprint)
    url: https://hexagonmath.org/2610.00575?version=1
  - title: Startup Makes Headway Towards Formalizing All of Math With AI (IEEE
      Spectrum)
    url: https://spectrum.ieee.org/enormous-theorem-ai
  - title: "Axiom's Lean formalization of the classification of finite simple
      groups: what it checks (Papex)"
    url: https://papex.org/blog/axiom-cfsg-lean-formalization
  - title: "CFSG Preliminary Audit: Source Preflight and Rebuild Status (enuminous,
      GitHub)"
    url: https://github.com/enuminous/papers/blob/main/CFSG-Preliminary-Audit-Source-Preflight-and-Rebuild-Status-2026-10-30.md
  - title: Validating a Lean Proof (Lean Language Reference)
    url: https://lean-lang.org/doc/reference/latest/ValidatingProofs/
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# AI agents wrote a 43-million-line Lean proof of the classification of finite simple groups; outside checks are still pending

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

A company called Axiom Math used teams of AI programs to turn one of the longest proofs in mathematics into computer code that a checking program can verify line by line [S1][S2]. The theorem lists every basic "building block" of symmetry, and its human proof fills about 15,000 pages written by around 100 mathematicians [S1]. Axiom says the job took 24 days, and along the way it found a mistake in one published step and wrote a new argument to replace it [S1][S3]. If the result holds up, it shows AI can help check huge proofs that no single person can read in full [S4]. The big catch: so far only Axiom has reported running the check, and people still need to confirm that the code states the theorem the way mathematicians mean it [S5][S6].

## Key Findings

- **What was released.** Axiom's public repository contains a Lean 4 proof that its README calls "sorry-free", built on the Mathlib library and using only the standard axioms `Classical.choice`, `propext` and `Quot.sound`, with no `native_decide` [S2]. The headline statement is taken from the separate TauCeti project rather than written by Axiom: every finite simple group is isomorphic to a group on an explicit list [S2][S5].
- **How it was made, by Axiom's account.** Starting on 1 October 2026, engineers and mathematicians directed "swarms of dozens of AI agents" that worked through 108 milestones and about 380 smaller tasks, producing roughly 43.1 million lines of Lean in 24 days [S1]. Axiom says it reused about 1.2 million lines from the separate Qiuzhen-CFSG project [S1]. The AI models used are not named, and the public repository holds a single commit, so the 24-day process itself cannot be inspected [S5].
- **A gap found in the literature.** Axiom reports that formalization found counterexamples to a closure assertion in John Walter's 1986 route to the Unbalanced Group Theorem, a key step in the classification [S3]. Its preprint says this affects that particular argument, not the theorem itself, and gives an alternative proof of the needed case (its Theorem 2.3) using Ronald Solomon's 1976 theory of maximal 2-components [S3][S5]. That new argument has not been peer reviewed.
- **Other corrections.** Axiom's post counts 34 "noteworthy deviations" from the published record, mostly minor issues such as typos, table errors or dropped hypotheses; its separate errata document has 57 pages and 96 entries [S1][S5]. These counts differ between Axiom's documents [S5].
- **No outside rebuild reported yet.** A Papex analysis found no public report of anyone outside Axiom re-running the full check as of 30 October, and quotes Axiom's CEO saying "Not yet" when asked [S5]. An independent audit fork passed 14 of 14 source-preflight checks but explicitly did not complete a full build, axiom check or statement review [S6]. TKDB found no report of a completed outside rebuild as of 20 November 2026.
- **Outside reaction.** St Andrews group theorist Colva Roney-Dougal, not involved, told IEEE Spectrum she had thought formalizing CFSG would need unattainable amounts of computing and was "really, really surprised", while warning that a new generation may have "missed a chance to gain knowledge from the doing of it" [S4]. Timothy Gowers called it "great news, even if the formalization itself is horrible", adding that he did not know whether it actually was [S5].

## How It Works

A group is a set of symmetries that can be combined and undone, like the 24 rotations that leave a cube looking the same [S1]. Finite groups break down into pieces that cannot be broken further, much as whole numbers break into primes; those pieces are the finite simple groups [S1][S5]. The classification says each one is cyclic of prime order, an alternating group, a group of Lie type, or one of 26 "sporadic" groups, the largest being the Monster [S3][S1]. The proof was assembled from hundreds of papers over half a century, and no single person has read all of it [S4][S5].

Lean is a programming language in which definitions, statements and proofs are written precisely enough for a small trusted core, the kernel, to check every inference [S1][S7]. Axiom split the classification into milestones, had lead agents break hard arguments into pieces and other agents search for existing results or write proofs, and used human mathematicians when the agents hit real mathematical obstructions [S1][S5]. Expensive finite calculations were moved into separately checkable certificate files [S1][S5].

A kernel check establishes that the final theorem follows from the stated axioms. It does not establish that the formal statement and its definitions mean what group theorists mean by CFSG; the Lean reference itself separates "does the theorem have a valid proof" from "what does the theorem statement mean" [S7]. Axiom says humans inspect the statement while Lean checks the deductions, and its repository includes a comparator setup that lets others check that the proof matches the separately written statement [S1][S5].

## Implications

- **Impact (high, if confirmed).** A machine-checked CFSG would remove long-standing doubt about whether a proof too large for any one reader is correct, and would give later formal work in group theory a base to build on [S4][S5]. It is also one of the largest demonstrations so far of AI agents producing checkable mathematics at scale; Axiom says it also formalized the 7,500-page Stacks project days later [S4].
- **Confidence (medium).** The code, the statement's source and the build instructions are public, and Lean's kernel is a strong check [S2][S5][S7]. But the review status is self-assessed by Axiom, the only full build reported is Axiom's own, Axiom says it needed not-yet-released changes to Lean's build tool to get the build under 24 hours, and the Unbalanced Group Theorem argument is an unreviewed preprint [S2][S5][S6].
- **For mathematicians.** Roney-Dougal sees the result as critical groundwork for formalizing modern group theory, but worries that few people can extract understanding from machine-written proofs [S4].

## Open Questions

- Will an independent group complete a full rebuild and kernel replay (for example with Lean's `leanchecker` or comparator) and publish the result [S6][S7]?
- Do the TauCeti statement and its definitions faithfully capture the classification? This needs expert human review [S5][S7].
- Will group theorists accept Axiom's 96-entry errata and its new route through the Unbalanced Group Theorem, and will the preprint pass peer review [S3][S5]?
- How much of the work was done by AI versus people, and with which models? Axiom has not said [S5].
- Can a 43-million-line machine-written proof be made readable enough to teach anything, or only to certify [S4]?

## References

1. [S1] Axiom Math. "Formalizing the Enormous Theorem." Axiom research blog (26 October 2026). https://axiommath.ai/research/the-enormous-theorem-formalized/
2. [S2] Axiom Math. "AxiomMath/CFSG: A Lean formalization of the Classification of Finite Simple Groups." GitHub repository and README (27 October 2026). https://github.com/AxiomMath/CFSG
3. [S3] Axiom Math (contributed by Colin Defant and Ken Ono). "The Unbalanced Group Theorem." Hexagon preprint hexagon:2610.00575v1 (27 October 2026), not peer reviewed. https://hexagonmath.org/2610.00575?version=1
4. [S4] Skuse, B. "Startup Makes Headway Towards Formalizing All of Math With AI." IEEE Spectrum (18 November 2026). https://spectrum.ieee.org/enormous-theorem-ai
5. [S5] "Axiom's Lean formalization of the classification of finite simple groups: what it checks." Papex (sources checked 30 October 2026). https://papex.org/blog/axiom-cfsg-lean-formalization
6. [S6] enuminous. "CFSG Preliminary Audit: Source Preflight and Rebuild Status" (30 October 2026). https://github.com/enuminous/papers/blob/main/CFSG-Preliminary-Audit-Source-Preflight-and-Rebuild-Status-2026-10-30.md
7. [S7] Lean FRO. "Validating a Lean Proof." Lean Language Reference. https://lean-lang.org/doc/reference/latest/ValidatingProofs/
