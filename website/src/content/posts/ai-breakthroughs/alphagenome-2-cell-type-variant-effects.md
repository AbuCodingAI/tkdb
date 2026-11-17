---
title: DeepMind's AlphaGenome 2 predicts which cell types a DNA variant acts in,
  according to the company's own preprint
description: Google DeepMind released AlphaGenome 2, an AI model that reads a
  million letters of DNA plus a chosen cell type and predicts how small DNA
  changes alter gene activity in that cell. On DeepMind's own tests it roughly
  doubles the share of known causal variants it can flag with high confidence,
  and it re-found a 2024 inflammatory bowel disease mechanism. The paper is a
  company preprint, not peer-reviewed, and no outside group has tested version 2
  yet.
pubDate: 2026-11-16
tags:
  - genomics
  - AI for science
  - Google DeepMind
  - single-cell biology
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 11 November 2026 Google DeepMind announced AlphaGenome 2, a DNA
  sequence model that takes a 1-million-letter stretch of human or mouse DNA
  together with a chosen tissue, cell type or cell state and predicts gene
  activity, chromatin accessibility and other readouts for that condition. It
  was trained on bulk genomics data and single-cell atlases covering more than
  100 million cells. In the company's preprint, the share of fine-mapped
  immune-cell variants it flagged at 90% precision rose from 16% for a
  fine-tuned AlphaGenome 1 to 30%, and it re-identified the variant, distant
  target gene and cell types behind a 2024 inflammatory bowel disease finding.
  The model is available through a free API for non-commercial research. The
  work has not been peer-reviewed, the benchmarks were run by DeepMind, weights
  and code are promised only on final publication, and no independent evaluation
  of version 2 has been reported.
sources:
  - title: AlphaGenome 2 predicts regulatory activity and variant effects across
      cell states (Google DeepMind preprint)
    url: https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/alphagenome-2.pdf
  - title: "AlphaGenome 2: Deciphering how cells read DNA to better understand
      disease (Google DeepMind blog)"
    url: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
  - title: Fine-mapping the ETS2 locus (AlphaGenome documentation tutorial)
    url: https://google-deepmind-alphagenome.readthedocs-hosted.com/colabs/v2/finemapping_ets2.html
  - title: DeepMind's ultra-powerful AI for genome mapping wows scientists (Nature
      news)
    url: https://www.nature.com/articles/d41586-026-03673-0
  - title: DeepMind's AlphaGenome 2 Traces Disease DNA to Specific Cells
      (Implicator.ai)
    url: https://www.implicator.ai/deepmind-alphagenome-2-cell-type-variants/
  - title: A disease-associated gene desert directs macrophage inflammation through
      ETS2 (Nature, 2024)
    url: https://www.nature.com/articles/s41586-024-07501-1
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# DeepMind's AlphaGenome 2 predicts which cell types a DNA variant acts in, according to the company's own preprint

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Most DNA changes linked to disease sit outside genes, in "switch" regions that turn genes up or down, and often only in certain kinds of cells [S1]. Google DeepMind built an AI model, AlphaGenome 2, that reads a long stretch of DNA plus the name of a cell type and guesses how a small DNA change will alter gene activity in that cell [S1][S2]. On the company's own tests it flagged about twice as many known disease-relevant changes with high confidence as the earlier version, and it re-found, in minutes, a bowel-disease mechanism that took one lab about a year and a half of experiments to prove [S1][S4][S5][S6]. That could help scientists decide which DNA changes to test first in the lab [S2][S4]. The big catch: every result so far comes from DeepMind's own preprint, which has not been peer-reviewed, and no outside group has tested this version yet [S4][S5].

## Key Findings

- **A company preprint, not peer-reviewed.** Google DeepMind announced AlphaGenome 2 on 11 November 2026 with a paper posted on its own website by about two dozen DeepMind authors, who declare no competing interests beyond their employment at Google DeepMind [S1][S2]. *Nature*'s news team describes it as a preprint, and Implicator.ai reports that no independent evaluation of version 2 has been reported [S4][S5].
- **Predictions for one chosen cell type at a time.** The model takes a 1-million-letter (1-Mb) human or mouse DNA sequence plus a "condition" (a tissue, cell type or cell state) and predicts readouts such as gene expression, chromatin accessibility and DNA methylation for that condition [S1][S2]. It was trained on bulk genomics data, 3,977 single-cell tracks from 36 studies and a cell encoder built on about 107 million human single-cell profiles; DeepMind and *Nature* summarise this as more than 100 million cells across 68 tissues, covering 637 human and 311 mouse cell types [S1][S2][S4].
- **Better variant scores on DeepMind's benchmarks.** On fine-mapped single-cell expression variants from the TenK10K blood-immune study (28 cell types), the share of putatively causal variants it flagged at 90% precision rose from 16% for AlphaGenome 1 fine-tuned on single-cell data to 30%, and the share whose direction of effect it called at 90% accuracy rose from 23% to 43% [S1]. Overall gains were smaller (area under the precision-recall curve 0.76 versus 0.72) [S1]. On a held-out CRISPR-interference test of which enhancer controls which gene, it scored 0.78 against 0.73 for AlphaGenome 1 and 0.57 for the ENCODE-rE2G method [S1].
- **It re-found a known disease mechanism.** Stankey and colleagues showed in 2024, with gene editing and other lab experiments in human macrophages, that an inflammatory bowel disease risk region in a "gene desert" works by turning up the *ETS2* gene [S6]. Scoring the seven candidate variants in that region, AlphaGenome 2 predicted a large effect only for rs2836882, linked it to *ETS2* about 290 kilobases away rather than nearer genes, and confined the effect to monocytes and macrophages [S1][S3]. James Lee of the Francis Crick Institute, who led the 2024 study, told *Nature*: "They've managed to figure out the answer in 30 minutes, and it took us a year and a half of experiments" [S4]. This was a retrospective test on a result that was already published [S5].
- **New cell states without retraining.** Given single-cell RNA data from a few dozen cells, the model can condition on a cell state it was not trained on, such as vaccine-activated immune cells, and DeepMind reports it matches or beats models trained directly on those datasets [S1][S2].
- **Open for research, with limits.** It is available through an API free for non-commercial research, with commercial use in private preview; DeepMind says it is not validated for clinical or diagnostic use, and the paper says model code and weights will be released only on final publication [S1][S2][S5].

## How It Works

AlphaGenome 2 is a "sequence-to-function" model: it reads raw DNA letters and predicts what lab measurements of that DNA would show [S1]. Its predecessor predicted thousands of experiments for many tissues at once, which DeepMind says spread the model thin and blurred differences between similar cell types [S1][S2]. Version 2 instead turns the requested cell type or state into a learned code (an embedding) that adjusts the model's internal representation of the DNA from its earliest layers onward, so the same DNA can be "read" differently for, say, a gut macrophage and a T cell [S1].

To score a variant, the model predicts the readouts twice, once with the reference DNA letter and once with the changed letter, and compares them; because only that one letter differs, the prediction is not confused by neighbouring variants that are inherited together [S3]. A separate cell encoder, trained on more than 100 million single cells, maps a new sample's gene-activity profile into the same condition space, which is how the model handles cell states it never saw in training [S1][S2]. DeepMind also used the model to precompute scores for about 7 million trait-linked and common variants across 510 tissue and cell-type conditions, plus maps of which distant switches control which genes [S1].

## Implications

- **Faster leads for disease genetics, if the numbers hold.** Genome-wide studies flag broad DNA regions linked to disease but rarely say which letter, which gene and which cell type matter; a model that answers all three could help labs choose experiments [S1][S2]. Lee said the first AlphaGenome's lack of cell-type detail meant it "hasn't been hugely useful" for his group, which is the gap version 2 targets [S4].
- **Still a ranking tool, not a diagnosis.** Even with the gains, the model recovers only a minority of known causal variants at high precision, and DeepMind says it is for research only [S1][S2].
- **Impact and confidence differ.** The potential impact on genetics research is high because the model is broad and already usable through an API [S2][S5]. Confidence in the specific numbers is only medium: they come from one company's unreviewed paper and its own choice of benchmarks, and the most vivid example was a retrospective check against a known answer [S1][S5].

## Open Questions

- Will the gains survive peer review and tests by outside groups using their own data? None had been reported as of this writing [S5]. Implicator.ai notes that a separate Charité-led preprint found the original AlphaGenome often failed to carry a promoter's lost activity through to the rest of the gene; that work tested version 1, not version 2 [S5].
- How well does it handle variants outside open chromatin, very distant switches and effects that act after a gene is read? The authors say it can underestimate these [S1].
- Can it predict how cells respond to a gene being knocked out or switched on? The authors say this is unclear because the cell-state codes are learned from observational data and capture correlation, not cause [S1].
- Rare, stimulated and disease states are underrepresented in training, and the model can struggle with fine-grained cell types such as neuron subgroups; how much do predictions degrade there [S1]?
- Outside researchers cannot inspect the model until code and weights are released on final publication, and DeepMind says version 2 costs more to run than version 1 [S1][S5].

## References

1. [S1] Adam Gayoso, Anne Mottram, Alexander Karollus, Guido Novati et al. (Google DeepMind). AlphaGenome 2 predicts regulatory activity and variant effects across cell states. Preprint, Google DeepMind (11 Nov 2026). https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/alphagenome-2.pdf
2. [S2] Adam Gayoso, Natasha Latysheva, Pushmeet Kohli & Žiga Avsec. AlphaGenome 2: Deciphering how cells read DNA to better understand disease. Google DeepMind blog (11 Nov 2026). https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
3. [S3] Google DeepMind. Fine-mapping the ETS2 locus. AlphaGenome documentation tutorial (accessed 16 Nov 2026). https://google-deepmind-alphagenome.readthedocs-hosted.com/colabs/v2/finemapping_ets2.html
4. [S4] Ewen Callaway. DeepMind's ultra-powerful AI for genome mapping wows scientists. *Nature* news (11 Nov 2026). https://www.nature.com/articles/d41586-026-03673-0
5. [S5] Marcus Schuler. DeepMind's AlphaGenome 2 Traces Disease DNA to Specific Cells. *Implicator.ai* (12 Nov 2026). https://www.implicator.ai/deepmind-alphagenome-2-cell-type-variants/
6. [S6] C. T. Stankey et al. A disease-associated gene desert directs macrophage inflammation through ETS2. *Nature* 630, 447-456 (2024). https://www.nature.com/articles/s41586-024-07501-1
