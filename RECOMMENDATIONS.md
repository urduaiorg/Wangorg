# Recommendations

**Purpose:** What to bring forward from the **existing** [wang.org.pk](https://wang.org.pk/) site into the **revamped static** site, plus **writing standards** aligned with **Codex / AGENT-TASKS** content work and **QA-AUDIT-CHECKLIST**.

**Live site reviewed:** April 2026 (homepage, `/about-us`). The public site may still be WordPress until the static deploy completes; treat this as a **content inventory**, not a design spec.

---

## Writing standards (Codex agent brief + QA checklist)

These come from **`AGENT-TASKS.md` (Agent 2: Codex)** and **`QA-AUDIT-CHECKLIST.md`**. Use them whenever adapting old copy.

- **Answer-first:** The first paragraph should answer the page’s search intent (who WANG is, where, what you want the reader to do).
- **Plain language:** Short sentences; avoid slogan stacking without proof.
- **Entity clarity:** WANG = registered non-profit; **founded 2014**; **WALI lab = 2021**; location **Ahmed Abad Wang, Bela, Lasbela, Balochistan, Pakistan**; founder **Qaisar Roonjha** where appropriate.
- **Real numbers:** Prefer verified metrics (800K+ learners, 196+ WALI graduates, etc.). Do **not** migrate placeholder counters.
- **Depth:** Target **minimum ~500 words** on major authority pages where the checklist expects substance (`about`, `impact`, program overviews).
- **Internal links:** Each page should link to **2+** other `wang.org.pk` pages with **descriptive anchors** (not “click here”).
- **SEO shape:** One **H1** with primary keyword; logical **H2/H3**; title under **60** characters; meta description **~150–160** characters with a soft CTA.
- **CTAs:** Primary journeys should surface **Partner With WANG / Contact** and **Learn on Urdu AI** (`urduai.org`) where the strategy calls for revenue funneling.

---

## What to take from the existing website

### Keep or migrate (with rewrite)

| Source on live site | Recommendation |
|---------------------|----------------|
| **Legal / full name** | Use **Welfare Association for New Generation (WANG)** where a formal first mention fits; lead with **WANG** for readability. |
| **Vision & mission blocks** | The **sentiment** is usable (equity, resilience, education); **rewrite** for accuracy (2014 vs WALI 2021) and to match the **impact-first** homepage spec in `WANG-MASTER-STRATEGY.md`. |
| **Program pillars** | Preserve as **topics**, not as duplicate pages: **Youth development**, **climate / LAS**, **digital inclusion / WALI**, **girls’ leadership**, **health and ADI-style well-being**. Map them to **initiatives** + **`programs-overview`** narrative so visitors aren’t lost after URL changes. |
| **“Dialogues for Community Action” / approaches** | Worth a short **methodology** subsection on **About** or **Impact** (community engagement, co-creation)—aligned with the master strategy’s “model” story. |
| **About “Our Journey” / “Our Approach”** | Good **raw material** for a longer About narrative; trim repetition and add **dated milestones** (timeline already on `impact.html`). |
| **Video titles & themes** (homepage “Video List”) | Treat as a **media inventory**: rural innovation, climate resilience Lasbela, girls &amp; film, **Pakistan Scottish Scholarship**, **Brave Beyond BISP / women’s skills**, WALI impact. Most should already appear on or feed **`media.html`** and JSON-LD `VideoObject` where relevant. |
| **Donation block** | **PayPal** link (CAD, business ID in current HTML) — confirm still correct with finance, then mirror on **`support.html`** (or equivalent) with clear **impact framing** (“partnership,” camp cohorts) per strategy. |
| **Footer contact** | **Phone:** +92 0345-3503510 · **Email:** info@wang.org.pk · **Address:** Ahmed Abad Wang, Bela, District Lasbela, Balochistan — keep consistent everywhere. |
| **Social presence** | **Facebook, Twitter/X, YouTube, Instagram** — recover **full URLs** from the live footer or WP admin and add to **Contact / footer** on the static site. |

### Do not migrate as-is

| Source on live site | Why |
|---------------------|-----|
| **“Our Impact Unleashed” counters** | All show **0** on the fetched homepage — looks broken and **conflicts with Ad Grant trust**. Use **real** numbers from the audited copy (`impact.html`, initiatives) or **remove** counters until data is wired. |
| **Duplicate / broken links** | e.g. mixed `/blog` vs `/blogs`, generic “Read More” — replace with **one canonical blog hub** (`/blog/`) and **descriptive** link text. |
| **Typos / grammar** | Examples from live copy: “climate Action” (inconsistent casing), “Community engagement is **on** of our key approach”, stray quotation marks in the WALI blurb — **fix** on import. |
| **Homepage as primary climate site** | Climate is **one** pillar; the **current** revamp leads with **learner scale + six initiatives + WALI/ Urdu AI**. Fold climate into **programs / impact / blog** rather than overshadowing the revenue and clarity goals in `WANG-MASTER-STRATEGY.md`. |

### Optional / phased

| Item | Note |
|------|------|
| **`/about-us/our-approaches`** | If that URL had unique copy, **archive** or **301** to the new About + FAQ; scrape content before WP is retired. |
| **`/adi`** (Adolescent Development) | If still an active program, add a **short** mention under programs or a **blog link** so old bookmarks aren’t a dead end. |
| **Older “LAS” branding** | Either explain as **climate / sustainability** stream under WANG or merge into **impact stories** so SEO isn’t split across unclear acronyms. |

---

## Quick alignment check after migration

- [ ] No **0** or placeholder stats on homepage or impact sections.  
- [ ] **2014** vs **2021 (WALI)** appears correctly wherever founding is mentioned.  
- [ ] **Urdu AI** and **partner** CTAs visible on key pages (see **AUDIT-FINDINGS.md** A4).  
- [ ] **Privacy policy** linked in every **footer** (Ad Grant).  
- [ ] **Donate/PayPal** (if kept) matches active finance instructions.  

---

*For execution tasks, see `OPEN-TASKS.md` and `AUDIT-FINDINGS.md`. For narrative direction, see `WANG-MASTER-STRATEGY.md`.*
