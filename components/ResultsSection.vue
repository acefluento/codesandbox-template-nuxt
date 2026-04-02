<template>
  <section id="work" class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">Selected work</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Real work built around<br /><span class="gradient-text">real business models</span>
        </h2>
        <p class="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Different audience. Different trust barrier. Different buying journey.<br />
          Same goal: make it easier for the right people to take the next step.
        </p>
      </div>

      <!-- Case Study Cards -->
      <div class="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div
          v-for="study in caseStudies"
          :key="study.brand"
          class="relative bg-brand-navy-2 border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Top accent -->
          <div class="h-1 w-full bg-gradient-to-r" :class="study.accentClass"></div>

          <div class="p-7">
            <!-- Tag + brand -->
            <div class="flex items-center justify-between mb-5">
              <div>
                <h3 class="font-bold text-lg">{{ study.brand }}</h3>
                <p class="text-white/35 text-xs mt-0.5">{{ study.industry }}</p>
              </div>
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold" :class="study.tagColor">
                {{ study.tag }}
              </span>
            </div>

            <!-- Problem -->
            <div class="mb-4">
              <p class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1.5">The problem</p>
              <p class="text-white/65 text-sm leading-relaxed">{{ study.problem }}</p>
            </div>

            <!-- What we changed -->
            <div class="mb-4">
              <p class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1.5">What we changed</p>
              <p class="text-white/65 text-sm leading-relaxed">{{ study.changed }}</p>
            </div>

            <!-- Why it mattered -->
            <div class="mb-5">
              <p class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1.5">Why it mattered</p>
              <p class="text-white/65 text-sm leading-relaxed">{{ study.outcome }}</p>
            </div>

            <!-- Quote if available -->
            <p v-if="study.quote" class="text-white/35 text-xs italic leading-relaxed border-t border-white/[0.07] pt-4">
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
          brand: 'Creative Living Care Group',
          industry: 'Assisted Living · Clearwater, FL',
          tag: 'Healthcare',
          tagColor: 'bg-teal-500/15 text-teal-400',
          accentClass: 'from-teal-500 to-cyan-400',
          problem:
            'Families need trust before they ever reach out. The business had no meaningful digital presence — nothing to reassure visitors or support inquiries.',
          changed:
            'We improved the website structure, messaging clarity, trust signals, and inquiry path so the brand could make a stronger first impression.',
          outcome:
            'A more professional online presence built to reassure families and support lead flow — moving from zero visibility to a functional digital foundation.',
          quote:
            'From zero online visibility to a fully optimized, lead-generating digital presence — Acefluento engineered a complete digital transformation for our brand.',
        },
        {
          brand: 'Euclid Church of Christ',
          industry: 'Church / Organization · Cleveland, OH',
          tag: 'Organization',
          tagColor: 'bg-purple-500/15 text-purple-400',
          accentClass: 'from-purple-500 to-indigo-400',
          problem:
            'The congregation had no clear digital presence for outreach, no consistent communication channel, and no way for new visitors to understand what the church offered.',
          changed:
            'Built a stronger online presence, deployed a content and communication system, and clarified how visitors could get connected and take the next step.',
          outcome:
            'Improved digital credibility and community engagement — making it easier for people to find, trust, and engage with the organization.',
          quote:
            "Acefluento helped us build a real digital presence and grow our congregation's online community effectively.",
        },
        {
          brand: 'JR Global',
          industry: 'Painting / Local Service',
          tag: 'Local Service',
          tagColor: 'bg-brand-emerald/15 text-brand-emerald',
          accentClass: 'from-brand-emerald to-teal-400',
          problem:
            'Needed more consistent local lead flow and a digital presence that supported credibility and quote intent — not just a basic website.',
          changed:
            'Built a cleaner web presence designed around local visibility, trust signals, and a clear path from visit to inquiry.',
          outcome:
            'A stronger digital foundation that supports local search visibility and gives the business legitimacy with new prospects.',
        },
        {
          brand: 'MissionCoach AI',
          industry: 'Software / AI Product',
          tag: 'Software / AI',
          tagColor: 'bg-brand-blue/15 text-brand-blue',
          accentClass: 'from-brand-blue to-blue-400',
          problem:
            'A modern AI product with unclear positioning — the messaging was too broad, the value was hard to grasp quickly, and the funnel had no clear conversion path.',
          changed:
            'Refined the positioning and messaging to make the product feel actionable, useful, and easy to understand. Tightened the funnel toward a clear next step.',
          outcome:
            'Sharper product framing that makes the offer easier to understand and easier to act on.',
        },
      ],
    }
  },
})
</script>
