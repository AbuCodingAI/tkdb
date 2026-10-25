---
title: Graham's 55-year-old rearrangement conjecture is settled for all large primes
description: Four papers from partly independent groups together show that any
  set of nonzero numbers on a prime-sized clock can be ordered so no partial sum
  repeats, as long as the prime is large. The final piece is still a preprint.
pubDate: 2026-10-25
updatedDate: 2026-10-25
draft: false
demo: false
category: Mathematics
tags:
  - combinatorics
  - additive-combinatorics
  - probabilistic-method
  - graham-conjecture
  - preprint
author: TKDB Newsroom (AI-assisted)
abstract: In 1971 Ronald Graham conjectured that any set of nonzero numbers in
  arithmetic modulo a prime p can be put in an order whose running totals never
  repeat. A February 2026 preprint by Huy Tuan Pham and Lisa Sauermann proved it
  for medium-sized sets, the last range nobody had covered. Together with three
  earlier papers, this settles the conjecture for every sufficiently large
  prime. No one has said how large is large enough, so small primes are still
  open. Two of the four papers are peer-reviewed. The other two, including the
  final step, are preprints that have not been independently checked.
sources:
  - title: On Graham's rearrangement conjecture (arXiv:2602.15797)
    url: https://arxiv.org/abs/2602.15797
  - title: On Graham's rearrangement conjecture over F_2^n (arXiv:2508.18254)
    url: https://arxiv.org/abs/2508.18254
  - title: Graham's rearrangement conjecture beyond the rectification barrier
      (arXiv:2409.07403; Israel Journal of Mathematics)
    url: https://arxiv.org/abs/2409.07403
  - title: A random Hall-Paige conjecture (arXiv:2204.09666; Inventiones mathematicae)
    url: https://arxiv.org/abs/2204.09666
  - title: Mathematicians Harness Randomness To Crack a 55-Year-Old Conjecture
      (Quanta Magazine)
    url: https://www.quantamagazine.org/mathematicians-harness-randomness-to-crack-a-55-year-old-conjecture-20260928/
  - title: "Erdős Problem #475 (Erdős Problems)"
    url: https://www.erdosproblems.com/475
  - title: Huy Tuan Pham (homepage)
    url: https://huytuanpham.github.io/
review:
  status: approved
  source: agent
  agent: newsroom-daily
---

Status: Preprint · AI-assisted reporting, passed the newsroom's automated quality gates (not reviewed by a human editor)

## Key Findings

In 1971 the mathematician Ronald Graham asked a simple question about clock arithmetic [S1][S6]. Pick a prime p and any collection of distinct nonzero numbers modulo p. Can you always put them in an order so that the running totals (first number, first two added, first three added, and so on) are all different? He conjectured that the answer is always yes.

A preprint posted on 17 February 2026 by **Huy Tuan Pham and Lisa Sauermann** proves the conjecture for "medium-sized" sets. Those are sets with at least some fixed number of elements but at most p^(1−α) of them, for any fixed α between 0 and 1 [S1]. That was the range earlier work could not reach. The authors write that, together with earlier results, this "completely settles" the conjecture **for all sufficiently large primes** [S1].

The earlier results are:

- **Small sets:** Benjamin Bedert and Noah Kravitz, published in the *Israel Journal of Mathematics* [S3].
- **Large sets** (at least p^(1−c) elements for a small constant c): a five-author preprint by Bedert, Matija Bucić, Kravitz, Richard Montgomery and Alp Müyesser. It proves this for every finite group, not only clock arithmetic [S2].
- **Nearly complete sets:** Müyesser and Alexey Pokrovskiy, published in *Inventiones mathematicae* [S4].

The curated Erdős Problems database records the same four-part chain under problem #475 [S6]. *Quanta Magazine* covered the result on 28 September 2026 [S5].

**What is established, and what is not:** two of the four pieces have passed peer review [S3][S4]. The final piece [S1] and the large-set piece [S2] are preprints, so we label this story **Preprint**. We found no independent check of the combined proof. The Erdős Problems page lists no machine-checked formal version [S6]. "Sufficiently large" is not a number anyone has computed, so the conjecture is not yet proved for every prime [S1][S5][S6].

## How It Works

1. **The question, restated.** Repeated running totals happen exactly when some unbroken stretch of the order adds up to zero modulo p. To answer Graham, you need an order with no zero-sum stretch [S1].
2. **Why sizes matter.** Larger sets have more running totals that could collide. Smaller sets leave fewer orders to choose from. So each range of set sizes needed its own method [S5][S6]. The small-set proof uses structural tools from additive combinatorics [S3]. The large-set work uses graph methods and the "absorption" technique [S2].
3. **The new step: start random, then repair.** Pham and Sauermann begin with a completely random order. Whenever a stretch sums to zero, they swap its last number with a nearby later one [S1].
4. **Why the repairs work.** The repair can fail in three ways:
   - a zero-sum stretch can sit too close to the end, with nothing left to swap in;
   - too many zero-sum stretches can crowd together;
   - one fix can create a new zero-sum stretch.

   The authors prove an "anticoncentration" bound with Fourier analysis. It says the sum of a random subset of the set is unlikely to land on any one value. From that they show the three failures together have probability at most 2/25 for a random starting order [S1]. That is less than 1, so a working order must exist. *Quanta* describes this as success at least 90% of the time [S5].
5. **Fitting the ranges together.** Each proof only works once p is large. With the constants chosen compatibly, the four ranges overlap and cover every set size [S1][S6]. TKDB checked only that the stated ranges fit together. We did not check the proofs.

## Implications

- **Mainly a result for mathematics.** It settles a well-known problem, listed as Erdős Problem #475, for all primes past an unknown threshold [S6]. Noga Alon of Princeton, who was not involved, told *Quanta* it showed "the power of probabilistic methods" [S5].
- **A tool others can reuse.** The anticoncentration bound for sums of random subsets is a general result [S1]. The authors say their argument may extend to a version of the question for other groups, a conjecture of Brian Alspach. They say they plan to return to it [S1].
- **A wider group result.** The five-author paper's theorem covers every finite group, not only clock arithmetic [S2]. That links the question to older problems about ordering group elements and to Latin-square designs [S2][S4].
- **No everyday use.** Graham was also a serious juggler, and *Quanta* links the question to juggling patterns. It notes that the primes involved are so large that the result cannot be used to plan a real juggling routine [S5].

## Open Questions

- **Will the preprints hold up?** The final paper [S1] and the large-set paper [S2] had no journal record when we checked. Peer review, or a later independent write-up, could still find gaps. Nobody has published an objection that we could find.
- **How large is "sufficiently large"?** None of the papers gives an explicit threshold [S1][S6]. Below it, the conjecture is proved for every prime only for sets of at most 12 elements and for sets of size p−3 to p−1 [S6]. A full answer would need either explicit constants plus a computer check of the small primes, or a new argument.
- **Will it be formalised?** No machine-checked version is listed on the Erdős Problems page [S6].
- **Does it extend to other groups?** Alspach's conjecture for all finite abelian groups is still open. Pham and Sauermann think their method may help [S1].

## References

1. [S1] H. T. Pham and L. Sauermann, "On Graham's rearrangement conjecture", arXiv:2602.15797 (preprint, 17 Feb 2026). https://arxiv.org/abs/2602.15797
2. [S2] B. Bedert, M. Bucić, N. Kravitz, R. Montgomery and A. Müyesser, "On Graham's rearrangement conjecture over F_2^n", arXiv:2508.18254 (preprint, 25 Aug 2025). https://arxiv.org/abs/2508.18254
3. [S3] B. Bedert and N. Kravitz, "Graham's rearrangement conjecture beyond the rectification barrier", arXiv:2409.07403; Israel Journal of Mathematics 273, doi:10.1007/s11856-025-2871-6. https://arxiv.org/abs/2409.07403
4. [S4] A. Müyesser and A. Pokrovskiy, "A random Hall-Paige conjecture", arXiv:2204.09666; Inventiones mathematicae 240 (2025), doi:10.1007/s00222-025-01328-x. https://arxiv.org/abs/2204.09666
5. [S5] S. Wegsman, "Mathematicians Harness Randomness To Crack a 55-Year-Old Conjecture", Quanta Magazine, 28 Sep 2026. https://www.quantamagazine.org/mathematicians-harness-randomness-to-crack-a-55-year-old-conjecture-20260928/
6. [S6] T. F. Bloom, Erdős Problem #475, Erdős Problems (page last edited 5 Mar 2026; accessed 25 Oct 2026). https://www.erdosproblems.com/475
7. [S7] Huy Tuan Pham, personal homepage (accessed 25 Oct 2026). https://huytuanpham.github.io/
