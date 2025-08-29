<script setup lang="ts">
const { $t, $getLocale, $getLocales, $switchLocale, $localePath } = useNuxtApp()
const route = useRoute()
const locale = computed(() => $getLocale(route))
const locales = $getLocales()

// Helper function for local path generation
const localePath = (path: string) => $localePath(path, locale.value)

const runtimeConfig = useRuntimeConfig()
const colors = ['#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185']
const color = useState('color', () => colors[Math.floor(Math.random() * colors.length)])
</script>

<template>
  <div class="container">
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

    <!-- Main Content -->
    <div class="centered">
      <h1 :style="{ color }">
        {{ $t('welcome') }}
      </h1>
      <p>{{ $t('home.description') }}</p>
      
      <div class="navigation">
        <NuxtLink :to="localePath('/')" class="nav-link">
          {{ $t('navigation.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="nav-link">
          {{ $t('navigation.blog') }}
        </NuxtLink>
      </div>

      <div class="runtime-config">
        <p>Runtime Config: {{ runtimeConfig.public.helloText }}</p>
        <NuxtLink to="/" external class="refresh-link">
          refresh
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
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

.centered {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  max-width: 600px;
  padding: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.nav-link {
  padding: 12px 24px;
  background: #007acc;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;
}

.nav-link:hover {
  background: #005a9e;
}

.runtime-config {
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.runtime-config p {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.refresh-link {
  color: #888;
  text-decoration: none;
  font-size: 14px;
}

.refresh-link:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  h1 {
    font-size: 48px;
  }
  
  p {
    font-size: 20px;
  }
}
</style>
