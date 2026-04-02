<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl translate-x-1/4"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Who we work with</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Different industries.<br /><span class="gradient-text">Same need for clarity.</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          The playbook changes by niche, but the growth principles stay the same.
        </p>
      </div>

      <!-- Audience blocks -->
      <div class="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div
          v-for="audience in audiences"
          :key="audience.title"
          class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
            <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="audience.iconPath" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3">{{ audience.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ audience.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WhoWeHelpSection',
  data() {
    return {
      audiences: [
        {
          title: 'Local Service Businesses',
          description:
            'Painters, contractors, home service brands, and local operators who need more consistent lead flow.',
          iconPath: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
        },
        {
          title: 'Healthcare & Care-Driven Brands',
          description:
            'Assisted living, care businesses, and trust-sensitive industries that need a calm, credible digital presence.',
          iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        },
        {
          title: 'Churches & Organizations',
          description:
            'Groups that need a stronger online presence, clearer communication, and better digital engagement.',
          iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        {
          title: 'Software, AI & Digital Brands',
          description:
            'Modern products that need sharper positioning, cleaner funnels, and better conversion paths.',
          iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
        },
      ],
    }
  },
})
</script>
