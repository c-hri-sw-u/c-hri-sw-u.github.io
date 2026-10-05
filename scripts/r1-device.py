# The R1 for the Rethinking Rabbit R1 opener: the first frame of the Memory Switch screen in 3.gif, with the memory tab
# painted out so the screen is empty, and the white ground made transparent so the device sits on the page's paper.
# The opener draws its replies over the screen, so WheelOpener.astro's percentages follow the box measured here.
import subprocess, tempfile, os
import numpy as np
from PIL import Image, ImageFilter

src = 'public/Assets/Works/Rethinking Rabbit R1/3.gif'
out = 'public/media/works/rethinking-rabbit-r1/device.webp'
tmp = os.path.join(tempfile.mkdtemp(), 'frame.png')
# The middle screen of the strip, the device trimmed to its own edges (x 688–1231, y 52–584 in the strip).
subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-i', src, '-vf', r'select=eq(n\,0),crop=544:533:688:52',
                '-frames:v', '1', tmp], check=True)
im = Image.open(tmp).convert('RGB')
# The GIF's palette leaves dither grain on the large orange faces; a small median smooths it and keeps the edges.
im = im.filter(ImageFilter.MedianFilter(5))
# The flat face under the wheel still bands in blotches: blur that face alone and feather it back in.
x0, y0, x1, y1 = 402, 282, 530, 516
pad = 40  # blur a copy of the face alone, its edges extended, so the screen's black and the ground stay out of it
face = np.pad(np.asarray(im)[y0:y1, x0:x1], ((pad, pad), (pad, pad), (0, 0)), mode='edge')
face = np.asarray(Image.fromarray(face).filter(ImageFilter.GaussianBlur(14)))[pad:-pad, pad:-pad]
soft = im.copy()
soft.paste(Image.fromarray(face), (x0, y0))
feather = Image.new('L', im.size, 0)
feather.paste(255, (x0 + 12, y0 + 12, x1 - 12, y1 - 12))
im = Image.composite(soft, im, feather.filter(ImageFilter.GaussianBlur(8)))
a = np.asarray(im).astype(np.float32)

# The tab sits on the screen's left edge (x 18–40, y 186–343 here) with a soft shadow: black over it, and the bezel
# beside it rebuilt from the bezel just above.
a[170:362, 18:60] = 0
a[170:362, 4:18] = a[150:151, 4:18]

# Ground: the white connected to the corners. It becomes transparent; its edge keeps the anti-aliasing as partial alpha.
c = a / 255
lum_white = c.min(axis=2)
white = lum_white > .9
ground = np.zeros_like(white)
for y, x in [(0, 0), (0, -1), (-1, 0), (-1, -1)]:
    ground[y, x] = white[y, x]
while True:  # grow from the corners through white pixels until nothing changes
    g = ground.copy()
    g[1:] |= ground[:-1]; g[:-1] |= ground[1:]; g[:, 1:] |= ground[:, :-1]; g[:, :-1] |= ground[:, 1:]
    g &= white
    if (g == ground).all():
        break
    ground = g
# Grow the ground by a pixel so the edge pixels get partial alpha too.
g = ground.copy()
g[1:] |= ground[:-1]; g[:-1] |= ground[1:]; g[:, 1:] |= ground[:, :-1]; g[:, :-1] |= ground[:, 1:]
alpha = np.ones(lum_white.shape, np.float32)
edge_a = np.clip((1 - lum_white) / .9, 0, 1)
alpha[g] = edge_a[g]
alpha[ground] = 0
rgb = np.where(alpha[..., None] > 0, (c - (1 - alpha[..., None])) / np.maximum(alpha[..., None], 1e-3), 0)
px = np.dstack([np.clip(rgb, 0, 1), alpha]) * 255
Image.fromarray(px.round().astype(np.uint8), 'RGBA').save(out, 'WEBP', quality=90, method=6)
print(out, im.size)
