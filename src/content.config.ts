import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    mood: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { log };
