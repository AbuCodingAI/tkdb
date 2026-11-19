---
title: A battery-free implant that runs on blood sugar eased diabetes in rats by
  stimulating the vagus nerve when glucose ran high
description: A National University of Singapore-led team reports in Nature a
  glucose-powered implant that senses high blood sugar and responds by
  stimulating the vagus nerve, improving blood-sugar control in rat models of
  type 1 and type 2 diabetes. It is an animal proof of principle from one team,
  with small groups and weeks-long tests.
pubDate: 2026-11-19
tags:
  - bioelectronics
  - medical implants
  - diabetes
  - vagus nerve stimulation
  - glucose fuel cells
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 18 November 2026 Nature published NeuroAxis, an implant from a team
  led by Yuxin Liu at the National University of Singapore with collaborators in
  Nanjing. A glucose fuel cell under the skin powers the device from the body's
  own sugar, and its voltage doubles as a rough blood-sugar reading. Every 30
  minutes the circuit checks that voltage; after five readings in a row above
  0.6 volts it sends three minutes of electrical pulses to the vagus nerve near
  the oesophagus. In rat models of type 2 and (drug-induced) type 1 diabetes,
  rats with a working device had better glucose tolerance, insulin sensitivity
  and blood-sugar levels than rats with an identical device whose stimulation
  wire was disconnected. On day 56 in the type 1 model, mean blood glucose was
  194 mg/dL with stimulation versus 439 mg/dL without (five rats per group). A
  Nature News & Views article calls it a proof of principle. The work is in rats
  only, from one team, and the reviewers questioned the mechanism and the
  long-term practicality of glucose-powered implants.
sources:
  - title: A glucose-powered artificial neuroimmune axis for metabolic control
      (Nature)
    url: https://www.nature.com/articles/s41586-026-11251-7
  - title: Glucose-powered implant brings devices for treating diabetes a step
      closer (Nature News & Views)
    url: https://www.nature.com/articles/d41586-026-03377-5
  - title: Glucose-Powered Implant Stimulates Vagus Nerve and Lowers Blood Sugar in
      Diabetic Rats (XenoSpectrum)
    url: https://xenospectrum.com/en/neuroaxis-glucose-vagus-nerve-stimulation/
  - title: Glucose-Powered Implant Triggered Vagus Stimulation Only When Sugar Rose
      in Rats (NewTqnia)
    url: https://newtqnia.com/en/news/354-glucose-powered-implant-triggered-vagus-stimulation-only-when-sugar-rose-in-rats
  - title: NeuroAxis closed-loop control code (GitHub, WangQian-NUSLiuLab)
    url: https://github.com/WangQian-NUSLiuLab/NeuroAxis
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# A battery-free implant that runs on blood sugar eased diabetes in rats by stimulating the vagus nerve when glucose ran high

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Scientists in Singapore built a small implant that makes its own electricity from the sugar in the body, so it needs no battery [S1]. When sugar levels stay high, it gives a short electrical nudge to the vagus nerve, a nerve that links the brain to the gut and helps calm inflammation [S1][S4]. In rats with two kinds of diabetes, animals with a working implant had clearly better blood sugar than rats carrying the same implant switched off [S1][S3]. That could one day point to diabetes devices that sense and treat on their own, an idea an outside expert called a step closer [S2]. The big catch: this was tested only in small groups of rats for weeks, by one team, and nobody knows yet if it is safe or useful in people [S1][S4].

## Key Findings

- **What was built.** NeuroAxis combines a glucose fuel cell (gold and platinum nanoparticles on porous carbon-nanotube electrodes), a small control circuit and a soft "morphing" electrode wrapped on the vagus nerve at the oesophagus. It runs only on glucose from the body, with no battery or wireless power [S1][S4].
- **Sugar is both fuel and signal.** The fuel cell's voltage rises with glucose. In implanted rats, the authors report a correlation of r = 0.96 between device voltage and blood glucose over 50 measurements [S1][S3]. The control rule, also published as code, is: read the voltage every 30 minutes; after five consecutive readings above 0.6 V, stimulate for 3 minutes; then reset [S1][S5].
- **Type 2 diabetes model (high-fat diet).** Compared with diabetic rats with no device and with rats carrying an identical device whose stimulation output was disconnected, rats with an active device showed better glucose tolerance and insulin sensitivity, lower blood sugar and less systemic inflammation, and the improvement lasted about a month after treatment stopped [S1][S3]. The disconnected-device rats showed no significant improvement, which the authors take as evidence that the fuel cell's own glucose use does not explain the effect [S1][S3].
- **Type 1 diabetes model (drug-induced).** Over eight weeks with five rats per group, mean blood glucose on day 56 was 194.4 mg/dL with stimulation, 439.0 mg/dL with the disconnected device, 440.2 mg/dL in untreated diabetic rats and 130.6 mg/dL in healthy rats, according to the paper's source data [S1][S3]. Treated rats also had more insulin-producing beta-cell mass at week 8 [S1]. Blood sugar improved but did not return to healthy levels.
- **Durability.** The authors report a 90-day implantation in diabetic rats with 62.9% of the fuel cell's power density retained; active devices stopped triggering after several weeks, which they attribute to blood sugar falling toward normal plus slowly declining fuel-cell output [S1].
- **Outside view.** Nature's News & Views describes the work as a proof of principle that the device monitors and controls blood glucose automatically in rat models of diabetes [S2].

## How It Works

The vagus nerve carries signals between the brain and organs such as the gut, liver and pancreas, and it takes part in a reflex that dampens inflammation, which is known to worsen insulin resistance in type 2 diabetes [S1][S4]. Existing nerve stimulators run on batteries or external power and usually fire on a fixed schedule, without knowing the body's metabolic state [S1][S3].

NeuroAxis closes that loop with one part. Its fuel cell sits under the skin of the abdomen and oxidises glucose from the surrounding fluid, charging a capacitor [S1][S3]. Because more glucose means more voltage, the circuit uses the fuel cell's terminal voltage as a crude glucose reading instead of a separate sensor [S1][S4]. When the reading stays high (five half-hourly readings in a row above 0.6 V), the stored energy drives three minutes of biphasic pulses through the electrode on the nerve below the diaphragm [S1][S5]. A Bluetooth Low Energy link sends measurements out for monitoring [S1][S3].

To separate the effect of stimulation from the effect of the fuel cell simply eating up blood sugar, a concern a reviewer raised, the team implanted control devices with a working fuel cell but a disconnected stimulation output [S1]. They also ran pair-feeding (matching food intake), vagus-nerve cutting and receptor-blocking experiments; they conclude that eating less contributes slightly but does not fully explain the benefit, and that an anti-inflammatory pathway is also involved [S1].

## Implications

- **Impact (medium).** If it holds up, a self-powered, self-triggering implant is a new design pattern for "electroceuticals": the body's own chemistry supplies both the energy and the trigger [S1][S4]. The authors suggest it could apply to other links between organs [S1]. It is not an alternative to insulin or current diabetes care [S4].
- **Confidence (medium for the rat results, low for any human use).** The paper went through three rounds of peer review, its peer-review file is public, and the effect sizes against matched sham devices are large [S1]. But groups were about five to seven rats, the type 1 model is drug-induced rather than autoimmune, glucose was not measured blind, and no other group has repeated the work [S1][S3][S4].
- **Practical limits.** One reviewer argued that glucose fuel cells have limited lifetime, that removal after weeks may be needed, and that a wearable glucose monitor linked to an implanted stimulator might be more practical [S1]. Readings every 30 minutes are much slower than current glucose monitors [S1].
- **Commercial interest.** Three authors are named inventors on a National University of Singapore patent application for the device [S1].

## Open Questions

- Will it work, and be safe, in larger animals and eventually people, whose vagus nerve, immune system and glucose swings differ from rats' [S4]?
- How stable is the voltage-to-glucose relationship between individuals and over months, and can the device stop safely when sugar falls [S3][S4]? A reviewer also asked how the fuel cell stays selective for glucose over molecules such as ascorbic acid [S1].
- Which nerve fibres carry the benefit (signals to the brain or to the organs), and how much is reduced eating versus reduced inflammation? Reviewers pressed on this and the authors' answer rests on systemic drug-blocking and nerve-cutting experiments [S1].
- How would it compare with insulin pumps, modern medicines or continuous glucose monitors [S4]?
- Can another laboratory reproduce the results [S3]?

## References

1. [S1] Xiu, W., Wang, Q., Wan, L. et al. "A glucose-powered artificial neuroimmune axis for metabolic control." Nature 659, 647–656 (published 18 November 2026), doi:10.1038/s41586-026-11251-7. Includes Supplementary Information, Source Data and the Peer Review File. https://www.nature.com/articles/s41586-026-11251-7
2. [S2] Imai, J. "Glucose-powered implant brings devices for treating diabetes a step closer." Nature News & Views (18 November 2026), doi:10.1038/d41586-026-03377-5. https://www.nature.com/articles/d41586-026-03377-5
3. [S3] "Glucose-Powered Implant Stimulates Vagus Nerve and Lowers Blood Sugar in Diabetic Rats." XenoSpectrum (18 November 2026). https://xenospectrum.com/en/neuroaxis-glucose-vagus-nerve-stimulation/
4. [S4] "Glucose-Powered Implant Triggered Vagus Stimulation Only When Sugar Rose in Rats." NewTqnia (19 November 2026). https://newtqnia.com/en/news/354-glucose-powered-implant-triggered-vagus-stimulation-only-when-sugar-rose-in-rats
5. [S5] WangQian-NUSLiuLab. "NeuroAxis Closed-Loop Control Overview" (GitHub repository, code cited in the paper). https://github.com/WangQian-NUSLiuLab/NeuroAxis
