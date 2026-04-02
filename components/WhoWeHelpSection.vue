<template>
  <section class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl translate-x-1/4"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Who we work with</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Built for<br /><span class="gradient-text">trust-first businesses</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          We work best with organizations and service brands where credibility, clarity, and follow-through matter.
        </p>
      </div>

      <!-- 3 primary audience blocks -->
      <div class="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
        <div
          v-for="audience in audiences"
          :key="audience.title"
          class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
            <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="audience.iconPath" />
            </svg>
          </div>
          <h3 class="font-bold text-lg mb-3">{{ audience.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ audience.description }}</p>
        </div>
      </div>

      <!-- Optional digital brands note -->
      <p class="text-center text-white/30 text-sm max-w-md mx-auto">
        We also support select digital brands and software products when the offer and fit make sense.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WhoWeHelpSection',
  data() {
    return {
      audiences: [
        {
          title: 'Assisted Living & Care Brands',
          description:
            'Calm, trustworthy digital presence built to reassure families and support inquiries without feeling clinical or pushy.',
          iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        },
        {
          title: 'Churches & Community Organizations',
          description:
            'Clear communication systems that support outreach, credibility, and engagement — so the right people can find you and take the next step.',
          iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        {
          title: 'Local Service Businesses',
          description:
            'Websites and lead systems for painters, contractors, and local operators who need more calls, quotes, and booked conversations.',
          iconPath: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
        },
      ],
    }
  },
})
</script>
