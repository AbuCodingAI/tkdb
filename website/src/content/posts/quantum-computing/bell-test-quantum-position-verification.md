---
title: Entangled photons proved a device's location without trusting any quantum
  hardware, in a NIST campus test
description: A NIST-led team used a loophole-free Bell test over a 195-metre
  fibre link on its campus to certify where a device was, beating classical
  location checks. Security holds only against attackers who share almost no
  entanglement, and real-world use is likely a decade or more away.
pubDate: 2026-11-21
tags:
  - quantum networks
  - quantum cryptography
  - Bell test
  - position verification
  - entanglement
author: TKDB Newsroom (AI-assisted)
draft: false
demo: false
abstract: On 18 November 2026 a team led by NIST and the University of Colorado
  Boulder reported in Nature the first complete demonstration of
  device-independent quantum position verification. Two verifier stations 195
  metres apart on NIST's Boulder campus sent random challenges and one half of
  entangled photon pairs to a prover station between them; passing a
  loophole-free Bell test within tight timing windows certified that the prover
  was inside a target region without trusting the photon source or detectors.
  The certified region was 4.53 times smaller in volume than classical protocols
  with the same latencies allow. A Nature News & Views piece and outside
  researchers quoted by New Scientist praise the experiment but note that
  security currently holds only against attackers who share very little prior
  entanglement, and NIST says practical use is a decade or more away.
sources:
  - title: Quantum position verification with remote untrusted devices (Nature)
    url: https://www.nature.com/articles/s41586-026-11247-3
  - title: Quantum Position Verification with Remote Untrusted Devices,
      arXiv:2601.16892v2 (arXiv)
    url: https://arxiv.org/abs/2601.16892
  - title: Quantum Physics Can Verify a Person's Location, NIST Researchers Show
      (NIST)
    url: https://www.nist.gov/news-events/news/2026/11/quantum-physics-can-verify-persons-location-nist-researchers-show
  - title: Quantum physics can prove where you are (Nature News & Views)
    url: https://www.nature.com/articles/d41586-026-03378-4
  - title: Quantum trick lets you share your location super securely (New Scientist)
    url: https://www.newscientist.com/article/2599509-quantum-trick-lets-you-share-your-location-super-securely/
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Entangled photons proved a device's location without trusting any quantum hardware, in a NIST campus test

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Scientists at NIST and partner labs showed that linked pairs of light particles can prove where a device really is, so a faraway imposter cannot pretend to be there [S1][S3]. Two checking stations about 200 metres apart sent random questions and particles of light to a device between them, and only a device in the right spot could answer correctly and fast enough [S1][S3]. The trick works without trusting the quantum equipment itself, which matters because hacked hardware has fooled earlier quantum security schemes [S1][S4]. One day it could help banks or power grids confirm that a command really comes from a trusted building [S3][S5]. The big catch: it is only safe against attackers who share almost no linked particles of their own, and NIST says real-world use is a decade or more away [S2][S3][S5].

## Key Findings

- **What was shown.** The team introduced and ran a "Bell-test quantum position verification" protocol, which certifies a prover's location using only the measured correlations from a loophole-free Bell test across a small quantum network, with no assumptions about how the quantum devices work inside [S1][S2]. NIST quotes team member Krister Shalm calling it "the first complete demonstration of such a protocol" [S3].
- **The set-up.** Verifier stations were 195.1 metres apart on NIST's Boulder campus, with the prover station 92.8 metres from one of them, linked by optical fibre and electrical cables [S2][S3][S5]. The team ran 335 protocol instances over two days, each lasting two or four minutes and involving tens of millions of trials [S2].
- **The advantage.** The certified target volume was 4.53 times smaller than the region a comparable classical protocol with the same latencies could certify; along one dimension it was 2.47 times smaller than the best possible classical protocol, which must itself be non-remote [S1][S2]. The paper calls this a certifiable quantum advantage [S1].
- **How often it worked.** Of 232 runs of the basic protocol, 224 passed (96.5%); of 103 runs of the extended protocol, 102 succeeded [S2].
- **The limit on security.** The basic protocol is secure against adversaries with no prior shared entanglement; the extended version tested on day two tolerates only a very small amount, bounded by an average entanglement robustness of 8 × 10⁻⁶ [S2]. The authors state that the general protocol is loss-tolerant and secure against adversaries with substantial quantum resources, but that general version is not what was implemented here [S1][S2].
- **Outside reaction.** In a Nature News & Views piece, Davide Bacco of the University of Florence highlights that the scheme's security relies only on measurement statistics and the fact that nothing travels faster than light [S4]. Researchers not on the team, quoted by New Scientist, called quantum position verification a possible "killer app" for quantum networks (Wolfgang Löffler, Leiden) but warned that attackers with entangled devices could still cheat the current implementation (Robert Malaney, UNSW Sydney) and that longer distances will need new steps and devices (Florian Speelman, Amsterdam) [S5].

## How It Works

Position verification asks two or more trusted "verifiers" to check whether a third party, the "prover", is really inside a target region. Classical versions time how fast the prover answers a challenge, but colluding attackers stationed on either side can share the challenges and fake the answer from outside the region [S2].

In this experiment one verifier creates pairs of entangled photons, keeps one photon from each pair and sends the other to the prover [S3]. Both verifiers send random bits timed to arrive at the target location at the same moment; the prover combines them to choose how to measure the photon's polarization and immediately sends the result back to both [S2][S3]. Because the answers must arrive within a strict time window, signals from anyone outside the region would arrive too late [S3][S4].

The verifiers then check whether the prover's results and the kept photons are more strongly correlated than classical physics allows, which is what a Bell test measures [S2][S3]. A loophole-free Bell test means the check does not depend on trusting the photon source or detectors: any tampering or copying attempt degrades the correlations and makes the test fail [S1][S3]. The hardware included fast Pockels-cell switches, superconducting nanowire single-photon detectors and an efficient entangled-photon source that NIST built about a decade ago [S2][S3].

## Implications

- **Impact (medium-high, long term).** If it can be scaled, location could become a security credential that cannot be faked by stolen keys or cloned hardware, for uses NIST and the authors name such as bank transactions, access to sensitive data inside a building, and protecting critical infrastructure [S1][S3]. Outside researchers see it as a candidate application for future quantum networks [S5].
- **Confidence (medium).** The result is peer reviewed in Nature, the method and data analysis are laid out in a public preprint, and an independent News & Views commentary and outside experts accept that the experiment works as described [S1][S2][S4][S5]. But no other group has repeated it, and the security guarantee shown applies only to attackers with almost no shared entanglement [S2][S5].
- **Not ready for use.** NIST collaborator Scott Glancy says applying the technique to a real situation may be more than a decade away because large, high-fidelity quantum networks do not yet exist [S3]. The demonstration covered one campus and short distances [S2][S5].

## Open Questions

- How much shared entanglement can attackers realistically gather, and can the protocol be made secure against far more of it [S2][S5]?
- Will the general loss-tolerant version, which the authors say resists adversaries with substantial quantum resources, be demonstrated in practice [S1][S2]?
- Can it work over kilometres or between cities, and with wireless or hollow-core fibre links for timing as the authors suggest [S2][S5]?
- Will an independent group reproduce the result with different hardware?

## References

1. [S1] Kavuri, G. A. et al. "Quantum position verification with remote untrusted devices." Nature (published online 18 November 2026). doi:10.1038/s41586-026-11247-3. https://www.nature.com/articles/s41586-026-11247-3
2. [S2] Kavuri, G. A. et al. "Quantum Position Verification with Remote Untrusted Devices." arXiv:2601.16892v2 [quant-ph] (v1 23 January 2026, v2 8 August 2026). https://arxiv.org/abs/2601.16892
3. [S3] NIST. "Quantum Physics Can Verify a Person's Location, NIST Researchers Show." NIST News (18 November 2026). https://www.nist.gov/news-events/news/2026/11/quantum-physics-can-verify-persons-location-nist-researchers-show
4. [S4] Bacco, D. "Quantum physics can prove where you are." Nature News & Views (18 November 2026). doi:10.1038/d41586-026-03378-4. https://www.nature.com/articles/d41586-026-03378-4
5. [S5] Padavic-Callaghan, K. "Quantum trick lets you share your location super securely." New Scientist (18 November 2026). https://www.newscientist.com/article/2599509-quantum-trick-lets-you-share-your-location-super-securely/
