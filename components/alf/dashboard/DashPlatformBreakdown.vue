<template>
  <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-5">
    <h2 class="font-bold text-sm text-white mb-4">Platform Ratings</h2>

    <div class="space-y-4">
      <div v-for="platform in platforms" :key="platform.platform">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-white/70 text-xs font-medium">{{
            platform.displayName
          }}</span>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold" :class="platform.accentColor"
              >{{ platform.currentRating }}★</span
            >
            <span class="text-white/30 text-xs"
              >({{ platform.reviewCount }})</span
            >
          </div>
        </div>
        <div class="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-700"
            :class="barColor[platform.platform]"
            :style="{ width: (platform.currentRating / 5) * 100 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { platformStats } from '~/data/alfDashboard'
import type { Platform } from '~/data/alfDashboard'

export default Vue.extend({
  name: 'DashPlatformBreakdown',
  data() {
    return {
      platforms: platformStats,
      barColor: {
        google: 'bg-yellow-400',
        yelp: 'bg-brand-red',
        facebook: 'bg-blue-400',
        assistedlivingcenter: 'bg-emerald-500',
      } as Record<Platform, string>,
    }
  },
})
</script>
