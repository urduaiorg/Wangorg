#!/usr/bin/env node
/**
 * Migrates wordpress-content-export.json → static blog/*.html + legacy/*.html
 * Run from repo root: node scripts/build-blog.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const EXPORT_PATH = path.join(ROOT, "wordpress-content-export.json");
const SITE = "https://wang.org.pk";
const DEFAULT_OG = "https://wang.org.pk/assets/images/wali-building-front.jpg";

const EXCLUDE_PAGES = new Set([
  "cart",
  "checkout",
  "my-account",
  "privacy_policy",
  "faqs",
  "sample-page",
  "blog-2",
  "05700-home",
  "about-us",
  "programs",
  "initiatives",
]);

const LEGACY = new Map([
  ["kakas", { file: "kakas-garden.html", title: "Kaka's Garden" }],
  ["plbl-2", { file: "parhega-balochistan.html", title: "Parhega Balochistan" }],
  ["phya", { file: "princess-of-hope-awards.html", title: "Princess of Hope Youth Awards" }],
]);

function slugify(raw) {
  let s = (raw || "").trim().toLowerCase();
  try {
    if (/%[0-9a-f]{2}/i.test(s)) s = decodeURIComponent(s);
  } catch {
    /* keep */
  }
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || "post";
}

function cleanHtml(html) {
  if (!html) return "";
  return html
    .replace(/<!--\s*wp:[\s\S]*?-->/g, "")
    .replace(/<!--\s*\/wp:[\s\S]*?-->/g, "")
    .replace(/\n{3,}/g, "\n\n");
}

function hasUrdu(s) {
  return /[\u0600-\u06FF]/.test(s || "");
}

function isoDate(d) {
  if (!d) return new Date().toISOString().slice(0, 19) + "Z";
  const x = String(d).replace(" ", "T");
  if (/^\d{4}-\d{2}-\d{2}T/.test(x)) return x.endsWith("Z") ? x : x + "Z";
  return new Date(d).toISOString();
}

function stripTags(t) {
  return (t || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageTemplate({
  title,
  description,
  canonical,
  breadcrumbs,
  articleLd,
  bodyHtml,
  lang = "en",
  dir = "ltr",
  depth = 1,
}) {
  const prefix = depth === 2 ? "../../" : "../";
  const bcScript = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    },
    null,
    0
  );

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} | WANG Journal</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="WANG" />
    <meta property="og:image" content="${DEFAULT_OG}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <script type="application/ld+json">${articleLd}</script>
    <script type="application/ld+json">${bcScript}</script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJ2TGEPJ49"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-DJ2TGEPJ49");
      gtag("config", "AW-17337315510");
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${prefix}styles.css" />
  </head>
  <body data-page="blog-post">
    <div class="site-bg"></div>
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <a class="brand" href="${prefix}index.html" aria-label="WANG home"><strong>WANG</strong><span>We Are New Generation</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span></button>
      <nav id="site-nav" class="site-nav" aria-label="Main navigation">
        <a href="${prefix}index.html">Home</a>
        <a href="${prefix}about.html">About</a>
        <a href="${prefix}programs-overview.html">Programs</a>
        <a href="${prefix}initiatives.html">Initiatives</a>
        <a href="${prefix}blog/index.html">Blog</a>
        <a href="${prefix}impact.html">Impact</a>
        <a href="${prefix}team.html">Team</a>
        <a href="${prefix}contact.html">Contact</a>
        <a href="${prefix}urduai/" style="color:var(--accent-strong);font-weight:600;">Urdu AI</a>
      </nav>
    </header>
    <main id="main" class="inner-page">
      <section class="page-intro reveal" style="max-width:var(--content);margin-inline:auto;padding-inline:1.2rem;">
        <div class="crumbs">
          <a href="${prefix}index.html">Home</a><span aria-hidden="true">/</span>
          <a href="${prefix}blog/index.html">Blog</a><span aria-hidden="true">/</span>
          <span class="story-tag">Journal</span>
        </div>
        <h1 style="max-width:20ch;font-size:clamp(2rem,4.5vw,3.2rem);" lang="${lang}"${dir === "rtl" ? ' dir="rtl"' : ""}>${escapeHtml(stripTags(title))}</h1>
      </section>
      <div class="article-shell reveal" style="width:var(--content);margin:0 auto;padding:0 1.2rem 4rem;box-sizing:border-box;">
        <div class="article-main">
          <article id="article-content" class="article-body" lang="${lang}"${dir === "rtl" ? ' dir="rtl"' : ""}>
            ${bodyHtml}
          </article>
          <p style="max-width:46rem;margin:2rem auto 0;color:var(--muted);font-size:0.95rem;">
            <a href="https://urduai.org/" target="_blank" rel="noreferrer" style="color:var(--accent-strong);font-weight:600;">Learn free AI skills in Urdu on Urdu AI →</a>
          </p>
        </div>
        <aside class="article-aside">
          <h3>Explore WANG</h3>
          <ul class="signal-list">
            <li><a href="${prefix}impact.html">Impact &amp; numbers</a></li>
            <li><a href="${prefix}initiatives.html">Six initiatives</a></li>
            <li><a href="${prefix}contact.html">Partner with WANG</a></li>
          </ul>
          <p class="aside-note">WANG (We Are New Generation) is a registered Pakistani non-profit delivering programs through the rural innovation lab <a href="https://walipak.com/" target="_blank" rel="noreferrer">WALI</a>.</p>
        </aside>
      </div>
    </main>
    <footer class="site-footer">
      <div class="site-footer-grid">
        <div class="footer-copy">
          <p class="footer-title">WANG</p>
          <p>We Are New Generation — rural innovation, digital access, and AI literacy from Balochistan. <a href="https://urduai.org/" target="_blank" rel="noreferrer" style="color:var(--accent-strong);font-weight:600;">Start learning on Urdu AI</a></p>
          <p class="footer-legal" style="margin-top:0.75rem;font-size:0.8rem;opacity:0.85;">Welfare Association for New Generation · Ahmed Abad Wang, Bela, Lasbela, Balochistan 90050 · <a href="mailto:info@wang.org.pk">info@wang.org.pk</a> · <a href="${prefix}privacy-policy.html">Privacy</a></p>
        </div>
        <div>
          <p class="footer-title">Explore</p>
          <div class="footer-links">
            <a href="${prefix}about.html">About</a>
            <a href="${prefix}blog/index.html">Blog</a>
            <a href="${prefix}faq.html">FAQ</a>
            <a href="${prefix}privacy-policy.html">Privacy Policy</a>
          </div>
        </div>
        <div>
          <p class="footer-title">Reach us</p>
          <div class="footer-links">
            <span>Ahmed Abad Wang, Bela, District Lasbela, Balochistan, Pakistan 90050</span>
            <a href="mailto:info@wang.org.pk">info@wang.org.pk</a>
            <a href="tel:+923218737322">+923218737322</a>
          </div>
        </div>
      </div>
    </footer>
    <script src="${prefix}script.js"></script>
  </body>
</html>`;
}

function main() {
  const raw = JSON.parse(fs.readFileSync(EXPORT_PATH, "utf8"));
  const blogDir = path.join(ROOT, "blog");
  const legacyDir = path.join(ROOT, "legacy");
  fs.mkdirSync(blogDir, { recursive: true });
  fs.mkdirSync(legacyDir, { recursive: true });

  const usedSlugs = new Set();
  const hub = [];

  for (const p of raw) {
    const status = (p.status || "").toLowerCase();
    if (status === "private") continue;

    const slugRaw = (p.slug || "").trim();
    const typ = p.type || "post";

    if (typ === "page" && EXCLUDE_PAGES.has(slugRaw)) continue;

    const legacy = LEGACY.get(slugRaw);
    if (legacy) {
      let slug = slugify(slugRaw || p.title);
      try {
        if (/%[0-9a-f]{2}/i.test(slugRaw)) slug = slugify(decodeURIComponent(slugRaw));
      } catch {
        /* keep */
      }
      while (usedSlugs.has(slug)) slug = `${slug}-2`;
      usedSlugs.add(slug);
      const filePath = path.join(legacyDir, legacy.file);
      const canonical = `${SITE}/legacy/${legacy.file}`;
      const desc = stripTags(p.excerpt || p.title).slice(0, 160) || legacy.title;
      const published = isoDate(p.date);
      const body = cleanHtml(p.content);
      const ur = hasUrdu(p.title) || hasUrdu(body);
      const articleLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: stripTags(p.title),
        datePublished: published,
        dateModified: isoDate(p.modified || p.date),
        author: { "@type": "Organization", name: "WANG" },
        publisher: { "@type": "Organization", name: "WANG", url: SITE },
        mainEntityOfPage: canonical,
        description: desc,
      });
      const html = pageTemplate({
        title: stripTags(p.title),
        description: desc,
        canonical,
        breadcrumbs: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Legacy programs", item: `${SITE}/legacy/` },
          { "@type": "ListItem", position: 3, name: stripTags(p.title), item: canonical },
        ],
        articleLd,
        bodyHtml: body,
        lang: ur ? "ur" : "en",
        dir: ur ? "rtl" : "ltr",
        depth: 2,
      });
      fs.writeFileSync(filePath, html);
      hub.push({
        date: p.date,
        title: stripTags(p.title),
        href: `legacy/${legacy.file}`,
        kind: "legacy",
        draft: status === "draft",
      });
      continue;
    }

    if (typ === "page") {
      const allowPage =
        status === "draft" || slugRaw === "psss" || slugRaw === "bachy";
      if (!allowPage) continue;
    }

    let baseSlug = slugRaw;
    try {
      if (/%[0-9a-f]{2}/i.test(baseSlug)) baseSlug = decodeURIComponent(baseSlug);
    } catch {
      /* keep */
    }
    if (!baseSlug) baseSlug = slugify(p.title);

    let fileSlug = slugify(baseSlug);
    if (!fileSlug) fileSlug = slugify(p.title) || `post-${p.id}`;

    const isDraft = status === "draft";

    let slug = fileSlug;
    while (usedSlugs.has(slug)) slug = `${slug}-2`;
    usedSlugs.add(slug);

    const fileName = `${slug}.html`;
    const filePath = path.join(blogDir, fileName);
    const canonical = `${SITE}/blog/${fileName}`;
    const desc = stripTags(p.excerpt || p.title).slice(0, 160) || "Journal article from WANG.";
    const published = isoDate(p.date);
    const body = cleanHtml(p.content);
    const ur = hasUrdu(p.title) || hasUrdu(body);
    const articleLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: stripTags(p.title),
      datePublished: published,
      dateModified: isoDate(p.modified || p.date),
      author: { "@type": "Organization", name: "WANG" },
      publisher: { "@type": "Organization", name: "WANG", url: SITE },
      mainEntityOfPage: canonical,
      description: desc,
    });
    const html = pageTemplate({
      title: stripTags(p.title),
      description: desc + (isDraft ? " (Originally drafted on WANG’s former site; published for the historical record.)" : ""),
      canonical,
      breadcrumbs: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
        { "@type": "ListItem", position: 3, name: stripTags(p.title).slice(0, 80), item: canonical },
      ],
      articleLd,
      bodyHtml: body,
      lang: ur ? "ur" : "en",
      dir: ur ? "rtl" : "ltr",
      depth: 1,
    });
    fs.writeFileSync(filePath, html);
    hub.push({
      date: p.date,
      title: stripTags(p.title),
      href: `blog/${fileName}`,
      kind: "blog",
      draft: isDraft,
    });
  }

  hub.sort((a, b) => new Date(b.date) - new Date(a.date));

  const hubHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Journal &amp; news | WANG — We Are New Generation</title>
    <meta name="description" content="Articles and updates from WANG (We Are New Generation), 2014–2026: education, resilience, women's programs, and rural Pakistan." />
    <link rel="canonical" href="${SITE}/blog/" />
    <meta property="og:title" content="WANG Journal" />
    <meta property="og:description" content="Stories from twelve years of rural innovation and digital access in Pakistan." />
    <meta property="og:url" content="${SITE}/blog/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="WANG" />
    <meta property="og:image" content="${DEFAULT_OG}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WANG Journal",
    url: `${SITE}/blog/`,
    description: "Blog and news from WANG, a Pakistani non-profit.",
  })}</script>
    <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
    ],
  })}</script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJ2TGEPJ49"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-DJ2TGEPJ49');gtag('config','AW-17337315510');</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body data-page="blog-hub">
    <div class="site-bg"></div>
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <a class="brand" href="../index.html" aria-label="WANG home"><strong>WANG</strong><span>We Are New Generation</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span></button>
      <nav id="site-nav" class="site-nav" aria-label="Main navigation">
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../programs-overview.html">Programs</a>
        <a href="../initiatives.html">Initiatives</a>
        <a href="index.html">Blog</a>
        <a href="../impact.html">Impact</a>
        <a href="../team.html">Team</a>
        <a href="../contact.html">Contact</a>
        <a href="../urduai/" style="color:var(--accent-strong);font-weight:600;">Urdu AI</a>
      </nav>
    </header>
    <main id="main" class="inner-page" style="max-width:var(--content);margin:0 auto;padding:0 1.2rem 4rem;">
      <section class="page-intro reveal">
        <p class="eyebrow">2014 — 2026</p>
        <h1>Journal &amp; stories</h1>
        <p class="hero-text" style="max-width:40rem;color:var(--muted);">Chronological archive from WANG’s former WordPress site, preserved with original dates. <a href="https://urduai.org/" target="_blank" rel="noreferrer" style="color:var(--accent-strong);font-weight:600;">Continue learning on Urdu AI →</a></p>
      </section>
      <ul style="list-style:none;padding:0;margin:2rem 0 0;display:grid;gap:1rem;">
${hub
  .map(
    (e) => `        <li class="story-card" style="margin:0;">
          <a href="${e.kind === "legacy" ? "../" + e.href : e.href}" style="font-weight:700;font-size:1.1rem;color:var(--ink);">${escapeHtml(e.title)}</a>
          <p style="margin:0.35rem 0 0;color:var(--muted);font-size:0.88rem;">${e.date.slice(0, 10)} · ${e.kind}${e.draft ? " · draft" : ""}</p>
        </li>`
  )
  .join("\n")}
      </ul>
    </main>
    <footer class="site-footer">
      <div class="site-footer-grid">
        <div class="footer-copy">
          <p class="footer-title">WANG</p>
          <p>We Are New Generation — <a href="https://urduai.org/" target="_blank" rel="noreferrer" style="color:var(--accent-strong);font-weight:600;">Learn on Urdu AI</a></p>
          <p class="footer-legal" style="margin-top:0.75rem;font-size:0.8rem;opacity:0.85;">Welfare Association for New Generation · <a href="mailto:info@wang.org.pk">info@wang.org.pk</a> · <a href="../privacy-policy.html">Privacy</a></p>
        </div>
        <div>
          <p class="footer-title">Explore</p>
          <div class="footer-links">
            <a href="../about.html">About</a>
            <a href="../faq.html">FAQ</a>
            <a href="../privacy-policy.html">Privacy Policy</a>
          </div>
        </div>
        <div>
          <p class="footer-title">Reach us</p>
          <div class="footer-links">
            <a href="mailto:info@wang.org.pk">info@wang.org.pk</a>
            <a href="tel:+923218737322">+923218737322</a>
          </div>
        </div>
      </div>
    </footer>
    <script src="../script.js"></script>
  </body>
</html>`;

  fs.writeFileSync(path.join(blogDir, "index.html"), hubHtml);

  console.log("Wrote", hub.length, "entries; hub at blog/index.html");
}

main();
