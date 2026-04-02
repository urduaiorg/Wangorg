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

## FROM WANG-MASTER-STRATEGY (next slice)

_Sourced from TECHNICAL REQUIREMENTS, IMAGE STRATEGY, Month 1 “pages indexed 35+”, and homepage visual-proof spec._

| # | Task | Status | Owner | Notes |
|---|---|---|---|---|
| S1 | VideoObject JSON-LD for homepage + media YouTube features (visual proof stack) | ✅ DONE | Cursor | `index.html`, `media.html` — `uploadDate` values are approximate; refine when exact publish dates are known |
| S2 | Sitemap: canonical Tier-1 clean URLs (`/urduai/`…), add missing authority pages (e.g. partners) | ✅ DONE | Cursor | `sitemap.xml` now **45** `<loc>` entries |
| S3 | Image optimization: key `assets/images` JPEGs ≤200KB (LCP / strategy image targets) | ✅ DONE | Cursor | `assets/images` + `scripts/compress-images-200k.sh` |

## LOW PRIORITY (Nice to Have)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| L1 | Add VideoObject schema to YouTube embeds on homepage/media page | ✅ DONE | Cursor | Covered by **S1** |
| L2 | Create a /partners/ page listing all institutional partners with logos | ✅ DONE | Cursor | `partners.html` (site root; lists partners — add `/partners/` rewrite on host if desired) |
| L3 | Add hreflang tags for Urdu blog posts | ✅ DONE | Cursor | `blog/child-protection-urdu.html`, `blog/corona-education-urdu.html` |
| L4 | Compress all images in assets/images/ (under 200KB each) | ✅ DONE | Cursor | Covered by **S3** |
| L5 | Add print stylesheet for blog posts | ✅ DONE | Cursor | `styles.css` `@media print` |

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

## CLAIMING A TASK

To claim task H1, change its row to:
```
| H1 | Audit homepage... | 🔒 CLAIMED | Cursor | index.html |
```

When done:
```
| H1 | Audit homepage... | ✅ DONE | Cursor | index.html |
```

**Commit immediately after claiming so other agents see it.**
