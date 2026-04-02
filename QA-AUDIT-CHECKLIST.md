# WANG Website — QA Audit Checklist

**Auditor:** Claude Code (Strategist)
**Purpose:** Every page must pass this checklist before deployment to wang.org.pk
**Standard:** International non-profit website quality (Obama Foundation, WaterAid tier)

---

## 1. SEO AUDIT (Per Page)

### Title Tags
- [ ] Under 60 characters
- [ ] Contains primary keyword
- [ ] Includes "WANG" brand
- [ ] Unique across all pages (no duplicates)
- [ ] Format: "[Topic] | WANG — We Are New Generation"

### Meta Descriptions
- [ ] 150-160 characters
- [ ] Contains primary keyword naturally
- [ ] Includes call-to-action language
- [ ] Unique across all pages
- [ ] Compelling — would you click this in search results?

### Heading Hierarchy
- [ ] Exactly ONE H1 per page
- [ ] H1 contains primary keyword
- [ ] H2s are used for major sections
- [ ] H3s nest under H2s (never skip levels)
- [ ] No heading is purely decorative

### Canonical URLs
- [ ] Present on every page
- [ ] Points to wang.org.pk (NOT github.io)
- [ ] Correct path (no typos)
- [ ] HTTPS protocol

### Open Graph + Twitter Cards
- [ ] og:title present and matches page title
- [ ] og:description present and matches meta description
- [ ] og:url present and correct
- [ ] og:image present and points to a real image
- [ ] og:type is "website" or "article"
- [ ] twitter:card is "summary_large_image"

### Internal Linking
- [ ] Every page links to 2+ other wang.org.pk pages
- [ ] Blog posts link back to their hub (/blog/)
- [ ] Initiative pages link to external sites (urduai.org, walipak.com, etc.)
- [ ] No orphan pages (every page reachable from navigation or hub)
- [ ] Descriptive anchor text (NOT "click here")

### URL Structure
- [ ] Lowercase, hyphen-separated
- [ ] Descriptive (not random strings)
- [ ] No .html extension exposed if clean URLs configured
- [ ] Consistent across site

---

## 2. AEO AUDIT (Answer Engine Optimization)

### Entity Clarity
- [ ] "WANG" is clearly identified as a non-profit organization
- [ ] "We Are New Generation" appears as tagline/description
- [ ] Location clearly stated: Ahmed Abad Wang, Bela, Lasbela, Balochistan, Pakistan
- [ ] Founding year: 2014 (NOT 2021 — 2021 is when WALI lab opened)
- [ ] Founder: Qaisar Roonjha
- [ ] Relationship to WALI clearly explained (WANG is parent non-profit, WALI is the lab)

### Structured Data
- [ ] Homepage: Organization schema with name, description, foundingDate, founder, address, knowsAbout, sameAs
- [ ] About page: Organization + FAQPage schemas
- [ ] Blog posts: Article schema with headline, datePublished (original date!), author, publisher
- [ ] FAQ page: FAQPage schema
- [ ] All pages: BreadcrumbList schema
- [ ] Validate ALL schemas at https://search.google.com/test/rich-results

### Answer-First Content
- [ ] First paragraph of every page directly answers the page's search intent
- [ ] Short factual sentences that AI can extract
- [ ] Visible dates, numbers, locations, names
- [ ] Scannable subheadings that are actual questions people search

---

## 3. BRANDING AUDIT

### WANG Identity
- [ ] "WANG" is the primary brand name everywhere
- [ ] "We Are New Generation" is the tagline
- [ ] "Welfare Association for New Generation" appears ONLY in footer legal text
- [ ] WANG is positioned as the non-profit parent (not as just another project)
- [ ] Color scheme: Gold/amber accent (#D4A017) consistent throughout

### Hierarchy
- [ ] WANG → WALI → Products (this hierarchy is clear on every page)
- [ ] WALI is described as "WANG's rural innovation lab" (not independent)
- [ ] Urdu AI is described as "a WANG initiative" or "built at WALI"
- [ ] All 6 initiatives credited to WANG

### Tone
- [ ] Professional and institutional (donor/partner audience)
- [ ] Impact-focused (numbers before narratives)
- [ ] Human (real photos, real stories, real names)
- [ ] NOT: corporate jargon, startup buzzwords, or generic non-profit language
- [ ] NOT: "empowering communities" / "bridging gaps" / "making a difference" (overused)
- [ ] YES: specific claims with evidence ("trained 196 people in 6 districts")

### Visual Consistency
- [ ] Montserrat font throughout
- [ ] Gold/amber accent consistent (not switching between colors)
- [ ] Real photos (not stock, not icons for major sections)
- [ ] Consistent spacing, card styles, button styles
- [ ] Mobile responsive on all pages

---

## 4. REVENUE ENGINE AUDIT

### Urdu AI Traffic Funnel
- [ ] Every main page has at least ONE link to urduai.org
- [ ] Homepage has prominent "Learn on Urdu AI" CTA
- [ ] Footer has permanent urduai.org link on every page
- [ ] Blog posts mention Urdu AI where relevant with link
- [ ] Links use descriptive anchor text ("Learn AI in Urdu — free on Urdu AI")

### Ad Grant Compliance
- [ ] Privacy policy page exists and is linked from every page footer
- [ ] Contact information visible on every page (footer)
- [ ] Mission statement on homepage
- [ ] No direct commercial product promotion (PakEducate is social enterprise, position carefully)
- [ ] All Ad Grant landing pages load fast and match keyword intent
- [ ] Conversion tracking code on all landing pages

### Cross-Domain SEO
- [ ] Footer links to walipak.com, urduai.org, pakspeed.com, pakeducate.com, wirepk.com
- [ ] Each link has descriptive anchor text
- [ ] Links open in new tab with rel="noopener"
- [ ] No broken external links

---

## 5. TECHNICAL AUDIT

### Performance
- [ ] No render-blocking resources
- [ ] Images have loading="lazy" (except above-fold)
- [ ] Images have width and height attributes
- [ ] CSS is single file, well-organized
- [ ] JS is minimal, loads at end of body
- [ ] Google Fonts with preconnect

### Accessibility
- [ ] Skip-to-content link on every page
- [ ] id="main" on main element
- [ ] lang="en" on html element (lang="ur" on Urdu sections)
- [ ] All images have descriptive alt text
- [ ] :focus-visible styles defined
- [ ] Semantic HTML (header, nav, main, article, section, footer)
- [ ] ARIA labels on navigation

### Tracking
- [ ] GA4 (G-DJ2TGEPJ49) on every page
- [ ] Google Ads (AW-17337315510) on every page
- [ ] gtag_report_conversion() on Ad Grant landing page CTAs
- [ ] Conversion label (D1leCLf07P8aELbhictA) on primary CTAs

### Infrastructure
- [ ] .htaccess with HTTPS redirect
- [ ] .htaccess with caching headers
- [ ] .htaccess with security headers
- [ ] robots.txt allows all crawlers, references sitemap
- [ ] sitemap.xml includes ALL pages with lastmod dates
- [ ] 404.html custom error page
- [ ] GitHub Actions deploy workflow

---

## 6. CONTENT PROOFREADING

### Spelling & Grammar
- [ ] No typos in English content
- [ ] Urdu content properly formatted with correct dir="rtl"
- [ ] Organization names spelled correctly (WANG, WALI, Urdu AI, PakSpeed, PakEducate, WIRE, Darwaza)
- [ ] Location names correct: Ahmed Abad Wang, Bela, Lasbela, Balochistan
- [ ] Dates accurate and consistent

### Factual Accuracy
- [ ] Founded: 2014 (WANG) / 2021 (WALI lab)
- [ ] Learners: 800,000+ (Urdu AI)
- [ ] App downloads: 50,000+ (Urdu AI)
- [ ] Camp graduates: 196+ (WALI)
- [ ] PakSpeed users: 32,000+
- [ ] Initiatives: 6 (WALI, Urdu AI, PakSpeed, PakEducate, WIRE, Darwaza)

### Blog Migration Accuracy
- [ ] Original publication dates preserved in datePublished
- [ ] Urdu posts have lang="ur" and dir="rtl"
- [ ] WordPress block markup fully cleaned
- [ ] No broken image references (wp-content URLs)
- [ ] Draft posts published with appropriate dates
- [ ] All 21+ posts visible on /blog/ hub

---

## 7. COMPETITIVE POSITIONING CHECK

### vs TCF (The Citizens Foundation)
- [ ] WANG differentiator clear: rural innovation + technology + AI (not just schools)

### vs FRDP (Foundation for Rural Development)
- [ ] WANG differentiator clear: social enterprise model + products that generate revenue

### vs Government programs
- [ ] WANG differentiator clear: community-led, village-based, not top-down

### Unique positioning statement visible:
- [ ] "Pakistan's first rural innovation lab"
- [ ] "Non-profit that funds itself through social enterprise"
- [ ] "800,000+ people learned AI in Urdu"
- [ ] "12 years from a village in Balochistan to national impact"

---

*Run this checklist after every major push. No page goes live without passing all applicable sections.*
