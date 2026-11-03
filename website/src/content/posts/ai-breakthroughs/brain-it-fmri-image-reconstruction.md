---
title: An AI rebuilds the pictures people saw from brain scans, and needs one
  hour of scanning instead of 40
description: Weizmann Institute researchers built Brain-IT, a model that turns
  fMRI brain scans into close copies of the images a person was looking at. It
  beats earlier methods on most standard scores and, they report, matches older
  tools with just one hour of a new person's scans. It was tested on one public
  dataset of eight volunteers who were looking at photos, not imagining them.
pubDate: 2026-11-03
draft: false
demo: false
category: Neuroscience AI
tags:
  - brain-decoding
  - fmri
  - diffusion-models
  - neuroscience
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
abstract: "Brain-IT, from Michal Irani's group at the Weizmann Institute of
  Science and published at ICLR 2026, reconstructs the images people viewed from
  their fMRI brain scans. A Brain Interaction Transformer groups brain voxels
  with similar roles into clusters shared by all subjects and maps them to local
  image features: semantic features that steer a diffusion model and structural
  features that set the rough layout. On the public Natural Scenes Dataset (8
  volunteers, about 40 hours of 7-Tesla scans each), it beats ten earlier
  methods on 7 of 8 standard metrics, and the authors report that with one hour
  of data from a new person it is comparable to earlier methods trained on 40
  hours. MIT Technology Review covered the work on 1 October 2026 with comments
  from outside neuroscientists, who called it impressive and raised
  mental-privacy concerns. The results are self-reported benchmarks on one
  dataset of people looking at photos; nothing here reads imagined thoughts or
  dreams."
sources:
  - title: "Brain-IT: Image Reconstruction from fMRI via Brain-Interaction
      Transformer (arXiv, v2)"
    url: https://arxiv.org/abs/2510.25976
  - title: Brain-IT (ICLR 2026 proceedings page)
    url: https://proceedings.iclr.cc/paper_files/paper/2026/hash/c9fd326fd03eaf52f672c31cde9658af-Abstract-Conference.html
  - title: An AI "mind-reading" tool can reconstruct what you're looking at from a
      brain scan (MIT Technology Review)
    url: https://www.technologyreview.com/2026/10/01/1145588/ai-mind-reading-reconstructs-what-youre-looking-at/
  - title: "The Wisdom of a Crowd of Brains: A Universal Brain Encoder (CCN 2026
      poster)"
    url: https://2026.ccneuro.org/poster/?id=ciC5UUZ2Fs
  - title: WeizmannVision/brainit-fmri (GitHub code repository)
    url: https://github.com/WeizmannVision/brainit-fmri
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# An AI rebuilds the pictures people saw from brain scans, and needs one hour of scanning instead of 40

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Scientists at the Weizmann Institute in Israel built an AI that looks at a person's brain scan and redraws the photo that person was looking at in the scanner [S1][S3]. Its pictures match the real photos more closely than earlier tools on most of the usual tests, and it can learn a new person's brain from about one hour of scans instead of about 40 [S1]. That could make this kind of brain research much cheaper, and one day might help people who cannot speak to communicate [S3]. The biggest catch: it was only tested on one public set of scans from eight volunteers looking at photos, the scores come from the authors themselves, and it does not read thoughts, memories or dreams [S1][S3].

## Key Findings

Researchers have tried for years to turn brain scans back into the pictures a person was seeing. Modern versions use functional MRI (fMRI), which tracks blood flow in the brain, plus image-generating AI. The usual problem is that the generated pictures look realistic but drift from what the person actually saw: wrong position, wrong colours, sometimes the wrong objects [S1]. A team led by Michal Irani at the Weizmann Institute of Science, with first authors Roman Beliy and Amit Zalcher, presented a method called Brain-IT at the ICLR 2026 machine-learning conference [S1][S2].

- **Closer copies of what people saw.** On the Natural Scenes Dataset, a public collection of 7-Tesla fMRI scans from 8 volunteers who each viewed about 9,000 photos, Brain-IT scored better than ten earlier methods on 7 of 8 standard image-similarity measures, averaged over the four volunteers most studies use [S1]. On the eighth measure (CLIP), one earlier method scored higher [S1].
- **Much less scanning for a new person.** Earlier tools typically need around 40 hours of scans from each person. The authors report that with one hour of data from a new person, Brain-IT is comparable to earlier methods trained on the full 40 hours, and clearly better than two rival methods given the same hour; they show recognisable reconstructions from as little as 15 minutes [S1]. Tommy Sprague, a UC Santa Barbara neuroscientist not involved in the work, told MIT Technology Review that "none of us can afford 40 hours of imaging for a new subject," at roughly $600 to $1,000 an hour [S3].
- **Peer-reviewed and public.** The paper appears in the ICLR 2026 proceedings, and code for it and a companion "universal brain encoder" is posted on GitHub [S2][S5].
- **Outside reaction is positive, with worries.** Sprague called the results "very impressive" but warned about tools that could extract what people are thinking. Judy Illes, a neuroethicist at the University of British Columbia, called the work "magnificent" [S3].

**What is established:** the method passed conference peer review and its benchmark numbers are reported in detail [S1][S2]. No independent group has yet re-run it and published the results.

## How It Works

1. **Brain clusters instead of one big summary.** An fMRI scan is split into tiny 3D cubes of brain called voxels, about 40,000 of them in visual areas here [S1]. Most earlier methods squeeze all voxels into one summary before predicting an image. Brain-IT instead groups voxels that play similar roles into clusters that are shared across all volunteers, and turns each cluster into a "brain token" [S1].
2. **A transformer that lets clusters talk.** The Brain Interaction Transformer lets these brain tokens exchange information and then maps them to features for specific patches of the image, so information flows from brain regions to the parts of the picture they relate to [S1].
3. **Two branches, layout and meaning.** One branch predicts low-level structure (rough layout and colour), which is turned into a coarse image. The other predicts high-level meaning (what objects are there). The coarse image is the starting point for a diffusion model, an image generator, and the meaning features steer it [S1].
4. **Extra training data from a predicted brain.** Paired scans are scarce, so the team used a companion model, the Universal Brain Encoder, which predicts how a brain would respond to an image. That let them add about 120,000 photos that nobody actually viewed in a scanner, which improved most scores [S1][S4]. The companion model was presented at the CCN 2026 neuroscience conference [S3][S4].
5. **Learning a new brain quickly.** The cluster descriptions and the transformer are shared by all volunteers, and each voxel also gets its own learned description of its role. Because so much is shared, the model can be adapted to a new person with little data, and the authors say the extra predicted-brain photos matter most in that case [S1].

## Implications

If it holds up, the biggest practical effect is cost: cutting the scan time needed per new volunteer from about 40 hours to about one would make visual-brain experiments far cheaper, which is what Sprague highlighted [S1][S3]. The authors also suggest the transformer could help map which brain regions handle which kinds of information [S1]. Irani told MIT Technology Review she hopes to move to video, audio, imagined images and dreams, and to help locked-in patients communicate; those are her goals, not results in the paper [S3].

- **Seeing, not imagining.** Every result is for photos people were actually looking at. Reconstructing imagined pictures or dreams has not been shown [S1][S3].
- **One dataset, eight people.** The benchmark numbers come from the Natural Scenes Dataset, with a small out-of-distribution check on a related synthetic image set [S1]. Results in other scanners, labs and people are not shown in this paper.
- **Self-reported scores.** The comparisons were run by the authors. The "comparable at one hour" claim means similar numbers on standard metrics, not identical images, and the paper shows failure cases where the meaning or details are wrong [S1][S3].
- **A big, slow machine.** It relies on a 7-Tesla research scanner and a willing volunteer lying still; nobody is decoding thoughts covertly with this [S1][S3].
- **Privacy questions are real.** Outside experts quoted by MIT Technology Review, including Marcello Ienca of the Technical University of Munich, warned that similar decoding from cheaper EEG headsets could one day be misused, for example by companies [S3].

**Impact:** medium. A clear step up in faithfulness and data efficiency within a fast-moving research field, but still a lab tool limited to seen images. **Confidence:** medium. The paper is peer-reviewed, detailed and the code is public, and outside scientists commented, but the benchmark results are the authors' own on a single dataset and have not been independently replicated. These are separate judgments.

## Open Questions

- Will independent groups using the released code reproduce the benchmark scores [S1][S5]?
- Does the one-hour transfer hold for people, scanners and labs outside the Natural Scenes Dataset [S1]?
- Can the approach reconstruct imagined images, video or dreams, as Irani hopes [S3]?
- How much of each picture comes from the brain signal and how much from the image generator's own guesses, especially for failure cases [S1]?
- What rules on consent and mental privacy should apply as decoding moves toward cheaper devices such as EEG [S3]?

## References

1. [S1] Beliy, R., Zalcher, A., Kogman, J., Wasserman, N. and Irani, M. "Brain-IT: Image Reconstruction from fMRI via Brain-Interaction Transformer." arXiv:2510.25976 (v1 29 Oct 2025, v2 1 Mar 2026; published as a conference paper at ICLR 2026). https://arxiv.org/abs/2510.25976
2. [S2] ICLR 2026 proceedings page for Brain-IT. https://proceedings.iclr.cc/paper_files/paper/2026/hash/c9fd326fd03eaf52f672c31cde9658af-Abstract-Conference.html
3. [S3] Hamzelou, J. "An AI 'mind-reading' tool can reconstruct what you're looking at from a brain scan." MIT Technology Review, 1 October 2026 (updated 8 October 2026). https://www.technologyreview.com/2026/10/01/1145588/ai-mind-reading-reconstructs-what-youre-looking-at/
4. [S4] Beliy, R., Wasserman, N., Zalcher, A. and Irani, M. "The Wisdom of a Crowd of Brains: A Universal Brain Encoder." CCN 2026 poster and contributed talk. https://2026.ccneuro.org/poster/?id=ciC5UUZ2Fs
5. [S5] WeizmannVision/brainit-fmri, code repository for Brain-IT and the Universal Brain Encoder (GitHub). https://github.com/WeizmannVision/brainit-fmri
