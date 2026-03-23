<template>
  <section id="results" class="py-28 bg-brand-dark-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">Client Results</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Real Numbers. <span class="gradient-text">Real Businesses.</span>
        </h2>
        <p class="text-white/55 text-lg max-w-2xl mx-auto">
          Real clients. Real campaigns. Real results — right here in Cleveland and beyond.
        </p>
      </div>

      <!-- Case Study Cards -->
      <div class="grid lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(study, i) in caseStudies"
          :key="study.brand"
          class="relative bg-brand-dark-3 border border-white/8 rounded-2xl overflow-hidden group hover:border-brand-blue/30 transition-all duration-300"
          :class="i === 1 ? 'lg:scale-105 border-brand-blue/30 shadow-xl shadow-brand-blue/10' : ''"
        >
          <!-- Top accent -->
          <div class="h-1 w-full" :class="study.accentColor"></div>
          <div class="p-8">
            <!-- Brand + niche -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="font-bold text-lg">{{ study.brand }}</div>
                <div class="text-white/40 text-sm">{{ study.niche }}</div>
              </div>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold"
                :class="study.tagClass"
              >{{ study.tag }}</span>
            </div>

            <!-- Metrics -->
            <div class="space-y-4 mb-6">
              <div
                v-for="metric in study.metrics"
                :key="metric.label"
                class="flex items-center justify-between py-3 border-b border-white/6 last:border-0"
              >
                <span class="text-white/50 text-sm">{{ metric.label }}</span>
                <span class="font-bold text-lg" :class="metric.green ? 'text-green-400' : 'text-white'">
                  {{ metric.value }}
                </span>
              </div>
            </div>

            <!-- Quote -->
            <p class="text-white/45 text-sm italic leading-relaxed">"{{ study.quote }}"</p>
          </div>
        </div>
      </div>

      <!-- Big stat bar -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
        <div
          v-for="stat in globalStats"
          :key="stat.label"
          class="bg-brand-dark-3 px-8 py-8 text-center"
        >
          <div class="text-4xl font-black mb-2" :class="stat.color">{{ stat.value }}</div>
          <div class="text-white/50 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResultsSection',
  data() {
    return {
      caseStudies: [
        {
          brand: 'CHVDJUSTIN (Wearpack)',
          niche: 'Fashion Tech · eCommerce',
          tag: 'Fashion',
          tagClass: 'bg-purple-500/15 text-purple-400',
          accentColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
          metrics: [
            { label: 'Services', value: 'Meta Ads + SEO', green: false },
            { label: 'FB Campaigns', value: 'Active & Scaling', green: true },
            { label: 'Website SEO', value: 'Fully Optimized', green: true },
            { label: 'Product Launches', value: 'Successful', green: true },
          ],
          quote: 'Acefluento LLC has offered my brand Chvd Justin amazing services, helping us establish our SEO and grow our digital audience.',
        },
        {
          brand: 'Euclid Church of Christ',
          niche: 'Non-Profit · Community',
          tag: 'Non-Profit',
          tagClass: 'bg-brand-blue/15 text-brand-blue',
          accentColor: 'bg-gradient-to-r from-brand-blue to-cyan-400',
          metrics: [
            { label: 'Services', value: 'Social + YouTube', green: false },
            { label: 'YouTube Growth', value: 'Campaign Live', green: true },
            { label: 'Subscriber Push', value: 'Ongoing', green: true },
            { label: 'Community Reach', value: 'Expanded', green: true },
          ],
          quote: 'Acefluento helped us build a real digital presence and grow our congregation's online community effectively.',
        },
        {
          brand: 'The Manifest Recognition',
          niche: 'Industry · Recognition',
          tag: 'Award',
          tagClass: 'bg-orange-500/15 text-orange-400',
          accentColor: 'bg-gradient-to-r from-orange-500 to-yellow-400',
          metrics: [
            { label: 'Ranking', value: 'Top 20', green: true },
            { label: 'Overall Rating', value: '5.0 / 5.0', green: true },
            { label: 'Service Excellence', value: '5.0 ★', green: true },
            { label: 'Would Recommend', value: '5.0 ★', green: true },
          ],
          quote: 'Named a Top 20 Event Marketing Company in Elyria by The Manifest — recognized for service excellence and client results.',
        },
      ],
      globalStats: [
        { value: '5.0', label: 'The Manifest Rating', color: 'text-white' },
        { value: 'Top 20', label: 'Event Marketing (The Manifest)', color: 'text-green-400' },
        { value: '100%', label: 'Client Satisfaction', color: 'text-brand-blue' },
        { value: 'Est. 2022', label: 'Cleveland, OH Based', color: 'text-orange-400' },
      ],
    }
  },
})
</script>
