// The resume, at /resume/ (src/pages/resume.astro). Edit it here: the page and the PDF are both made from this file.
// The PDF is printed from the built page by scripts/resume-pdf.mjs when the site deploys. Keep it to one Letter page:
// after a change, run `npm run build && npm run resume-pdf` and check the PDF still has one page.
// In any line, **words** are set in bold.

export interface Entry { when: string; what: string; role?: string; href?: string; lines: string[] }
export interface Work { name: string; when: string; tag: string; line: string; href?: string }

export const person = {
  name: 'Yixi (Chris) Wu',
  title: 'Design engineer and founder of Lino',
  line: 'I design and build agents that make people better thinkers, not ones that think for them.',
  contact: [
    { label: 'cwu14932@gmail.com', href: 'mailto:cwu14932@gmail.com' },
    { label: 'c-hri-sw-u.github.io', href: 'https://c-hri-sw-u.github.io' },
    { label: 'lino.one', href: 'https://lino.one' },
    { label: 'linkedin.com/in/yixi-chris-wu', href: 'https://www.linkedin.com/in/yixi-chris-wu-8b115b30a/' },
    { label: 'medium.com/@gochris', href: 'https://medium.com/@gochris' },
  ],
};

// The one project told in full, above everything else.
export const lino = {
  name: 'Lino', role: 'Founder: product, design and engineering', when: 'Dec 2025 – now', href: 'https://lino.one',
  lede: 'One canvas that people and agents share, with shared context and memory, so the agent works inside the person’s intent. Knowledge base, infinite canvas, personal agent and projects in one portable workstation. Launched on macOS, September 2026.',
  lines: [
    '**Product.** Philosophy (Intent Engineering, augmenting human intellect), positioning, target users, competitive landscape, roadmap, and a system of concepts: Card, Sketch, Spark, Connection, Proposal.',
    '**Agent engineering.** Context and harness engineering, user and canvas memory, tool and skill design, permission modes, human-in-the-loop review.',
    '**Everything else.** Design system, infinite canvas, rich-text editor, table views, sync, subscriptions, onboarding, website, analytics, pricing. About 3,000 commits.',
  ],
};

export const research: Entry[] = [
  {
    when: 'Spring 2026', what: 'Witness', role: 'Master’s thesis, Carnegie Mellon', href: 'https://c-hri-sw-u.github.io/works/space-self-log',
    lines: ['Gave a personal agent eyes: a Swift capture app, a vision-language pipeline, a three-tier memory. After **157 hours** living with it: an agent that sees must treat what it sees as a guess, and keep a memory you can trace.'],
  },
  {
    when: '2025', what: 'WHY Research Lab & L4C, Carnegie Mellon', role: 'Research Assistant',
    lines: ['Prototypes of cybernetic feedback loops between people and intelligent systems.'],
  },
  {
    when: '2025', what: 'Interactive Structures Lab, Carnegie Mellon', role: 'Research Assistant',
    lines: ['Constraint-driven adaptive surfaces, for a human–robot interaction project.'],
  },
];

export const experience: Entry[] = [
  {
    when: 'Summer 2024', what: 'Glance (Veryloving, Inc.)', role: 'AI Product Design Intern',
    lines: ['Designed T1, AI earphones whose case has a face and docks into a desktop robot: concept, interaction, form. Presented the product to investors and partners at CES.'],
  },
];

export const work: Work[] = [
  { name: 'Piko', when: '2025', tag: 'Wearable', href: 'https://c-hri-sw-u.github.io/works/piko',
    line: 'A companion you wear: Raspberry Pi, camera vision, Gemini voice. I designed its behaviors and body.' },
  { name: 'Banana Exoskeleton', when: '2025', tag: 'Fabrication', href: 'https://c-hri-sw-u.github.io/works/banana-exoskeleton',
    line: 'A case that fits any banana: YOLO on 1,400 photos, a shape optimizer, a parametric model.' },
  { name: 'Risee', when: '2025', tag: 'macOS app', href: 'https://c-hri-sw-u.github.io/works/risee',
    line: 'LLM actions on any selected text, in a ring around the cursor. Swift, then Electron. Used daily.' },
  { name: 'Rabbit R1, Playground OS', when: '2024', tag: 'Concepts', href: 'https://c-hri-sw-u.github.io/works/rethinking-rabbit-r1',
    line: 'An AI device built around conversation, not ask-and-answer; a computer that works like a playground.' },
];

export const education: Entry[] = [
  {
    when: '2024 – 2026', what: 'Carnegie Mellon University', role: 'Master of Advanced Architectural Design (STEM)',
    lines: ['Generative AI, Machine Learning, ML in Production, Sensing Systems, HCI'],
  },
  { when: '2023', what: 'Soochow University', role: 'Bachelor of Architecture', lines: [] },
];

export const skills: { t: string; d: string }[] = [
  { t: 'AI', d: 'Agent harnesses, context and memory, tool design, LLM and VLM APIs, computer vision' },
  { t: 'Engineering', d: 'TypeScript, React, Electron, Swift, Python, Supabase' },
  { t: 'Design', d: 'Interaction, design systems, motion, prototyping, Figma' },
  { t: 'Physical', d: 'Raspberry Pi, Arduino, sensors, Rhino + Grasshopper, 3D printing' },
];

export const honors: string[] = [
  'Frank-Ratchye Further Fund, 2026',
  'Best Future Designer, Solar Decathlon China',
  'Global Game Jam 2025',
];
