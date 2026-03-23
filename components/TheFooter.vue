<template>
  <footer class="bg-brand-dark-2 border-t border-white/8 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <!-- Brand col -->
        <div class="col-span-2 lg:col-span-2">
          <a href="#" class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg shadow-brand-blue/30">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span class="text-xl font-bold">Ace<span class="text-brand-blue">fluento</span></span>
          </a>
          <p class="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
            The Meta Ads agency for brands serious about growth. We turn cold traffic into predictable, scalable revenue.
          </p>
          <!-- Social -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-200"
              :aria-label="social.name"
            >
              <span class="text-sm font-bold">{{ social.short }}</span>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="col in footerLinks" :key="col.title">
          <h4 class="text-sm font-semibold text-white mb-4">{{ col.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="text-white/45 text-sm hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-xs">
        <span>© {{ new Date().getFullYear() }} Acefluento. All rights reserved.</span>
        <div class="flex items-center gap-1 text-white/25">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow"></span>
          <span>All systems operational</span>
        </div>
        <div class="flex gap-5">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheFooter',
  data() {
    return {
      socials: [
        { name: 'Facebook', short: 'f', href: '#' },
        { name: 'Instagram', short: 'ig', href: '#' },
        { name: 'LinkedIn', short: 'in', href: '#' },
        { name: 'Twitter', short: 'x', href: '#' },
      ],
      footerLinks: [
        {
          title: 'Services',
          links: [
            { label: 'Meta Ads Management', href: '#services' },
            { label: 'Creative Strategy', href: '#services' },
            { label: 'Funnel Building', href: '#services' },
            { label: 'Retargeting Systems', href: '#services' },
            { label: 'Analytics & Reporting', href: '#services' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About Us', href: '#' },
            { label: 'Case Studies', href: '#results' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
          ],
        },
        {
          title: 'Get Started',
          links: [
            { label: 'Book a Call', href: '#contact' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Free Ad Audit', href: '#contact' },
            { label: 'Contact', href: '#contact' },
          ],
        },
      ],
    }
  },
})
</script>
