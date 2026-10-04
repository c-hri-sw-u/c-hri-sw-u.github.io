// Homepage behaviour: cross-fading moments inside each cell, the Selected ↔ Map switch
// (the cells' corner glyphs fly to their spots on the map), and map previews.

const EASE = 'cubic-bezier(.65,0,.2,1)';

export function initHome() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const plane = document.getElementById('plane')!;
  const pv = document.getElementById('preview')!;
  const toList = document.getElementById('toList')!;
  const toMap = document.getElementById('toMap')!;
  let mode: 'list' | 'map' = location.hash === '#map' ? 'map' : 'list';

  const iconEl = (id: string) => plane.querySelector<HTMLElement>(`.mapicon[data-id="${id}"]`)!;
  const inView = (r: DOMRect) => r.bottom > 40 && r.top < innerHeight - 20;
  const workCards = () => [...document.querySelectorAll<HTMLElement>('.card[data-id]')];

  // ---------- moments ----------
  function show(el: Element | undefined, on: boolean) {
    if (!el) return;
    el.classList.toggle('on', on);
    if (el instanceof HTMLVideoElement) {
      if (on) { el.preload = 'auto'; el.currentTime = 0; el.play().catch(() => {}); }
      else el.pause();
    }
  }
  workCards().forEach((card, n) => {
    const frames = [...card.querySelectorAll('.media > img, .media > video')];
    const dots = [...card.querySelectorAll('.dots i')];
    if (frames.length < 2 || reduce) return;
    let i = 0;
    const step = () => {
      if (card.matches(':hover') || mode === 'map' || document.hidden) return;
      show(frames[i], false); dots[i]?.classList.remove('on');
      i = (i + 1) % frames.length;
      show(frames[i], true); dots[i]?.classList.add('on');
    };
    setTimeout(() => setInterval(step, 4200), 1200 + n * 700);
  });

  // ---------- map previews (hover on desktop, first tap on touch) ----------
  let armed: string | null = null;
  function showPreview(b: HTMLElement) {
    const { title, date, preview } = b.dataset;
    pv.querySelector('img')!.src = preview || '';
    pv.querySelector('b')!.textContent = title || '';
    pv.querySelector('span')!.textContent = (date || '') + (b.classList.contains('feat') ? ' · on the homepage' : '');
    const x = parseFloat(b.style.left), y = parseFloat(b.style.top);
    Object.assign(pv.style, {
      left: x > 60 ? '' : `calc(${x}% + 24px)`, right: x > 60 ? `calc(${100 - x}% + 24px)` : '',
      top: y > 55 ? '' : `calc(${y}% - 20px)`, bottom: y > 55 ? `calc(${100 - y}% - 20px)` : '',
    });
    pv.classList.add('show');
  }
  plane.addEventListener('pointerover', e => {
    const b = (e.target as Element).closest<HTMLElement>('.mapicon');
    if (b && e.pointerType === 'mouse') showPreview(b);
  });
  plane.addEventListener('pointerout', e => {
    if ((e.target as Element).closest('.mapicon') && e.pointerType === 'mouse') pv.classList.remove('show');
  });
  plane.addEventListener('click', e => {
    const b = (e.target as Element).closest<HTMLElement>('.mapicon');
    if (!b) { pv.classList.remove('show'); armed = null; return; }
    if (armed !== b.dataset.id && matchMedia('(hover: none)').matches) { armed = b.dataset.id!; showPreview(b); return; }
    location.href = b.dataset.url!;
  });

  // ---------- Selected ↔ Map ----------
  function setPressed() {
    toList.setAttribute('aria-pressed', String(mode === 'list'));
    toMap.setAttribute('aria-pressed', String(mode === 'map'));
  }
  function glyphFlyer(card: HTMLElement, box: { left: number; top: number; width: number; height: number }) {
    const el = document.createElement('div');
    el.className = 'fly';
    el.innerHTML = card.querySelector('.glyph-btn svg')!.outerHTML;
    Object.assign(el.style, { left: box.left + 'px', top: box.top + 'px', width: box.width + 'px', height: box.height + 'px' });
    document.body.appendChild(el);
    return el;
  }
  function iconTarget(id: string) {
    const b = iconEl(id), r = b.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: b.offsetWidth };
  }
  // A gentle arc: the midpoint lifts, the glyph overshoots its final size, then settles.
  function arc(from: { x: number; y: number }, to: { x: number; y: number }, s0: number, s1: number): Keyframe[] {
    const mx = (to.x - from.x) * 0.5, my = (to.y - from.y) * 0.5 - 40;
    return [
      { transform: `translate(0,0) scale(${s0})` },
      { transform: `translate(${mx}px, ${my}px) scale(${((s0 + s1) / 2) * 1.25})`, offset: 0.55 },
      { transform: `translate(${to.x - from.x}px, ${to.y - from.y}px) scale(${s1})` },
    ];
  }

  function goMap(focusId?: string) {
    if (mode === 'map' && document.body.classList.contains('is-map')) return;
    mode = 'map'; setPressed();
    history.replaceState(null, '', '#map');
    const cards = workCards().filter(c => inView(c.getBoundingClientRect()));
    const starts = cards.map(c => [c, c.querySelector('.glyph-btn')!.getBoundingClientRect()] as const);
    document.body.classList.add('is-map');
    const all = [...plane.querySelectorAll<HTMLElement>('.mapicon')];
    if (reduce) { all.forEach(b => b.classList.add('on')); return; }
    const flying = new Set(cards.map(c => c.dataset.id));
    let k = 0;
    all.forEach(b => { if (!flying.has(b.dataset.id)) setTimeout(() => b.classList.add('on'), 380 + k++ * 30); });
    starts.forEach(([card, r], n) => {
      const id = card.dataset.id!, t = iconTarget(id);
      const el = glyphFlyer(card, r);
      const a = el.animate(arc({ x: r.left + r.width / 2, y: r.top + r.height / 2 }, t, 1, t.w / r.width),
        { duration: 760, delay: n * 40, easing: EASE, fill: 'forwards' });
      a.onfinish = () => { iconEl(id).classList.add('on'); el.remove(); };
    });
    if (focusId) setTimeout(() => { const b = iconEl(focusId); b.focus({ preventScroll: true }); showPreview(b); }, 900);
  }

  function goList() {
    if (mode === 'list') return;
    mode = 'list'; setPressed();
    history.replaceState(null, '', location.pathname);
    pv.classList.remove('show');
    const all = [...plane.querySelectorAll<HTMLElement>('.mapicon')];
    if (reduce) { all.forEach(b => b.classList.remove('on')); document.body.classList.remove('is-map'); return; }
    const flights = workCards().filter(c => inView(c.getBoundingClientRect())).map(c => {
      const id = c.dataset.id!, t = iconTarget(id), g = c.querySelector<HTMLElement>('.glyph-btn')!, r = g.getBoundingClientRect();
      const box = { left: t.x - r.width / 2, top: t.y - r.height / 2, width: r.width, height: r.height };
      return { g, r, t, el: glyphFlyer(c, box) };
    });
    all.forEach(b => b.classList.remove('on'));
    document.body.classList.remove('is-map');
    flights.forEach(({ g, r, t, el }, n) => {
      g.style.visibility = 'hidden';
      const a = el.animate(arc(t, { x: r.left + r.width / 2, y: r.top + r.height / 2 }, t.w / r.width, 1),
        { duration: 700, delay: n * 40, easing: EASE, fill: 'forwards' });
      a.onfinish = () => { g.style.visibility = ''; el.remove(); };
    });
  }

  toMap.addEventListener('click', () => goMap());
  toList.addEventListener('click', () => goList());
  document.getElementById('mapTile')!.addEventListener('click', () => goMap());
  document.querySelectorAll<HTMLElement>('.glyph-btn').forEach(b =>
    b.addEventListener('click', e => { e.preventDefault(); goMap(b.dataset.id); }));
  addEventListener('keydown', e => { if (e.key === 'Escape' && mode === 'map') goList(); });

  if (mode === 'map') { mode = 'list'; goMap(); }
}
