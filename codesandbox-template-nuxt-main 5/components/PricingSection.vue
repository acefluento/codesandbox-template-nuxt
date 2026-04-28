<template>
  <section id="pricing" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[500px] h-[400px] bg-brand-red/3 rounded-full blur-3xl translate-x-1/3"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div v-reveal class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Ways to work together</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Choose the level of support<br /><span class="gradient-text">that fits your stage</span>
        </h2>
      </div>

      <!-- Package cards -->
      <div v-stagger="100" class="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        <div
          v-for="pkg in packages"
          :key="pkg.name"
          class="relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
          :class="pkg.featured
            ? 'bg-brand-navy border-2 border-brand-red/40 shadow-xl shadow-brand-red/10'
            : 'bg-brand-navy border border-white/[0.08] hover:border-white/20'"
        >
          <!-- Featured badge -->
          <div v-if="pkg.badge" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-semibold">
              {{ pkg.badge }}
            </span>
          </div>

          <h3 class="text-xl font-bold mb-3">{{ pkg.name }}</h3>
          <p class="text-white/50 text-sm mb-6 leading-relaxed">{{ pkg.description }}</p>

          <ul class="space-y-3 mb-8 flex-1">
            <li
              v-for="item in pkg.includes"
              :key="item"
              class="flex items-start gap-2.5 text-sm text-white/65"
            >
              <svg
                class="w-4 h-4 mt-0.5 flex-shrink-0"
                :class="pkg.featured ? 'text-brand-red' : 'text-brand-blue'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <a
            href="#contact"
            class="text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm"
            :class="pkg.featured
              ? 'bg-brand-red text-white hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25'
              : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'"
          >
            {{ pkg.cta }}
          </a>
        </div>
      </div>

      <!-- Trust note -->
      <p class="text-center text-white/35 text-sm">
        Every engagement begins with a strategy call to identify fit and next steps.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PricingSection',
  data() {
    return {
      packages: [
        {
          name: 'Starter Build',
          badge: null,
          description: 'For businesses that need a stronger first impression and a clear path to action.',
          includes: [
            'Strategy session',
            'Homepage or landing page',
            'Messaging cleanup',
            'CTA and inquiry flow setup',
          ],
          cta: 'Start with a Build',
          featured: false,
        },
        {
          name: 'Growth System',
          badge: 'Most Popular',
          description: 'For businesses that need both presence and lead flow — not one or the other.',
          includes: [
            'Website or landing pages',
            'Campaign strategy',
            'Funnel guidance',
            'Follow-up recommendations',
            'Optimization support',
          ],
          cta: 'Build My Growth System',
          featured: true,
        },
        {
          name: 'Ongoing Partner',
          badge: null,
          description: 'For businesses that want strategic execution without hiring in-house.',
          includes: [
            'Monthly support',
            'Site updates',
            'Messaging refinement',
            'Campaign support',
            'Performance reviews',
          ],
          cta: 'Apply for Ongoing Support',
          featured: false,
        },
      ],
    }
  },
})
</script>
