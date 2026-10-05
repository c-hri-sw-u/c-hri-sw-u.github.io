// The resume, at /resume/ (src/pages/resume.astro). Edit it here: the page and the PDF are both made from this file.
// The PDF is printed from the built page by scripts/resume-pdf.mjs when the site deploys. Keep it to one Letter page:
// after a change, run `npm run build && npm run resume-pdf` and check the PDF still has one page.
// In any line, **words** are set in bold and [words](url) is a link.

export interface Entry { when: string; what: string; role?: string; href?: string; lines: string[] }
export interface Work { name: string; when: string; tag: string; line: string; href?: string }

export const person = {
  name: 'Yixi (Chris) Wu',
  title: 'Design engineer · Founder of Lino',
  line: '',
  contact: [
    { label: 'cwu14932@gmail.com', href: 'mailto:cwu14932@gmail.com' },
    { label: 'c-hri-sw-u.github.io', href: 'https://c-hri-sw-u.github.io' },
    { label: 'lino.one', href: 'https://lino.one' },
    { label: 'linkedin.com/in/yixi-chris-wu', href: 'https://www.linkedin.com/in/yixi-chris-wu-8b115b30a/' },
    { label: 'medium.com/@gochris', href: 'https://medium.com/@gochris' },
  ],
};

// The one project told in full, above everything else. The lede says what the product is; the lines say what I did.
export const lino = {
  name: 'Lino', role: 'Solo founder', when: 'Dec 2025 – now', href: 'https://lino.one',
  lede: 'An AI workspace where documents, databases and sketches live on one canvas, and an agent works alongside you on it. Launched on macOS in September 2026; Windows in beta.',
  lines: [
    'Designed and built the whole product alone: interaction model, design system, desktop app and agent. About **3,000 commits**.',
    'Designed how the agent works: context and memory drawn from the canvas, tools and skills, permission modes, and edits proposed for the person to approve.',
    'Ran the launch and the business: positioning, pricing and AI credits, onboarding, website and docs, analytics.',
    'Wrote four essays on [Intent Engineering](https://medium.com/@gochris), the idea behind the product.',
  ],
};

export const research: Entry[] = [
  {
    when: 'Spring 2026', what: 'Witness', role: 'Master’s thesis, Carnegie Mellon', href: 'https://c-hri-sw-u.github.io/works/space-self-log',
    lines: ['Built a system that lets a personal agent see the physical world: a Swift capture app, a vision-language pipeline and a three-tier memory for OpenClaw. Lived with it for **157 hours** and documented how it fails: misreadings stated as fact, and beliefs that can’t be traced to what it saw.'],
  },
  {
    when: '2025', what: 'WHY Research Lab & L4C, Carnegie Mellon', role: 'Research Assistant',
    lines: ['Prototyped cybernetic feedback loops in interactive systems.'],
  },
  {
    when: '2025', what: 'Interactive Structures Lab, Carnegie Mellon', role: 'Research Assistant',
    lines: ['Contributed to research on constraint-driven adaptive surfaces, for a human–robot interaction project.'],
  },
];

export const experience: Entry[] = [
  {
    when: 'Summer 2024', what: 'Glance (Veryloving, Inc.)', role: 'AI Product Design Intern',
    lines: ['Designed T1, AI earphones whose case has a face and docks into a desktop robot: concept, interaction and form. Presented the product to investors and partners at CES.'],
  },
];

export const work: Work[] = [
  { name: 'Piko', when: '2025', tag: 'Team of 4', href: 'https://c-hri-sw-u.github.io/works/piko',
    line: 'A wearable AI companion with camera vision and Gemini voice. I did the concept, hardware prototyping and interaction design.' },
  { name: 'Banana Exoskeleton', when: '2025', tag: 'Team of 2', href: 'https://c-hri-sw-u.github.io/works/banana-exoskeleton',
    line: 'A 3D-printed case that fits any banana, from 1,400 bananas traced with YOLO, a shape optimizer and a parametric model.' },
  { name: 'Risee', when: '2025', tag: 'Solo', href: 'https://c-hri-sw-u.github.io/works/risee',
    line: 'LLM actions on any selected text, in a ring around the cursor. Built in Swift, then Electron. I use it every day.' },
  { name: 'Rabbit R1, Playground OS', when: '2024', tag: 'Concepts', href: 'https://c-hri-sw-u.github.io/works/rethinking-rabbit-r1',
    line: 'Two interaction concepts: an AI device built around conversation instead of ask-and-answer, and a computer that works like a playground.' },
];

export const education: Entry[] = [
  {
    when: '2024 – 2026', what: 'Carnegie Mellon University', role: 'Master of Advanced Architectural Design (STEM)',
    lines: ['Generative AI, Machine Learning, ML in Production, Sensing Systems, Interaction Design'],
  },
  { when: '2023', what: 'Soochow University', role: 'Bachelor of Architecture', lines: [] },
];

export const skills: { t: string; d: string }[] = [
  { t: 'AI', d: 'Agents (context, memory, tools, permissions), LLM and VLM APIs, computer vision' },
  { t: 'Engineering', d: 'TypeScript, React, Electron, Swift, Python, Supabase' },
  { t: 'Design', d: 'Interaction design, design systems, prototyping, Figma' },
  { t: 'Physical', d: 'Raspberry Pi, Arduino, sensors, Rhino + Grasshopper, 3D printing' },
];

export const honors: string[] = [
  'Frank-Ratchye Further Fund, 2026',
  'Best Future Designer, Solar Decathlon China 2021',
  'Global Game Jam 2025',
];
