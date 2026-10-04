# Yixi (Chris) Wu · personal site

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`
(Settings → Pages → Source must be **GitHub Actions**).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

- `src/pages/index.astro`: the homepage (selected works grid, Concepts, and the map view the cells' glyphs fly into).
- `src/data/home.ts`: which works are on the homepage and the moments each cell cycles through.
- `src/content/works/*.md`: one file per work (icon, map position, dates). Generated once from the legacy `works.js` by `npm run extract-works`.
- `scripts/make-home-media.sh`: rebuilds the small homepage media in `public/media/home` from `public/Assets` (needs ffmpeg).
- `public/`: copied to the site as is. It holds the original map (`map.html`), the legacy work pages (`template.html?work=…`), Playground, Contact and all `Assets/`.

# Icon System Design Rules for Portfolio Website

## Basic Identification
- **Identifier**: Letter + Number combination
  - Letter: Represents period (A=Undergraduate, B=Gap period, C=Graduate)
  - Number: Represents chronological order (e.g., first project in period B is B1)

## Visual Encoding Rules

### 1. Fill Style (Completion Status)
- **Black fill with white text**: Finished project
- **White fill with solid black outline**: Prototype
- **White fill with dashed black outline**: Unfinished project

### 2. Shape Distortion (Seriousness)
- **Regular shape**: More serious projects
- **Skewed shape**: Less serious/weird projects

### 3. Basic Shape (Project Type)
- **Square**: Physical space projects
- **Rounded diamond**: Virtual space/games
- **Circle**: Pure software/UI
- **Hexagon**: Combined hardware and software
  - Rounded hexagon: Emphasis on UI (more "soft")
  - Sharp hexagon: Emphasis on hardware (more "hard")
- **Octagon**: Complex multidisciplinary projects (combining code, physical elements, interaction, UI, etc.)

## Coordinate System Positioning

### 1. Vertical Axis: Digital → Physical
- **Upper area (Digital)**: Pure digital/virtual interaction
- **Lower area (Physical)**: Projects involving physical/bodily interaction (architecture, spaces, hardware devices)

### 2. Horizontal Axis: Reality → Vision
- **Left side (Reality)**: Projects based on current reality, solving practical problems
- **Right side (Vision)**: Projects exploring future possibilities, concepts, and visions

## Application Examples
- **A1 (Aurora House)**: Architectural design, positioned in lower left (Reality+Physical), square icon
- **C4 (Rethinking Rabbit R1)**: AI interaction concept, positioned in upper right (Vision+Digital), likely a circle or rounded shape
- **B2 (ReCury)**: Health technology product, positioned in middle-lower area (combining Reality and Vision, leaning Physical), possibly a hexagon

This comprehensive icon system visually communicates multiple dimensions of each project through shape, fill, position, and transformation, including period, completion status, seriousness, type, and positioning on both Reality-Vision and Digital-Physical axes.

