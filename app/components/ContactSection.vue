<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const touched = reactive({
  name: false,
  email: false,
  message: false,
})

const submitted = ref(false)
const loading = ref(false)

function validate() {
  errors.name = !form.name.trim() ? 'Name is required' : ''

  errors.email = !form.email.trim()
    ? 'Email is required'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? 'Enter a valid email'
      : ''

  errors.message = !form.message.trim()
    ? 'Message is required'
    : form.message.trim().length < 10
      ? 'Message is too short'
      : ''

  return !errors.name && !errors.email && !errors.message
}

function touch(field: keyof typeof touched) {
  touched[field] = true
  validate()
}

async function handleSubmit() {
  touched.name = true
  touched.email = true
  touched.message = true

  if (!validate()) return

  loading.value = true

  try {
    const res = await fetch('https://formspree.io/f/mvznqene', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })

    if (res.ok) {
      submitted.value = true
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      Object.assign(touched, { name: false, email: false, message: false })
      setTimeout(() => (submitted.value = false), 4000)
    }
  } finally {
    loading.value = false
  }
}

const contactInfo = [
  { icon: 'lucide:mail', label: 'dalal.web@gmail.com', href: 'mailto:dalal.web@gmail.com' },
  { icon: 'lucide:map-pin', label: 'Amman,Jordan', href: null },
  {icon: 'lucide:phone', label: ' +962 780874844', href: '#' },
  { icon: 'lucide:linkedin', label: 'linkedin.com/in/dalal-bassam', href: 'https://www.linkedin.com/in/dalal-bassam-287048157/' },
]
</script>

<template>
  <section id="contact" class="bg-navy-700 py-10 text-white lg:py-10">
    <div class="container-app grid gap-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="inline-flex text-xs font-semibold tracking-wide text-accent-light/80">Get In Touch</span>
    

        <ul class="mt-8 flex flex-col gap-4">
          <li v-for="info in contactInfo" :key="info.label" class="flex items-center gap-3 text-sm text-navy-100/90">
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Icon :name="info.icon" class="h-4 w-4" />
            </span>
            <a v-if="info.href" :href="info.href" target="_blank" rel="noopener" class="hover:text-white">{{ info.label }}</a>
            <span v-else>{{ info.label }}</span>
          </li>
        </ul>

        <p class="font-hand mt-10 hidden text-2xl text-navy-100/80 lg:block">
          Let's build something great
        </p>
      </div>

      <form class="rounded-2xl bg-white p-6 text-navy-700 shadow-soft sm:p-8" @submit.prevent="handleSubmit">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block text-sm">
            <span class="font-medium"> Name <span class="text-accent">*</span></span>
            <input
              v-model="form.name"
              @blur="touch('name')"
              type="text"
              placeholder="Your name"
              :class="[
                'mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2',
                errors.name
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-navy-100 focus:border-accent focus:ring-accent/20',
              ]"
            />
            <p v-if="errors.name" class="mt-1 text-xs font-medium text-red-500">{{ errors.name }}</p>
          </label>
          <label class="block text-sm">
            <span class="font-medium">Email <span class="text-accent">*</span></span>
            <input
              v-model="form.email"
              @blur="touch('email')"
              type="email"
              placeholder="your@email.com"
              :class="[
                'mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2',
                errors.email
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-navy-100 focus:border-accent focus:ring-accent/20',
              ]"
            />
            <p v-if="errors.email" class="mt-1 text-xs font-medium text-red-500">{{ errors.email }}</p>
          </label>
        </div>

        <label class="mt-5 block text-sm">
          <span class="font-medium">Message <span class="text-accent">*</span></span>
          <textarea
            v-model="form.message"
            @blur="touch('message')"
            rows="4"
            placeholder="Your message..."
            :class="[
              'mt-1.5 w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2',
              errors.message
                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20'
                : 'border-navy-100 focus:border-accent focus:ring-accent/20',
            ]"
          />
          <p v-if="errors.message" class="mt-1 text-xs font-medium text-red-500">{{ errors.message }}</p>
        </label>

        <button
          type="submit"
          :disabled="loading"
          class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          <span v-if="loading">Sending...</span>
          <span v-else>Send Message</span>
          <Icon name="lucide:send" class="h-4 w-4" />
        </button>

        <p v-if="submitted" class="mt-3 text-sm font-medium text-emerald-600">
          Thanks! Your message has been sent.
        </p>
      </form>
    </div>
  </section>
</template>