// Records a website work for its homepage cell in a 1440x900 desktop window. A long page scrolls from the top to the
// bottom at one steady speed, so every section gets the same time on screen. A site of full-screen slides turns one
// slide at a time instead, staying on each until its entrance has played. Frames come from Chrome's screencast with
// their own timestamps, so the video keeps real time. Needs Chrome and ffmpeg. Re-run when the site changes:
//   node scripts/record-site.mjs lino-site      (or boulesis-site)
// Writes site.mp4 (960x600, twice the widest cell) and site-poster.jpg into the site's folder under public/media/works/.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';

const SITES = {
  'lino-site': { url: 'https://www.lino.one/', out: 'lino-app' },
  // Nine slides in <main>, which snaps; the snapping is turned off so the turns can be eased here. It follows the
  // system theme, and dark is how it looks best. Each stay (ms) covers that slide's last entrance (its delay plus
  // ~1.2s, from Slides.tsx): hero, products (not waiting on its video), question, worth, word, book, future,
  // manifesto, contact. The hero's entrance plays on first paint, so its stay counts from the page's start.
  'boulesis-site': { url: 'https://www.boulesis.one/', out: 'boulesis-site', scroller: 'main', colorScheme: 'dark',
    stays: [3500, 2000, 3500, 2500, 3000, 3000, 4500, 4000, 3000] },
};
const site = SITES[process.argv[2]];
if (!site) throw new Error(`Which site? ${Object.keys(SITES).join(' | ')}`);
const OUT = new URL(`../public/media/works/${site.out}/`, import.meta.url).pathname;
const SPEED = 450; // px per second, for a long page
const TURN = 900; // ms per slide turn, eased

execFileSync('mkdir', ['-p', OUT]);
const tmp = mkdtempSync(join(tmpdir(), 'site-'));
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, colorScheme: site.colorScheme ?? 'light' });
const cdp = await page.context().newCDPSession(page);
const frames = [];
cdp.on('Page.screencastFrame', f => {
  const file = join(tmp, `${String(frames.length + 1).padStart(5, '0')}.jpg`);
  frames.push({ t: f.metadata.timestamp, file });
  writeFileSync(file, Buffer.from(f.data, 'base64'));
  cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
});
const scroller = sel => page.evaluate(sel => {
  const el = sel ? document.querySelector(sel) : document.scrollingElement;
  el.style.scrollSnapType = 'none';
  el.style.scrollBehavior = 'auto';
  el.scrollTop = 0;
}, sel);
// Glide the scroller to y over ms: linear for a long page, eased for a slide turn.
const glide = (y, ms, eased) => page.evaluate(([sel, y, ms, eased]) => new Promise(done => {
  const el = sel ? document.querySelector(sel) : document.scrollingElement;
  const y0 = el.scrollTop, t0 = performance.now();
  const ease = t => eased ? (t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2) : t;
  const step = now => {
    const t = Math.min(1, (now - t0) / ms);
    el.scrollTop = y0 + (y - y0) * ease(t);
    t < 1 ? requestAnimationFrame(step) : done();
  };
  requestAnimationFrame(step);
}), [site.scroller, y, ms, eased]);
const hideScrollbars = () => page.addStyleTag({ content: '*{scrollbar-width:none} ::-webkit-scrollbar{display:none}' });

let from = 0; // frames before this time (s) are left out
if (site.stays) {
  // Recording from the first paint, so the opening slide's entrance is in it.
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92 });
  await page.goto(site.url, { waitUntil: 'domcontentloaded' });
  from = Date.now() / 1000;
  await hideScrollbars();
  await scroller(site.scroller);
  const height = await page.evaluate(sel => document.querySelector(sel).clientHeight, site.scroller);
  for (const [i, stay] of site.stays.entries()) {
    if (i) await glide(i * height, TURN, true);
    await page.waitForTimeout(i ? stay : stay - (Date.now() - from * 1000));
  }
} else {
  await page.goto(site.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await hideScrollbars();
  await scroller(site.scroller);
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92 });
  const y = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  await glide(y, y / SPEED * 1000, false);
}
await cdp.send('Page.stopScreencast');
await browser.close();
const kept = frames.filter(f => f.t >= from);
if (!kept.length) throw new Error('No frames came in');

// Each frame lasts until the next one arrives.
const list = kept.map((f, i) => `file '${f.file}'\nduration ${((kept[i + 1]?.t ?? f.t + .04) - f.t).toFixed(4)}\n`).join('')
  + `file '${kept.at(-1).file}'\n`;
writeFileSync(join(tmp, 'list.txt'), list);
const ff = args => execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-y', ...args], { stdio: 'inherit' });
ff(['-f', 'concat', '-safe', '0', '-i', join(tmp, 'list.txt'), '-vf', 'fps=30,scale=960:600:flags=lanczos,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-movflags', '+faststart', '-an', join(OUT, 'site.mp4')]);
// The poster is the opening once its entrance has played.
const posterAt = site.stays ? (site.stays[0] - 200) / 1000 : 0;
ff(['-ss', String(posterAt), '-i', join(OUT, 'site.mp4'), '-frames:v', '1', '-vf', 'scale=720:-2', '-q:v', '4', join(OUT, 'site-poster.jpg')]);
rmSync(tmp, { recursive: true });
console.log(`${kept.length} frames → ${site.out}/site.mp4`);
