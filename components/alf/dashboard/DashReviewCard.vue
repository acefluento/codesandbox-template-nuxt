<template>
  <div
    class="bg-brand-navy-2 border rounded-2xl p-5 transition-colors"
    :class="
      review.flagged && !review.responded
        ? 'border-brand-red/30'
        : 'border-white/[0.08]'
    "
  >
    <div class="flex items-start justify-between gap-3 mb-3">
      <div class="flex items-center gap-2.5">
        <!-- Platform badge -->
        <span
          class="text-xs px-2.5 py-1 rounded-lg font-medium"
          :class="
            platformStyles[review.platform].bg +
            ' ' +
            platformStyles[review.platform].text
          "
        >
          {{ platformLabel[review.platform] }}
        </span>
        <!-- Stars -->
        <div class="flex">
          <svg
            v-for="n in 5"
            :key="n"
            class="w-3.5 h-3.5"
            :class="n <= review.rating ? 'text-yellow-400' : 'text-white/15'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
      </div>

      <!-- Status badges -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <span
          v-if="review.flagged && !review.responded"
          class="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-brand-red/15 text-brand-red border border-brand-red/20 font-medium"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          Flagged
        </span>
        <span
          v-if="review.responded"
          class="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-medium"
        >
          Responded
        </span>
        <span class="text-xs text-white/30">{{ formatDate(review.date) }}</span>
      </div>
    </div>

    <p class="text-white font-medium text-sm mb-1">{{ review.author }}</p>
    <p class="text-white/55 text-sm leading-relaxed line-clamp-3 mb-4">
      {{ review.body }}
    </p>

    <button
      v-if="!review.responded && review.aiDraftAvailable"
      class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
      @click="$emit('open-draft', review)"
    >
      <svg
        class="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
      Draft AI Response
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { Review, Platform } from '~/data/alfDashboard'

export default Vue.extend({
  name: 'DashReviewCard',
  props: {
    review: {
      type: Object as PropType<Review>,
      required: true,
    },
  },
  data() {
    return {
      platformLabel: {
        google: 'Google',
        yelp: 'Yelp',
        facebook: 'Facebook',
        assistedlivingcenter: 'ALC',
      } as Record<Platform, string>,
      platformStyles: {
        google: { bg: 'bg-yellow-400/10', text: 'text-yellow-400' },
        yelp: { bg: 'bg-brand-red/10', text: 'text-brand-red' },
        facebook: { bg: 'bg-blue-400/10', text: 'text-blue-400' },
        assistedlivingcenter: {
          bg: 'bg-emerald-500/10',
          text: 'text-emerald-400',
        },
      } as Record<Platform, { bg: string; text: string }>,
    }
  },
  methods: {
    formatDate(dateStr: string): string {
      const [year, month, day] = dateStr.split('-').map(Number)
      const d = new Date(year, month - 1, day)
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    },
  },
})
</script>
