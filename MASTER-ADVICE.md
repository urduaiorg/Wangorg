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
| **Not yet merged** | **Claude** — institutional positioning, donor narrative, world-class nonprofit benchmarking *(run `Agent-Prompts.md` Claude section and append here when ready)* |

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
| **WANG leadership** | **8.5** | Clear wedge (Urdu AI scale + village + WALI ecosystem), revenue/Ad Grant logic, trust/legal carryovers, phased timelines. Gap: **no Claude layer** yet for donor-grade narrative, removal list, and institutional tone. Some duplicate agent files create minor confusion. |
| **Lead developer** | **8.0** | Actionable items (A4–A7, S13, conversion tags, footers, lite YouTube, 404). Gap: reconcile **duplicate Antigravity filenames**, confirm **single metric set** for impact (avoid mixing outreach “29M+” with learner “800K+” without definitions). Claude pass won’t block dev but may change **copy/layout emphasis**. |

**To reach 9–10:** Add **Claude** output; dedupe Antigravity docs into one file; add **one owner-signed metric dictionary** (definition + date + source per headline number).

---

## Strategic north star

**Public brand:** **WANG** · **We Are New Generation** · full legal name **Welfare Association for New Generation** only where formal ID is required.

**Entity story (project standard):** WANG public journey **2014**; **WALI** lab **2021**; base **Ahmed Abad Wang, Bela, District Lasbela, Balochistan, Pakistan**.

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
| 1 | **Entity & crawl hygiene:** consistent 2014/2021, NTN/legal in footer, privacy everywhere | Codex / board |
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
- **FAQ intents** (what/where/mission/programs/get involved) — rewrite with 2014/2021/800K+/6 initiatives/Lasbela.  
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
2. **2012 vs 2014:** If legal registration date ≠ public story date, publish **one** clarified sentence (legal vs first public community record).  
3. **File hygiene:** Consolidate duplicate Antigravity markdown filenames to avoid teams implementing different versions.  
4. **Claude gap:** Expect updates to **About / Impact / Support** tone and **what to cut** for institutional credibility — schedule Claude pass before major donor push.

---

## Next step: close the Claude gap

Run the **Claude** section in `Agent-Prompts.md` and add a short appendix here:

- Positioning vs Pakistan + global nonprofits  
- Homepage / About / Impact **narrative** edits  
- **Remove** list (what weakens credibility)  
- Donor-ready proof ordering  

---

*This file is the merged “Master Advice.” Update it when Claude delivers and when leadership signs the metric dictionary.*
