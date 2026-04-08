<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SystemSection />
      <ServicesSection />
      <InlineCta
        message="Not sure which service fits? Start with a strategy call — we'll identify the right leverage point for your business."
      />
      <WhoWeHelpSection />
      <ResultsSection />
      <InlineCta
        :dark="true"
        message="If your current site, messaging, or follow-up is costing you leads — let's find out where."
      />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
