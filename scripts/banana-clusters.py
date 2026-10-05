# Builds public/media/works/banana-exoskeleton/clusters.webp: the three printed cases (14.png) and, above each,
# the overlaid banana outlines of the cluster it was made for (0, 3 and 4, from the project's plots in 16.png),
# redrawn as light hairlines. On the page's ink, #111.
import cv2, numpy as np
SRC = 'public/Assets/Works/Banana Exoskeleton/'
INK, LINE = np.array([17, 17, 17], float), np.array([231, 235, 236], float)  # BGR of #111 and #ecebe7
plot = cv2.imread(SRC + '16.png')
hsv = cv2.cvtColor(plot, cv2.COLOR_BGR2HSV)
# The coloured curves only: grid, axes and labels are grey or black.
curves = np.clip((hsv[..., 1].astype(float) - 60) / 120, 0, 1) * (hsv[..., 2] > 80)
bands = [(58, 200), (288, 445), (535, 710)]  # the three overlap plots, top to bottom

cases = cv2.imread(SRC + '14.png').astype(float)
g = cases.max(2)
ys = np.where((g > 40).any(1))[0]
cases = cases[ys.min() - 80:ys.max() + 80]
W = cases.shape[1]
third = W // 3
centres = [i * third + np.where((g[:, i * third:(i + 1) * third] > 40).any(0))[0].mean() for i in range(3)]

PW = int(W * .27)  # each plot's width
tops = []
for y0, y1 in bands:
    a = curves[y0 - 4:y1 + 5, 38:384]
    a = cv2.resize(a, None, fx=6, fy=6, interpolation=cv2.INTER_CUBIC)
    a = cv2.GaussianBlur(a, (0, 0), 1.6).clip(0, 1)
    a = cv2.resize(a, (PW, round(a.shape[0] * PW / a.shape[1])), interpolation=cv2.INTER_AREA)
    tops.append((a * 1.6).clip(0, 1) * .48)
TH, GAP = max(t.shape[0] for t in tops), 140
out = np.tile(INK, (TH + GAP + cases.shape[0], W, 1))
for t, c in zip(tops, centres):
    x = int(c - PW / 2)
    out[TH - t.shape[0]:TH, x:x + PW] = INK * (1 - t[..., None]) + LINE * t[..., None]
out[TH + GAP:] = INK + cases * (255 - INK) / 255  # black ground lifted to the ink
out = np.pad(out, ((80, 0), (0, 0), (0, 0)), constant_values=17)
out = cv2.resize(out.astype(np.uint8), None, fx=1600 / W, fy=1600 / W, interpolation=cv2.INTER_AREA)
cv2.imwrite('public/media/works/banana-exoskeleton/clusters.webp', out, [cv2.IMWRITE_WEBP_QUALITY, 82])
print(out.shape)
