---
title: Proof-checking software accepts a Claude-assisted proof of the Riemann
  hypothesis, but mathematicians can't yet follow it
description: Anthropic mathematician Levent Alpöge released a 17-million-line
  Lean proof of the Riemann hypothesis, found with Claude. Lean's maintainers
  and several independent checkers accept it, but there is no human-readable
  proof yet and it has not been refereed.
pubDate: 2026-11-24
tags:
  - mathematics
  - riemann hypothesis
  - formal verification
  - lean
  - claude
  - preprint
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: "On 20 November 2026 Levent Alpöge, a number theorist working at
  Anthropic, posted a four-page note saying that, working with Anthropic's
  Claude, he had found a proof of the Riemann hypothesis and of the generalized
  Riemann hypothesis for Dirichlet L-functions, released only as a formal proof
  in the Lean proof assistant: about 17 million lines in 175,187 files. A day
  later the Lean FRO and the Mathlib Initiative certified that the Lean
  statement and proof are correct, and independent checks at MIT, Waterloo and
  elsewhere report that the code compiles, uses only Lean's standard axioms and
  is accepted by several independently written proof checkers. The catch is that
  no human-readable proof exists yet, the work has not been refereed,
  mathematicians say it could take years to understand, and one independent
  audit's statement-matching run was stopped for cost without a verdict."
sources:
  - title: "Remark: announcement of a proof of the Riemann Hypothesis found with
      Claude (Levent Alpöge)"
    url: https://alpo.ge/remark.pdf
  - title: Lean verification of the Riemann Hypothesis (Lean FRO and Mathlib
      Initiative)
    url: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
  - title: "RH Lean proof: verification files (Andrew Sutherland, MIT)"
    url: https://math.mit.edu/~drew/grh/
  - title: Alpöge/Claude proof of the Generalized Riemann Hypothesis (Michael
      Rubinstein, University of Waterloo)
    url: https://math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/
  - title: Checking Alpöge's Lean release on RH and Dirichlet GRH (Carlos Toledo)
    url: https://carlostoledo.co/reports/alpoge-grh.html
  - title: AI may have solved math's greatest mystery. Can humans understand the
      answer? (Science)
    url: https://www.science.org/content/article/ai-may-have-solved-math-s-greatest-mystery-can-humans-understand-answer
  - title: The AI Riemann hypothesis proof is true, independent mathematicians
      confirm (Scientific American)
    url: https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/
  - title: Mathematicians astounded by AI and human-written proofs of iconic Riemann
      hypothesis (Nature)
    url: https://www.nature.com/articles/d41586-026-03812-7
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Proof-checking software accepts a Claude-assisted proof of the Riemann hypothesis, but mathematicians can't yet follow it

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

A mathematician at the AI company Anthropic says he and its chatbot Claude have proved the Riemann hypothesis, a famous 1859 guess about how prime numbers are spread out [S1][S6]. Instead of a normal paper, he released the proof as about 17 million lines of code that a computer program can check step by step [S1][S3]. The people who run that checking software, and several outside mathematicians who ran their own checks, say the computer accepts it [S2][S3][S4]. If it holds, it would settle one of the most important open problems in mathematics [S6][S8]. The biggest catch: no human has read or understood the argument yet, it has not been through normal peer review, and experts say making sense of it could take years [S5][S6].

## Key Findings

- **The claim.** On 20 November 2026 Levent Alpöge, a number theorist at Anthropic, posted a four-page note: "I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis." He says the method also proves the generalized Riemann hypothesis (GRH) for Dirichlet L-functions, a wider family of related functions [S1][S6].
- **What was released.** Not a written paper but a formal proof in the Lean proof assistant: 175,187 files, about 17 million lines of code [S1][S3][S4]. Alpöge writes that he "decided to only present Lean" and plans to write the argument up properly later [S1].
- **Certification by Lean's maintainers.** On 21 November the Lean FRO and the Mathlib Initiative jointly wrote: "We hereby certify that both the statement and the proof of the Riemann Hypothesis are correct" [S2][S7].
- **Independent machine checks.** Andrew Sutherland at MIT reports that all 175,187 modules compile, the five headline theorems depend only on Lean's three standard axioms, and the exported proof is accepted by Lean's own kernel and by independently written checkers (nanoda, con-leche, con-ron and lean4lean); the Comparator tool reported "Your solution is okay!" [S3]. Michael Rubinstein at the University of Waterloo reports the same compile, axiom, kernel and nanoda checks all passing on 21 November [S4]. Sutherland told Scientific American: "Honestly the chance that anything is fishy here is approximately zero" [S7].
- **Not every check finished.** One independent audit by Carlos Toledo says its own Comparator run printed nothing after 53 hours and was stopped for cost on 24 November, with no verdict either way; its other tools (Lean's replay, nanoda, con-leche) accepted the proof [S5]. A second Comparator run on Sutherland's page was still in progress at its last update [S3].
- **Scope.** The checked statements cover the Riemann hypothesis and GRH for Dirichlet L-functions only; other L-functions are not among them [S3].
- **No human-readable proof yet.** Mathematicians expect it could be years before the proof is digestible by humans, Science reports [S6]. Rubinstein's 265-page working guide, written with AI help, is still a work in progress that reduces the key step to 13 hypotheses it does not yet prove [S4].

## How It Works

The Riemann hypothesis is about the Riemann zeta function, whose zeros encode how the primes are distributed. It says that all the "non-trivial" zeros lie on one vertical line in the complex plane, where the real part is exactly 1/2 [S5][S8]. If true, the primes are spread as evenly as they possibly could be [S8].

Lean is a programming language for proofs. A small core program, the kernel, checks every logical step, so a proof that compiles is normally taken as correct, provided the theorem it proves really says what people think it says [S7]. That is why checkers asked two separate questions. First, does the code prove the right statement? The headline theorem uses the definition of the Riemann hypothesis that was already in Mathlib, Lean's shared maths library, and tools compared it against a separately written copy of that statement [S2][S3][S5]. As an extra test of meaning, Sutherland's page reports combining the proof with an independent formalization of Robin's criterion, which yields Robin's inequality, a statement about sums of divisors with no mention of zeta zeros, as a proved theorem [S3]. Second, is the proof valid? Several checkers, written by different people in different languages, re-checked the exported proof, so a bug in any single checker is unlikely to explain the result [S2][S3].

On the mathematics, Alpöge writes that the argument descends from Stepanov's method for the Riemann hypothesis over finite fields, adapted to the whole numbers using "chaining theta lifts", and that Claude "far outpaced me near the finish line" [S1]. His note includes a timeline of key steps starting on 6 October 2026 [S1].

## Implications

- **Impact (high).** If accepted, the result would settle one of the Clay Millennium Prize problems and would immediately confirm many results that were proved assuming the Riemann hypothesis [S6][S8]. James Maynard of Oxford told Nature: "If this fully checks out, it is clearly a historic milestone in mathematics" [S8].
- **Confidence (medium).** The formal proof has passed many independent machine checks and has been certified by Lean's maintainers [S2][S3][S4]. But the mathematics has not been refereed, no readable proof exists, and at least one independent statement-matching run ended without a verdict [S5][S6].
- **AI in mathematics.** Alpöge credits Claude with key steps, but it was not working alone: he describes guiding it to the right setting [S1]. Science reports that mathematicians say the effort likely cost millions of dollars in computing, and Maksym Radziwill of NYU warned that results with no digestible content shift the work of understanding onto people who won't get credit [S6].
- **Criticism of the rollout.** Andrew Granville of the University of Montreal called the announcement document "garbled" and linked its timing to Anthropic's share price after its IPO; Alpöge wrote that this cynical view is false [S1][S8].
- **A rival claim.** The same day, Stanford's Ravi Vakil posted an unfinished, all-human 940-page draft proof of GRH by Alessandro Masullo; its correctness is a separate, open question [S6][S8].

## Open Questions

- Will mathematicians be able to extract a readable proof, and will it be shorter, as Alpöge expects [S1][S4][S6]?
- Will the remaining statement-matching runs finish and agree [S3][S5]?
- Will the work go through journal review, and how will prize committees treat a proof released only as code [S5][S8]?
- Does the method extend to other L-functions, as Alpöge suggests, beyond the cases checked so far [S1][S3]?
- How much computing did it take, and who can afford to repeat or study it [S6]?

## References

1. [S1] Alpöge, L. "Remark" (four-page announcement of a proof of the Riemann Hypothesis found with Claude, with links to the Lean archive; 20 November 2026). https://alpo.ge/remark.pdf
2. [S2] Lean FRO and Mathlib Initiative. "Lean verification of the Riemann Hypothesis." Lean community blog (21 November 2026). https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
3. [S3] Sutherland, A. "RH Lean proof: verification files." MIT Department of Mathematics (updated 24 November 2026). https://math.mit.edu/~drew/grh/
4. [S4] Rubinstein, M. "Alpöge/Claude proof of the Generalized Riemann Hypothesis." University of Waterloo (22 November 2026). https://math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/
5. [S5] Toledo, C. "Checking Alpöge's Lean release on RH and Dirichlet GRH." Independent audit report (24 November 2026). https://carlostoledo.co/reports/alpoge-grh.html
6. [S6] Savitsky, Z. "AI may have solved math's greatest mystery. Can humans understand the answer?" Science (20 November 2026). https://www.science.org/content/article/ai-may-have-solved-math-s-greatest-mystery-can-humans-understand-answer
7. [S7] Moskowitz, C. "The AI Riemann hypothesis proof is true, independent mathematicians confirm." Scientific American (20 November 2026, updated 21 November). https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/
8. [S8] Nature. "Mathematicians astounded by AI and human-written proofs of iconic Riemann hypothesis." Nature news (20 November 2026, updated 23 November). doi:10.1038/d41586-026-03812-7. https://www.nature.com/articles/d41586-026-03812-7
