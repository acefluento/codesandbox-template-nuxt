<template>
  <section class="py-12 border-y border-white/[0.07] bg-brand-navy-2">
    <div class="max-w-7xl mx-auto px-6">
      <p
        class="text-center text-white/35 text-sm mb-6 uppercase tracking-widest font-medium"
      >
        Built for businesses that need results, not random marketing
      </p>
      <div
        v-stagger="60"
        class="flex flex-wrap items-center justify-center gap-3"
      >
        <span
          v-for="category in categories"
          :key="category"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white/55 text-sm font-medium hover:border-white/20 hover:text-white/75 transition-all duration-200"
        >
          {{ category }}
        </span>
      </div>
      <p class="text-center text-white/30 text-sm mt-6">
        Industries where trust, credibility, and clear follow-through are the
        difference between a lead and a client.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TrustStrip',
  data() {
    return {
      categories: [
        'Assisted Living & Care Brands',
        'Churches & Organizations',
        'Local Service Businesses',
        'Select Digital Brands',
      ],
    }
  },
})
</script>
