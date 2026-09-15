<script setup lang="ts">
const timeline = [
  {
    title: 'Full Stack Developer — Freelance',
    period: 'May 2026 - July 2026',
    items: [
      'Built and launched the complete Pure Glow Jo e-commerce platform using Laravel, Nuxt.js, and a custom Filament admin dashboard.',
      'Delivered a scalable online store with streamlined content management.',
      'Live Demo: https://pureglowjo.store',
    ],
  },
  {
    title: ' Full Stack Developer — TooCuteGifts',
    period: 'April 2025 - April 2026',
    items: [
      'Built and launched a full-stack e-commerce platform using Laravel and Nuxt.js.',
      'Managed the complete development lifecycle and store operations.',
      'Ran Meta Ads campaigns to drive customer traffic and online sales.',
      'Live Demo: https://toocutegifts.com',
    ],
  },
  {
    title: 'Full Stack Developer — Remote (Full Time)',
    period: 'April 2024 - March 2025',
    items: [
      'Developed ERP systems using Laravel and Vue.js.',
      'Improved business workflows, system performance, and overall user experience.',
      'Live Demo TazejFood: https://tazejfood.com',
      'Live Demo Khutabaa: https://khutabaa.com',
    ],
  },
  {
    title: 'Full Stack Developer — Action Mobile',
    period: 'November 2022 - October 2023',
    items: [
      'Developed and maintained the Action e-commerce platform using Laravel, Vue.js, and Nuxt.js.',
      'Implemented new features and optimized application performance.',
      'Live Demo Action: https://action.jo',
    ],
  },
  {
    title: 'PHP Laravel Developer — Kadimena',
    period: 'September 2020 - September 2021',
    items: [
      'Developed educational platforms using a Laravel backend.',
      'Implemented new features and enhanced application functionality.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="bg-navy-50/60 py-10 lg:py-10">
    <div class="container-app grid gap-14 lg:grid-cols-[minmax(0,1fr)_1.5fr] lg:gap-10">
      <div>
        <span class="section-eyebrow">Experience</span>
        <h2 class="mt-3 text-3xl font-extrabold leading-tight text-navy-700">My Professional Journey</h2>
        <p class="mt-4 max-w-xs text-navy-500">
          Here's a quick look at my work experience and key achievements.
        </p>
   
      </div>

      <ol class="relative border-l border-navy-100 pl-8">
        <li v-for="(entry, i) in timeline" :key="entry.title" :class="i !== timeline.length - 1 ? 'pb-10' : ''" class="relative">
          <span class="absolute -left-[38px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-accent-light" />
          <h3 class="text-base font-bold text-navy-700">{{ entry.title }}</h3>
          <p class="mt-1 text-xs font-medium text-navy-400">{{ entry.period }}</p>
          <ul class="mt-3 space-y-1.5">
            <li v-for="item in entry.items" :key="item" class="flex gap-2 text-sm text-navy-500">
              <span class="mt-2 h-1 w-1 flex-none rounded-full bg-navy-300" />
              {{ item }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
