# QA Audit Findings — Fix Before Deployment

**Auditor:** Claude Code (Strategist)
**Date:** April 2, 2026
**Based on:** Review of latest pushed code

---

## HOW TO USE

These are issues found during the live audit. Pick one, fix it, mark it ✅ DONE, commit+push. Same claim system as OPEN-TASKS.md.

---

## 🔴 MUST FIX (Blocks deployment / Ad Grant compliance)

| # | Issue | Status | Owner | Details |
|---|---|---|---|---|
| A1 | **Privacy policy link missing from 15+ page footers** | ✅ DONE | Codex | Verified the current tracked repo state with an HTML-parser footer audit. Every HTML footer now includes a privacy policy link, including the pages explicitly listed in the finding. |
| A2 | **blog/ai-education-pakistan.html — 5+ broken wp-content images** | ✅ DONE | Codex | Verified the current tracked file state: `blog/ai-education-pakistan.html` no longer contains `wp-content` image references. Inline images, `og:image`, `twitter:image`, and the Article schema `image` all point to on-site assets under `https://wang.org.pk/assets/images/`. |
| A3 | **blog/mobiles-children-hope.html — HTTP og:image** | ✅ DONE | Codex | Verified metadata is already on HTTPS in the tracked file, then replaced the remaining broken inline `blob:` image in the article body with a stable on-site asset under `https://wang.org.pk/assets/images/`. |

## 🟡 SHOULD FIX (SEO/Revenue impact)

| # | Issue | Status | Owner | Details |
|---|---|---|---|---|
| A4 | **Verify Urdu AI CTA banner on 4 key pages** | ⬜ OPEN | — | H6 was marked done. Verify these pages have a VISIBLE "Learn AI in Urdu — Free" CTA section linking to `https://urduai.org`: (1) index.html, (2) about.html, (3) impact.html, (4) blog/index.html. Each missing link = lost AdSense revenue. Don't just check the footer — there should be a dedicated CTA section/banner. |
| A5 | **Footer ecosystem links consistency** | ⬜ OPEN | — | walipak.com has ecosystem footer with 5 cross-domain links on all 43 pages. Verify wang.org.pk main pages also have ecosystem footer links to: walipak.com, urduai.org, pakspeed.com, pakeducate.com, wirepk.com. Check: `grep -rL "walipak.com" *.html` |
| A6 | **Bidirectional walipak.com ↔ wang.org.pk linking** | ⬜ OPEN | — | walipak.com footer says "An initiative of WANG" with link to wang.org.pk ✅. wang.org.pk needs to link back to walipak.com in footer ("Visit WALI — our innovation lab"). Verify this exists on all main pages. |
| A7 | **Ad Grant landing pages — conversion tracking verification** | ⬜ OPEN | — | Verify ALL 5 Ad Grant landing pages have `gtag_report_conversion()` function on their primary CTA buttons with conversion label `D1leCLf07P8aELbhictA`. Pages: `/urduai/`, `/wali/`, `/wire/`, `/programs/`, `/digital-literacy/`. Without this, Ad Grant conversions don't record → can't use Maximize Conversions bidding. |

## 🟢 NICE TO FIX (Quality polish)

| # | Issue | Status | Owner | Details |
|---|---|---|---|---|
| A8 | **Some blog posts may have WordPress block markup remnants** | ⬜ OPEN | — | Check for `<!-- wp:` comments still in blog HTML. Run: `grep -r "wp:" blog/*.html \| head -20` |
| A9 | **OG images — many may point to nonexistent files** | ⬜ OPEN | — | Several pages reference og:image files that may not exist in assets/images/. Run: `grep -r "og:image" *.html blog/*.html \| grep -v "wang.org.pk/assets"` to find any pointing to wp-content or missing paths. |
| A10 | **404.html should be styled and functional** | ⬜ OPEN | — | Verify 404.html has navigation, links back to homepage, and matches the site design. |

---

## VERIFICATION COMMANDS

Run these to quickly check issues:

```bash
# A1: Find pages missing privacy link
find . -name "*.html" -not -path "./node_modules/*" -exec grep -L "privacy" {} \;

# A2/A3: Find remaining wp-content references
grep -r "wp-content" blog/ legacy/ --include="*.html"

# A4: Check urduai.org CTAs on key pages
for f in index.html about.html impact.html blog/index.html; do
  echo "=== $f ===" && grep -c "urduai.org" "$f"
done

# A5: Check ecosystem footer links
grep -rL "walipak.com" *.html

# A7: Check conversion tracking on Ad Grant pages
for d in urduai wali wire programs digital-literacy; do
  echo "=== $d ===" && grep -c "gtag_report_conversion" "$d/index.html" 2>/dev/null || echo "NOT FOUND"
done

# A8: WordPress block markup remnants
grep -r "<!-- wp:" blog/*.html | head -20

# A9: OG images pointing to wp-content
grep -r "og:image" --include="*.html" | grep "wp-content"
```

---

*Fix A1 first — it's the Ad Grant compliance blocker.*
