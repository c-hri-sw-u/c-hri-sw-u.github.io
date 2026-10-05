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
# moods: 6.gif with its white margin trimmed and replaced by an even one
ffmpeg -nostdin -v error -y -i "$SRC/Piko/6.gif" -vf "crop=1024:500:28:42,pad=1072:548:24:24:white,fps=30,format=yuv420p" -c:v libx264 -preset slow -crf 27 -movflags +faststart -an "$OUT/piko/moods.mp4"
ffmpeg -nostdin -v error -y -i "$OUT/piko/moods.mp4" -frames:v 1 -q:v 3 "$OUT/piko/moods-poster.jpg"
# inside: 17.webp with the exploded skeleton added on its right, by scripts/piko-inside.py
python3 scripts/piko-inside.py
clip  piko "Piko/4.gif"                              system
# flow.webp: the transparent interaction flow (3.png) flattened onto white, trimmed to the chart, then given a white margin
ffmpeg -nostdin -v error -y -f lavfi -i color=white:s=3893x2014 -i "$SRC/Piko/3.png" -filter_complex "[0][1]overlay,crop=2740:1900:730:60,pad=iw*1.24:ih*1.3:(ow-iw)/2:(oh-ih)/2:white,scale=1600:-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 80 "$OUT/piko/flow.webp"
# koala.webp: Piko/14.webp keyed to a transparent ground by hand (black around the puppet, nose kept, bottom faded)
# concept-1/2: the two sketched photos cut out of the 2.png slide (frames and the story bar left out)
ffmpeg -nostdin -v error -y -i "$SRC/Piko/2.png" -vf "crop=432:774:396:138" -frames:v 1 -c:v libwebp -q:v 82 "$OUT/piko/concept-1.webp"
ffmpeg -nostdin -v error -y -i "$SRC/Piko/2.png" -vf "crop=460:708:1076:204" -frames:v 1 -c:v libwebp -q:v 82 "$OUT/piko/concept-2.webp"
sq() { # id, source, name: a centred square crop, for a gallery
  mkdir -p "$OUT/$1"
  ffmpeg -nostdin -v error -y -i "$SRC/$2" -vf "crop='min(iw,ih)':'min(iw,ih)',scale=800:800:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 78 "$OUT/$1/$3.webp"
}
# fan-1: the lower half of 9.webp, the koala on the chest, down from the chin
mkdir -p "$OUT/piko" && ffmpeg -nostdin -v error -y -i "$SRC/Piko/9.webp" -vf "crop=1700:1700:950:1858,scale=800:800:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 78 "$OUT/piko/fan-1.webp"
sq    piko "Piko/8.webp"                             fan-2
sq    piko "Piko/12.webp"                            fan-3
sq    piko "Piko/13.webp"                            fan-4
sq    piko "Piko/19.webp"                            fan-5
# fan-6: the upper right of the screenshot, closer on the koala
ffmpeg -nostdin -v error -y -i "$SRC/Piko/Snipaste_2025-05-12_17-16-30.png" -vf "crop=777:777:345:0,scale=800:800:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 78 "$OUT/piko/fan-6.webp"

# Banana Exoskeleton
# every.webp (the opener) and src/components/Bananas.astro (the outlines) come from 18.gif, by scripts/banana-outlines.py
python3 scripts/banana-outlines.py
# shell: the orange case on its white sweep, cropped to the case; the page multiplies it onto the paper
ffmpeg -nostdin -v error -y -i "$SRC/Banana Exoskeleton/0.png" -vf "crop=2400:3600:760:400,scale=1200:-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 80 "$OUT/banana-exoskeleton/shell.webp"
# reddit: only the photo of the post, without the app around it
ffmpeg -nostdin -v error -y -i "$SRC/Banana Exoskeleton/1.png" -vf "crop=425:543:85:125" -frames:v 1 -c:v libwebp -q:v 85 "$OUT/banana-exoskeleton/reddit.webp"
clip  banana-exoskeleton "Banana Exoskeleton/17.gif"          fit
still banana-exoskeleton "Banana Exoskeleton/4.png"           ring
still banana-exoskeleton "Banana Exoskeleton/13.png"          to-3d
# clusters: the three cases with their clusters' outlines above them, by scripts/banana-clusters.py
python3 scripts/banana-clusters.py
# cases: the three cases with their black ground lifted to the page's ink (#111)
ffmpeg -nostdin -v error -y -i "$SRC/Banana Exoskeleton/14.png" -vf "scale=1600:-2:flags=lanczos,lutrgb=r='17+val*238/255':g='17+val*238/255':b='17+val*238/255'" -frames:v 1 -c:v libwebp -q:v 80 "$OUT/banana-exoskeleton/cases.webp"

# Bread Reader
still bread-reader "breadReader/6.webp"              studio
still bread-reader "breadReader/9.webp"              parts
still bread-reader "breadReader/1.webp"              machine
still bread-reader "breadReader/11.webp"             push
still bread-reader "breadReader/2.webp"              wall
# sketch-1..5: the five hack sketches, each fitted onto the same white sheet so they cross-fade in place
for i in 1 2 3 4 5; do
  ffmpeg -nostdin -v error -y -i "$SRC/breadReader/0-$i.webp" -vf "scale=1040:820:force_original_aspect_ratio=decrease:flags=lanczos,pad=1120:900:(ow-iw)/2:(oh-ih)/2:white" -frames:v 1 -c:v libwebp -q:v 80 "$OUT/bread-reader/sketch-$i.webp"
done
# scan.webp and the decode grid: the poster's scanned slice with its markings painted out, by scripts/bread-decode.py
python3 scripts/bread-decode.py > /dev/null

# Risee (sources copied from the v1be.online project images)
clip  risee "Risee/1.gif"                            orbit
clip  risee "Risee/2.gif"                            actions
clip  risee "Risee/widget.gif"                       widget
# settings.webp: the window with its corners made transparent, by scripts/risee-settings.py
python3 scripts/risee-settings.py
mkdir -p "$OUT/risee" && ffmpeg -nostdin -v error -y -i "$SRC/Risee/icon.png" -vf "scale=128:128:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 90 "$OUT/risee/app-icon.webp"

# Lifeo (1: the context composer over stickers, 2: the map, 3: the context sentence)
still lifeo "Lifeo/1.png"                            hero
still lifeo "Lifeo/2.png"                            map
still lifeo "Lifeo/3.png"                            context
mkdir -p "$OUT/lifeo" && ffmpeg -nostdin -v error -y -i "$SRC/Lifeo/icon.png" -vf "scale=128:128:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 90 "$OUT/lifeo/app-icon.webp"
