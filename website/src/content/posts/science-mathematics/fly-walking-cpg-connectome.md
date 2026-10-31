---
title: Simulating the fly's wiring diagram points to a three-neuron walking
  rhythm circuit
description: A Nature study ran simulations on fruit-fly nerve-cord connectomes
  and found a small circuit that can turn a steady 'walk' command into rhythmic
  leg signals. An independent lab's preprint finds overlapping neurons, but the
  circuit has not yet been tested directly in living flies.
pubDate: 2026-10-29
category: Neuroscience
tags:
  - neuroscience
  - connectomics
  - drosophila
  - locomotion
  - central pattern generator
  - computational modeling
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: "University of Washington researchers simulated activity in four
  fruit-fly nerve-cord connectomes and identified a putative central pattern
  generator for walking: two excitatory and one inhibitory interneuron that, in
  simulation, convert a steady command from the DNg100 descending neuron into
  rhythmic leg motor output. Experiments in headless flies confirmed two
  predictions about the descending inputs. An independent Max Planck Florida
  preprint finds an overlapping but not identical set of neurons. The
  interneurons themselves have not yet been silenced or recorded in living
  flies."
sources:
  - title: Connectome simulations identify a central pattern generator for fly
      walking (Nature)
    url: https://www.nature.com/articles/s41586-026-11195-y
  - title: Supplementary Information (Nature)
    url: https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-026-11195-y/MediaObjects/41586_2026_11195_MOESM1_ESM.pdf
  - title: Preprint version 2 on PubMed Central
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13142387/
  - title: smpuglie/Pugliese_2026 code repository
    url: https://github.com/smpuglie/Pugliese_2026
  - title: Sapkal et al., Central versus peripheral neural control of a coordinated
      walking pattern in Drosophila (bioRxiv)
    url: https://doi.org/10.64898/2026.04.29.721658
  - title: Long-sought walking circuit found in fruit flies (The Transmitter)
    url: https://www.thetransmitter.org/systems-neuroscience/long-sought-walking-circuit-found-in-fruit-flies/
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Simulating the fly's wiring diagram points to a three-neuron walking rhythm circuit

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## Key Findings

Animals walk using central pattern generators (CPGs): networks in the spinal cord, or in insects the ventral nerve cord, that turn a steady "go" signal from the brain into the alternating rhythm of each leg. Their cellular makeup has been hard to pin down in any limbed animal. A team led by John Tuthill and Bingni Brunton at the University of Washington, with the Allen Institute, now reports a candidate walking CPG in the fruit fly *Drosophila*. The peer-reviewed paper appeared in *Nature* on 28 October 2026 [S1].

- **Simulating the wiring diagram.** The team turned four published connectomes (complete synapse-level maps) of the fly nerve cord into dynamic network simulations. In the male nerve-cord map alone, the front-leg network had 4,604 neurons and about 3.8 million synapses [S1][S3].
- **A screen for the "walk" command.** Activating each descending neuron from the brain in simulation, the team found DNg100, already known as a command neuron for walking, was the strongest driver of rhythmic leg motor activity [S1][S3].
- **A three-neuron core.** Repeatedly pruning the simulated network while keeping the rhythm left a minimal circuit of two excitatory interneurons and one inhibitory interneuron. In simulation it was necessary and sufficient for motor rhythms in all six legs and in all four connectomes [S1][S3]. The exact inhibitory partner varied between datasets [S3].
- **Two predictions checked in flies.** Stronger optogenetic activation of DNg100 in headless flies on a treadmill raised stepping frequency, as the model predicted. The model also flagged a second descending neuron, DNb08, whose function was unknown; activating it in headless flies produced rhythmic leg movements [S1][S3]. Those movements were more consistent when the legs were unloaded, and the authors suggest DNb08 may serve behaviours other than forward walking, such as leg searching [S2].

**What is established:** the simulations and the two experiments passed peer review. Separately, a team at the Max Planck Florida Institute for Neuroscience, led by Salil Bidaye, used behavioural experiments and connectome tracing to find a five-neuron "CPG-motif" that shares several neuron types with the Washington circuits [S5][S6]. That preprint is not peer-reviewed, and the overlap is partial. Neither study has yet silenced or recorded the core interneurons in a living fly [S3][S6].

## How It Works

1. **From map to model.** Each neuron becomes a simple "rate" unit, and each synapse count becomes a connection strength. Whether a connection excites or inhibits is set from predicted neurotransmitter identity. Because the maps give no cell-by-cell physiology, the team varied biophysical parameters across 1,024 simulation replicates per dataset [S3].
2. **No built-in pacemakers.** None of the model neurons can burst on their own, so any rhythm must come from the network's connections [S3].
3. **The loop.** DNg100 excites the first excitatory interneuron (E1), which excites the second (E2). Both drive the inhibitory interneuron (I1), which after a short delay shuts both down; then the cycle restarts. The simulated rhythm falls roughly in the range of fly stepping, and stronger drive makes it faster [S1][S3].
4. **Robustness checks.** Rhythms survived up to 10% random noise in connection strengths, which the authors say is comparable to measurement error and individual variation in synapse counts [S3]. Across 4,096 pruning screens in the four datasets, 86.0% kept E1, E2 and one of two inhibitory cells [S3].
5. **Code.** The simulation code and notebooks are public on GitHub [S4].

## Implications

If it holds up, this is a concrete parts list for a walking rhythm generator, something researchers have sought for decades in insects and mammals [S6]. Graziana Gatto of University Hospital Cologne, who was not involved, told The Transmitter: "But now we know what neurons are involved. We can finally test all of these theories in a controlled system and start to apply it in mammals." [S6]

The circuit also challenges the textbook "half-centre" picture, in which two groups of neurons inhibit each other like a seesaw. Rune Berg of the University of Copenhagen, also not involved, noted: "There’s no reciprocal inhibition in [the putative fly CPG] network, which is a bit surprising." [S6]

Methodologically, the work suggests a connectome plus simple simulations can generate testable hypotheses about circuit function, even without measured physiology [S1][S3].

The weak spots are real:

- **The core circuit is found in simulation.** The experiments tested the descending inputs (DNg100, DNb08), not the three interneurons. Testing them needs genetic lines that do not yet exist, the authors say [S3].
- **The model is incomplete.** It shows no left-right coordination between legs, and some walking muscles, including the main tibia flexors, were silent or non-rhythmic [S3][S6].
- **The independent support is partial and unreviewed.** The Max Planck preprint shares several neuron types with the model's circuits but also includes neurons the model missed, and its authors speculate the real CPG may include neurons beyond either study's prediction [S5].
- **Inferred physiology.** Signs of connections come from predicted neurotransmitters, and parameters were assigned by sampling, not measurement [S3].

**Impact:** high within neuroscience. A candidate cellular identity for a walking CPG would give labs a direct target for experiments. **Confidence:** medium. The modelling is peer-reviewed, open and robust across four datasets, and an independent lab converges on overlapping neurons, but the central circuit has not been tested in living animals. These are separate judgments.

## Open Questions

- Will silencing E1 or E2 in flies abolish DNg100-driven stepping, as the authors predict [S3]?
- Is the rhythm truly a network oscillator, or do the real neurons have bursting or rebound properties the model left out [S3]?
- Which neurons coordinate the left and right legs, and how does sensory feedback from the legs shape the pattern [S3][S6]?
- How do the Washington and Max Planck candidate circuits relate, given that each includes neurons the other missed [S5][S6]?
- Does any similar circuit logic exist in mammalian spinal cord [S6]?
- The paper's main text is paywalled for us; we relied on the authors' openly available preprint version 2, and the final Nature text may differ in detail [S1][S3].

## References

1. [S1] Pugliese, S. M., Chou, G. M., Abe, E. T. T., Turcu, D., Lancaster, J. K., Tuthill, J. C. & Brunton, B. W. "Connectome simulations identify a central pattern generator for fly walking." *Nature* (published 28 October 2026). https://www.nature.com/articles/s41586-026-11195-y
2. [S2] Supplementary Information for the article above (Nature, 2026). https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-026-11195-y/MediaObjects/41586_2026_11195_MOESM1_ESM.pdf
3. [S3] Pugliese, S. M. et al. "Connectome simulations identify a central pattern generator circuit for fly walking." bioRxiv preprint, version 2 (30 April 2026), via PubMed Central. https://pmc.ncbi.nlm.nih.gov/articles/PMC13142387/
4. [S4] smpuglie/Pugliese_2026, simulation code repository (GitHub). https://github.com/smpuglie/Pugliese_2026
5. [S5] Sapkal, N., Kumar, D. S., Sunke, S., Mancini, N., Pitchford, J., Murakami, K. & Bidaye, S. S. "Central versus peripheral neural control of a coordinated walking pattern in Drosophila." bioRxiv preprint, not peer-reviewed (posted 5 May 2026). https://doi.org/10.64898/2026.04.29.721658
6. [S6] Mesa, N. "Long-sought walking circuit found in fruit flies." The Transmitter (13 May 2026). https://www.thetransmitter.org/systems-neuroscience/long-sought-walking-circuit-found-in-fruit-flies/
