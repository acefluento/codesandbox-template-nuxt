<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-brand-navy/95 backdrop-blur-xl border-b border-white/8 py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group" aria-label="Acefluento">
        <svg class="h-8 w-auto flex-shrink-0" viewBox="0 0 18 20" fill="none" aria-hidden="true">
          <path fill="#D7263D" d="M9 0.5C4 3 0 6 0 9.5C0 13 2.5 15.5 6 15C4.8 16 5 18 4 19.5H14C13 18 13.2 16 12 15C15.5 15.5 18 13 18 9.5C18 6 14 3 9 0.5Z"/>
        </svg>
        <span class="text-lg font-extrabold tracking-tight leading-none">ace<span class="text-brand-red">fluento</span></span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-white/65 hover:text-white transition-colors font-medium"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#contact" class="btn-primary text-sm px-6 py-3">
          Book a Strategy Call
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 text-white/70 hover:text-white transition-colors"
        @click="mobileOpen = true"
        aria-label="Open menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Backdrop -->
    <transition name="overlay">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-black/50 z-40 md:hidden"
        @click="mobileOpen = false"
      />
    </transition>

    <!-- Slide-in drawer -->
    <transition name="drawer">
      <div
        v-if="mobileOpen"
        class="fixed inset-y-0 right-0 w-72 bg-brand-navy-2 border-l border-white/[0.08] z-50 md:hidden flex flex-col shadow-2xl"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
          <a href="/" class="flex items-center gap-2" @click="mobileOpen = false">
            <svg class="h-7 w-auto" viewBox="0 0 18 20" fill="none">
              <path fill="#D7263D" d="M9 0.5C4 3 0 6 0 9.5C0 13 2.5 15.5 6 15C4.8 16 5 18 4 19.5H14C13 18 13.2 16 12 15C15.5 15.5 18 13 18 9.5C18 6 14 3 9 0.5Z"/>
            </svg>
            <span class="text-base font-bold tracking-tight">ace<span class="text-brand-red">fluento</span></span>
          </a>
          <button
            class="p-2 text-white/50 hover:text-white transition-colors"
            @click="mobileOpen = false"
            aria-label="Close menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Links -->
        <div class="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.05] border-l-2 border-transparent hover:border-brand-red transition-all font-medium text-sm"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA -->
        <div class="px-5 py-5 border-t border-white/[0.08]">
          <a href="#contact" class="btn-primary text-sm w-full text-center block" @click="mobileOpen = false">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </transition>
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
        { label: 'Services', href: '/#services' },
        { label: 'Process', href: '/#process' },
        { label: 'Work', href: '/#work' },
        { label: 'FAQs', href: '/#faqs' },
        { label: 'ALF Reputation Engine', href: '/alf-reputation-engine' },
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

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-enter,
.overlay-leave-to {
  opacity: 0;
}
</style>
