#!/usr/bin/env bash
# Recompress JPEGs in assets/images to ≤200KB using macOS sips (run from repo root).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/assets/images"
shrink() {
  local f="$1" tmp q z sz
  tmp="$(mktemp "${TMPDIR:-/tmp}/wang-jpg.XXXXXX")"
  for z in 1800 1600 1400 1200 1000 900 800 720; do
    for q in 72 65 58 52 48 45 42 40 38; do
      sips -Z "$z" "$f" --out "$tmp" 2>/dev/null || continue
      sips -s format jpeg -s formatOptions "$q" "$tmp" --out "$tmp" 2>/dev/null || continue
      sz=$(stat -f%z "$tmp" 2>/dev/null || stat -c%s "$tmp")
      if [ "$sz" -le 204800 ]; then
        cp "$tmp" "$f"
        rm -f "$tmp"
        echo "OK $f (${sz} bytes, max ${z}px, q=$q)"
        return 0
      fi
    done
  done
  rm -f "$tmp"
  echo "FAIL $f" >&2
  return 1
}
shopt -s nullglob
for f in *.jpg *.jpeg; do
  sz=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")
  if [ "$sz" -gt 204800 ]; then
    shrink "$f"
  fi
done
