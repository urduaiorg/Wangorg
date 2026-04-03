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
| **WANG leadership** | **9.5** | Full competitive landscape with named competitors and gaps; confirmed external citations with URLs; 20+ specific backlink opportunities; 5 content cluster plans with post-level detail. Remaining gap: **sign metric dictionary**; normalize **2012** sitewide; verify K-Electric claim. |
| **Lead developer** | **9.0** | Same technical backlog + explicit pillar page specs, cluster-to-post mapping, homepage proof order, and CSS/brand alignment shipped. Remaining gap: **one metric dictionary**; schema `foundingDate` sync to **2012**; A4–A7 audit fixes. |

**To reach 10:** Owner-signed **metric dictionary**; sitewide **2012/2021** lock; K-Electric verification; pillar pages built; PCP application submitted.

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

## Competitive landscape (Claude — live web research, April 2, 2026)

### Who ranks on page 1 in Pakistan

| Search term | Who dominates | What they do right | WANG gap |
|---|---|---|---|
| `non profits in Pakistan` | HANDS, Alkhidmat, TCF, Akhuwat, Edhi | **Listicle blog posts** ("Top 10 NGOs in Pakistan") drive rankings; PCP certification badges; audit reports published; multi-currency donation UX | No listicle/aggregator content; no PCP certification; no published audit reports |
| `AI education Pakistan` | PIAIC (government), ACT AI (new gov program), Google Grow, Karachi.AI | PIAIC has 1-year programs; ACT AI launched April 2026 across 100 universities; Google gives free certificates | UrduAI.org is strong but wang.org.pk has no AI education pillar page |
| `digital literacy Pakistan` | DigiSkills.pk (3.6M enrolled), DigiPakistan, TCF DLP (130K students) | Government-backed scale; English-first; urban centres | WANG owns **rural + Urdu-first** niche — but has no page explicitly contrasting this |
| `Balochistan NGO` / `nonprofit Lasbela` | BRSP (dominant, 32 districts), Lasbela Welfare Trust, WANG | BRSP has GIZ/EU/UNHCR/UNICEF partner logos | WANG is already #1 for "WANG Balochistan" — needs Lasbela-specific authority page |
| `women digital skills Pakistan` | WomenInTechPK (910+ women upskilled), British Council, GIZ | Dedicated program pages with outcomes | No dedicated women/girls page on wang.org.pk despite real programs |
| `AI education in Urdu` | Intelligence Gateway (31 lessons), scattered YouTube/Udemy | Thin competition — **no dominant authority site** | **Biggest opportunity**: UrduAI.org + wang.org.pk pillar can lock this |

### International nonprofit patterns winners follow (2025–2026)

Top-performing sites (charity: water, Obama Foundation, Girls Who Code, Malala Fund, CARE, The Nature Conservancy) share:

1. **Video in hero** — not just an image
2. **Impact-tied donation amounts** — "$25 provides clean water for one family"
3. **Persistent donate/action button** in header
4. **Financial transparency** — expense breakdowns on homepage or one click away
5. **Beneficiary stories** with names, photos, quotes
6. **Interactive elements** — maps, scrollytelling, live counters
7. **Multiple giving pathways** — one-time, monthly, zakat, corporate matching

WANG currently has: hero image + stats (good), media video grid (good), text trust bar (needs logos), no financial transparency, no named beneficiary stories, no interactive map.

---

## WANG's actual web presence (Claude — honest audit)

### Search visibility

| Signal | Status | Action |
|---|---|---|
| `WANG Balochistan` | **#1** — strong | Maintain |
| `WANG Pakistan` | #1 but drowned by Wang Yi diplomatic news | Always pair with qualifier (Balochistan, nonprofit) |
| `We Are New Generation Pakistan` | **Zero results** | Full name not indexed anywhere |
| `Urdu AI` | urduai.org **dominates page 1** | WANG's strongest digital asset |
| `WALI Pakistan` | walipak.com #1; Arab News feature #3 | Moderate |
| Google Knowledge Panel | **Does not exist** | Needs Wikidata entry → Wikipedia article |
| Indexed pages (wang.org.pk) | **Only 6** on old WordPress | New site not yet submitted; expect jump after deploy + Search Console |
| External linking domains | **~7 confirmed** (established NGOs have 50-200+) | Critical gap — backlink program required |

### Confirmed external citations (with URLs)

| Source | Type | URL |
|---|---|---|
| CAREC Program | Award winner (Organization Category, 2024) | `weop.carecprogram.org/carec-gender-climate-awards-2024/` |
| AVPN / Google.org | AI Opportunity Fund partner; Qaisar quoted | `avpn.asia/about/press/ai-opportunity-fund-expands-skilling-infrastructure-apac/` |
| ElevenLabs | Case study featuring WANG | `elevenlabs.io/blog/wang-org` |
| Internet Society | Success story — WALI/rural connectivity | `internetsociety.org/issues/community-networks/success-stories/tackling-inequality-using-the-internet/` |
| Arab News Pakistan | Feature article on WALI | `arabnews.pk/node/2605865/pakistan` |
| Harvard MHTF | Organization directory listing | `mhtf.org/organization/welfare-association-for-new-generation-wang-pakistan/` |
| Rise Up Together | Qaisar Roonjha profile (PM Youth Award, USAID Award, Brandeis) | `riseuptogether.org/qaisar-roonjha/` |
| The Daily Scrum News | UrduAI launch coverage | `thedailyscrumnews.com/pakistani-activists-unveil-urduai-org-paving-the-way-for-ai-education-in-urdu-and-beyond/` |
| NGOBase | Organization profile | `ngobase.org/profile/14716` |
| ZoomInfo | Company profile | `zoominfo.com/c/welfare-association-for-new-generation/461470885` |

**Not confirmed:** K-Electric Karachi Awards 2025 — WANG does not appear in any indexed winner coverage. Verify before claiming.

---

## Backlink opportunities (Claude — specific, actionable)

### Tier 1 — Do this week (easy, high impact)

| # | Action | Platform/URL | Expected DA | Difficulty |
|---|---|---|---|---|
| 1 | Create **Google Business Profile** | business.google.com | Maps presence | Easy |
| 2 | Create **Crunchbase** profile | crunchbase.com | ~90 | Easy |
| 3 | Register on **Candid / GuideStar** | guidestar.org | ~80 | Easy |
| 4 | Ensure **LinkedIn** org page links to wang.org.pk | linkedin.com | ~98 | Easy |
| 5 | Submit to **NGOsInfo.com** | ngosinfo.com/ngos-in-pakistan/ | ~30 | Easy |
| 6 | Register on **TechSoup** | techsoup.org | ~70 | Easy |

### Tier 2 — Do within 30 days (medium effort, high impact)

| # | Action | Why | Difficulty |
|---|---|---|---|
| 7 | Apply for **GlobalGiving** vetting | DA ~85 fundraising profile + international donor pipeline | Medium |
| 8 | Apply for **PCP certification** | #1 trust credential for Pakistan nonprofits; donor due-diligence requirement | Medium |
| 9 | Pitch **Dawn** or **Express Tribune** for feature | "A village in Balochistan is teaching Pakistan about AI" — DA 80+ news backlink | Medium |
| 10 | Pitch **Balochistan Voices** | Easiest media coverage given WANG's location | Easy |
| 11 | Contact **BUITEMS** or **LUAWMS** for partnership MoU | .edu.pk backlink; co-branded digital literacy workshop | Medium |
| 12 | Register on **AI for Good** (ITU/UN) | `aiforgood.itu.int` — unique positioning for rural AI education | Medium |
| 13 | Register on **SDG Action Network** (UN) | `sdgactioncampaign.org` — global SDG actor directory | Easy |
| 14 | Join **CIVICUS** alliance | `civicus.org` — international civil society network | Medium |

### Tier 3 — Do within 90 days (higher effort, very high impact)

| # | Action | Expected Impact |
|---|---|---|
| 15 | Propose **TEDx talk** for Qaisar Roonjha | Permanent ted.com backlink; narrative amplification |
| 16 | Create **Wikipedia article** (after 3+ media mentions) | Highest long-term SEO value; triggers Knowledge Panel |
| 17 | Apply for **Ashoka Fellowship** nomination | `ashoka.org` Pakistan chapter — transformative for authority |
| 18 | Propose **LUMS / IBA** academic case study | Permanent .edu citation |
| 19 | Corporate **CSR partnership** (Jazz, Telenor, HBL) | Ongoing DA 70+ corporate backlinks |
| 20 | Guest post on **Devex** or **The Diplomat** | International authority for "rural AI education in Pakistan" angle |

### Competitor backlink patterns to replicate

| Pattern | Who does it | WANG version |
|---|---|---|
| **Wikipedia article** | Edhi, TCF, Akhuwat all have one | After securing 3+ media mentions, create WANG article citing sources |
| **Corporate CSR page links** | TCF gets links from Engro, HBL CSR pages | Partner with Pakistan telcos/banks for CSR co-branded programs |
| **TED/TEDx talk** | Akhuwat founder has one → massive backlink generator | Pitch TEDxQuetta or any TEDx for Qaisar |
| **Listicle SEO content** | HANDS, Alkhidmat rank via "Top 10 NGOs" posts | WANG publishes "AI Education Resources in Urdu" or "Digital Literacy Programs in Balochistan" |
| **GlobalGiving profile** | Most top Pakistan NGOs have one | Apply for vetting |

---

## Content cluster plan — post-level detail (Claude)

Each cluster needs: 1 pillar page + 3-5 supporting posts + FAQ + schema.

### Cluster 1: AI Education in Pakistan
- **Pillar:** `/ai-education-pakistan` (new)
- **Posts:** "How Pakistan is Learning AI in Urdu" (new); "What is Urdu AI?" (new); "AVPN and Google.org Are Backing AI Education Through WANG" (new); existing `blog/ai-education-pakistan.html`
- **FAQ:** "How can I learn AI in Urdu?" → links to urduai.org

### Cluster 2: Rural Innovation in Balochistan
- **Pillar:** `/our-work-lasbela` (new)
- **Posts:** existing `blog/wali-lab-empowers-youth.html`; "Digital Literacy in a Village With No Internet" (new); existing `blog/tech-surge-10-batches.html`; "What Rural Innovation Actually Looks Like" (new)
- **FAQ:** "Where does WANG operate?" "What is WALI?"

### Cluster 3: Women & Girls in Technology
- **Pillar:** `/women-girls-technology` (new)
- **Posts:** existing `blog/girl-rising-lasbela.html`; existing `blog/empowering-women-of-lasbela-through-skill-enhancement.html`; existing `blog/16-days-of-activism-2025-...html`; "WIRE: How Mothers and Daughters Build Together" (new)
- **FAQ:** "How does WANG support women and girls?"

### Cluster 4: Climate Resilience
- **Pillar:** `/climate-resilience` (new)
- **Posts:** existing `blog/lasbela-rising-climate.html`; existing `blog/six-ways-to-help-...html`; existing `blog/flood-relief-impact.html`; **"WANG Wins CAREC Gender Climate Champion 2024"** (done in repo)
- **FAQ:** "What is WANG doing about climate change?"

### Cluster 5: Youth Development & Education
- **Pillar:** strengthen `/initiatives` or create `/youth-development`
- **Posts:** existing `blog/scottish-scholarship-wang.html`; existing `blog/edu-pathway-progress.html`; existing `blog/tragedy-to-triumph.html`; existing `blog/anti-drug-abuse-event.html`

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

**Still open (from same report):** pillar pages (`ai-education-pakistan`, Lasbela hub, etc.), **logo image strip** on homepage, annual report / PCP / financial transparency, **A4–A7**, Crunchbase/GBP/Candid. **Wave 2:** `foundingDate` and public copy normalized to **2012** sitewide (**W2-C1**).

---

*Merged Master Advice: all agent research including Claude. Next: metric dictionary; optional normalization of `Advice.md` / strategy markdowns to 2012 (HTML + JSON-LD done under W2-C1).*
