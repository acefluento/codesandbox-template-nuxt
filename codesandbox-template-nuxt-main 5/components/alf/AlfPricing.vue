<template>
  <section class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[500px] h-[400px] bg-brand-red/3 rounded-full blur-3xl translate-x-1/3"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Simple pricing</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Start protecting your<br /><span class="gradient-text">reputation today</span>
        </h2>
        <p class="text-white/50 text-base leading-relaxed">
          One bad review can cost more than a year of this subscription. Managed reputation pays for itself.
        </p>
      </div>

      <div v-stagger="100" class="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
          :class="tier.featured
            ? 'bg-brand-navy border-2 border-brand-red/40 shadow-xl shadow-brand-red/10'
            : 'bg-brand-navy border border-white/[0.08] hover:border-white/20'"
        >
          <div v-if="tier.badge" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-semibold">
              {{ tier.badge }}
            </span>
          </div>

          <h3 class="text-xl font-bold mb-1">{{ tier.name }}</h3>
          <div class="flex items-end gap-1 mb-3">
            <span class="text-4xl font-extrabold text-white">{{ tier.price }}</span>
            <span class="text-white/40 text-sm mb-1.5">{{ tier.period }}</span>
          </div>
          <p class="text-white/50 text-sm mb-6 leading-relaxed">{{ tier.description }}</p>

          <ul class="space-y-3 mb-8 flex-1">
            <li
              v-for="item in tier.includes"
              :key="item"
              class="flex items-start gap-2.5 text-sm text-white/65"
            >
              <svg
                class="w-4 h-4 mt-0.5 flex-shrink-0"
                :class="tier.featured ? 'text-brand-red' : 'text-brand-blue'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <a
            href="#demo"
            class="text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm"
            :class="tier.featured
              ? 'bg-brand-red text-white hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25'
              : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'"
          >
            {{ tier.cta }}
          </a>
        </div>
      </div>

      <p class="text-center text-white/35 text-sm">
        No long-term contracts. Cancel anytime. Setup included.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { alfPricingTiers } from '~/data/alfContent'

export default Vue.extend({
  name: 'AlfPricing',
  data() {
    return {
      tiers: alfPricingTiers,
    }
  },
})
</script>
