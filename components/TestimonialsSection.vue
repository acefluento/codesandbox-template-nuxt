<template>
  <section
    id="testimonials"
    class="py-28 bg-brand-dark-2 relative overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
      ></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="section-label mb-4">Testimonials</span>
        <h2
          class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5"
        >
          Don't Take Our Word For It
        </h2>
        <div class="flex items-center justify-center gap-1 mt-2">
          <span v-for="n in 5" :key="n" class="text-yellow-400 text-xl">★</span>
          <span class="text-white/50 text-sm ml-2"
            >5.0/5 · The Manifest Verified</span
          >
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
            <span v-for="n in 5" :key="n" class="text-yellow-400 text-sm"
              >★</span
            >
          </div>

          <!-- Quote -->
          <p class="text-white/75 text-sm leading-relaxed flex-1 mb-6">
            "{{ t.quote }}"
          </p>

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
              <span
                class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-green-500/10 text-green-400"
              >
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
            'Acefluento LLC has offered my brand Chvd Justin amazing services. Helping us to establish our SEO and google ads account allowing us to better grow our digital audience. The owner, Nolan Coats is very responsive, knowledgeable, and does a great job fulfilling his clients needs.',
          name: 'Chad J. Porter',
          role: 'CEO & Founder, CHVDJUSTIN LLC',
          initials: 'CP',
          avatarClass: 'bg-purple-500/20 text-purple-400',
          result: '5.0 ★ Verified',
        },
        {
          quote:
            'Nolan and the Acefluento team helped us grow our YouTube presence and digital community. The strategy was clear, the execution was fast, and the results speak for themselves.',
          name: 'Euclid Church of Christ',
          role: 'Cleveland, OH',
          initials: 'EC',
          avatarClass: 'bg-brand-blue/20 text-brand-blue',
          result: 'Growing Community',
        },
        {
          quote:
            'Working with Acefluento was a game changer for our online presence. Nolan is professional, responsive, and genuinely cares about delivering results. Highly recommend.',
          name: 'Client',
          role: 'Cleveland-area Business',
          initials: 'CL',
          avatarClass: 'bg-orange-500/20 text-orange-400',
          result: 'Highly Recommended',
        },
      ],
    }
  },
})
</script>
