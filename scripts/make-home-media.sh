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
still "$W/Lino App/4.png" lino-canvas-dark
still "$W/Lino App/3.png" lino-canvas-light
clip  "$W/Lino/2.gif" lino-2024 8
still "$W/SpaceSelfLog/results_3.webp" thesis-floorplan
still "$W/SpaceSelfLog/results_1.webp" thesis-flow
clip  "$W/Piko/IMG_2013.MOV" piko-shoulder 4.7
clip  "$W/Piko/6.gif" piko-gestures 7
still "$W/Piko/0.png" piko-parts
clip  "$W/Banana Exoskeleton/18.gif" banana-scan 4.3
clip  "$W/Banana Exoskeleton/11.gif" banana-optimize 8
still "$W/Banana Exoskeleton/0.png" banana-shell
still "$W/breadReader/3.webp" bread-exhibit
still "$W/breadReader/11.webp" bread-hack
clip  "$W/Playground OS/1.gif" pgos-creation 6
clip  "$W/Playground OS/4.gif" pgos-spatial 4
clip  "$W/Rethinking Rabbit R1/3.gif" r1-agent 7.9
still "$W/Rethinking Rabbit R1/1.webp" r1-memory
