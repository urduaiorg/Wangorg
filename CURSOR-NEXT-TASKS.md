# Cursor Agent — Next Tasks

**Priority order. Do them in this sequence.**

---

## TASK 1: Fix Founding Date (CRITICAL)

WANG was founded in **2014**, not 2021. 2021 is when WALI (the lab) opened. Check EVERY page and fix:

- Organization schema: `foundingDate` must be `"2014"` on homepage
- About page: Timeline must start from 2014
- All content referencing "founded in 2021" should say "WANG founded in 2014; WALI lab established in 2021"
- Blog posts from 2014 prove this — "The Welcome Blog" was the first post

---

## TASK 2: Fix Broken WordPress Image URLs in Blog Posts

Search all `blog/*.html` files for any remaining references to:
- `wp-content/uploads/`
- `wang.org.pk/wp-content/`
- Any absolute WordPress media URLs

Replace with either:
- Local `../../assets/images/[filename]` if the image exists in assets
- Remove the broken `<img>` tag if the image isn't available
- Or add a placeholder comment: `<!-- Image not available: [original URL] -->`

Run this check:
```bash
grep -r "wp-content" blog/ legacy/
```

---

## TASK 3: SEO/AEO Audit on Top 5 Pages

Read the `QA-AUDIT-CHECKLIST.md` in this repo. Then audit these 5 highest-priority pages against it:

1. **index.html** (Homepage)
2. **about.html** (About)
3. **initiatives.html** (Initiatives)
4. **impact.html** (Impact)
5. **blog/index.html** (Blog hub)

For each page, check and fix:
- Title tag under 60 chars, contains primary keyword + "WANG"
- Meta description 150-160 chars, unique, compelling
- Exactly ONE H1 with primary keyword
- Canonical URL points to wang.org.pk
- OG tags complete (title, description, url, image, type)
- Organization or Article schema validates
- BreadcrumbList schema present
- First paragraph answers the search intent directly
- At least ONE link to urduai.org on every page
- Skip link + id="main" present
- GA4 + Google Ads tracking code present

Fix any issues you find directly.

---

## TASK 4: Urdu AI Revenue Links on Every Page

This is the money engine. Check EVERY main page and ensure:

1. **Homepage** — Has a prominent CTA: "Learn AI in Urdu — Free" → https://urduai.org
2. **About** — Mentions Urdu AI with link in body content
3. **Initiatives** — Urdu AI card links to https://urduai.org
4. **Impact** — Urdu AI metrics (800K+ learners) link to https://urduai.org
5. **Programs overview** — Mentions Urdu AI program with link
6. **Blog hub** — "Popular: AI Education in Pakistan" link to relevant post + urduai.org
7. **FAQ** — "How can I learn AI?" answer links to https://urduai.org
8. **Contact** — "Want to learn AI? Visit urduai.org"
9. **Footer** — Urdu AI link in Ecosystem section (should already exist)

If any are missing, add them. These drive AdSense revenue.

---

## TASK 5: Proofread All Page Titles and Descriptions

Check every page for these exact patterns:

### Homepage
- Title: `WANG | We Are New Generation — Pakistan's Non-Profit for Rural Innovation`
- H1: Should contain "800,000+" or a major impact number

### About
- Title: `About WANG | Founded 2014 — Pakistan's Rural Innovation Non-Profit`
- H1: Should tell the origin story, not a mission statement

### Initiatives
- Title: `WANG Initiatives | Urdu AI, WALI, PakSpeed, PakEducate, WIRE, Darwaza`
- H1: Should reference all 6 or "6 initiatives"

### Impact
- Title: `WANG Impact | 800,000+ Learners, 6 Initiatives, 12 Years of Proof`
- H1: Should lead with numbers

### Blog Hub
- Title: `WANG Blog | 12 Years of Stories from Rural Pakistan (2014–2026)`
- H1: Should mention the historical span

### Contact
- Title: `Contact WANG | Partnerships, Media, Volunteering in Pakistan`

### FAQ
- Title: `WANG FAQ | About WANG, Programs, Partnerships, Ad Grant`

### Team
- Title: `WANG Team | Qaisar Roonjha & the Team Behind Rural Innovation`

### Privacy Policy
- Title: `Privacy Policy | WANG — We Are New Generation`

Fix any that don't match these patterns. Every title must be under 60 chars.

---

## TASK 6: Add Urdu AI CTA Banner Component

Create a reusable banner section that can go on any page. Add it to the bottom of:
- Homepage (before footer)
- About page (after story)
- Impact page (after metrics)
- Blog hub (after post listing)

HTML:
```html
<section class="urduai-cta reveal">
  <div class="urduai-cta-inner">
    <p class="eyebrow">Free for Everyone</p>
    <h2>Learn AI in Urdu — Join 800,000+ Learners</h2>
    <p>Urdu AI is WANG's flagship platform making artificial intelligence accessible in Pakistan's first language. Completely free, certified, and community-supported.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="https://urduai.org" target="_blank" rel="noopener">Start Learning Free</a>
      <a class="button button-secondary" href="https://whatsapp.com/channel/0029VaXXgd00AgW6jAZGw83j" target="_blank" rel="noopener">Join WhatsApp Channel</a>
    </div>
  </div>
</section>
```

Add matching CSS to styles.css:
```css
.urduai-cta {
  background: var(--accent-strong);
  color: #fff;
  text-align: center;
  padding: 4rem 1.2rem;
  border-radius: var(--radius);
  margin: 3rem auto;
  max-width: var(--content);
}
.urduai-cta-inner {
  max-width: 680px;
  margin: 0 auto;
}
.urduai-cta .eyebrow {
  color: var(--signal);
}
.urduai-cta h2 {
  color: #fff;
  margin: 0.5rem 0 1rem;
}
.urduai-cta p {
  color: rgba(255,255,255,0.85);
  margin-bottom: 1.5rem;
}
.urduai-cta .button-primary {
  background: var(--signal);
  color: var(--ink);
}
```

---

## TASK 7: Sitemap Final Check

After all changes, regenerate or manually verify sitemap.xml includes:
- ALL main pages
- ALL blog posts with correct lastmod dates (original publication dates)
- ALL legacy pages
- NO redirect stub pages
- NO draft/private pages

Total should be 45-50 URLs.

---

## TASK 8: Update AGENT-CHECKIN-LOG.md

After completing all tasks, update the check-in log with what you did.

---

## DONE?

After these 8 tasks, the site is ready for:
1. Qaisar to set up Hostinger FTP secrets
2. Deploy to wang.org.pk
3. Submit sitemap to Google Search Console
4. Launch Google Ads campaigns

**Quality > Speed. Every page should be something you'd show a donor.**
