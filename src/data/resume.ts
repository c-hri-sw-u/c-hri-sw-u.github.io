// The resume, at /resume/ (src/pages/resume.astro). Edit it here: the page and the PDF are both made from this file.
// The PDF is printed from the built page by scripts/resume-pdf.mjs when the site deploys. Keep it to one Letter page:
// after a change, run `npm run build && npm run resume-pdf` and check the PDF still has one page.
// In any line, [words](url) is a link. Keep each line to one fact.

// href links the org (or, without a site, the role); page links the role to a page about it.
export interface Entry { org: string; icon?: string; href?: string; site?: string; page?: string; when: string; role: string; lines: string[] }
export interface Project { name: string; icon?: string; href?: string; meta: string; line: string }

export const person = {
  name: 'Yixi (Chris) Wu',
  title: 'Design engineer · Founder of Lino',
  contact: [
    { label: 'c-hri-sw-u.github.io', href: 'https://c-hri-sw-u.github.io' },
    { label: 'cwu14932@gmail.com', href: 'mailto:cwu14932@gmail.com' },
    { label: '+1 878 600 1596', href: 'tel:+18786001596' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yixi-chris-wu-8b115b30a/' },
  ],
  about: 'Trained as an architect, now designing and building AI products, in software and hardware.',
};

export const work: Entry[] = [
  {
    org: 'Lino', icon: '/media/works/lino-app/app-icon.webp', href: 'https://lino.one', site: 'lino.one', page: 'https://c-hri-sw-u.github.io/works/lino-app', when: 'Dec 2025 – Present', role: 'Solo Founder',
    lines: [
      'I design, build and run Lino, a canvas that people and an AI agent share. Its core idea: [Intent Engineering](https://medium.com/@gochris/intent-engineering-42af3438bdc5).',
      'Instead of a chat box, the agent works from the canvas and web of artifacts the person builds, so the canvas becomes their shared context and memory of crystallized, high-value information.',
      'Did all of it alone: product strategy, interaction design, agent engineering, the app from front end to back end, the website and all the materials around it.',
      '[Launched on macOS](https://lino.one) in September 2026.',
    ],
  },
  {
    org: 'Glance (Veryloving, Inc.)', href: 'https://c-hri-sw-u.github.io/works/glance-t1', when: 'Jun – Aug 2024', role: 'AI Product Design Intern',
    lines: [
      'Prototyped several concepts for AI earphones whose case has a screen: one docks into a desktop robot, another’s screen slides open like a lid.',
    ],
  },
];

export const research: Entry[] = [
  {
    org: 'Carnegie Mellon University', href: 'https://c-hri-sw-u.github.io/works/space-self-log', when: 'Spring 2026', role: 'Master’s Thesis: Witness',
    lines: [
      'Built a system that lets a personal agent see the physical world: a Swift capture app, a vision-language pipeline and a three-tier memory.',
      'Lived with it for 157 hours and found that seeing was the easy part. The hard part is deciding which moments actually matter.',
    ],
  },
  {
    org: 'Carnegie Mellon University', when: '2025', role: 'Research Assistant',
    lines: [
      'Interactive Structures Lab: designed and 3D-printed cells for a mechanical wall, and prototyped their hardware and software.',
      'WHY Lab & L4C: rebuilt and extended open-source hardware projects, and designed and built [the lab’s website](https://lab4cybernetics.vercel.app).',
    ],
  },
];

export const projects: Project[] = [
  { name: 'Risee', icon: '/media/works/risee/app-icon-ios.webp', href: 'https://c-hri-sw-u.github.io/works/risee', meta: '2025 · solo',
    line: 'LLM actions orbit any text you select, as a ring you turn with the arrow keys.' },
  { name: 'Piko', href: 'https://c-hri-sw-u.github.io/works/piko', meta: '2025 · team of 4',
    line: 'A wearable AI companion that catches you doomscrolling. I designed its behaviors, and modeled and printed its skeleton, up to 10 versions per part.' },
  { name: 'Rethinking Rabbit R1', href: 'https://c-hri-sw-u.github.io/works/rethinking-rabbit-r1', meta: '2024 · solo concept',
    line: 'Redesigned the AI device around conversation instead of ask-and-answer: you see what it draws on and choose how much it remembers.' },
];

export const education = [
  { school: 'Carnegie Mellon University', degree: 'Master of Advanced Architectural Design (STEM)', when: '2024 – 2026',
    note: 'Generative AI, Machine Learning, ML in Production, Sensing Systems, Interaction Design' },
  { school: 'Soochow University', degree: 'Bachelor of Architecture', when: '2023' },
];

export const skills: { t: string; d: string }[] = [
  { t: 'AI', d: 'Human–AI interaction, agent design (context, memory, tools), LLM and VLM APIs' },
  { t: 'ML', d: 'With sensors (gesture recognition); in production (recommendation system)' },
  { t: 'Engineering', d: 'TypeScript, React, Electron, Swift, Python, Supabase' },
  { t: 'Design', d: 'Interaction design, design systems, prototyping, Figma' },
  { t: 'Physical', d: 'Raspberry Pi, Arduino, sensors, Rhino + Grasshopper, 3D printing' },
];

export const honors: { t: string; when: string }[] = [
  { t: 'Frank-Ratchye Further Fund', when: '’26' },
  { t: 'Judge’s Choice, Red Robot Hackathon, CMU', when: '’24' },
  { t: 'Best Future Designer, Solar Decathlon China', when: '’21' },
];

export const languages = 'English, Mandarin (native)';
