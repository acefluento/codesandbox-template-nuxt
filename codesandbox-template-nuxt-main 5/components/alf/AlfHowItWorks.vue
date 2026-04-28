<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="relative max-w-5xl mx-auto px-6">
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-6 inline-flex">Simple onboarding</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
          Live in 48 hours.<br /><span class="gradient-text">Running on day one.</span>
        </h2>
      </div>

      <div class="relative">
        <!-- Connector line -->
        <div class="absolute left-8 top-8 bottom-8 w-px bg-white/[0.07] hidden sm:block"></div>

        <div v-stagger="100" class="space-y-4">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative flex gap-6 items-start"
          >
            <!-- Step number circle -->
            <div class="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-navy-2 border border-white/10 flex items-center justify-center z-10">
              <span class="text-white/40 text-xs font-bold uppercase tracking-wide">{{ step.number }}</span>
            </div>

            <!-- Content -->
            <div class="flex-1 bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-6 hover:border-white/15 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="step.icon" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-base mb-1.5">{{ step.title }}</h3>
                  <p class="text-white/50 text-sm leading-relaxed">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { alfSteps } from '~/data/alfContent'

export default Vue.extend({
  name: 'AlfHowItWorks',
  data() {
    return {
      steps: alfSteps,
    }
  },
})
</script>
