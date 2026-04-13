<template>
  <section id="ai" class="py-28 bg-brand-navy relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-4">AI Integration</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          AI is your edge —<br /><span class="gradient-text">if you're using it right</span>
        </h2>
        <p class="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Every competitor has access to the same tools. What separates the ones winning is
          how those tools are wired into a system — not used as one-off shortcuts.
        </p>
      </div>

      <!-- AI Tool Cards -->
      <div v-stagger="90" class="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
        <div
          v-for="tool in aiTools"
          :key="tool.name"
          class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-6 hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="tool.iconPath" />
              </svg>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-white text-sm mb-1">{{ tool.name }}</h3>
              <p class="text-white/50 text-xs leading-relaxed mb-3">{{ tool.useCase }}</p>
              <span class="inline-flex items-center gap-1.5 text-xs text-brand-emerald font-medium">
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {{ tool.benefit }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Operator Mindset Callout -->
      <div v-reveal class="max-w-3xl mx-auto mb-14">
        <div class="relative bg-brand-navy-2 border border-brand-blue/20 rounded-2xl p-8 text-center overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none"></div>
          <div class="relative">
            <p class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">How we think</p>
            <p class="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
              We don't think in tasks.<br />We think in systems.
            </p>
            <p class="text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
              Any tool is only as powerful as the strategy behind it. We integrate AI at the workflow
              level — so the output is consistent, scalable, and connected to revenue.
              That's the operator mindset. That's the difference.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div v-reveal class="text-center">
        <a href="#contact" class="btn-primary px-8 py-4 text-sm">
          Get Your AI-Readiness Assessment
        </a>
        <p class="text-white/30 text-xs mt-3">
          We'll map exactly where AI can reduce friction and increase output in your business.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AIWorkflowSection',
  data() {
    return {
      aiTools: [
        {
          name: 'Claude / ChatGPT',
          useCase: 'Messaging frameworks, ad copy, email sequences, landing page drafts',
          benefit: 'Cuts content production time significantly while improving specificity',
          iconPath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
        {
          name: 'Make.com / Zapier',
          useCase: 'Lead routing, CRM updates, follow-up triggers, notification systems',
          benefit: 'Closes the gap between lead capture and first contact — automatically',
          iconPath: 'M13 10V3L4 14h7v7l9-11h-7',
        },
        {
          name: 'Meta AI + Ad Tools',
          useCase: 'Campaign optimization, audience targeting, creative testing',
          benefit: 'Identifies highest-performing ad angles faster and at lower cost',
          iconPath: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
        },
        {
          name: 'Review & Reputation Tools',
          useCase: 'Automated review requests, response drafting, reputation monitoring',
          benefit: 'Builds social proof passively while protecting brand trust',
          iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
        },
      ],
    }
  },
})
</script>
