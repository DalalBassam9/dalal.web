// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Dalal Web | Full-Stack Developer',
      meta: [
        { name: 'description', content: 'Dalal - Full-Stack Developer specializing in Laravel, Vue.js and Nuxt.js. Building modern web applications and e-commerce platforms.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;600;700&display=swap' }
      ]
    }
  }
})