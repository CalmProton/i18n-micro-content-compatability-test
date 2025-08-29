---
title: "Welcome to our Blog"
description: "This is our main blog page with content management"
seo:
  title: "Blog - English"
  description: "Welcome to our blog with multilingual content"
---

# Welcome to our Blog

This is the **English** version of our blog page. This content is managed by Nuxt Content and is fully integrated with nuxt-i18n-micro for internationalization.

## Features Demonstrated

- ✅ **Nuxt Content** integration with markdown files
- ✅ **nuxt-i18n-micro** for internationalization  
- ✅ **Localized content** in separate folders
- ✅ **Dynamic routing** with catch-all pages
- ✅ **Language switching** functionality
- ✅ **SEO meta tags** support

## Content Structure

The content is organized by locale:
- `/content/en/` - English content
- `/content/fr/` - French content  
- `/content/ru/` - Russian content

## Technical Implementation

This page demonstrates how `nuxt-i18n-micro` and `@nuxt/content` work together:

1. Content files are organized by locale folders
2. The `[...slug].vue` page handles dynamic routing
3. Content queries use locale-specific collections
4. Fallback logic ensures content availability

---

*Current locale: English (en)*