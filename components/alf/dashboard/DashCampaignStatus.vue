<template>
  <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-5">
    <div class="flex items-center justify-between mb-1">
      <h2 class="font-bold text-sm text-white">Review Request Campaigns</h2>
    </div>
    <p class="text-white/35 text-xs mb-4">
      18 sent this month · 3 reviews generated
    </p>

    <div class="space-y-2.5">
      <div
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="flex items-center gap-3"
      >
        <!-- Avatar -->
        <div
          class="w-7 h-7 rounded-full bg-brand-blue/15 flex items-center justify-center flex-shrink-0"
        >
          <span class="text-brand-blue text-xs font-bold">{{
            campaign.residentName
              .split(' ')
              .map((p) => p[0])
              .join('')
          }}</span>
        </div>

        <!-- Name + channel -->
        <div class="flex-1 min-w-0">
          <p class="text-white text-xs font-medium truncate">
            {{ campaign.residentName }}
          </p>
          <p class="text-white/30 text-xs">
            {{ campaign.channel.toUpperCase() }} ·
            {{ platformLabel[campaign.platform] }}
          </p>
        </div>

        <!-- Status badge -->
        <span
          class="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
          :class="statusStyles[campaign.status]"
        >
          {{ campaign.status }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { reviewCampaigns } from '~/data/alfDashboard'
import type { Platform } from '~/data/alfDashboard'

type CampaignStatus = 'sent' | 'opened' | 'clicked' | 'reviewed' | 'queued'

export default Vue.extend({
  name: 'DashCampaignStatus',
  data() {
    return {
      campaigns: reviewCampaigns,
      platformLabel: {
        google: 'Google',
        yelp: 'Yelp',
        facebook: 'Facebook',
        assistedlivingcenter: 'ALC',
      } as Record<Platform, string>,
      statusStyles: {
        queued: 'bg-white/[0.07] text-white/40',
        sent: 'bg-brand-blue/15 text-brand-blue',
        opened: 'bg-yellow-400/15 text-yellow-400',
        clicked: 'bg-purple-400/15 text-purple-400',
        reviewed: 'bg-emerald-500/15 text-emerald-400',
      } as Record<CampaignStatus, string>,
    }
  },
})
</script>
