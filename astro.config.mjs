import { defineConfig } from 'astro/config';

// Static site for GitHub Pages (user site, so no base path). Everything in public/ (Assets/, icon/, media/) is copied
// to the output unchanged. The original site's pages live in legacy/, an archive that is not served.
export default defineConfig({
  site: 'https://c-hri-sw-u.github.io',
});
