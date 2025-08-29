<template>
  <div class="blog-layout">
    <!-- Language Switcher -->
    <div class="language-switcher">
      <h3>{{ $t('language') }}:</h3>
      <div class="locale-buttons">
        <button 
          v-for="loc in locales" 
          :key="loc.code"
          :class="{ active: locale === loc.code }"
          @click="$switchLocale(loc.code)"
        >
          {{ loc.nativeName }}
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="blog-nav">
      <div class="nav-container">
        <NuxtLink :to="localePath('/')" class="nav-brand">
          {{ $t('welcome') }}
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink :to="localePath('/')" class="nav-link">
            {{ $t('navigation.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/blog')" class="nav-link">
            {{ $t('navigation.blog') }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="blog-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { $t, $getLocale, $getLocales, $switchLocale, $localePath } = useNuxtApp()
const route = useRoute()
const locale = computed(() => $getLocale(route))
const locales = $getLocales()

// Helper function for local path generation
const localePath = (path: string) => $localePath(path, locale.value)
</script>

<style scoped>
.blog-layout {
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}

.language-switcher h3 {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #666;
}

.locale-buttons {
  display: flex;
  gap: 8px;
}

.locale-buttons button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.locale-buttons button:hover {
  background: #f5f5f5;
}

.locale-buttons button.active {
  background: #007acc;
  color: white;
  border-color: #007acc;
}

.blog-nav {
  background: white;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 90;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 24px;
  font-weight: bold;
  color: #007acc;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: #f5f5f5;
  color: #007acc;
}

.nav-link.router-link-active {
  color: #007acc;
  background: #f0f7ff;
}

.blog-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
