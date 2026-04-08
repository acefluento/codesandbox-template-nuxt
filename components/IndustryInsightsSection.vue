<template>
  <section id="industries" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand-emerald/4 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute top-0 left-0 w-[400px] h-[300px] bg-purple-500/4 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-4">Industry Deep Dives</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Built for your industry.<br /><span class="gradient-text">Not just your budget.</span>
        </h2>
        <p class="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Generic marketing advice doesn't work for trust-based businesses. Here's how we approach
          each niche — with specific AI, systems, and content leverage points.
        </p>
      </div>

      <!-- Industry Cards -->
      <div v-stagger="110" class="grid lg:grid-cols-3 gap-6">
        <!-- Assisted Living -->
        <div class="bg-brand-navy border border-teal-500/15 rounded-2xl overflow-hidden hover:border-teal-500/30 hover:-translate-y-1 transition-all duration-300">
          <div class="h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-7">
            <div class="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-white text-lg mb-2">Assisted Living &amp; Care Brands</h3>
            <p class="text-white/40 text-xs italic leading-relaxed mb-5 border-l-2 border-teal-500/30 pl-3">
              Families research for weeks before calling. You need trust before they ever pick up the phone.
            </p>
            <ul class="space-y-3 mb-7">
              <li v-for="tactic in assistedLivingTactics" :key="tactic" class="flex items-start gap-2.5 text-sm text-white/65">
                <svg class="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {{ tactic }}
              </li>
            </ul>
            <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors">
              Talk about assisted living
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Churches -->
        <div class="bg-brand-navy border border-purple-500/15 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300">
          <div class="h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-400"></div>
          <div class="p-7">
            <div class="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-white text-lg mb-2">Churches &amp; Organizations</h3>
            <p class="text-white/40 text-xs italic leading-relaxed mb-5 border-l-2 border-purple-500/30 pl-3">
              Digital presence often lags behind the community you serve — making outreach harder and first impressions weaker.
            </p>
            <ul class="space-y-3 mb-7">
              <li v-for="tactic in churchTactics" :key="tactic" class="flex items-start gap-2.5 text-sm text-white/65">
                <svg class="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {{ tactic }}
              </li>
            </ul>
            <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
              Talk about churches &amp; orgs
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Local Services -->
        <div class="bg-brand-navy border border-brand-emerald/15 rounded-2xl overflow-hidden hover:border-brand-emerald/30 hover:-translate-y-1 transition-all duration-300">
          <div class="h-1 w-full bg-gradient-to-r from-brand-emerald to-teal-400"></div>
          <div class="p-7">
            <div class="w-11 h-11 rounded-xl bg-brand-emerald/10 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-brand-emerald" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 class="font-bold text-white text-lg mb-2">Local Service Businesses</h3>
            <p class="text-white/40 text-xs italic leading-relaxed mb-5 border-l-2 border-brand-emerald/30 pl-3">
              You're competing on Google with larger companies while manually chasing every lead. The margin for lost follow-up is zero.
            </p>
            <ul class="space-y-3 mb-7">
              <li v-for="tactic in localServiceTactics" :key="tactic" class="flex items-start gap-2.5 text-sm text-white/65">
                <svg class="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {{ tactic }}
              </li>
            </ul>
            <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald hover:text-emerald-300 transition-colors">
              Talk about local service
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndustryInsightsSection',
  data() {
    return {
      assistedLivingTactics: [
        'AI-scripted follow-up sequences for family inquiry emails and calls',
        'Automated tour scheduling with SMS confirmation and reminders',
        'Review generation systems that prompt satisfied families post-move-in',
        'Trust-centered landing pages built for emotional decision-makers',
      ],
      churchTactics: [
        'AI-powered content calendars for sermon summaries, events, and announcements',
        'Automated welcome sequences for new visitors who find you online',
        'Event promotion systems across email, social, and local search',
        'Clear communication architecture so visitors know how to get involved',
      ],
      localServiceTactics: [
        'Automated quote request follow-ups within 5 minutes via SMS and email',
        'AI-assisted Google Business Profile optimization for local search dominance',
        'Lead routing systems that assign, notify, and track every inbound inquiry',
        "Retargeting campaigns that re-engage visitors who didn't book",
      ],
    }
  },
})
</script>
