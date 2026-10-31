---
title: An OpenAI model's proof narrows where the Riemann zeta zeros can hide
description: An OpenAI preprint claims no zeta zeros lie to the right of real
  part 7/8, a 'quasi-Riemann hypothesis'. The Lean proof has been re-checked by
  outsiders, but the mathematics has not yet been peer reviewed.
pubDate: 2026-10-30
category: Mathematics
tags:
  - riemann hypothesis
  - number theory
  - ai for math
  - lean
  - formal verification
  - openai
  - preprint
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 6 October 2026 OpenAI released a 199-page preprint, produced with
  an unnamed internal model, claiming that the Riemann zeta function and two
  related families of L-functions have no zeros with real part above 7/8. A Lean
  formalization of the zeta statement passes machine checks that two outside
  parties re-ran. A shorter, human-edited companion paper proves a weaker 11/12
  bound and is not formally verified. Experts quoted by Quanta, Science and
  Georgia Tech mostly think the result is right, but it has not been peer
  reviewed, and it does not prove the full Riemann hypothesis.
sources:
  - title: "The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane ℜs > 7/8 (OpenAI
      preprint)"
    url: https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf
  - title: The Quasi-Riemann Hypothesis (OpenAI preprint, 11/12 version)
    url: https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper.pdf
  - title: openai/math repository
    url: https://github.com/openai/math
  - title: Independent re-run of the Lean check (davegoldblatt)
    url: https://github.com/davegoldblatt/openai-zeta-proof-check
  - title: Independent verification of the 7/8 preprint (tomoto0)
    url: https://github.com/tomoto0/quasi-riemann-hypothesis-7-8-verification
  - title: AI Proved the Quasi-Riemann Hypothesis. What Happens Now? (Quanta Magazine)
    url: https://www.quantamagazine.org/ai-proved-the-quasi-riemann-hypothesis-what-happens-now-20261019/
  - title: AI edges closer to solving the Riemann hypothesis (Science)
    url: https://www.science.org/content/article/ai-edges-closer-solving-riemann-hypothesis-one-math-s-hardest-problems
  - title: Dunn's Research Contributes to OpenAI's Proof of the Quasi-Riemann
      Hypothesis (Georgia Tech)
    url: https://math.gatech.edu/news/dunns-research-contributes-openais-proof-quasi-riemann-hypothesis
  - title: Which of the results released by OpenAI went against the conventional
      mathematical wisdom? (MathOverflow)
    url: https://mathoverflow.net/questions/515849/which-of-the-results-released-by-openai-went-against-the-conventional-mathematic
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# An OpenAI model's proof narrows where the Riemann zeta zeros can hide

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

*By TKDB Newsroom (AI-assisted).*

## Key Findings

- An OpenAI preprint dated 30 September 2026 claims that the Riemann zeta function has no zeros with real part greater than 7/8. It makes the same claim for every Dirichlet L-function and every finite-order Hecke L-function over the field Q(√−3) [S1]. Mathematicians call a fixed-width zero-free strip like this a "quasi-Riemann hypothesis" [S6].
- The zeta part of that statement has been written out in the Lean proof assistant. OpenAI's comparator check accepts it using only Lean's standard axioms [S3]. Two outside parties re-ran the check on their own machines and got the same acceptance [S4][S5]. Those re-runs confirm that the formal proof compiles. They do not count as an independent proof of the mathematics.
- A second, 49-page preprint dated 5 October gives a shorter argument for a weaker bound, real part greater than 11/12 [S2]. OpenAI says it was the one write-up in the release edited by humans for readability. It has not been formally verified [S3][S7].
- The specialists who have studied the proof "largely agree that the result is correct," according to Quanta. Their write-ups are still circulating privately [S6]. Peter Sarnak of Princeton says he won't be satisfied that it's "a Theorem" until humans check and understand all the details [S6]. Science reports that the solution "still needs to be confirmed and deciphered" [S7].
- This is not a proof of the Riemann hypothesis itself, which puts every nontrivial zero on the line with real part 1/2. Number theorists doubt this method can get there [S6][S8].
- **Impact:** high. If correct, quasi-RH implies "the vast majority of consequences of RH," in Maksym Radziwiłł's words [S6]. **Confidence:** medium. The 7/8 statement has a machine-checked proof, but the mathematics has had no peer review, the authors and model are undisclosed, and the downstream consequences are not formalized. These are separate judgments.

## How It Works

The zeta function's zeros encode how prime numbers are spread out. Its nontrivial zeros are known to lie in a "critical strip" with real part between 0 and 1. The Riemann hypothesis says they all sit on the middle line, at 1/2 [S6]. The zero-free regions known until now get thinner as you go up the strip. A fixed-width strip next to the right edge, such as everything above 7/8, gives much tighter control over the error when counting primes [S6][S2].

The proof does not treat zeta on its own. It studies a whole family of related functions: Hecke L-functions over Q(√−3), the number system built from the cube roots of unity [S1]. That follows a long-standing suggestion of Sarnak's to see zeta as one member of a larger family [S6]. The key tools are "metaplectic forms" and a 2021 formula of Alexander Dunn (Georgia Tech) and Radziwiłł (NYU). Dunn has studied these objects for five years [S6][S8]. "The proof is a surprising synthesis of well-known ideas," Dunn told Quanta [S6]. James Maynard of Oxford told Science that it puts "together some ideas that were not terribly mainstream in an exceptionally clever way" [S7].

The papers say the result also rules out "Landau–Siegel zeros." These are hypothetical zeros very close to 1 that have vexed mathematicians for nearly a century [S7]. They also claim a prime number theorem for arithmetic progressions with error at most about x^(11/12) log x, plus further consequences such as Vinogradov's conjecture on the least quadratic nonresidue [S2]. OpenAI's own formalization notes say Lean covers only the 7/8 bound and a weaker, uniform Siegel-type region with an unspecified constant. The later applications are not formally checked [S3].

The formal check works like this. A small "challenge" file states the theorem using the standard Mathlib definition of zeta. A comparator tool then confirms that the roughly 486,000-line formal proof proves exactly that statement, using no extra axioms [S3][S4]. One outside re-run also checked the proof with a second, independent Lean kernel [S4]. The other rebuilt all 2,924 modules with zero errors [S5].

## Implications

If the result holds, it is a large step in analytic number theory. Maynard called it "obviously the best headline result for the past 100 years in the field" [S7]. Jared Duker Lichtman of Stanford called it "the most significant AI-for-math achievement so far, by quite a margin" [S6]. Those are expert opinions, not measurements. Quanta reports that scores of results in number theory, geometry and theoretical computer science would be settled at a stroke if the proofs hold [S6].

The result also shifts the debate on AI in mathematics. It came out of a 6 October release of 721 manuscripts in 373 result families, all from an unnamed internal OpenAI model, with about 42% of the headline results formalized [S3]. Dunn and Radziwiłł's tools turned out to be strong enough for the job, and mathematicians in their area had not expected that [S6]. Still, Will Sawin of Princeton placed quasi-RH among results that fit long-standing probabilistic heuristics [S9]. On that reading, the surprise lies in the proof, not in the truth of the statement.

## Open Questions

- **Peer review.** Neither paper has been peer reviewed. Expert write-ups exist but are unpublished [S6]. Until they appear, "experts agree" rests on what journalists report.
- **Writing quality.** The sources disagree. Radziwiłł said both papers "are horribly written (in a way that would lead to immediate rejection at any mathematical journal)" [S6]. Maynard called the edited paper "remarkably well-written" [S7].
- **What exactly is machine-checked.** Only the 7/8 zeta statement and a weaker Siegel-type region are formalized [S3]. The 11/12 paper and the stronger consequences are not. The two outside re-runs come from individuals, not institutions. One was carried out by an AI coding agent at its owner's request [S4]. Both rely on OpenAI's build setup and assume the repository is not adversarial [S4][S5].
- **Release track record.** Three unrelated papers from the same release were withdrawn a day later over a sign error, and 14 were revised [S3]. OpenAI itself warns that "some of the unformalized results could have issues" [S3].
- **Who did what.** OpenAI has not named the model or the people who edited the 11/12 paper [S7]. It says the zeta work was an exception to the fixed procedure used for most of the release, without explaining how [S3]. That leaves open how much of the result came from the model.
- **Reaching 1/2.** "We will still feel as far off from the full Riemann hypothesis as we were before," Sawin told Quanta [S6]. Dunn says it is "too early to say" [S8].
- Source counts differ slightly: Quanta reports 377 results [S6], while the repository lists 373 families [S3]. We use the repository's figures.

## References

1. [S1] OpenAI. "The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane ℜs > 7/8." Preprint, 30 Sep 2026. https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf
2. [S2] OpenAI. "The Quasi-Riemann Hypothesis." Preprint, 5 Oct 2026. https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper.pdf
3. [S3] OpenAI. openai/math repository: README, HISTORY and Lean documentation, released 6 Oct 2026. https://github.com/openai/math
4. [S4] davegoldblatt. "Independent re-run of the Lean check for OpenAI's proof that ζ(s) ≠ 0 for ℜ(s) > 7/8." GitHub, 7 Oct 2026. https://github.com/davegoldblatt/openai-zeta-proof-check
5. [S5] tomoto0. "Independent verification of OpenAI's preprint 'The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane Re s > 7/8'." GitHub, 7 Oct 2026. https://github.com/tomoto0/quasi-riemann-hypothesis-7-8-verification
6. [S6] Konstantin Kakaes. "AI Proved the Quasi-Riemann Hypothesis. What Happens Now?" Quanta Magazine, 19 Oct 2026. https://www.quantamagazine.org/ai-proved-the-quasi-riemann-hypothesis-what-happens-now-20261019/
7. [S7] Zack Savitsky. "AI edges closer to solving the Riemann hypothesis, one of math's hardest problems." Science, 13 Oct 2026. https://www.science.org/content/article/ai-edges-closer-solving-riemann-hypothesis-one-math-s-hardest-problems
8. [S8] Georgia Tech School of Mathematics. "Dunn's Research Contributes to OpenAI's Proof of the Quasi-Riemann Hypothesis." 22 Oct 2026. https://math.gatech.edu/news/dunns-research-contributes-openais-proof-quasi-riemann-hypothesis
9. [S9] MathOverflow. "Which of the results released by OpenAI went against the conventional mathematical wisdom?" Oct 2026. https://mathoverflow.net/questions/515849/which-of-the-results-released-by-openai-went-against-the-conventional-mathematic
