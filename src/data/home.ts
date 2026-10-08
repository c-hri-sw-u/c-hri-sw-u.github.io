// What the homepage shows. Each selected work gets one cell; the cell cross-fades through its moments.
// Media live in public/media/home and are built by scripts/make-home-media.sh.
// `flat`: the frame already has a white ground, so it sits on the cell without a shadow.

export interface Moment {
  src: string;
  kind: 'image' | 'video';
  flat?: boolean;
}
export interface Cell {
  id: string; // file name in src/content/works
  name: string;
  what: string;
  how: string;
  lead?: boolean;
  phone?: 'first' | 'hide'; // on phones: right after the lead, or left out (see home.css)
  mapMoment?: number; // which moment the map's preview shows; the first if unset
  moments: Moment[];
}

const img = (name: string, flat = false): Moment => ({ src: `/media/home/${name}.webp`, kind: 'image', flat });
const vid = (name: string, flat = false): Moment => ({ src: `/media/home/${name}.mp4`, kind: 'video', flat });

export const selected: Cell[] = [
  { id: 'lino-app', lead: true, name: 'Lino', what: 'AI canvas for visual thinking', how: 'Startup · design + code',
    // The product demo and the lino.one site, shared with the Lino App detail page.
    moments: [{ src: '/media/works/lino-app/hero.mp4', kind: 'video' }] },
  { id: 'risee', name: 'Risee', what: 'LLM on any selected text', how: 'Desktop app · Electron',
    moments: [vid('risee-orbit')] },
  { id: 'space-self-log', name: 'Witness', what: 'A personal agent that can see', how: 'Agent memory + egocentric vision',
    mapMoment: 1, // the floor plan; the map shows only it
    moments: [img('witness-device', true), img('witness-plan', true)] },
  { id: 'piko', name: 'Piko', what: 'Wearable companion', how: 'Hardware + CV + LLM',
    moments: [img('piko-parts')] },
  { id: 'banana-exoskeleton', name: 'Banana Exoskeleton', what: 'Fits any banana', how: 'Computational design',
    moments: [img('banana-shell')] },
  { id: 'bread-reader', name: 'Bread Reader', what: 'Toaster that reads poems', how: 'Hardware hack',
    moments: [img('bread-cover')] },
  // The two websites close the grid, each opening the site itself; their videos scroll the site top to bottom
  // (scripts/record-site.mjs). Wide, they leave the last row one short. On phones, two columns under a full-width
  // lead need an even count, so only lino.one stays, moved up beside Lino.
  { id: 'lino-site', phone: 'first', name: 'lino.one', what: 'The Lino website', how: 'UI design + code',
    moments: [{ src: '/media/works/lino-app/site.mp4', kind: 'video' }] },
  { id: 'boulesis-site', phone: 'hide', name: 'boulesis.one', what: 'The Boulesis website', how: 'UI design + code',
    moments: [{ src: '/media/works/boulesis-site/site.mp4', kind: 'video' }] },
];

export const concepts: Cell[] = [
  { id: 'playground-os', name: 'Playground OS', what: 'An OS for creation', how: 'LLM + XR',
    moments: [vid('pgos-creation'), vid('pgos-spatial')] },
  { id: 'rethinking-rabbit-r1', name: 'Rethinking Rabbit R1', what: 'Agent-first device', how: 'UX',
    moments: [vid('r1-agent')] },
  { id: 'lifeo', name: 'Lifeo', what: 'Learn language from your life', how: 'iOS app design',
    moments: [img('lifeo-trio', true)] },
];

// A homepage work's still: its first moment (or the one mapMoment names), or that video's poster. The map's preview
// uses it, so the two never drift.
export const coverOf = (id: string) => {
  const c = [...selected, ...concepts].find(c => c.id === id);
  const m = c?.moments[c.mapMoment ?? 0];
  return m && (m.kind === 'video' ? m.src.replace(/\.mp4$/, '-poster.jpg') : m.src);
};

export const links = {
  resume: '/resume/', // the page; its PDF is printed at deploy (scripts/resume-pdf.mjs)
  playground: '/playground/', // with the slash, the page's own address
  email: 'cwu14932@gmail.com',
  medium: 'https://medium.com/@gochris',
  linkedin: 'https://www.linkedin.com/in/yixi-chris-wu-8b115b30a/',
};
