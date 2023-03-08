import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.date().transform((str) => new Date(str)),
      author: z.enum(["Jane Doe", "John Doe", "Razak Mo"]),
      title: z.string(),
      category: z.enum(["food", "wisdom"]),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z
            .object({
              src: z.string(),
              alt: z.string(),
            })
            .optional(),
          title: z.string(),
          description: z
            .string()
            .max(
              160,
              "For best SEO results, please keep the description under 160 characters."
            ),
        })
        .strict(),
    }),
  }),
};
