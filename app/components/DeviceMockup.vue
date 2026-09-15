<script setup lang="ts">
interface Props {
  siteName: string
  tagline?: string
  theme?: 'pink' | 'dark'
}
const props = withDefaults(defineProps<Props>(), {
  tagline: '',
  theme: 'pink',
})

const palette = computed(() => {
  return props.theme === 'dark'
    ? {
        bg: 'from-navy-800 to-navy-900',
        accent: 'bg-navy-400/40',
        text: 'text-white',
        sub: 'text-navy-100/70',
        chip: 'bg-white/10',
      }
    : {
        bg: 'from-rose-100 to-rose-50',
        accent: 'bg-rose-300/50',
        text: 'text-navy-700',
        sub: 'text-navy-500/70',
        chip: 'bg-white/70',
      }
})
</script>

<template>
  <div class="relative">
    <!-- Laptop -->
    <div class="w-full overflow-hidden rounded-t-lg border-[6px] border-navy-700 bg-navy-700 shadow-soft">
      <div class="flex items-center gap-1.5 bg-navy-700 px-3 py-1.5">
        <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>
      <div class="aspect-[16/10] w-full bg-gradient-to-br p-4" :class="palette.bg">
        <div class="flex h-full flex-col justify-between">
          <div>
            <p class="font-hand text-2xl leading-none" :class="palette.text">{{ siteName }}</p>
            <p v-if="tagline" class="mt-1 text-[10px]" :class="palette.sub">{{ tagline }}</p>
            <span class="mt-3 inline-block rounded-full px-3 py-1 text-[9px] font-semibold" :class="[palette.chip, palette.text]">Shop Now</span>
          </div>
          <div class="flex gap-1.5">
            <div v-for="i in 4" :key="i" class="h-6 flex-1 rounded" :class="palette.accent" />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto h-2 w-1/3 rounded-b-xl bg-navy-800" />
    <div class="mx-auto -mt-0.5 h-1.5 w-2/5 rounded-b-lg bg-navy-100" />

    <!-- Phone -->
    <div class="absolute -bottom-4 -right-2 w-[30%] overflow-hidden rounded-2xl border-4 border-navy-700 bg-navy-700 shadow-soft sm:-right-4">
      <div class="aspect-[9/19] w-full bg-gradient-to-br p-2" :class="palette.bg">
        <p class="font-hand text-[11px] leading-tight" :class="palette.text">{{ siteName }}</p>
        <p v-if="tagline" class="mt-0.5 text-[6px]" :class="palette.sub">{{ tagline }}</p>
        <span class="mt-1.5 inline-block rounded-full px-2 py-0.5 text-[6px] font-semibold" :class="[palette.chip, palette.text]">Shop</span>
        <div class="mt-2 grid grid-cols-2 gap-1">
          <div v-for="i in 4" :key="i" class="h-3 rounded-sm" :class="palette.accent" />
        </div>
      </div>
    </div>
  </div>
</template>
