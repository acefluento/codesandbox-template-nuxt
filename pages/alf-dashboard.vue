<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans flex flex-col">

    <!-- Dashboard topbar -->
    <header class="bg-brand-navy-2 border-b border-white/[0.08] px-6 py-4 flex items-center justify-between flex-shrink-0 z-20">
      <div class="flex items-center gap-4">
        <a href="/" class="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Acefluento" class="h-7 w-auto" width="140" height="28" />
        </a>
        <div class="hidden sm:flex items-center gap-2 text-white/30 text-xs">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-white/60 font-medium">Magnolia Manor</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-medium">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Demo Mode
        </span>
        <a href="/alf-reputation-engine#demo" class="btn-primary text-xs px-4 py-2">
          Book a Real Demo
        </a>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">

      <!-- Sidebar (desktop) -->
      <aside class="hidden lg:flex flex-col w-56 bg-brand-navy-2 border-r border-white/[0.08] p-5 flex-shrink-0">
        <nav class="space-y-1">
          <a
            v-for="item in sidebarItems"
            :key="item.label"
            href="#"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            :class="item.active
              ? 'bg-brand-blue/15 text-brand-blue'
              : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'"
            @click.prevent="() => {}"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
            </svg>
            {{ item.label }}
            <span v-if="item.badge" class="ml-auto text-xs px-1.5 py-0.5 rounded-full bg-brand-red/15 text-brand-red">
              {{ item.badge }}
            </span>
          </a>
        </nav>

        <div class="mt-auto pt-5 border-t border-white/[0.07]">
          <div class="px-3 py-2.5">
            <p class="text-white/60 text-xs font-medium">Magnolia Manor</p>
            <p class="text-white/30 text-xs">Northeast Ohio · ALF</p>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 overflow-auto p-6 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-white">Reputation Dashboard</h1>
            <p class="text-white/40 text-sm">Last updated: Jan 14, 2024</p>
          </div>
        </div>

        <!-- Stats bar -->
        <DashStatsBar />

        <!-- Main grid -->
        <div class="grid lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <DashReviewFeed @open-draft="openAiModal" />
          </div>
          <div class="space-y-6">
            <DashPlatformBreakdown />
            <DashCampaignStatus />
          </div>
        </div>

        <!-- Sentiment chart -->
        <DashSentimentChart />

        <!-- CTA strip -->
        <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p class="font-semibold text-white text-sm">This is a live demo for Magnolia Manor.</p>
            <p class="text-white/40 text-xs mt-0.5">Ready to set this up for your facility? Book a call and we'll get you live in 48 hours.</p>
          </div>
          <a href="/alf-reputation-engine#demo" class="btn-primary text-sm flex-shrink-0">
            Book a Demo Call
          </a>
        </div>
      </main>
    </div>

    <!-- AI Response Modal -->
    <DashAiModal
      v-if="modalOpen && activeReview"
      :review="activeReview"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Review } from '~/data/alfDashboard'

import DashStatsBar from '~/components/alf/dashboard/DashStatsBar.vue'
import DashReviewFeed from '~/components/alf/dashboard/DashReviewFeed.vue'
import DashPlatformBreakdown from '~/components/alf/dashboard/DashPlatformBreakdown.vue'
import DashCampaignStatus from '~/components/alf/dashboard/DashCampaignStatus.vue'
import DashSentimentChart from '~/components/alf/dashboard/DashSentimentChart.vue'
import DashAiModal from '~/components/alf/dashboard/DashAiModal.vue'

export default Vue.extend({
  name: 'AlfDashboard',
  components: { DashStatsBar, DashReviewFeed, DashPlatformBreakdown, DashCampaignStatus, DashSentimentChart, DashAiModal },
  layout: false,
  head() {
    return {
      title: 'ALF Reputation Engine — Dashboard Demo | Magnolia Manor',
      meta: [{ name: 'robots', content: 'noindex,nofollow' }],
    }
  },
  data() {
    return {
      modalOpen: false,
      activeReview: null as Review | null,
      sidebarItems: [
        {
          label: 'Reviews',
          icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
          active: true,
          badge: '2',
        },
        {
          label: 'Sentiment',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          active: false,
          badge: null,
        },
        {
          label: 'Campaigns',
          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          active: false,
          badge: null,
        },
        {
          label: 'Settings',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
          active: false,
          badge: null,
        },
      ],
    }
  },
  methods: {
    openAiModal(review: Review) {
      this.activeReview = review
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
      this.activeReview = null
    },
  },
})
</script>
