---
title: "Looking back at 2017's Transformer: the translation model that dropped
  recurrence for attention"
description: 'A retrospective on "Attention Is All You Need": what the 2017
  paper actually showed, how an independent lab reproduced it, how it spread to
  GPT and BERT, and the limits that remain.'
pubDate: 2026-10-25
updatedDate: 2026-10-25
draft: false
demo: false
category: Capabilities
tags:
  - transformers
  - attention
  - machine-translation
  - retrospective
  - independently-replicated
author: TKDB Newsroom (AI-assisted)
abstract: In 2017 eight researchers working at Google proposed the Transformer,
  a translation model built from attention layers with no recurrent or
  convolutional layers. It set new benchmark scores on English-to-German and
  English-to-French translation and trained faster than earlier systems. A
  Facebook AI Research team reproduced its accuracy in its own code in 2018, and
  OpenAI and Google built GPT-1 and BERT on it. Its main known weakness is that
  attention cost grows with the square of input length. This retrospective
  separates what the paper showed from what came later.
sources:
  - title: Attention Is All You Need (arXiv:1706.03762)
    url: https://arxiv.org/abs/1706.03762
  - title: Attention is All you Need (NIPS 2017 proceedings)
    url: https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
  - title: Neural Machine Translation by Jointly Learning to Align and Translate
      (arXiv:1409.0473)
    url: https://arxiv.org/abs/1409.0473
  - title: Scaling Neural Machine Translation (arXiv:1806.00187)
    url: https://arxiv.org/abs/1806.00187
  - title: Improving Language Understanding by Generative Pre-Training (OpenAI)
    url: https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
  - title: "BERT: Pre-training of Deep Bidirectional Transformers for Language
      Understanding (arXiv:1810.04805)"
    url: https://arxiv.org/abs/1810.04805
  - title: "Longformer: The Long-Document Transformer (arXiv:2004.05150)"
    url: https://arxiv.org/abs/2004.05150
  - title: "Efficient Transformers: A Survey (arXiv:2009.06732)"
    url: https://arxiv.org/abs/2009.06732
  - title: 8 Google Employees Invented Modern AI. Here's the Inside Story (WIRED)
    url: https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/
review:
  status: approved
  source: agent
  agent: newsroom-poc2
---

Status: Independently replicated · AI-assisted reporting, human-reviewed before publication

## Key Findings

This is a retrospective. It looks back at a 2017 result and at what happened in the years after it.

In June 2017 eight researchers then working at Google posted "Attention Is All You Need" [S1]. It was peer-reviewed and published at the NIPS 2017 conference (now called NeurIPS) [S2]. The paper proposed the **Transformer**, a translation model "based solely on attention mechanisms, dispensing with recurrence and convolutions entirely" [S1].

**What the paper showed:** on a standard English-to-German test from 2014, its larger model scored 28.4 BLEU. That beat the best earlier systems, including combinations of several models, by more than 2 points. Training took 3.5 days on eight graphics processors (GPUs) [S1][S2]. On English-to-French it set a new best score for a single model [S2].

**What was confirmed independently:** in 2018 a Facebook AI Research team rebuilt the model in its own software, matched the original accuracy, and then improved on it [S4]. OpenAI built its first GPT model on the architecture the same year [S5].

**What is not established by the paper:** later claims about chatbots and other modern AI systems. Those came from other people's work in later years, and we treat them separately below.

## How It Works

A translation model reads a sentence in one language and writes it in another, one small piece of text at a time. In 2017 the leading systems mostly used **recurrent networks** [S1]. These read words strictly in order and carry a running summary forward. That makes them slow to train, because each step has to wait for the one before it [S1].

An earlier idea called **attention** helped. In 2014, Bahdanau, Cho and Bengio let a recurrent translator look back over the source sentence and give more weight to the words most relevant to the next output word [S3]. Attention here is not human-like focus. It is a learned set of weights used to average information from different words. Until 2017, attention was almost always added on top of a recurrent network [S1].

The Transformer removed the recurrent part [S1]:

1. **Self-attention.** Every word in a sentence is scored against every other word in the same sentence. Each word's representation is then updated with a weighted mix of the others. Because all of these scores can be computed at once, the work runs in parallel on GPUs.
2. **Several attention "heads".** The model runs eight attention calculations side by side in each layer of the base version. Each can learn a different kind of relationship between words [S1].
3. **Position information.** A model that no longer reads in order would not know word order. So the authors add a pattern of numbers to each word that encodes its position in the sentence [S1].
4. **Stacks of layers.** An encoder of six layers reads the source sentence, and a decoder of six layers writes the translation. Both also use ordinary feed-forward layers [S1].

The base model had about 65 million adjustable parameters and trained in 12 hours. The larger model had about 213 million and trained in 3.5 days, both on one machine with eight NVIDIA P100 GPUs [S1].

**BLEU** is an automatic score that measures how much a machine translation overlaps with human reference translations. It is useful for comparing systems, but it is not a human judgement of quality. The paper reports no human evaluation [S1].

## Implications

The paper's own case was speed and quality in translation. All three public peer reviews were positive. One reviewer wrote that they spent "a lot of time reimplementing the work" [S2].

The strongest independent evidence is a reproduction by Facebook AI Research. Ott and colleagues trained the big Transformer in their own code base. On eight GPUs it reached the same development-set score as the original (26.4 BLEU). With faster, larger-batch training on 128 GPUs it then reached 29.3 BLEU on the English-to-German test [S4]. That paper was about speeding up training, not a formal replication study, but it confirms the result outside Google.

The architecture then spread beyond translation:

- **OpenAI's GPT-1 (June 2018)** used a 12-layer Transformer decoder trained on books, then adapted to specific tasks. It reported the best results so far on 9 of the 12 datasets it tested [S5]. OpenAI called the work "a validation of the robustness and usefulness of the transformer architecture" [S5].
- **Google's BERT (October 2018)** used a Transformer encoder. It describes its implementation as "almost identical to the original" and built it on the authors' released code [S6]. It is adoption by the same company, not independent confirmation.
- **Efficiency research.** By 2020 there were so many modified versions that a Google survey described "a dizzying number" of them [S8].

WIRED reported in 2024 that transformers became the basis of products such as ChatGPT. It also reported that all eight authors had left Google by then [S9]. Those accounts come from interviews, including with the authors. They are history and context, not part of the 2017 evidence.

## Open Questions

- **Cost on long inputs.** Self-attention compares every position with every other, so its cost grows with the square of the input length. The authors' own comparison table shows this [S1]. An independent Allen Institute for AI team later wrote that standard self-attention "scales quadratically with the sequence length" and proposed a cheaper variant [S7]. Many alternatives exist [S8], and the trade-off is still a live research question.
- **A number that changed between versions.** The English-to-French score is 41.0 BLEU in the peer-reviewed proceedings and the first preprint [S2][S1]. Later preprint versions list 41.8 in the summary and main table, while their results text still says 41.0 [S1]. We found no explanation, so we use 41.0. The independent FAIR paper also cites 41.0 [S4].
- **What the reviewers asked for.** One reviewer asked for results on long sentences specifically, to back the claim that attention handles distant words well. The same reviewer asked for significance tests on the model variants in the paper's Table 3. We found no such results in the published paper [S2][S1].
- **Metric limits.** The gains are measured in BLEU on two 2014 news test sets. They do not show how much better the translations were for people.
- **Credit and history.** The architecture built on earlier attention work [S3]. Personal accounts of who did what come from the authors' footnote and from interviews [S1][S9].
- **Later claims are not this paper's claims.** What modern AI systems can do rests on years of later work with far more data and computing power. This 2017 paper does not establish it.

## References

1. [S1] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., Polosukhin, I. "Attention Is All You Need." arXiv:1706.03762 (v1 12 June 2017; v7 2 August 2023). https://arxiv.org/abs/1706.03762. Abstract, §3, Tables 1–3, §5.2, §6.1; v1, v5 and v7 compared.
2. [S2] Same authors. "Attention is All you Need." *Advances in Neural Information Processing Systems 30* (NIPS 2017). https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html. Proceedings PDF and the three public reviews.
3. [S3] Bahdanau, D., Cho, K., Bengio, Y. "Neural Machine Translation by Jointly Learning to Align and Translate." arXiv:1409.0473 (2014; ICLR 2015). https://arxiv.org/abs/1409.0473. Earlier attention work (context).
4. [S4] Ott, M., Edunov, S., Grangier, D., Auli, M. (Facebook AI Research). "Scaling Neural Machine Translation." arXiv:1806.00187 (2018; WMT 2018). https://arxiv.org/abs/1806.00187. Tables 1–2. Independent reproduction.
5. [S5] Radford, A., Narasimhan, K., Salimans, T., Sutskever, I. (OpenAI). "Improving Language Understanding by Generative Pre-Training." (2018; blog post dated 11 June 2018). https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf. Independent adoption.
6. [S6] Devlin, J., Chang, M.-W., Lee, K., Toutanova, K. (Google AI Language). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." arXiv:1810.04805 (October 2018). https://arxiv.org/abs/1810.04805. §3. Same company as S1.
7. [S7] Beltagy, I., Peters, M. E., Cohan, A. (Allen Institute for AI). "Longformer: The Long-Document Transformer." arXiv:2004.05150 (2020). https://arxiv.org/abs/2004.05150. Abstract. Independent statement of the quadratic-cost limit.
8. [S8] Tay, Y., Dehghani, M., Bahri, D., Metzler, D. (Google Research). "Efficient Transformers: A Survey." arXiv:2009.06732 (2020). https://arxiv.org/abs/2009.06732. Abstract (context).
9. [S9] Levy, S. "8 Google Employees Invented Modern AI. Here's the Inside Story." *WIRED* (20 March 2024). https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/. History based on interviews (context).
