<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SystemSection />
      <ServicesSection />
      <InlineCta message="Not sure which service fits? Start with a strategy call — we'll map out the right combination for your goals." />
      <WhoWeHelpSection />
      <ResultsSection />
      <InlineCta :dark="true" message="Seen enough? Let's look at what a growth system would look like for your business." />
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
