<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Background gradient blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/6 rounded-full blur-3xl"></div>
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 64px 64px;"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse-slow"></span>
          Assisted Living Occupancy Specialists
        </div>

        <!-- Pain punch -->
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-semibold text-lg mb-8">
          <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Every empty room is costing you $3,000–$6,000/month.
        </div>

        <!-- Headline -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
          We Help Assisted Living<br />Facilities
          <span class="relative inline-block">
            <span class="gradient-text">Fill Empty Rooms</span>
            <svg
              class="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C50 4 100 2 150 5C200 8 250 10 298 7"
                stroke="#C41230"
                stroke-width="3"
                stroke-linecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
          <br />in 30–90 Days
        </h1>

        <!-- Sub -->
        <p class="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed">
          Using a proven digital system designed to generate tours, not just traffic.
        </p>

        <!-- Phone -->
        <div class="flex items-center justify-center gap-2 text-white/50 text-sm mb-10">
          <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a href="tel:2168083109" class="hover:text-white transition-colors font-medium">216-808-3109</a>
          <span class="w-px h-4 bg-white/15"></span>
          <span>M–F 8AM–8PM EST</span>
        </div>

        <!-- CTA Group -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#contact" class="btn-orange text-base gap-2 group">
            Find Out What's Costing You Residents
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/occupancy-growth-system" class="btn-secondary text-base gap-2">
            <svg class="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            See Our System
          </a>
        </div>

        <!-- Trust bar -->
        <div class="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            No long-term contracts
          </div>
          <div class="w-px h-4 bg-white/15 hidden sm:block"></div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            First results in 30 days
          </div>
          <div class="w-px h-4 bg-white/15 hidden sm:block"></div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Assisted living specialists only
          </div>
        </div>
      </div>

      <!-- Floating metrics -->
      <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="relative bg-brand-dark-3 border border-white/8 rounded-2xl p-6 text-center hover:border-brand-blue/30 transition-all duration-300 group"
        >
          <div class="text-3xl font-black mb-1 group-hover:text-brand-blue transition-colors">{{ metric.value }}</div>
          <div class="text-white/50 text-sm">{{ metric.label }}</div>
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroSection',
  data() {
    return {
      metrics: [
        { value: '6+', label: 'Facilities Served' },
        { value: '30–90', label: 'Days to First Results' },
        { value: '5.0 ★', label: 'Manifest Rating' },
      ],
    }
  },
})
</script>
