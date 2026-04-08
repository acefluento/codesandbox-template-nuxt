<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-brand-red/4 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        <!-- Left: Headline copy -->
        <div v-reveal="'fade-left'">
          <span class="section-label mb-6 inline-flex">The real problem</span>
          <h2
            class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-6 leading-tight"
          >
            Most businesses aren't losing because nobody sees them.
          </h2>
          <p class="text-white/65 text-xl font-medium mb-6 leading-relaxed">
            They're losing because trust breaks before action happens.
          </p>
          <div class="space-y-3 text-white/50 text-base leading-relaxed mb-8">
            <p>People visit.</p>
            <p>They hesitate.</p>
            <p>They leave.</p>
          </div>
          <p class="text-white/40 text-sm leading-relaxed max-w-sm">
            That is why attention does not turn into appointments, calls, or
            clients — even when the business is genuinely good.
          </p>
        </div>

        <!-- Right: Problem list -->
        <div v-reveal="'fade-right'">
          <p
            class="text-white/35 text-xs uppercase tracking-widest font-semibold mb-6"
          >
            Why it breaks down
          </p>
          <div v-stagger="90" class="space-y-4">
            <div
              v-for="problem in problems"
              :key="problem.title"
              class="flex gap-4 p-5 bg-brand-navy-2 border border-white/[0.07] rounded-xl group hover:border-brand-red/20 transition-all duration-200"
            >
              <div
                class="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red/20 transition-colors"
              >
                <svg
                  class="w-4 h-4 text-brand-red"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="problem.iconPath"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-sm text-white/90 mb-1">
                  {{ problem.title }}
                </h3>
                <p class="text-white/45 text-sm leading-relaxed">
                  {{ problem.description }}
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

export default Vue.extend({
  name: 'ProblemSection',
  data() {
    return {
      problems: [
        {
          title: 'The site looks decent but does not guide action',
          description:
            'Clean design is not the same as conversion design. Most sites look fine and do almost nothing.',
          iconPath:
            'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
        },
        {
          title: 'The offer is unclear',
          description:
            'If a visitor cannot quickly understand what you do, who it is for, and what to do next — they leave.',
          iconPath:
            'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'The messaging sounds like everyone else',
          description:
            'Generic language creates generic trust — which is no trust at all in high-stakes categories.',
          iconPath:
            'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
        },
        {
          title: 'Follow-up is slow or inconsistent',
          description:
            'A lead that waits 24–48 hours for a response is usually a lost lead. Most businesses have no system here.',
          iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Marketing and website strategy are disconnected',
          description:
            'Ads send people to a page that was not built to convert them. The gap kills the campaign.',
          iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
      ],
    }
  },
})
</script>
