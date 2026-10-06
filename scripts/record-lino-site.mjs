// Records lino.one for the homepage's lino.one cell: a 1440x900 desktop window scrolls from the top to the footer at
// one steady speed, pausing only on the three steps of the pinned "While you work" track. Frames come from Chrome's
// screencast with their own timestamps, so the video keeps real time. Needs Chrome and ffmpeg. Re-run when the site
// changes; if the track moves, adjust STOPS. Writes public/media/works/lino-app/site.mp4 and site-poster.jpg.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';

const OUT = new URL('../public/media/works/lino-app/', import.meta.url).pathname;
const SPEED = 450; // px per second
// [scrollY, ms to stay]: Read, Browse and Plan your day. The track pins at 4838; Browse takes over at ~5525, Plan at ~6125.
const STOPS = [[4900, 2500], [5800, 2500], [6450, 2500]];

const tmp = mkdtempSync(join(tmpdir(), 'lino-site-'));
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.goto('https://www.lino.one/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.addStyleTag({ content: 'html{scrollbar-width:none} ::-webkit-scrollbar{display:none}' });

const cdp = await page.context().newCDPSession(page);
const stamps = [];
cdp.on('Page.screencastFrame', f => {
  stamps.push(f.metadata.timestamp);
  writeFileSync(join(tmp, `${String(stamps.length).padStart(5, '0')}.jpg`), Buffer.from(f.data, 'base64'));
  cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
});
await page.evaluate(() => scrollTo(0, 0));
await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92 });
const bottom = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
for (const [y, stay] of [...STOPS, [bottom, 0]]) {
  await page.evaluate(([y, speed]) => new Promise(done => {
    const y0 = scrollY, t0 = performance.now(), ms = (y - y0) / speed * 1000;
    const step = now => {
      const t = Math.min(1, (now - t0) / ms);
      scrollTo(0, y0 + (y - y0) * t);
      t < 1 ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  }), [y, SPEED]);
  await page.waitForTimeout(stay);
}
await cdp.send('Page.stopScreencast');
await browser.close();

// Each frame lasts until the next one arrives.
const name = i => join(tmp, `${String(i + 1).padStart(5, '0')}.jpg`);
const list = stamps.map((t, i) => `file '${name(i)}'\nduration ${((stamps[i + 1] ?? t + .04) - t).toFixed(4)}\n`).join('')
  + `file '${name(stamps.length - 1)}'\n`;
writeFileSync(join(tmp, 'list.txt'), list);
const ff = args => execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-y', ...args], { stdio: 'inherit' });
ff(['-f', 'concat', '-safe', '0', '-i', join(tmp, 'list.txt'), '-vf', 'fps=30,scale=1280:800:flags=lanczos,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-movflags', '+faststart', '-an', join(OUT, 'site.mp4')]);
ff(['-i', join(OUT, 'site.mp4'), '-frames:v', '1', '-vf', 'scale=720:-2', '-q:v', '4', join(OUT, 'site-poster.jpg')]);
rmSync(tmp, { recursive: true });
console.log(`${stamps.length} frames → site.mp4`);
