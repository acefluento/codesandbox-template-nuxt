<template>
  <section id="system" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Our system</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          A clearer path from<br /><span class="gradient-text">attention to action</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          Acefluento combines positioning, digital presence, and follow-up into one conversion-focused system.
        </p>
      </div>

      <!-- System cards -->
      <div class="grid lg:grid-cols-3 gap-6 relative">
        <!-- Connecting line (desktop only) -->
        <div class="hidden lg:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-brand-blue/30 via-brand-red/30 to-brand-emerald/30 z-10"></div>

        <div
          v-for="(card, i) in cards"
          :key="card.title"
          class="relative bg-brand-navy border rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300"
          :class="cardBorderClass(i)"
        >
          <!-- Step number + icon -->
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center"
              :class="iconBgClass(i)"
            >
              <svg class="w-5 h-5" :class="iconColorClass(i)" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="card.iconPath" />
              </svg>
            </div>
            <span class="text-xs font-semibold text-white/25 uppercase tracking-widest">Step {{ i + 1 }}</span>
          </div>

          <h3 class="text-2xl font-bold mb-2">{{ card.title }}</h3>
          <p class="text-white/50 text-sm mb-6 leading-relaxed">{{ card.subtitle }}</p>

          <ul class="space-y-2.5">
            <li
              v-for="bullet in card.bullets"
              :key="bullet"
              class="flex items-center gap-2.5 text-sm text-white/60"
            >
              <div class="w-1.5 h-1.5 rounded-full flex-shrink-0" :class="dotClass(i)"></div>
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Closing differentiator -->
      <div class="text-center mt-14 max-w-xl mx-auto">
        <p class="text-white/70 text-base font-medium leading-relaxed mb-4">
          We don't just build websites or run ads —<br class="hidden sm:block" />
          we build systems that turn attention into clients.
        </p>
        <p class="text-white/35 text-sm">
          This is not random marketing support. It's a connected growth system.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SystemSection',
  data() {
    return {
      cards: [
        {
          title: 'Attract',
          subtitle: 'Bring in the right attention with the right message.',
          bullets: ['Meta ads', 'Local visibility', 'Targeted campaigns', 'Strategic content direction'],
          iconPath: 'M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M12 8v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z',
        },
        {
          title: 'Convert',
          subtitle: 'Turn visitors into inquiries, bookings, and buyers.',
          bullets: ['High-converting landing pages', 'Website messaging', 'Offer framing', 'UX focused on action'],
          iconPath: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
        },
        {
          title: 'Follow Through',
          subtitle: 'Keep leads from slipping through the cracks.',
          bullets: ['Lead routing', 'Automation', 'Retargeting', 'Nurture systems', 'Booking flow improvements'],
          iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        },
      ],
    }
  },
  methods: {
    cardBorderClass(i: number): string {
      const classes = [
        'border-brand-blue/20 hover:border-brand-blue/40',
        'border-brand-red/20 hover:border-brand-red/40',
        'border-brand-emerald/20 hover:border-brand-emerald/40',
      ]
      return classes[i]
    },
    iconBgClass(i: number): string {
      const classes = ['bg-brand-blue/15', 'bg-brand-red/15', 'bg-brand-emerald/15']
      return classes[i]
    },
    iconColorClass(i: number): string {
      const classes = ['text-brand-blue', 'text-brand-red', 'text-brand-emerald']
      return classes[i]
    },
    dotClass(i: number): string {
      const classes = ['bg-brand-blue/60', 'bg-brand-red/60', 'bg-brand-emerald/60']
      return classes[i]
    },
  },
})
</script>
