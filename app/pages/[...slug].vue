<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const { $getLocale, $getLocales } = useNuxtApp()
const locale = computed(() => $getLocale(route))
const locales = $getLocales()

// Process the slug correctly for arrays
const slug = computed(() => {
  const params = route.params.slug

  // Handle array of slug segments (from [...slug])
  if (Array.isArray(params)) {
    return withLeadingSlash(params.join('/'))
  }

  // Handle single string
  return withLeadingSlash(String(params))
})

// Get locale properties from the locales array
const localeProperties = computed(() => {
  return locales.find(l => l.code === locale.value)
})

const { data: page } = await useAsyncData('page-' + slug.value, async () => {
  const collection = ('content_' + locale.value) as keyof Collections
  let content = await queryCollection(collection).path(slug.value).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    content = await queryCollection('content_en').path(slug.value).first()
  }

  return content
}, {
  // TODO: There is currently an issue with locale switching. User has to reload page for nuxt/content stuff to switch locale
  watch: [locale]
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>
