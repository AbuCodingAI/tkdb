---
title: Google's quantum chip beat classical limits in games built on a quantum
  paradox, from 2 to 105 qubits
description: In a Science paper, Google Quantum AI used its Willow
  superconducting processors to win a "magic square" game 98.3% of the time,
  where no classical plan can beat 88.9%, and to stay above classical limits in
  related tasks on up to 71 and 105 qubits. It is a demonstration and a proposed
  benchmark, not proof of a useful quantum speed-up.
pubDate: 2026-11-25
tags:
  - quantum computing
  - contextuality
  - google quantum ai
  - superconducting qubits
  - benchmarking
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: "On 19 November 2026 Science published a paper by Google Quantum AI
  and collaborators reporting experiments on quantum contextuality, the property
  that a quantum measurement's result cannot be fixed in advance independent of
  which other compatible measurements are made with it. On Willow
  superconducting processors the team won the two-player Mermin–Peres magic
  square game 98.30% of the time against a classical maximum of 88.89%, measured
  a Bell–Kochen–Specker score well above the classical limit of 4 (5.590 in
  Google's post; 5.618 in the December 2025 preprint), stayed above the
  classical bound in a GHZ parity game with up to 71 players, and solved hidden
  linear function problems on up to 105 qubits. A Science Perspective by Rui
  Soares Barbosa says such tests could become hardware benchmarks. Caveats: all
  players sit on one chip, so these are not loophole-free tests, and the
  105-qubit comparison is against a conjectured classical bound, not a proven
  one; no practical speed-up is shown."
sources:
  - title: Quantum-classical separation in bounded-resource tasks arising from
      measurement contextuality (Science)
    url: https://www.science.org/doi/10.1126/science.aec3042
  - title: Quantum–Classical Separation in Bounded-Resource Tasks Arising from
      Measurement Contextuality (arXiv preprint 2512.02284)
    url: https://arxiv.org/abs/2512.02284
  - title: A game you cannot win unless you have a quantum computer (Google Research
      blog)
    url: https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/
  - title: A quantum paradox at work (Science Perspective, Rui Soares Barbosa)
    url: https://www.science.org/doi/10.1126/science.aem4000
  - title: Google tests quantum contextuality on up to 105 qubits (Quantum Research
      Center)
    url: https://quantumresearch.center/news/articles/google-contextuality-willow-science/
  - title: Google shows quantum contextuality at 105 qubits as Willow chip beats
      classical limits (Interesting Engineering)
    url: https://interestingengineering.com/science/google-willow-quantum-contextuality-105-qubits
  - title: Quantum advantage with shallow circuits (Bravyi, Gosset, König, arXiv
      1704.00690)
    url: https://arxiv.org/abs/1704.00690
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Google's quantum chip beat classical limits in games built on a quantum paradox, from 2 to 105 qubits

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Google's quantum computing team played a set of puzzle games on its quantum chips that no ordinary strategy can win every time [S1][S3]. In the best-known one, two players who cannot talk won about 98 rounds out of 100, while any plan written in advance can win at most about 89 [S3][S6]. This works because of a strange quantum rule: some measurement results are not set until you measure them, and they depend on what else you measure at the same time [S1][S4]. An outside expert writing in Science says games like this could become a fair test of how good quantum computers really are [S4]. The biggest catch: all the "players" sit on one chip, and the largest test is compared with a classical limit that is only guessed, not proven, so this does not show a quantum computer doing useful work faster [S2][S5].

## Key Findings

- **Published and peer reviewed.** "Quantum-classical separation in bounded-resource tasks arising from measurement contextuality" by Google Quantum AI and collaborators appeared in Science on 19 November 2026 (received 16 September 2025, accepted 4 September 2026) [S1]. It first appeared as an arXiv preprint on 1 December 2025 [S2][S5].
- **Magic square game.** Two players each held two qubits sharing entangled pairs. Over 100,000 plays of each of the nine row-column versions, they won 98.30% of rounds (0.9830 ± 0.0001); the best possible classical strategy wins 8 in 9, or 88.89% [S2][S3].
- **A contextuality score.** A Bell–Kochen–Specker inequality, which cannot exceed 4 if results are fixed in advance and reaches 6 in ideal quantum mechanics, measured 5.590 ± 0.008 in Google's post about the published paper [S3][S6]. The December 2025 preprint gives 5.618 ± 0.005 for the same protocol; the published value appears to have been revised [S2][S5].
- **Many players.** In a GHZ parity game, the team stayed above the best classical success rate with up to 71 players, one qubit each, though noise narrowed the margin as players were added [S3][S4]. Google also reports genuine entanglement across 45 qubits [S3][S5].
- **Shallow circuits at 105 qubits.** The team solved instances of the hidden linear function problem, for which Bravyi, Gosset and König proved that a constant-depth quantum circuit always succeeds while classical circuits of bounded fan-in gates need depth that grows with problem size, on grids up to 105 qubits; success fell from about 1 on small grids to about 0.6 at full size [S3][S7][S5].
- **A hardware test.** Google says the tasks exposed subtle coherent errors that its usual random-circuit benchmarks tend to average away, and proposes them as benchmarks [S1][S3]. Barbosa's Perspective agrees such tests "could become benchmarks for quantum hardware" [S4].

## How It Works

Contextuality is the idea that a quantum measurement does not just reveal a value the system already had. What you get can depend on which other compatible measurements you make alongside it, its "context" [S1][S4]. Theory has linked contextuality to the extra power of some quantum algorithms, but tests had mostly used a few particles [S3][S4].

The magic square makes this concrete. Fill a 3×3 grid with +1s and −1s so that every row multiplies to +1 and every column to −1: it cannot be done, because the rows demand an even number of −1s and the columns an odd number [S3][S5]. In the game, Alice gets a row and Bob a column, and they win if they agree on the shared square. Any pre-agreed table must fail in at least one of the nine pairings, so classical players win at most 8 in 9. Players who share two entangled qubit pairs and measure them in a set pattern can, in principle, win every time [S3][S5].

To put a number on contextuality, the team measured all nine operators of the grid one after another on the same two qubits, using a helper qubit to read each result without disturbing them: 540 measurements in a row, repeated 1,000 times [S3][S5]. The GHZ game and the hidden linear function problem scale the same logic to many qubits. Because those circuits use only Clifford gates, an ordinary computer can simulate them, which is how the team checked each answer [S2][S5].

## Implications

- **Impact (medium).** The paper says it advances the state of the art on fidelity and system size in the many-qubit tasks, and Barbosa notes that earlier contextuality experiments were far smaller than today's quantum computers [S1][S4]. It is also a concrete proposal for benchmarks whose perfect score is fixed by physics (a win rate of 1, a score of 6) rather than by a classical baseline that keeps moving [S3][S4]. Barbosa adds that quantum processors could become "laboratories" for probing the quantum-classical boundary in many-body systems [S4].
- **Confidence (medium).** The results are in a peer-reviewed journal with data on Zenodo and code in Google's ReCirq repository [S1], and an outside technical review reports that the supplementary error budgets match the measured shortfalls [S5]. Independent groups have not yet repeated the experiments.
- **Not a practical speed-up.** The 2018 theorem behind the 105-qubit task only applies to circuits that succeed at least 7/8 of the time and only becomes meaningful around a million qubits, as the preprint itself notes; at today's sizes Google compares against its own conjectured classical depth of log2(s) layers [S2][S5]. The preprint also notes that its data fall below the 7/8 line at about 35 qubits [S2].
- **Not loophole-free.** All players are qubits on one chip; "no communication" is enforced by circuit design, not distance, so the tests probe the processor's behaviour rather than nature's [S5].

## Open Questions

- Will other groups and other hardware types (trapped ions, neutral atoms, photons) run the same contextuality benchmarks so machines can be compared [S3][S4]?
- Can the hidden-linear-function gap be tied to a proven classical bound at sizes real machines can reach, instead of a conjectured one [S2][S5]?
- Why does the published contextuality score (5.590) differ from the preprint's (5.618), and which analysis change explains it [S2][S5]?
- Do the coherent errors these tasks reveal translate into better error-corrected machines, as Google suggests [S3]?

## References

1. [S1] Google Quantum AI and Collaborators, "Quantum-classical separation in bounded-resource tasks arising from measurement contextuality," Science 394, 870–874 (19 Nov 2026). https://www.science.org/doi/10.1126/science.aec3042
2. [S2] Same team, arXiv preprint 2512.02284 (1 Dec 2025). https://arxiv.org/abs/2512.02284
3. [S3] S. Kumar and R. Cortiñas, "A game you cannot win unless you have a quantum computer," Google Research blog (19 Nov 2026). https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/
4. [S4] R. Soares Barbosa, "A quantum paradox at work," Science Perspective, Science 394, 839–840 (19 Nov 2026). https://www.science.org/doi/10.1126/science.aem4000
5. [S5] Quantum Research Center, "Google tests quantum contextuality on up to 105 qubits" (21 Nov 2026). https://quantumresearch.center/news/articles/google-contextuality-willow-science/
6. [S6] N. Walter, "Google shows quantum contextuality at 105 qubits as Willow chip beats classical limits," Interesting Engineering (19 Nov 2026). https://interestingengineering.com/science/google-willow-quantum-contextuality-105-qubits
7. [S7] S. Bravyi, D. Gosset, R. König, "Quantum advantage with shallow circuits," arXiv 1704.00690 (2017; Science 2018). https://arxiv.org/abs/1704.00690
