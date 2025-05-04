import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      // Load every file inside the `content` directory
      source: '**/*.md',
      
      // Specify the type of content in this collection
      type: 'page',

      // Define custom schema for collection
      schema: z.object({
        tags: z.array(z.string()),
        icon: z.string()
      })
    })
  }
})
