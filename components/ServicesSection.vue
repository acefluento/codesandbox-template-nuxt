<template>
  <section id="services" class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">What we do</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Flexible services.<br /><span class="gradient-text">One strategic goal.</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          Every engagement is built around growth, not busywork.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="service in services"
          :key="service.title"
          class="card-dark group relative flex flex-col"
        >
          <!-- Icon -->
          <div class="w-11 h-11 rounded-xl bg-brand-blue/12 border border-brand-blue/20 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="service.iconPath" />
            </svg>
          </div>

          <h3 class="font-bold text-lg mb-2">{{ service.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">{{ service.description }}</p>

          <!-- Best for tag -->
          <span class="inline-flex items-center gap-1.5 text-xs text-white/30 font-medium">
            <svg class="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
            Best for: {{ service.bestFor }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Web Design & Landing Pages',
          description: 'Modern websites built to communicate clearly and convert intentionally.',
          bestFor: 'Local businesses, organizations',
          iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
        },
        {
          title: 'Paid Social Campaigns',
          description: 'Meta ad strategy and campaign execution designed to generate qualified attention.',
          bestFor: 'Lead generation, e-commerce',
          iconPath: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
        },
        {
          title: 'Brand Messaging & Positioning',
          description: 'Sharper messaging so the right people understand why you matter faster.',
          bestFor: 'New brands, repositioning',
          iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
        },
        {
          title: 'Lead Flow & Automation',
          description: 'Follow-up systems that improve speed, consistency, and conversion.',
          bestFor: 'Service businesses, agencies',
          iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
        {
          title: 'Content Direction',
          description: 'Content systems and creative guidance that support growth across channels.',
          bestFor: 'Digital brands, creators',
          iconPath: 'M4 6h16M4 12h8m-8 6h16',
        },
        {
          title: 'Ongoing Optimization',
          description: 'Continuous testing, iteration, and refinement based on what actually performs.',
          bestFor: 'Existing campaigns',
          iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        },
      ],
    }
  },
})
</script>
