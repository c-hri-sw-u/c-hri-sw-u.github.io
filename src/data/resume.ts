// The resume, at /resume/ (src/pages/resume.astro). Edit it here: the page and the PDF are both made from this file.
// The PDF is printed from the built page by scripts/resume-pdf.mjs when the site deploys. Keep it to one Letter page:
// after a change, run `npm run build && npm run resume-pdf` and check the PDF still has one page.

export interface Entry { when: string; what: string; role?: string; href?: string; lines: string[] }
export interface Work { name: string; when: string; tag: string; line: string; href?: string }

export const person = {
  name: 'Yixi (Chris) Wu',
  title: 'Design engineer. Founder of Lino.',
  line: 'Building AI products across software, hardware and space.',
  contact: [
    { label: 'cwu14932@gmail.com', href: 'mailto:cwu14932@gmail.com' },
    { label: 'c-hri-sw-u.github.io', href: 'https://c-hri-sw-u.github.io' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yixi-chris-wu-8b115b30a/' },
    { label: 'lino.one', href: 'https://lino.one' },
  ],
};

export const experience: Entry[] = [
  {
    when: 'Dec 2025 – Present', what: 'Lino', role: 'Founder', href: 'https://lino.one',
    lines: [
      'Designed and built Lino, an AI canvas where people and agents think together on one shared canvas, end to end: product, design and engineering, about 3,000 commits.',
      'Launched on macOS in September 2026; Windows in beta, iOS and web on the way.',
      'Built the agent layer (context and harness engineering, memory, tools, permission modes, human review) and the product around it: design system, infinite canvas, sync, onboarding, analytics, pricing.',
    ],
  },
  {
    when: '2025', what: 'WHY Research Lab, Carnegie Mellon University', role: 'Research Assistant',
    lines: ['Studied how intelligent systems can heighten environmental awareness and creative expression, through hands-on prototypes.'],
  },
  {
    when: 'Jun – Aug 2024', what: 'Glance (Veryloving, Inc.)', role: 'AI Product Design Intern',
    lines: ['Proposed T1, an AI earphone concept: a case with a screen and a face that docks into a desktop robot. Interaction design and form factor studies.'],
  },
  {
    when: 'Jun – Oct 2023', what: 'Zhongcheng Keze Engineering Design Group', role: 'Design Intern',
    lines: ['Architectural design schemes with cross-functional teams, through client and contractor feedback.'],
  },
];

export const work: Work[] = [
  { name: 'Witness', when: '2026', tag: 'Master’s thesis', href: 'https://c-hri-sw-u.github.io/works/space-self-log',
    line: 'A personal agent that can see: a Swift capture app, vision-language models and a three-tier memory for OpenClaw; 157 hours of autoethnography.' },
  { name: 'Risee', when: '2025 – 26', tag: 'Desktop app', href: 'https://c-hri-sw-u.github.io/works/risee',
    line: 'LLM actions on any selected text, in an orbiting ring of capsules. Built natively in Swift, then rebuilt in Electron. Used daily.' },
  { name: 'Piko', when: '2025', tag: 'Wearable, team of 4', href: 'https://c-hri-sw-u.github.io/works/piko',
    line: 'A wearable AI companion: two Raspberry Pis, phone-camera vision, Gemini voice. I designed its behaviors and its 3D-printed skeleton.' },
  { name: 'Banana Exoskeleton', when: '2025', tag: 'Computational design', href: 'https://c-hri-sw-u.github.io/works/banana-exoskeleton',
    line: 'A case that fits any banana: a dataset from 1,400 photos (YOLO), a shape optimizer, K-means clustering and a parametric Grasshopper model, 3D-printed.' },
  { name: 'Rehears, Deploybell, RotFix', when: '2025 – 26', tag: 'Small tools', href: 'https://c-hri-sw-u.github.io/playground/',
    line: 'A line-rehearsal app adopted by a CMU drama class; an open-source deploy chime for macOS; a Chrome extension that makes you reflect.' },
];

export const education: Entry[] = [
  {
    when: '2024 – 2026', what: 'Carnegie Mellon University', role: 'Master of Advanced Architectural Design',
    lines: ['An interdisciplinary design program. Coursework in HCI, machine learning, sensing systems, computational design and AI products.'],
  },
  {
    when: '2023', what: 'Soochow University', role: 'Bachelor’s in Architecture',
    lines: [],
  },
];

export const skills: { t: string; d: string }[] = [
  { t: 'Design', d: 'Figma, interaction and motion, design systems, prototyping, user research' },
  { t: 'Engineering', d: 'TypeScript, React, Next.js, Electron, Swift, Python, Supabase, Vercel, Claude Code, Cursor' },
  { t: 'AI', d: 'Agents (context, memory, tools), LLM and VLM APIs, computer vision (YOLO, OpenCV), PyTorch' },
  { t: 'Hardware', d: 'Arduino, Raspberry Pi, sensors (EMG, IMU, GSR, PPG), 3D printing' },
  { t: '3D', d: 'Rhino + Grasshopper, Blender, Onshape, Unity, TouchDesigner' },
];

export const honors: string[] = [
  'Best Future Designer, Solar Decathlon China 2021 (judged 2022); team Excellence Award, overall score',
  'Global Game Jam 2025: Boba Bubble Trouble, a 3D platformer made in 48 hours',
];

export const languages = 'English (fluent), Mandarin (native)';
