#!/usr/bin/env bash
# Builds the small homepage media in public/media/home from the full-size originals in public/Assets.
# Animated moments become short muted H.264 loops (a fraction of the GIF size); stills become 900px WebP.
# Needs ffmpeg. Re-run after changing a source or adding a moment.
set -euo pipefail
cd "$(dirname "$0")/../public"
OUT=media/home
mkdir -p "$OUT"

clip() { # source, name, seconds
  ffmpeg -nostdin -v error -y -t "$3" -i "$1" \
    -vf "fps=24,scale=720:-2:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf 28 \
    -movflags +faststart -an "$OUT/$2.mp4"
  ffmpeg -nostdin -v error -y -i "$OUT/$2.mp4" -frames:v 1 -vf "scale=720:-2" -q:v 4 "$OUT/$2-poster.jpg"
}
still() { # source, name
  ffmpeg -nostdin -v error -y -i "$1" -vf "scale='min(900,iw)':-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 70 "$OUT/$2.webp"
}

W=Assets/Works
# Witness: the neck-mounted iPhone that does the seeing, on transparency (flat on the card), then what it learned:
# the floor plan from the results, without its sidebars and legend
ffmpeg -nostdin -v error -y -i "$W/SpaceSelfLog/device-side.png" -vf "scale=-2:900:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 80 "$OUT/witness-device.webp"
ffmpeg -nostdin -v error -y -i "$W/SpaceSelfLog/results_3.webp" -vf "crop=1860:1340:720:460,scale=900:-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 75 "$OUT/witness-plan.webp"
clip  "$W/Piko/IMG_2013.MOV" piko-shoulder 4.7
clip  "$W/Piko/6.gif" piko-gestures 7
still "$W/Piko/0.png" piko-parts
clip  "$W/Banana Exoskeleton/18.gif" banana-scan 4.3
clip  "$W/Banana Exoskeleton/11.gif" banana-optimize 8
still "$W/Banana Exoskeleton/0.png" banana-shell
still "$W/breadReader/3.webp" bread-exhibit
still "$W/breadReader/11.webp" bread-hack
# The homepage cover, cropped to 3:4 as on the legacy page.
ffmpeg -nostdin -v error -y -i "$W/breadReader/1.webp" -vf "crop='min(iw,ih*3/4)':'min(ih,iw*4/3)',scale=720:-2:flags=lanczos" -frames:v 1 -c:v libwebp -q:v 70 "$OUT/bread-cover.webp"
clip  "$W/Playground OS/1.gif" pgos-creation 6
clip  "$W/Playground OS/4.gif" pgos-spatial 4
clip  "$W/Rethinking Rabbit R1/3.gif" r1-agent 7.9
still "$W/Rethinking Rabbit R1/1.webp" r1-memory
clip  "$W/Risee/1.gif" risee-orbit 12
clip  "$W/Risee/2.gif" risee-actions 12
# Lifeo: three phone screens side by side, on transparency.
ffmpeg -nostdin -v error -y -i "$W/Lifeo/1.png" -i "$W/Lifeo/2.png" -i "$W/Lifeo/3.png" -filter_complex \
  "[0]scale=402:874[a];[a]pad=442:874:0:0:color=0x00000000[a2];[1]pad=442:874:0:0:color=0x00000000[b2];[a2][b2][2]hstack=inputs=3,scale=900:-2:flags=lanczos" \
  -frames:v 1 -c:v libwebp -q:v 75 "$OUT/lifeo-trio.webp"
