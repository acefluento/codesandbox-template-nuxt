<template>
  <div
    class="py-12 border-y border-white/[0.06]"
    :class="dark ? 'bg-brand-navy' : 'bg-brand-navy-2'"
  >
    <div
      class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      <p class="text-white/65 text-base font-medium text-center sm:text-left">
        {{ message }}
      </p>
      <a
        href="#contact"
        class="btn-primary text-sm whitespace-nowrap gap-2 group flex-shrink-0"
      >
        Book Free Strategy Call
        <svg
          class="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InlineCta',
  props: {
    message: {
      type: String,
      default:
        'Ready to build a system that actually moves your business forward?',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
