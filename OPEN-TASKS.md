# WANG Website — Open Task Board

**How it works:** Pick a task, change its status to 🔒 CLAIMED by [your name], do it, then mark ✅ DONE. This prevents conflicts.

**Rules:**
1. Only claim ONE task at a time
2. Change status to 🔒 CLAIMED IMMEDIATELY before starting
3. Commit your claim to the repo so others see it
4. When done, mark ✅ DONE and commit
5. Then claim the next task
6. Tasks are in priority order — do top ones first

---

## CRITICAL (Do before deployment)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| C1 | Fix founding date: WANG = 2014, WALI lab = 2021. Check ALL pages, schemas, timeline | ✅ DONE | Cursor | index, about, faq, team, impact, wali/*, programs/* |
| C2 | Fix broken WordPress image URLs in blog posts (`grep -r "wp-content" blog/ legacy/`) | ✅ DONE | Cursor | blog/*.html, legacy/*.html, `scripts/fix-wp-media-urls.mjs` |
| C3 | Verify GA4 (G-DJ2TGEPJ49) + Google Ads (AW-17337315510) tracking on EVERY page | ✅ DONE | Cursor | All 51 HTML files verified |
| C4 | Verify privacy-policy.html is linked from EVERY page footer | ✅ DONE | Cursor | wire*.html, wali/*.html, programs/*.html, digital-literacy.html |
| C5 | Verify canonical URLs point to wang.org.pk (NOT github.io) on EVERY page | ✅ DONE | Codex | All HTML files |

## HIGH PRIORITY (SEO/AEO Impact)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| H1 | Audit homepage: title under 60 chars, impact-first H1, Organization schema validates, urduai.org CTA present | ✅ DONE | Codex / Cursor | index.html (hero H1 Codex; title + dual `@type` NGO/Organization + section CTA Cursor) |
| H2 | Audit about page: origin story from 2014, FAQPage schema validates, timeline accurate | ✅ DONE | Cursor | about.html + Organization JSON-LD |
| H3 | Audit initiatives page: all 6 initiatives listed with metrics, links to external sites correct | ✅ DONE | Cursor | initiatives.html |
| H4 | Audit impact page: numbers accurate (800K learners, 50K downloads, 196 graduates, 32K PakSpeed users) | ✅ DONE | Cursor | impact.html |
| H5 | Audit blog hub: chronological, proper titles, links work, Article schemas on posts | ✅ DONE | Cursor | blog/index.html, blog/*.html |
| H6 | Add Urdu AI CTA banner section to homepage, about, impact, blog hub (drives AdSense revenue) | ✅ DONE | Cursor | index/about/impact/blog + styles.css |
| H7 | Proofread ALL page titles and meta descriptions against QA-AUDIT-CHECKLIST.md standards | ✅ DONE | Cursor | Titles ≤60 sitewide (Latin); meta desc pass deferred where already truncated from WP |
| H8 | Verify all blog posts have correct original datePublished in Article schema | ✅ DONE | Cursor | Article `datePublished` spot-check + 2014 archive |

## MEDIUM PRIORITY (Quality & Polish)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| M1 | Add real photos to team.html (copy from WALI repo assets/images/) | ✅ DONE | Codex | team.html, assets/images/ |
| M2 | Add OG images to ALL pages (each page needs a relevant og:image) | ✅ DONE | Cursor | Relevant og/twitter images per section; insightonconflict post uses on-site asset |
| M3 | Review Urdu content in blog posts — ensure lang="ur" dir="rtl" on Urdu sections | ✅ DONE | Cursor | Full Urdu posts use `lang="ur"` + `article-body-urdu`; others English |
| M4 | Add media coverage logos (ARY News, Express News, ABN News) to media.html and homepage | ✅ DONE | Cursor | `.media-outlet-strip` branded links on index + media |
| M5 | Test all external links work (urduai.org, walipak.com, pakspeed.com, pakeducate.com, wirepk.com) | ✅ DONE | Cursor | HTTP 200 on all six (curl) |
| M6 | Review Ad Grant landing pages (/urduai/, /wali/, /wire/, /programs/, /digital-literacy/) — CTAs correct, tracking works | ✅ DONE | Cursor | GA4 + Ads IDs present; CTAs unchanged |
| M7 | Enhance about.html with board/governance info if available | ✅ DONE | Cursor | Governance section (legal + field accountability) |
| M8 | Add structured data: Person schema for Qaisar Roonjha on team.html | ✅ DONE | Cursor | `Person` JSON-LD + og/twitter photo |

## WAVE 1 — COMPLETED (reference only)

<details>
<summary>Click to expand completed Wave 1 tasks (S1–S14, L1–L5)</summary>

| # | Task | Status | Owner |
|---|---|---|---|
| S1 | VideoObject JSON-LD for homepage + media YouTube features | ✅ DONE | Cursor |
| S2 | Sitemap: canonical Tier-1 clean URLs, 45 entries | ✅ DONE | Cursor |
| S3 | Image optimization: JPEGs ≤200KB | ✅ DONE | Cursor |
| S4 | WebP generation + `<picture>` fallback | ✅ DONE | Cursor |
| S5 | Homepage hero: WALI photo + ARY embed | ✅ DONE | Cursor |
| S6 | Impact timeline: 2017 milestone | ✅ DONE | Cursor |
| S7 | Impact timeline: full 14-year arc (2012–2026) | ✅ DONE | Cursor |
| S8 | Homepage hero: location eyebrow + partnership hint | ✅ DONE | Cursor |
| S9 | Homepage hero: stat row + count-up + parallax | ✅ DONE | Cursor |
| S10 | Verified impact statistics across index/impact | ✅ DONE | Antigravity |
| S11 | K-Electric trust signal on homepage + media | ✅ DONE | Antigravity |
| S12 | NTN + registration details in all footers | ✅ DONE | Antigravity |
| S14 | Awards page, CAREC post, media third-party links, trust badges | ✅ DONE | Cursor |
| L1–L5 | VideoObject, partners page, hreflang, compression, print CSS | ✅ DONE | Cursor |

</details>

---

## ============================================================
## WAVE 2 — AUTHORITY, CONTENT & REVENUE ENGINE
## ============================================================

**Context for all agents:** Read `MASTER-ADVICE.md` before starting. It contains the competitive landscape, WANG's actual web presence audit, confirmed external citations, backlink opportunities, and content cluster plans. Every task below comes from that research.

**Key facts (lock these in your work):**
- WANG community work began: **2012** (not 2014)
- WALI lab opened: **2021**
- Base: Ahmed Abad Wang, Bela, District Lasbela, Balochistan, Pakistan
- Full legal name: Welfare Association for New Generation (use only where formal ID needed)
- Public brand: **WANG** · tagline: **We Are New Generation**

---

### 🔴 CRITICAL — Fix before anything else

| # | Task | Status | Owner | Details |
|---|---|---|---|---|
| W2-C1 | **Fix founding date 2014 → 2012 sitewide** | ✅ DONE | Cursor | Change EVERY occurrence of “founded in 2014”, “since 2014”, “Public roots since 2014”, “community work since 2014” to **2012**. Fix `foundingDate` in ALL JSON-LD schemas. Fix timelines on about.html and impact.html. Do NOT change blog post `datePublished` values or “The Welcome Blog” 2014 date (that's a publication date). Verify: `grep -rn “2014” *.html blog/*.html legacy/*.html \| grep -iv “datePublished\|dateModified\|uploadDate\|2014-”` |
| W2-C2 | **Fix audit findings A4–A7** | ✅ DONE | Cursor | See `AUDIT-FINDINGS.md`. (A4) Verify Urdu AI CTA **banner** visible on index, about, impact, blog/index — not just footer. (A5) Footer ecosystem links: walipak.com, urduai.org, pakspeed.com, pakeducate.com, wirepk.com on ALL pages. (A6) wang.org.pk footer must link back to walipak.com (“Visit WALI”). (A7) ALL 5 Ad Grant landing pages must have `gtag_report_conversion()` on primary CTAs with label `D1leCLf07P8aELbhictA`. Without A7, cannot switch to Maximize Conversions bidding = $9K/month Ad Grant wasted. |
| W2-C3 | **Fix audit findings A8–A10** | ✅ DONE | Cursor | (A8) Strip `<!-- wp:` remnants: `grep -r “wp:” blog/*.html`. (A9) Validate og:image URLs resolve to real files: `grep -r “og:image” *.html blog/*.html`. (A10) Verify 404.html has nav, links home, matches site design. |
| W2-C4 | **Verify K-Electric Karachi Awards 2025 claim** | 🔒 CLAIMED | Claude | Claude research found WANG does NOT appear in any indexed coverage of KHI Awards 2025 winners. Express Tribune article names 45 winners — WANG not among them. **Either provide proof (certificate, email, photo) or downgrade the claim** from “Winner” to “Finalist” / “Nominee” / remove entirely. Do not make unverifiable claims on a nonprofit site. |

---

### 🟠 HIGH PRIORITY — Pillar pages (search authority)

These are the biggest SEO opportunities from the competitive research. Each page should follow the WANG site design (navy + gold, Poppins/Roboto, 15px radius), include proper schema, internal links to 3+ related blog posts, and a CTA to either “Partner With WANG” or “Learn on Urdu AI”.

| # | Task | Status | Best for | Details |
|---|---|---|---|---|
| W2-H1 | **Create `/ai-education-pakistan.html` — AI Education in Pakistan pillar** | 🔒 CLAIMED | Codex | **Biggest keyword opportunity.** No one owns “AI education Pakistan” authoritatively. Content: (1) What AI education looks like in Pakistan today (PIAIC, DigiSkills, ACT AI — acknowledge them, then differentiate WANG). (2) The Urdu-first gap — 60% of Pakistan speaks Urdu as first language but most AI courses are English. (3) What WANG/Urdu AI built — 29M+ reach, 50K+ app downloads, AVPN/Google.org partnership. (4) How someone can start learning AI in Urdu → CTA to urduai.org. Schema: `Article` + `BreadcrumbList`. Internal links to: `blog/ai-education-pakistan.html`, `urduai.html`, `impact.html`, `initiatives.html`. Target keywords: `AI education Pakistan`, `AI education in Urdu`, `learn AI Urdu`, `AI course Pakistan free`. Min 1,200 words. |
| W2-H2 | **Create `/our-work-lasbela.html` — WANG in Lasbela, Balochistan** | ⬜ OPEN | Codex or Cursor | **Location authority page.** Only 2–3 competitors for “nonprofit Lasbela” — WANG can dominate. Content: (1) Where is Lasbela — map, context (60% of Balochistan has no internet). (2) WANG's 14-year presence in Ahmed Abad Wang. (3) What WANG does in Lasbela — WALI lab, camps, scholarships, flood relief, climate work. (4) Impact numbers specific to Lasbela. (5) How to visit or partner. Schema: `Article` + `Place` + `BreadcrumbList`. Internal links to: about.html, impact.html, `blog/flood-relief-impact.html`, `blog/lasbela-rising-climate.html`, `blog/girl-rising-lasbela.html`. Target keywords: `nonprofit Lasbela`, `education Lasbela Balochistan`, `NGO Balochistan`, `rural innovation Balochistan`. |
| W2-H3 | **Create `/women-girls-technology.html` — Women & Girls in Technology** | ✅ DONE | Cursor | **Zero competition** for “women digital skills Balochistan” or “girls education Balochistan.” Content: (1) The gender digital divide in Pakistan (only 8% of Pakistani women have used internet; 78% of poorest Balochistan girls never attend school). (2) What WANG does — WIRE program, mother-daughter model, digital skills, solar-powered production. (3) Stories — link to existing blog posts. (4) CAREC Gender Climate Champion 2024 as validation. Schema: `Article` + `BreadcrumbList`. Internal links to: `blog/girl-rising-lasbela.html`, `blog/empowering-women-of-lasbela-through-skill-enhancement.html`, `blog/16-days-of-activism-2025-...html`, `wire.html`, `awards.html`. |
| W2-H4 | **Create `/climate-resilience.html` — Climate Resilience in Lasbela** | ✅ DONE | Cursor | Content: (1) Climate impact on Lasbela/Balochistan — floods, heat. (2) WANG's response — 875 climate leaders, 50 homes rebuilt, 9 solar villages. (3) CAREC Gender Climate Champion 2024 win (link to `awards.html` and `blog/carec-gender-climate-champion-2024.html`). (4) Community-led model. Schema: `Article` + `BreadcrumbList`. Internal links to: `blog/lasbela-rising-climate.html`, `blog/flood-relief-impact.html`, `blog/six-ways-to-help-...html`. Target: `climate resilience Lasbela`, `climate action Pakistan NGO`. |
| W2-H5 | **Create `/digital-literacy-balochistan.html` — Digital Literacy in Rural Pakistan** | ⬜ OPEN | Codex or Cursor | Content: Contrast WANG's rural, Urdu-first, in-person model vs DigiSkills.pk (3.6M enrolled but urban, English, internet-dependent). WALI lab as physical proof. 1,322 digital skills trainees. Schema: `Article` + `BreadcrumbList`. Target: `digital literacy Balochistan`, `rural digital skills Pakistan`. |
| W2-H6 | **Add partner logo images to homepage** | ⬜ OPEN | Cursor or Antigravity | Current trust bar is text-only pills. Add actual SVG/PNG logos for: AVPN, Google.org, Internet Society, CAREC. Save to `assets/images/partners/`. Show in a dedicated logo strip on homepage below trust bar. Visual logos convert 5x better than text. Verify: each logo links to the partner's page about WANG (URLs in `MASTER-ADVICE.md` § confirmed citations). |

---

### 🟡 MEDIUM PRIORITY — Content & trust

| # | Task | Status | Best for | Details |
|---|---|---|---|---|
| W2-M1 | **Create `/annual-report.html` — Annual Report 2025** | ⬜ OPEN | Cursor or Claude | Even a 4-page summary. Required for PCP certification and donor trust. Include: mission summary, 2025 highlights, impact numbers, financials overview (at least expense breakdown pie chart), team, looking ahead. Link from footer and about page. Every top Pakistan NGO (TCF, HANDS, Akhuwat) publishes this. |
| W2-M2 | **Write 4 new blog posts for content clusters** | ⬜ OPEN | Any agent | Pick from the cluster plans in `MASTER-ADVICE.md`. Priority posts: (1) “How Pakistan is Learning AI in Urdu” (→ links to W2-H1 pillar). (2) “WANG Wins K-Electric Karachi Awards 2025” if claim verified (→ links to awards.html). (3) “WIRE: How Mothers and Daughters Build Together” (→ links to W2-H3 pillar). (4) “Digital Literacy in a Village With No Internet” (→ links to W2-H5 pillar). Each post: 800+ words, Article schema with correct datePublished (April 2026), BreadcrumbList, og:image, internal links to pillar + impact + one CTA. |
| W2-M3 | **Strengthen about.html with 2012 origin and governance** | ⬜ OPEN | Cursor or Claude | (1) Origin story must start from 2012 (not 2014). (2) Show organizational structure clearly: Board of Directors, Executive Director, Finance & Admin, Program Management, Communications & Advocacy. (3) Add legal proof block higher on page: Balochistan Charities Act, Societies Act, Voluntary Social Welfare Act, BCRA number, NTN 7426613. (4) Link to annual report when W2-M1 is done. |
| W2-M4 | **Update impact.html with full verified stats** | ⬜ OPEN | Cursor | Add missing stats from Antigravity recommendations: 50M+ digital media engagements, 1,322 digital skills trainees, 875 climate leaders, 50 homes rebuilt, 9 solar villages. Add “as of April 2026” methodology line. Add CAREC 2024 and AVPN partnership to timeline. Separate “reach” (29M+) from “learners” (800K+) clearly — leadership must sign off definitions. |
| W2-M5 | **Update media.html with all confirmed third-party sources** | ✅ DONE | Antigravity | Ensure ALL confirmed citations from Claude research are linked: (1) ElevenLabs case study: `elevenlabs.io/blog/wang-org`. (2) Internet Society: `internetsociety.org/issues/community-networks/success-stories/tackling-inequality-using-the-internet/`. (3) Arab News: `arabnews.pk/node/2605865/pakistan`. (4) AVPN press release: `avpn.asia/about/press/ai-opportunity-fund-expands-skilling-infrastructure-apac/`. (5) TDS News: `thedailyscrumnews.com/pakistani-activists-unveil-urduai-org-paving-the-way-for-ai-education-in-urdu-and-beyond/`. (6) CAREC: `weop.carecprogram.org/carec-gender-climate-awards-2024/`. (7) Harvard MHTF: `mhtf.org/organization/welfare-association-for-new-generation-wang-pakistan/`. Each as a card with source name, brief description, and outbound link. |
| W2-M6 | **Update team.html — Qaisar's full credentials** | ⬜ OPEN | Any agent | Add: PM Youth Excellence Award 2022, USAID Youth Activist of the Year Award, Brandeis Heller School (source: riseuptogether.org/qaisar-roonjha/). These are major personal authority signals that strengthen WANG's institutional credibility. |
| W2-M7 | **Replace YouTube iframes with lite-youtube-embed** | ⬜ OPEN | Codex or Cursor | (was S13) Use `lite-youtube-embed` or equivalent facade pattern on `index.html` and `media.html`. Reduces LCP by 2-3 seconds. Import from CDN or bundle locally. Each embed needs: `videoid`, `playlabel`, poster image. |
| W2-M8 | **Add sitemap entries for all new pages** | ⬜ OPEN | Any agent | After pillar pages are created (W2-H1 through W2-H5), add them to `sitemap.xml` with `<priority>0.8</priority>` and `<changefreq>monthly</changefreq>`. Also add `awards.html` and any new blog posts. |

---

### 🟢 LOWER PRIORITY — Authority building & polish

| # | Task | Status | Best for | Details |
|---|---|---|---|---|
| W2-L1 | **Create Wikidata entry for WANG** | ⬜ OPEN | Leadership/Claude | Create a Wikidata item for “Welfare Association for New Generation” with: instance of (P31) = nonprofit organization; country (P17) = Pakistan; inception (P571) = 2012; headquarters location (P159) = Ahmed Abad Wang; official website (P856) = wang.org.pk; founder (P112) = Qaisar Roonjha. This is the first step toward a Google Knowledge Panel. |
| W2-L2 | **Internal linking audit — every pillar links to 3+ posts, every post links to 1 pillar** | ⬜ OPEN | Codex | After pillar pages exist: verify every pillar page links to 3+ supporting blog posts, and every blog post links back to at least 1 pillar page + impact.html + 1 CTA (contact or urduai.org). This is how topic authority works. |
| W2-L3 | **Create Google Business Profile for WANG** | ⬜ OPEN | Leadership | Go to business.google.com. Create profile for WANG's office in Ahmed Abad Wang, Balochistan. Add photos, hours, website link. This appears in Google Maps and local search. |
| W2-L4 | **Register on Crunchbase, Candid/GuideStar, TechSoup** | ⬜ OPEN | Leadership | Free profiles on high-DA sites. Crunchbase (~DA 90), Candid/GuideStar (~DA 80), TechSoup (~DA 70). Each provides a backlink to wang.org.pk. |
| W2-L5 | **Submit to NGO directories** | ⬜ OPEN | Leadership | Register WANG on: NGOsInfo.com/ngos-in-pakistan/, GlobalGiving (apply for vetting), SDG Action Network (sdgactioncampaign.org), AI for Good (aiforgood.itu.int). |
| W2-L6 | **Apply for PCP certification** | ⬜ OPEN | Leadership | Pakistan Centre for Philanthropy certification is the #1 trust credential for Pakistan nonprofits. Required: organizational documents, audited financials, governance policies. |
| W2-L7 | **Pitch media coverage** | ⬜ OPEN | Leadership | Story angle: “A village in Balochistan is teaching Pakistan about AI.” Pitch to: (1) Dawn — features editor (DA ~80). (2) Express Tribune — Pakistan section. (3) Balochistan Voices — easiest win. (4) ProPakistani — tech angle. (5) Devex — international development audience. |
| W2-L8 | **Write listicle SEO content** | ⬜ OPEN | Any agent | HANDS and Alkhidmat rank via “Top 10 NGOs in Pakistan” listicle posts. WANG should publish: “AI Education Resources in Urdu — Complete Guide” and/or “Digital Literacy Programs in Balochistan.” These capture informational searches and link to WANG's pillar pages. |

---

## DEPLOYMENT TASKS (Qaisar only)

| # | Task | Status | Owner |
|---|---|---|---|
| D1 | Create FTP account for wang.org.pk on Hostinger | ⬜ OPEN | Qaisar |
| D2 | Add FTP secrets to GitHub repo (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD) | ⬜ OPEN | Qaisar |
| D3 | Rename wang.org.pk public_html to public_html_wordpress_backup | ⬜ OPEN | Qaisar |
| D4 | Trigger deploy and verify wang.org.pk loads | ⬜ OPEN | Qaisar |
| D5 | Purge Cloudflare cache for wang.org.pk | ⬜ OPEN | Qaisar |
| D6 | Submit sitemap in Google Search Console | ⬜ OPEN | Qaisar |
| D7 | Set up wali.edu.pk → walipak.com 301 redirect | ⬜ OPEN | Qaisar |

---

## AGENT ASSIGNMENT GUIDE

**Which agent should take which tasks:**

| Agent | Primary tasks | Why |
|---|---|---|
| **Codex** | W2-C1, W2-C3, W2-H1, W2-H2, W2-L2, W2-M7, W2-M8 | Technical SEO, schema, internal linking, site architecture, crawlability |
| **Cursor** | W2-C2, W2-H3, W2-H4, W2-H5, W2-H6, W2-M3, W2-M4 | UX, visual hierarchy, page layout, CTA flow, proof presentation |
| **Antigravity** | W2-C2 (A7 specifically), W2-M1, W2-M2, W2-M5, W2-M6 | Ad Grant, landing pages, conversion tracking, content, trust signals |
| **Claude** | W2-C4, W2-L1, W2-L8, quality review of all pillar pages before merge | Positioning, trust narrative, nonprofit benchmarking, strategic QA |
| **Leadership (Qaisar)** | W2-L3, W2-L4, W2-L5, W2-L6, W2-L7, D1–D7 | External accounts, partnerships, certifications, deployment |

**Any agent can take any task** — the “Best for” column is a suggestion, not a rule. The claim system prevents conflicts.

---

## CLAIMING A TASK

To claim task W2-H1, change its row to:
```
| W2-H1 | Create `/ai-education-pakistan.html`... | 🔒 CLAIMED | Cursor | ... |
```

When done:
```
| W2-H1 | Create `/ai-education-pakistan.html`... | ✅ DONE | Cursor | ... |
```

**Commit immediately after claiming so other agents see it.**
