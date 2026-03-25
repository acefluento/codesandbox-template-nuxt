<template>
  <section id="services" class="py-28 relative">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/6 rounded-full blur-3xl translate-x-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label mb-4">The System</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Inside the <span class="gradient-text">Occupancy Growth System</span>
        </h2>
        <p class="text-white/55 text-lg max-w-2xl mx-auto">
          Six digital levers we activate to move your occupancy needle — fast.
          Not guesswork. Not generic marketing. A purpose-built system for care facilities.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="card-dark group cursor-default"
        >
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <span class="text-2xl">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-white/55 text-sm leading-relaxed mb-5">{{ service.description }}</p>
          <ul class="space-y-2">
            <li
              v-for="point in service.points"
              :key="point"
              class="flex items-center gap-2 text-sm text-white/50"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          icon: '🗺️',
          iconBg: 'bg-brand-blue/15',
          title: 'Local SEO & Google Business',
          description:
            'Be the first facility families find when they search nearby. We put you at the top of local results where decisions are made.',
          points: [
            'Google Business Profile optimization',
            'Local keyword targeting',
            'Map pack ranking',
            'Review management setup',
          ],
        },
        {
          icon: '🎯',
          iconBg: 'bg-purple-500/15',
          title: 'Targeted Digital Ads',
          description:
            'Reach families actively researching care options right now — on Facebook, Instagram, and Google — with precise demographic targeting.',
          points: [
            'Facebook & Instagram campaigns',
            'Google search ads',
            'Adult-child caregiver targeting',
            'Budget optimization & ROAS',
          ],
        },
        {
          icon: '🌐',
          iconBg: 'bg-green-500/15',
          title: 'Website Conversion',
          description:
            'Turn website visitors into inquiry calls and tour bookings. A beautiful site means nothing if it doesn\'t convert.',
          points: [
            'CRO-focused redesign',
            'Clear CTAs & inquiry forms',
            'Mobile-first optimization',
            'Fast load speeds',
          ],
        },
        {
          icon: '⭐',
          iconBg: 'bg-orange-500/15',
          title: 'Reputation Management',
          description:
            'Build the online trust that converts families from curious to committed. Reviews are the #1 factor in care facility selection.',
          points: [
            'Google review generation',
            'Response strategy',
            'Reputation monitoring',
            'Trust signal placement',
          ],
        },
        {
          icon: '📖',
          iconBg: 'bg-cyan-500/15',
          title: 'Content & Trust-Building',
          description:
            'Educate families, demonstrate care quality, and build the authority that makes choosing your facility an easy decision.',
          points: [
            'Blog & FAQ content',
            'Video testimonials',
            'Photo & virtual tours',
            'Social proof systems',
          ],
        },
        {
          icon: '📊',
          iconBg: 'bg-pink-500/15',
          title: 'Tracking & Reporting',
          description:
            'Know exactly which channels are filling rooms and which aren\'t. Full transparency, monthly occupancy reports, no fluff.',
          points: [
            'Call & inquiry tracking',
            'Lead source attribution',
            'Monthly occupancy reports',
            'ROI transparency',
          ],
        },
      ],
    }
  },
})
</script>
