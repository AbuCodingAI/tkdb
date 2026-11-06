---
title: "The Cost of Switching ($SM): A Scale for Pricing a Change of Tool"
authors: ["Abu Shariff"]
abstract: "People change tools constantly: a text editor, a spreadsheet, an operating system, a programming language. Some switches are cheap and some quietly eat months, yet there is no common scale for saying which are worth making. We introduce the Shariff Switching Model ($SM), where the dollar sign stands for cost. It scores a switch from an old tool to a new one using four quantities: the esotericosity E of the new tool (how alien it is to someone fluent in the old one), the switch time ST needed to reach your old proficiency, the barrier tax BT (the difference in accessibility and setup), and the gain G, entered as 100 − G so every term is a cost and lower is better. Staying put scores 40, and a break-even rule gives a required gain G* for each switch. $SM is the generalized Shariff Complexity Theorem (GSCT) applied to a real decision, and inherits SCT's esotericosity and barrier tax exactly."
pubDate: 2026-11-05
status: preprint
tags: ["switching cost", "tools", "decision making", "SCT", "GSCT", "opinion"]
---

> **A note on opinion.** \$SM is a model I designed myself, and it has not been peer reviewed. Every E, ST, G and β value in this journal is my own estimate for personal use, not a measurement. Treat the scores as a structured way to argue about whether a switch is worth it. It builds on the [Shariff Complexity Theorem](/papers/shariff-complexity-theorem/).

## 1. Motivation

Switching costs are usually discussed in anecdotes ("it took me a month to get comfortable") or in vendor marketing ("migrate in minutes"). Neither helps a person decide, and a pure cost score is misleading on its own. A programmer moving from Assembly to C++ finds C++ very alien and needs a long time to learn it, so by cost alone it looks like a poor move; yet they get far more done, faster, with more debuggable code. A switch is judged by what it costs and what it returns. \$SM puts effort (E, ST), access (BT) and return (G) on one scale. It is built the way SCT's generalization, GSCT, is meant to be used: take a general method for scoring a subject and apply it to a problem people face every week.

---

## 2. The Four Terms

### 2.1 Esotericosity (E)

E is the esotericosity of the new tool relative to the person switching: how alien it is to someone who is fluent in the old tool. It runs from 0 to 100.

- **E = 0:** completely familiar; the same concepts, same vocabulary, same habits.
- **E = 100:** completely alien; nothing you know transfers.

The name and idea come from SCT, where esotericosity measures how far a language sits from familiar anchors. Here the anchor is your old tool. E is therefore directional and personal: a Windows user finds Linux's terminal tools very alien, while a Linux user finds them natural, so E(Windows → Linux) ≠ E(Linux → Windows). E says nothing about whether the new tool is good; an alien tool can be excellent, which is what G is for.

### 2.2 Switch time (ST)

ST is the time, in hours, you must invest in the new tool to learn its intricacies the same way you knew your old one. The target is not "can do the basics" but "as proficient as I am now": the shortcuts, the failure modes, the habits that make you fast. ST goes up with how good you were at the old tool.

E and ST are related but distinct. E says how foreign the tool feels; ST says how long the road is. Linux can feel strange to a Windows user (high E) without much to learn (low ST), while having to find and launch a program by hand from a terminal would add more things to understand (more ST). A very alien tool with a tiny feature set can still be quick to learn, and a familiar tool with a huge feature set can take a long time.

Because hours span orders of magnitude, ST is normalized to a 0 to 100 scale against a cap H:

$$ST_n = 100 \cdot \frac{\min(ST,\ H)}{H}, \qquad H = 500\ \text{hours}$$

The default H of 500 hours is roughly three months of part-time practice. Any switch taking longer is maxed out at 100. H may be changed for a different audience, provided it is stated.

#### Estimating ST (recommended calculator)

ST cannot be known in advance for a tool you have not learned, so this section gives a recommended way to estimate it from two things you can find out: how long the old tool took you, which you know, and how alien the new tool is (E), which can be researched. It is a starting estimate, not a rule: when you know the real time, use it instead, as Section 5.4 does.

1. **Old-tool investment.** L = D × I, where D is the number of days you spent learning the old tool and I is the hours per day. Three months at 10 minutes a day is D = 90 and I = 1/6 h, so L = 90 × 1/6 = 15 h (equivalently 90 ÷ 6).
2. **What does not carry over.** This is E/100: with E = 0 everything transfers, and with E = 100 nothing does.
3. **Switch time.** ST ≈ (E / 100) × L.

For example, with the 15 h above and a new tool of E = 60, ST ≈ 0.6 × 15 = 9 h. The estimate has two sensible limits: ST = 0 when E = 0 (nothing new to learn), and ST = L when E = 100 (you start again from scratch). Because the target is only your old proficiency, anything the new tool adds beyond that belongs to G, not ST.

**Pace.** Your pace is the calendar time you take per hour of effort. At 10 minutes a day it is 6 days per hour, because 1 ÷ 1/6 = 6. Multiplying ST in hours by your pace converts it to calendar days at the same rhythm: 9 h × 6 = 54 days.

Two cautions. L should be the time to reach the level you actually use in the old tool, not the total years you have owned it. And the estimate assumes the new tool's scope that you need is about the old tool's; if you need only a small part of it, ST is smaller.

### 2.3 Barrier tax (BT)

BT is the accessibility and setup difference between the two tools: how hard each is to get, pay for and set up. Each tool has an access barrier β ∈ [0, 1]:

| β | Meaning |
|---|---|
| 0 | Free and easy to set up: runs on ordinary hardware, simple install, no special prerequisites |
| 0.5 | Partial barrier: discounted, restricted or institution-provided access, or noticeable setup work |
| 1 | Full barrier: paid, special hardware or input, heavy prerequisites, or a difficult or risky setup |

$$BT = 6\,(\beta_{new} - \beta_{old})$$

This extends the flat +6 barrier tax of SCT. Moving from a free tool to a fully barriered one gives +6, exactly SCT's tax. BT is negative when the new tool is easier to get or set up than the old one: free instead of paid, a one-click install instead of a painful one. Escaping a barrier earns a discount, so BT ranges from −6 to +6. Time spent learning the tool belongs in ST; BT covers only the access and setup friction around it.

### 2.4 Gain (G)

G is the net change in what you can do once you are proficient with the new tool, on a scale from −100 to +100.

- **G = +100:** transformative.
- **G = 0:** no net change; you can do about the same.
- **G < 0:** a loss. You give up capabilities and do not gain enough elsewhere to make up for them. G = −100 means losing nearly everything that mattered.

G captures more work done, done faster, and done with less friction: shorter development, easier debugging, better tooling, fewer errors, speed gained, control (choosing your own setup instead of taking defaults) and a lighter footprint. It also captures what you lose: features, templates, integrations, a larger community. A communication tool is worth only as much as the people you can reach with it, so its gain can be near zero unless your contacts use it. It should be judged over the period you expect to use the tool, so a tool you will use for years can justify a higher G than one you will use once.

G is personal and practical, not theoretical. A tool that can do everything in principle, such as assembly, has maximal theoretical capability, but G counts only what you will actually do with it. If you cannot or will not use that power, or never need it, it adds nothing, and the lost convenience of the old tool counts against it. Every value in this paper is for personal use only.

Compare tools of similar scope. A whole design suite and a single presentation app are not a fair pair, because the suite does far more and the comparison would score the missing breadth as a loss.

G is the only benefit term, and it is entered as 100 − G, so that a small gain is a large cost, a loss costs more than the baseline of no change, and the whole formula reads lower-is-better.

### 2.5 Full and partial switches

\$SM prices a **full switch**: you stop using the old tool, so any capability the old tool had and the new one lacks is lost, and G can be negative.

A **partial switch** adds the new tool for part of your work and keeps the old one for the rest. Nothing is lost, because you can still do the old tool's work with the old tool, so G is never negative: it measures only the capability you add, and E, ST and BT apply to the part you take on. Many apparent losses disappear when a switch is partial: moving from Canva to Office Pro is a loss only if you give Canva up (Section 5).

---

## 3. The \$SM Formula

$$\boxed{\text{\$SM}(A \to B) = 0.3\,E + 0.3\,ST_n + 0.4\,(100 - G) + BT}$$

where A is the old tool and B is the new one, E is the esotericosity of B to someone fluent in A, ST_n is the normalized switch time, G is the gain and BT = 6(β_B − β_A).

Lower is better. The weights give effort (E and ST, 0.6 together) and return (0.4) comparable influence, with gain as the largest single term; they are working estimates (Section 8). BT is added flat, as in SCT, so accessibility is never diluted by weighting.

### 3.1 Range and the baseline

The minimum is −6 (completely familiar, no learning time, maximum gain, escaping a fully barriered tool) and the maximum is 146 (completely alien, maximum switch time, maximum loss of capability, entering a barrier).

The baseline is **40**. Staying with the old tool is a switch with E = 0, ST = 0, BT = 0 and G = 0 (no change), so \$SM(A → A) = 0.4 × 100 = 40. A switch scores below 40 only when its cost is outweighed by its gain, and a switch that loses capability (G < 0) starts above 40 before any cost is added.

| \$SM | Meaning |
|---|---|
| below 20 | A clear win |
| 20 to 40 | Worth switching |
| 40 | Break-even: no net benefit |
| 40 to 60 | Not worth it on current estimates |
| above 60 | Poor: costly and with little to gain |

---

## 4. The Break-Even Rule

Because staying scores 40, a switch pays exactly when

$$\text{\$SM}(A \to B) < 40 \iff 0.3\,E + 0.3\,ST_n + BT < 0.4\,G$$

The left side is the cost of the switch and the right side is the weighted gain. Solving for G gives the required gain:

$$G^* = \frac{0.3\,E + 0.3\,ST_n + BT}{0.4}$$

Switch when your estimated G exceeds G\*. If the cost alone exceeds 40, G\* is above 100 and no gain could justify the switch. G\* is the most useful single number the scale produces: it says how much better the new tool must be to justify the move, before you decide whether it is. A tool with a high E and a long ST needs a high G\*; a tool with a barrier discount needs very little.

Net score Δ = \$SM − 40: Δ < 0 means switch, Δ > 0 means stay, Δ = 0 is a tie. Reading it as a tie-breaker between near-equal options is wise, since G is an estimate and easy to inflate.

---

## 5. Worked Examples

All E, ST, G and β values below are the author's estimates for a typical learner's personal use, not measurements. G in particular reflects what the tool does for you in practice, not what it could do in principle.

### 5.1 Notepad → VS Code (writing code)

- E = 10; ST = 20 h so ST_n = 100 × 20/500 = 4.0; G = 60 so 100 − G = 40; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(10) + 0.3(4.0) + 0.4(40) + (+0.0) = \textbf{20.2}$$

- Baseline 40, so Δ = 20.2 − 40 = −19.8 → **switch**. Required gain G\* = 10.5; estimated G = 60.

### 5.2 Assembly → C++ (general systems programming)

- E = 70; ST = 200 h so ST_n = 100 × 200/500 = 40.0; G = 95 so 100 − G = 5; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(70) + 0.3(40.0) + 0.4(5) + (+0.0) = \textbf{35.0}$$

- Baseline 40, so Δ = 35.0 − 40 = −5.0 → **switch**. Required gain G\* = 82.5; estimated G = 95.

The motivating case for the gain term. An Assembly programmer finds C++ very alien (E = 70) and needs a long road (ST = 200 h), so a cost-only score of 0.5(70) + 0.5(40) = 55.0 would read as an expensive, even foolish, switch. But the gain is very large: far more gets done far faster, the code is easier to debug, and C++ has built-in terminal I/O, so adding debug output is trivial. With G = 95 the score is 35.0, below the baseline of 40, and the switch pays.

### 5.3 C++ → Assembly (everyday programming, full switch)

- E = 85; ST = 500 h so ST_n = 100 × 500/500 = 100.0; G = −80 so 100 − G = 180; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(85) + 0.3(100.0) + 0.4(180) + (+0.0) = \textbf{127.5}$$

- Baseline 40, so Δ = 127.5 − 40 = +87.5 → **stay**. Required gain G\* = 138.8; estimated G = −80.

A terrible switch, and it shows what G measures. In principle assembly can do everything, so its theoretical capability is maximal. But G counts only what you will actually do with a tool: most people cannot and will not do everything in assembly, and almost no one ever needs full assembly. A C++ programmer who goes fully to assembly loses the standard library, types, portability and easy debugging, so the personal gain is a loss: G = −80. E = 85 because registers, calling conventions and manual memory are alien from C++, and ST is 500 h or more (capped at ST_n = 100). Even crediting assembly its full theoretical gain, G = +100, the score would be 55.5, still above the baseline of 40, so the switch fails on cost alone; with G = −80 the required gain G\* is 138.8, above 100, so no gain could justify it. The sensible form is a partial switch (inline assembly for one hot loop), which Section 2.5 prices without the loss. The SCT plane puts C++ and x86 assembly close together (P = 15.6), but that measures syntax and abstraction level; E here also counts habits and tools that do not transfer, so P is only a rough starting point.

### 5.4 Windows → Linux (Ubuntu) (daily development)

- E = 85; ST = 0.5 h so ST_n = 100 × 0.5/500 = 0.1; G = 60 so 100 − G = 40; β: 0.5 → 0 so BT = 6(0 − 0.5) = −3.0

$$\text{\$SM} = 0.3(85) + 0.3(0.1) + 0.4(40) + (-3.0) = \textbf{38.5}$$

- Baseline 40, so Δ = 38.5 − 40 = −1.5 → **switch**. Required gain G\* = 56.3; estimated G = 60.

Author's own switch. E is very high: Unix tools (awk, sed, nano, pwd) and terminal-centred work are alien to a Windows user whose background is batch scripting, even though some of them run on Windows. ST is small, about 30 minutes: Ubuntu is one of the easiest Linux distributions and is similar to Windows for a coder, the terminal is needed very little, anything missing can be looked up (man pages, Stack Overflow), a dedicated 30-minute session covers most of the commands you need, and some important ones (ls, mkdir, rmdir, rm) also exist on Windows. This is a case where the real time is known, so it replaces the recommended estimate of Section 2.2: only the small part you actually need to relearn counts toward ST. E stays high all the same, because Linux feels alien to a Windows user and the terminal must still be used for a few basic things and for later debugging. E and ST are separate: if you had to open a terminal, find the Chrome binary and launch it by hand, that would add ST (more intricacies to understand), not E. Windows has β = 0.5 (it can run free without activation, but with restrictions); Linux has β = 0 (free, no activation, open to modify). G = 60 is an estimate to adjust.

### 5.5 Windows → Linux (Arch) (daily development)

- E = 85; ST = 24 h so ST_n = 100 × 24/500 = 4.8; G = 75 so 100 − G = 25; β: 0.5 → 0.75 so BT = 6(0.75 − 0.5) = +1.5

$$\text{\$SM} = 0.3(85) + 0.3(4.8) + 0.4(25) + (+1.5) = \textbf{38.4}$$

- Baseline 40, so Δ = 38.4 − 40 = −1.6 → **switch**. Required gain G\* = 71.1; estimated G = 75.

Same switch with Arch: a few hours to several days, represented here as 24 h; the full range of 3 to 48 h gives a score between 37.2 and 39.9. Arch's setup is much harder and riskier than Ubuntu's or Windows': you must choose the right partition to boot from, the right partition as root, and install your own tools, and a mistake can leave the system unbootable. That setup friction is access cost, so Arch gets β = 0.75 against Ubuntu's 0, turning the −3 discount into a +1.5 tax. Arch's advantage is that you choose your setup: you can take GNOME for its look or Xfce for its customizability, install exactly that, and build up only the tools you want, instead of receiving a distribution's defaults. It is also much lighter, and for the same reason: Ubuntu ships with many preinstalled applications most users never use, while Arch installs only what you choose. The author's Ubuntu install was over 80 GB without the home folder, while the Arch install is about 30 GB including home. That control and footprint are real gain, so Arch gets G = 75 (the author's estimate of a fair gain over Windows) against Ubuntu's 60 (an estimate to adjust). Because of the extra setup cost, Arch beats Ubuntu only if its control is worth at least 14.8 more gain points.

### 5.6 Excel → Python (pandas) (data analysis)

- E = 60; ST = 120 h so ST_n = 100 × 120/500 = 24.0; G = 75 so 100 − G = 25; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(60) + 0.3(24.0) + 0.4(25) + (+0.0) = \textbf{35.2}$$

- Baseline 40, so Δ = 35.2 − 40 = −4.8 → **switch**. Required gain G\* = 63.0; estimated G = 75.

### 5.7 Python → C++ (embedded firmware)

- E = 55; ST = 300 h so ST_n = 100 × 300/500 = 60.0; G = 80 so 100 − G = 20; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(55) + 0.3(60.0) + 0.4(20) + (+0.0) = \textbf{42.5}$$

- Baseline 40, so Δ = 42.5 − 40 = +2.5 → **stay**. Required gain G\* = 86.3; estimated G = 80.

A Python programmer finds C++ fairly alien (E = 55: manual memory, static types, a build step) and needs a long road (ST = 300 h). G = 80 reflects firmware work that Python handles poorly. The switch misses break-even by a little (G\* = 86.3); if the task is impossible in Python, such as code that must run on a microcontroller without an interpreter, G approaches 100 and the verdict flips.

### 5.8 MATLAB → Python (numerical computing)

- E = 30; ST = 100 h so ST_n = 100 × 100/500 = 20.0; G = 80 so 100 − G = 20; β: 1 → 0 so BT = 6(0 − 1) = −6.0

$$\text{\$SM} = 0.3(30) + 0.3(20.0) + 0.4(20) + (-6.0) = \textbf{17.0}$$

- Baseline 40, so Δ = 17.0 − 40 = −23.0 → **switch**. Required gain G\* = 22.5; estimated G = 80.

The gain is large mainly because of the ecosystem: PyPI and a far bigger community mean more libraries, more answers and more people to work with, while MATLAB offers little that a Python user cannot get elsewhere for free. SCT supports the ease side: Python scores 25.8 against MATLAB's 53.1, so the destination is also easier to write. E = 30 is modest because the array-and-plot workflow transfers. G = 80 is an estimate to adjust.

### 5.9 Photoshop → GIMP (photo retouching)

- E = 25; ST = 80 h so ST_n = 100 × 80/500 = 16.0; G = 20 so 100 − G = 80; β: 1 → 0 so BT = 6(0 − 1) = −6.0

$$\text{\$SM} = 0.3(25) + 0.3(16.0) + 0.4(80) + (-6.0) = \textbf{38.3}$$

- Baseline 40, so Δ = 38.3 − 40 = −1.7 → **switch**. Required gain G\* = 15.8; estimated G = 20.

### 5.10 Hunt and peck → Touch typing (10 fingers) (typing text)

- E = 40; ST = 30 h so ST_n = 100 × 30/500 = 6.0; G = 55 so 100 − G = 45; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(40) + 0.3(6.0) + 0.4(45) + (+0.0) = \textbf{31.8}$$

- Baseline 40, so Δ = 31.8 − 40 = −8.2 → **switch**. Required gain G\* = 34.5; estimated G = 55.

A hunt-and-peck typist tops out near 50 WPM; typing with all ten fingers reaches about 70 WPM, a gain of 20 WPM (40% faster), which is the basis for G = 55. E is moderate: the keyboard is the same, but typing without looking is a different skill. ST is the time to get back to 50 WPM with the new method, estimated at 30 h; most learners are slower than before during the transition. Both methods are free and need no setup, so BT = 0.

### 5.11 Canva → MS Office Pro (visual content, full switch)

- E = 40; ST = 40 h so ST_n = 100 × 40/500 = 8.0; G = −10 so 100 − G = 110; β: 0 → 1 so BT = 6(1 − 0) = +6.0

$$\text{\$SM} = 0.3(40) + 0.3(8.0) + 0.4(110) + (+6.0) = \textbf{64.4}$$

- Baseline 40, so Δ = 64.4 − 40 = +24.4 → **stay**. Required gain G\* = 51.0; estimated G = −10.

A fair comparison sets Canva against the whole Microsoft suite, not against PowerPoint alone, because Canva as a whole does far more than make slides: a large template library, drag-and-drop layout, stock photos and graphics, brand kits, social-media formats, photo and video editing and easy sharing. Office Pro adds real capabilities Canva has no equivalent for: Access (databases), plus Word, Excel and Outlook. Microsoft's communication tools add almost nothing: Skype, which Microsoft retired in May 2025, is worth only as much as the people you can reach with it, so its gain is minimal unless your friends use it. As a full switch (Canva given up) you still lose the design help that matters for visual content, so the net change is a loss: G = −10. E = 40 because a whole suite has different workflows, and ST is about 40 h. Canva's free tier is β = 0 and Office Pro is a paid suite, taken as β = 1, so BT = +6. (Through a school license, β = 0.5, the score is 61.4.) Microsoft's free web apps would remove the barrier but have fewer features, lowering G further. All values are estimates to adjust.

### 5.12 Canva → Office Pro, added alongside (documents and data, partial switch)

- E = 40; ST = 25 h so ST_n = 100 × 25/500 = 5.0; G = 55 so 100 − G = 45; β: 0 → 1 so BT = 6(1 − 0) = +6.0

$$\text{\$SM} = 0.3(40) + 0.3(5.0) + 0.4(45) + (+6.0) = \textbf{37.5}$$

- Baseline 40, so Δ = 37.5 − 40 = −2.5 → **switch**. Required gain G\* = 48.8; estimated G = 55.

The same tools as a partial switch: Canva stays for design, and Office Pro is added for documents, spreadsheets and databases. Nothing is lost, so G is positive. G = 55 reflects what Access, Excel and Word add that Canva cannot do. ST is lower (25 h) because you learn only the parts you need, and the barrier is the same paid suite (BT = +6). The switch now passes break-even narrowly, where the full switch is far from it.

### 5.13 Paper notebook → iPad (taking notes)

- E = 25; ST = 2 h so ST_n = 100 × 2/500 = 0.4; G = 55 so 100 − G = 45; β: 0 → 1 so BT = 6(1 − 0) = +6.0

$$\text{\$SM} = 0.3(25) + 0.3(0.4) + 0.4(45) + (+6.0) = \textbf{31.6}$$

- Baseline 40, so Δ = 31.6 − 40 = −8.4 → **switch**. Required gain G\* = 34.1; estimated G = 55.

A paper notebook is the simplest tool there is (β = 0: cheap, no setup). An iPad with a stylus is paid hardware (β = 1), so BT = +6, SCT's full tax. E = 25 because writing by hand transfers, though writing on glass feels different, and ST is about 2 h to get comfortable. G = 55 reflects searchable handwriting, unlimited pages, undo, backup and everything on one device. All values are estimates to adjust.

### 5.14 MS Word → Google Docs (writing documents)

- E = 15; ST = 5 h so ST_n = 100 × 5/500 = 1.0; G = 12 so 100 − G = 88; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(15) + 0.3(1.0) + 0.4(88) + (+0.0) = \textbf{40.0}$$

- Baseline 40, so Δ = 40.0 − 40 = +0.0 → **tie**. Required gain G\* = 12.0; estimated G = 12.

Two nearly equal tools, so every term is small. Word for the web is free with a Microsoft account (β = 0), as is Google Docs, so the barrier term is 0. (The full desktop app is paid; taking Word as β = 0.5, for example through a school license, gives BT = −3 and a score of 37.0.) E = 15 and ST = 5 h because the editing model is the same. G = 12 reflects real-time collaboration and automatic cloud saving, offset by losing some of Word's advanced formatting. All values are estimates to adjust.

### 5.15 Google Docs → MS Word (writing documents)

- E = 20; ST = 8 h so ST_n = 100 × 8/500 = 1.6; G = 10 so 100 − G = 90; β: 0 → 0 so BT = 6(0 − 0) = +0.0

$$\text{\$SM} = 0.3(20) + 0.3(1.6) + 0.4(90) + (+0.0) = \textbf{42.5}$$

- Baseline 40, so Δ = 42.5 − 40 = +2.5 → **stay**. Required gain G\* = 16.2; estimated G = 10.

The reverse move, taking Word as the free web version (β = 0). E is a little higher (20) and ST a little longer (8 h) because Word has more menus and options to learn. G = 10 reflects advanced formatting and citation tools, set against giving up easy sharing; note that the free web version has fewer features than the desktop app, so G should be lowered if those features are the reason to switch. With the paid desktop app (β = 0.5) the barrier term is +3 and the score is 45.5.

### 5.16 Summary

| Switch | Task | E | ST (h) | G | BT | \$SM | G\* | Verdict |
|---|---|---|---|---|---|---|---|---|
| Notepad → VS Code | writing code | 10 | 20 | 60 | +0.0 | 20.2 | 10.5 | switch |
| Assembly → C++ | general systems programming | 70 | 200 | 95 | +0.0 | 35.0 | 82.5 | switch |
| C++ → Assembly | everyday programming, full switch | 85 | 500 | −80 | +0.0 | 127.5 | 138.8 | stay |
| Windows → Linux (Ubuntu) | daily development | 85 | 0.5 | 60 | −3.0 | 38.5 | 56.3 | switch |
| Windows → Linux (Arch) | daily development | 85 | 24 | 75 | +1.5 | 38.4 | 71.1 | switch |
| Excel → Python (pandas) | data analysis | 60 | 120 | 75 | +0.0 | 35.2 | 63.0 | switch |
| Python → C++ | embedded firmware | 55 | 300 | 80 | +0.0 | 42.5 | 86.3 | stay |
| MATLAB → Python | numerical computing | 30 | 100 | 80 | −6.0 | 17.0 | 22.5 | switch |
| Photoshop → GIMP | photo retouching | 25 | 80 | 20 | −6.0 | 38.3 | 15.8 | switch |
| Hunt and peck → Touch typing | typing text | 40 | 30 | 55 | +0.0 | 31.8 | 34.5 | switch |
| Canva → MS Office Pro | visual content, full switch | 40 | 40 | −10 | +6.0 | 64.4 | 51.0 | stay |
| Canva → Office Pro (added alongside) | documents and data, partial switch | 40 | 25 | 55 | +6.0 | 37.5 | 48.8 | switch |
| Paper notebook → iPad | taking notes | 25 | 2 | 55 | +6.0 | 31.6 | 34.1 | switch |
| MS Word → Google Docs | writing documents | 15 | 5 | 12 | +0.0 | 40.0 | 12.0 | tie |
| Google Docs → MS Word | writing documents | 20 | 8 | 10 | +0.0 | 42.5 | 16.2 | stay |

Eleven things stand out. Assembly → C++ is the case that needs the gain term: cost alone gives 55.0, which reads as expensive, but with G = 95 the score is 35.0 and the switch pays. C++ → Assembly is the terrible switch that shows what G measures: assembly can do everything in principle, yet crediting it even the maximum gain (G = +100) still scores 55.5, above 40, and personal use makes G negative, so it scores 127.5 with a required gain above 100. G counts what you will actually do, not what a tool could do. Ubuntu and Arch both pass break-even narrowly and land almost level (38.5 and 38.4): Arch's harder, riskier setup raises the required gain from 56.3 to 71.1, and the control of choosing your own desktop and tools almost exactly repays it. Arch comes out ahead only if that control is worth at least 14.8 more gain points than Ubuntu's. Python → C++ for firmware misses break-even by a little (G\* = 86.3 against G = 80); if the task is impossible in the old tool, G is close to 100 and the verdict flips. MATLAB → Python pays comfortably (17.0): the ecosystem gain is large, and escaping a paid tool adds a −6 barrier discount. Photoshop → GIMP is a close call decided by the −6 barrier discount, since the gain in capability is small. Canva → Office Pro, as a full switch, is the case of negative gain (64.4): it loses design capability even after counting Access, and pays the full +6 barrier, so it needs G above 51.0 and has G = −10. As a partial switch (Office Pro added alongside Canva) the same tools score 37.5 because nothing is lost. Paper notebook → iPad pays despite the full +6 barrier (31.6) because the gain is large. MS Word and Google Docs are almost a tie in both directions (40.0 and 42.5) when Word is taken as its free web version; with the paid desktop app the barrier splits them (37.0 and 45.5). When the tools are equal, the barrier decides. Notepad → VS Code and Hunt and peck → touch typing are comfortable wins because their costs are low.

---

## 6. Properties

1. **Baseline.** \$SM(A → A) = 40, the cost-free, gain-free baseline. Any switch below 40 beats staying.
2. **Directional.** \$SM(A → B) ≠ \$SM(B → A): E and G depend on who is switching, ST depends on how well you know the origin, and BT flips sign.
3. **Barrier symmetry.** The BT of A → B and of B → A are exact negatives, so a round trip's barrier tax is zero.
4. **Consistency with SCT.** With β ∈ {0, 1} the barrier term reduces to SCT's flat +6, and E is SCT's esotericosity measured relative to the old tool.
5. **Lower is better** on every term, since the gain enters as 100 − G, matching the SCT convention.
6. **Break-even.** A switch pays when G > G\*, where G\* depends only on E, ST and BT.

---

## 7. Relationship to SCT

\$SM is not a separate theory. It is GSCT applied to an actual problem, so it reuses SCT's vocabulary and reduces to SCT's own quantities in specific cases.

### 7.1 Shared structure

| | SCT | \$SM |
|---|---|---|
| Question | How hard is one language to learn? | Is a move between two tools worth making? |
| E | Esotericosity: distance from the farthest corner of the plane | Esotericosity of the new tool relative to the old one |
| Second term | Work distribution (WD), weight 0.3 | Switch time (ST), weight 0.3 |
| Benefit | None; SCT measures difficulty only | Gain G, entered as 100 − G, weight 0.4 |
| Barrier tax | Flat +6 if inaccessible | Flat BT = 6(β_new − β_old), from −6 to +6 |
| Direction | Lower is easier | Lower is better |
| Range | Up to 118.4 | From −6 to 146 (baseline 40) |
| Scope | Languages, and any domain through GSCT | Any tool; languages through SCT |

### 7.2 Exact links

1. **The barrier tax is the same tax.** SCT's BT ∈ {0, 6} equals 6β with β ∈ {0, 1}. For two languages, the barrier term of \$SM is exactly BT_B − BT_A of their SCT scores. Moving from MATLAB (+6) to Python (0) gives −6, and the reverse gives +6.
2. **E is the same concept.** In SCT, esotericosity is distance from an anchor, with the origin farthest. In \$SM the anchor is the old tool, so E is SCT's esotericosity measured from where you stand. For languages the SCT plane supplies a starting estimate (Section 7.3).
3. **The weights are not derived from each other.** SCT's 0.7/0.3 and \$SM's 0.3/0.3/0.4 are both working choices.

### 7.3 Languages: the part of \$SM that SCT supplies

When both tools are programming languages, E can be estimated by P(A, B), the normalized distance between the two languages on the SCT plane, and the barrier term comes straight from SCT's BT values:

$$E(A \to B) \approx P(A,B) = 100 \cdot \frac{\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}}{100\sqrt{2}}$$

$$\text{\$SM}_0(A \to B) = 0.3\,P(A,B) + (BT_B - BT_A)$$

\$SM₀ is the part of the cost SCT supplies. The full score adds the learner's time and gain: \$SM = \$SM₀ + 0.3·ST_n + 0.4(100 − G). P is symmetric, so it ignores that a switch can be harder in one direction; it is a starting point, not a replacement for judgement.

| Switch | SCT(A) | SCT(B) | ΔSCT | P | BT_B − BT_A | \$SM₀ |
|---|---|---|---|---|---|---|
| Assembly x86 → C++ | 52.1 | 44.8 | −7.3 | 15.6 | +0.0 | 4.7 |
| C++ → Assembly x86 | 44.8 | 52.1 | +7.3 | 15.6 | +0.0 | 4.7 |
| Python → Java | 25.8 | 42.2 | +16.4 | 24.6 | +0.0 | 7.4 |
| Python → AC | 25.8 | 32.8 | +7.0 | 11.0 | +0.0 | 3.3 |
| Python → Haskell | 25.8 | 66.7 | +40.9 | 33.3 | +0.0 | 10.0 |
| Python → C++ | 25.8 | 44.8 | +19.0 | 66.6 | +0.0 | 20.0 |
| COBOL → Python | 30.2 | 25.8 | −4.4 | 2.5 | +0.0 | 0.8 |
| MATLAB → Python | 53.1 | 25.8 | −27.3 | 22.4 | −6.0 | 0.7 |
| Python → MATLAB | 25.8 | 53.1 | +27.3 | 22.4 | +6.0 | 12.7 |

Three things are visible. ΔSCT is not the cost of switching. Python → C++ has ΔSCT = 19.0 but a plane distance of 66.6, because both languages score moderately on SCT while sitting far apart on the plane; the difference of two scores hides how alien the move is. And the mirror pair isolates the barrier: MATLAB → Python and Python → MATLAB have the same plane distance (22.4), so their \$SM₀ values (0.7 and 12.7) differ by exactly 12, twice the barrier tax. SCT's barrier term transfers to \$SM exactly, which is the cleanest link between the two models. Third, P is only a rough starting point and can be off in either direction: C++ and x86 assembly are only 15.6 apart on the plane in both directions, far below the E = 70 and 85 judged for the two switches in Section 5, while Python → C++ has P = 66.6 against a judged E = 55. The plane measures syntax and abstraction level, while E also counts habits and tools that do not transfer.

### 7.4 \$SM as a GSCT

GSCT rates any subject on weighted planes with confidence coefficients, after redefining what the axes and the labor term mean for the domain. \$SM is GSCT applied to an actual issue, the decision to switch tools, and each ingredient maps onto it:

| GSCT ingredient | In \$SM |
|---|---|
| Subject | A switch from tool A to tool B, not a single tool |
| Esotericosity E | How alien B is to someone fluent in A |
| Labor term (WD in SCT) | Switch time ST: the labor the switch puts on the person, inspired by WD but simpler |
| Barrier tax BT | Accessibility and setup difference, 6(β_new − β_old) |
| Added plane | Gain G, the return on the switch, entered as 100 − G |
| Weights w_i | 0.3 (E), 0.3 (ST), 0.4 (100 − G) |
| Confidence d_i | Per-plane confidence, cautious in direction (below) |
| Branching | BT depends on the learner's profile |

ST is inspired by WD but is deliberately simpler. WD is anchored (assembly is defined as 100) and can be complex-valued, because a programmer and a compiler can both suffer at once, which needs a second component for the redundant suffering. ST has no redundant suffering: one party, the learner, does the work, so a single number is complete and easy to visualize as time on one line. It is also less carefully developed than WD, because \$SM's axes are simpler than SCT's.

Written in GSCT form with every confidence d_i = 1, \$SM = Σ w_i·D_i + BT, with D₁ = E, D₂ = ST_n and D₃ = 100 − G. Confidence below 1 is not applied by multiplying a cost by d_i, which would make doubt look cheaper; it uses the cautious form in the Fractional variant below. The three GSCT variants each map onto it:

- **Multi-Dimensional.** \$SM is a three-plane Multi-Dimensional GSCT: plane E, plane ST and plane (100 − G), weighted 0.3, 0.3 and 0.4 with confidence 1, plus a flat barrier tax added outside the planes as in SCT.
- **Fractional.** ST and G are both forecasts, so each can carry a confidence coefficient, under one rule: uncertainty about a cost must never make a switch look cheaper. Low confidence therefore pulls each term toward its cautious value, not toward zero. For ST, a confidence d_ST ∈ (0, 1] blends the estimate with the worst case, ST_eff = d_ST·ST_n + (1 − d_ST)·100, which is never below ST_n. For G, a confidence d_G discounts a claimed gain toward 0, replacing a positive G by d_G·G; a loss is not softened by uncertainty. The fractional score is \$SM_frac = 0.3·E + 0.3·ST_eff + 0.4(100 − G_eff) + BT, which equals \$SM when every confidence is 1. With d_ST = 0.8, Windows → Arch rises from 38.4 to 44.2 and Python → C++ from 42.5 to 44.9: doubt about the time makes a switch look worse, never better. For G, a claimed G = 95 for Assembly → C++ at d_G = 0.7 becomes 66.5 and the score 46.4, above 40. This follows the same principle as the renormalized form of GSCT: low confidence must not improve a score.
- **Branched.** BT can depend on the learner's profile, exactly as in Branched GSCT. MATLAB → Python for a student whose university provides a MATLAB license has β_old = 0 instead of 1, so BT = 0 instead of −6 and the score is 23.0 instead of 17.0, with G\* rising from 22.5 to 37.5.

### 7.5 An open link: switch time from work distribution

The one \$SM term SCT does not supply is ST. A natural hypothesis connects it to SCT's work distribution: a switch that raises |WD| (the programmer takes on more of the compiler's labor, as in moving toward assembly) should take longer to learn than the reverse, because the learner must acquire techniques the old tool hid. If true, ST would be asymmetric in a way the plane distance P is not. This is untested. The reverse direction also suggests a source of gain: moving from high |WD| to low |WD|, as from Assembly to C++, shifts labor from the programmer to the compiler, which is exactly the kind of switch where G is large.

---

## 8. Limitations

**Subjective inputs.** E, ST, G and β are estimates, and E and G in particular depend on who is switching and for what.

**Practical versus theoretical capability.** G counts what you will actually do with a tool, not what it could do in principle. Assembly can do everything, and that adds nothing for someone who will never write it. The same tool can therefore have a high G for one person and a negative G for another.

**Scope must match.** A comparison between tools of very different breadth, such as a whole design suite and a single presentation app, scores the missing breadth as a loss. Compare like with like.

**G is easy to inflate.** Gain is a forecast and the term with the largest weight. The break-even rule is best used by estimating G honestly first, then comparing with G\*, rather than adjusting G until the answer is "switch."

**Gain horizon.** G should reflect the whole period of use. A one-off task and a ten-year workflow have very different gains from the same tool.

**ST is a simpler cousin of WD.** It borrows WD's idea of labor placed on a person. It needs no complex component, since only the learner does the work, but it has no anchor scale like WD's, and its cap H = 500 is a working choice. A fuller treatment could give ST the same care WD received.

**Personal ST.** Switch time varies with prior experience, aptitude and how well the old tool was mastered. A population-level ST is a median at best.

**E and ST overlap.** Alien tools usually take longer to learn, so the two terms are correlated and may partly double-count. The weights should be fitted to data.

**Untested weights.** The 0.3/0.3/0.4 split and the cap H = 500 are working choices.

**No lock-in or network effects.** Team conventions, shared files and ecosystem dependence often dominate real switching costs and are not modelled.

**No learning-curve shape.** ST treats proficiency as a single time to target; real learning curves are not linear.

---

## 9. Validation

The model makes three testable claims: (1) people who switch when G > G\* report higher satisfaction a year later than those who switch when G < G\*; (2) ST estimates rank-correlate with measured time-to-proficiency; (3) the barrier term predicts adoption, with switching toward lower β happening more often than the reverse. Each can be tested with surveys or logged learner data.

---

## 10. Conclusion

\$SM gives a single scale to a decision made from gut feeling. It combines the effort of a switch (esotericosity E and switch time ST), its access (barrier tax BT) and its return (gain G, entered as 100 − G) into one score where lower is better, with a baseline of 40 for staying put. Its break-even rule gives a required gain G\* for every switch, so a very alien tool is no longer dismissed on cost alone: Assembly → C++ looks foolish until the gain is counted. It is GSCT applied to a real decision, built from SCT's own parts: the same esotericosity, the same barrier tax, and the same weighted-plane structure. It is deliberately simple and openly subjective, and the next step is measurement.

*Abu Shariff · 2026*
