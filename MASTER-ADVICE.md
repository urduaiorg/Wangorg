# Master Advice — WANG Website Program

**Compiled:** April 2026 (workspace)  
**Purpose:** Single briefing for **WANG leadership** and **lead developer**, synthesizing agent research already in repo.  
**Canonical roadmap (read first):** `Advice.md`, `Advice-Execution-Plan.md`, `WANG-MASTER-STRATEGY.md`, `OPEN-TASKS.md`, `AUDIT-FINDINGS.md`, `Agent-Prompts.md`.

**Sources merged into this file:**

| Agent / doc | File(s) |
|-------------|---------|
| Codex | `CODEX-RECOMMENDATIONS.md` |
| Cursor | `CURSOR-STRATEGY-BRIEF.md`, `CURSOR-NEXT-TASKS.md` (task themes) |
| Antigravity | `Reccomondations from Antigtavity.md` (full strategy: Ad Grant, clusters, priorities); `Recommendations from Antigtavity.md` (short trust/metrics/feature list) |
| Strategist / board | `Advice.md`, `Advice-Execution-Plan.md`, `QA-AUDIT-CHECKLIST.md`, `AUDIT-FINDINGS.md` |
| **Claude** | **`WANG-Strategic-Research-Report-Claude.md`** — positioning vs Pakistan/global patterns, About/Home/Impact narrative, donor proof ordering, remove list, tone |

---

## How to use this document

1. **Leadership:** Read **§ Strategic north star**, **§ Unified priorities**, **§ Risks & decisions**, and **scores** below.  
2. **Lead developer:** Read **§ Engineering & UX backlog**, **§ Audit gates**, **§ Source of truth conflicts**, and **scores** below.  
3. Everyone: Treat the **old live WordPress site** as an **archive of facts**, not a design template (Codex).

---

## Scores (this compiled brief)

These scores judge **how ready this Master Advice is** as a decision and execution package—not WANG’s mission quality.

| Audience | Score (/10) | Why |
|----------|-------------|-----|
| **WANG leadership** | **9.0** | Wedge + revenue logic + **Claude** narrative architecture (proof order, remove list, About/Impact framing). Remaining gap: **dedupe Antigravity** files; **sign metric dictionary**; normalize **2012 vs 2014** across `Advice.md` and all HTML. |
| **Lead developer** | **8.5** | Same technical backlog as before, now with **explicit copy/section order** from Claude report for homepage/about/impact. Remaining gap: **one metric dictionary**, Antigravity file consolidation, schema `foundingDate` sync to leadership’s final year rule. |

**To reach 9.5–10:** Owner-signed **metric dictionary**; single Antigravity source file; sitewide **2012/2021** (or final chosen dates) in Advice + schemas + pages.

---

## Strategic north star

**Public brand:** **WANG** · **We Are New Generation** · full legal name **Welfare Association for New Generation** only where formal ID is required.

**Entity story (project standard):** WANG community work began in **2012**; **WALI** lab opened in **2021**; base **Ahmed Abad Wang, Bela, District Lasbela, Balochistan, Pakistan**.

WANG should win the clearest answers to:

1. Which nonprofit runs **AI education in Urdu at national scale**?  
2. Which org **builds from a real village in Balochistan** with **national** impact?  
3. Which nonprofit **bundles youth, climate, digital literacy, and innovation** in **one** ecosystem?

**Competitive wedge:** Few peers combine **Urdu-first AI at Urdu AI scale**, **named village origin**, **physical rural lab**, and **multi-initiative products** (Antigravity + Cursor + Advice).

---

## Unified priorities (all agents agree)

### Do now (0–30 days)

| # | Action | Owner lens |
|---|--------|------------|
| 1 | **Entity & crawl hygiene:** consistent 2012/2021, NTN/legal in footer, privacy everywhere | Codex / board |
| 2 | **Ad Grant & conversions:** `gtag_report_conversion` on **primary** CTAs for all five landing pages; verify GA4 + Ads IDs | Antigravity / dev |
| 3 | **Bidding:** Move toward **Maximize Conversions** (not Maximize Clicks) once conversions fire | Antigravity |
| 4 | **Funnel:** **Visible** Urdu AI CTA banners on `index`, `about`, `impact`, `blog/index` (verify `AUDIT-FINDINGS` **A4**) | Cursor / dev |
| 5 | **Ecosystem links:** Footer parity — `walipak`, `urduai`, `pakspeed`, `pakeducate`, `wirepk`; **WALI ↔ wang** reciprocity (**A5, A6**) | Cursor / Codex |
| 6 | **Performance:** Replace heavy YouTube iframes with **facade** pattern (`OPEN-TASKS` **S13**) | Dev |
| 7 | **Proof above the fold:** K-Electric 2025 (and key partner badges) on **home + media**; press strip | Leadership content + dev |

### Do next (31–90 days)

- **Five authority pages** (from `Advice-Execution-Plan.md`): AI education Pakistan, digital literacy Balochistan, rural innovation Pakistan, women & girls tech, climate resilience Lasbela — shared template, internal links to Journal/Impact.  
- **Journal as hub:** awards/annual report/field posts; each post links to **one pillar** + **Impact** + **one CTA**.  
- **Backlink program:** ecosystem ring, award pages, funders, tech press (ProPakistani, Dawn Tech, etc. per Antigravity).  
- **CSR / partner LP** (optional but Antigravity-recommended): high-intent “partner / CSR” page.

### Do later (91–180 days)

- Long-form **evergreen guides** (1,500+ words) for organic dependence reduction.  
- A/B tests on Urdu AI CTA copy (Antigravity).  
- Annual report / awards hub pages as recurring assets.

---

## What to migrate from legacy `wang.org.pk` (Codex + Antigravity overlap)

**Keep / extract:**

- Legal & registration block (Acts, BCRA, NTN), address, standardized **info@wang.org.pk** + phone/WhatsApp (+ hub office if still valid).  
- **Governance structure** (board, exec, finance, programs, comms) — rewrite to match real ops.  
- **FAQ intents** (what/where/mission/programs/get involved) — rewrite with 2012/2021/800K+/6 initiatives/Lasbela.  
- **Success-story video titles** (3–6 strongest on home; full library on media).  
- **Award posts** (K-Electric 2025, CAREC Gender Climate Champion 2024, annual report highlights) — surface on Impact/Media, not only blog.  
- **WALI problem framing** (digital divide, post-COVID, youth hub) — merge into current WALI narrative, don’t copy-paste.  
- Legacy **program themes** (youth, climate, digital inclusion, girls’ leadership, health) — **timeline/history only**, not primary IA.

**Do not carry forward:**

- Hero slider as model; **zero** impact counters; duplicate footers; generic mission-first walls; outdated top-nav (ADI / Campus Kahani, etc.); thin/placeholder pages.

**Impact numbers:** Antigravity short doc cites scholarships/re-enrollments/media reach/solar villages — **leadership must sign off** definitions (e.g. “AI education reach” vs “learners”) before dev standardizes on Impact/Home.

---

## Engineering & UX backlog (developer-facing)

| ID / ref | Task |
|----------|------|
| **A4** | Confirm Urdu AI **banner** visible (not footer-only) on 4 key pages |
| **A5–A6** | Full ecosystem footer + bidirectional WALI link |
| **A7** | `gtag_report_conversion` on Ad Grant LPs primary CTAs |
| **A8** | Strip `<!-- wp:`** remnants from blog HTML |
| **A9** | Validate **og:image** URLs resolve |
| **A10** | Branded **404** with recovery links |
| **S13** | Lite YouTube (or equivalent facade) on home + media |
| **Cursor brief** | One homepage arc; proof ladder; journal TL;DR + jump links; Impact “as of [date]” methodology line |
| **CURSOR-NEXT-TASKS** | Use as operational checklist; many items already marked done on `OPEN-TASKS` — **re-verify** against live deploy |

**Stop (dev + content):** Cold iframes; competing heroes; undated mega-stats; Maximize Clicks as final strategy; burying Urdu AI as “just another initiative.”

---

## Acquisition & revenue (Antigravity summary)

- **Ad Grant** is core arbitrage: cheap acquisition → `/urduai` (and siblings) → **urduai.org** (AdSense).  
- **Clusters:** Urdu AI literacy (volume); rural innovation + digital literacy (authority); women’s tech empowerment (donor alignment).  
- **Trust for cold traffic:** SSL, mission, address/phone, privacy footer; badges early on LPs.  
- **Organic PR:** “800K learners, one village, six products” as **pitchable** factual hook.

---

## Risks & leadership decisions

1. **Metric definitions:** Align Antigravity “29M+ / 50M+” style metrics with H4 audited figures (800K learners, etc.) before public claims spread.  
2. **Date rule:** Public origin = **2012**. WALI lab launch = **2021**. If legal registration date is different, publish **one** clarified sentence separating legal registration from the start of community work.  
3. **File hygiene:** Consolidate duplicate Antigravity markdown filenames to avoid teams implementing different versions.  
4. **Narrative execution:** Implement **`WANG-Strategic-Research-Report-Claude.md`** on Home/About/Impact/Support and align component order with Cursor brief.

---

## Appendix: Claude strategist output (summary)

**Canonical merged file:** **`WANG-Strategic-Research-Report-Claude.md`** — includes April 2, 2026 strategist research, **implementation status** (what shipped in repo vs still open), and the **2012 vs 2014** founding-date flag.

**Shipped from Claude “do now” list (April 2, 2026):**

- `awards.html` — CAREC, K-Electric, partners, Arab News, ElevenLabs, founder awards  
- `blog/carec-gender-climate-champion-2024.html` + journal hub + `sitemap.xml`  
- `media.html` — third-party sources block  
- `index.html` — linked trust badges, footer Explore (Awards, Media, Journal)  
- `team.html` — PM Youth / USAID recognition (with verify note)  
- `styles.css` — `.trust-bar a.trust-badge`  
- `script.js` — `data-page="awards"` active nav  

**Still open (from same report):** pillar pages (`ai-education-pakistan`, Lasbela hub, etc.), **logo image strip** on homepage, annual report / PCP / financial transparency, **A4–A7**, founding-year lock, Crunchbase/GBP/Candid.

---

*Merged Master Advice: all agent research including Claude. Next: metric dictionary + date normalization across `Advice.md` and site HTML.*
