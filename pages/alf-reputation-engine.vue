<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <AlfHero />
      <AlfProblemBar />
      <AlfFeaturesSection />
      <AlfCaseStudy />
      <InlineCta message="Families are reading reviews right now. Don't let a 2-star response cost you a move-in." />
      <AlfHowItWorks />
      <AlfPricing />
      <AlfFaq />
      <AlfDemoCta />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AlfReputationEngine',
  head() {
    return {
      title: 'ALF Reputation Engine | Automated Review Management for Assisted Living',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Monitor reviews across Google, Yelp, Facebook, and AssistedLivingCenter.com. Get AI-drafted responses. Run automated review request campaigns. Starting at $297/mo.',
        },
        { property: 'og:title', content: 'ALF Reputation Engine | Automated Review Management for Assisted Living' },
        {
          property: 'og:description',
          content:
            'Monitor reviews across Google, Yelp, Facebook, and AssistedLivingCenter.com. Get AI-drafted responses. Run automated review request campaigns. Starting at $297/mo.',
        },
      ],
    }
  },
})
</script>
