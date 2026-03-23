<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/8 py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <img src="/ace-logo.svg" alt="Acefluento" class="h-10 w-auto" />
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-white/70 hover:text-white transition-colors font-medium"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#contact" class="btn-primary text-sm px-6 py-3"> Book Free Call </a>
      </div>

      <!-- Mobile menu toggle -->
      <button
        class="md:hidden p-2 text-white/70 hover:text-white"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-brand-dark-2/98 backdrop-blur-xl border-t border-white/8 px-6 py-6 flex flex-col gap-4"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-white/70 hover:text-white font-medium py-2 transition-colors"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </a>
      <a href="#contact" class="btn-primary text-sm mt-2" @click="mobileOpen = false"> Book Free Strategy Call </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheNavbar',
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      navLinks: [
        { label: 'Services', href: '#services' },
        { label: 'Results', href: '#results' },
        { label: 'Process', href: '#process' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Pricing', href: '#pricing' },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20
    },
  },
})
</script>
