<template>
  <section class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-6 inline-flex">Case study</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
          Magnolia Manor went from<br />
          <span
            style="
              background: linear-gradient(to right, #ef4444, #d7263d);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              display: inline-block;
            "
            >3.2 stars</span
          >
          to
          <span
            style="
              background: linear-gradient(to right, #10b981, #34d399);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              display: inline-block;
            "
            >4.7 stars</span
          >
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Story -->
        <div v-reveal="'fade-left'">
          <p
            class="text-white/30 text-xs uppercase tracking-widest font-medium mb-4"
          >
            Northeast Ohio · Assisted Living Facility
          </p>

          <p class="text-white/70 text-base leading-relaxed mb-5">
            When Tolu came to us, Magnolia Manor had a 3.2-star Google rating
            and no system for managing reviews. Negative reviews sat unanswered
            for weeks. Staff had no visibility into what families were saying
            online. Inquiries were declining.
          </p>

          <p class="text-white/70 text-base leading-relaxed mb-5">
            We implemented the ALF Reputation Engine: connected all four review
            platforms, configured immediate negative review alerts for staff,
            set up AI-drafted responses, and activated a post-move-in review
            request campaign for new residents' families.
          </p>

          <p class="text-white/70 text-base leading-relaxed mb-8">
            Within 90 days, every negative review had a professional response.
            New 5-star reviews were coming in consistently from families who
            would never have left one without a prompt. Three move-ins were
            directly attributed to the improved Google rating.
          </p>

          <blockquote class="border-l-2 border-emerald-500/40 pl-5">
            <p class="text-white/55 text-sm italic leading-relaxed mb-3">
              "I didn't realize how much reputation was costing us. We had great
              care and a bad online story. Now families call us because of our
              reviews, not in spite of them."
            </p>
            <cite class="text-white/35 text-xs not-italic"
              >Tolu — Owner, Magnolia Manor</cite
            >
          </blockquote>
        </div>

        <!-- Right: Before/After metrics -->
        <div v-stagger="80" class="grid grid-cols-2 gap-4">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="bg-brand-navy border border-white/[0.08] rounded-2xl p-6"
          >
            <p
              class="text-white/35 text-xs uppercase tracking-wide font-medium mb-4"
            >
              {{ metric.label }}
            </p>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-white/30 text-xs mb-1">Before</p>
                <p class="text-2xl font-bold text-white/40">
                  {{ metric.before }}
                </p>
              </div>
              <svg
                class="w-5 h-5 text-white/20 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div class="text-right">
                <p class="text-white/30 text-xs mb-1">After</p>
                <p class="text-2xl font-bold" :class="metric.accent">
                  {{ metric.after }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { alfCaseStudyMetrics } from '~/data/alfContent'

export default Vue.extend({
  name: 'AlfCaseStudy',
  data() {
    return {
      metrics: alfCaseStudyMetrics,
    }
  },
})
</script>
