<template>
  <section id="testimonials" class="py-28 bg-brand-dark-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="section-label mb-4">Testimonials</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Don't Take Our Word For It
        </h2>
        <div class="flex items-center justify-center gap-1 mt-2">
          <span v-for="n in 5" :key="n" class="text-yellow-400 text-xl">★</span>
          <span class="text-white/50 text-sm ml-2">4.9/5 from 120+ reviews</span>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="bg-brand-dark-3 border border-white/8 rounded-2xl p-7 flex flex-col hover:border-brand-blue/25 transition-all duration-300 group"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="n in 5" :key="n" class="text-yellow-400 text-sm">★</span>
          </div>

          <!-- Quote -->
          <p class="text-white/75 text-sm leading-relaxed flex-1 mb-6">"{{ t.quote }}"</p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
              :class="t.avatarClass"
            >
              {{ t.initials }}
            </div>
            <div>
              <div class="font-semibold text-sm">{{ t.name }}</div>
              <div class="text-white/40 text-xs">{{ t.role }}</div>
            </div>
            <div class="ml-auto">
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-green-500/10 text-green-400">
                {{ t.result }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          quote:
            'We\'d burned $80K on agencies that promised results and delivered excuses. Acefluento turned our Meta account into our #1 revenue channel in 6 weeks.',
          name: 'Marcus L.',
          role: 'Founder, FitFlow Apparel',
          initials: 'ML',
          avatarClass: 'bg-purple-500/20 text-purple-400',
          result: '+284% Revenue',
        },
        {
          quote:
            'The creative strategy team is on another level. Our CTR went from 0.8% to 3.4%, and cost per lead dropped 58%. Best investment we\'ve made.',
          name: 'Sarah K.',
          role: 'CMO, TechVault',
          initials: 'SK',
          avatarClass: 'bg-brand-blue/20 text-brand-blue',
          result: '-58% CPL',
        },
        {
          quote:
            'I was skeptical about paying for ads management, but our ROAS went from 1.8x to 5.9x. The team literally pays for itself 5x over every month.',
          name: 'James R.',
          role: 'CEO, LuxeDerm',
          initials: 'JR',
          avatarClass: 'bg-orange-500/20 text-orange-400',
          result: '5.9× ROAS',
        },
        {
          quote:
            'Finally an agency that speaks plain English and shows actual results. Our weekly reports are crystal clear and our revenue has been climbing every single week.',
          name: 'Priya M.',
          role: 'Head of Growth, Stackhouse',
          initials: 'PM',
          avatarClass: 'bg-green-500/20 text-green-400',
          result: '3× Pipeline',
        },
        {
          quote:
            'We launched cold into a new market and scaled to $200K/month in 90 days. The audience research and creative testing were exceptional.',
          name: 'Alex T.',
          role: 'Co-Founder, NŌRD Fashion',
          initials: 'AT',
          avatarClass: 'bg-pink-500/20 text-pink-400',
          result: '$200K/mo',
        },
        {
          quote:
            'The retargeting system they built is a machine. 68% of our customers come back for a second purchase within 30 days. That\'s unheard of in our space.',
          name: 'Elena V.',
          role: 'Founder, Velara Beauty',
          initials: 'EV',
          avatarClass: 'bg-cyan-500/20 text-cyan-400',
          result: '68% Retention',
        },
      ],
    }
  },
})
</script>
