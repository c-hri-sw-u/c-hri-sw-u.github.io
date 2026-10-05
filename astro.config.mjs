import { defineConfig } from 'astro/config';

// Static site for GitHub Pages (user site, so no base path). Everything in public/ — the legacy
// pages, the original map (map.html) and Assets/ — is copied to the output unchanged.
export default defineConfig({
  site: 'https://c-hri-sw-u.github.io',
});
