---
title: OpenAI's GPT-6.2 designed proteins that stuck to five targets in the lab,
  but only 35 of 322 worked and specialist tools did key steps
description: OpenAI and its partner Onava report that protein shapes designed by
  GPT-6.2, using only reasoning and code, produced binders against all five
  targets tested. The hit rate was 10.9%, specialised biology models still
  supplied the sequences and filtered the candidates, and the write-up is a
  preprint with no peer review or outside replication.
pubDate: 2026-11-28
draft: false
demo: false
category: AI
tags:
  - protein-design
  - large-language-models
  - openai
  - drug-discovery
  - preprint
author: TKDB Newsroom (AI-assisted)
abstract: "In a preprint posted on 24 November 2026, Masatoshi Uehara, Joy Jiao
  and colleagues on OpenAI's Life Science Team, with the wet-lab company Onava
  AI, report that a pre-release version of GPT-6.2 designed three-dimensional
  protein backbones using only reasoning and general-purpose code, without
  calling specialised protein-design models. Onava made and screened 322 of the
  resulting minibinders against five targets; 35 (10.9%) showed binding, with at
  least one hit for every target and a strongest measured affinity of 1.21
  nanomolar against IL-17A. Redesigns of existing binders and antibodies scored
  higher, up to 70% for one antibody set. Nature's news team reported the same
  day that computational biologists were impressed, while cautioning that this
  is a proof of principle. The catch: specialised models (SolubleMPNN, ESMFold2,
  Boltz-2, OpenDDE) still wrote the amino-acid sequences and filtered which
  designs reached the lab, the models remain far behind ESMFold2 at predicting a
  whole protein structure, OpenAI says some benchmark scores may partly reflect
  memorisation, and nothing here has been peer reviewed or repeated by an
  outside group."
sources:
  - title: GPT-6 models demonstrate intrinsic protein-design capabilities (OpenAI)
    url: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/
  - title: "GPT-6 as a Universal Foundation Model for Protein Biology: Beyond
      Specialized Models (OpenAI preprint, PDF)"
    url: https://cdn.openai.com/pdf/gpt-6-a-universal-foundation-model-for-protein-biology.pdf
  - title: "Watch out, AlphaFold: Claude and ChatGPT's new biology skills wow
      scientists (Nature news)"
    url: https://www.nature.com/articles/d41586-026-03836-z
  - title: "GPT-6.2 Protein Design: What the Lab Binding Data Show (TechRepublic)"
    url: https://www.techrepublic.com/article/news-gpt-6-2-protein-design-lab-binding-results/
  - title: OpenAI says GPT-6 designed proteins that bound their targets in lab tests
      (The Parameter)
    url: https://theparameter.ai/a/gpt-6-protein-design/
  - title: "LLM-bioseq-probe: is protein or DNA sequence data in a language model's
      training data? (Xinming Tu and Leo Tianlai Chen, GitHub)"
    url: https://github.com/XinmingTu/LLM-bioseq-probe
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# OpenAI's GPT-6.2 designed proteins that stuck to five targets in the lab, but only 35 of 322 worked and specialist tools did key steps

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

OpenAI asked its general chatbot model, GPT-6.2, to invent the shapes of small proteins that would stick to five chosen human proteins, using only its reasoning and ordinary code [S1][S2]. A partner company, Onava, built 322 of the resulting proteins and tested them in a lab; 35 of them, about 11%, actually stuck to the target they were aimed at [S1][S2]. That matters because designing such molecules has needed special-purpose biology software, and a model you can instruct in plain language would be easier for scientists to steer [S1][S3]. The biggest catch is that special-purpose software was still doing parts of the job: other AI models wrote the chemical sequences and picked which designs were worth testing, and OpenAI says this does not show its model can do the whole thing alone [S1][S5]. The write-up is also a preprint, so no outside referees have checked it and no other lab has repeated it [S4].

## Key Findings

Protein design software has been dominated by specialised models: RFdiffusion for generating protein backbones, ProteinMPNN for choosing the amino-acid sequence that folds into a given backbone, and AlphaFold or ESMFold for predicting structures [S2]. On 24 November 2026 OpenAI's Life Science Team, with co-authors at Onava AI, posted a preprint arguing that its general-purpose GPT-6 family can do several of those jobs itself, prompted in natural language [S1][S2].

- **Designs that bound, in a real lab.** Given the structures of five targets and a marked attachment site, a pre-release GPT-6.2 wrote code to produce candidate backbones. SolubleMPNN then supplied eight candidate sequences per backbone, and Onava screened the selected designs by biolayer interferometry. Hit rates were 5/92 (5.4%) for PD-L1, 3/93 (3.2%) for IL-7Rα, 1/46 (2.2%) for TrkA, 8/46 (17.4%) for VEGF-A and 18/45 (40.0%) for IL-17A: 35 of 322, or 10.9%, with at least one hit per target [S2][S4][S5]. Follow-up dose-response measurement gave a dissociation constant of 1.21 nanomolar for one IL-17A binder [S2].
- **Redesigns did better than designs from scratch.** Rewriting the sequences of existing binders and antibodies produced far higher hit rates: 75 of 88 (85%) for MDM2, 26 of 42 (62%) for VEGF-A, 8 of 59 (14%) for PD-1, 14 of 107 (13.1%) for unpublished backbones, 128 of 182 (70%) for one IL-4Rα antibody set and 179 of 272 (66%) for redesigned antibody fragments [S4]. Improving a molecule that already works is an easier task than inventing one, so these numbers are not interchangeable with the 10.9% [S4].
- **Specialist models stayed in the pipeline.** Candidates were filtered with ESMFold2, Boltz-2 and OpenDDE; a design had to satisfy the structural criteria in at least two of the three to be eligible for testing [S2]. OpenAI states plainly that the results "do not yet establish that our models can generate de novo minibinders end-to-end in a zero-shot setting without help from specialized models" [S1].
- **A clear weakness remains.** Predicting a whole protein's three-dimensional structure from its sequence is still much worse than specialised tools: mean TM-score rose from 0.16 (GPT-5.6) to 0.26 (GPT-6.2) to 0.38 for OpenAI's latest internal model, against 0.93 for ESMFold2 [S1].
- **Some scores may be memorisation.** On inferring sequences from structures, OpenAI reports recovery rates near 1.0 on experimentally determined structures and says unusually high accuracy "may partly reflect memorization" or artefacts of how the structures were generated [S1][S2]. An independent probe by Xinming Tu (Phylo, University of Washington) and Leo Tianlai Chen (Harvard Medical School), published 16 November 2026, found that the newest Claude models can continue little-studied bacterial protein sequences far above chance, which they read as evidence that sequence databases are in training data; in that same test GPT-6 Astra and GPT-6.1 Sol scored near zero [S6]. That work is about other models, not this result, but it is why the memorisation question is live [S3][S6].
- **Outside reaction: impressed, and cautious.** Nature's news team reported the same day that the OpenAI results, and a separate 16 November blog post on Claude's protein abilities, had set off "a frenzy among computational biologists" [S3]. Martin Pačesa, a structural biologist at the University of Zurich who is not involved, told Nature that "in most cases, a specialist will always perform better than a generalist for a given task" [S3]. Nature reported that some researchers question how much of the apparent skill is understanding and how much is regurgitated training data [S3][S5].

**What is established:** OpenAI and Onava report lab-measured binding for designs whose backbones came from a general-purpose model, and the figures appear in a public preprint with per-target counts [S1][S2]. **What is not:** peer review, independent replication, end-to-end design without specialist tools, and any demonstration that these molecules do something useful in a cell [S1][S4].

## How It Works

1. **Backbone design by prompting.** Instead of running a diffusion model trained on protein structures, the researchers gave GPT-6.2 a target structure, marked where a binder should attach, and specified features such as how many helices or strands it should have. The model wrote and ran ordinary code to produce candidate three-dimensional backbones for the target-binder complex [S1][S2].
2. **Sequence design by a specialist.** A backbone is only a shape; to make a real protein you need the chain of amino acids that folds into it. SolubleMPNN, a specialised inverse-folding model, generated eight candidate sequences per backbone [S2].
3. **Computational filtering.** Each candidate complex was scored by ESMFold2, Boltz-2 and OpenDDE against interface and root-mean-square-deviation criteria (for the de novo minibinders: minimum ipSAE ≥ 0.50, ipTM ≥ 0.5, binder Cα RMSD < 2.2 Å after target alignment). At least two of the three models had to pass a design for it to be eligible, and eligible designs were ranked by mean ipSAE [S2]. This is why the 10.9% figure describes the lab-tested shortlist, not everything GPT-6.2 produced [S4].
4. **Wet-lab screening.** Onava expressed the shortlisted proteins and screened them at 1 micromolar by biolayer interferometry, a method that measures binding by watching how light reflected from a sensor tip shifts as molecules attach. Designs scored as binders went on to multi-concentration measurements for affinity [S2].
5. **Inverse folding as a separate task.** In other experiments the model was given existing backbones, including non-public target-binder structures and therapeutic antibodies, and asked to write new sequences for them. The redesigned sequences differed substantially from the originals, with median sequence differences of 50% for VEGF-A, 43% for MDM2 and 15% for PD-1, which the authors treat as evidence against simple copying [S2][S4].

## Implications

If a general-purpose model can stand in for several specialised tools, the practical gain is steerability rather than raw accuracy: a researcher can change the design objective by changing the prompt instead of modifying software or retraining a model, which is the central claim of the preprint [S2]. OpenAI's stated goal is for scientists to describe a molecule in plain language and get candidates to test [S1][S3].

For now the honest reading is narrower. GPT-6.2's backbones produced binders at a lower rate than the original RFdiffusion study reported, and OpenAI notes hit rates depend heavily on filtering strictness and on how binding is defined, so the comparison is not clean [S1][S5]. A biotech team would have to test both approaches on the same task before preferring one [S4]. Binding is also only the first requirement for a drug: specificity, stability, biological activity, manufacturability, safety and efficacy were not established [S1][S5]. OpenAI flags biosecurity as a risk of the same capability and says its Preparedness Framework governs how it assesses that [S1].

## Open Questions

- Will peer review or an outside lab reproduce the 10.9% hit rate with its own targets and its own filtering [S3][S4]?
- How much of the performance survives when specialised models are removed from the sequence-design and filtering steps, which OpenAI says it has not yet shown [S1]?
- How much of the apparent protein skill is reasoning and how much is memorised sequence and structure data, a question raised both by OpenAI's own caveat and by the independent probe of other models [S1][S3][S6]?
- Do any of these binders do something in a cell, such as blocking a signal or killing a target cell, rather than merely sticking [S1]?
- Are the higher antibody-redesign hit rates a fair test, given that they start from molecules that already bind [S4]?

## References

1. [S1] OpenAI. "GPT-6 models demonstrate intrinsic protein-design capabilities." OpenAI (24 November 2026). https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/
2. [S2] Uehara, M., Zhou, E., Park, J., Griffiths, M., Clyde, A., Shringarpure, S., Yuan, Y., Rao, K., Bushuiev, A., Yu, M., Collins, K. M., Hendricks, J., Sangkhapreecha, P., Chu, L.-S., Bachas, S. & Jiao, J. "GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models." Preprint, OpenAI Life Science Team and Onava AI (24 November 2026). https://cdn.openai.com/pdf/gpt-6-a-universal-foundation-model-for-protein-biology.pdf
3. [S3] Nature news. "Watch out, AlphaFold: Claude and ChatGPT's new biology skills wow scientists." Nature (24 November 2026). doi:10.1038/d41586-026-03836-z. https://www.nature.com/articles/d41586-026-03836-z
4. [S4] TechRepublic. "GPT-6.2 Protein Design: What the Lab Binding Data Show." TechRepublic (November 2026). https://www.techrepublic.com/article/news-gpt-6-2-protein-design-lab-binding-results/
5. [S5] The Parameter. "OpenAI says GPT-6 designed proteins that bound their targets in lab tests." The Parameter (24 November 2026). https://theparameter.ai/a/gpt-6-protein-design/
6. [S6] Tu, X. & Chen, L. T. "LLM-bioseq-probe: is protein or DNA sequence data in a language model's training data?" GitHub repository README (created 16 November 2026). https://github.com/XinmingTu/LLM-bioseq-probe
