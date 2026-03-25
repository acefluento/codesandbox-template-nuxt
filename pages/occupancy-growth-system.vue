<template>
  <main>
    <!-- Page Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 64px 64px;"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <span class="section-label mb-6 inline-flex">The Money Page</span>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
          The Occupancy<br />
          <span class="gradient-text">Growth System</span>
        </h1>
        <p class="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          A purpose-built digital system that helps assisted living facilities go from
          invisible online to consistently filling rooms — in 30 to 90 days.
        </p>
        <a href="#contact" class="btn-orange text-base gap-2 group">
          Book Free Occupancy Audit
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-20 border-t border-white/8 bg-brand-dark-2">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="section-label mb-4">The Problem</span>
          <h2 class="text-4xl font-extrabold tracking-tight mt-4 mb-5">
            Empty Rooms = <span class="gradient-text">Lost Revenue</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div v-for="problem in problems" :key="problem.title" class="flex gap-5">
            <div class="text-3xl flex-shrink-0">{{ problem.icon }}</div>
            <div>
              <h3 class="font-bold text-lg mb-2">{{ problem.title }}</h3>
              <p class="text-white/55 text-sm leading-relaxed">{{ problem.body }}</p>
            </div>
          </div>
        </div>
        <div class="bg-brand-blue/8 border border-brand-blue/20 rounded-2xl p-8 text-center">
          <p class="text-white/80 text-lg leading-relaxed">
            At just 85% occupancy in a 50-bed facility, you're leaving
            <span class="text-brand-blue font-bold">$22,500+ on the table every month.</span>
            That's $270,000/year. We built a system to stop the bleeding.
          </p>
        </div>
      </div>
    </section>

    <!-- Solution: System Breakdown -->
    <ServicesSection />

    <!-- Proof -->
    <section class="py-20 bg-brand-dark-2 border-t border-white/8">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="section-label mb-4">Proof</span>
          <h2 class="text-4xl font-extrabold tracking-tight mt-4 mb-5">
            It's Already <span class="gradient-text">Working</span>
          </h2>
          <p class="text-white/55 text-lg max-w-xl mx-auto">
            Creative Living Care Group came to us with zero online presence.
            Here's what the system delivered.
          </p>
        </div>
        <div class="bg-brand-dark-3 border border-teal-500/30 rounded-2xl overflow-hidden">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8 md:p-12">
            <div class="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div>
                <div class="font-bold text-2xl mb-1">Creative Living Care Group Inc.</div>
                <div class="text-white/40">Assisted Living · Clearwater, FL</div>
              </div>
              <span class="px-4 py-1.5 rounded-full bg-teal-500/15 text-teal-400 text-sm font-semibold">Healthcare</span>
            </div>
            <div class="grid md:grid-cols-2 gap-10">
              <div>
                <h4 class="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">Before Acefluento</h4>
                <ul class="space-y-3">
                  <li v-for="before in beforeItems" :key="before" class="flex items-center gap-3 text-white/60">
                    <svg class="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    {{ before }}
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">After Acefluento</h4>
                <ul class="space-y-3">
                  <li v-for="after in afterItems" :key="after" class="flex items-center gap-3 text-white/70">
                    <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ after }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-8 pt-8 border-t border-white/8">
              <p class="text-white/60 italic text-lg leading-relaxed">
                "From zero online visibility to a fully optimized, lead-generating digital presence —
                Acefluento engineered a complete digital transformation for our assisted living brand."
              </p>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <a href="/case-studies" class="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-semibold group">
            See all case studies
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Process -->
    <ProcessSection />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OccupancyGrowthSystem',
  data() {
    return {
      problems: [
        {
          icon: '🔍',
          title: 'Families Search Online First',
          body: 'Over 90% of families research assisted living facilities online before ever making a call. If you\'re not visible, you don\'t exist.',
        },
        {
          icon: '📵',
          title: 'Referral Networks Are Shrinking',
          body: 'Hospital and physician referrals have dropped significantly post-pandemic. Facilities that relied solely on them are feeling it now.',
        },
        {
          icon: '💸',
          title: 'Every Empty Day Has a Price',
          body: 'Each vacant room costs $100–$270/day in lost revenue. Multiply that by the number of empty beds and the months they stay empty.',
        },
        {
          icon: '🏆',
          title: 'Competitors Are Getting Smarter',
          body: 'Other facilities in your area are investing in digital. Every month you wait, they capture the inquiries that should be yours.',
        },
      ],
      beforeItems: [
        'No website or an outdated one',
        'Zero Google Business presence',
        'Not showing in local searches',
        'No online reviews',
        'Zero incoming digital inquiries',
      ],
      afterItems: [
        'Professional website built & live',
        'Google Business fully optimized',
        'Ranking in local search results',
        'Review generation system active',
        'Digital inquiries flowing consistently',
      ],
    }
  },
})
</script>
