# i18n Micro Content Compatibility Test

This project demonstrates the integration between **nuxt-i18n-micro** and **@nuxt/content** packages in a Nuxt 3 application deployed with NuxtHub.

## 🚀 Features

- ✅ **nuxt-i18n-micro** - Lightweight internationalization
- ✅ **@nuxt/content** - Git-based headless CMS
- ✅ **Multi-language content** in separate directories
- ✅ **Dynamic routing** with catch-all pages
- ✅ **Language switching** functionality
- ✅ **SEO-friendly** with proper meta tags
- ✅ **NuxtHub ready** for deployment

## 📁 Project Structure

```
content/
├── en/                 # English content
│   ├── index.md
│   └── blog/
│       ├── index.md
│       └── getting-started.md
├── fr/                 # French content
│   ├── index.md
│   └── blog/
│       ├── index.md
│       └── getting-started.md
└── ru/                 # Russian content
    ├── index.md
    └── blog/
        ├── index.md
        └── getting-started.md

i18n/
└── locales/
    ├── en.json         # English translations
    ├── fr.json         # French translations
    └── ru.json         # Russian translations

app/
├── app.vue             # Root layout
├── layouts/
│   └── blog.vue        # Blog layout
└── pages/
    ├── index.vue       # Home page with i18n
    └── [...slug].vue   # Catch-all for content
```

## 🛠️ Key Configuration

### Content Config (`content.config.ts`)
- Defines collections for each locale (`content_en`, `content_fr`, `content_ru`)
- Uses Zod schema for type safety
- Organizes content by language directories

### Nuxt Config (`nuxt.config.ts`)
- Configures i18n with strategy `prefix_and_default`
- Sets up content preview and experimental features
- Defines supported locales with metadata

### Dynamic Routing (`[...slug].vue`)
- Handles all content routes dynamically
- Implements locale-specific content queries
- Provides fallback to default locale (English)

## 🔧 Setup

Make sure to install the dependencies with [pnpm](https://pnpm.io/installation#using-corepack):

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## 🌐 Language Support

The project supports three locales:
- **English (en)** - Default locale
- **French (fr)** - Accessible via `/fr/` prefix
- **Russian (ru)** - Accessible via `/ru/` prefix

## 📝 Content Management

Content is organized in locale-specific directories under `/content/`:
- Each locale has its own folder (`en/`, `fr/`, `ru/`)
- Markdown files support frontmatter with SEO meta
- Content is automatically typed and validated

## 🔄 Language Switching

Language switching is implemented in both layouts:
- Fixed language switcher in top-right corner
- Preserves current route when switching languages
- Fallback logic ensures content availability

## Production

Build the application for production:

```bash
pnpm build
```

## Deploy

Deploy the application on the Edge with [NuxtHub](https://hub.nuxt.com) on your Cloudflare account:

```bash
npx nuxthub deploy
```

## 🧪 Testing the Integration

This project serves as a test case for potential compatibility issues between:
- nuxt-i18n-micro locale detection and routing
- @nuxt/content collection queries and file organization
- Dynamic content loading with language switching
- SEO meta tag handling across languages

## 🐛 Known Issues

- Content locale switching may require page reload (see TODO in `[...slug].vue`)
- Language prefix routing needs testing with complex nested routes

## 📦 Dependencies

- **@nuxt/content**: ^3.6.3
- **nuxt-i18n-micro**: ^1.94.0
- **@nuxthub/core**: ^0.9.0
- **nuxt**: ^3.17.5

