<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="relative max-w-3xl mx-auto px-6">
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-6 inline-flex">Questions, answered</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
          FAQs
        </h2>
      </div>

      <div v-stagger="80" class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          <button
            class="w-full text-left px-7 py-5 flex items-center justify-between gap-4 group"
            @click="toggle(i)"
          >
            <span
              class="font-semibold text-base group-hover:text-white/90 transition-colors"
            >
              {{ faq.question }}
            </span>
            <svg
              class="w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === i }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-if="openIndex === i" class="px-7 pb-6">
            <p class="text-white/55 text-sm leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { alfFaqs } from '~/data/alfContent'

export default Vue.extend({
  name: 'AlfFaq',
  data() {
    return {
      openIndex: 0 as number | null,
      faqs: alfFaqs,
    }
  },
  methods: {
    toggle(i: number) {
      this.openIndex = this.openIndex === i ? null : i
    },
  },
})
</script>
