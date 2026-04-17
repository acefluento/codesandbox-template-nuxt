<template>
  <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-5">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-base text-white">Review Feed</h2>
      <span class="text-white/40 text-xs">{{ filteredReviews.length }} reviews</span>
    </div>

    <!-- Filter tabs -->
    <div class="flex flex-wrap gap-2 mb-5">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
        :class="activeFilter === tab.value
          ? 'bg-brand-blue text-white'
          : 'bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08]'"
        @click="activeFilter = tab.value"
      >
        {{ tab.label }}
        <span v-if="tab.count !== undefined" class="ml-1 opacity-70">({{ tab.count }})</span>
      </button>
    </div>

    <!-- Review cards -->
    <div class="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      <DashReviewCard
        v-for="review in filteredReviews"
        :key="review.id"
        :review="review"
        @open-draft="$emit('open-draft', $event)"
      />
      <div v-if="filteredReviews.length === 0" class="py-12 text-center text-white/30 text-sm">
        No reviews match this filter.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { reviews } from '~/data/alfDashboard'
import type { Review, Platform } from '~/data/alfDashboard'

type FilterValue = 'all' | 'flagged' | Platform

import DashReviewCard from '~/components/alf/dashboard/DashReviewCard.vue'

export default Vue.extend({
  name: 'DashReviewFeed',
  components: { DashReviewCard },
  data() {
    return {
      activeFilter: 'all' as FilterValue,
      allReviews: reviews,
    }
  },
  computed: {
    filteredReviews(): Review[] {
      if (this.activeFilter === 'all') return this.allReviews
      if (this.activeFilter === 'flagged') return this.allReviews.filter((r) => r.flagged)
      return this.allReviews.filter((r) => r.platform === this.activeFilter)
    },
    tabs() {
      const flaggedCount = this.allReviews.filter((r) => r.flagged).length
      return [
        { value: 'all', label: 'All', count: this.allReviews.length },
        { value: 'flagged', label: 'Flagged', count: flaggedCount },
        { value: 'google', label: 'Google' },
        { value: 'yelp', label: 'Yelp' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'assistedlivingcenter', label: 'ALC' },
      ] as Array<{ value: FilterValue; label: string; count?: number }>
    },
  },
})
</script>
