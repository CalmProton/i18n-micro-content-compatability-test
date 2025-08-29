---
title: "Bienvenue sur notre Blog"
description: "Ceci est notre page de blog principale avec gestion de contenu"
seo:
  title: "Blog - Français"
  description: "Bienvenue sur notre blog avec contenu multilingue"
---

# Bienvenue sur notre Blog

Ceci est la version **française** de notre page de blog. Ce contenu est géré par Nuxt Content et est entièrement intégré avec nuxt-i18n-micro pour l'internationalisation.

## Fonctionnalités Démontrées

- ✅ **Intégration Nuxt Content** avec fichiers markdown
- ✅ **nuxt-i18n-micro** pour l'internationalisation  
- ✅ **Contenu localisé** dans des dossiers séparés
- ✅ **Routage dynamique** avec pages catch-all
- ✅ **Changement de langue** fonctionnel
- ✅ **Support des balises SEO** meta

## Structure du Contenu

Le contenu est organisé par locale :
- `/content/en/` - Contenu anglais
- `/content/fr/` - Contenu français  
- `/content/ru/` - Contenu russe

## Implémentation Technique

Cette page démontre comment `nuxt-i18n-micro` et `@nuxt/content` fonctionnent ensemble :

1. Les fichiers de contenu sont organisés par dossiers de locale
2. La page `[...slug].vue` gère le routage dynamique
3. Les requêtes de contenu utilisent des collections spécifiques à la locale
4. La logique de fallback assure la disponibilité du contenu

---

*Locale actuelle : Français (fr)*