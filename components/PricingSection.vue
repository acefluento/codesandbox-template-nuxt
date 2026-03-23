<template>
  <section id="pricing" class="py-28 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="section-label mb-4">Pricing</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Transparent. <span class="gradient-text">Performance-Driven.</span>
        </h2>
        <p class="text-white/55 text-lg max-w-xl mx-auto">
          No hidden fees. No lock-in contracts. Just results-based partnerships.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative rounded-2xl overflow-hidden transition-all duration-300"
          :class="plan.featured ? 'bg-gradient-to-b from-brand-blue to-blue-700 shadow-2xl shadow-brand-blue/30 scale-105' : 'bg-brand-dark-3 border border-white/10 hover:border-brand-blue/30'"
        >
          <div v-if="plan.badge" class="absolute top-4 right-4">
            <span class="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
              {{ plan.badge }}
            </span>
          </div>
          <div class="p-8">
            <div class="text-2xl mb-2">{{ plan.icon }}</div>
            <h3 class="text-xl font-bold mb-1">{{ plan.name }}</h3>
            <p class="text-sm mb-6" :class="plan.featured ? 'text-blue-100/70' : 'text-white/50'">
              {{ plan.description }}
            </p>

            <div class="mb-6">
              <span class="text-4xl font-black">{{ plan.price }}</span>
              <span class="text-sm" :class="plan.featured ? 'text-blue-100/60' : 'text-white/40'">/month</span>
              <div v-if="plan.adSpend" class="text-xs mt-1" :class="plan.featured ? 'text-blue-100/60' : 'text-white/40'">
                + {{ plan.adSpend }} ad spend budget
              </div>
            </div>

            <ul class="space-y-3 mb-8">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-2.5 text-sm"
                :class="plan.featured ? 'text-blue-50' : 'text-white/65'"
              >
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" :class="plan.featured ? 'text-white' : 'text-brand-blue'" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <a
              href="#contact"
              class="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              :class="plan.featured ? 'bg-white text-brand-blue hover:bg-blue-50' : 'bg-white/8 text-white border border-white/15 hover:bg-brand-blue hover:border-brand-blue'"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>

      <p class="text-center text-white/35 text-sm mt-10">
        All plans include a 30-day money-back guarantee. No contracts. Cancel anytime.
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
      plans: [
        {
          icon: '🌱',
          name: 'Growth',
          description: 'For brands ready to get serious about paid social.',
          price: '$1,997',
          adSpend: '$3K–$15K',
          badge: null,
          featured: false,
          cta: 'Get Started',
          features: [
            'Facebook & Instagram campaign management',
            '2 active campaigns',
            'Creative strategy & briefs',
            'Monthly reporting',
            'Audience research',
            'Pixel & CAPI setup',
            'Email support',
          ],
        },
        {
          icon: '🚀',
          name: 'Scale',
          description: 'For growth-stage brands ready to pour fuel on the fire.',
          price: '$3,997',
          adSpend: '$15K–$75K',
          badge: 'Most Popular',
          featured: true,
          cta: 'Book a Call',
          features: [
            'Everything in Growth',
            'Unlimited active campaigns',
            'UGC & video ad production',
            'Full-funnel buildout',
            'Weekly strategy calls',
            'Weekly performance reports',
            'Dedicated account manager',
            'Landing page CRO',
            'Retargeting sequences',
          ],
        },
        {
          icon: '👑',
          name: 'Enterprise',
          description: 'Custom solution for $75K+ monthly ad budgets.',
          price: 'Custom',
          adSpend: '$75K+',
          badge: null,
          featured: false,
          cta: 'Contact Us',
          features: [
            'Everything in Scale',
            'Dedicated creative team',
            'International expansion',
            'Custom attribution models',
            'Daily strategy touchpoints',
            'Executive reporting',
            'Priority Slack access',
            'White-glove onboarding',
          ],
        },
      ],
    }
  },
})
</script>
