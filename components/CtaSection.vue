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

      <!-- Form -->
      <form class="max-w-xl mx-auto" @submit.prevent="onSubmit">
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="flex-1 px-5 py-4 rounded-xl bg-white/6 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Work email"
            class="flex-1 px-5 py-4 rounded-xl bg-white/6 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
            required
          />
        </div>

        <div class="flex gap-3 mb-6">
          <select
            v-model="form.budget"
            class="flex-1 px-5 py-4 rounded-xl bg-white/6 border border-white/15 text-white/70 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors appearance-none"
          >
            <option value="" disabled selected>Monthly ad budget</option>
            <option value="3k-15k">$3K – $15K</option>
            <option value="15k-75k">$15K – $75K</option>
            <option value="75k+">$75K+</option>
          </select>
          <select
            v-model="form.industry"
            class="flex-1 px-5 py-4 rounded-xl bg-white/6 border border-white/15 text-white/70 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors appearance-none"
          >
            <option value="" disabled selected>Industry</option>
            <option>eCommerce</option>
            <option>SaaS / Tech</option>
            <option>Health & Wellness</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </div>

        <button
          type="submit"
          class="btn-orange w-full text-base py-4 gap-2 group"
          :disabled="submitted"
        >
          <span v-if="!submitted">
            Book My Free Strategy Call
            <svg class="w-5 h-5 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span v-else class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Request Sent! We'll be in touch within 24 hours.
          </span>
        </button>
      </form>

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
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        budget: '',
        industry: '',
      },
    }
  },
  methods: {
    onSubmit() {
      // In production, integrate with CRM / Calendly / email
      this.submitted = true
    },
  },
})
</script>
