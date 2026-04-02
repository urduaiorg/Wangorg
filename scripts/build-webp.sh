#!/usr/bin/env bash
# Generate .webp alongside each JPEG in assets/images (WebP + JPEG fallback in HTML).
# Requires: cwebp (brew install webp). Run from repo root: wang-site/scripts/build-webp.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/assets/images"
if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp not found. Install: brew install webp" >&2
  exit 1
fi
shopt -s nullglob
for f in *.jpg *.jpeg; do
  base="${f%.*}"
  out="${base}.webp"
  cwebp -q 82 -mt "$f" -o "$out"
  echo "OK $out"
done
