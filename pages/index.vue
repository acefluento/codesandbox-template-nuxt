<template>
  <div class="min-h-screen bg-brand-dark text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <LogoBar />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
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
