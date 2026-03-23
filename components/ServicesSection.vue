<template>
  <section id="services" class="py-28 relative">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/6 rounded-full blur-3xl translate-x-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">What We Do</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Full-Stack <span class="gradient-text">Meta Advertising</span>
        </h2>
        <p class="text-white/55 text-lg max-w-2xl mx-auto">
          From creative ideation to conversion optimization — we handle everything so you can focus on fulfillment.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="card-dark group cursor-default"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <span class="text-2xl">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-white/55 text-sm leading-relaxed mb-5">{{ service.description }}</p>
          <ul class="space-y-2">
            <li
              v-for="point in service.points"
              :key="point"
              class="flex items-center gap-2 text-sm text-white/50"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
              {{ point }}
            </li>
          </ul>
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
          icon: '🎯',
          iconBg: 'bg-brand-blue/15',
          title: 'Meta Ads Management',
          description:
            'End-to-end campaign management on Facebook & Instagram. We build, test, and scale what works.',
          points: [
            'Campaign architecture & structure',
            'Audience targeting & segmentation',
            'Bid strategy & budget optimization',
            'A/B testing & iteration',
          ],
        },
        {
          icon: '🎨',
          iconBg: 'bg-purple-500/15',
          title: 'Creative Strategy',
          description:
            'Scroll-stopping ads designed to hook cold audiences and drive action at every funnel stage.',
          points: [
            'UGC & native-style video ads',
            'Static image ad design',
            'Ad copy & hooks',
            'Creative performance analysis',
          ],
        },
        {
          icon: '📊',
          iconBg: 'bg-green-500/15',
          title: 'Funnel & Landing Pages',
          description:
            'High-converting landing pages and funnels that turn ad clicks into revenue — not just visits.',
          points: [
            'CRO-optimized page design',
            'VSL & webinar funnels',
            'Lead gen & quiz funnels',
            'Post-click optimization',
          ],
        },
        {
          icon: '🔁',
          iconBg: 'bg-orange-500/15',
          title: 'Retargeting Systems',
          description:
            'Re-engage warm audiences with precision retargeting sequences that close the deal automatically.',
          points: [
            'Pixel & CAPI setup',
            'Dynamic product ads',
            'Abandoned cart sequences',
            'Cross-sell & upsell flows',
          ],
        },
        {
          icon: '📈',
          iconBg: 'bg-cyan-500/15',
          title: 'Analytics & Reporting',
          description:
            'Clear, actionable reporting so you always know exactly where your money goes and what it returns.',
          points: [
            'Custom dashboard setup',
            'Attribution modeling',
            'Weekly performance reports',
            'Profit & ROAS tracking',
          ],
        },
        {
          icon: '🚀',
          iconBg: 'bg-pink-500/15',
          title: 'Growth Scaling',
          description:
            'Once we find the winning formula, we pour fuel on the fire — responsibly scaling ad spend for maximum return.',
          points: [
            'Horizontal & vertical scaling',
            'Lookalike audience expansion',
            'International market entry',
            'Offer testing & optimization',
          ],
        },
      ],
    }
  },
})
</script>
