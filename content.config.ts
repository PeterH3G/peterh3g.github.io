import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      // Load every file inside the `content` directory
      source: '**',
      
      // Specify the type of content in this collection
      type: 'page',

      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        icon: z.string(),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
