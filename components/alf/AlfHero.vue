<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/6 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl animate-float-delayed"
      ></div>
      <div
        class="absolute inset-0 opacity-[0.025]"
        style="
          background-image: linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 64px 64px;
        "
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Copy -->
        <div>
          <div
            class="animate-hero-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium mb-8"
          >
            <span
              class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"
            ></span>
            Reputation software built for assisted living
          </div>

          <h1
            class="animate-hero-2 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            Never let a bad<br />
            review cost you<br /><span
              style="
                background: linear-gradient(
                  to right,
                  #ffffff,
                  #cbd5e1,
                  #10b981
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                display: inline-block;
              "
              >a move-in</span
            >
          </h1>

          <p
            class="animate-hero-3 text-lg sm:text-xl text-white/60 max-w-xl mb-3 leading-relaxed"
          >
            Managed review monitoring, AI-drafted responses, and automated
            review request campaigns — built specifically for ALFs.
          </p>
          <p
            class="animate-hero-3 text-base text-white/40 max-w-xl mb-8 leading-relaxed"
          >
            Families read reviews before they ever call. You need a system that
            manages that perception automatically.
          </p>

          <ul class="animate-hero-4 space-y-3 mb-10">
            <li
              v-for="bullet in bullets"
              :key="bullet"
              class="flex items-center gap-3 text-white/65 text-sm"
            >
              <svg
                class="w-4 h-4 text-emerald-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ bullet }}
            </li>
          </ul>

          <div
            class="animate-hero-5 flex flex-col sm:flex-row gap-4 items-start mb-10"
          >
            <a href="#demo" class="btn-primary text-base gap-2 group">
              Book a Demo Call
              <svg
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </a>
            <a href="/alf-dashboard" class="btn-secondary text-base">
              See the Dashboard
            </a>
          </div>

          <div class="animate-hero-5 border-t border-white/[0.07] pt-7">
            <p
              class="text-white/30 text-xs uppercase tracking-widest font-medium mb-4"
            >
              Monitors reviews across
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in platforms"
                :key="tag"
                class="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Visual -->
        <div class="animate-hero-img relative hidden lg:block">
          <div class="relative w-full h-[480px]">
            <div
              class="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-2xl"
            ></div>

            <!-- Main dashboard card -->
            <div
              class="absolute top-0 left-0 right-8 bg-brand-navy-2 border border-white/10 rounded-2xl p-5 shadow-2xl"
            >
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-white/40 text-xs uppercase tracking-wide">
                    Overall Rating
                  </p>
                  <div class="flex items-end gap-2 mt-1">
                    <span class="text-4xl font-extrabold text-white">4.7</span>
                    <div class="flex mb-1">
                      <svg
                        v-for="n in 5"
                        :key="n"
                        class="w-4 h-4"
                        :class="
                          n <= 4 ? 'text-yellow-400' : 'text-yellow-400/50'
                        "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  100% response rate
                </span>
              </div>

              <!-- Mini review feed -->
              <div class="space-y-3">
                <div
                  v-for="preview in reviewPreviews"
                  :key="preview.author"
                  class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div
                    class="w-7 h-7 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0"
                  >
                    <span class="text-brand-blue text-xs font-bold">{{
                      preview.author[0]
                    }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-white text-xs font-medium">{{
                        preview.author
                      }}</span>
                      <div class="flex">
                        <svg
                          v-for="n in preview.rating"
                          :key="n"
                          class="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="text-white/40 text-xs truncate">
                      {{ preview.body }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating alert card -->
            <div
              class="absolute bottom-4 right-0 left-16 bg-brand-navy-2 border border-brand-red/30 rounded-xl p-4 shadow-xl shadow-brand-red/10"
            >
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 rounded-lg bg-brand-red/15 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-brand-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white text-xs font-semibold">
                    New 2-star review flagged
                  </p>
                  <p class="text-white/50 text-xs mt-0.5">
                    Google · AI draft response ready
                  </p>
                </div>
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
  name: 'AlfHero',
  data() {
    return {
      bullets: [
        'Monitors Google, Yelp, Facebook, and AssistedLivingCenter.com daily',
        'Flags negative reviews and drafts AI responses in minutes',
        'Automates review request campaigns for new move-ins',
      ],
      platforms: [
        'Google Reviews',
        'Yelp',
        'Facebook',
        'AssistedLivingCenter.com',
      ],
      reviewPreviews: [
        {
          author: 'Sandra K.',
          rating: 5,
          body: 'Moving my mother here was one of the best decisions we ever made.',
        },
        {
          author: 'James T.',
          rating: 5,
          body: 'We toured six facilities. The difference at Magnolia was obvious.',
        },
        {
          author: 'Patricia W.',
          rating: 2,
          body: 'The care quality has been inconsistent on weekends.',
        },
      ],
    }
  },
})
</script>
