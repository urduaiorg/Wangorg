# WANG Website — Agent Task Assignments

**Date:** April 2, 2026
**Project:** wang.org.pk complete revamp (WordPress → static site)
**Site folder:** `/Users/qroonjha/Downloads/WANG Website Revamp/wang-site/`
**GitHub repo:** To be created at github.com/urduaiorg/wang
**Production domain:** wang.org.pk

---

## CURRENT STATE

The base site is built with 21 files:

### Main Pages (gold/amber WANG theme) — 10 pages
- `index.html` — Homepage ✅
- `about.html` — About WANG ✅
- `initiatives.html` — All 6 initiatives ✅
- `impact.html` — Aggregate impact ✅
- `contact.html` — Contact routes ✅
- `team.html` — Team page ✅
- `faq.html` — FAQ with schema ✅
- `privacy-policy.html` — Ad Grant compliance ✅
- `404.html` — Error page ✅

### Ad Grant Landing Pages (dark theme, standalone CSS) — 5 pages
- `urduai.html` — Urdu AI campaign ✅
- `wali.html` — WALI programs campaign ✅
- `wire.html` — WIRE women's campaign ✅
- `programs.html` — Programs campaign ✅ (NOTE: this is the dark Ad Grant version, not a main site page)
- `digital-literacy.html` — Digital literacy campaign ✅

### Infrastructure — 6 files
- `styles.css` — Full design system ✅
- `script.js` — Scroll animations, nav, parallax ✅
- `sitemap.xml` — 13 URLs ✅
- `robots.txt` ✅
- `.htaccess` — HTTPS, caching, security ✅
- `.github/workflows/deploy-pages.yml` — GitHub Pages deploy ✅

### Missing (needs to be created)
- `assets/images/` — Empty, needs WANG logo + photos
- No Hostinger FTP deploy workflow yet
- No blog/journal pages migrated from WordPress
- Main site `programs-overview.html` (the gold-theme version listing all programs, NOT the dark Ad Grant landing page)

---

## AGENT 1: Claude Code — Infrastructure & Deploy

**Priority: HIGH — Do first**

### Tasks:
1. **Create GitHub repo** `urduaiorg/wang` and push all files
2. **Add GitHub Actions deploy workflow** for Hostinger FTP (same pattern as WALI):
   - Create `.github/workflows/deploy-hostinger.yml`
   - Use FTPS protocol, server IP `88.222.240.117`
   - Secrets needed: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
   - Server dir: `/` (NOT `/public_html/` — the FTP account root is already inside public_html)
3. **Add GA4 + Google Ads conversion tracking** to all main site pages
   - GA4: `G-DJ2TGEPJ49`
   - Google Ads: `AW-17337315510`
   - Add `gtag_report_conversion()` function to pages with CTAs
4. **Cross-link with WALI site** — Add links from wang.org.pk to walipak.com and vice versa
5. **Add Hostinger FTP deploy workflow** (copy from WALI repo pattern)
6. **Final audit** — Validate all schemas, meta tags, internal links, canonical URLs

### Technical Notes:
- The FTP account for wang.org.pk needs to be created in Hostinger (same process as walipak.com)
- Before deploying, rename existing WordPress `public_html` to `public_html_wordpress_backup`
- Deploy new static files to `public_html`
- wang.org.pk DNS is on Cloudflare (not Hostinger nameservers) — check current DNS config

---

## AGENT 2: Codex — Content Enhancement & New Pages

**Priority: MEDIUM — Do after repo is set up**

### Tasks:
1. **Create `programs-overview.html`** — A gold-themed main site page listing all 7 WANG programs delivered through WALI:
   - Digital Literacy Camps
   - WALI Class
   - Youth Support Pathways
   - WALI Zamindar (agriculture)
   - Business Development Pathways
   - Consulting & Training
   - Research & Data Collection
   - This is different from the dark-themed `programs.html` Ad Grant landing page
   - Add to navigation, sitemap

2. **Create `donate.html`** — Support/donate page
   - How to support WANG (donations, volunteering, partnerships)
   - Bank details or donation links if available
   - Impact of donations

3. **Create `media.html`** — Media coverage page
   - List all media mentions (ARY News, Express News, ABN News, Arab News)
   - YouTube video embeds
   - Press kit information
   - Media contact: info@wang.org.pk

4. **Enhance `about.html`** — Add more detail:
   - Timeline: 2021 founding → 2022 first programs → 2023 Urdu AI launch → 2024 national reach → 2025 scale
   - Board members / governance info if available
   - Registration number / legal entity details

5. **Enhance `impact.html`** — Add specific metrics:
   - Per-initiative breakdown (Urdu AI: 800K learners, PakSpeed: 32K users, etc.)
   - Geographic reach map description
   - Partner count
   - Add quotes/testimonials if available

6. **Update `sitemap.xml`** after adding new pages

### Content Guidelines:
- Read WALI's `DEVELOPER-HANDOVER.md` for writing guidelines
- Answer-first introductions
- Plain language
- Include real numbers, dates, locations
- Minimum 500 words per page
- Every page links to 2+ other wang.org.pk pages

---

## AGENT 3: Cursor — Ad Grant Landing Page Polish & Images

**Priority: MEDIUM — Do in parallel with Agent 2**

### Tasks:
1. **Review all 5 Ad Grant landing pages** (dark theme):
   - `urduai.html` — Verify conversion tracking works
   - `wali.html` — Verify CTA links to walipak.com
   - `wire.html` — Verify CTA links to WIRE case study
   - `programs.html` — Verify CTA links to walipak.com/programs
   - `digital-literacy.html` — Verify CTA links to walipak.com/digital-literacy

2. **Add the existing Urdu AI Antigravity page content** to `urduai.html`:
   - The Antigravity team built the current wang.org.pk/urduai page (dark themed, bilingual, with Beehiiv newsletter embed, video grid, FAQ, WhatsApp CTA)
   - The HTML for this page was shared in the project conversation — it's the definitive Urdu AI landing page
   - Replace the current `urduai.html` with that proven, tested content
   - Keep all tracking codes identical

3. **Source and add images** to `assets/images/`:
   - WANG logo (check wang.org.pk or walipak.com for existing logo files)
   - Team photos (check WALI site assets)
   - Initiative logos/icons
   - Hero images (can reuse from WALI site: training photos, lab photos, women's programs)
   - Copy relevant images from WALI repo at `/Users/qroonjha/Downloads/Claude for WALI _ Web/repo/assets/images/`

4. **Update all image references** in HTML files to point to correct `assets/images/` paths

5. **Test mobile responsiveness** on all pages

### Image Sources:
- WALI site images: `/Users/qroonjha/Downloads/Claude for WALI _ Web/repo/assets/images/`
- WordPress backup: `/Users/qroonjha/Downloads/WANG Website Revamp/public_html-2/wp-content/uploads/`
- Live sites: walipak.com, wang.org.pk (current WordPress)

---

## AGENT 4: Antigravity / Marketing — Google Ads Setup

**Priority: HIGH — Do once landing pages are live**

### Tasks:
1. **Verify all 5 landing pages are live and loading** on wang.org.pk
2. **Test conversion tracking** on each landing page (gtag_report_conversion function)
3. **In Google Ads (Ad Grant account):**
   - Keep existing "Urdu AI | Leads – Global" campaign (it's working, 93.4% optimization)
   - Unpause "Urdu AI | Global Free AI Course" campaign
   - Create new campaign: "WANG Digital Literacy" → landing page: wang.org.pk/digital-literacy
   - Create new campaign: "WANG WIRE Women's Programs" → landing page: wang.org.pk/wire
   - Create new campaign: "WANG Rural Innovation (WALI)" → landing page: wang.org.pk/wali
4. **Keyword strategy per campaign:**

   **Urdu AI campaigns (existing):**
   - "learn AI in Urdu", "AI course Pakistan", "ChatGPT Urdu", "free AI certification"

   **Digital Literacy campaign (new):**
   - "digital literacy Pakistan", "computer training Pakistan free", "digital skills course Pakistan", "learn computer Urdu"

   **WIRE campaign (new):**
   - "women digital skills Pakistan", "women empowerment technology Pakistan", "rural women enterprise"

   **WALI campaign (new):**
   - "rural innovation Pakistan", "technology training Balochistan", "digital literacy Balochistan"

5. **Each campaign must have:**
   - Minimum 2 ad groups
   - Minimum 2 Responsive Search Ads per ad group
   - Minimum 2 sitelink extensions
   - Negative keyword list from day 1
   - Conversion tracking active
   - Geographic targeting: Pakistan (primary), Global (secondary for Urdu AI)

6. **Budget allocation:**
   - Urdu AI campaigns: $5,000/month (highest traction)
   - Digital Literacy: $2,000/month
   - WIRE Women's: $1,500/month
   - WALI Rural Innovation: $1,500/month

7. **Monitor weekly:**
   - CTR must stay above 5% (Ad Grant requirement)
   - Review search terms report
   - Add negative keywords for irrelevant queries
   - Adjust bids and budgets based on performance

---

## DEPLOYMENT SEQUENCE

### Step 1: GitHub (Agent 1)
- Create repo, push files
- Set up GitHub Pages for staging preview
- Verify at urduaiorg.github.io/wang

### Step 2: Content Polish (Agents 2 + 3 in parallel)
- Add new pages, enhance content
- Add images
- Review Ad Grant landing pages

### Step 3: Deploy to Hostinger (Agent 1)
- Back up WordPress: rename `public_html` → `public_html_wordpress_backup`
- Create FTP account for wang.org.pk (same process as walipak.com)
- Set up GitHub Secrets for FTP deploy
- Push to trigger auto-deploy
- Fix permissions if needed (`Fix File Ownership` in hPanel)

### Step 4: Post-Deploy (All Agents)
- Verify all pages load on wang.org.pk
- Submit sitemap in Google Search Console
- Purge Cloudflare cache (if wang.org.pk is on Cloudflare)
- Test conversion tracking on all Ad Grant landing pages
- Launch new Google Ads campaigns

---

## CRITICAL NOTES FOR ALL AGENTS

1. **Do NOT break the existing Urdu AI Ad Grant campaign** — it's generating 93 conversions/month. The urduai.html page must maintain identical conversion tracking.

2. **Ad Grant compliance requires:**
   - Privacy policy page accessible from every page
   - Contact information visible
   - Mission statement on homepage
   - No commercial activity
   - CTR above 5%

3. **All canonical URLs must point to wang.org.pk** (NOT github.io)

4. **The dark-themed Ad Grant landing pages (urduai, wali, wire, programs, digital-literacy) have their own standalone CSS** — they do NOT use the main styles.css. Do not try to merge them.

5. **Cross-domain links matter for SEO:**
   - wang.org.pk should link to walipak.com, urduai.org, pakspeed.com
   - walipak.com should link back to wang.org.pk
   - All initiative sites should reference WANG as parent org

6. **Google Analytics ID:** G-DJ2TGEPJ49
   **Google Ads ID:** AW-17337315510
   **Conversion Label:** D1leCLf07P8aELbhictA
   These must be on EVERY page.

---

## REFERENCE FILES

| File | Location | Purpose |
|---|---|---|
| WANG Revamp Plan | `/Users/qroonjha/Downloads/WANG Website Revamp/WANG-REVAMP-PLAN.md` | Full strategic plan |
| WALI Developer Handover | `/Users/qroonjha/Downloads/Claude for WALI _ Web/repo/DEVELOPER-HANDOVER.md` | SEO/content guidelines |
| WALI site (reference) | `/Users/qroonjha/Downloads/Claude for WALI _ Web/repo/` | Design system reference |
| Ad Grant landing pages | `/Users/qroonjha/Downloads/Claude for WALI _ Web/wang-*.html` | Original standalone versions |
| WordPress backup | `/Users/qroonjha/Downloads/WANG Website Revamp/public_html-2/` | Old content/media to migrate |
| Antigravity handover | Shared in conversation | Google Ads technical setup |

---

*Each agent should read this document completely before starting. Coordinate via the GitHub repo — commit frequently, use clear commit messages.*
