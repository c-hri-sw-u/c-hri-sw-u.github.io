---
openerMedia: /media/works/banana-exoskeleton/every.mp4
openerAlt: "Bananas of every shape and ripeness, one after another"
opener:
  - "Every banana is different."
scenes:
  - line: "Bananas bruise easily, so people carry them in cases."
    note: "Mine kept going soft at the bottom of my backpack."
    year: "2025"
  - caption: "“I found a banana that fits perfectly in my banana case!” A post on r/oddlysatisfying."
    line: "“The case sets unrealistic standards for bananas.”"
    note: "A reply under it, with 8,200 upvotes"
    media: /media/works/banana-exoskeleton/reddit.webp
    alt: "A banana lying in a yellow plastic banana case that happens to fit it"
    year: "2025"
  - line: "Can one case fit any banana?"
    tone: ink
    note: "A two-person class project for Computational Methods for Interactive Systems at Carnegie Mellon, spring 2025"
    year: "2025"
  - lead: "So I designed the"
    line: "Banana Exoskeleton"
    big: true
    wide: true
    note: "A 3D-printed case that bends to fit the banana inside"
    media: /media/works/banana-exoskeleton/shell.webp
    alt: "An orange 3D-printed case of ribs and spines wrapped around a ripe banana"
    year: "2025"
  - line: "It opens along its belly, then closes around the banana."
    media: /media/works/banana-exoskeleton/fit.mp4
    alt: "Two hands open a white printed case, put a banana in and close it"
    wide: true
    year: "2025"
  - lead: "Its trick is a compliant mechanism,"
    line: "a part that moves by bending, with no hinges."
    caption: "The Ring by BØDEX, one of the compliant mechanisms I printed and tested."
    media: /media/works/banana-exoskeleton/ring.webp
    alt: "A printed ring of identical cells, round, then squeezed into a new shape"
    year: "2025"
  - line: "There was no dataset of banana shapes, so I built one."
    drawing: bananas
    caption: "107 of them, levelled and scaled to the same width."
    note: "1,400 bananas from photo libraries, cut out with YOLO and edge detection, then traced"
    year: "2025"
  - line: "I wrote an optimizer that bends a ring until it fits them."
    drawing: fit
    note: "It starts as a circle of points, and each step moves them to lower the energy, until the ring hugs the bananas of one shape."
    year: "2025"
  - line: "Then I turned the outline into a 3D case, fully parametric."
    caption: "The ring, its optimized outline, and the case."
    note: "Built in Grasshopper. Two rows of ribs grow from a spine along its back; the spine on its belly slides, so the banana goes in and the case bends with it."
    media: /media/works/banana-exoskeleton/to-3d.webp
    alt: "Three steps: the compliant ring, the ring bent to a banana outline, and the 3D case"
    year: "2025"
  - line: "Three cases cover the three most common banana shapes."
    tone: ink
    note: "K-Means clustering found six shapes in the data. The three most representative each got their own case."
    media: /media/works/banana-exoskeleton/cases.webp
    alt: "Three white printed cases, each with a different curve"
    cutout: true
    year: "2025"
  - line: "All bananas are beautiful."
    year: "2025"
colophon:
  - { k: "Role", v: "Ideation, data collection, computer vision, shape optimization, parametric 3D modeling, 3D printing" }
  - { k: "Team", v: "Xinyi Luo" }
  - { k: "Course", v: "Computational Methods for Interactive Systems, Carnegie Mellon University, with Alexandra Ion" }
  - { k: "Tools", v: "Python, OpenCV, YOLO, K-Means, Rhino, Grasshopper, PLA printing" }
  - { k: "Year", v: "Spring 2025" }
next: bread-reader
---
