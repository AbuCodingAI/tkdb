---
title: Two Chinese teams report self-correcting qubits that outlast their best
  plain qubit, without any measurements
description: Two separate groups in China, writing in Nature Physics, report
  that a qubit stored in a superconducting microwave cavity and fixed
  automatically by built-in drives and dissipation outlived the best unprotected
  qubit in the same device, by 18% in one experiment and 4% in the other. The
  gains are small, only one kind of error is corrected, and neither result has
  been independently repeated.
pubDate: 2026-11-17
tags:
  - quantum error correction
  - superconducting qubits
  - bosonic codes
  - quantum sensing
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 16 November 2026 Nature Physics published two experiments from
  different Chinese groups that use autonomous quantum error correction (no
  measurements and no classical feedback) on a logical qubit stored as microwave
  photons in a superconducting cavity. A Shenzhen team (Southern University of
  Science and Technology and the International Quantum Academy) reports a
  protected lifetime of about 2.0 ms, 18% longer than the best physical qubit in
  its device, and uses the same protocol to gain 6.3 dB in a frequency-shift
  measurement. A Tsinghua University and University of Science and Technology of
  China team reports a coherence time 1.04 times that of its best physical qubit
  using a different, more general recovery method. Both papers are
  peer-reviewed; the comparison is with the best qubit inside each device, only
  single-photon loss is corrected, the margins are modest, and no outside group
  has reproduced either result.
sources:
  - title: Extending qubit lifetime beyond break-even and enhancing quantum sensing
      by autonomous quantum error correction (Nature Physics)
    url: https://www.nature.com/articles/s41567-026-03493-z
  - title: Autonomous quantum error correction beyond break-even and its
      metrological application (arXiv:2509.26042)
    url: https://arxiv.org/abs/2509.26042
  - title: Extension of coherence time beyond breakeven point using only drives and
      dissipation (Nature Physics)
    url: https://www.nature.com/articles/s41567-026-03528-5
  - title: Extending coherence time beyond break-even point using only drives and
      dissipation (arXiv:2509.22191)
    url: https://arxiv.org/abs/2509.22191
  - title: Researchers report bosonic qubit coherence beyond break-even
      (Quantum.world)
    url: https://quantum.world/news/bosonic-qubit-coherence-beyond-break-even
  - title: Beating the break-even point with autonomous quantum error correction
      (Nature Physics, trapped ion)
    url: https://www.nature.com/articles/s41567-026-03486-y
  - title: Protecting a bosonic qubit with autonomous quantum error correction
      (Nature, 2021)
    url: https://www.nature.com/articles/s41586-021-03257-0
  - title: Beating the break-even point with a discrete-variable-encoded logical
      qubit (Nature, 2023)
    url: https://www.nature.com/articles/s41586-023-05784-4
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Two Chinese teams report self-correcting qubits that outlast their best plain qubit, without any measurements

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Quantum computers store information in fragile "qubits" that lose it quickly, so they need error correction, which normally means constantly checking for mistakes and fixing them [S1][S3]. Two separate teams in China built a version that fixes one common kind of mistake on its own, with no checking step, using a qubit stored as microwave light inside a tiny metal box [S1][S3]. In both experiments the protected qubit kept its information a bit longer than the best unprotected qubit in the same device: 18% longer for one team and 4% longer for the other [S1][S3]. That matters because a correction scheme is only useful if it helps more than it hurts, and doing it without measurements could make hardware simpler [S1][S3]. The catch: the gains are small, they are compared only with the qubits inside each team's own device, only one type of error is fixed, and no outside group has repeated either result yet [S2][S4].

## Key Findings

- **Two peer-reviewed papers, two separate groups.** *Nature Physics* published both on 16 November 2026 [S1][S3]. One comes from Southern University of Science and Technology and the International Quantum Academy in Shenzhen, led by Yuan Xu and Dapeng Yu with Shi-Biao Zheng of Fuzhou University [S1]. The other comes from Tsinghua University, the University of Science and Technology of China (USTC) and the Beijing Academy of Quantum Information Sciences, led by Luyan Sun and Chang-Ling Zou [S3]. The two author lists do not overlap, although both papers list the national Hefei National Laboratory among their affiliations [S1][S3].
- **Shenzhen result: about 18% past break-even.** A logical qubit encoded in microwave photons in a superconducting cavity and protected against photon loss by engineered dissipation lived about 2.0 ms, 18% longer than the best physical qubit in the system [S1]. In the team's preprint the fitted lifetimes are 2,031 ± 65 µs with correction against 1,726 ± 34 µs for the best physical qubit, a simple qubit stored in the lowest two photon-number states of the same cavity [S2].
- **Tsinghua–USTC result: 4% past break-even.** Using a binomial code in a long-lived cavity mode and a recovery step derived from "quantum channel simulation", this team reports a logical coherence time 1.04 times that of the best physical qubit in its system [S3]. The preprint gives 1,627 µs with correction, 629 µs for the same code left uncorrected and 1,565 µs for the best physical qubit; the main text does not state an uncertainty on the 1.04 ratio [S4][S5].
- **No measurements, no feedback.** In both experiments errors are detected and undone by fixed drives and engineered dissipation that dump the error information into helper (ancilla) qubits, which are then reset, instead of measuring the qubit and steering a correction from a classical computer [S1][S2][S3][S4].
- **A sensing bonus (Shenzhen only).** The Shenzhen group used its protected qubit to measure a small frequency shift and reports a 6.3 dB gain in the information extracted, compared with the most robust unprotected photon-state superposition [S1][S2].

## How It Works

**Break-even.** Error correction spreads one "logical" qubit across a larger system so that errors can be spotted and undone. It only pays off if the logical qubit lasts longer than the best single physical qubit available; that threshold is called break-even [S1]. Measurement-based correction in a superconducting cavity has crossed it before, including a 2023 result from the same Shenzhen group with about a 16% gain [S8].

**Storing a qubit in light.** Both teams store the logical qubit in microwave photons inside a 3D superconducting cavity [S1][S3]. In the lowest-order binomial code the two logical states are mixtures of photon numbers chosen so that losing one photon moves the state into a recognisably different "error space" without destroying the stored information [S2][S4]. The dominant error, losing a photon to the environment, can then in principle be reversed.

**Correcting without looking.** Conventional correction measures an "error syndrome" and applies a fix chosen by fast classical electronics [S1]. Autonomous correction instead builds the fix into the hardware: a drive coherently maps the error space back to the code space while handing the "which error happened" information to an ancilla transmon qubit, and that ancilla is then reset by coupling it to a lossy resonator, carrying the error information away [S2][S4]. In the Shenzhen device a transmon ancilla coupled to the storage cavity is reset this way in about 190 ns, with about 99.6% success [S2]. The Tsinghua–USTC device uses three cavities and four transmons; each correction cycle allows 220 µs of free evolution before recovery, and the authors say their recipe can in principle implement any recovery map rather than one tailored code [S3][S4][S5].

**Earlier attempts.** A 2021 experiment by a University of Massachusetts Amherst-led team corrected photon loss autonomously in a cat-state cavity qubit and roughly doubled its coherence [S7]; the Shenzhen preprint says such earlier circuit experiments still fell short of the best physical qubit [S2]. In October 2026 a USTC trapped-ion team reported autonomous correction beyond break-even in a single ion [S6]; TKDB covered that result on 25 October, when the Shenzhen preprint was among those questioning its comparison qubit.

## Implications

- **A second hardware family.** If these results hold, autonomous correction has now been taken past break-even in superconducting cavities as well as in a trapped ion, by different groups using different methods [S1][S3][S6]. Removing fast measurement and feedback could cut the electronics a quantum processor needs, which is the main selling point both teams cite [S1][S3].
- **Not yet a computer.** Each experiment protects one logical qubit sitting in memory against one dominant error, single-photon loss [S1][S3]. Neither shows logical gates, several interacting logical qubits, or correction of all error types, which a fault-tolerant computer would need.
- **Sensing may come first.** The 6.3 dB metrology gain suggests a nearer-term use in protected quantum sensors, though it was shown for a laboratory frequency-shift test, not a practical sensor [S1][S2].
- **Impact and confidence, separately.** We rate the impact as medium: a meaningful step for one route to simpler error correction, but one protected memory qubit and small gains. We rate confidence in the reported numbers as medium-high: two peer-reviewed papers from separate groups point the same way with detailed preprints, but each result rests on one device and has not been repeated elsewhere.
- **Small margins.** An 18% and a 4% gain over break-even are proof-of-principle numbers. Useful machines need logical qubits that outlast physical ones by large factors, and the Tsinghua–USTC error budget shows how much is lost to the helper qubits [S4].

## Open Questions

- **How firm is the 4% margin?** The Tsinghua–USTC preprint states 1,627 µs against 1,565 µs without an uncertainty on the ratio in its main text; we could not read the paywalled journal version to see whether error bars were added [S3][S4].
- **Is "best physical qubit in the system" the right yardstick?** Both teams compare against the best qubit in their own device, here a simple photon-number qubit in the same cavity [S2][S4]. That is the usual break-even definition, but it says nothing about qubits in other labs or platforms, and the same yardstick was contested for the earlier ion result [S6].
- **What limits it next?** The Tsinghua–USTC error budget predicts 87.2% fidelity per cycle against 87.0% measured and names ancilla coherence as the dominant limit, with multi-photon loss also contributing [S4][S5]. Whether better ancillas or higher-order codes push the margin up has not been shown.
- **Independent repetition.** We found no replication by an outside group and no News & Views commentary. The one independent news write-up we fetched covers the Tsinghua–USTC paper only and closely follows it [S5]; the same site lists a separate item on the Shenzhen paper, which we did not read. Our checks of detailed numbers rely on the September 2025 arXiv versions, because both journal papers are paywalled beyond the abstract; the abstract figures match [S1][S2][S3][S4].

## References

1. [S1] Ni, Z., Hu, L., Cai, Y. *et al.* "Extending qubit lifetime beyond break-even and enhancing quantum sensing by autonomous quantum error correction." *Nature Physics* (published 16 November 2026). doi:10.1038/s41567-026-03493-z. https://www.nature.com/articles/s41567-026-03493-z
2. [S2] Ni, Z., Hu, L., Cai, Y. *et al.* "Autonomous quantum error correction beyond break-even and its metrological application." arXiv:2509.26042 (30 September 2025, preprint version). https://arxiv.org/abs/2509.26042
3. [S3] Sun, L., Xu, Y., Zhou, Y. *et al.* "Extension of coherence time beyond breakeven point using only drives and dissipation." *Nature Physics* (published 16 November 2026). doi:10.1038/s41567-026-03528-5. https://www.nature.com/articles/s41567-026-03528-5
4. [S4] Sun, L., Xu, Y., Zhou, Y. *et al.* "Extending coherence time beyond break-even point using only drives and dissipation." arXiv:2509.22191 (26 September 2025, preprint version). https://arxiv.org/abs/2509.22191
5. [S5] Quantum.world. "Researchers report bosonic qubit coherence beyond break-even" (16 November 2026). https://quantum.world/news/bosonic-qubit-coherence-beyond-break-even
6. [S6] Li, Y., Mei, Q., Jie, Q.-X. *et al.* "Beating the break-even point with autonomous quantum error correction." *Nature Physics* (23 October 2026). doi:10.1038/s41567-026-03486-y. https://www.nature.com/articles/s41567-026-03486-y (context)
7. [S7] Gertler, J. M. *et al.* "Protecting a bosonic qubit with autonomous quantum error correction." *Nature* 590 (2021). doi:10.1038/s41586-021-03257-0. https://www.nature.com/articles/s41586-021-03257-0 (context)
8. [S8] Ni, Z. *et al.* "Beating the break-even point with a discrete-variable-encoded logical qubit." *Nature* 616 (2023). doi:10.1038/s41586-023-05784-4. https://www.nature.com/articles/s41586-023-05784-4 (context)
