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
| C2 | Fix broken WordPress image URLs in blog posts (`grep -r "wp-content" blog/ legacy/`) | ⬜ OPEN | — | blog/*.html, legacy/*.html |
| C3 | Verify GA4 (G-DJ2TGEPJ49) + Google Ads (AW-17337315510) tracking on EVERY page | ⬜ OPEN | — | All HTML files |
| C4 | Verify privacy-policy.html is linked from EVERY page footer | ⬜ OPEN | — | All HTML files |
| C5 | Verify canonical URLs point to wang.org.pk (NOT github.io) on EVERY page | ⬜ OPEN | — | All HTML files |

## HIGH PRIORITY (SEO/AEO Impact)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| H1 | Audit homepage: title under 60 chars, impact-first H1, Organization schema validates, urduai.org CTA present | ⬜ OPEN | — | index.html |
| H2 | Audit about page: origin story from 2014, FAQPage schema validates, timeline accurate | ⬜ OPEN | — | about.html |
| H3 | Audit initiatives page: all 6 initiatives listed with metrics, links to external sites correct | ⬜ OPEN | — | initiatives.html |
| H4 | Audit impact page: numbers accurate (800K learners, 50K downloads, 196 graduates, 32K PakSpeed users) | ⬜ OPEN | — | impact.html |
| H5 | Audit blog hub: chronological, proper titles, links work, Article schemas on posts | ⬜ OPEN | — | blog/index.html, blog/*.html |
| H6 | Add Urdu AI CTA banner section to homepage, about, impact, blog hub (drives AdSense revenue) | ⬜ OPEN | — | index.html, about.html, impact.html, blog/index.html, styles.css |
| H7 | Proofread ALL page titles and meta descriptions against QA-AUDIT-CHECKLIST.md standards | ⬜ OPEN | — | All HTML files |
| H8 | Verify all blog posts have correct original datePublished in Article schema | ⬜ OPEN | — | blog/*.html |

## MEDIUM PRIORITY (Quality & Polish)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| M1 | Add real photos to team.html (copy from WALI repo assets/images/) | ⬜ OPEN | — | team.html, assets/images/ |
| M2 | Add OG images to ALL pages (each page needs a relevant og:image) | ⬜ OPEN | — | All HTML files |
| M3 | Review Urdu content in blog posts — ensure lang="ur" dir="rtl" on Urdu sections | ⬜ OPEN | — | blog/*.html with Urdu content |
| M4 | Add media coverage logos (ARY News, Express News, ABN News) to media.html and homepage | ⬜ OPEN | — | media.html, index.html |
| M5 | Test all external links work (urduai.org, walipak.com, pakspeed.com, pakeducate.com, wirepk.com) | ⬜ OPEN | — | All HTML files |
| M6 | Review Ad Grant landing pages (/urduai/, /wali/, /wire/, /programs/, /digital-literacy/) — CTAs correct, tracking works | ⬜ OPEN | — | urduai/, wali/, wire/, programs/, digital-literacy/ |
| M7 | Enhance about.html with board/governance info if available | ⬜ OPEN | — | about.html |
| M8 | Add structured data: Person schema for Qaisar Roonjha on team.html | ⬜ OPEN | — | team.html |

## LOW PRIORITY (Nice to Have)

| # | Task | Status | Owner | Files Affected |
|---|---|---|---|---|
| L1 | Add VideoObject schema to YouTube embeds on homepage/media page | ⬜ OPEN | — | index.html, media.html |
| L2 | Create a /partners/ page listing all institutional partners with logos | ⬜ OPEN | — | partners.html |
| L3 | Add hreflang tags for Urdu blog posts | ⬜ OPEN | — | Urdu blog posts |
| L4 | Compress all images in assets/images/ (under 200KB each) | ⬜ OPEN | — | assets/images/ |
| L5 | Add print stylesheet for blog posts | ⬜ OPEN | — | styles.css |

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
