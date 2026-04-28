<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-5"
    >
      <div class="flex items-start justify-between mb-3">
        <div
          class="w-9 h-9 rounded-xl flex items-center justify-center"
          :class="stat.iconBg"
        >
          <svg class="w-5 h-5" :class="stat.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="stat.icon" />
          </svg>
        </div>
        <span v-if="stat.alert" class="flex items-center gap-1 text-brand-red text-xs font-medium">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          Action
        </span>
      </div>
      <p class="text-2xl font-extrabold text-white mb-0.5">{{ stat.value }}</p>
      <p class="text-white/40 text-xs">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dashboardStats } from '~/data/alfDashboard'

export default Vue.extend({
  name: 'DashStatsBar',
  data() {
    return {
      stats: [
        {
          label: 'Overall Rating',
          value: `${dashboardStats.overallRating}★`,
          icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
          iconBg: 'bg-yellow-400/15',
          iconColor: 'text-yellow-400',
          alert: false,
        },
        {
          label: 'Response Rate',
          value: `${dashboardStats.responseRate}%`,
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
          iconBg: 'bg-emerald-500/15',
          iconColor: 'text-emerald-400',
          alert: false,
        },
        {
          label: 'New Reviews This Month',
          value: String(dashboardStats.newReviewsThisMonth),
          icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
          iconBg: 'bg-brand-blue/15',
          iconColor: 'text-brand-blue',
          alert: false,
        },
        {
          label: 'Flagged Unresponded',
          value: String(dashboardStats.flaggedUnresponded),
          icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
          iconBg: 'bg-brand-red/15',
          iconColor: 'text-brand-red',
          alert: true,
        },
      ],
    }
  },
})
</script>
