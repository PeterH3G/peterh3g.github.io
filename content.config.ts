import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: "**",
        exclude: ["docs/**"],
        prefix: '/'
      },
      schema: z.object({
        icon: z.string()
      })
    }),

    docs: defineCollection({
      type: 'page',
      source: {
        include: "docs/*.md",
        prefix: '/'
      },
      schema: z.object({
        icon: z.string(),
        published: z.boolean(),
        image: z.string(),
      })
    })
  }
})
