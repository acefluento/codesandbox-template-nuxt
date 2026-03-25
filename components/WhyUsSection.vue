<template>
  <section class="py-28 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/6 rounded-full blur-3xl -translate-x-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">Why It Works</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Why This Works<br />
          <span class="gradient-text">When Others Don't</span>
        </h2>
      </div>

      <!-- Pillars (2x2 grid) -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="relative bg-brand-dark-3 border border-white/8 rounded-2xl p-8 hover:border-brand-blue/30 transition-all duration-300 group"
        >
          <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="text-4xl mb-6">{{ pillar.icon }}</div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{{ pillar.title }}</h3>
          <p class="text-white/55 text-sm leading-relaxed">{{ pillar.body }}</p>
        </div>
      </div>

      <!-- Proof metric callout -->
      <div class="max-w-2xl mx-auto bg-green-400/8 border border-green-400/20 rounded-xl px-6 py-5 text-center mb-10">
        <p class="text-green-400/80 font-semibold text-lg">
          Facilities we work with typically see increased tour requests within 30 days.
        </p>
      </div>

      <!-- Bottom line -->
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-white/40 text-sm leading-relaxed">
          Most agencies will take your money and send you a report full of metrics that don't pay the bills.
          We tie every dollar to one outcome: <span class="text-white/70 font-semibold">more residents in your facility.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WhyUsSection',
  data() {
    return {
      pillars: [
        {
          icon: '🏥',
          title: 'We Specialize Only in Assisted Living',
          body: "We don't do eCommerce, SaaS, or restaurants. Every system, every strategy, every optimization is built around one goal: filling rooms in care facilities. Specialization means better results, faster.",
        },
        {
          icon: '🚪',
          title: 'We Optimize for Tours, Not Traffic',
          body: "We don't celebrate pageviews. We celebrate tour requests, scheduled visits, and move-ins. Every decision we make is filtered through one question: does this generate more qualified tours?",
        },
        {
          icon: '🔧',
          title: 'We Build Systems, Not One-Time Fixes',
          body: "A single ad campaign won't fix an occupancy problem. We build interconnected digital systems that compound over time — and keep working after the first 90 days, month after month.",
        },
        {
          icon: '📍',
          title: 'We Track Everything Tied to Occupancy',
          body: "Every report we send connects your digital activity directly to tour requests, move-ins, and census numbers. No vanity dashboards. Just the metrics that pay your bills.",
        },
      ],
    }
  },
})
</script>
