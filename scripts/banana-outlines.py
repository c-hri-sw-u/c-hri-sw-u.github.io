# Banana Exoskeleton: everything drawn from the cut-out bananas in Assets/Works/Banana Exoskeleton/18.gif.
# Writes public/media/works/banana-exoskeleton/every.webp, the bananas one after another on a transparent ground,
# each centred and scaled to the same length so only the shape changes,
# and src/components/Bananas.astro: their outlines aligned and overlaid, and a ring of points that shrinks onto
# the outline they share (redrawn from the project's optimization).
# Needs ffmpeg, numpy, opencv-python-headless. Run: python3 scripts/banana-outlines.py
import cv2, numpy as np, subprocess, tempfile, glob, os

SRC = 'public/Assets/Works/Banana Exoskeleton/18.gif'
OUT = 'public/media/works/banana-exoskeleton'
os.makedirs(OUT, exist_ok=True)

tmp = tempfile.mkdtemp()
subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-i', SRC, f'{tmp}/f%03d.png'], check=True)

def cutout(path):
    im = cv2.imread(path)
    b, g, r = (im[..., k].astype(int) for k in range(3))
    m = ((b - np.maximum(r, g)) <= 70).astype(np.uint8) * 255  # everything that isn't the blue ground
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
    c = max(cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)[0], key=cv2.contourArea)
    mask = np.zeros_like(m)
    cv2.drawContours(mask, [c], -1, 255, -1)
    mask = cv2.erode(mask, np.ones((3, 3), np.uint8), iterations=2)  # drops the white halo of the cut-out
    diam = 2 * cv2.distanceTransform(mask, cv2.DIST_L2, 5).max()  # the widest point, across the banana
    return im, mask, c[:, 0, :].astype(float), diam

frames, outlines = [], []
for f in sorted(glob.glob(f'{tmp}/f*.png')):
    im, mask, pts, diam = cutout(f)
    # --- the frame: centred, the banana's longer side 62% of the square
    x, y, w, h = cv2.boundingRect(mask)
    S, k = 720, 720 * .62 / max(w, h)
    a = cv2.GaussianBlur(mask, (3, 3), 0)[y:y + h, x:x + w]
    crop = cv2.resize(im[y:y + h, x:x + w], None, fx=k, fy=k, interpolation=cv2.INTER_AREA)
    a = cv2.resize(a, (crop.shape[1], crop.shape[0]), interpolation=cv2.INTER_AREA).astype(float)[..., None] / 255
    canvas = np.zeros((S, S, 4), np.uint8)  # transparent, so the banana sits on whatever ground the page has
    oy, ox = (S - crop.shape[0]) // 2, (S - crop.shape[1]) // 2
    canvas[oy:oy + crop.shape[0], ox:ox + crop.shape[1], :3] = crop
    canvas[oy:oy + crop.shape[0], ox:ox + crop.shape[1], 3] = (a[..., 0] * 255).round()
    frames.append(canvas)
    # --- the outline: long axis level, arching upward, stem to the right
    c = pts - pts.mean(0)
    _, vecs = np.linalg.eigh(np.cov(c.T))
    c = c @ vecs[:, ::-1]
    c[:, 0] -= (c[:, 0].max() + c[:, 0].min()) / 2
    length = np.ptp(c[:, 0])
    c /= length  # length 1 for the tests below; rescaled by the diameter afterwards
    mid, ends = c[np.abs(c[:, 0]) < .12, 1].mean(), c[np.abs(c[:, 0]) > .38, 1].mean()
    if mid > ends: c[:, 1] *= -1  # y grows downward: the middle should sit higher than the ends
    thick = lambda lo, hi: np.ptp(c[(c[:, 0] > lo) & (c[:, 0] < hi), 1]) if ((c[:, 0] > lo) & (c[:, 0] < hi)).sum() > 2 else 1
    if thick(.42, .5) > thick(-.5, -.42): c[:, 0] *= -1  # the stem is the thinner end
    outlines.append(c * length / diam)  # same widest diameter for all, as in the project's standardizing

med = np.median([np.ptp(c[:, 0]) for c in outlines])
outlines = [c / med for c in outlines]  # the median banana is length 1

for i, fr in enumerate(frames): cv2.imwrite(f'{tmp}/k{i:03d}.png', fr)
# An animated WebP with alpha: a video can't be transparent everywhere, and blending one onto the paper fails in Safari.
subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-framerate', '6', '-i', f'{tmp}/k%03d.png',
                '-vf', 'scale=560:-2:flags=lanczos', '-c:v', 'libwebp_anim', '-lossless', '0', '-q:v', '72',
                '-loop', '0', f'{OUT}/every.webp'], check=True)

# --- drawing space: 1000 wide, bananas 560 long, centred
W, H, SC, CX, CY = 1000, 560, 560, 500, 300
def place(c): return np.c_[c[:, 0] * SC + CX, c[:, 1] * SC + CY]
def path(p, eps=1.2):
    p = cv2.approxPolyDP(p.astype(np.float32).reshape(-1, 1, 2), eps, True)[:, 0]
    return 'M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in p) + ' Z'

placed = [place(c) for c in outlines]
# Align each by its own centre of mass so their arcs overlap, as in the project's contour plots.
cy0 = np.mean([p[:, 1].mean() for p in placed])
placed = [p - [0, p[:, 1].mean() - cy0] for p in placed]

# The shared outline: where at least a third of the bananas overlap, smoothed.
acc = np.zeros((H, W), float)
for p in placed:
    m = np.zeros((H, W), np.uint8)
    cv2.fillPoly(m, [p.astype(np.int32)], 1)
    acc += m
share = ((acc / len(placed)) >= .33).astype(np.uint8)
share = cv2.morphologyEx(share, cv2.MORPH_CLOSE, np.ones((15, 15), np.uint8))
t = max(cv2.findContours(share, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)[0], key=cv2.contourArea)[:, 0].astype(float)
t = np.array([np.convolve(np.r_[t[-6:, k], t[:, k], t[:6, k]], np.ones(13) / 13, 'valid') for k in range(2)]).T
N = 28
seg = np.r_[0, np.cumsum(np.linalg.norm(np.diff(np.r_[t, t[:1]], axis=0), axis=1))]
loop = np.r_[t, t[:1]]
target = np.array([[np.interp(s, seg, loop[:, k]) for k in range(2)] for s in np.linspace(0, seg[-1], N, endpoint=False)])
# The starting ring: a circle around everything, its points matched to the target's in order.
cx, cy = target.mean(0)
R = 290
ang = np.arctan2(target[:, 1] - cy, target[:, 0] - cx)
if np.mean(np.diff(np.unwrap(ang))) < 0: target = target[::-1]  # same winding as the circle
start = np.arctan2(target[0, 1] - cy, target[0, 0] - cx)
ring = np.array([[cx + R * np.cos(start + 2 * np.pi * k / N), cy + R * np.sin(start + 2 * np.pi * k / N)] for k in range(N)])
pts = lambda p: ' '.join(f'{x:.1f},{y:.1f}' for x, y in p)
# In between, the ring eases toward the target and is smoothed, as an energy descent would pull it.
steps = []
for s in np.linspace(0, 1, 9):
    e = 1 - (1 - s) ** 2
    p = ring * (1 - e) + target * e
    steps.append(pts(p))

allp = np.vstack(placed)
x0, y0 = allp.min(0) - 12; x1, y1 = allp.max(0) + 12
vb = f'{x0:.0f} {y0:.0f} {x1 - x0:.0f} {y1 - y0:.0f}'
vb_fit = f'{cx - R - 12:.0f} {cy - R - 12:.0f} {2 * R + 24:.0f} {2 * R + 24:.0f}'
lines = '\n    '.join(f'<path pathLength="1" d="{path(p)}" style="--k:{i}" />' for i, p in enumerate(placed))
svg = f'''---
// Generated by scripts/banana-outlines.py; edit that script, not this file.
// The outlines of {len(placed)} of the bananas collected for the project, cut out, levelled and scaled to one length,
// overlaid so their shared arc shows. With `fit`, a ring of points then shrinks onto the outline most of them share.
const {{ fit = false }} = Astro.props;
---
<svg class:list={{['drawing', 'bananas', 'r', {{ fit }}]}} viewBox={{fit ? '{vb_fit}' : '{vb}'}} aria-hidden="true">
  <g class="outlines">
    {lines}
  </g>
  {{fit && (
    <g class="ring">
      <defs><marker id="vertex" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse"><circle cx="3" cy="3" r="3" fill="#e2477a" /></marker></defs>
      <polygon points="{steps[0]}">
        <animate attributeName="points" dur="2.6s" begin="indefinite" fill="freeze" calcMode="spline"
          keyTimes="{';'.join(f'{k / 8:.3f}' for k in range(9))}" keySplines="{';'.join(['.4 0 .6 1'] * 8)}"
          values="{';'.join(steps)}" />
      </polygon>
    </g>
  )}}
</svg>
'''
open('src/components/Bananas.astro', 'w').write(svg)
print(len(placed), 'outlines;', 'target', N, 'points')
