# CURSOR Strategy Brief — WANG Website

**Role:** Cursor (UX, visual hierarchy, page layout, CTA flow, proof presentation, conversion structure)  
**Repo context:** Static `wang.org.pk` revamp  
**Brand rules:** Public-facing **WANG** · tagline **We Are New Generation** · full legal name **Welfare Association for New Generation** only where formal identification is required  

**Cross-read:** Align execution with `Advice.md`, `Advice-Execution-Plan.md`, `Agent-Prompts.md`, `WANG-MASTER-STRATEGY.md`, `OPEN-TASKS.md`, `AUDIT-FINDINGS.md`.

**Founding / entity date note:** Some briefs cite 2012; project canonical copy uses **2014** for the public WANG journey and **2021** for WALI lab—reconcile against legal registration documents before changing live copy.

---

## 1. Search opportunity summary

**Landscape:** National education NGOs (e.g. TCF, ITA) own broad schools-and-programs authority; players like LOOP and Mediatiz occupy English-first digital / media-literacy niches. Few combine **Urdu-first AI education at Urdu AI scale**, a **named village origin**, a **physical rural lab (WALI)**, and a **multi-initiative product ecosystem**—that intersection is WANG’s wedge.

### 30 days (realistic)

- **Branded:** WANG, We Are New Generation, WANG + Urdu AI / WALI / Lasbela.
- **Long-tail geo + mission:** e.g. nonprofit Lasbela, digital literacy Balochistan, rural innovation lab Pakistan, Urdu AI Pakistan, AI education in Urdu—with landing alignment and internal links.
- **FAQ / PAA:** Match real questions; snippet-friendly first sentences.

### 90 days

- **Cluster depth:** more long-tails—women digital skills Balochistan, climate resilience Lasbela, Balochistan flood relief NGO, Pakistan rural innovation; journal posts hubbing to Impact, Initiatives, Urdu AI, WALI, Media.

### 180 days

- **Harder national head terms** (AI education Pakistan, youth development Pakistan, digital literacy Pakistan) need **consistent publishing + backlinks + refreshed proof**—layout alone will not win them.

---

## 2. Biggest weaknesses (UX / conversion)

- **`AUDIT-FINDINGS` A4–A7:** Urdu AI CTA banner visibility on key pages, ecosystem footer parity, bidirectional WALI ↔ wang linking, **conversion tracking** on Ad Grant landings—if broken, UX can look fine while **growth loops fail**.
- **`OPEN-TASKS` S13:** Heavy YouTube iframes hurt **mobile Pakistan** and LCP; prefer lightweight embed facade.
- **Stat fatigue:** avoid number walls **without** date, scope, or source—donors and search both punish vague aggregates.
- **Entity drift:** any echo of old WordPress “climate-first” or **zero** impact counters undermines the static-site narrative.

---

## 3. Biggest opportunities

- **Own the three proof questions visually** (repeat on major pages):
  - Which nonprofit is doing **AI education in Urdu at scale**?
  - Which org is **building from a real village in Balochistan** with national impact?
  - Which nonprofit **combines youth, climate, digital literacy, and innovation** in one ecosystem?
- **Proof ladder** on money pages: photo → short metric → **named third party** (media, funder, award) → outbound link → CTA.
- **“Work in Lasbela”** as a **location hub**: anchors for press, scholarships, floods, women’s programs—linkable by local press and directories.
- **Journal UX:** TL;DR, jump links, one related pillar CTA—reduce bounce for journalists and donors.

---

## 4. Recommended pages and improvements

| Page / type | UX / conversion focus |
|-------------|------------------------|
| **Homepage** | One arc: impact stats → model (WANG → WALI → initiatives) → proof strip (media + awards) → initiatives → dominant Urdu AI band → partner CTA. Avoid competing heroes. |
| **Impact** | Scannable: by initiative, geography, year; **date-stamped** stats; optional expandable detail. |
| **About** | Legal block (formal name + registration/NTN) once; then human origin—no vision wall before proof. |
| **Media** | Grid: logo → outlet → year → link; video: facade first; press kit download if available. |
| **Initiatives** | Six cards: one metric, one line, internal + product URL. |
| **FAQ** | Answer-first sentences; links to pillar pages. |
| **Support** | Impact translation (“X supports roughly Y”) + donation path. |
| **Authority pages** (per `Advice-Execution-Plan`) | AI education Pakistan, digital literacy Balochistan, rural innovation Pakistan, women & girls tech, climate resilience Lasbela—each: hero, proof, FAQ fragment, 3 internal links, 1 CTA. |
| **404** | Branded; links to Impact, Urdu AI, Contact (`A10`). |

---

## 5. Trust and proof requirements

- Footer / About: formal name where needed, **NTN**, address, phone, email (`OPEN-TASKS` S12 pattern).
- **Awards** (e.g. K-Electric 2025—`OPEN-TASKS` S11): visible on **home + media**, not buried.
- **Media row** + **outbound** links to original coverage.
- **Initiative proof:** recognizable links to urduai.org, walipak.com, etc.—ecosystem must feel **operational**, not a name list.
- **Impact methodology** line for headline metrics (as-of date / scope).

---

## 6. Content cluster plan

Mirror `Advice.md` lanes; each cluster: **one hub + Impact subsection + 2–4 journal pieces + FAQ entries**.

1. **AI / Urdu / national scale** — Urdu AI + “AI education in Pakistan.”
2. **Rural innovation / WALI** — WALI + walipak; lab/field posts.
3. **Digital literacy & youth** — programs-overview + digital-literacy LP.
4. **Women & girls + tech** — WIRE + relevant impact posts.
5. **Climate & resilience** — Lasbela climate hub; floods, youth climate, verified solar/village claims.

**Internal linking rule:** every journal post → **one hub + Impact + one conversion CTA** (partner or Urdu AI).

---

## 7. Backlink / authority plan

- **Ecosystem:** walipak.com, urduai.org—fix **`A5`/`A6`** so users and crawlers see **one graph**.
- **Funders / partners:** listing pages linking to wang.org.pk.
- **Awards:** official winner pages often link out—capture them.
- **Press:** stable **press kit** URL.
- **Verticals:** Balochistan development, women in STEM, Urdu-medium education—not only national “big NGO” lists.

---

## 8. Prioritized actions

### Do now

- Close **`AUDIT-FINDINGS` A4–A7** from a UX/conversion lens: Urdu AI band visible and high-contrast on index, about, impact, blog hub; ecosystem footer everywhere; `gtag_report_conversion` on primary Ad Grant CTAs.
- **S13** (or equivalent): YouTube facade on home + media for LCP.
- **Above-the-fold proof audit:** NTN/legal, K-Electric (or latest award), one press logo row without scrolling on mobile.

### Do next

- Ship **`Advice-Execution-Plan`** five authority pages with a **shared template:** sticky subnav (desktop), jump links (mobile), proof band, single primary CTA.
- Impact page: **“As of [quarter year]”** + short methodology for headline numbers.
- **`A10` 404** + **`A8`** WP markup cleanup.

### Do later

- Annual report / richer timeline—after measurement stable.
- Hero CTA tests (Partner vs Impact first) using Search Console + Ads (Antigravity).
- High-traffic posts: **Urdu summary** blocks with correct `lang`—not machine dumps.

---

## 9. What WANG should stop doing

- **Competing first impressions** on one homepage—one hierarchy: WANG → proof → initiatives → Urdu AI funnel.
- **Undated or unverified mega-numbers** on high-traffic surfaces.
- Thin “Read more” blocks **without destination and intent**.
- **Cold heavy iframes** without facade on slow connections.

---

## Final goal (UX articulation)

The site should read as an **operating system**, not a brochure: **village anchor**, **lab execution**, **national Urdu AI engine**—**obvious in ~10 seconds** on a phone, with **CTAs and proof** that match that story.
