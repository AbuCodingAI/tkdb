---
title: AI agents run a DNA wet lab from a typed prompt, with humans mostly
  restocking reagents
description: Shanghai Jiao Tong University's AutoDNA coordinates more than 20
  lab instruments with multi-agent AI, matching expert DNA-synthesis yields and
  recovering DNA-stored data exactly in Nature-reported demos. Outside experts
  call it a step toward self-driving wet labs, but humans still choose tasks and
  restock, and no other lab has replicated it.
pubDate: 2026-11-07
draft: false
demo: false
category: Autonomous Labs
tags:
  - autonomous-labs
  - multi-agent-ai
  - synthetic-biology
  - dna-data-storage
  - peer-reviewed
author: TKDB Newsroom (AI-assisted)
abstract: "On 4 November 2026 Nature published a peer-reviewed paper on AutoDNA,
  an AI-native biomolecular laboratory at Shanghai Jiao Tong University.
  Multi-agent software plans and runs nucleic-acid experiments across more than
  20 instrument types and more than 11,000 hardware steps, with people mainly
  replenishing reagents and maintaining hardware. The authors report matching
  expert-optimized enzymatic DNA-synthesis yields, 3.2-fold faster concurrent
  protocol runs, exact recovery of digital content from a DNA data-storage
  cycle, and identification of a KRAS G13D mutation in a clinical sample. Nature
  News quotes an outside engineer praising the autonomy; a Stanford News & Views
  piece frames it as closing the propose-vs-do gap. Limits: single-lab demos,
  humans still set tasks and stock the bench, and no independent replication or
  clinical clearance."
sources:
  - title: An AI-native experimental laboratory for autonomous biomolecular
      operations (Nature)
    url: https://www.nature.com/articles/s41586-026-11228-6
  - title: AI agents run this automated biology lab that sequences DNA and more
      (Nature News)
    url: https://www.nature.com/articles/d41586-026-03552-8
  - title: Shanghai Jiao Tong University's AutoDNA lab lets AI agents run DNA
      experiments (Crypto Briefing)
    url: https://cryptobriefing.com/shanghai-jiao-tong-autodna-ai-lab/
  - title: An AI-native experimental laboratory for autonomous biomolecular
      engineering (arXiv preprint)
    url: https://arxiv.org/abs/2507.02379
  - title: AI agents enter the 'wet lab' (Nature News & Views)
    url: https://www.nature.com/articles/d41586-026-03270-1
  - title: Shanghai Jiao Tong University AI Native Lab's AutoDNA Published in Nature
      (36Kr)
    url: https://eu.36kr.com/en/p/4056341270860929
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# AI agents run a DNA wet lab from a typed prompt, with humans mostly restocking reagents

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Researchers at Shanghai Jiao Tong University built AutoDNA, a lab where AI software plans DNA experiments and robots carry them out on many machines after a person types what they want [S1][S2]. In peer-reviewed demos the system matched skilled humans on making DNA strands, ran overlapping protocols about three times faster, stored a digital message in DNA and read it back exactly, and spotted a cancer-linked DNA change in a clinical sample [S1][S3]. Outside scientists say it is a real step toward “self-driving” wet labs [S2][S5]. The catch: people still choose the jobs, set up the room, and keep topping up chemicals, and no other lab has rebuilt or re-run AutoDNA yet [S3][S5][S6].

## Key Findings

Most “robot scientist” demos still need humans to wire instruments, write the protocol, and decide how to optimize. AutoDNA’s authors argue they co-designed the AI, the chemistry workflows and the hardware so multi-agent software can own planning and execution end to end [S1][S4].

- **Peer-reviewed Nature paper (4 November 2026).** Mingyu Wu, Zhaoguo Wang, Jiabin Wang, Haibo Chen, Chunhai Fan and colleagues at Shanghai Jiao Tong University describe AutoDNA as an AI-native biomolecular engineering laboratory for multi-objective experiments across diverse instruments [S1][S2].
- **Scale of automation.** The published abstract states that AutoDNA autonomously orchestrates more than 20 types of instruments across more than 11,000 hardware steps for synthesis, transcription, amplification and sequencing, while human intervention is limited to hardware maintenance such as reagent and labware replenishment [S1][S2][S3].
- **Four author-reported demos.** AutoDNA matched expert-optimized enzymatic DNA synthesis yields; accelerated concurrent protocol execution by 3.2-fold; completed an end-to-end DNA data-storage cycle with exact recovery of the original digital content; and identified and validated a clinically detected KRAS G13D mutation [S1][S3]. Crypto Briefing, summarizing the paper, gives secondary figures of 11,382 steps and roughly 203 hours for the storage run [S3]; a July 2025 preprint from the same group used lower step/hour counts for an earlier version of that demo [S4].
- **Outside commentary, not replication.** Nature News quotes Milad Abolhasani (North Carolina State University), who is not an author, praising the degree of autonomy and the ability to incorporate diverse equipment: “The future of science is going to involve a lot of autonomous labs” [S2]. Stanford’s James Zou, in a News & Views, frames the work as showing how AI can begin to close the gap between proposing a wet-lab experiment and doing it [S5][S6].

**What is established:** a peer-reviewed description of a working multi-agent wet lab with author-reported benchmarks [S1]. **What is not:** independent rebuilds, regulatory clearance for clinical testing, or hands-off science without humans choosing tasks and restocking [S3][S5][S6].

## How It Works

1. **Natural-language request in, agents plan.** A user states an experimental goal in plain language. Specialized LLM-powered agents in a chemical-planning module and a hardware-execution module talk to each other, draft procedures, write instrument-control code, and iterate [S1][S2][S4].
2. **Robots move samples across many machines.** Physical robotic arms shuttle material among more than 20 instrument types so synthesis, amplification, sequencing and related steps can chain without a human at each station [S1][S2][S3].
3. **Closed-loop optimize, don’t just replay a script.** Unlike add-on AI bolted onto a fixed workflow, the authors emphasize co-design so agents can hypothesize why a yield is low, change conditions, and re-run—matching expert-level enzymatic synthesis performance in their tests [S1][S4].
4. **Humans stay for logistics.** Reagents, labware and hardware service remain human jobs [S1][S2]. Coverage of Zou’s News & Views also stresses that people still select experimental tasks and configure the physical platform before a run [S5][S6].
5. **Example demos.** Nature News notes a DNA data-storage trial that encoded the quote “Intelligence is the ability to adapt to change,” and a mutation-detection task on a clinical DNA sample (KRAS G13D) [S1][S2][S3].

## Implications

If the architecture travels beyond one Chinese campus lab, non-specialists could request nucleic-acid workflows the way they now request cloud compute—the authors’ “science-as-a-service” framing [S1][S6]. DNA data storage and routine mutation checks are the concrete near-term hooks the paper highlights [S1][S3]. Abolhasani’s comment situates AutoDNA in a wider wave of autonomous labs, especially as systems learn to absorb heterogeneous equipment rather than one fixed robot cell [S2].

Keep the distance between demo and deployment. Crypto Briefing notes the KRAS result is not a claim of hospital-ready genetic testing [S3]. Exact recovery of one encoded message after thousands of steps is impressive engineering, not proof that arbitrary digital archives are cheap or error-free at scale [S1][S3][S4]. And when agents design their own protocols, outside groups will need audit trails before trusting days of machine time and expensive reagents [S3].

## Open Questions

- Will another laboratory rebuild AutoDNA-class orchestration and match the reported yields, 3.2× concurrency gain, storage recovery and KRAS call [S1][S3]?
- How often do agent-written protocols waste reagents or fail silently, and what verification gates catch that before a multi-day run [S3][S4]?
- Can the same co-design approach leave nucleic acids for broader biomaterials discovery, as the authors hope [S1][S4]?
- Where is the line between “maintenance-only” human presence and meaningful scientific oversight when task selection and platform setup stay human [S5][S6]?

## References

1. [S1] Wu, M. et al. An AI-native experimental laboratory for autonomous biomolecular operations. *Nature* (2026). https://www.nature.com/articles/s41586-026-11228-6
2. [S2] Ledford, H. AI agents run this automated biology lab that sequences DNA and more. *Nature* News (2026). https://www.nature.com/articles/d41586-026-03552-8
3. [S3] Almada Lopez, D. Shanghai Jiao Tong University's AutoDNA lab lets AI agents run DNA experiments. Crypto Briefing (6 Nov 2026). https://cryptobriefing.com/shanghai-jiao-tong-autodna-ai-lab/
4. [S4] Wu, M. et al. An AI-native experimental laboratory for autonomous biomolecular engineering. arXiv:2507.02379. https://arxiv.org/abs/2507.02379
5. [S5] Zou, J. AI agents enter the ‘wet lab’. *Nature* News & Views (2026). https://www.nature.com/articles/d41586-026-03270-1
6. [S6] Shanghai Jiao Tong University AI Native Lab’s AutoDNA Published in Nature. 36Kr (5 Nov 2026). https://eu.36kr.com/en/p/4056341270860929
