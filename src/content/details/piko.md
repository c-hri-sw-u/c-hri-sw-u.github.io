---
opener:
  - "Wearables have hardly changed in a decade."
  - "AI pets got smarter, but they still sit on a shelf."
  - "What if a companion went where you go?"
scenes:
  - line: "Social robots have stayed where we put them since Kismet in the 1990s."
    note: "Moflin, Lovot, Paro, Ropet, Mirumi: on desks, by beds, on the floor"
    drawing: shelf
  - line: "They were missing a place in our day."
    note: "From a desk, a companion only sees a corner of your life"
  - line: "So we moved the companion onto the body."
    note: "Wearable device × AI companion × fashion item"
    media: /media/works/piko/venn.webp
    alt: "Wearable device, fashion item and social robot as three overlapping circles"
    year: "2025"
  - lead: "Meet Piko,"
    line: "a wearable AI companion"
    big: true
    tone: ink
    media: /media/works/piko/koala.webp
    alt: "Piko, a koala hand puppet"
    cutout: true
    year: "2025"
  - line: "Think of it as a live Labubu sitting on your shoulder."
    note: "A koala hand puppet outside; sensors, a camera, motors and an LLM inside"
    media: /media/works/piko/worn.webp
    alt: "Piko, a koala puppet, worn on the chest"
    year: "2025"
  - line: "It notices when you start doomscrolling."
    caption: "Recorded with our prototype."
    note: "Its camera looks down at your hands and phone, never your face or screen"
    media: /media/works/piko/caught.mp4
    alt: "Piko reacts while its wearer scrolls on a phone, and he puts the phone down"
    year: "2025"
  - line: "Then it gently interrupts."
    note: "It wiggles and makes a small sound. Tap it once to explain yourself; it listens, judges your excuse and answers."
  - line: "It has moods."
    note: "Curious tilts, happy clapping, shy greetings, angry shaking"
    media: /media/works/piko/moods.mp4
    alt: "Piko's four moves: curious, happy, shy and angry"
    year: "2025"
  - line: "In public, a double tap makes it quiet."
    note: "No moves, no sounds, just a gentle notification on your phone"
  - line: "I designed, modeled and 3D-printed its skeleton."
    caption: "Iterations of Piko's inner structure."
    note: "Again and again, until two computers, two motors and a camera fit inside a hand puppet and could still move its head and arms"
    media: /media/works/piko/inside.webp
    alt: "Generations of Piko's 3D-printed parts, and the assembled skeleton"
    wide: true
  - line: "I built its body and its behavior."
    list:
      - { t: "Ideation", d: "Wearable device × AI companion × fashion item" }
      - { t: "Hardware prototyping", d: "Two Raspberry Pi Zeros, an audio HAT, two micro servos, Camera Module 3" }
      - { t: "Interactive mechanics", d: "The 3D-printed skeleton that moves the arms and head, and the code that drives it" }
      - { t: "Interaction system and UX", d: "Tap to explain, double tap for quiet mode, a library of moods and sounds" }
    note: "Computer vision and voice were built with the team: YOLOv8 trained on 300+ phone images, MediaPipe hands, Google Speech-to-Text and Gemini 2.0 Flash"
    tone: ink
  - line: "Is your koala spying on you?"
    note: "The camera only sees your lap, and audio is recorded only when you choose to answer. It still needs an indicator light and on-device processing."
colophon:
  - { k: "Role", v: "Ideation, hardware prototyping, interactive mechanics, interaction design" }
  - { k: "Team", v: "Ashveen Banga, Leo Liu, Narayan Ashanahalli" }
  - { k: "Course", v: "Building User-Focused Sensing Systems, Carnegie Mellon University, with Mayank Goel and Yuvraj Agarwal" }
  - { k: "Year", v: "Spring 2025" }
  - { k: "Video", v: "Watch the demo", href: "https://youtu.be/TZLEKZw-F2s" }
next: banana-exoskeleton
---
