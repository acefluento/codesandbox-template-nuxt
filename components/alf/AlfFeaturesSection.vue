<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-brand-blue/4 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">What ALF Reputation Engine does</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Four systems.<br /><span class="gradient-text">One healthy reputation.</span>
        </h2>
        <p class="text-white/50 text-base leading-relaxed">
          Most ALFs lose move-ins not because of bad care — but because of unmanaged perception. We fix that automatically.
        </p>
      </div>

      <div v-stagger="100" class="grid lg:grid-cols-2 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="card-dark rounded-2xl p-8"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            :class="iconBg[feature.color]"
          >
            <svg class="w-6 h-6" :class="iconColor[feature.color]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="feature.icon" />
            </svg>
          </div>
          <p class="text-white/30 text-xs uppercase tracking-widest font-medium mb-2">{{ feature.tag }}</p>
          <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
          <p class="text-white/55 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { alfFeatures } from '~/data/alfContent'

export default Vue.extend({
  name: 'AlfFeaturesSection',
  data() {
    const features = alfFeatures.map((f, i) => ({
      ...f,
      tag: ['Platform Coverage', 'Negative Protection', 'AI Responses', 'Review Growth'][i],
    }))
    return {
      features,
      iconBg: {
        blue: 'bg-brand-blue/15',
        red: 'bg-brand-red/15',
        emerald: 'bg-emerald-500/15',
        purple: 'bg-purple-500/15',
      } as Record<string, string>,
      iconColor: {
        blue: 'text-brand-blue',
        red: 'text-brand-red',
        emerald: 'text-emerald-400',
        purple: 'text-purple-400',
      } as Record<string, string>,
    }
  },
})
</script>
