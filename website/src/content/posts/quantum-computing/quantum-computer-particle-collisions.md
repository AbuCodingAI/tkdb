---
title: A quantum computer simulates a particle collision that makes a new
  particle, but the signal is faint
description: Caltech and University of Washington physicists ran a 104-qubit
  collision simulation on IBM hardware and saw hints that a heavier particle was
  created. The new state-preparation trick is the solid part; the
  particle-production signal is about one standard deviation, in a toy model
  classical computers already handle.
pubDate: 2026-10-31
draft: false
demo: false
category: Quantum
tags:
  - quantum-simulation
  - quantum-field-theory
  - ibm-quantum
  - error-mitigation
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
abstract: In a Nature Physics paper published on 11 September 2026, Roland
  Farrell and John Preskill at Caltech and Nikita Zemlevskiy and Marc Illa at
  the University of Washington simulated two particles colliding in a simple
  one-dimensional field theory on 104 qubits of IBM's ibm_marrakesh processor,
  with circuits of up to 5,589 two-qubit gates. The collision energy was above
  the threshold for making a new, heavier particle, and the team reports
  evidence that one was produced. A new method builds the incoming particles
  from W states with mid-circuit measurements, so the circuit depth does not
  grow with the size of the particles' wavepackets. The work is peer-reviewed
  and an independent physicist wrote a News & Views about it, but the
  particle-production signal is only about one standard deviation above a
  baseline, the results lean on heavy error mitigation, and classical computers
  can already simulate this model more precisely.
sources:
  - title: Digital quantum simulations of scattering in quantum field theories using
      W states (Nature Physics)
    url: https://www.nature.com/articles/s41567-026-03436-8
  - title: Digital quantum simulations of scattering in quantum field theories using
      W states (arXiv:2505.03111v2)
    url: https://arxiv.org/abs/2505.03111
  - title: Digital Quantum simulations of particle collisions in quantum field
      theories using W states (IQuS publication page)
    url: https://iqus.uw.edu/publication/quantum-simulations-of-particle-collisions-in-quantum-field-theories-using-w-states/
  - title: Quantum computing shortcut makes particle collisions easier to simulate
      (Phys.org)
    url: https://phys.org/news/2026-10-quantum-shortcut-particle-collisions-easier.html
  - title: Particle collisions on a quantum computer (Nature Physics News & Views)
    url: https://www.nature.com/articles/s41567-026-03490-2
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# A quantum computer simulates a particle collision that makes a new particle, but the signal is faint

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## Key Findings

Particle colliders like the LHC discover new physics by smashing particles together and watching what comes out. Simulating those collisions from first principles is very hard for ordinary computers, which is one of the long-standing hopes for quantum computers. A team of Roland Farrell and John Preskill (Caltech) with Nikita Zemlevskiy and Marc Illa (InQubator for Quantum Simulation, University of Washington) has now run such a simulation on real quantum hardware at an energy high enough to create a new particle. The peer-reviewed paper appeared in *Nature Physics* on 11 September 2026 [S1].

- **A big hardware run.** The simulation used 104 qubits of IBM's ibm_marrakesh processor and circuits with up to 5,589 two-qubit gates [S1][S2][S4]. The authors' institute page still shows the first preprint's figures of 100 qubits and 6,412 gates [S3]; we use the published numbers.
- **Above the production threshold.** Two light particles were collided with enough energy to make a heavier one, in a one-dimensional model called Ising field theory [S1][S2]. An independent commentary in the same journal describes it as "a model collision above the threshold for particle production" simulated on a quantum computer [S5].
- **Evidence, not proof, of a new particle.** The team looked at how lopsided (skewed) the energy was spread after the collision. In the preprint, the post-collision skew was 0.6 and 1 standard deviation larger than for a single particle travelling alone, which the authors call evidence that the skew is "at least partially" due to particle production [S2].
- **A faster way to set up particles.** The incoming particles are built from W states, a type of entangled state, using measurements partway through the circuit and feedforward. The circuit depth does not grow with the size of the particle wavepackets, which the authors call a "superexponential improvement" over earlier methods [S1][S2][S3].

**What is established:** the work passed peer review, and Torsten Zache of the University of Innsbruck, who was not an author, wrote a News & Views about it [S5]. That is expert commentary, not replication, and we could read only its one-sentence summary.

## How It Works

1. **A simple stand-in for real physics.** The team used Ising field theory on a line of qubits, a model with several particle types of different masses. Real particle physics happens in three dimensions with far richer theories [S2].
2. **Building the particles.** Each incoming particle is a wavepacket, a lump of energy with a rough position and momentum. The team first spreads a single excitation across many qubits as a W state, using mid-circuit measurements and classical feedforward, then reshapes it locally. Parts of this preparation are tuned on a classical computer, and the W-state step works only some of the time, with failed runs thrown away [S2].
3. **The collision.** The two wavepackets are moved toward each other by repeated small time steps (Trotter steps), 45 of them in the longest runs [S2].
4. **Cleaning up the noise.** Today's quantum chips make many errors over thousands of gates. The team ran matching circuits with no particles, measured how noise washed out each quantity, and divided that out, a method they call Operator Decoherence Renormalization, alongside a standard trick called Pauli twirling [S2].
5. **Checking against classical simulation.** The results were compared with matrix-product-state (MPS) simulations run on classical computers, and the two agreed [S2].

## Implications

This is the first quantum simulation to follow a field-theory collision past the early moments and above the energy needed to make new particles, according to the authors [S2]. The wavepacket method is the more lasting part: the authors say it gives the biggest gains in two and three dimensions, where classical methods struggle most, and they wrote circuits for scalar field theory, the Schwinger model and two-dimensional Ising field theory, though only the one-dimensional case ran on hardware [S1][S2].

The limits are stated plainly by the authors themselves:

- **No quantum advantage.** Classical MPS methods already simulate one-dimensional collisions like this one, with settings about ten times larger, and have isolated individual particle-production channels that this run could not [S2].
- **Far from real physics.** The simulation is "far from the continuum limit" and is "not designed to make precise predictions" about the underlying theory [S2].
- **The signal is small and partly noise.** The authors say some of the skew comes from hardware errors, and boundary effects add skew even in the classical simulation [S2].
- **Error mitigation does a lot of work.** Before correction, the raw data from the device were close to pure noise; the corrected numbers depend on the team's noise model. The noise also turned out uneven, with one type of measurement about three times noisier than the others, which the authors call a mystery [S2].

**Impact:** medium. A large, careful hardware demonstration and a genuinely useful state-preparation method, but it is a step toward useful collision simulations, not one in itself. **Confidence:** medium. The paper is peer-reviewed, the full preprint is public, the quantum results match classical simulation, and an independent physicist wrote a commentary. But the particle-production signal is weak, nobody has replicated it, and we could not read the published main text or the commentary's body. These are separate judgments.

## Open Questions

- Does the published version report a stronger signal than the 0.6 and 1 standard deviation excess in the preprint? We could not read the final main text [S1][S2].
- What caveats, if any, did Zache raise in the body of the News & Views [S5]?
- Can the wavepacket method run on hardware in two dimensions, where the authors expect the biggest gains [S2]?
- How far can error mitigation like this stretch before error-corrected machines are needed for collisions that classical methods cannot handle [S2]?
- Will another group reproduce the result on different hardware? Raw data are available only on request [S1].
- One author, John Preskill, is a shareholder and part-time employee of Oratomic, Inc., which develops fault-tolerant quantum computers, as the paper discloses [S1].

## References

1. [S1] Farrell, R. C., Zemlevskiy, N. A., Illa, M. & Preskill, J. "Digital quantum simulations of scattering in quantum field theories using W states." *Nature Physics* (published 11 September 2026). https://www.nature.com/articles/s41567-026-03436-8
2. [S2] Farrell, R. C., Zemlevskiy, N. A., Illa, M. & Preskill, J. Same title, arXiv:2505.03111v2 (30 October 2025). https://arxiv.org/abs/2505.03111
3. [S3] InQubator for Quantum Simulation, University of Washington. "Digital Quantum simulations of particle collisions in quantum field theories using W states" (publication page). https://iqus.uw.edu/publication/quantum-simulations-of-particle-collisions-in-quantum-field-theories-using-w-states/
4. [S4] Fadelli, I. "Quantum computing shortcut makes particle collisions easier to simulate." Phys.org (7 October 2026). https://phys.org/news/2026-10-quantum-shortcut-particle-collisions-easier.html
5. [S5] Zache, T. V. "Particle collisions on a quantum computer." *Nature Physics* (News & Views, 23 October 2026). https://www.nature.com/articles/s41567-026-03490-2
