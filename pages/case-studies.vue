<template>
  <main>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <span class="section-label mb-6 inline-flex">Proof</span>
        <h1 class="text-5xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
          Real Clients.<br />
          <span class="gradient-text">Real Results.</span>
        </h1>
        <p class="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          We don't show hypothetical numbers. Here's what actually happened when
          real organizations worked with Acefluento — and the strategy behind each win.
        </p>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="pb-28 border-t border-white/5">
      <div class="max-w-5xl mx-auto px-6 space-y-16 pt-16">
        <div
          v-for="study in caseStudies"
          :key="study.brand"
          class="bg-brand-dark-3 border rounded-2xl overflow-hidden"
          :class="study.borderColor"
        >
          <div class="h-1 w-full" :class="study.accentColor"></div>
          <div class="p-8 md:p-12">
            <!-- Header -->
            <div class="flex flex-wrap items-start justify-between gap-4 mb-10">
              <div>
                <span class="px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block" :class="study.tagClass">{{ study.tag }}</span>
                <h2 class="text-2xl font-extrabold">{{ study.brand }}</h2>
                <p class="text-white/40 text-sm mt-1">{{ study.niche }}</p>
              </div>
              <div class="flex gap-3 flex-wrap">
                <span v-for="service in study.services" :key="service" class="px-3 py-1.5 rounded-lg bg-white/6 border border-white/10 text-white/60 text-xs font-medium">
                  {{ service }}
                </span>
              </div>
            </div>

            <!-- Situation / Challenge / What We Did / Result -->
            <div class="grid md:grid-cols-2 gap-8 mb-10">
              <div v-for="block in study.blocks" :key="block.label">
                <h4 class="text-xs uppercase tracking-widest text-white/35 font-semibold mb-3">{{ block.label }}</h4>
                <p class="text-white/65 text-sm leading-relaxed">{{ block.body }}</p>
              </div>
            </div>

            <!-- Before / After -->
            <div class="grid md:grid-cols-2 gap-6 mb-10 border-t border-white/8 pt-8">
              <div>
                <h4 class="text-xs uppercase tracking-widest text-red-400/60 font-semibold mb-4">Before</h4>
                <ul class="space-y-2.5">
                  <li v-for="item in study.before" :key="item" class="flex items-center gap-3 text-white/55 text-sm">
                    <svg class="w-4 h-4 text-red-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs uppercase tracking-widest text-green-400/60 font-semibold mb-4">After</h4>
                <ul class="space-y-2.5">
                  <li v-for="item in study.after" :key="item" class="flex items-center gap-3 text-white/70 text-sm">
                    <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Quote -->
            <div class="border-t border-white/8 pt-8">
              <p class="text-white/60 italic text-lg leading-relaxed">"{{ study.quote }}"</p>
              <p class="text-white/35 text-sm mt-3 font-medium">— {{ study.attribution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CaseStudiesPage',
  data() {
    return {
      caseStudies: [
        {
          brand: 'Creative Living Care Group Inc.',
          niche: 'Assisted Living · Clearwater, FL',
          tag: 'Healthcare',
          tagClass: 'bg-teal-500/15 text-teal-400',
          accentColor: 'bg-gradient-to-r from-teal-500 to-cyan-400',
          borderColor: 'border-teal-500/20',
          services: ['Web Design', 'Local SEO', 'Google Business'],
          blocks: [
            {
              label: 'Situation',
              body: 'Creative Living Care Group operates an assisted living facility in Clearwater, FL. Despite providing quality care, they had no digital presence and were entirely dependent on offline referrals.',
            },
            {
              label: 'Challenge',
              body: 'The facility had zero website, no Google Business profile, and no searchable online identity. Families searching for assisted living in their area could not find them — at all.',
            },
            {
              label: 'What We Did',
              body: 'We built their website from scratch, fully optimized their Google Business Profile, implemented a local SEO strategy, and set up a review generation system to build trust signals.',
            },
            {
              label: 'Result',
              body: 'Creative Living Care Group went from zero online visibility to a fully indexed, locally-ranking digital presence with an inquiry-generating website — a complete digital transformation.',
            },
          ],
          before: [
            'No website',
            'No Google Business Profile',
            'Zero visibility in local search',
            'No online reviews',
            'Zero digital inquiries',
          ],
          after: [
            'Professional website live',
            'Google Business fully optimized',
            'Ranking in local search results',
            'Review generation system active',
            'Digital presence fully established',
          ],
          quote: 'From zero online visibility to a fully optimized, lead-generating digital presence — Acefluento engineered a complete digital transformation for our assisted living brand.',
          attribution: 'Creative Living Care Group Inc., Clearwater FL',
        },
        {
          brand: 'CHVDJUSTIN (Wearpack)',
          niche: 'Fashion Tech · eCommerce · Cleveland, OH',
          tag: 'eCommerce',
          tagClass: 'bg-purple-500/15 text-purple-400',
          accentColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
          borderColor: 'border-purple-500/20',
          services: ['Meta Ads', 'SEO', 'Digital Strategy'],
          blocks: [
            {
              label: 'Situation',
              body: 'CHVDJUSTIN is a fashion-tech brand launching Wearpack — a new product line. They needed digital infrastructure, audience growth, and a scalable paid media strategy.',
            },
            {
              label: 'Challenge',
              body: 'Limited online presence, no established SEO foundation, and no active advertising campaigns. The brand needed to build digital authority while simultaneously driving initial sales.',
            },
            {
              label: 'What We Did',
              body: 'Built an SEO foundation, set up and launched Facebook/Instagram ad campaigns, optimized their Google Ads account, and created a digital audience growth strategy.',
            },
            {
              label: 'Result',
              body: 'Active, scaling Facebook campaigns, fully optimized website SEO, successful product launches, and a growing digital audience — a multi-channel digital foundation built from the ground up.',
            },
          ],
          before: [
            'No established SEO',
            'No active paid campaigns',
            'Limited digital audience',
            'Minimal online brand presence',
          ],
          after: [
            'Facebook & Instagram campaigns live',
            'SEO fully optimized',
            'Google Ads account active',
            'Growing digital audience',
            'Successful product launches',
          ],
          quote: 'Acefluento LLC has offered my brand Chvd Justin amazing services. Helping us to establish our SEO and Google ads account allowing us to better grow our digital audience. The owner, Nolan Coats is very responsive, knowledgeable, and does a great job fulfilling his clients\' needs.',
          attribution: 'Chad J. Porter, CEO & Founder — CHVDJUSTIN LLC',
        },
        {
          brand: 'Euclid Church of Christ',
          niche: 'Non-Profit · Community Organization · Cleveland, OH',
          tag: 'Non-Profit',
          tagClass: 'bg-brand-blue/15 text-brand-blue',
          accentColor: 'bg-gradient-to-r from-brand-blue to-cyan-400',
          borderColor: 'border-brand-blue/20',
          services: ['YouTube Strategy', 'Social Media', 'Community Growth'],
          blocks: [
            {
              label: 'Situation',
              body: 'Euclid Church of Christ serves their Cleveland community but lacked an effective digital presence to reach new congregation members and share their message beyond their physical location.',
            },
            {
              label: 'Challenge',
              body: 'Limited social media engagement and no YouTube strategy. They needed to grow their online community in a way that felt authentic and aligned with their mission.',
            },
            {
              label: 'What We Did',
              body: 'Developed and launched a YouTube campaign strategy, built a subscriber growth system, and implemented social media tactics to grow community reach across digital platforms.',
            },
            {
              label: 'Result',
              body: 'Active YouTube campaign, deployed subscriber growth strategy, expanded community digital reach — bringing their congregation\'s message to a wider audience.',
            },
          ],
          before: [
            'Minimal YouTube presence',
            'Low social media engagement',
            'Limited digital community reach',
            'No structured content strategy',
          ],
          after: [
            'YouTube campaign live',
            'Subscriber growth strategy deployed',
            'Expanded community reach',
            'Consistent content publishing',
          ],
          quote: 'Acefluento helped us build a real digital presence and grow our congregation\'s online community effectively.',
          attribution: 'Euclid Church of Christ, Cleveland OH',
        },
      ],
    }
  },
})
</script>
