<script setup lang="ts">
const points = [
  'Clean & scalable code',
  'Modern technologies',
  'Problem solving mindset',
]
</script>

<template>
  <section id="about" class="py-20 lg:py-28">
    <div class="container-app grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="section-eyebrow">About Me</span>
        <h2 class="mt-3 text-3xl font-extrabold leading-tight text-navy-700 sm:text-4xl">
          Turning ideas into powerful solutions.
        </h2>
        <p class="mt-5 max-w-md text-navy-500">
          I'm a full-stack developer with 3+ years of experience building modern web applications and e-commerce
          platforms. I love turning ideas into real, functional products that make an impact.
        </p>

        <ul class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li v-for="point in points" :key="point" class="flex items-center gap-2 text-sm font-medium text-navy-600">
            <span class="flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 text-accent">
              <Icon name="lucide:check" class="h-3 w-3" />
            </span>
            {{ point }}
          </li>
        </ul>

        <p class="font-hand mt-8 text-2xl text-navy-700">
          Dalal <span class="text-accent">♡</span>
        </p>
      </div>

      <div class="relative">
        <div class="absolute -left-4 -top-4 h-10 w-10 rounded-t-lg border-b-4 border-l-4 border-navy-700 sm:-left-6 sm:-top-6 sm:h-14 sm:w-14" />
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
          alt="Developer workspace with laptop, coffee and a plant"
          class="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
        />
      </div>
    </div>
  </section>
</template>
