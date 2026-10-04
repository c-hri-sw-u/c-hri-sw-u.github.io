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

  document.getElementById('begin')?.addEventListener('click', () =>
    scenes[1]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));

  const dialog = document.getElementById('index') as HTMLDialogElement;
  document.getElementById('openIndex')!.addEventListener('click', () => dialog.showModal());
  document.getElementById('closeIndex')!.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
}
