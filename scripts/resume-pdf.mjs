// Prints the built resume page (dist/resume/) to a one-page Letter PDF, so "Download PDF" is a real file that always
// matches the page. Run after `npm run build`; the deploy workflow does. Writes dist/Yixi-Chris-Wu-Resume.pdf, and the
// same file at dist/Assets/cv.pdf, the address the original map and older links use.
import { createServer } from 'node:http';
import { readFile, mkdir, copyFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { chromium } from 'playwright';

const DIST = new URL('../dist/', import.meta.url).pathname;
const OUT = join(DIST, 'Yixi-Chris-Wu-Resume.pdf');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.webp': 'image/webp' };

// A tiny static server for dist/, so the page loads its CSS and fonts from absolute paths as it does on the site.
const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end(); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/resume/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // The sheet is one fixed Letter page that hides what spills over: stop if anything does, rather than print a cut-off resume.
  const over = await page.evaluate(() => { const s = document.querySelector('.sheet'); return s.scrollHeight - s.clientHeight; });
  if (over > 0) throw new Error(`The resume runs ${over}px past one page. Shorten src/data/resume.ts.`);
  await page.pdf({ path: OUT, format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await mkdir(join(DIST, 'Assets'), { recursive: true });
  await copyFile(OUT, join(DIST, 'Assets', 'cv.pdf'));
  console.log('resume PDF written to', OUT);
} finally {
  await browser.close();
  server.close();
}
