<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/6 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red/4 rounded-full blur-3xl"></div>
      <div
        class="absolute inset-0 opacity-[0.025]"
        style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 64px 64px;"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Copy -->
        <div>
          <!-- Eyebrow badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-sm font-medium mb-8">
            <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse-slow"></span>
            Growth systems for modern businesses
          </div>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Turn Attention<br />
            Into <span class="gradient-text">Clients</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lg sm:text-xl text-white/60 max-w-xl mb-8 leading-relaxed">
            Websites, ads, and systems built to help your business generate more leads and convert them consistently.
          </p>

          <!-- Bullets -->
          <ul class="space-y-3 mb-10">
            <li v-for="bullet in bullets" :key="bullet" class="flex items-center gap-3 text-white/65 text-sm">
              <svg class="w-4 h-4 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ bullet }}
            </li>
          </ul>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 items-start mb-10">
            <a href="#contact" class="btn-primary text-base gap-2 group">
              Book Free Strategy Call
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#system" class="btn-secondary text-base">
              See How It Works
            </a>
          </div>

          <!-- Micro proof -->
          <p class="text-white/35 text-sm">
            No pressure. Just clarity on your next move.
          </p>
        </div>

        <!-- Right: Visual composition -->
        <div class="relative hidden lg:block">
          <div class="relative w-full h-[520px]">
            <!-- Background glow -->
            <div class="absolute inset-0 bg-brand-blue/5 rounded-3xl blur-2xl"></div>

            <!-- Main card: website preview -->
            <div class="absolute top-0 left-0 right-12 bg-brand-navy-2 border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-brand-red/60"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400/40"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/40"></div>
                <div class="flex-1 h-5 bg-white/5 rounded-md ml-2"></div>
              </div>
              <div class="space-y-2">
                <div class="h-4 bg-white/10 rounded w-3/4"></div>
                <div class="h-3 bg-white/6 rounded w-full"></div>
                <div class="h-3 bg-white/6 rounded w-5/6"></div>
              </div>
              <div class="mt-4 flex gap-2">
                <div class="h-8 w-28 bg-brand-red/70 rounded-lg"></div>
                <div class="h-8 w-20 bg-white/8 rounded-lg border border-white/10"></div>
              </div>
              <div class="mt-4 grid grid-cols-3 gap-2">
                <div class="h-16 bg-white/5 rounded-lg border border-white/6"></div>
                <div class="h-16 bg-white/5 rounded-lg border border-white/6"></div>
                <div class="h-16 bg-white/5 rounded-lg border border-white/6"></div>
              </div>
            </div>

            <!-- Floating card: ads reporting -->
            <div class="absolute bottom-24 right-0 w-52 bg-brand-navy-2 border border-brand-blue/25 rounded-2xl p-4 shadow-xl">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-white/50 font-medium">Campaign</span>
                <span class="text-xs text-brand-emerald font-semibold">● Active</span>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-xs">
                  <span class="text-white/40">Reach</span>
                  <span class="text-white font-medium">12.4k</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-white/40">Leads</span>
                  <span class="text-brand-blue font-medium">38</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-white/40">Cost/Lead</span>
                  <span class="text-white font-medium">$14.20</span>
                </div>
              </div>
              <div class="mt-3 h-1.5 bg-white/8 rounded-full overflow-hidden">
                <div class="h-full bg-brand-blue rounded-full" style="width: 68%"></div>
              </div>
            </div>

            <!-- Floating card: follow-up automation -->
            <div class="absolute top-36 -right-4 w-48 bg-brand-navy-2 border border-white/10 rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded-lg bg-brand-emerald/20 flex items-center justify-center">
                  <svg class="w-3 h-3 text-brand-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-xs text-white/70 font-medium">Follow-up</span>
              </div>
              <div class="text-xs text-white/40 space-y-1">
                <div class="flex items-center gap-1.5">
                  <div class="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div>
                  <span>Lead captured</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                  <span>Email sent</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <span>SMS queued</span>
                </div>
              </div>
            </div>

            <!-- Floating card: booking -->
            <div class="absolute bottom-4 left-8 w-44 bg-brand-navy-2 border border-brand-red/20 rounded-2xl p-4 shadow-xl">
              <div class="text-xs text-white/50 mb-2">New Booking</div>
              <div class="text-sm font-semibold text-white mb-1">Strategy Call</div>
              <div class="text-xs text-brand-red">Tomorrow, 2:00 PM</div>
              <div class="mt-3 h-7 bg-brand-red/80 rounded-lg flex items-center justify-center">
                <span class="text-xs text-white font-medium">Confirmed</span>
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
  name: 'HeroSection',
  data() {
    return {
      bullets: [
        'Strategy before tactics',
        'Built for conversion, not just looks',
        'Flexible across local businesses, organizations, and digital brands',
      ],
    }
  },
})
</script>
