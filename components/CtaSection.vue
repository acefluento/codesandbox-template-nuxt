<template>
  <section id="contact" class="py-28 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-2 to-brand-navy pointer-events-none"></div>
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div class="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-red/4 rounded-full blur-3xl"></div>
    </div>
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Copy -->
        <div>
          <span class="section-label mb-6 inline-flex">Book a strategy call</span>

          <h2 class="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-6 leading-tight">
            Let's build a system that actually moves your<br class="hidden lg:block" />
            <span class="gradient-text">business forward</span>
          </h2>

          <p class="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
            Book a strategy call and we'll look at your current presence, goals, and the clearest next move.
          </p>

          <!-- Bullets -->
          <ul class="space-y-3 mb-10">
            <li v-for="point in points" :key="point" class="flex items-center gap-3 text-white/65 text-sm">
              <svg class="w-4 h-4 text-brand-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ point }}
            </li>
          </ul>

          <!-- Direct contact -->
          <div class="flex flex-wrap gap-5 text-white/45 text-sm">
            <a href="tel:2168083109" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              216-808-3109
            </a>
            <a href="mailto:Acefluento@gmail.com" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Acefluento@gmail.com
            </a>
          </div>
        </div>

        <!-- Right: Calendly Embed -->
        <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/8">
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/acefluento/growth-strategy-call-with-nolan?hide_event_type_details=0&hide_gdpr_banner=1&background_color=111827&text_color=ffffff&primary_color=D7263D"
            style="min-width:320px;height:700px;"
          ></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CtaSection',
  data() {
    return {
      points: [
        'Honest feedback on your current presence',
        'Clear next steps based on your goals',
        'No-pressure conversation',
      ],
    }
  },
})
</script>
