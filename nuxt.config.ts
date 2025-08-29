// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'nuxt-i18n-micro'
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋'
    }
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    database: true
  },

  i18n: {
    defaultLocale: 'en',
    fallbackLocale: 'en',
    translationDir: 'i18n/locales',
    meta: true,
    strategy: 'prefix_and_default',
    types: true,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', nativeName: 'English', dir: 'ltr' },
      { code: 'fr', iso: 'fr-FR', name: 'French', nativeName: 'Français', dir: 'ltr' },
      { code: 'ru', iso: 'ru-RU', name: 'Russian', nativeName: 'Русский', dir: 'ltr' }
    ]
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    experimental: { nativeSqlite: true }
  },

  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})