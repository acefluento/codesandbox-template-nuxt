<template>
  <section id="contact" class="py-28 relative overflow-hidden">
    <!-- BG -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-purple-600/8 pointer-events-none"></div>
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px); background-size: 64px 64px; opacity: 0.03;"></div>

    <div class="relative max-w-4xl mx-auto px-6 text-center">
      <span class="section-label mb-6 inline-flex">Free Strategy Call</span>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6 leading-tight">
        Ready to Stop Guessing<br />
        and Start <span class="gradient-text">Scaling?</span>
      </h2>

      <p class="text-white/60 text-lg max-w-xl mx-auto mb-10">
        Book a free 30-minute strategy call. We'll audit your current ads, identify the biggest growth
        opportunities, and show you exactly how we'd scale your brand.
      </p>

      <!-- Calendly Inline Widget -->
      <div class="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-brand-blue/10">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/acefluento/growth-strategy-call-with-nolan?hide_event_type_details=0&hide_gdpr_banner=1&background_color=111118&text_color=ffffff&primary_color=1877F2"
          style="min-width:320px;height:700px;"
        ></div>
      </div>

      <!-- Direct contact -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
        <a href="tel:2168083109" class="flex items-center gap-2 hover:text-white transition-colors">
          <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          216-808-3109
        </a>
        <span class="w-px h-4 bg-white/15"></span>
        <a href="mailto:Acefluento@gmail.com" class="flex items-center gap-2 hover:text-white transition-colors">
          <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Acefluento@gmail.com
        </a>
        <span class="w-px h-4 bg-white/15"></span>
        <span>M–F 8AM–8PM EST</span>
      </div>

      <!-- Trust signals -->
      <div class="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/35 text-sm">
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          100% Confidential
        </span>
        <span class="w-px h-4 bg-white/15"></span>
        <span>No obligation</span>
        <span class="w-px h-4 bg-white/15"></span>
        <span>30-min call</span>
        <span class="w-px h-4 bg-white/15"></span>
        <span>Response within 24hrs</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CtaSection',
})
</script>
