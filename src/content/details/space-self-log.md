---
openerStyle: log
opener:
  - "My agent wrote this about me."
  - "Apr 24, 2026 · 14:59"
  - "activity: testing water filter reassembly"
  - "location: home kitchen under-sink filtration area"
  - "objects: silicone filter hose; clear pitcher; yellow cloth; cleaning supplies"
  - "social: alone"
  - "“…likely forming part of a recurring quality-control loop in home maintenance routines.”"
openerMedia: /media/works/space-self-log/frame.webp
openerNote: "It saw what I saw. Then it decided what it meant."
scenes:
  - line: "It knew my inbox, my calendar and my files.\nIt had never seen my kitchen."
    note: "In early 2026, personal agents like OpenClaw took off. They ran on your own computer and remembered you for months, yet all they knew of you was what you typed. Nothing I typed said that my coffee goes cold once I start working."
    year: "2026"
  - line: "Its memory was plain text.\nAnything that could write a note could teach it."
    file:
      name: "~/.openclaw/workspace · read before it acts"
      lines:
        - "SOUL.md      # who it is: tone, values"
        - "USER.md      # who you are: preferences, habits"
        - "MEMORY.md    # facts it keeps for good"
        - "memory/      # a log for each day"
    note: "OpenClaw kept what it knew about you in markdown files like these. By then, vision-language models could turn a photo into a few sentences. The two fit together without rebuilding the agent."
    year: "2026"
  - lead: "So I gave it eyes, and called it"
    line: "Witness"
    big: true
    tone: ink
    note: "A system that lets a personal agent see the physical world, and a study of living with it. My master’s thesis at Carnegie Mellon, spring 2026."
    year: "2026"
  - line: "An iPhone on my chest, all day."
    caption: "An off-the-shelf iPhone 13 on a neck mount, running a capture app I wrote in Swift."
    note: "I wore it on my head first. It saw what I looked at, but I never forgot it was there. On my chest it saw a little less, and I stopped noticing it."
    media:
      - /media/works/space-self-log/device-side.webp
      - /media/works/space-self-log/device-front.webp
    alt: "The iPhone on a neck mount, from the side and from the front with the capture app open"
    pair: true
    cutout: true
    year: "2026"
  - drawing: capture
    line: "It looks again when something changes."
    note: "Motion and sound tell the camera when to pay attention. At a still desk it takes a frame every twelve seconds; when I stand up or someone speaks, every two, then it eases back. Of each scene it keeps only the sharp, different frames."
    year: "2026"
  - drawing: tiers
    line: "Thousands of frames become one page about me."
    note: "A vision model writes a note for each scene. Through the day the notes are folded into insights, and every so often the insights are summarized, on their own, into a profile of me."
    year: "2026"
  - line: "157 hours of my life, as it saw them."
    caption: "Part of the photo wall: the frames it kept, in time order, March 22 to April 30, 2026. A few moments are pulled out."
    media: /media/works/space-self-log/wall.webp
    alt: "Rows of tiny frames in time order; two clusters from the evening of April 10 are enlarged"
    cutout: true
    wide: true
    year: "2026"
  - line: "It learned where my life happens."
    caption: "Time in each room of my apartment. Home office: 1,515 log entries. Kitchen: 613. Dots trace how I moved between them."
    note: "Mostly the desk, then the kitchen; the dining table and the living room sat nearly empty. Trained as an architect, I had never had this map: a home as it is lived in, not as it was drawn."
    media: /media/works/space-self-log/plan.webp
    alt: "A floor plan of the apartment with a heat glow over the home office and the kitchen, and dotted paths between rooms"
    cutout: true
    wide: true
    year: "2026"
  - line: "It noticed things I’d never put into words."
    list:
      - { t: "My drink follows my work", d: "Espresso when I switch to design, tea while I read logs" }
      - { t: "My coffee goes cold", d: "I set a cup by the keyboard, then forget it until I stop" }
      - { t: "A late-night loop", d: "Desk, kitchen, a snack, a drink, back to the desk" }
      - { t: "I eat lunch late", d: "So it began reminding me to eat" }
    year: "2026"
  - line: "One afternoon I was gone for hours.\nWhen I came back, it asked if I’d been climbing."
    tone: ink
    note: "I hadn’t said a word. It put together the gap in its record, the rhythm of my weeks and the climbing questions I had once asked it. It was right."
    year: "2026"
  - line: "Another day I was reorganizing my fridge.\nIt messaged to tell me I was cleaning the coils."
    file:
      name: "physical-pattern.md · the profile it summarized of me"
      lines:
        - "## Sensory & Sustenance Patterns"
        - "- Beverage rotation synced to workload: Espresso (design/app pivot) → soda/orange cream (deep focus) → tea (log review) → latte (image browsing) — observed 40 of 44 late sessions."
        - "## Active Craft & Engineering Rituals"
        - "! - Precision maintenance escalation: Refrigerator coil cleaning → mixing valve replacement → water-heater seasoning — observed 6 of 7 recent sessions."
    note: "Summarized into the profile again and again, the mistake became a habit of mine, with a count. Vision models are built to find meaning. In an ordinary scene, they find one anyway."
    year: "2026"
  - line: "An agent that sees needs a memory you can check."
    list:
      - { t: "Trace every belief", d: "Each line of the profile should lead back to the frames behind it, so a wrong one can be found and undone" }
      - { t: "Correct it by talking", d: "No one reviews 157 hours of frames. Feedback has to come in conversation" }
      - { t: "Remember what it said", d: "When it spoke first, it repeated itself. It needs to know what it already sent, and what went unanswered" }
      - { t: "A switch you can see", d: "Off should be obvious. I took it off for video calls, since the people around me never agreed to be seen" }
    year: "2026"
  - caption: "At the end, I asked it to draw my life as a manga."
    media: /media/works/space-self-log/manga.webp
    alt: "Three manga pages: late nights at a desk of many screens, the kitchen, plants and a 3D printer"
    line: "Seeing was the easy part."
    note: "It got the shape of my days right, the late nights, the many screens, desk to kitchen and back. What it comes to believe about me is the part to design."
    tone: ink
    wide: true
colophon:
  - { k: "Role", v: "Research, system design and engineering, solo" }
  - { k: "Thesis", v: "Master of Advanced Architectural Design, Carnegie Mellon University" }
  - { k: "Year", v: "Spring 2026" }
  - { k: "Method", v: "Research through design: a week of calibration, then two weeks of autoethnography" }
  - { k: "Built with", v: "Swift (iOS capture app), Python (server and monitors), OpenClaw, vision-language models via OpenRouter" }
  - { k: "Video", v: "Watch it on YouTube", href: "https://www.youtube.com/watch?v=NEK2SAGsXAc" }
  - { k: "Status", v: "Research prototype" }
next: piko
---
