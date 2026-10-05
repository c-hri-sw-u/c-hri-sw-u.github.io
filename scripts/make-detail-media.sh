#!/usr/bin/env bash
# Builds the detail-page media in public/media/works/<id> from the full-size originals in public/Assets.
# Videos and GIFs become muted H.264 loops plus a poster; stills become WebP at most 1600px wide.
# Needs ffmpeg. ASSETS can point at another copy of Assets/ (defaults to public/Assets).
set -euo pipefail
cd "$(dirname "$0")/.."
SRC="${ASSETS:-public/Assets}/Works"
OUT=public/media/works

clip() { # id, source, name
  mkdir -p "$OUT/$1"
  ffmpeg -nostdin -v error -y -i "$SRC/$2" \
    -vf "fps=30,scale='min(1440,iw)':-2:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf 27 \
    -movflags +faststart -an "$OUT/$1/$3.mp4"
  ffmpeg -nostdin -v error -y -i "$OUT/$1/$3.mp4" -frames:v 1 -q:v 3 "$OUT/$1/$3-poster.jpg"
}
still() { # id, source, name
  mkdir -p "$OUT/$1"
  ffmpeg -nostdin -v error -y -i "$SRC/$2" -vf "scale='min(1600,iw)':-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 78 "$OUT/$1/$3.webp"
}

# Lino (the startup)
clip  lino-app "Lino App/hero-demo.mp4"              hero
still lino-app "Lino/11.webp"                        prototype-card
still lino-app "Lino App/artifacts.webp"             objects
still lino-app "Lino App/canvas.webp"                canvas
still lino-app "Lino App/lino-ai.webp"               lino-ai
# site.webp is a 1440×900 screenshot of the lino.one homepage (from the lino repo's website_minimal), not built here.

# Piko
clip  piko "Piko/IMG_2013.MOV"                       caught
clip  piko "Piko/6.gif"                              moods
still piko "Piko/1.webp"                             venn
still piko "Piko/9.webp"                             worn
still piko "Piko/17.webp"                            inside
still piko "Piko/14.webp"                            koala
