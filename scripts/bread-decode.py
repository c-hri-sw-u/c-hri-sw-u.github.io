"""Bread Reader's decode scene, rebuilt from step 01 of Chris's "Bread Is Data" poster.

1. Cuts the scanned slice out of Poster.webp and paints out the poster's "One pore" mark and arrow,
   giving public/media/works/bread-reader/scan.webp.
2. Reads that scan the way the machine does: the slice is split into a grid, each cell's shade becomes
   a letter (darkest A, lightest Z), and the darkest cells stand for pores. The words the machine found
   on the poster's slice are placed on pores, top to bottom in the order of the poem, and the whole grid
   is written to src/components/decode-grid.json for Decode.astro.

Needs numpy and opencv-python-headless. Run from the repo root: python3 scripts/bread-decode.py
"""
import json
import os

import cv2
import numpy as np

SRC = os.environ.get('ASSETS', 'public/Assets') + '/Works/breadReader/Poster.webp'
OUT = 'public/media/works/bread-reader'
COLS, ROWS = 52, 34  # cells are 0.6em wide and 1em tall, so the scan is cut to 31.2 : 34
# Matched by the machine on the poster's slice (step 08), in the order the poem uses them.
WORDS = ['ON', 'FEMALE', 'HEAD', 'GILL', 'LIFE', 'CHAFF', 'DECIDE', 'DEAD', 'BILL', 'HIGH', 'BEAM', 'FEED', 'FALL', 'BELL']

poster = cv2.imread(SRC)
scan = poster[4880:6830, 560:2360].copy()
hsv = cv2.cvtColor(scan, cv2.COLOR_BGR2HSV)
mark = ((hsv[..., 2] > 215) & (hsv[..., 1] < 40)).astype(np.uint8) * 255
mark[:250] = 0  # the scanner's lid strip at the top is light too, and is cropped away below
scan = cv2.inpaint(scan, cv2.dilate(mark, np.ones((9, 9), np.uint8)), 7, cv2.INPAINT_TELEA)

w = 1680
h = round(w * ROWS / (COLS * 0.6))
x0, y0 = 50, 70
scan = scan[y0:y0 + h, x0:x0 + w]
os.makedirs(OUT, exist_ok=True)
cv2.imwrite(f'{OUT}/scan.webp', cv2.resize(scan, (1200, round(1200 * h / w)), interpolation=cv2.INTER_AREA), [cv2.IMWRITE_WEBP_QUALITY, 82])

gray = cv2.cvtColor(scan, cv2.COLOR_BGR2GRAY).astype(float)
cells = cv2.resize(gray, (COLS, ROWS), interpolation=cv2.INTER_AREA)
inside = (cells > 45).astype(np.uint8)
# The slice is the largest lit shape; specks of crust light around it are dropped.
_, label, stats, _ = cv2.connectedComponentsWithStats(cv2.morphologyEx(inside, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8)))
inside = label == 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
inside[inside.sum(1) < 12] = False  # and so is the thin shadow under it
# Only cells well inside the crust count as crumb when looking for pores.
crumb = cv2.erode(inside.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(bool)
lo, hi = np.percentile(cells[crumb], 2), np.percentile(cells[crumb], 98)
letter = np.clip((cells - lo) / (hi - lo) * 25, 0, 25).round().astype(int)
rows = [''.join(chr(65 + letter[r, c]) if inside[r, c] else ' ' for c in range(COLS)) for r in range(ROWS)]

# Pores: the darkest crumb cells, each a local minimum. Places go to them greedily, darkest first, each wide
# enough for the longest word and clear of the others; then the words fill them in the poem's order, top to bottom.
local_min = cells <= cv2.erode(cells, np.ones((3, 3), np.uint8))
spots = sorted((cells[r, c], r, c) for r in range(ROWS) for c in range(COLS) if crumb[r, c] and local_min[r, c])
n = max(len(x) for x in WORDS)
taken = np.zeros((ROWS, COLS), bool)
placed = []
for _, r, c in spots:
    if len(placed) == len(WORDS):
        break
    c0 = c - n // 2
    if c0 < 0 or c0 + n > COLS or not crumb[r, c0:c0 + n].all():
        continue
    if taken[max(0, r - 1):r + 2, max(0, c0 - 2):c0 + n + 2].any():
        continue
    taken[r, c0:c0 + n] = True
    placed.append((r, c0))
assert len(placed) == len(WORDS), f'only {len(placed)} pores fit'
words = [{'w': word, 'r': int(r), 'c': int(c0 + (n - len(word)) // 2)} for word, (r, c0) in zip(WORDS, sorted(placed))]

with open('src/components/decode-grid.json', 'w') as f:
    json.dump({'cols': COLS, 'rows': ROWS, 'grid': rows, 'words': words}, f, indent=1)
print('\n'.join(rows))
print(words)
