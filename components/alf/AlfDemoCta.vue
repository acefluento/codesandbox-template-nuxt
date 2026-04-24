<template>
  <section id="demo" class="py-28 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-2 to-brand-navy pointer-events-none"></div>
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div class="absolute top-0 right-1/4 w-[400px] h-[300px] bg-emerald-500/3 rounded-full blur-3xl"></div>
    </div>
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Copy -->
        <div v-reveal="'fade-left'">
          <span class="section-label mb-6 inline-flex">Book a demo call</span>

          <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 leading-tight">
            See it running on<br class="hidden lg:block" />
            a <span class="gradient-text">real facility</span>
          </h2>

          <p class="text-white/55 text-base mb-6 leading-relaxed max-w-md">
            We'll show you the dashboard live, walk through how we set up Magnolia Manor, and give you a reputation audit for your facility — no cost, no pressure.
          </p>

          <ul class="space-y-2.5 mb-8">
            <li v-for="proof in proofPoints" :key="proof" class="flex items-center gap-3 text-white/55 text-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
              {{ proof }}
            </li>
          </ul>

          <p class="text-white/40 text-sm mb-10 leading-relaxed max-w-xs">
            Serving assisted living facilities in Northeast Ohio and beyond.
          </p>

          <div class="flex flex-wrap gap-5 text-white/45 text-sm">
            <a href="tel:2168083109" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              216-808-3109
            </a>
            <a href="mailto:hello@acefluento.com" class="flex items-center gap-2 hover:text-white transition-colors">
              <svg class="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              hello@acefluento.com
            </a>
          </div>
        </div>

        <!-- Right: Calendly Embed -->
        <div
          ref="calendlyContainer"
          v-reveal="{ delay: 150 }"
          class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/8 min-h-[700px]"
        >
          <div
            v-if="isCalendlyLoaded"
            class="calendly-inline-widget"
            data-url="https://calendly.com/acefluento/growth-strategy-call-with-nolan?hide_event_type_details=0&hide_gdpr_banner=1&background_color=111827&text_color=ffffff&primary_color=D7263D"
            style="min-width:320px;height:700px;"
          ></div>

          <div v-else class="h-full min-h-[700px] p-8 bg-brand-navy-2/70 flex items-center justify-center">
            <div class="max-w-sm text-center">
              <p class="text-white/70 text-base mb-5">Load the scheduler when you're ready to book your demo.</p>
              <button class="btn-primary" @click="loadCalendly">
                Load booking calendar
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const CALENDLY_SCRIPT_ID = 'calendly-widget-script'
const CALENDLY_STYLE_ID = 'calendly-widget-style'

export default Vue.extend({
  name: 'AlfDemoCta',
  data() {
    return {
      proofPoints: [
        'Magnolia Manor went from 3.2★ to 4.7★ in 90 days',
        '100% review response rate across all platforms',
        'Monitors Google, Yelp, Facebook, and AssistedLivingCenter.com',
      ],
      isCalendlyLoaded: false,
      calendlyObserver: null as IntersectionObserver | null,
    }
  },
  mounted() {
    this.setupCalendlyObserver()
  },
  beforeDestroy() {
    if (this.calendlyObserver) {
      this.calendlyObserver.disconnect()
    }
  },
  methods: {
    setupCalendlyObserver() {
      const container = this.$refs.calendlyContainer as HTMLElement | undefined
      if (!container || typeof window === 'undefined') return

      this.calendlyObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadCalendly()
              if (this.calendlyObserver) {
                this.calendlyObserver.disconnect()
              }
            }
          })
        },
        { rootMargin: '200px 0px' }
      )

      this.calendlyObserver.observe(container)
    },
    async loadCalendly() {
      if (this.isCalendlyLoaded) return

      this.isCalendlyLoaded = true
      await this.$nextTick()

      this.ensureCalendlyStyle()
      await this.ensureCalendlyScript()

      const calendly = (window as Window & { Calendly?: { initInlineWidgets: () => void } }).Calendly
      if (calendly && typeof calendly.initInlineWidgets === 'function') {
        calendly.initInlineWidgets()
      }
    },
    ensureCalendlyStyle() {
      if (document.getElementById(CALENDLY_STYLE_ID)) return

      const link = document.createElement('link')
      link.id = CALENDLY_STYLE_ID
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    },
    ensureCalendlyScript() {
      return new Promise<void>((resolve) => {
        const calendly = (window as Window & { Calendly?: { initInlineWidgets: () => void } }).Calendly
        if (calendly) {
          resolve()
          return
        }

        const existingScript = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null
        if (existingScript) {
          existingScript.addEventListener('load', () => resolve(), { once: true })
          return
        }

        const script = document.createElement('script')
        script.id = CALENDLY_SCRIPT_ID
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.defer = true
        script.onload = () => resolve()
        document.body.appendChild(script)
      })
    },
  },
})
</script>
