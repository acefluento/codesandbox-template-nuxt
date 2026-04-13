<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <!-- Background gradient accent -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-48 bg-brand-red/5 rounded-full blur-3xl translate-x-1/4"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left: Copy + CTA -->
        <div v-reveal>
          <span class="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Free Industry Guide
          </span>

          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 leading-tight">
            5 AI-Powered Systems for<br />
            <span class="gradient-text">Assisted Living Lead Generation</span>
          </h2>

          <p class="text-white/55 text-base leading-relaxed mb-8">
            If you run or market an assisted living facility, these are the exact systems generating
            consistent family inquiries right now — without cold outreach or ad spend guesswork.
          </p>

          <a href="#contact" class="btn-primary px-8 py-4 text-sm inline-flex items-center gap-2">
            Get the Breakdown
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p class="text-white/25 text-xs mt-3">
            Book a strategy call — we'll walk through the systems that apply to your facility.
          </p>
        </div>

        <!-- Right: System Previews -->
        <div v-stagger="80" class="space-y-3">
          <div
            v-for="system in systems"
            :key="system.number"
            class="flex items-start gap-4 bg-brand-navy-2 border border-white/[0.07] rounded-xl p-4 hover:border-brand-red/20 transition-colors duration-300"
          >
            <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/15 flex items-center justify-center text-brand-red font-bold text-xs">
              {{ system.number }}
            </span>
            <div>
              <h4 class="text-white font-semibold text-sm mb-0.5">{{ system.title }}</h4>
              <p class="text-white/40 text-xs leading-relaxed">{{ system.preview }}</p>
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
  name: 'LeadMagnetSection',
  data() {
    return {
      systems: [
        {
          number: '01',
          title: 'The Family Inquiry Automation System',
          preview: 'A 3-step automated sequence that responds to every inquiry within 5 minutes — day or night.',
        },
        {
          number: '02',
          title: 'The AI-Powered Trust Page Framework',
          preview: 'How to structure your website so families feel confident before they ever visit.',
        },
        {
          number: '03',
          title: 'The Tour Scheduling & Reminder Flow',
          preview: 'Reduce no-shows and increase booked tours with automated confirmations and SMS reminders.',
        },
        {
          number: '04',
          title: 'The Post-Move-In Review Engine',
          preview: 'A simple system that generates authentic 5-star reviews from satisfied families — consistently.',
        },
        {
          number: '05',
          title: 'The Retargeting Loop for Undecided Families',
          preview: "How to stay in front of families who visited your site but haven't called yet — without being pushy.",
        },
      ],
    }
  },
})
</script>
