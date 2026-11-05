---
title: Quantinuum's error-corrected qubit gets about 12 times better each time
  the code grows
description: A Quantinuum preprint reports color-code error correction on its
  Helios trapped-ion computer where each step up in code size cut logical errors
  by about a factor of 12, reaching about 5 errors per million correction
  rounds. It is not yet peer reviewed and covers memory, not full computation.
pubDate: 2026-11-05
tags:
  - quantum computing
  - error correction
  - trapped ions
  - color code
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: In a preprint posted on 16 October 2026, 23 Quantinuum researchers
  report running triangular color codes of distance 3, 5 and 7 on the Helios
  trapped-ion processor. Stored logical-qubit errors fell from about 5.5 in
  10,000 to about 5 in a million per round of error correction, a suppression
  factor of about 12 per step, far steeper than the 2.14 Google reported for its
  superconducting chip in 2024. The record rests on 3 failures in 29,000 runs,
  all decoding was done afterwards rather than live, rounds are slow, and the
  work has not been peer reviewed or repeated by another group.
sources:
  - title: Quantum error correction well below the color code threshold
      (arXiv:2610.24077)
    url: https://arxiv.org/abs/2610.24077
  - title: Quantinuum Breaks Error-Correction World Record by 10x (Quantinuum press
      release)
    url: https://www.quantinuum.com/press-releases/quantinuum-breaks-error-correction-world-record-by-10x-validating-its-leading-path-to-fault-tolerant-quantum-computing-by-2029
  - title: Quantum error correction goes well beyond breakeven (Ars Technica)
    url: https://arstechnica.com/science/2026/10/quantum-error-correction-goes-well-beyond-breakeven/
  - title: Quantinuum Reports Record Error Suppression on Helios, at About a Fifth
      of a Second per Correction Round (PostQuantum)
    url: https://postquantum.com/industry-news/quantinuum-color-code-helios/
  - title: Quantum error correction below the surface code threshold (Google Quantum
      AI, arXiv:2408.13687)
    url: https://arxiv.org/abs/2408.13687
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Quantinuum's error-corrected qubit gets about 12 times better each time the code grows

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Quantum computers make lots of mistakes, so researchers group many fragile qubits into one sturdier "logical" qubit that can catch and fix errors [S1]. Quantinuum, a quantum computing company, reports that on its Helios machine, each time it made that group bigger, the stored qubit's error rate dropped by about 12 times, ending at roughly 5 errors per million checks [S1]. That is a much steeper improvement than earlier tests, and if it holds, a useful machine might need far fewer qubits than people expected [S3][S4]. The biggest catch: this is the company's own study, not yet checked by outside reviewers, and it only shows a qubit holding still, not running a full calculation [S1][S4].

## Key Findings

- **What was reported.** A preprint by 23 Quantinuum researchers in Broomfield, Colorado and London, submitted to arXiv on 16 October 2026 and announced on 19 October, describes error correction with triangular color codes of distance 3, 5 and 7 on the Helios trapped-ion processor [S1][S2]. PostQuantum notes it had not been peer reviewed when announced [S4].
- **Memory error rates.** Using 13, 37 and 73 physical qubits, the logical error rate per round of error checking was about 5.5 × 10⁻⁴, 3.8 × 10⁻⁵ and 5 × 10⁻⁶ (one-sigma range about 3 to 9 × 10⁻⁶) at distances 3, 5 and 7 [S1].
- **Suppression factor.** The authors fit a suppression factor Λ (how much errors drop per step of two in code distance) of 12 (+3/−2) with their main decoder, Tesseract. Other decoders gave lower values: 11 for Frontier, 7 for a convolutional neural network and 8 for a transformer network [S1]. For comparison, Google Quantum AI reported Λ = 2.14 ± 0.02 for a surface code on its superconducting chip in a 2024 preprint later published in Nature [S5].
- **The record rests on few events.** The distance-7 figure comes from 3 logical failures in 29,000 runs of 20 rounds each [S1].
- **Logical gates.** Two-qubit Clifford gates run inside the codes had errors of about 7 × 10⁻⁴ at distance 3 and 7 × 10⁻⁵ at distance 5, versus 9.5 × 10⁻⁴ unencoded, a fitted Λ of 9 with wide error bars (+8/−4). Distance 7 gates were not run because two such blocks need more qubits than Helios has [S1][S4].
- **Independent views.** Ars Technica's science editor called it "the best scaling" he knew of while stressing it was seen on memory only [S3]. PostQuantum's analysis also calls it the steepest suppression it has seen but notes rounds take about a fifth of a second, against 1.1 microseconds on Google's chip [S4][S5]. A Sandia National Laboratories researcher not involved in the study praised the result, but that quote appears in Quantinuum's own press release [S2].

## How It Works

A logical qubit spreads one piece of quantum information across many physical qubits, and repeated parity checks (syndrome extraction) reveal where errors have probably happened without destroying the information [S1][S3]. A larger code (higher "distance") can tolerate more simultaneous errors, but only helps if the hardware's own error rate is below a threshold; the further below, the bigger Λ is [S1][S3].

Quantinuum's Helios holds barium ions that are moved around a trap so any two can interact, which suits the color code, a code whose layout is awkward for fixed chip wiring [S1][S3]. The team says a big share of earlier errors came from "leakage", where an ion drops out of the two states used as a qubit. They added a laser "repump" that cut leaked population about 6.5-fold, plus a circuit that regularly swaps data qubits with freshly reset helper qubits [S1][S3]. Ars Technica reports the repump runs alongside routine cooling [S3]. The syndrome data also exposed a phase-tracking bug in Helios that was fixed in software; data from before and after the fix are both included [S1].

All decoding (working out which error happened from the check results) was done afterwards on stored data. The neural-network decoders processed each round in a few hundred microseconds, which the authors say is fast enough for live use later [S1].

## Implications

If a Λ near 12 held as codes grow, PostQuantum estimates a code of distance about 21, around 661 physical qubits per logical qubit in this layout, could reach one error in a trillion rounds, compared with thousands of qubits at Google's 2024 Λ [S4]. That is an extrapolation from three code sizes, not a measurement [S4]. Quantinuum says the result puts it in the target range for Apollo, a fault-tolerant machine it plans for 2029; that is a company claim about its roadmap, and its press release lists risks including that the results may not replicate at larger scale [S2].

Speed is the other side of the trade-off. On the evidence available, trapped ions may need fewer qubits per logical qubit, but each correction round is far slower than on superconducting chips [S4][S5].

## Open Questions

- Will the result survive peer review and be reproduced by an independent group or on other hardware? Nothing like that existed at the time of writing [S1][S4].
- Does Λ stay near 12 at larger distances? Only three sizes were measured, and the distance-7 point rests on 3 failures [S1][S4].
- Can it work with live decoding and during real computation? The paper says magic-state preparation and a full Clifford plus T circuit with real-time decoding are still to be shown [S1].
- How do comparisons hold up? The "100 times better than other hardware" figure compares Quantinuum's color code with Google's 2024 surface code result, different codes on different machines; PostQuantum notes a correction round is not a standard unit of useful computation [S2][S4][S5].

## References

1. [S1] Lavasani, A. et al. (Quantinuum). "Quantum error correction well below the color code threshold." arXiv:2610.24077, submitted 16 October 2026 (preprint, not peer reviewed). https://arxiv.org/abs/2610.24077
2. [S2] Quantinuum. "Quantinuum Breaks Error-Correction World Record by 10x, Validating its Leading Path to Fault-Tolerant Quantum Computing by 2029." Press release, 19 October 2026. https://www.quantinuum.com/press-releases/quantinuum-breaks-error-correction-world-record-by-10x-validating-its-leading-path-to-fault-tolerant-quantum-computing-by-2029
3. [S3] Timmer, J. "Quantum error correction goes well beyond breakeven." Ars Technica, 20 October 2026. https://arstechnica.com/science/2026/10/quantum-error-correction-goes-well-beyond-breakeven/
4. [S4] Ivezic, M. "Quantinuum Reports Record Error Suppression on Helios, at About a Fifth of a Second per Correction Round." PostQuantum, 20 October 2026. https://postquantum.com/industry-news/quantinuum-color-code-helios/
5. [S5] Google Quantum AI and collaborators. "Quantum error correction below the surface code threshold." arXiv:2408.13687 (2024); Nature 638, 920-926 (2025). https://arxiv.org/abs/2408.13687
