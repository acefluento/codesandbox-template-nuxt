<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SystemSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <ResultsSection />
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
