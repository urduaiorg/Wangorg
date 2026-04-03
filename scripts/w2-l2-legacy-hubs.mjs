/**
 * W2-L2 extension: topic hub aside for legacy/*.html (paths ../ from /legacy/)
 * Run: node scripts/w2-l2-legacy-hubs.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const legacyDir = join(__dirname, "..", "legacy");

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
  "balochistan-creative-challenge.html": [
    "../climate-resilience.html",
    "Climate resilience in Lasbela",
  ],
  "princess-of-hope-awards.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "parhega-balochistan.html": ["../digital-literacy-balochistan.html", "Digital literacy in Balochistan"],
  "pakistan-scottish-scholarship.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
  "kakas-garden.html": ["../our-work-lasbela.html", "Our work in Lasbela"],
};

function aside(href, title) {
  return `          <aside class="article-related-hubs reveal" aria-label="Related topic hubs" dir="ltr" lang="en">
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

function insertHub(html, block) {
  const needle = "\n      </article>\n      <section class=\"closing-cta reveal\">";
  const i = html.indexOf(needle);
  if (i === -1) return { ok: false, reason: "no closing-cta pattern" };
  const before = html.slice(0, i);
  const j = before.lastIndexOf("        </div>");
  if (j === -1) return { ok: false, reason: "no article-body closing div" };
  return { ok: true, out: html.slice(0, j) + block + html.slice(j) };
}

let updated = 0;
for (const name of readdirSync(legacyDir)) {
  if (!name.endsWith(".html") || name === "index.html") continue;
  const path = join(legacyDir, name);
  let html = readFileSync(path, "utf8");
  if (hasPillarLink(html)) continue;
  if (html.includes("article-related-hubs")) continue;
  const pair = hubMap[name];
  if (!pair) {
    console.warn("SKIP (no mapping):", name);
    continue;
  }
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

console.log("Legacy updated:", updated);
