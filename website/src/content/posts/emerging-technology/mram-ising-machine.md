---
title: A magnetic-memory chip doubles as a fast, low-energy optimizer, but its
  record claims rest on small tests
description: Beihang University researchers turned a 96,000-junction MRAM chip
  into an Ising machine with sub-nanosecond spin updates and ran chip-routing
  problems on it. The efficiency numbers are real measurements of small
  benchmarks plus projections, and the coupling logic still runs off-chip.
pubDate: 2026-10-28
draft: false
demo: false
category: Computing
tags:
  - ising-machine
  - spintronics
  - mram
  - optimization
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
abstract: In a Nature Electronics paper published on 22 September 2026, a team
  led by Weisheng Zhao at Beihang University reports an Ising machine built on a
  commercial-style voltage-controlled MRAM chip with 96,000 magnetic tunnel
  junctions. A voltage pulse flips each junction at random with a controllable
  probability in under a nanosecond. The system solved two chip-design problems,
  global routing and layer assignment, and scored 1.92 x 10^5 solutions per
  second per watt on a small 60-node benchmark. The paper is peer-reviewed and
  outside experts at NIST wrote a positive commentary, but nobody has replicated
  it. The spin coupling still runs on an FPGA, and the biggest speed and
  comparison figures are projections or cross-paper estimates.
sources:
  - title: An Ising machine for combinatorial optimization based on sub-nanosecond
      CMOS-integrated magnetoresistive random-access memory (Nature Electronics)
    url: https://www.nature.com/articles/s41928-026-01700-6
  - title: Supplementary Information for the Nature Electronics Ising machine article
    url: https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41928-026-01700-6/MediaObjects/41928_2026_1700_MOESM1_ESM.pdf
  - title: SpinX-Lab/Voltage-controlled-Spintronic-Ising-Machine (GitHub repository)
    url: https://github.com/SpinX-Lab/Voltage-controlled-Spintronic-Ising-Machine
  - title: Latest advance in spin-based computing chip published in Nature
      Electronics (Beihang University news)
    url: https://ev.buaa.edu.cn/info/1177/3304.htm
  - title: MRAM Ising Chip Cuts Chip-Routing Time With 96,000 Spins (Electronics For
      You)
    url: https://www.electronicsforu.com/news/mram-ising-chip-cuts-chip-routing-time-with-96000-spins
  - title: Magnetic memory accelerates combinatorial optimization (Nature
      Electronics News & Views)
    url: https://www.nature.com/articles/s41928-026-01713-1
  - title: Technology with a spin (Nature Electronics editorial)
    url: https://www.nature.com/articles/s41928-026-01734-w
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# A magnetic-memory chip doubles as a fast, low-energy optimizer, but its record claims rest on small tests

Status: Peer-reviewed · AI-assisted reporting, passed the newsroom's automated quality gates (not reviewed by a human editor)

## Key Findings

Many practical problems, such as routing wires on a chip or scheduling deliveries, come down to finding the best arrangement among an astronomically large number of options. Ising machines attack these problems with hardware that behaves like a collection of interacting magnets settling into a low-energy state. A team led by Weisheng Zhao at Beihang University in Beijing, working with Suzhou Inston Technology and Empyrean Technology, built one from a magnetic memory (MRAM) chip. The peer-reviewed paper appeared in *Nature Electronics* on 22 September 2026 [S1].

- **A memory chip as the spin array.** The chip is a 96-kb voltage-controlled MRAM made in a 40-nm CMOS process, with 96,000 magnetic tunnel junctions about 70 nm across. Each junction acts as one "spin" [S1][S4][S7].
- **Fast, tunable randomness.** A voltage pulse flips a junction with a probability the team can set anywhere from 0% to 100% by changing the pulse width. Each update takes 0.3 to 1 ns, at an estimated write energy below 40 femtojoules [S1][S2].
- **Real chip-design workloads.** On the hardware, the system solved two problems from electronic design automation (EDA): global routing and layer assignment [S1][S2].
- **Benchmark efficiency.** On 60-node dense Max-cut problems, a standard test, the team reports 1.92 x 10^5 solutions per second per watt [S1][S2].

**What is established:** the work passed peer review, and spintronics researchers at NIST and George Washington University, who were not involved, wrote an accompanying commentary saying the array solves these problems "quickly and with low energy consumption" [S6]. That is expert commentary, not replication. No other group has reproduced the results.

## How It Works

1. **Problem to magnets.** A host PC rewrites the optimization problem as an Ising model, where each yes/no choice is a spin and the problem's costs and constraints become couplings between spins. For routing, the authors map the problem onto a rectilinear Steiner minimum tree [S1][S2].
2. **Voltage-controlled randomness.** In these junctions a voltage changes how hard the magnet is to flip (the voltage-controlled magnetic anisotropy effect). A short pulse leaves the junction in a random state with a known probability, so each junction acts as a "probabilistic bit" [S1][S2].
3. **The loop.** A PYNQ-Z2 FPGA board (Zynq-7000) reads the spins, calculates how each spin is pulled by its neighbours, and sets the next pulse for each junction. It slowly lowers the "temperature" so the system settles into a good answer [S1][S2]. One iteration takes about 45 ns in total: under 1 ns for the flip, 4 ns to read, and about 40 ns of FPGA logic [S2].
4. **Data.** The source data and plotting notebooks for the main figures are public on GitHub under an MIT licence. The solver code and problem instances are available only on request [S1][S3].

## Implications

Probabilistic computing with magnetic junctions has mostly been shown on a few discrete devices or small arrays. Here the randomness lives inside an MRAM chip built with a standard process, at a scale of tens of thousands of junctions, which points to a path for adding optimization co-processors to ordinary chips [S1][S4][S6]. Running EDA routing problems on the hardware is a step beyond textbook benchmarks, though a modest one [S1][S5].

The headline numbers need care:

- **The 40 fJ figure is a calculation for the write pulse alone.** It is 2.0 V squared over a median 100 kOhm junction for 1 ns. It does not include readout or the coupling logic [S2].
- **The 1.92 x 10^5 solutions/s/W figure is small-scale and partly derived.** It comes from 60-node problems: a time-to-solution of 130.5 microseconds, computed from 1,000 iterations at about 80% success, and 40 mW of FPGA power [S2]. That shows what the system does on small problems. It does not show the 96,000-spin chip solving 96,000-variable problems.
- **The "60 to 18,000 times" better efficiency is the university's claim.** We could not check it, because the comparison table is behind a paywall [S4]. The supplement shows the comparison mixes measured results with simulated ones from other papers, recalculates a published GPU figure, and uses an older D-Wave 2000Q result on a 55-node problem for the quantum comparison [S2].
- **The fully integrated chip does not exist yet.** The faster version, with about 1 ns per iteration and 1 mW, is projected from circuit simulation and earlier papers [S2].

Trade coverage described the chip as cutting chip-routing time [S5], but we found no comparison of routing time against standard EDA tools in the material we could read.

**Impact:** medium. This is a credible hardware step toward fast, low-power optimization accelerators built from standard memory technology, but it is not a working replacement for existing EDA tools. **Confidence:** medium. The device-level results are peer-reviewed and backed by a detailed supplement, public source data and an independent expert commentary. But we could read only the abstract, figure captions and supplement of the paper, only the opening summary of the commentary, and the cross-platform comparisons rely on estimates. These are separate judgments.

## Open Questions

- How do solution quality and speed hold up on routing problems at the scale real chips need, compared with conventional EDA heuristics on a CPU or GPU?
- How much of the advantage survives once the coupling logic moves from the FPGA onto the chip, and does the projected 1 mW system-on-chip actually reach about 1 ns per iteration [S2]?
- The authors say success probability falls as problem size grows [S2]. How quickly does it fall for problems with thousands of variables?
- Will an independent group reproduce the switching statistics and benchmark results, especially now that the source data are public [S3]?
- What caveats, if any, did the NIST commentators raise in the full text that we could not read [S6]?
- Measured endurance is 10^13 write cycles, limited by the test window, not by failures. Multi-year lifetime figures are projections [S2]. How do the junctions wear under continuous annealing?

## References

1. [S1] Li et al. (corresponding author Weisheng Zhao). "An Ising machine for combinatorial optimization based on sub-nanosecond CMOS-integrated magnetoresistive random-access memory." *Nature Electronics* 9, 1140-1151 (published 22 September 2026). https://www.nature.com/articles/s41928-026-01700-6
2. [S2] Supplementary Information for the article above, Supplementary Notes 1-12 (Nature Electronics, 2026). https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41928-026-01700-6/MediaObjects/41928_2026_1700_MOESM1_ESM.pdf
3. [S3] SpinX-Lab, "Voltage-controlled-Spintronic-Ising-Machine" source data repository (GitHub, created 2 July 2026). https://github.com/SpinX-Lab/Voltage-controlled-Spintronic-Ising-Machine
4. [S4] Beihang University, "Latest advance in spin-based computing chip published in Nature Electronics" (15 October 2026). https://ev.buaa.edu.cn/info/1177/3304.htm
5. [S5] Ashok, A. "MRAM Ising Chip Cuts Chip-Routing Time With 96,000 Spins." Electronics For You (23 September 2026). https://www.electronicsforu.com/news/mram-ising-chip-cuts-chip-routing-time-with-96000-spins
6. [S6] Zhang, H., Borders, W. A. & Stiles, M. D. "Magnetic memory accelerates combinatorial optimization." *Nature Electronics* 9, 1081-1082 (News & Views, 22 September 2026). https://www.nature.com/articles/s41928-026-01713-1
7. [S7] "Technology with a spin." *Nature Electronics* (editorial, 23 October 2026). https://www.nature.com/articles/s41928-026-01734-w
