<template>
  <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click.self="$emit('close')">
    <div class="max-w-2xl w-full bg-brand-navy-2 rounded-2xl border border-white/10 p-8 shadow-2xl">

      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h2 class="font-bold text-base text-white">AI-Drafted Response</h2>
            <p class="text-white/40 text-xs">Review and edit before publishing</p>
          </div>
        </div>
        <button class="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/10 flex items-center justify-center transition-colors" @click="$emit('close')">
          <svg class="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Original review -->
      <div class="bg-brand-navy border border-white/[0.07] rounded-xl p-5 mb-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs px-2.5 py-1 rounded-lg font-medium" :class="platformBg + ' ' + platformText">
            {{ platformLabel }}
          </span>
          <div class="flex">
            <svg
              v-for="n in 5"
              :key="n"
              class="w-3.5 h-3.5"
              :class="n <= review.rating ? 'text-yellow-400' : 'text-white/15'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="text-white/50 text-xs font-medium">{{ review.author }}</span>
        </div>
        <p class="text-white/60 text-sm leading-relaxed">{{ review.body }}</p>
      </div>

      <!-- AI Draft -->
      <div class="mb-5">
        <div class="flex items-center justify-between mb-2">
          <p class="text-white/50 text-xs uppercase tracking-wide font-medium">AI Draft Response</p>
          <span v-if="draft" class="text-xs px-2.5 py-1 rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/20 capitalize">
            {{ draft.tone }}
          </span>
        </div>
        <div v-if="draft" class="bg-brand-navy border border-white/10 rounded-xl p-5 text-sm text-white/80 leading-relaxed">
          {{ draft.draft }}
        </div>
        <div v-else class="bg-brand-navy border border-white/10 rounded-xl p-5 text-sm text-white/30 italic">
          No draft available for this review.
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button
          v-if="draft"
          class="btn-primary text-sm gap-2"
          :class="copied ? 'bg-emerald-600 hover:bg-emerald-600' : ''"
          @click="copyDraft"
        >
          <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ copied ? 'Copied!' : 'Copy to Clipboard' }}
        </button>
        <button class="btn-secondary text-sm" @click="$emit('close')">Close</button>
      </div>

      <p class="text-white/30 text-xs mt-4">Review and edit before publishing. This is a draft — your voice and judgment are the final step.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { Review, AiDraftResponse, Platform } from '~/data/alfDashboard'
import { aiDraftResponses } from '~/data/alfDashboard'

type ModalThis = Vue & { review: Review; draft: AiDraftResponse | null; copied: boolean }

export default Vue.extend({
  name: 'DashAiModal',
  props: {
    review: {
      type: Object as PropType<Review>,
      required: true,
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  computed: {
    draft(this: ModalThis) {
      return aiDraftResponses.find((d) => d.reviewId === this.review.id) ?? null
    },
    platformLabel(this: ModalThis): string {
      const labels: Record<Platform, string> = {
        google: 'Google',
        yelp: 'Yelp',
        facebook: 'Facebook',
        assistedlivingcenter: 'ALC',
      }
      return labels[this.review.platform]
    },
    platformBg(this: ModalThis): string {
      const bgs: Record<Platform, string> = {
        google: 'bg-yellow-400/10',
        yelp: 'bg-brand-red/10',
        facebook: 'bg-blue-400/10',
        assistedlivingcenter: 'bg-emerald-500/10',
      }
      return bgs[this.review.platform]
    },
    platformText(this: ModalThis): string {
      const texts: Record<Platform, string> = {
        google: 'text-yellow-400',
        yelp: 'text-brand-red',
        facebook: 'text-blue-400',
        assistedlivingcenter: 'text-emerald-400',
      }
      return texts[this.review.platform]
    },
  },
  mounted() {
    document.body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  },
  methods: {
    async copyDraft(this: ModalThis) {
      if (!this.draft) return
      try {
        await navigator.clipboard.writeText(this.draft.draft)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch {
        // clipboard not available in this context
      }
    },
  },
})
</script>
