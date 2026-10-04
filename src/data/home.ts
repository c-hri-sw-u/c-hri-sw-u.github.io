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
  moments: Moment[];
}

const img = (name: string, flat = false): Moment => ({ src: `/media/home/${name}.webp`, kind: 'image', flat });
const vid = (name: string, flat = false): Moment => ({ src: `/media/home/${name}.mp4`, kind: 'video', flat });

export const selected: Cell[] = [
  { id: 'lino-app', lead: true, name: 'Lino', what: 'AI canvas for visual thinking', how: 'Startup · design + code',
    moments: [img('lino-canvas-dark'), img('lino-canvas-light'), vid('lino-2024')] },
  { id: 'space-self-log', name: 'Thesis', what: 'Egocentric vision for personal AI', how: 'Swift + agent memory',
    moments: [img('thesis-floorplan', true), img('thesis-flow', true)] },
  { id: 'piko', name: 'Piko', what: 'Wearable companion', how: 'Hardware + CV + LLM',
    moments: [vid('piko-shoulder'), vid('piko-gestures'), img('piko-parts')] },
  { id: 'banana-exoskeleton', name: 'Banana Exoskeleton', what: 'Fits any banana', how: 'Computational design',
    moments: [vid('banana-scan'), vid('banana-optimize', true), img('banana-shell', true)] },
  { id: 'bread-reader', name: 'breadReader', what: 'Toaster that reads poems', how: 'Hardware hack',
    moments: [img('bread-exhibit'), img('bread-hack')] },
];

export const concepts: Cell[] = [
  { id: 'playground-os', name: 'Playground OS', what: 'An OS for creation', how: 'LLM + XR',
    moments: [vid('pgos-creation'), vid('pgos-spatial')] },
  { id: 'rethinking-rabbit-r1', name: 'Rabbit R1', what: 'Agent-first device', how: 'UX',
    moments: [vid('r1-agent'), img('r1-memory')] },
];

export const links = {
  resume: '/Assets/cv.pdf',
  playground: '/playground.html',
  email: 'cwu14932@gmail.com',
  fullMap: '/map.html',
};
