---
title: A piezoelectric mesh grown into lab heart tissue turns beats into
  electricity, but only a trickle
description: UMass Amherst engineers grew human heart cells through an ultrathin
  mesh dotted with tiny piezoelectric generators and harvested energy from each
  beat. The design packs more output into a given volume than earlier implants,
  but so far it makes picojoules per beat, in a dish, using a lead-based
  ceramic.
pubDate: 2026-11-02
draft: false
demo: false
category: Energy
tags:
  - energy-harvesting
  - bioelectronics
  - piezoelectric
  - medical-implants
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
abstract: "In a Science Advances paper published on 7 October 2026, Siqi Wang,
  Jun Yao and colleagues at the University of Massachusetts Amherst built a 7 by
  8 millimetre mesh, a few micrometres thick, carrying 64 tiny generators made
  of the piezoelectric ceramic PZT, and grew human heart-muscle cells (made from
  embryonic stem cells) into and around it. As the lab-grown tissue beat, it
  bent the generators and produced electricity: an estimated 450 to 750
  millivolts and about 7 picojoules per beat per device after a correction for
  measurement losses. Because almost the whole device does useful work, the
  authors report an energy density above 10 microwatts per cubic centimetre,
  more than ten times typical figures for today's single-patch implant
  harvesters. The work is peer-reviewed and an independent bioelectronics
  researcher called it a significant advance, but it has only been tested in a
  thin sheet of tissue in a dish, the absolute output is tiny, the headline
  voltage depends on a modelled correction, and PZT contains lead."
sources:
  - title: A biohybrid mesh harvester for distributed energy harvesting in living
      tissues (Science Advances)
    url: https://www.science.org/doi/10.1126/sciadv.aei5963
  - title: "The Body Electric: UMass Amherst Researchers Integrate Electronics with
      Human Cells (UMass Amherst news release)"
    url: https://www.umass.edu/news/article/body-electric-umass-amherst-researchers-integrate-electronics-human-cells
  - title: Mesh Woven Into Heart Tissue Harvests Energy From Motion (IEEE Spectrum)
    url: https://spectrum.ieee.org/medical-implant-energy-harvesting-mesh
  - title: Bio-hybrid harvester generates electricity from human cells (New Atlas)
    url: https://newatlas.com/electronics/biohybrid-mesh-harvester/
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# A piezoelectric mesh grown into lab heart tissue turns beats into electricity, but only a trickle

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## Key Findings

Pacemakers, deep brain stimulators and other implants run on batteries that are bulky, stiff and eventually need replacing, sometimes with another operation [S3][S4]. One long-studied alternative is to harvest energy from the body's own motion. A team led by Jun Yao at the University of Massachusetts Amherst, with first author Siqi Wang, has tried a new layout: instead of stitching one generator patch onto an organ, they spread many tiny generators through a mesh that living tissue grows into. The peer-reviewed paper appeared in *Science Advances* on 7 October 2026 [S1].

- **A mesh the cells grow through.** The device is a 7 by 8 millimetre net of polymer ribbons about 20 micrometres wide and about 3.7 micrometres thick, roughly 78% open space, carrying 64 small strips of lead zirconate titanate (PZT), a ceramic that makes a voltage when bent [S1][S3]. Human heart-muscle cells derived from embryonic stem cells were seeded on it and grew around the ribbons until the mesh sat inside a thin, beating sheet of tissue [S1].
- **Electricity from each beat.** The tissue beat on its own at about 0.3 to 0.5 times per second, and each beat produced a voltage pulse in the generators [S1].
- **A redesign gave over ten times more voltage.** The first version produced only about 1.4 millivolts as measured (about 9 millivolts after correcting for measurement losses), because the soft tissue barely bent the stiff strips. Thickening the PZT and adding a thicker polymer layer on top of each generator raised the measured output to about 30 to 50 millivolts, which the authors estimate is about 450 to 750 millivolts at the device [S1].
- **High density, tiny totals.** The authors estimate about 7 picojoules per beat per device and an effective energy density above 10 microwatts per cubic centimetre of the whole device, which they say is more than ten times the sub-microwatt figures typical of today's single-patch implant harvesters [S1]. The PZT itself converts energy no more efficiently than usual (about 3.5%); the gain comes from the layout [S1].
- **An outside expert is positive but cautious.** Bozhi Tian, a University of Chicago chemist who works on bioelectronic meshes and is not an author, told IEEE Spectrum the work is "a significant advance in bioelectronic integration," while listing the hard problems still ahead [S3].

**What is established:** the result passed peer review, the full paper is open access, and one independent researcher commented on it. Nobody has replicated it, and it has not been tested in an animal.

## How It Works

1. **Piezoelectric generators.** When a PZT strip is bent, its crystal structure separates charge and a voltage appears across it. Each harvesting device in the mesh is four PZT strips, each about 50 by 470 micrometres, wired in series [S1]. On a test bench, bending single strips gave pulses of about 0.49 volts [S1].
2. **Why a mesh instead of a patch.** A conventional harvester is a stiff, packaged patch attached to the surface of an organ. Most of its volume is substrate and packaging that does not make electricity, and it only feels motion at the surface [S1][S4]. Here the supporting ribbons are only a few micrometres thick and the cells wrap around them, so contraction from inside the tissue bends the generators and very little of the device is dead weight [S1].
3. **Making the tissue bend the strips harder.** In the first design, the estimated strain in the PZT was only about 6.4 millionths, roughly a hundred times less than in the bench test. The fix was local: thicker PZT (900 instead of 350 nanometres) plus a roughly 5 micrometre layer of SU-8 polymer on top of each generator, which moves it away from the neutral bending line. That raised the strain to about 77 millionths, still below the roughly 120 millionths expected if the strips followed the tissue's overall curve [S1].
4. **Correcting the measurement.** The generators are so small that the measuring equipment's own capacitance (about 350 picofarads) soaks up much of the signal. The authors model this to convert the measured 30 to 50 millivolts into an estimated 450 to 750 millivolts at the device, and say extra experiments back the correction [S1].

## Implications

The main idea is architectural: spread energy generation through tissue the way the body spreads its own energy production through cells, rather than relying on one central power source [S1][S2]. Because the mesh is so thin, the team argues layers could be stacked, or the ribbons threaded into tissue in 3D, to scale the power without adding bulk [S1][S2][S3]. Yao told IEEE Spectrum that the output makes it realistic to power medical implants "in a relatively modest volume" [S3]; that is the senior author's projection, not something the paper demonstrates.

Keep the scale in mind. About 7 picojoules per beat at roughly 0.4 beats per second works out to about 3 picowatts per device (our arithmetic from the paper's figures). The authors themselves frame this as useful for low-power, cell-scale "bio-emulated" circuits [S1]. No device was powered in the study [S1][S4].

- **Only in a dish.** All results come from a thin sheet of lab-grown heart tissue. The authors argue thicker 3D tissue in the body should bend the generators more, but that is untested [S1]. The university release notes that Yao is quick to point out the research so far exists only in the lab [S2].
- **The comparison is not like for like.** The "more than ten times" figure compares this in-vitro device's energy per volume with published in-vivo implant harvesters, using the authors' own comparison table [S1].
- **Lead.** PZT contains lead. Tian said the lead-based ceramic raises toxicity concerns and will likely have to be replaced, and New Atlas notes it would need to be safely sealed off from tissue [S3][S4].
- **Long-term survival.** Tian said the hardest problem will be keeping a safe, stable interface for years: "The mesh must survive repeated motion, avoid fibrosis [excess scar tissue], and preserve cardiac mechanics and electrical conduction" [S3].

**Impact:** medium. A clever, general layout that raises energy per volume and fits a broader move toward soft, tissue-integrated electronics, but it is far from powering a real implant. **Confidence:** medium. The paper is peer-reviewed and open, the authors report no competing interests, and an independent expert commented. But it is a single in-vitro study, the voltages rely on a modelled correction, signals were shown from a handful of devices, and nothing has been replicated. These are separate judgments.

## Open Questions

- Will the mesh work inside a living animal's heart, in thick 3D tissue, without disturbing how the heart beats or conducts electricity [S1][S3]?
- How long does it last? The study does not report years of motion, scarring or immune response [S3].
- Can a lead-free piezoelectric material match PZT in this layout [S3][S4]?
- How will the tiny, scattered outputs be collected and stored as usable power? The paper recorded devices one at a time on a single-channel setup and did not combine or store their energy [S1][S3].
- How does the output hold up when the heart beats weakly, for example during illness [S3]?
- Will an independent group reproduce the energy-density result? The authors say all data are in the paper and supplementary materials [S1].

## References

1. [S1] Wang, S., Wang, X., Fu, S., Senger, C., Pfund, J., Jain, M., Katsumata, R. & Yao, J. "A biohybrid mesh harvester for distributed energy harvesting in living tissues." *Science Advances* 12(41), eaei5963 (published 7 October 2026). https://www.science.org/doi/10.1126/sciadv.aei5963
2. [S2] University of Massachusetts Amherst. "The Body Electric: UMass Amherst Researchers Integrate Electronics with Human Cells." News release (7 October 2026). https://www.umass.edu/news/article/body-electric-umass-amherst-researchers-integrate-electronics-human-cells
3. [S3] Gent, E. "Mesh Woven Into Heart Tissue Harvests Energy From Motion." *IEEE Spectrum* (29 October 2026). https://spectrum.ieee.org/medical-implant-energy-harvesting-mesh
4. [S4] Uko, E. "Bio-hybrid harvester generates electricity from human cells." *New Atlas* (23 October 2026). https://newatlas.com/electronics/biohybrid-mesh-harvester/
