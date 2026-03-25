<template>
  <main>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <span class="section-label mb-6 inline-flex">What We Do</span>
        <h1 class="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
          Tools We Use<br />
          <span class="gradient-text">Inside the System</span>
        </h1>
        <p class="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          We don't sell these as isolated services. They're the individual levers inside our
          Occupancy Growth System — deployed strategically to fill your rooms.
        </p>
        <div class="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 text-sm">
          <svg class="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Looking for the full system? <a href="/occupancy-growth-system" class="text-brand-blue hover:underline ml-1">See the Occupancy Growth System →</a>
        </div>
      </div>
    </section>

    <!-- Services List -->
    <section class="pb-28 border-t border-white/5">
      <div class="max-w-5xl mx-auto px-6 pt-16 space-y-10">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-brand-dark-3 border border-white/8 rounded-2xl p-8 md:p-10 hover:border-brand-blue/30 transition-all duration-300 group"
        >
          <div class="flex flex-wrap items-start gap-6">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl transition-all group-hover:scale-110" :class="service.iconBg">
              {{ service.icon }}
            </div>
            <!-- Content -->
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{{ service.title }}</h2>
              <p class="text-white/55 leading-relaxed mb-6">{{ service.description }}</p>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 class="text-xs uppercase tracking-widest text-white/35 font-semibold mb-3">What It Includes</h4>
                  <ul class="space-y-2">
                    <li v-for="point in service.points" :key="point" class="flex items-center gap-2 text-sm text-white/55">
                      <span class="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                      {{ point }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-widest text-white/35 font-semibold mb-3">How It Fills Rooms</h4>
                  <p class="text-white/55 text-sm leading-relaxed">{{ service.howItHelps }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Framing CTA -->
    <section class="pb-20">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="bg-brand-blue/8 border border-brand-blue/20 rounded-2xl p-10">
          <h2 class="text-3xl font-extrabold mb-4">These Work Best Together</h2>
          <p class="text-white/60 mb-8 leading-relaxed">
            Any one of these services can move the needle. But the real results come when
            they operate as a coordinated system — each one amplifying the others.
            That's what the Occupancy Growth System delivers.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/occupancy-growth-system" class="btn-primary gap-2">
              See the Full System
            </a>
            <a href="#contact" class="btn-secondary gap-2">
              Book Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          icon: '🗺️',
          iconBg: 'bg-brand-blue/15',
          title: 'Local SEO',
          description:
            'Search engine optimization focused on your local market — so families searching for assisted living in your area find your facility first.',
          points: [
            'Local keyword research & targeting',
            'On-page SEO optimization',
            'Google Business Profile setup & management',
            'Local citation building',
            'Map pack ranking strategy',
          ],
          howItHelps:
            'Families in your city are actively searching "assisted living near me" every day. Local SEO puts your facility at the top of those results before they call your competitor.',
        },
        {
          icon: '🎯',
          iconBg: 'bg-purple-500/15',
          title: 'Digital Advertising',
          description:
            'Paid campaigns on Facebook, Instagram, and Google that put your facility in front of adult children actively researching care options for their parents.',
          points: [
            'Facebook & Instagram ad campaigns',
            'Google search ad management',
            'Audience targeting (adult caregiver demographics)',
            'Budget optimization',
            'Retargeting sequences',
          ],
          howItHelps:
            'While SEO builds long-term visibility, ads create immediate inquiries. We target the people who are searching right now — not someday.',
        },
        {
          icon: '🌐',
          iconBg: 'bg-green-500/15',
          title: 'Web Design & Development',
          description:
            'Websites built to convert visitors into inquiry calls and tour bookings — not just look good. Fast, mobile-first, and built around the care-seeker journey.',
          points: [
            'New website design & build',
            'CRO (conversion rate optimization)',
            'Mobile-first responsive design',
            'Contact forms & inquiry capture',
            'Speed optimization',
          ],
          howItHelps:
            'Your website is the first impression for every digital lead. If it doesn\'t instantly build trust and make it easy to contact you, inquiries bounce before you ever know they existed.',
        },
        {
          icon: '⭐',
          iconBg: 'bg-orange-500/15',
          title: 'Reputation Management',
          description:
            'A systematic approach to building, monitoring, and leveraging online reviews — the single biggest trust signal in the care facility selection process.',
          points: [
            'Google review generation strategy',
            'Review response management',
            'Reputation monitoring & alerts',
            'Trust signal integration on website',
            'Negative review mitigation',
          ],
          howItHelps:
            'Families choosing a care facility for their parent read reviews obsessively. A strong review profile is often the deciding factor between your facility and a competitor with the same price.',
        },
        {
          icon: '📖',
          iconBg: 'bg-cyan-500/15',
          title: 'Branding & Content',
          description:
            'Clear, consistent brand identity and trust-building content that communicates your care quality before a family ever walks through the door.',
          points: [
            'Brand identity & messaging',
            'Blog & educational content',
            'Photo & video strategy guidance',
            'Social media content',
            'Virtual tour support',
          ],
          howItHelps:
            'Content builds authority and trust over time. Families who read your helpful content and see your quality of care are pre-sold before the first phone call.',
        },
      ],
    }
  },
})
</script>
