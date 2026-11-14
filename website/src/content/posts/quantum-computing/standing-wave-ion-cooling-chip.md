---
title: Light delivered through an ion-trap chip cooled a trapped ion close to
  its quietest state in 150 microseconds
description: A Cornell-led team used a standing wave of laser light, delivered
  by optics built into an ion-trap chip, to cool all three directions of a
  single trapped ion's motion close to the quantum ground state in about 150
  microseconds. The paper is peer-reviewed, but it is one ion in one lab, and
  benefits for large quantum computers are still a projection.
pubDate: 2026-11-13
tags:
  - trapped ions
  - laser cooling
  - integrated photonics
  - quantum computing hardware
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 9 November 2026 a Cornell-led team, with a co-author at ETH Zurich,
  reported in PRX Quantum that waveguide optics built into a foundry-made
  ion-trap chip can deliver a phase-stable ultraviolet standing wave of light
  and use it to cool a single trapped calcium ion. With the ion at a dark spot
  (node) of the wave, a method called EIT cooling brought the target motion to a
  mean phonon number of about 0.05 within about 150 microseconds, compared with
  about 0.088 after 500 microseconds for the conventional running-wave version
  on the same device, and it cooled all three motional modes, spanning about 5
  MHz, close to the ground state. A separate Doppler-cooling test landed about
  1.8 times below the usual limit, close to the factor of two predicted by Cirac
  and colleagues in 1992. The result is a single-ion demonstration from one lab,
  the final temperatures are still far above the scheme's theoretical limits,
  and use in large quantum computers has not been shown.
sources:
  - title: Rapid Multi-Mode Trapped-Ion Laser Cooling in a Phase-Stable Standing
      Wave (PRX Quantum)
    url: https://journals.aps.org/prxquantum/abstract/10.1103/5btm-vwgy
  - title: Rapid multi-mode trapped-ion laser cooling in a phase-stable standing
      wave (arXiv:2512.10900)
    url: https://arxiv.org/abs/2512.10900
  - title: Researchers develop faster laser cooling for quantum computers (Cornell
      Chronicle)
    url: https://news.cornell.edu/stories/2026/11/researchers-develop-faster-laser-cooling-quantum-computers
  - title: Chip-based lasers cool trapped ions 3x faster for quantum computing
      (Interesting Engineering)
    url: https://interestingengineering.com/science/cornell-trapped-ion-laser-cooling-quantum-computing
  - title: Laser cooling of trapped ions in a standing wave (Physical Review A, 1992)
    url: https://journals.aps.org/pra/abstract/10.1103/PhysRevA.46.2668
  - title: EIT ground-state cooling of long ion strings (arXiv:1603.05568)
    url: https://arxiv.org/abs/1603.05568
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Light delivered through an ion-trap chip cooled a trapped ion close to its quietest state in 150 microseconds

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Some quantum computers store information in single charged atoms (ions) floating above a chip, and those atoms have to be cooled to almost total stillness again and again, which eats up a lot of running time [S2][S3]. A Cornell-led team sent laser light through tiny light channels built into the chip and shaped it into a pattern of bright and dark stripes, with the atom sitting in a dark stripe [S1][S3]. That cooled the atom close to its quietest possible state in about 150 millionths of a second, faster than the usual method on the same chip, and it calmed the atom's motion in all three directions at once [S1][S2]. The paper is peer-reviewed, and one result matches a prediction other physicists made in 1992 [S2][S5]. The catch: it was one atom in one lab, and nobody has yet shown it speeding up a real multi-atom quantum computer [S2][S3].

## Key Findings

- **Peer-reviewed, one group.** The paper appeared in *PRX Quantum* on 9 November 2026; the authors are at Cornell, with one co-author at ETH Zurich [S1]. A preprint version has been on arXiv since December 2025 [S2]. The chips were made commercially in the Netherlands [S2][S3].
- **Faster ground-state cooling of the target motion.** With a single calcium-40 ion at a node of the standing wave, "EIT" cooling brought the chosen motional mode to an average of about 0.050 quanta of motion (phonons) in about 150 microseconds [S1][S2]. The conventional running-wave version on the same device reached about 0.088 after 500 microseconds [S2]. The fitted cooling rate was about 57 versus 21 per millisecond, roughly 2.7 times higher [S2]; news coverage's "3x faster" compares the two durations [S4].
- **All three directions at once.** The standing-wave scheme brought all three motional modes of the ion, spread over about 5 MHz in frequency, close to the ground state (one phonon or fewer), while the running-wave scheme tuned to the same mode barely cooled the other two [S1][S2][S3].
- **An old prediction checked.** Ordinary Doppler cooling with the ion at a node ended about 1.8 times colder than the usual running-wave Doppler limit [S2], close to the factor of two that Cirac, Blatt, Zoller and Phillips predicted in 1992 [S5]. This is agreement with independent theory, not an independent repeat of the experiment.
- **Still well short of the limit.** The temperatures reached are far above what the scheme allows in theory; the authors blame mainly impure laser polarization, leftover light at the node and heating, and their measured values are still about twice what their own simulations predict [S2].

**What is established:** a peer-reviewed, same-device comparison showing the standing-wave scheme beating the conventional one on speed, range of motions cooled and final temperature for one ion [S1][S2]. **What is not:** an independent repeat, results with many ions, or a measured speed-up of a working quantum computer [S2][S3].

## How It Works

1. **Why cooling matters.** In trapped-ion machines, ions jiggle after being moved and as they pick up heat, and that motion spoils quantum operations, so they are cooled repeatedly; in leading designs this can take up a large share of run time [S2][S3].
2. **A standing wave.** Two laser beams meeting from opposite directions form a fixed pattern of bright and dark spots. Light from waveguides on the chip is stable enough that the pattern does not drift, so the ion can be parked on a dark spot (a node) [S1][S2].
3. **Why the dark spot helps.** At a node the light cannot simply knock the ion around (the "carrier" interaction is suppressed) but it can still remove motion, so the unwanted heating from scattered light drops [S2][S3]. Cirac and colleagues worked out the Doppler-cooling version of this in 1992 [S5].
4. **EIT cooling.** Electromagnetically induced transparency cooling uses two laser beams tuned so the ion only absorbs light in a way that takes energy out of its motion; it can cool several motional modes at once [S2][S6]. Here one of those beams was the standing wave [S1][S2].

## Implications

If it scales, faster cooling that handles several motions in one step could cut the time trapped-ion quantum computers spend on cooling rather than computing [S2][S3]. It also supports a broader point: optics built into chips, which many groups are developing to control more ions, may improve basic operations and not only make machines easier to scale [S1][S3]. The authors argue that with better chip design the scheme could get about ten times colder and might one day replace slower, more precise cooling methods, but that is a projection [S2].

## Open Questions

- Will another lab reproduce the result, and does it hold for chains of several ions, as the authors expect [S2][S3]?
- Can design fixes (for magnetic-field wobble and light leaking into the node) reach the roughly ten-times-lower phonon numbers the authors simulate [S2]?
- How much total run time would this save in a real quantum computer, compared with other cooling and gate approaches [S2]?

## References

1. [S1] Zhenzhong Xing, Hamim Mahmud Rivy, Vighnesh Natarajan, Aditya Milind Kolhatkar, Gillenhaal Beck & Karan K. Mehta. Rapid Multi-Mode Trapped-Ion Laser Cooling in a Phase-Stable Standing Wave. *PRX Quantum* 7, 043027 (9 Nov 2026). https://journals.aps.org/prxquantum/abstract/10.1103/5btm-vwgy
2. [S2] Same authors. Rapid multi-mode trapped-ion laser cooling in a phase-stable standing wave. *arXiv* 2512.10900 (v1 Dec 2025; v4 read). https://arxiv.org/abs/2512.10900
3. [S3] Chris Dawson. Researchers develop faster laser cooling for quantum computers. *Cornell Chronicle* (Nov 2026). https://news.cornell.edu/stories/2026/11/researchers-develop-faster-laser-cooling-quantum-computers
4. [S4] Neetika Walter. Chip-based lasers cool trapped ions 3x faster for quantum computing. *Interesting Engineering* (12 Nov 2026). https://interestingengineering.com/science/cornell-trapped-ion-laser-cooling-quantum-computing
5. [S5] J. I. Cirac, R. Blatt, P. Zoller & W. D. Phillips. Laser cooling of trapped ions in a standing wave. *Physical Review A* 46, 2668 (1992). https://journals.aps.org/pra/abstract/10.1103/PhysRevA.46.2668
6. [S6] R. Lechner et al. EIT ground-state cooling of long ion strings. *arXiv* 1603.05568 (2016). https://arxiv.org/abs/1603.05568
