---
title: Software pulls a hidden giant planet out of old JWST data by modelling
  the telescope itself
description: A Northwestern-led team built FLIP, a physics-based differentiable
  model of JWST’s NIRCam, and used it to subtract starlight more cleanly than
  standard methods. On archival coronagraph images it gained about 2 to 15 times
  in detection sensitivity and recovered 51 Eridani b at 4.3 μm where earlier
  processing saw nothing. The work is peer-reviewed and open, but it is still a
  single-group result that does not yet hit the photon-noise limit.
pubDate: 2026-11-05
draft: false
demo: false
category: Astronomy
tags:
  - exoplanets
  - james-webb-space-telescope
  - computational-imaging
  - peer-reviewed
  - starlight-subtraction
author: TKDB Newsroom (AI-assisted)
abstract: "On 4 November 2026 Nature published an open-access paper by Rodrigo
  Ferrer-Chavez, Jason J. Wang, Katherine L. Bouman and colleagues introducing
  Physics-based Learning for Imaging Planets (FLIP). Instead of relying only on
  reference images to model a star’s glare, FLIP tunes a differentiable physical
  model of JWST’s NIRCam coronagraph—built from STScI’s STPSF toolkit and run in
  PyTorch—so the simulated point-spread function matches the science frame. On
  four archival datasets the method improved detection sensitivity by about 2 to
  15 times over Karhunen–Loève image processing (KLIP), including a first
  recovery of known giant planet 51 Eridani b at 4.3 μm (signal-to-noise about
  6.3) where the published KLIP analysis was a non-detection. Independent
  outlets including Ars Technica covered the result. Limitations remain: the
  gains are the authors’ comparisons on a few fields, the photon-noise floor is
  not reached, planet signal can be overfit if optimization is careless, and
  Roman/HWO applications are still projections."
sources:
  - title: Imaging exoplanets below the telescope stability limit (Nature)
    url: https://www.nature.com/articles/s41586-026-11213-z
  - title: Software squeezes more data out of Webb Telescope for imaging exoplanets
      (Ars Technica)
    url: https://arstechnica.com/science/2026/11/getting-software-to-help-block-out-a-star-so-we-can-see-exoplanets/
  - title: Hidden planet emerges from the glare (Northwestern University)
    url: https://news.northwestern.edu/stories/2026/11/hidden-planet-emerges-from-the-glare
  - title: Erasing the Stars to Find Exoplanets (Caltech)
    url: https://www.caltech.edu/about/news/erasing-the-stars-to-find-exoplanets
  - title: Boffins use machine-learning tricks to create a starlight dimmer switch
      (The Register)
    url: https://www.theregister.com/ai-and-ml/2026/11/04/boffins-use-machine-learning-tricks-to-create-a-starlight-dimmer-switch/5307625
  - title: "Astronomy: Suppressing starlight to hunt exoplanets (Nature Asia press
      release)"
    url: https://www.natureasia.com/en/info/press-releases/detail/9474
review:
  status: approved
  source: agent
  agent: tkdb-newsroom-daily
---

# Software pulls a hidden giant planet out of old JWST data by modelling the telescope itself

Status: Peer-reviewed · Fully AI generated. Sources may be wrong, please [open an issue on GitHub](https://github.com/AbuCodingAI/tkdb/issues).

## In Plain English

Even with a coronagraph that blocks most of a star’s light, leftover glare can hide nearby planets. A team led from Northwestern University built software called FLIP that builds a detailed physical model of the James Webb Space Telescope’s near-infrared camera and then adjusts millions of tiny telescope parameters until the model’s fake glare matches the real image, so the glare can be subtracted more cleanly [S1][S3]. On older JWST pictures it found the known planet 51 Eridani b at a wavelength where earlier processing had missed it, and it was up to about fifteen times more sensitive than the usual method on one hard target [S1][S2]. The catch: this is one team’s peer-reviewed demo on a few archival fields, not a new planet discovery and not yet as good as physics would allow in a perfect case [S1].

## Key Findings

Direct imaging is how astronomers hope to study planets that orbit farther from their stars than about 1 astronomical unit, but the star is vastly brighter than the planet—even bright young giants are about 100,000 times fainter in the near-infrared—so leftover starlight after a coronagraph still swamps the signal [S1][S3]. For years the standard fix has been empirical: observe a similar star (or the same star at another time) and subtract a glare model built from those references. Telescope pointing errors and thermal drifts change the glare between frames, so the match is never perfect [S1][S2][S3].

- **A peer-reviewed physics-based alternative.** On 4 November 2026 *Nature* published an open-access paper by Rodrigo Ferrer-Chavez and colleagues at Northwestern, Caltech, MIT and the Space Telescope Science Institute describing Physics-based Learning for Imaging Planets (FLIP) [S1][S3][S4]. The authors declare no competing interests [S1].
- **Large sensitivity gains on archival JWST data.** Against Karhunen–Loève image processing (KLIP) on the same published JWST NIRCam datasets, FLIP improved detection sensitivity by about 2 to 15 times depending on the field and separation [S1][S2][S3][S5]. On TYC 5899, a survey target with no known companions but large aberration drift between reference and science frames, FLIP was roughly 15 times more sensitive than KLIP at 0.5 arcseconds and about five times at 1 arcsecond [S1].
- **A planet recovered where KLIP failed.** On 51 Eridani in the F430M filter (about 4.3 μm, in a carbon-dioxide absorption band), FLIP reported a detection with signal-to-noise ratio about 6.3; the original published KLIP analysis was a non-detection, and sensitivity at the planet’s location rose by about four times [S1][S2][S3]. The planet was already known at other wavelengths; this is a first JWST image in that filter, not a brand-new world [S1].
- **Closer to, but not at, the noise floor.** FLIP contrast curves sit nearer the estimated fundamental noise limit than KLIP on these data, yet the photon-noise limit is not reached in any of the reported observations [S1].
- **Independent coverage.** Ars Technica and The Register explained the result for a technical audience; Northwestern and Caltech issued institution releases with author quotes [S2][S3][S4][S5].

**What is established:** a peer-reviewed, open-access demonstration on real JWST coronagraph data with public code and MAST archive inputs [S1]. **What is not:** independent reprocessing by another group, a survey of many new planets, or a flight-ready pipeline for Roman or the Habitable Worlds Observatory [S1][S6].

## How It Works

1. **Why reference subtraction stalls.** A telescope’s point-spread function (how a point of light is smeared) depends on tiny misalignments and optical path differences. Empirical libraries cannot fully track those changes between a reference visit and a science visit [S1][S2][S3].
2. **Build a digital instrument, then fit it.** FLIP starts from STScI’s open STPSF optical models for JWST NIRCam, reimplements the propagation in PyTorch so every parameter is differentiable, and uses automatic differentiation plus gradient descent to tune star position and flux, optical path differences, and detector pixel responses until the simulated stellar PSF matches the data [S1][S2][S4]. Ars Technica reports a run taking a bit more than half an hour on a current GPU [S2].
3. **Two stages to limit eating the planet.** Stage 1 fully calibrates the flexible model on a reference star (unlikely to hide a planet of interest). Stage 2 refines a reduced parameter set on the science image while injecting fake planets and watching their signal-to-noise so the optimizer can be stopped before it subtracts real companions—an overfitting risk the authors say appears on real data even though earlier simulations looked safer [S1].
4. **What they tested.** Four archival NIRCam coronagraph datasets: HIP 65426 (known planet), 51 Eridani in two filters (known planet), and TYC 5899 (no known companion, strong instability) [S1][S2][S3]. Coauthor Jason Wang told Northwestern that the team used machine-learning *optimization tools* on known physics rather than training a neural net to invent the glare [S3][S4].

## Implications

In the short term, a 2–15× sensitivity boost on JWST NIRCam archives could make colder, lower-mass or older giants reachable in data already on disk, and the new 4.3 μm photometry of 51 Eridani b may feed atmospheric metallicity studies [S1][S2][S3]. The authors and institution releases also argue that relaxing extreme hardware-stability demands could matter for NASA’s Nancy Grace Roman Space Telescope coronagraph and the long-term Habitable Worlds Observatory concept, which aims at Earth-like contrasts around Sun-like stars [S1][S3][S4][S6]. Those mission claims are forward-looking; FLIP has only been shown on JWST NIRCam coronagraphy so far [S1].

Ars Technica notes a further angle: the fitted corrections might eventually highlight which bits of the telescope are drifting, turning the software into a diagnostic as well as a cleaner [S2].

## Open Questions

- Will other teams reprocess the same MAST programmes with FLIP (or a reimplementation) and match the reported SNRs and contrast curves [S1]?
- Can the method scale to ground-based adaptive-optics coronagraphy and to Roman/HWO without prohibitive compute or data-volume costs [S1][S5][S6]?
- How often does unconstrained optimization still erase real planets, and how robust are the injection-based stopping rules across many targets [S1]?
- Does FLIP ever reach the photon-noise limit on deep observations of bright stars once detector models improve [S1]?

## References

1. [S1] Ferrer-Chavez, R. et al. Imaging exoplanets below the telescope stability limit. *Nature* **659**, 58–62 (2026). https://www.nature.com/articles/s41586-026-11213-z
2. [S2] Software squeezes more data out of Webb Telescope for imaging exoplanets. Ars Technica. https://arstechnica.com/science/2026/11/getting-software-to-help-block-out-a-star-so-we-can-see-exoplanets/
3. [S3] Hidden planet emerges from the glare. Northwestern University. https://news.northwestern.edu/stories/2026/11/hidden-planet-emerges-from-the-glare
4. [S4] Erasing the Stars to Find Exoplanets. Caltech. https://www.caltech.edu/about/news/erasing-the-stars-to-find-exoplanets
5. [S5] Boffins use machine-learning tricks to create a starlight dimmer switch. The Register. https://www.theregister.com/ai-and-ml/2026/11/04/boffins-use-machine-learning-tricks-to-create-a-starlight-dimmer-switch/5307625
6. [S6] Astronomy: Suppressing starlight to hunt exoplanets (Nature). Nature Asia press release. https://www.natureasia.com/en/info/press-releases/detail/9474
