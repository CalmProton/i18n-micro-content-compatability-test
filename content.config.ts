import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const locales = [
  'en', 'fr', 'ru'
]

// Define a common schema for all content collections using Zod
const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional()
})

const collections = locales.reduce((acc, lang) => {
  acc[`content_${lang}`] = defineCollection({
    type: 'page',
    source: {
      include: `${lang}/**`,
      prefix: ''
    },
    schema: commonSchema
  })
  return acc
}, {} as Record<string, ReturnType<typeof defineCollection>>)

export default defineContentConfig({
  collections
})
