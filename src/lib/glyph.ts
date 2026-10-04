// The geometric work icons as inline SVG. Mirrors the Paper.js shapes in public/workIcons.js
// so the homepage, the mini map and the map view draw the same glyphs as the legacy map.

export type Shape = 'circle' | 'square' | 'star6' | 'star4rounded' | 'star4rotatedRounded' | 'star6rounded' | 'star8rounded';
export interface Icon {
  shape: Shape;
  fill: 'black' | 'white';
  dashed: boolean;
  skewed: boolean;
  position: [number, number];
}

type Pt = [number, number];
const f = (v: number) => v.toFixed(2);

function starPts(n: number, r1: number, r2: number, rot: number): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI / n) * i - Math.PI / 2 + (rot * Math.PI) / 180;
    const r = i % 2 ? r2 : r1;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}
const poly = (pts: Pt[]) => 'M' + pts.map(p => `${f(p[0])} ${f(p[1])}`).join('L') + 'Z';

// Closed Catmull-Rom spline as cubic Beziers, standing in for Paper.js `smooth()`.
function smooth(pts: Pt[]) {
  const n = pts.length;
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

export function shapePath(shape: Shape): string {
  const star = ((40 * 1.4) / 2) * 0.62;
  const rs = ((40 * 1.18) / 2) * 0.62;
  switch (shape) {
    case 'circle': return 'M-13 0a13 13 0 1 0 26 0a13 13 0 1 0 -26 0Z';
    case 'square': return 'M-12 -12H12V12H-12Z';
    case 'star6': return poly(starPts(6, star * 0.5, star, 0));
    case 'star4rounded': return smooth(starPts(4, rs * 0.8, rs, 0));
    case 'star4rotatedRounded': return smooth(starPts(4, rs * 0.8, rs, 45));
    case 'star6rounded': return smooth(starPts(6, rs * 0.8, rs, 0));
    case 'star8rounded': return smooth(starPts(8, rs * 0.8, rs, 22.5));
  }
}

/** The glyph's <path>, drawn in a 40×40 box centred on 0,0. */
export function glyphPath(icon: Pick<Icon, 'shape' | 'fill' | 'dashed' | 'skewed'>): string {
  const tf = icon.skewed ? ' transform="skewX(-20)"' : '';
  const fill = icon.fill === 'black' ? 'var(--ink)' : 'var(--paper)';
  const dash = icon.dashed ? ' stroke-dasharray="3 3"' : '';
  return `<path d="${shapePath(icon.shape)}"${tf} fill="${fill}" stroke="var(--ink)" stroke-width="1.2"${dash}/>`;
}

/** The work's code (stage letter + order, e.g. "E2") written inside the glyph, as on the legacy map. */
export function glyphCode(icon: Pick<Icon, 'fill'>, code: string): string {
  const fill = icon.fill === 'black' ? 'var(--paper)' : 'var(--ink)';
  return `<text x="0" y="0.5" text-anchor="middle" dominant-baseline="central" font-size="12.5" font-family="Quicksand, sans-serif" font-weight="600" fill="${fill}">${code}</text>`;
}

export function glyph(icon: Pick<Icon, 'shape' | 'fill' | 'dashed' | 'skewed'>, code?: string): string {
  return `<svg viewBox="-20 -20 40 40" aria-hidden="true">${glyphPath(icon)}${code ? glyphCode(icon, code) : ''}</svg>`;
}

export const SHAPE_TEXT: Record<Shape, string> = {
  circle: 'Circle: pure software or UI',
  square: 'Square: physical space',
  star4rounded: 'Rounded diamond: virtual space or game',
  star4rotatedRounded: 'Rounded diamond: virtual space or game',
  star6: 'Sharp hexagon: hardware + software, hardware-led',
  star6rounded: 'Rounded hexagon: hardware + software, UI-led',
  star8rounded: 'Octagon: multidisciplinary (code, physical, interaction)',
};

export function describe(icon: Icon): string {
  const fill = icon.dashed ? 'Dashed: unfinished' : icon.fill === 'black' ? 'Solid: finished' : 'Outline: prototype';
  return `${SHAPE_TEXT[icon.shape]}. ${fill}${icon.skewed ? ', skewed: playful' : ''}.`;
}
