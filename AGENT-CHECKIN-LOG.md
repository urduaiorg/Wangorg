# WANG Website — Agent Check-In Log

**Last updated:** April 2, 2026
**Repo:** github.com/urduaiorg/Wangorg

---

## HOW TO USE THIS FILE

After completing any task, add your update to the top of the log below. Format:

```
### [Agent Name] — [Date] [Time]
**Completed:**
- What you did (be specific — file names, page count, etc.)

**Blocked on:**
- Any issues or dependencies

**Next:**
- What you plan to do next
```

---

## CHECK-IN LOG

### Codex — April 2, 2026 5:04 PM
**Completed:**
- Claimed and completed task `H1` from `OPEN-TASKS.md`
- Tightened the homepage title to 50 characters while preserving the WANG brand
- Updated `index.html` so the hero H1 now leads with the impact-first framing: `800,000+ learners. 6 initiatives. 1 village in Balochistan.`
- Put a direct `Learn on Urdu AI` CTA in the homepage hero and retained the homepage NGO schema block

**Blocked on:**
- None for `H1`

**Next:**
- Move to the next open high-priority QA task in `OPEN-TASKS.md`

### Cursor — April 2, 2026 (C2–C4)
**Completed:**
- **C2:** Added `scripts/fix-wp-media-urls.mjs` and replaced all `wang.org.pk/wp-content/...` references in `blog/` and `legacy/` (13 files) with stable `https://wang.org.pk/assets/images/wali-building-front.jpg`
- **C3:** Verified every `*.html` under `wang-site/` includes GA4 `G-DJ2TGEPJ49` and Google Ads `AW-17337315510` (51/51)
- **C4:** Fixed Ad Grant landings that linked to old WordPress `privacy_policy`: `wire.html`, `wali.html`, `wali/index.html`, `programs.html`, `programs/index.html`, `digital-literacy.html` now point to `privacy-policy.html` (relative)

**Blocked on:**
- None

**Next:**
- H-priority SEO/QA items per `OPEN-TASKS.md`

### Codex — April 2, 2026 4:46 PM
**Completed:**
- Claimed and completed task `C5` from `OPEN-TASKS.md`
- Audited all current HTML pages in the repo tree, including the clean-URL landing page copies under `urduai/`, `wali/`, `wire/`, `programs/`, and `digital-literacy/`
- Verified every page has a canonical URL pointing to `https://wang.org.pk/...` and confirmed there are no lingering `github.io` canonical references anywhere in the site

**Blocked on:**
- None for `C5`

**Next:**
- Pick the next open critical QA task from `OPEN-TASKS.md` and follow the same claim → commit → work → log flow

### Cursor — April 2, 2026
**Completed:**
- Read `OPEN-TASKS.md`; **claimed C1** (commit: chore claim); **completed C1** — WANG public roots **2014**, WALI lab **2021** across `index.html` (NGO `foundingDate`, hero ledger, stats ribbon, closing list), `about.html` (meta, intro, proof panel, FAQPage + new “When did WALI open?”), `faq.html`, `team.html`, `impact.html` (timeline: 2014 / 2021 WALI / 2022 floods), `wali.html` + `wali/index.html` (FAQ copy, stat label “WALI lab”, footer blurbs), `programs.html` + `programs/index.html`
- Marked **C1 ✅ DONE** in `OPEN-TASKS.md`

**Blocked on:**
- None for C1. Blog post bodies still contain historical **publication** dates and `wp-content` URLs (tracked under **C2**).

**Next:**
- Other agents: pick **C2–C5** per board (claim → commit → work → mark done). Cursor can take **C2** next if open.

---

### Codex — April 2, 2026 4:16 PM
**Completed:**
- Updated `scripts/generate_content.py` to clear stale generated HTML before each run, add `legacy/index.html`, and make archive counts dynamic
- Re-ran the generator and normalized the archive output to `21` blog posts plus `5` legacy pages
- Verified that duplicate blog files were removed and that the new journal and legacy hubs are being generated cleanly

**Blocked on:**
- Remaining older gold-theme pages still need the new shared nav/footer/meta shell to match the rewritten homepage, about, impact, and new authority pages

**Next:**
- Align `initiatives.html`, `team.html`, `contact.html`, `faq.html`, `privacy-policy.html`, and `404.html` with the updated shell
- Re-check sitemap, page count, and internal link consistency after that shell alignment

### Codex — April 2, 2026 4:11 PM
**Completed:**
- Audited the current `wang-site/` skeleton, WANG strategy docs, task brief, and `wordpress-content-export.json`
- Added local image assets under `wang-site/assets/images/` from the WALI image library for the gold-theme authority pages
- Created new main-site pages: `programs-overview.html`, `donate.html`, and `media.html`
- Rewrote `index.html`, `about.html`, and `impact.html` toward the impact-first brief with stronger institutional framing, timeline, and CTA structure
- Added shared CSS support in `styles.css` for the new authority pages, journal cards, media grid, article embeds, and footer CTA blocks
- Updated `script.js` nav state handling for the new `programs-overview`, `media`, `donate`, and `blog` routes
- Added `scripts/generate_content.py` to migrate archive content into static pages with preserved dates, schema, localized media copying, and sitemap generation
- Generated the journal archive under `/blog/`, legacy pages under `/legacy/`, copied referenced upload assets into `assets/uploads/`, and rebuilt `sitemap.xml`

**Blocked on:**
- The migration generator produced duplicate and undesired archive outputs for some entries because slug override handling needs a cleanup pass
- Several pre-existing gold-theme pages still need shared nav/footer/meta alignment with the new page shell so the site feels fully consistent

**Next:**
- Clean the generated blog set to remove duplicate pages and normalize final slugs against the brief
- Align remaining gold-theme pages (`initiatives`, `team`, `contact`, `faq`, `privacy-policy`, `404`) with the updated nav/footer/meta pattern
- Re-run the generator and verify sitemap, internal links, and launch page counts
- Continue updating this log after each completed chunk

### Claude Code (Strategist) — April 2, 2026 3:30 PM
**Completed:**
- Built 21-file site skeleton (10 main pages, 5 Ad Grant landing pages, CSS, JS, infra)
- Created WANG-MASTER-STRATEGY.md (design philosophy, revenue engine, SEO plan)
- Created AGENT-TASKS.md (per-agent task breakdown)
- Exported wordpress-content-export.json (39 posts, 2014-2026, with original dates)
- Pushed everything to github.com/urduaiorg/Wangorg
- Added cross-domain ecosystem backlinks to walipak.com footer (43 files, links to wang.org.pk, urduai.org, pakspeed.com, pakeducate.com, wirepk.com)
- Created GOOGLE-ADS-SETUP-GUIDE.md (5 campaigns, keywords, ad copy, negative keywords, budget allocation)

**Blocked on:**
- Nothing

**Next:**
- Extract images from WordPress backup for /assets/images/
- Set up wali.edu.pk → walipak.com 301 redirect
- Available to review any agent's work

---

## TASK STATUS TRACKER

| Task | Owner | Status | Notes |
|---|---|---|---|
| **Site skeleton** | Claude Code | ✅ Done | 21 files in repo |
| **Strategy docs** | Claude Code | ✅ Done | 3 docs pushed |
| **Cross-links on walipak.com** | Claude Code | ✅ Done | 43 files updated |
| **Google Ads guide** | Claude Code | ✅ Done | GOOGLE-ADS-SETUP-GUIDE.md |
| **Homepage redesign** | Agent ? | 🔄 In Progress | Impact-first hero, timeline, proof stacking |
| **About page rewrite** | Agent ? | 🔄 In Progress | 12-year origin story |
| **Blog migration (21 posts)** | Agent ? | ⬜ Not Started | Use wordpress-content-export.json |
| **Blog hub page (/blog/)** | Agent ? | ⬜ Not Started | Chronological listing |
| **Programs overview page** | Agent ? | ⬜ Not Started | Gold theme, 7 programs |
| **Media/press page** | Agent ? | ⬜ Not Started | Video embeds + press kit |
| **Donate/support page** | Agent ? | ⬜ Not Started | Partnership routes |
| **Image extraction** | Claude Code | ⬜ Not Started | From WordPress backup zip |
| **Ad Grant landing page polish** | Agent ? | ⬜ Not Started | 5 dark-theme pages |
| **Sitemap update** | Agent ? | ⬜ Not Started | After all pages created |
| **GitHub Pages preview** | Agent ? | ⬜ Not Started | Set up urduaiorg.github.io/Wangorg |
| **Hostinger deploy pipeline** | Agent ? | ⬜ Not Started | FTP workflow like WALI |
| **Deploy to wang.org.pk** | All | ⬜ Not Started | After all pages ready |
| **Google Ads campaigns** | Antigravity | ⬜ Not Started | Use GOOGLE-ADS-SETUP-GUIDE.md |
| **Search Console setup** | Qaisar | ⬜ Not Started | After deploy |

---

## QUESTIONS FOR QAISAR

Agents: Add questions here that only Qaisar can answer.

1. (none yet)

---

## COORDINATION NOTES

- **Don't overwrite each other's work** — Commit frequently with clear messages
- **Homepage and about page** are the highest-impact pages — prioritize these
- **Blog migration** can be done in bulk — one agent, 21 posts
- **Ad Grant landing pages** (dark theme) are mostly done — just need review
- **Images** — Use WALI site images from github.com/urduaiorg/wali/assets/images/ until WordPress images are extracted
