// The resume, at /resume/ (src/pages/resume.astro). Edit it here: the page and the PDF are both made from this file.
// The PDF is printed from the built page by scripts/resume-pdf.mjs when the site deploys. Keep it to one Letter page:
// after a change, run `npm run build && npm run resume-pdf` and check the PDF still has one page.
// In any line, [words](url) is a link, [words](!url) a key link (the few that matter most; let its words be its address,
// so it works on paper), and **words** is bold. Keep each line to one fact.

// href links the org (or, without a site, the role); page links the role to a page about it.
export interface Entry { org: string; icon?: string; href?: string; site?: string; page?: string; when: string; role: string; lines: string[] }
export interface Project { name: string; icon?: string; href?: string; meta: string; line: string }

export const person = {
  name: 'Yixi (Chris) Wu',
  title: 'Design engineer · Founder of Lino',
  contact: [
    { label: 'cwu14932@gmail.com', href: 'mailto:cwu14932@gmail.com' },
    { label: '+1 878 600 1596', href: 'tel:+18786001596' },
    { kind: 'Portfolio', label: 'c-hri-sw-u.github.io', href: 'https://c-hri-sw-u.github.io' },
    { kind: 'LinkedIn', label: 'linkedin.com/in/yixi-chris-wu', href: 'https://www.linkedin.com/in/yixi-chris-wu/' },
  ],
  about: 'Trained as an architect, now designing and building AI products, in software and hardware.',
};

export const work: Entry[] = [
  {
    org: 'Lino', icon: '/media/works/lino-app/app-icon.webp', href: 'https://lino.one', site: 'lino.one', page: 'https://c-hri-sw-u.github.io/works/lino-app', when: 'Dec 2025 – Present', role: 'Solo Founder',
    lines: [
      'Design, build and run Lino, a canvas that people and an AI agent share. Its core idea: [Intent Engineering](https://medium.com/@gochris/intent-engineering-42af3438bdc5).',
      'Engineered the agent: its context from the canvas, user and canvas memory, tools and skills, permission modes and human-in-the-loop review.',
      'Did the rest alone too: product strategy, interaction design, the infinite canvas and editor, sync, subscriptions and the website.',
      'Launched on macOS in September 2026 after about 3,000 commits; Windows in beta.',
    ],
  },
  {
    org: 'Glance (Veryloving, Inc.)', href: 'https://c-hri-sw-u.github.io/works/glance-t1', when: 'Jun – Aug 2024', role: 'AI Product Design Intern',
    lines: [
      'Designed concept, interaction and form for AI earphones whose case has a screen: one docks into a desktop robot, another’s screen slides open like a lid.',
      'Similar products reached the market months later.',
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
      '**Interactive Structures Lab.** Designed, 3D-printed and prototyped the cells of a mechanical wall.',
      '**WHY Lab & Laboratory for Cybernetics.** Rebuilt and extended open-source hardware; designed and built [the lab’s website](https://lab4cybernetics.vercel.app).',
    ],
  },
];

export const projects: Project[] = [
  { name: 'Risee', icon: '/media/works/risee/app-icon-ios.webp', href: 'https://c-hri-sw-u.github.io/works/risee', meta: '2025 · solo',
    line: 'LLM actions orbit any text you select, as a ring you turn with the arrow keys. Built in Swift, then rebuilt in Electron over a weekend.' },
  { name: 'Piko', href: 'https://c-hri-sw-u.github.io/works/piko', meta: '2025 · team of 4',
    line: 'A wearable AI companion that catches you doomscrolling. Designed its behaviors; modeled and printed its skeleton, up to 10 versions per part.' },
];

export const education = [
  { school: 'Carnegie Mellon University', degree: 'Master of Advanced Architectural Design (STEM)', when: '2024 – 2026',
    note: 'Generative AI, Machine Learning, ML in Production, Sensing Systems, Interaction Design' },
  { school: 'Soochow University', degree: 'Bachelor of Architecture', when: '2023' },
];

export const skills: { t: string; d: string }[] = [
  { t: 'AI', d: 'Human–AI interaction; agent design and engineering (context, memory, tools and skills)' },
  { t: 'ML', d: 'With sensors (gesture recognition); in production (recommendation system)' },
  { t: 'Engineering', d: 'TypeScript, React, Electron, Swift, Python' },
  { t: 'Design', d: 'Interaction design, design systems, software and hardware prototyping, Figma' },
  { t: 'Physical', d: 'Raspberry Pi, Arduino, sensors, Rhino + Grasshopper, 3D printing' },
];

export const honors: { t: string; when: string }[] = [
  { t: 'Frank-Ratchye Further Fund grant, CMU', when: '’26' },
  { t: 'Judge’s Choice, Red Robot Hackathon, CMU', when: '’24' },
  { t: 'Best Future Designer, Solar Decathlon China', when: '’21' },
];

export const languages = 'Mandarin (native), English (fluent)';
