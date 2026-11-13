---
title: Google DeepMind's AI agents wrote machine-checked proofs of key security
  properties in Signal's compiled code
description: Google DeepMind says a team of five people directing AI agents
  proved, in four weeks, that the compiled code at the heart of Signal's
  encryption meets a set of formal security properties, with every proof checked
  by the Lean proof assistant. The paper is not peer-reviewed, the proofs cover
  only one-on-one chats under stated assumptions, and no outside group has
  rechecked them yet.
pubDate: 2026-11-12
tags:
  - formal verification
  - AI agents
  - cryptography
  - Signal
  - Lean
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 10 November 2026 Google DeepMind released a technical paper, a blog
  post and an open-source Lean repository describing AlphaProof Code, a
  framework in which humans and AI agents agree on formal specifications and
  autonomous prover agents then write proofs that the Lean kernel checks.
  Applied to libsignal, the reference implementation of the Signal protocol, the
  agents produced about 6.5 million lines of machine-checked proof that the
  compiled AArch64 machine code of a command-line harness satisfies forward
  secrecy, post-compromise security, authentication and handshake secrecy
  properties, resting on about 26,000 lines of trusted specifications and
  processor semantics. Reintroducing two previously fixed libsignal bugs made
  the proofs fail. The Beneficial AI Foundation, which runs a separate effort to
  verify Signal, called the work a huge step and said DeepMind described its
  scope accurately, while listing large parts that remain unverified. The paper
  is not peer-reviewed and no independent party has yet reported rebuilding the
  binary and rechecking the proofs.
sources:
  - title: "AlphaProof Code: Verifying Signal's Security at the Machine-Code Level
      (Google DeepMind technical paper)"
    url: https://deepmind.google/documents/36/Formal_Verification_of_Signal_4.pdf
  - title: "Introducing AlphaProof Code: a breakthrough in verifying complex
      software at depth (Google DeepMind blog)"
    url: https://deepmind.google/blog/introducing-alphaproof-code/
  - title: google-deepmind/code-verification (Lean specifications and proofs, GitHub)
    url: https://github.com/google-deepmind/code-verification
  - title: A New AI Tool From Google DeepMind Proved the Signal Protocol Is Secure
      (WIRED)
    url: https://www.wired.com/story/a-new-ai-tool-from-google-deepmind-formally-verified-the-signal-protocol/
  - title: The ongoing quest for provably secure messaging (Beneficial AI Foundation)
    url: https://www.beneficialaifoundation.org/blog/signal-shot-milestone
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Google DeepMind's AI agents wrote machine-checked proofs of key security properties in Signal's compiled code

Status: Preprint · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Google DeepMind says its AI agents wrote mathematical proofs that the actual compiled code behind Signal's encryption keeps certain promises, such as keeping old messages safe if a phone's keys are later stolen [S1][S2]. People decided what had to be proved, and a computer program called Lean checked every step of the proofs, so nobody has to trust the AI's word for it [S1][S2]. Five people did the work in four weeks, something DeepMind says used to take expert teams years [S1][S2]. A separate group working on the same goal called it a huge step but warned that it does not mean the Signal app is now fully secure [S5]. The catch: the paper has not been peer-reviewed, it covers only one-on-one chats under stated assumptions, and no outside group has rechecked the proofs yet [S1][S5].

## Key Findings

- **Released as an unreviewed technical paper with open code.** Google DeepMind published the paper, a blog post and a public Lean repository on 10 November 2026 [S1][S2][S3]. The nine authors are from Google DeepMind and Google [S1]. We label it a preprint: it has not been through peer review [S1].
- **What was proved.** The proofs concern libsignal version 0.105.4 with the spqr library version 1.6.0, wrapped in a small command-line program and compiled unmodified by the standard Rust compiler for 64-bit Arm (AArch64) Linux [S1][S3]. For one-on-one sessions, the theorems establish forward secrecy, post-compromise security, and message confidentiality and authenticity against ordinary (non-quantum) attackers, plus handshake secrecy against a future quantum attacker in an idealized "symbolic" model [S1].
- **Size and trust.** The agents produced about 6.5 million lines of Lean proof code, all checked by Lean's kernel [S1]. A reader who wants to trust the result must check about 18,000 lines of definitions and theorem statements plus about 8,000 lines describing how the Arm processor behaves, roughly 26,000 trusted lines in total [S1]. The verified code is about 560 KB, about 140,000 machine instructions [S1].
- **Bug check.** The team put back two real, previously fixed libsignal bugs and produced machine-checked proofs that the resulting programs break the symbolic security theorem [S1][S2].
- **Speed.** The paper says the proof work was done by a team of five over four weeks, with each person running agents nonstop [S1]. DeepMind's blog says such work "historically takes expert teams years" [S2]; that comparison is DeepMind's own claim. Google declined to tell WIRED what the analysis cost [S4].
- **Outside reaction.** The Beneficial AI Foundation (BAIF), which leads a separate community effort to formally verify Signal, called the work "a huge step" that is complementary to its own and partly builds on it, and said DeepMind "accurately stated" what it proved, while some media headlines did not [S5].

**What is established:** a public, machine-checkable set of proofs whose scope and assumptions the paper spells out, with an independent group in the field agreeing that the claimed scope is stated accurately [S1][S3][S5]. **What is not:** peer review, an independent rebuild and recheck of the proofs, or security of the Signal apps as a whole [S1][S5].

## How It Works

1. **Formal verification.** Instead of testing code, engineers write a precise mathematical statement of what the code must guarantee (a specification) and then prove that the code meets it [S1][S2]. A proof rules out every attack that would break those stated properties, but nothing beyond them [S1].
2. **Humans pick the goals.** Researchers worked with agents powered by Gemini 4 Carbon and Claude Opus 5.5 to draft the specifications, starting from published security models of Signal; an agent from a different model family reviewed each draft, and a human approved it [S1]. The paper says most of the team's effort went into the specifications, not the proofs [S1].
3. **Agents write the proofs.** Teams of prover agents then worked autonomously [S1]. A "gatekeeper" step accepts a proof only if Lean's kernel checks it against the approved specification, so the result does not depend on trusting the AI [S1].
4. **Proving the machine code, not the source.** The team built a formal model of the AArch64 processor in Lean and proved theorems about the compiled program itself, so the Rust compiler does not need to be trusted [S1]. Cryptographic building blocks such as the underlying ciphers are not proved; they are described by contracts that are assumed [S1].

## Implications

If the approach holds up, it suggests AI could make formal proofs, long considered too expensive for most software, practical for widely used security code [S1][S2]. DeepMind's leaders point to banks and other critical systems as possible future users [S4], and the blog mentions medical device firmware and power grid software [S2]. BAIF warns against "formal-washing", overstating what has been proven, and says that misreading this as proof that the Signal app is fully secure could reduce the motivation to finish the job [S5]. Google would not say whether it plans a commercial product [S4].

## Open Questions

- Will an independent group rebuild the pinned binary and recheck the proofs and the trusted specifications [S1][S3][S5]?
- Does the roughly 26,000-line trusted base, including the Arm processor model built during the project, hold up to independent validation [S1][S5]?
- Can the work extend to what it leaves out: group chats, multiple devices, Signal's anonymous credentials, side-channel attacks, other processors and compiler settings, and the Android and iOS apps themselves [S1][S5]?
- Can proofs be kept up to date as Signal ships frequent new releases, and at what cost [S4][S5]?

## References

1. [S1] Swarat Chaudhuri, Andrew Ferraiuolo, Anton Kovsharov, Tej Chajed, Sam Schlesinger, Karn Seth, Jonathan Katz, Charles Sutton & Pushmeet Kohli. AlphaProof Code: Verifying Signal's Security at the Machine-Code Level. Google DeepMind technical paper (10 Nov 2026, not peer-reviewed). https://deepmind.google/documents/36/Formal_Verification_of_Signal_4.pdf
2. [S2] Pushmeet Kohli and Swarat Chaudhuri. Introducing AlphaProof Code: a breakthrough in verifying complex software at depth. *Google DeepMind blog* (10 Nov 2026). https://deepmind.google/blog/introducing-alphaproof-code/
3. [S3] Google DeepMind. code-verification: Formal Verification of Signal's Security in Lean. *GitHub* (2026). https://github.com/google-deepmind/code-verification
4. [S4] Lily Hay Newman. A New AI Tool From Google DeepMind Proved the Signal Protocol Is Secure. *WIRED* (10 Nov 2026). https://www.wired.com/story/a-new-ai-tool-from-google-deepmind-formally-verified-the-signal-protocol/
5. [S5] Mat Azevedo. The ongoing quest for provably secure messaging. *Beneficial AI Foundation* (10 Nov 2026). https://www.beneficialaifoundation.org/blog/signal-shot-milestone
