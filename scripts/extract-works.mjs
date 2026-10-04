// One-off migration: reads the legacy public/works.js and writes one Markdown file per work
// into src/content/works/. Frontmatter carries everything the homepage and map need; the
// legacy HTML body stays in works.js until each detail page is rewritten.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync(new URL('../public/works.js', import.meta.url), 'utf8');
const worksData = new Function('console', `${src}\n;return worksData;`)({ log() {} });
const outDir = new URL('../src/content/works/', import.meta.url);
mkdirSync(outDir, { recursive: true });

const clean = s => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().replace(/^-\s*/, '');
const yaml = v => JSON.stringify(v);

let seq = 0;
for (const stage of worksData.stages) {
  // Same ordering rule as drawMapIcons.js: explicit indexNumber, else counting down within the stage.
  let next = stage.works.filter(w => w.icon).length;
  for (const w of stage.works) {
    if (!w.icon) continue;
    const order = w.indexNumber !== undefined ? w.indexNumber : next--;
    const hover = (w.hover || '').match(/src="([^"]+)"/)?.[1] || '';
    const preview = hover.startsWith('http') ? hover : hover.replace(/^(\.\.\/)+/, '/');
    const fm = [
      '---',
      `title: ${yaml(clean(w.title))}`,
      `listTitle: ${yaml(w.listTitle)}`,
      `subtitle: ${yaml(clean(w.subtitle))}`,
      `type: ${yaml(clean(w.type))}`,
      `date: ${yaml(w.date)}`,
      `stage: ${yaml(stage.id)}`,
      `order: ${order}`,
      `seq: ${seq++}`, // listing order in works.js, breaks ties in `order`
      'icon:',
      `  shape: ${yaml(w.icon.shape)}`,
      `  fill: ${yaml(w.icon.fill)}`,
      `  dashed: ${!!w.icon.dashed}`,
      `  skewed: ${!!w.icon.skewed}`,
      `  position: [${w.icon.position.join(', ')}]`,
      `preview: ${yaml(preview)}`,
      `legacyUrl: ${yaml(`/template.html?work=${w.id}`)}`,
      '---',
      '',
      clean(w.description),
      '',
    ].join('\n');
    writeFileSync(new URL(`${w.id}.md`, outDir), fm);
  }
}
console.log('done');
