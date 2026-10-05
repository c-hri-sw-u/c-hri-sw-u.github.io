# Lifts a drawing off its white sheet: white becomes transparent and every other colour keeps its look over white,
# so the drawing sits on the page's paper like ink, without a frame.
# usage: clear-white.py SRC OUT [x y w h] [max width]
import sys
import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGBA')
sheet = Image.new('RGBA', im.size, 'white')  # a drawing that is already transparent goes onto white first
sheet.alpha_composite(im)
im = sheet.convert('RGB')
if len(sys.argv) >= 7:
    x, y, w, h = map(int, sys.argv[3:7])
    im = im.crop((x, y, x + w, y + h))
if len(sys.argv) >= 8 and im.width > int(sys.argv[7]):
    mw = int(sys.argv[7])
    im = im.resize((mw, round(im.height * mw / im.width)), Image.LANCZOS)
c = np.asarray(im).astype(np.float32) / 255
# Scans sit on grey paper: take the sheet's own tone (most of it is blank) as white.
c = np.clip(c / np.percentile(c.min(axis=2), 60), 0, 1)
# Near-white (paper grain, scan noise) counts as white.
a = np.clip((1 - c.min(axis=2)) / .9 - .06, 0, 1)
rgb = np.where(a[..., None] > 0, (c - (1 - a[..., None])) / np.maximum(a[..., None], 1e-3), 0)
px = np.dstack([np.clip(rgb, 0, 1), a]) * 255
Image.fromarray(px.round().astype(np.uint8), 'RGBA').save(out, 'WEBP', quality=82, method=6)
