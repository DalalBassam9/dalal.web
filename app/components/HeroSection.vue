<script setup lang="ts">
const stack = [
  { name: 'Laravel', icon: 'simple-icons:laravel' },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
]
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-surface pb-6 pt-4 lg:pb-10 lg:pt-6">
    <div class="container-app grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
      <div>
        <span class="inline-block rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent">
          Full-Stack Developer
        </span>

        <h1 class="mt-5 text-4xl font-extrabold leading-[1.15] text-navy-700 sm:text-5xl">
          Hi, I'm Dalal.<br />
          I build <span class="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">modern</span> web
          applications.
        </h1>

        <p class="mt-5 max-w-md text-navy-500">
          I specialize in Laravel, Vue.js and Nuxt.js, creating scalable applications, e-commerce platforms and clean
          user experiences.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          
           <a href="#projects"
            class="inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-600"
          >
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
            View Projects
          </a>

          
           <a href="#contact"
            class="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition hover:border-navy-400"
          >
            Contact Me
          </a>
        </div>
      </div>

      <!-- Code editor mockup -->
      <div class="relative mx-auto max-w-md sm:max-w-lg">
        <div class="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] rounded-full bg-accent-light/70 blur-2xl" />

        <div class="overflow-hidden rounded-2xl border border-navy-100 bg-navy-900 shadow-2xl shadow-navy-900/20">
          <!-- title bar -->
          <div class="flex items-center gap-2 border-b border-white/10 bg-navy-800 px-4 py-3">
            <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span class="h-2.5 w-2.5 rounded-full bg-green-400" />
            <p class="ml-2 text-xs text-white/50">developer.ts</p>
          </div>

          <!-- code -->
          <pre class="overflow-x-auto p-5 text-xs leading-relaxed sm:text-sm"><code><span class="text-purple-400">const</span> <span class="text-blue-300">developer</span> = {
  <span class="text-sky-300">name</span>: <span class="text-emerald-300">'Dalal'</span>,
  <span class="text-sky-300">role</span>: <span class="text-emerald-300">'Full-Stack Developer'</span>,
  <span class="text-sky-300">stack</span>: [<span class="text-emerald-300">'Laravel'</span>, <span class="text-emerald-300">'Vue'</span>, <span class="text-emerald-300">'Nuxt'</span>],

};</code></pre>
        </div>

        <!-- floating badge -->
      <!-- floating badge -->
<div class="absolute -bottom-4 -right-6 hidden items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-xl sm:flex">
  <span class="flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
  <p class="text-xs font-semibold text-navy-700">Available for work</p>
</div>
      </div>
    </div>
  </section>
</template>