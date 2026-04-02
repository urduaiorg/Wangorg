#!/usr/bin/env node
/**
 * Replaces deprecated wang.org.pk WordPress media URLs in blog/ and legacy/
 * with a stable on-site asset (C2). Re-run after regenerating blog HTML if needed.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const FALLBACK = "https://wang.org.pk/assets/images/wali-building-front.jpg";
const RE = /https?:\/\/wang\.org\.pk\/wp-content\/[^"'>\s]*/gi;

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkHtml(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

let touched = 0;
for (const dir of ["blog", "legacy"]) {
  const files = walkHtml(path.join(ROOT, dir));
  for (const file of files) {
    let s = fs.readFileSync(file, "utf8");
    const next = s.replace(RE, FALLBACK);
    if (next !== s) {
      fs.writeFileSync(file, next);
      touched++;
      console.log("updated", path.relative(ROOT, file));
    }
  }
}
console.log("files updated:", touched);
