<template>
  <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-5">
    <div class="flex items-center justify-between mb-5">
      <h2 class="font-bold text-base text-white">
        Sentiment Trend — Last 6 Months
      </h2>
      <div class="flex items-center gap-4 text-xs text-white/40">
        <span class="flex items-center gap-1.5"
          ><span
            class="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"
          ></span
          >Positive</span
        >
        <span class="flex items-center gap-1.5"
          ><span
            class="w-2.5 h-2.5 rounded-sm bg-brand-blue/60 inline-block"
          ></span
          >Neutral</span
        >
        <span class="flex items-center gap-1.5"
          ><span class="w-2.5 h-2.5 rounded-sm bg-brand-red inline-block"></span
          >Negative</span
        >
      </div>
    </div>

    <div class="space-y-3">
      <div
        v-for="point in history"
        :key="point.month"
        class="flex items-center gap-3"
      >
        <span class="text-white/40 text-xs w-7 flex-shrink-0">{{
          point.month
        }}</span>
        <div class="flex-1 flex rounded-lg overflow-hidden h-6">
          <div
            class="bg-emerald-500 flex items-center justify-end pr-1.5 transition-all duration-700"
            :style="{ width: point.positive + '%' }"
          >
            <span
              v-if="point.positive >= 15"
              class="text-white text-xs font-medium"
              >{{ point.positive }}%</span
            >
          </div>
          <div
            class="bg-brand-blue/50 transition-all duration-700"
            :style="{ width: point.neutral + '%' }"
          ></div>
          <div
            class="bg-brand-red transition-all duration-700"
            :style="{ width: point.negative + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-emerald-400"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
      Positive sentiment up 44 points since August
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sentimentHistory } from '~/data/alfDashboard'

export default Vue.extend({
  name: 'DashSentimentChart',
  data() {
    return {
      history: sentimentHistory,
    }
  },
})
</script>
