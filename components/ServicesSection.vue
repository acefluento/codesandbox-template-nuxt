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
          Targeted deployments.<br /><span class="gradient-text">One strategic goal.</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          Choose the leverage point your business needs most right now.
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

          <!-- Problem label -->
          <p class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-2">{{ service.problem }}</p>

          <h3 class="font-bold text-lg mb-2">{{ service.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed flex-1">{{ service.description }}</p>
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
          problem: 'For businesses that need a clearer first impression',
          title: 'Website & Landing Page Builds',
          description:
            'For businesses that need a stronger digital presence and better conversion flow — not just a site that looks presentable.',
          iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
        },
        {
          problem: 'For brands that sound too generic',
          title: 'Messaging & Positioning',
          description:
            'For brands that need sharper, trust-building language so the right people understand why you matter — and why to call.',
          iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
        },
        {
          problem: 'For businesses that need more qualified attention',
          title: 'Lead Generation Campaigns',
          description:
            'For businesses that need more qualified attention coming in consistently — not random clicks or cheap impressions.',
          iconPath: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
        },
        {
          problem: 'For businesses losing leads before they close',
          title: 'Follow-Up & Automation',
          description:
            'For businesses losing leads because nobody responds fast enough or consistently enough — and it is costing real revenue.',
          iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
        {
          problem: 'For brands that want a partner, not a vendor',
          title: 'Ongoing Optimization',
          description:
            'For brands that want a strategic partner refining what already works — testing, improving, and keeping everything sharp.',
          iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        },
        {
          problem: 'For brands building content with a purpose',
          title: 'Content Direction',
          description:
            'For brands that need a content system aligned to growth — not random posts that generate activity but no traction.',
          iconPath: 'M4 6h16M4 12h8m-8 6h16',
        },
      ],
    }
  },
})
</script>
