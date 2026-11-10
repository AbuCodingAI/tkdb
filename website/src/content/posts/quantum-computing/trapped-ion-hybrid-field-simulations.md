---
title: Two labs use the wobble of trapped ions to simulate the fields of
  particle physics
description: Teams at Oxford and Maryland/Duke separately used the vibrations of
  trapped ions as a built-in store for force-carrying and matter fields,
  simulating a simple gauge theory and a toy model of nucleons and pions. Both
  are peer-reviewed in Nature Physics, but both systems are still small enough
  for ordinary computers to check.
pubDate: 2026-11-10
tags:
  - quantum computing
  - quantum simulation
  - trapped ions
  - lattice gauge theory
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: "On 25 September 2026 Nature Physics published two independent
  trapped-ion experiments that store bosonic fields directly in the ions'
  vibrations instead of in extra qubits. An Oxford-led team encoded a Z2 lattice
  gauge theory and, in a two-ion loop whose flux was held in two entangled
  qubits, saw a simulated particle's tunnelling suppressed by Aharonov–Bohm
  interference. A Maryland/Duke-led team simulated quench dynamics of a
  (1+1)-dimensional Yukawa model with three ions and observed high boson
  occupations that a qubit encoding would need several extra qubits to hold. An
  independent News & Views accompanied the papers. Both results are
  peer-reviewed but small: the Oxford loop is easy to solve classically, and the
  Maryland team says only that it approaches the hard regime."
sources:
  - title: Aharonov–Bohm interference in a Z2 lattice gauge theory on a hybrid
      qubit–oscillator quantum computer (Nature Physics)
    url: https://www.nature.com/articles/s41567-026-03400-6
  - title: Quantum field theory dynamics on a spin–phonon quantum computer (Nature
      Physics)
    url: https://www.nature.com/articles/s41567-026-03402-4
  - title: Quantum field theory dynamics in trapped ions (Nature Physics News & Views)
    url: https://www.nature.com/articles/s41567-026-03401-5
  - title: Hybrid quantum computer observes foundational quantum effect in a new
      setting (University of Oxford Department of Physics)
    url: https://www.physics.ox.ac.uk/news/hybrid-quantum-computer-observes-foundational-quantum-effect-new-setting
  - title: "Two paths, one flux: Trapped ions simulate Aharonov–Bohm interference in
      a lattice gauge theory (Phys.org)"
    url: https://phys.org/news/2026-11-paths-flux-ions-simulate-aharonovbohm.html
  - title: Observation of quantum-field-theory dynamics on a spin-phonon quantum
      computer (arXiv:2509.11477)
    url: https://arxiv.org/abs/2509.11477
  - title: Observation of quantum-field-theory dynamics on a spin-phonon quantum
      computer, DAMOP 2026 abstract (QuICS, University of Maryland)
    url: https://www.quics.umd.edu/publications/observation-quantum-field-theory-dynamics-spin-phonon-quantum-computer-0
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Two labs use the wobble of trapped ions to simulate the fields of particle physics

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Two research teams, one led from Oxford and one from Maryland and Duke, built small quantum simulators out of a few electrically charged atoms held in traps [S1][S2]. Each atom stores a qubit, and the way the atoms jiggle back and forth is used as a second kind of memory that can hold the "fields" physicists use to describe forces and particles [S1][S2][S3]. The Oxford team showed a simulated particle getting stopped in its tracks by a magnetic-like effect it never touched, and the Maryland team simulated a simple model of how nuclear particles trade pions [S1][S2][S5]. This matters because it could let future quantum computers model particle physics with far fewer qubits [S6]. The big catch: both experiments are still tiny, and ordinary computers can still check every result [S2][S5].

## Key Findings

- **Same-day, independent papers.** On 25 September 2026 *Nature Physics* published both experiments together with a News & Views by Pan-Yu Hou of Tsinghua University, who was not an author of either paper [S1][S2][S3]. The Oxford department says the two groups developed their approaches independently and only coordinated when submitting [S4].
- **Oxford: a gauge theory with matter included.** Using strontium ions, the team let each ion's internal state (a qubit) stand for the field on a link and the ions' vibrations stand for matter particles [S1][S5]. On a single link they saw a particle hop back and forth while the field line switched on and off with it, as the Z2 version of Gauss's law requires [S1][S5].
- **Oxford: Aharonov–Bohm interference in a loop.** With two ions they built a loop with two paths. When the two link qubits were entangled to represent zero flux, the particle tunnelled freely (about twice as fast as on one link); when they represented a flux, the two paths cancelled and tunnelling was suppressed [S1][S4][S5]. Simulations that included measured noise, mainly heating of the vibrations, matched the data, although one rate was adjusted by 12% to fit the timing [S1].
- **Maryland/Duke: a toy nucleon–pion model.** Using a chain of ytterbium ions, with three ions for lattices of two and four sites, the second team simulated how a (1+1)-dimensional Yukawa model evolves after a sudden change, putting the fermions in qubits and the pion-like bosons in the ions' motion [S2][S6][S7]. The bosons reached high occupations; the preprint says storing one of those modes in ordinary qubits would have needed a cutoff above 8, or at least four extra qubits for that mode alone [S6].
- **Fewer qubits, no truncation.** Keeping bosons in motion rather than in qubits removes the truncation error of a qubit encoding and, for this model, cuts the qubit count from roughly N + N log Λ to roughly N [S2][S6].

**What is established:** two peer-reviewed, independent demonstrations of the hybrid qubit-plus-vibration approach on small models [S1][S2][S3]. **What is not:** any calculation beyond the reach of classical computers, or an independent repeat of either specific result [S2][S5][S6].

## How It Works

1. **Two memories in one ion.** A trapped ion has internal energy levels, used as a qubit, and it also vibrates in the trap. Normally the vibrations are cooled and used only to link qubits; here they are treated as quantum oscillators that can hold any number of vibration quanta (phonons) [S1][S5][S6].
2. **Mapping fields onto the hardware.** In the Oxford experiment a phonon in a vibration mode is a matter particle, and the qubit on a link records whether a field line is present [S1][S5]. In the Maryland/Duke experiment the qubits hold fermion sites and the shared vibration modes hold the boson field [S6].
3. **Lasers make the rules.** Laser pulses push the ions in ways that depend on the qubit state, so a particle can only hop if the field on that link flips at the same time, which is how the theory's rules get built in [S1][S5]. The Maryland/Duke team instead breaks the evolution into many short gate steps that mix qubit and phonon operations [S6].
4. **Flux stored in entanglement.** Oxford could not apply a fixed background flux with its hardware, so it encoded the flux in an entangled state of the two link qubits, which made the flux itself part of the quantum dynamics [S4].

## Implications

Simulating how particles and force fields evolve in real time is one of the problems physicists hope quantum computers will eventually handle better than classical machines [S1][S2]. These papers show one route that saves hardware: instead of spending many qubits to approximate each boson field, use motion the ions already have [S2][S6]. The Oxford team proposes scaling to larger lattices by addressing individual ions in a longer chain, and Saner says even a modest increase in lattice size could become very hard to solve classically [S1][S5]. The Oxford team also describes the suppressed tunnelling on a link as a precursor to confinement, the effect that keeps quarks bound, but that is a framing of a two-site result, not a demonstration of confinement [S5]. The vibrations add their own problems, such as heating, mode crowding in long chains and laser dephasing at high excitation, which the authors list themselves [S1][S6].

## Open Questions

- Can either approach scale to lattices big enough that classical simulation genuinely fails, while keeping heating and dephasing under control [S1][S5][S6]?
- Will other groups or platforms repeat these specific results, rather than only related ones [S3]?
- Do the published *Nature Physics* versions differ in any numbers from the preprint and talk abstract used here for the Maryland/Duke details [S2][S6][S7]?
- Can the Oxford method extend from Z2 to gauge fields with more values, as the first author suggests [S5]?

## References

1. [S1] S. Saner, O. Băzăvan, D. J. Webb, G. Araneda, C. J. Ballance, R. Srinivas, D. M. Lucas & A. Bermúdez. Aharonov–Bohm interference in a Z2 lattice gauge theory on a hybrid qubit–oscillator quantum computer. *Nature Physics* 22, 1565–1571 (published 25 Sep 2026). https://www.nature.com/articles/s41567-026-03400-6
2. [S2] A. T. Than, S. V. Kadam, V. Vikramaditya, N. H. Nguyen, X. Liu, Z. Davoudi, A. M. Green & N. M. Linke. Quantum field theory dynamics on a spin–phonon quantum computer. *Nature Physics* (published 25 Sep 2026). https://www.nature.com/articles/s41567-026-03402-4
3. [S3] Pan-Yu Hou. Quantum field theory dynamics in trapped ions (News & Views). *Nature Physics* 22, 1526–1527 (25 Sep 2026). https://www.nature.com/articles/s41567-026-03401-5
4. [S4] University of Oxford Department of Physics. Hybrid quantum computer observes foundational quantum effect in a new setting (25 Sep 2026). https://www.physics.ox.ac.uk/news/hybrid-quantum-computer-observes-foundational-quantum-effect-new-setting
5. [S5] Tejasri Gururaj. Two paths, one flux: Trapped ions simulate Aharonov–Bohm interference in a lattice gauge theory. Phys.org (7 Nov 2026). https://phys.org/news/2026-11-paths-flux-ions-simulate-aharonovbohm.html
6. [S6] A. T. Than et al. Observation of quantum-field-theory dynamics on a spin-phonon quantum computer. arXiv:2509.11477 [quant-ph] (v1 14 Sep 2025). https://arxiv.org/abs/2509.11477
7. [S7] QuICS, University of Maryland. Observation of quantum-field-theory dynamics on a spin-phonon quantum computer (APS DAMOP 2026 abstract record, June 2026). https://www.quics.umd.edu/publications/observation-quantum-field-theory-dynamics-spin-phonon-quantum-computer-0
