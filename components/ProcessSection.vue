<template>
  <section id="process" class="py-28 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="section-label mb-4">How It Works</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          How the <span class="gradient-text">Occupancy Growth System</span> Works
        </h2>
        <p class="text-white/55 text-lg max-w-xl mx-auto">
          A clear, tested 4-step process. From audit to rooms filled in 30–90 days.
          Clear milestones. No surprises.
        </p>
      </div>

      <div class="relative">
        <!-- Connector line -->
        <div class="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Number bubble -->
            <div
              class="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 font-black text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-blue/30 z-10"
              :class="i === 0 ? 'bg-brand-blue text-white' : 'bg-brand-dark-3 border border-white/15 text-white/60 group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40 group-hover:text-brand-blue'"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </div>

            <div class="text-2xl mb-3">{{ step.icon }}</div>
            <h3 class="text-lg font-bold mb-3">{{ step.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed">{{ step.description }}</p>

            <span class="mt-4 px-3 py-1 rounded-full bg-white/6 text-white/40 text-xs font-medium">
              {{ step.timeline }}
            </span>
          </div>
        </div>
      </div>

      <!-- CTA under process -->
      <div class="text-center mt-16">
        <a href="#contact" class="btn-primary gap-2 group">
          Book Free Occupancy Audit
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProcessSection',
  data() {
    return {
      steps: [
        {
          icon: '🔍',
          title: 'Free Occupancy Audit',
          description:
            'We assess your current digital footprint, local visibility, and occupancy gap to identify your fastest growth levers.',
          timeline: 'Days 1–3',
        },
        {
          icon: '🗺️',
          title: 'Strategy & Build',
          description:
            'A custom digital strategy built around your facility\'s market, competitors, and available rooms — nothing generic.',
          timeline: 'Days 4–10',
        },
        {
          icon: '🚀',
          title: 'Launch Campaigns',
          description:
            'SEO, ads, website updates, and reputation systems go live. Local families start finding your facility.',
          timeline: 'Days 11–21',
        },
        {
          icon: '🏠',
          title: 'Fill Rooms & Scale',
          description:
            'We optimize weekly, track every inquiry back to its source, and scale what works until you hit target census.',
          timeline: 'Day 22+',
        },
      ],
    }
  },
})
</script>
