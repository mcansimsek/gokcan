import { z, defineCollection } from 'astro:content';

// Define product collection schema
const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['basalt', 'granite', 'travertine']),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
    thumbnail: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    meta: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'products': productCollection,
};