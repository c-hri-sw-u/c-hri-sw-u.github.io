import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per work (generated from the legacy works.js by scripts/extract-works.mjs).
const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    listTitle: z.string(),
    subtitle: z.string(),
    type: z.string(),
    date: z.string(),
    stage: z.string(),
    order: z.number(),
    seq: z.number(),
    icon: z.object({
      shape: z.enum(['circle', 'square', 'star6', 'star4rounded', 'star4rotatedRounded', 'star6rounded', 'star8rounded']),
      fill: z.enum(['black', 'white']),
      dashed: z.boolean(),
      skewed: z.boolean(),
      position: z.tuple([z.number(), z.number()]),
    }),
    preview: z.string(),
    legacyUrl: z.string().optional(), // works without a detail page yet (new works) have none
  }),
});

// Narrative detail pages, one file per work (same id as in works). One line of text per screen;
// the order of `scenes` is the order of the page. Media live in public/media/works/<id>.
const link = z.object({ href: z.string(), label: z.string() });
const details = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/details' }),
  schema: z.object({
    opener: z.array(z.string()).length(3),
    scenes: z.array(z.object({
      lead: z.string().optional(),                                   // a quieter line above a big one
    line: z.string(),
    big: z.boolean().default(false),                               // a name or statement set large
      note: z.string().optional(),
      media: z.union([z.string(), z.array(z.string())]).optional(), // several stills cross-fade
      alt: z.string().optional(),
      caption: z.string().optional(), // sits right under the media, above the line
      tone: z.enum(['paper', 'ink']).default('paper'),
      year: z.string().optional(),
      list: z.array(z.union([z.string(), z.object({ t: z.string(), d: z.string() })])).optional(), // an item, or an item with its examples // a short inventory under the line
      round: z.number().optional(), // corner radius baked into the image, as a share of its width
      link: link.optional(),
      card: z.object({ href: z.string(), image: z.string(), title: z.string(), label: z.string() }).optional(), // a site, shown as its cover
      wide: z.boolean().default(false),
    })),
    colophon: z.array(z.object({ k: z.string(), v: z.string(), href: z.string().optional() })),
    next: z.string().optional(),
  }),
});

export const collections = { works, details };
