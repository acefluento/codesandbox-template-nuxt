<template>
  <section id="work" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">Selected work</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Built around the business model,<br /><span class="gradient-text">not a template</span>
        </h2>
        <p class="text-white/55 text-lg max-w-2xl mx-auto">
          Acefluento adapts the system to the audience, offer, and buying journey.
        </p>
      </div>

      <!-- Case Study Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div
          v-for="study in caseStudies"
          :key="study.brand"
          class="relative bg-brand-navy border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Top accent -->
          <div class="h-1 w-full bg-gradient-to-r" :class="study.accentClass"></div>

          <div class="p-6">
            <!-- Tag -->
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-4"
              :class="study.tagColor"
            >{{ study.tag }}</span>

            <!-- Brand + industry -->
            <h3 class="font-bold text-base mb-1">{{ study.brand }}</h3>
            <p class="text-white/35 text-xs mb-4">{{ study.industry }}</p>

            <!-- Focus -->
            <p class="text-white/55 text-xs font-medium uppercase tracking-wide mb-2">Focus</p>
            <p class="text-white/70 text-sm mb-4 leading-relaxed">{{ study.focus }}</p>

            <!-- Summary -->
            <p class="text-white/40 text-xs leading-relaxed">{{ study.summary }}</p>

            <!-- Quote if available -->
            <p v-if="study.quote" class="mt-4 text-white/35 text-xs italic leading-relaxed border-t border-white/[0.06] pt-4">
              "{{ study.quote }}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResultsSection',
  data() {
    return {
      caseStudies: [
        {
          brand: 'JR Global',
          industry: 'Painting / Local Service',
          focus: 'Local lead generation + trust-building web presence',
          summary:
            'Built a cleaner digital presence designed to support local visibility, legitimacy, and quote intent.',
          tag: 'Local Service',
          tagColor: 'bg-brand-emerald/15 text-brand-emerald',
          accentClass: 'from-brand-emerald to-teal-400',
        },
        {
          brand: 'MissionCoach AI',
          industry: 'Software / AI',
          focus: 'Positioning + digital funnel clarity',
          summary:
            'Helped frame a modern AI product in a way that feels actionable, useful, and easier to understand.',
          tag: 'Software / AI',
          tagColor: 'bg-brand-blue/15 text-brand-blue',
          accentClass: 'from-brand-blue to-blue-400',
        },
        {
          brand: 'Euclid Church of Christ',
          industry: 'Church / Organization',
          focus: 'Digital presence + communication clarity',
          summary:
            'Created a stronger online presence to support outreach, credibility, and community engagement.',
          quote:
            "Acefluento helped us build a real digital presence and grow our congregation's online community effectively.",
          tag: 'Organization',
          tagColor: 'bg-purple-500/15 text-purple-400',
          accentClass: 'from-purple-500 to-indigo-400',
        },
        {
          brand: 'Creative Living Care Group',
          industry: 'Healthcare / Assisted Living',
          focus: 'Trust-centered design + inquiry flow',
          summary:
            'Built a more credible digital experience designed to support inquiries and reassure families.',
          quote:
            'From zero online visibility to a fully optimized, lead-generating digital presence — Acefluento engineered a complete digital transformation for our brand.',
          tag: 'Healthcare',
          tagColor: 'bg-teal-500/15 text-teal-400',
          accentClass: 'from-teal-500 to-cyan-400',
        },
      ],
    }
  },
})
</script>
