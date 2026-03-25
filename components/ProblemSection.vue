<template>
  <section class="py-24 relative overflow-hidden border-t border-white/5">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">The Problem</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Every Empty Room Is<br />
          <span class="gradient-text">Money Walking Out the Door</span>
        </h2>
        <p class="text-white/55 text-lg max-w-2xl mx-auto">
          Most facilities aren't struggling because of care quality.
          They're invisible online — and families are choosing competitors they can find.
        </p>
      </div>

      <!-- Pain points -->
      <div class="grid md:grid-cols-3 gap-6 mb-14">
        <div
          v-for="pain in painPoints"
          :key="pain.title"
          class="bg-brand-dark-3 border border-white/8 rounded-2xl p-8 hover:border-brand-blue/30 transition-all duration-300 group"
        >
          <div class="text-4xl mb-5">{{ pain.icon }}</div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{{ pain.title }}</h3>
          <p class="text-white/55 text-sm leading-relaxed">{{ pain.body }}</p>
        </div>
      </div>

      <!-- Callout stat -->
      <div class="max-w-3xl mx-auto bg-brand-blue/8 border border-brand-blue/20 rounded-2xl p-8 text-center">
        <p class="text-white/80 text-lg leading-relaxed">
          The average assisted living facility loses
          <span class="text-white font-bold">$3,000–$8,000/month per vacant room.</span>
          At 85% occupancy with 50 beds, that's
          <span class="text-brand-blue font-bold">$22,500+ left on the table every month</span>
          — before operational costs.
        </p>
      </div>

      <!-- CTA link -->
      <div class="text-center mt-10">
        <a href="/occupancy-growth-system" class="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-semibold group">
          See how we fix it
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProblemSection',
  data() {
    return {
      painPoints: [
        {
          icon: '🔍',
          title: 'Invisible to Searching Families',
          body: 'When a family searches "assisted living near me," your facility isn\'t showing up. Your competitors are — and they\'re getting the tour requests.',
        },
        {
          icon: '📞',
          title: 'Referrals Are No Longer Enough',
          body: 'Word-of-mouth and hospital referrals used to fill beds. Today\'s families research online first — always. If you\'re not found, you\'re not chosen.',
        },
        {
          icon: '📉',
          title: 'Every Empty Day Compounds',
          body: 'Vacancy isn\'t just lost revenue. It\'s higher per-bed costs, staff imbalance, and mounting pressure — month after month after month.',
        },
      ],
    }
  },
})
</script>
