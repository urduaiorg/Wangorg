/**
 * W2-L2: Insert topic hub aside into blog posts missing pillar links.
 * Run from repo root: node scripts/w2-l2-blog-hubs.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, "..", "blog");

function hasPillarLink(html) {
  return (
    html.includes('href="../ai-education-pakistan.html"') ||
    html.includes('href="../our-work-lasbela.html"') ||
    html.includes('href="../women-girls-technology.html"') ||
    html.includes('href="../climate-resilience.html"') ||
    html.includes('href="../digital-literacy-balochistan.html"')
  );
}

const hubMap = {
  "16-days-of-activism-2025-how-rural-girls-in-balochistan-rose-against-gender-based-violence.html": [
    "../women-girls-technology.html",
    "Women &amp; girls in technology",
  ],
  "aid-and-resilience.html": ["../climate-resilience.html", "Climate resilience in Lasbela"],
  "anti-drug-abuse-event.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "carec-gender-climate-champion-2024.html": [
    "../climate-resilience.html",
    "Climate resilience in Lasbela",
  ],
  "child-protection-urdu.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "corona-education-urdu.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "edu-pathway-progress.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "empowering-women-of-lasbela-through-skill-enhancement.html": [
    "../women-girls-technology.html",
    "Women &amp; girls in technology",
  ],
  "featured-insightonconflict.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "flood-relief-impact.html": ["../climate-resilience.html", "Climate resilience in Lasbela"],
  "girl-rising-lasbela.html": ["../women-girls-technology.html", "Women &amp; girls in technology"],
  "heroes-of-lasbela-fighting-covid-19.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "lasbela-rising-climate.html": ["../climate-resilience.html", "Climate resilience in Lasbela"],
  "mobiles-children-hope.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "pakistan-scottish-scholarship-scheme-for-school-children-2019-2020.html": [
    "../our-work-lasbela.html",
    "Our work in Lasbela",
  ],
  "scottish-scholarship-wang.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "six-ways-to-help-balochistan-flood-affected-communities.html": [
    "../climate-resilience.html",
    "Climate resilience in Lasbela",
  ],
  "tech-surge-10-batches.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "the-welcome-blog.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "tragedy-to-triumph.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "wali-lab-empowers-youth.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "wang-wins-k-electric-karachi-awards-2025.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
};

function aside(href, title) {
  return `          <aside class="article-related-hubs reveal" aria-label="Related topic hubs">
            <p class="eyebrow">Related on wang.org.pk</p>
            <p>
              See <a href="../impact.html">Impact</a> for aggregate public metrics. Topic hub:
              <a href="${href}">${title}</a>.
              <a href="https://urduai.org/" target="_blank" rel="noreferrer">Urdu AI</a> (free) or
              <a href="../contact.html">contact WANG</a> to partner.
            </p>
          </aside>
`;
}

/** Insert before "</div>\\n      </article>" that precedes closing-cta (or </main> fallback). */
function insertHub(html, block) {
  const needle = "\n      </article>\n      <section class=\"closing-cta reveal\">";
  const i = html.indexOf(needle);
  if (i === -1) {
    return { ok: false, reason: "no closing-cta pattern" };
  }
  const before = html.slice(0, i);
  const j = before.lastIndexOf("        </div>");
  if (j === -1) {
    return { ok: false, reason: "no article-body closing div" };
  }
  const out = html.slice(0, j) + block + html.slice(j);
  return { ok: true, out };
}

import { readdirSync } from "node:fs";

let updated = 0;
for (const name of readdirSync(blogDir)) {
  if (!name.endsWith(".html") || name === "index.html") continue;
  const path = join(blogDir, name);
  let html = readFileSync(path, "utf8");
  if (hasPillarLink(html)) continue;
  if (name === "ai-education-resources-urdu-complete-guide.html") continue;
  const pair = hubMap[name];
  if (!pair) {
    console.warn("SKIP (no mapping):", name);
    continue;
  }
  if (html.includes("article-related-hubs")) continue;
  const [href, title] = pair;
  const { ok, out, reason } = insertHub(html, aside(href, title));
  if (!ok) {
    console.warn("FAIL:", name, reason);
    continue;
  }
  writeFileSync(path, out, "utf8");
  updated++;
  console.log("OK:", name);
}

const ap = join(blogDir, "ai-education-pakistan.html");
let apHtml = readFileSync(ap, "utf8");
if (!hasPillarLink(apHtml) && !apHtml.includes("article-related-hubs")) {
  const r = insertHub(apHtml, aside("../ai-education-pakistan.html", "AI education in Pakistan"));
  if (r.ok) {
    writeFileSync(ap, r.out, "utf8");
    updated++;
    console.log("OK: ai-education-pakistan.html");
  }
}

console.log("Updated files:", updated);
