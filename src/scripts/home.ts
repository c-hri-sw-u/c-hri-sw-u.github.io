// Homepage behaviour: cross-fading moments inside each cell, the Selected ↔ Map switch
// (the cells' corner glyphs fly to their spots on the map, or the page corner peels back),
// map previews, and the small inhabitants carried over from the legacy map.

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
  // Videos that have wrapped around at least once since they were shown.
  const looped = new WeakSet<HTMLVideoElement>();
  document.querySelectorAll<HTMLVideoElement>('.media > video').forEach(v => {
    let last = 0;
    v.addEventListener('timeupdate', () => { if (v.currentTime < last) looped.add(v); last = v.currentTime; });
    v.addEventListener('play', () => { if (v.currentTime < 0.2) { looped.delete(v); last = 0; } });
  });
  workCards().forEach((card, n) => {
    const frames = [...card.querySelectorAll('.media > img, .media > video')];
    const dots = [...card.querySelectorAll('.dots i')];
    if (frames.length < 2 || reduce) return;
    let i = 0;
    const step = () => {
      if (card.matches(':hover') || mode === 'map' || document.hidden) return;
      // A video moment plays through once before the cell moves on (long demos are not cut off).
      const cur = frames[i];
      if (cur instanceof HTMLVideoElement && !cur.paused && cur.duration && !looped.has(cur) && cur.currentTime < cur.duration - 4.2) return;
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
    if (b.dataset.url) location.href = b.dataset.url;
    else showPreview(b);
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
      { transform: `translate(${mx}px, ${my}px) scale(${((s0 + s1) / 2) * 1.12})`, offset: 0.55 },
      { transform: `translate(${to.x - from.x}px, ${to.y - from.y}px) scale(${s1})` },
    ];
  }

  // `peeling`: the page is being peeled away; the glyphs fly while the map sweeps in, and
  // is-map (which drops the clip) only lands once the peel has finished.
  let landTimer = 0;
  function goMap(focusId?: string, peeling = false) {
    if (mode === 'map' && document.body.classList.contains('is-map')) return;
    mode = 'map'; setPressed();
    history.replaceState(null, '', '#map');
    const cards = workCards().filter(c => inView(c.getBoundingClientRect()));
    const starts = cards.map(c => [c, c.querySelector('.glyph-btn')!.getBoundingClientRect()] as const);
    if (peeling) landTimer = window.setTimeout(() => document.body.classList.add('is-map'), reduce ? 0 : 520);
    else document.body.classList.add('is-map');
    const all = [...plane.querySelectorAll<HTMLElement>('.mapicon')];
    const flying = new Set(cards.map(c => c.dataset.id));
    // Icons already showing in the lifted corner stay put; the flying ones hide until their glyph lands.
    if (peeling) all.forEach(b => b.classList.toggle('on', !flying.has(b.dataset.id)));
    document.body.classList.remove('peeking');
    if (reduce) { all.forEach(b => b.classList.add('on')); return; }
    let k = 0;
    if (!peeling) all.forEach(b => { if (!flying.has(b.dataset.id)) setTimeout(() => b.classList.add('on'), 380 + k++ * 30); });
    starts.forEach(([card, r], n) => {
      const id = card.dataset.id!, t = iconTarget(id), g = card.querySelector<HTMLElement>('.glyph-btn')!;
      const el = glyphFlyer(card, r);
      g.style.visibility = 'hidden';
      const a = el.animate(arc({ x: r.left + r.width / 2, y: r.top + r.height / 2 }, t, 1, t.w / r.width),
        { duration: 760, delay: n * 40, easing: EASE, fill: 'forwards' });
      a.onfinish = () => { iconEl(id).classList.add('on'); el.remove(); g.style.visibility = ''; };
    });
    if (focusId) setTimeout(() => { const b = iconEl(focusId); b.focus({ preventScroll: true }); showPreview(b); }, 900);
  }

  function goList() {
    if (mode === 'list') return;
    mode = 'list'; setPressed();
    clearTimeout(landTimer);
    history.replaceState(null, '', location.pathname);
    pv.classList.remove('show');
    const all = [...plane.querySelectorAll<HTMLElement>('.mapicon')];
    if (reduce) { all.forEach(b => b.classList.remove('on')); document.body.classList.remove('is-map'); setPeel(rest()); return; }
    // Measure the map icons while the map is up, but the cells only after it is gone: leaving map mode
    // puts the header back in the flow (and the scrollbar back), which moves the cells.
    const from = new Map(all.map(b => [b.dataset.id!, iconTarget(b.dataset.id!)]));
    all.forEach(b => b.classList.remove('on'));
    document.body.classList.remove('is-map');
    peelBack();
    const flights = workCards().filter(c => inView(c.getBoundingClientRect())).map(c => {
      const t = from.get(c.dataset.id!)!, g = c.querySelector<HTMLElement>('.glyph-btn')!, r = g.getBoundingClientRect();
      const box = { left: t.x - r.width / 2, top: t.y - r.height / 2, width: r.width, height: r.height };
      return { g, r, t, el: glyphFlyer(c, box) };
    });
    flights.forEach(({ g, r, t, el }, n) => {
      g.style.visibility = 'hidden';
      const a = el.animate(arc(t, { x: r.left + r.width / 2, y: r.top + r.height / 2 }, t.w / r.width, 1),
        { duration: 700, delay: n * 40, easing: EASE, fill: 'forwards' });
      a.onfinish = () => { g.style.visibility = ''; el.remove(); };
    });
  }

  // ---------- the folded corner (top left) ----------
  // --peel is the length of the fold's legs. The map shows through the corner it uncovers;
  // past about a third of the way, letting go lets the page fall away completely.
  const root = document.documentElement;
  const peel = document.getElementById('peel')!;
  const rest = () => (innerWidth < 600 ? 40 : 52);
  const full = () => innerWidth + innerHeight + 40;
  const setPeel = (px: number) => root.style.setProperty('--peel', px + 'px');
  function peelOpen() {
    root.classList.remove('peeling');
    setPeel(full());
    goMap(undefined, true);
  }
  function peelBack() {
    root.classList.add('peeling');
    setPeel(full());
    requestAnimationFrame(() => requestAnimationFrame(() => { root.classList.remove('peeling'); setPeel(rest()); }));
  }
  let drag: { x: number; y: number; moved: boolean } | null = null;
  peel.addEventListener('pointerenter', e => { if (!drag && e.pointerType === 'mouse') { setPeel(rest() + 22); document.body.classList.add('peeking'); } });
  peel.addEventListener('pointerleave', () => { if (!drag && mode === 'list') { setPeel(rest()); document.body.classList.remove('peeking'); } });
  peel.addEventListener('pointerdown', e => {
    drag = { x: e.clientX, y: e.clientY, moved: false };
    peel.setPointerCapture(e.pointerId);
    root.classList.add('peeling');
    document.body.classList.add('peeking');
  });
  peel.addEventListener('pointermove', e => {
    if (!drag) return;
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) drag.moved = true;
    // The fold passes through the pointer.
    setPeel(Math.max(rest(), e.clientX + e.clientY));
  });
  const release = (e: PointerEvent) => {
    if (!drag) return;
    const far = e.clientX + e.clientY > 0.32 * (innerWidth + innerHeight);
    const tap = !drag.moved;
    drag = null;
    if (tap || far) peelOpen();
    else { root.classList.remove('peeling'); setPeel(rest()); document.body.classList.remove('peeking'); }
  };
  peel.addEventListener('pointerup', release);
  peel.addEventListener('pointercancel', release);
  peel.addEventListener('click', e => { if (e.detail === 0) peelOpen(); }); // keyboard
  addEventListener('resize', () => { if (mode === 'list' && !drag) setPeel(rest()); });
  setPeel(rest());

  toMap.addEventListener('click', () => goMap());
  toList.addEventListener('click', () => goList());
  document.querySelectorAll<HTMLElement>('.glyph-btn').forEach(b =>
    b.addEventListener('click', e => { e.preventDefault(); goMap(b.dataset.id); }));
  addEventListener('keydown', e => { if (e.key === 'Escape' && mode === 'map') goList(); });

  if (mode === 'map') { mode = 'list'; goMap(); }

  walker();
  inhabitants(plane, reduce);
}

// The walking man takes a step for every bit of scroll, and walks on the spot when hovered.
function walker() {
  const frames = [...document.querySelectorAll<HTMLElement>('#walker img')];
  if (!frames.length) return;
  let i = 0, acc = 0, lastY = scrollY;
  const step = () => { frames[i].classList.remove('on'); i = i % (frames.length - 1) + 1; frames[i].classList.add('on'); };
  const stand = () => { frames[i].classList.remove('on'); i = 0; frames[0].classList.add('on'); };
  let idle = 0;
  addEventListener('scroll', () => {
    acc += Math.abs(scrollY - lastY); lastY = scrollY;
    while (acc > 28) { acc -= 28; step(); }
    clearTimeout(idle); idle = window.setTimeout(stand, 260);
  }, { passive: true });
  let t = 0;
  const mark = document.querySelector('.wordmark')!;
  mark.addEventListener('pointerenter', () => { clearInterval(t); t = window.setInterval(step, 90); });
  mark.addEventListener('pointerleave', () => { clearInterval(t); stand(); });
}

function inhabitants(plane: HTMLElement, reduce: boolean) {
  // Kiwi: hover and it talks; click and it says the next thing and waddles somewhere nearby.
  const kiwi = document.getElementById('kiwi')!;
  const say = kiwi.querySelector<HTMLElement>('.say')!;
  const lines: string[] = JSON.parse(say.dataset.lines || '[]');
  let line = 0, walking = false;
  function waddle() {
    if (walking || reduce) return;
    walking = true;
    const x0 = parseFloat(kiwi.style.left), y0 = parseFloat(kiwi.style.top);
    const x1 = Math.min(22, Math.max(5, x0 + (Math.random() * 10 - 5))), y1 = Math.min(28, Math.max(10, y0 + (Math.random() * 8 - 4)));
    kiwi.classList.toggle('left', x1 < x0);
    kiwi.classList.add('walking');
    let n = 0;
    const steps = 8;
    const t = setInterval(() => {
      n++;
      kiwi.classList.toggle('step1', n % 2 === 1); kiwi.classList.toggle('step2', n % 2 === 0);
      kiwi.style.left = x0 + ((x1 - x0) * n) / steps + '%';
      kiwi.style.top = y0 + ((y1 - y0) * n) / steps + '%';
      if (n >= steps) { clearInterval(t); kiwi.classList.remove('walking', 'step1', 'step2'); walking = false; }
    }, 140);
  }
  kiwi.addEventListener('click', () => {
    line = (line + 1) % lines.length;
    say.textContent = lines[line];
    kiwi.classList.add('talking');
    setTimeout(() => kiwi.classList.remove('talking'), 2600);
    waddle();
  });

  // UFO: click and it lifts off, then settles back.
  // UFO (public/ufo-and-footer.js): it wobbles, lifts and drops back while its shadow spreads.
  // A second click soon after sends it higher.
  const ufo = document.getElementById('ufo')!;
  const ufoImg = ufo.querySelector<HTMLElement>('img')!, ufoShadow = ufo.querySelector<HTMLElement>('.ufo-shadow')!;
  let ufoBusy = false, ufoLast = 0;
  function lift(height: number, steps: number, hold: number, spread: string) {
    ufoBusy = true;
    let n = 0;
    const t = setInterval(() => {
      ufoImg.style.rotate = n % 2 ? '-10deg' : '3deg';
      if (++n >= steps) { clearInterval(t); ufoImg.style.rotate = '0deg'; }
    }, 100);
    ufoImg.style.translate = `0 -${height}px`;
    Object.assign(ufoShadow.style, { opacity: '.6', transform: spread });
    setTimeout(() => {
      ufoImg.style.translate = '0 0';
      Object.assign(ufoShadow.style, { opacity: '0', transform: 'scale(0)' });
      setTimeout(() => { ufoBusy = false; }, 300);
    }, hold);
  }
  const ufoGo = () => {
    if (ufoBusy || reduce) return;
    const again = Date.now() - ufoLast < 2500;
    ufoLast = Date.now();
    if (again) lift(80, 12, 800, 'scale(3, 1.5)'); else lift(30, 10, 600, 'scale(1.4, .7)');
  };
  ufo.addEventListener('click', ufoGo);
  addEventListener('keydown', e => { if (e.code === 'ShiftLeft' && document.body.classList.contains('is-map')) ufoGo(); });

  // Forests: click one and every tree turns over, coniferous ↔ deciduous (public/tree-flip.js).
  plane.querySelectorAll<HTMLElement>('.forest').forEach(f => f.addEventListener('click', () => {
    [...f.querySelectorAll<HTMLImageElement>('img')].forEach((img, i) => setTimeout(() => {
      img.classList.add('flip');
      setTimeout(() => {
        img.src = img.src.includes('Coniferous') ? '/icon/Deciduous%20Tree.svg' : '/icon/Coniferous%20Tree.svg';
        img.classList.remove('flip');
      }, 60);
    }, reduce ? 0 : i * 25));
  }));

  // Compass (public/compass.js): the arrowhead points at the pointer and slides outward with distance.
  // The angle is unwrapped so the needle never spins the long way round when it crosses ±180°.
  const compass = document.getElementById('compass')!;
  const needle = compass.querySelector<HTMLElement>('.needle')!;
  const tip = needle.querySelector<HTMLElement>('i')!;
  let last = 0;
  addEventListener('pointermove', e => {
    if (!document.body.classList.contains('is-map') || e.pointerType !== 'mouse') return;
    const r = compass.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const a = (Math.atan2(dy, dx) * 180) / Math.PI - 90;
    last += ((((a - last) % 360) + 540) % 360) - 180;
    needle.style.transform = `rotate(${last}deg)`;
    tip.style.top = Math.min((dx * dx + dy * dy) / 25000 + 43, 57) + '%';
  }, { passive: true });
}
