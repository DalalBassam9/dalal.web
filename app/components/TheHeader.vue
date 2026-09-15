<script setup lang="ts">
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-navy-100/60 bg-white/80 backdrop-blur">
    <div class="container-app flex h-20 items-center justify-between">
      <a href="#home" class="flex items-center gap-2 text-lg font-bold text-navy-700">
        <Icon name="lucide:code" class="h-5 w-5 text-accent" />
        Dalal Web
      </a>

      <nav class="hidden flex-1 items-center justify-center gap-9 md:flex">
        
         <a v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="relative text-sm font-medium text-navy-500 transition hover:text-navy-700"
          :class="{ 'text-navy-700 after:absolute after:-bottom-[26px] after:left-0 after:h-0.5 after:w-full after:bg-accent': link.label === 'Home' }"
        >
          {{ link.label }}
        </a>
      </nav>

      <button class="md:hidden" @click="open = !open" aria-label="Toggle menu">
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6 text-navy-700" />
      </button>
    </div>

    <transition name="fade">
      <nav v-if="open" class="border-t border-navy-100/60 bg-white px-6 py-4 md:hidden">
        
        <a  v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="block py-2 text-sm font-medium text-navy-600"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>