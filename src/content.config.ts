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
    legacyUrl: z.string(),
  }),
});

export const collections = { works };
