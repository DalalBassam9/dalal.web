<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];
  liveDemo?: string;
  theme: "pink" | "dark" | "blue";
}

const tagIcon: Record<string, string> = {
  Laravel: "simple-icons:laravel",
  MySQL: "simple-icons:mysql",
  "Vue JS 3": "simple-icons:vuedotjs",
  "Nuxt JS 4": "simple-icons:nuxtdotjs",
  TypeScript: "simple-icons:typescript",
  "Tailwind CSS": "simple-icons:tailwindcss",
  "Filament Admin Panel": "lucide:layers",
  Filament: "lucide:layers",
  Livewire: "simple-icons:livewire",
};
const projects: Project[] = [
  {
    title: "Pure Glow Jo E-Commerce Store",
    category: "E-Commerce Platform",
    description:
      "A skincare and haircare e-commerce platform built with Nuxt.js and Laravel, featuring product browsing, secure checkout, customer accounts, and a custom Filament admin panel.",
    tags: ["Laravel", "MySQL", "Vue JS 3", "Nuxt JS 4", "TypeScript", "Tailwind CSS", "Filament Admin Panel"],
    liveDemo: "https://www.pureglowjo.store/",
    theme: "pink",
    images: [
      "/images/projects/store2.png",
      "/images/projects/pure-home.png",
      "/images/projects/pure-login.png",
      "/images/projects/pure-register.png",
      "/images/projects/pure-product.png",
      "/images/projects/pure-cart.png",
      "/images/projects/pure-checkout.png",
      "/images/projects/pure-profile.png",
      "/images/projects/pure-password.png",
      "/images/projects/pure-adressess.png",
      "/images/projects/pure-ordres.png",
      "/images/projects/pure-thank-you.png",
    ],
  },
  {
    title: "Filament Admin Panel",
    category: "Admin Dashboard",
    description:
      "A custom admin dashboard built with Filament and Laravel, featuring product, category, city, user, order, and content management with responsive CRUD functionality.",
    tags: ["Laravel", "Filament", "Livewire", "Tailwind CSS", "MySQL"],
    theme: "blue",
    images: [
      "/images/projects/pure-admin.png",
      "/images/projects/pure-adminhome.png",
      "/images/projects/pure-category-admin.png",
      "/images/projects/pure-create-category.png",
      "/images/projects/pure-edit-category.png",
      "/images/projects/pure-city.png",
      "/images/projects/pure-products-admin.png",
      "/images/projects/pure_products_create.png",
      "/images/projects/pure-edit-product.png",
      "/images/projects/pure-admin-orders.png",
      "/images/projects/pure-view-order.png",
    ],
  },
  {
    title: "Too Cute Gifts E-Commerce Store",
    category: "E-Commerce Website",
    description:
      "A gift-focused e-commerce platform built with Nuxt.js and Laravel, featuring product browsing, secure checkout, customer accounts, and a custom Filament admin panel.",
    tags: ["Laravel", "MySQL", "Vue JS 3", "Nuxt JS 4", "TypeScript", "Tailwind CSS", "Filament Admin Panel"],
    liveDemo: "https://toocutegifts.shop/",
    theme: "pink",
    images: [
      "/images/projects/store-1.png",
      "/images/projects/home.png",
      "/images/projects/login.png",
      "/images/projects/header.png",
      "/images/projects/product.png",
      "/images/projects/cart.png",
      "/images/projects/checkout.png",
      "/images/projects/profile.png",
      "/images/projects/password.png",
      "/images/projects/addresses.png",
      "/images/projects/orders.png",
    ],
  },
];

// ==================== Gallery state ====================
const activeProject = ref<Project | null>(null);
const activeIndex = ref(0);

function openGallery(project: Project) {
  if (!project.images?.length) return;
  activeProject.value = project;
  activeIndex.value = 0;
}
function closeGallery() {
  activeProject.value = null;
}
function nextImage() {
  if (!activeProject.value) return;
  activeIndex.value = (activeIndex.value + 1) % activeProject.value.images.length;
}
function prevImage() {
  if (!activeProject.value) return;
  const len = activeProject.value.images.length;
  activeIndex.value = (activeIndex.value - 1 + len) % len;
}
function handleKeydown(e: KeyboardEvent) {
  if (!activeProject.value) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
}
onMounted(() => window.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));
</script>
<template>
  <section id="projects" class="py-10 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-10">
        <h2 class="section-dot font-syne font-bold text-2xl text-gray-900 flex items-center">
          Projects
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-2xl overflow-hidden group shadow-sm border border-gray-200 hover:shadow-md hover:border-accent-green/40 hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Project Thumbnail -->
          <div
            class="h-64 flex items-center justify-center relative overflow-hidden cursor-pointer bg-gray-50"
            @click="openGallery(project)"
          >
            <NuxtImg
              v-if="project.images && project.images.length"
              :src="project.images[0]"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <div
              v-if="project.images && project.images.length"
              class="absolute top-2 left-2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white transition-transform duration-300 group-hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 4.65a7.5 7.5 0 0011.999 12M10.5 7.5v6m3-3h-6" />
              </svg>
            </div>

            <!-- عدد الصور -->
            <div
              v-if="project.images && project.images.length > 1"
              class="absolute bottom-2 right-2 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-[11px] text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ project.images.length }}
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-5 space-y-3">
            <h3
              class="font-syne font-bold text-lg"
              :class="{
                'text-gray-900': project.theme === 'dark',
              }"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs border border-gray-200"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div
              class="flex items-center pt-2 border-t border-gray-200"
              :class="project.liveDemo ? 'justify-between' : 'justify-end'"
            >
              
            <a    v-if="project.liveDemo"
                :href="project.liveDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-sm hover:underline"
                :class="{
                  'text-blue-600': project.theme === 'blue',
                }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>

              <button
                v-if="project.images && project.images.length"
                @click="openGallery(project)"
                class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== Lightbox / Gallery Modal ==================== -->
    <Teleport to="body">
      <div
        v-if="activeProject"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        @click.self="closeGallery"
      >
        <button
          @click="closeGallery"
          class="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="relative w-full max-w-4xl">
          <div class="text-center mb-4">
            <h3 class="font-syne font-bold text-xl text-white">
              {{ activeProject.title }}
            </h3>
            <p class="text-gray-400 text-xs mt-1">
              {{ activeIndex + 1 }} / {{ activeProject.images.length }}
            </p>
          </div>

          <div class="relative flex items-center justify-center">
            <button
              v-if="activeProject.images.length > 1"
              @click.stop="prevImage"
              class="absolute left-0 -translate-x-2 md:-translate-x-14 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <NuxtImg
              :src="activeProject.images[activeIndex]"
              :alt="`${activeProject.title} screenshot ${activeIndex + 1}`"
              class="max-h-[70vh] w-auto rounded-xl border border-white/10 object-contain"
            />

            <button
              v-if="activeProject.images.length > 1"
              @click.stop="nextImage"
              class="absolute right-0 translate-x-2 md:translate-x-14 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Thumbnails -->
          <div
            v-if="activeProject.images.length > 1"
            class="flex justify-center gap-3 mt-5 flex-wrap"
          >
            <button
              v-for="(img, idx) in activeProject.images"
              :key="idx"
              @click.stop="activeIndex = idx"
              class="w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors"
              :class="
                idx === activeIndex
                  ? 'border-accent-green'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              "
            >
              <NuxtImg :src="img" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>