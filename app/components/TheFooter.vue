<script setup lang="ts">
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/dalal-bassam-287048157/' },
  { icon: 'lucide:mail', href: 'mailto:hello.dalalweb@gmail.com' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-navy-100/70 bg-white py-8">
    <div class="container-app flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <a href="#home" class="flex items-center gap-2 text-base font-bold text-navy-700">
        <Icon name="lucide:code" class="h-4 w-4 text-accent" />
        Dalal Web
      </a>

      <div class="flex items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.icon"
          :href="social.href"
          target="_blank"
          rel="noopener"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-600 transition hover:bg-accent hover:text-white"
        >
          <Icon :name="social.icon" class="h-4 w-4" />
        </a>
      </div>

      <nav class="hidden items-center gap-6 text-sm text-navy-500 lg:flex">
        <a v-for="link in links" :key="link.label" :href="link.href" class="hover:text-navy-700">{{ link.label }}</a>
      </nav>

      <p class="text-xs text-navy-400">© {{ year }} Dalal Web. All rights reserved.</p>
    </div>
  </footer>
</template>
