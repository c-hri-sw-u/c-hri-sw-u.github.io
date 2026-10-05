# Traces a small black-and-white drawing into an SVG, so it stays sharp at any size (needs: pip install potracer pillow numpy).
# Guanyin's fine lines left of the split keep their detail; the arrow and Mickey's big shapes right of it get smooth edges.
# usage: trace-disneyland.py SRC OUT
import sys, numpy as np, potrace
from PIL import Image, ImageFilter
src,out=sys.argv[1],sys.argv[2]; k=4
g=Image.open(src).convert('L'); g=g.resize((g.width*k,g.height*k),Image.LANCZOS)
def mask(blur,th): return np.asarray(g.filter(ImageFilter.GaussianBlur(blur)))<th
split=430*k
a=np.zeros((g.height,g.width),bool)
a[:,:split]=mask(1.0,128)[:,:split]   # Guanyin: fine lines, keep detail
a[:,split:]=mask(4.0,128)[:,split:]   # arrow and Mickey: big shapes, smooth edges
ys,xs=np.where(a); pad=4*k
x0,y0,x1,y1=max(xs.min()-pad,0),max(ys.min()-pad,0),xs.max()+pad,ys.max()+pad
a=a[y0:y1,x0:x1]
path=potrace.Bitmap(~a).trace(turdsize=8,alphamax=1.2,opticurve=True,opttolerance=0.4)
h,w=a.shape; d=[]; f=lambda p:f"{p.x/k:.1f} {p.y/k:.1f}"
for c in path:
    d.append("M"+f(c.start_point))
    for s in c:
        d.append(f"L{f(s.c)}L{f(s.end_point)}" if s.is_corner else f"C{f(s.c1)} {f(s.c2)} {f(s.end_point)}")
    d.append("Z")
W,H=w/k,h/k
open(out,'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" width="{W:.0f}" height="{H:.0f}"><path fill="#111" fill-rule="evenodd" d="{"".join(d)}"/></svg>\n')
print(W,H)
