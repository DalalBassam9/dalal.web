<script setup lang="ts">
const technologies = [
  { name: 'Laravel', role: 'Backend', icon: 'simple-icons:laravel' },
  { name: 'PHP', role: 'Backend', icon: 'simple-icons:php' },
  { name: 'MySQL', role: 'Database', icon: 'simple-icons:mysql' },
  { name: 'Vue.js', role: 'Frontend', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt.js', role: 'Frontend', icon: 'simple-icons:nuxtdotjs' },
  { name: 'Tailwind CSS', role: 'Styling', icon: 'simple-icons:tailwindcss' },
  { name: 'Git', role: 'Version Control', icon: 'simple-icons:git' },
]
</script>

<template>
  <section class="py-2">
    <div class="container-app">
      <div class="flex flex-col items-center gap-2 rounded-2xl bg-white/60 px-6 py-6 sm:flex-row sm:justify-between">
        <p class="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-navy-400">
          Technologies I Work With
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="flex items-center gap-2.5"
          >
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
              <Icon :name="tech.icon" class="h-4 w-4 text-navy-700" />
            </span>
            <p class="text-sm font-medium text-navy-700">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>