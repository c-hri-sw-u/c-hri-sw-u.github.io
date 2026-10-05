// Detail pages: each scene eases in once when it fills the screen, the ground follows the scene's
// tone, the corner year rolls between chapters, and the Index opens as a dialog.
export function initDetail() {
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scenes = [...document.querySelectorAll<HTMLElement>('.scene')];
  const yearEl = document.getElementById('year')!;
  const progEl = document.getElementById('progress')!;
  let shown: number | null = null;
  let raf = 0;

  const setYear = (y?: string) => {
    if (!y) { yearEl.classList.remove('on'); return; }
    yearEl.classList.add('on');
    const to = +y;
    if (shown === null || reduce || shown === to) { shown = to; yearEl.textContent = y; return; }
    const from = shown, t0 = performance.now(), dur = 900;
    cancelAnimationFrame(raf);
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - (1 - k) ** 3;
      shown = Math.round(from + (to - from) * e);
      yearEl.textContent = String(shown);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(entries => {
    for (const en of entries) {
      const s = en.target as HTMLElement;
      const video = s.querySelector('video');
      if (!en.isIntersecting) { video?.pause(); continue; }
      s.classList.add('on');
      document.body.dataset.tone = s.dataset.tone ?? 'paper';
      setYear(s.dataset.year);
      progEl.textContent = s.dataset.n ? `${s.dataset.n} / ${progEl.dataset.total}` : '';
      if (video) { video.currentTime = 0; video.play().catch(() => {}); }
    }
  }, { threshold: 0.55 });
  scenes.forEach(s => io.observe(s));
  // Inventory items arrive one after another, after the line above them.
  document.querySelectorAll<HTMLElement>('.inventory li').forEach(li => {
    const k = [...li.parentElement!.children].indexOf(li);
    li.style.transitionDelay = `${0.8 + k * 0.12}s`;
  });

  // Several stills in one scene cross-fade while it is on screen.
  document.querySelectorAll<HTMLElement>('figure.fade').forEach(fig => {
    const imgs = [...fig.querySelectorAll('img')];
    let i = 0;
    setInterval(() => {
      if (document.hidden || !fig.closest('.scene')?.classList.contains('on')) return;
      imgs[i].classList.remove('on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('on');
    }, 2600);
  });

  // Media take whatever height the screen has left after the words, so a scene never outgrows it.
  // Images with rounded corners baked in get a radius that matches them at the size they are shown.
  const fit = () => {
    const vh = innerHeight;
    for (const s of scenes) {
      const fig = s.querySelector<HTMLElement>('figure');
      if (!fig) continue;
      const stack = s.querySelector<HTMLElement>('.stack')!;
      const cs = getComputedStyle(s);
      const gap = parseFloat(getComputedStyle(stack).rowGap) || 0;
      let words = 0;
      for (const c of stack.children) if (c !== fig) words += (c as HTMLElement).offsetHeight + gap;
      const room = vh - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - words;
      const cap = fig.querySelector('video') ? 0.8 : 0.7;
      fig.style.setProperty('--max', `${Math.max(140, Math.min(room, vh * cap))}px`);
    }
    document.querySelectorAll<HTMLElement>('[data-round]').forEach(m => {
      if (m.offsetWidth) m.style.borderRadius = `${m.offsetWidth * +m.dataset.round!}px`;
    });
  };
  fit();
  addEventListener('resize', fit);
  document.fonts?.ready.then(fit);
  document.querySelectorAll('figure img, figure video').forEach(m =>
    m.addEventListener(m.tagName === 'VIDEO' ? 'loadedmetadata' : 'load', fit));

  document.querySelectorAll<HTMLVideoElement>('figure video').forEach(v => v.addEventListener('click', () => {
    const w = v as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {}); else w.webkitEnterFullscreen?.();
  }));

  document.getElementById('begin')?.addEventListener('click', () =>
    scenes[1]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));

  const dialog = document.getElementById('index') as HTMLDialogElement;
  document.getElementById('openIndex')!.addEventListener('click', () => dialog.showModal());
  document.getElementById('closeIndex')!.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
}
