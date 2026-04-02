<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-brand-red/4 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">The real problem</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 leading-tight">
          Most businesses don't have a traffic problem.<br />
          They have a <span class="gradient-text">conversion problem</span>.
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          You can get traffic, clicks, and attention — but if the offer is weak, the site is unclear,
          or the follow-up is broken, growth stays inconsistent.
        </p>
      </div>

      <!-- Problem cards -->
      <div class="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7 group hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5 group-hover:bg-brand-red/20 transition-colors">
            <svg class="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="problem.iconPath" />
            </svg>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ problem.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ problem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProblemSection',
  data() {
    return {
      problems: [
        {
          title: 'Traffic without traction',
          description:
            "You're getting attention, but not enough qualified leads or booked conversations.",
          iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        },
        {
          title: 'A website that looks fine, but underperforms',
          description:
            'Clean design alone does not close. The page has to guide action — most do not.',
          iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
        },
        {
          title: 'Disconnected marketing',
          description:
            'Ads, content, website, and follow-up are all doing their own thing with no shared strategy.',
          iconPath: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
        },
        {
          title: 'No repeatable system',
          description:
            "You're relying on random effort instead of a structured growth engine that runs consistently.",
          iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        },
      ],
    }
  },
})
</script>
