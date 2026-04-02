<template>
  <section id="process" class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/3"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">How it works</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          A simple process built<br />for <span class="gradient-text">momentum</span>
        </h2>
        <p class="text-white/55 text-lg">
          Clear steps. No fluff. No mystery.
        </p>
      </div>

      <!-- Steps -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Vertical connector line -->
          <div class="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue/40 via-brand-blue/20 to-transparent hidden sm:block"></div>

          <div class="space-y-6">
            <div
              v-for="step in steps"
              :key="step.number"
              class="relative flex gap-8 items-start group"
            >
              <!-- Step number badge -->
              <div class="relative flex-shrink-0">
                <div
                  class="w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10"
                  :class="step.number === '01' ? 'border-brand-blue/50 bg-brand-blue/10' : 'border-white/15 bg-brand-navy-2'"
                >
                  <span class="text-lg font-black" :class="step.number === '01' ? 'text-brand-blue' : 'text-white/40'">
                    {{ step.number }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 bg-brand-navy-2 border border-white/[0.07] rounded-2xl p-7 group-hover:border-brand-blue/20 transition-all duration-300">
                <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
                <p class="text-white/55 text-sm leading-relaxed">{{ step.description }}</p>
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

export default Vue.extend({
  name: 'ProcessSection',
  data() {
    return {
      steps: [
        {
          number: '01',
          title: 'Audit & Align',
          description:
            'We look at your business model, audience, current presence, and biggest growth bottlenecks.',
        },
        {
          number: '02',
          title: 'Plan the System',
          description:
            'We map the right combination of messaging, pages, campaigns, and follow-up.',
        },
        {
          number: '03',
          title: 'Build & Launch',
          description:
            'We design, write, refine, and launch the assets needed to move the business forward.',
        },
        {
          number: '04',
          title: 'Optimize & Improve',
          description:
            'We monitor performance, learn quickly, and keep improving what matters.',
        },
      ],
    }
  },
})
</script>
