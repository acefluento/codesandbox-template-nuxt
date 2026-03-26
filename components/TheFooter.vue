<template>
  <footer class="bg-brand-dark-2 border-t border-white/8 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <!-- Brand col -->
        <div class="col-span-2 lg:col-span-2">
          <a href="#" class="flex items-center mb-4">
            <img src="/ace-logo.svg" alt="Acefluento" class="h-10 w-auto" />
          </a>
          <p class="text-white/45 text-sm leading-relaxed max-w-xs mb-4">
            We help assisted living facilities fill empty rooms using a proven digital system — SEO, ads, and reputation management built around one outcome: more tour requests and move-ins.
          </p>
          <!-- Contact info -->
          <div class="space-y-2 mb-5">
            <a href="tel:2168083109" class="flex items-center gap-2 text-white/40 text-xs hover:text-white transition-colors">
              <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              216-808-3109 · M–F 8AM–8PM
            </a>
            <a href="mailto:Acefluento@gmail.com" class="flex items-center gap-2 text-white/40 text-xs hover:text-white transition-colors">
              <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Acefluento@gmail.com
            </a>
            <div class="flex items-center gap-2 text-white/40 text-xs">
              <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Cleveland, OH
            </div>
          </div>
          <!-- Social -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
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
        <span>© {{ new Date().getFullYear() }} Acefluento LLC · Cleveland, OH. All rights reserved.</span>
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
        { name: 'Facebook', short: 'f', href: 'https://www.facebook.com/share/1DZVeSSLNz/?mibextid=wwXIfr' },
        { name: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/nolan-coats' },
        { name: 'YouTube', short: 'yt', href: 'https://youtu.be/OHDo7ov95Z4?si=uHK0zo87RDCOAaJ1' },
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
