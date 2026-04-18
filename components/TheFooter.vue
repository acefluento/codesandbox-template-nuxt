<template>
  <footer class="bg-brand-navy-2 border-t border-white/[0.08] py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Column 1: Brand -->
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2.5 mb-5">
            <div class="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/20">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.5C8.5 2.5 3.5 6.5 3.5 11C3.5 14.5 5.8 16.8 9.5 16.2C8.2 16.8 8.5 18.8 7.2 20H16.8C15.5 18.8 15.8 16.8 14.5 16.2C18.2 16.8 20.5 14.5 20.5 11C20.5 6.5 15.5 2.5 12 2.5Z"/>
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight">ace<span class="text-brand-red">fluento</span></span>
          </a>
          <p class="text-white/40 text-sm leading-relaxed max-w-xs">
            Acefluento builds modern growth systems for businesses that want clarity, trust, and conversion.
          </p>
          <p class="text-white/30 text-xs mt-4">Based in Cleveland, OH</p>
        </div>

        <!-- Column 2: Navigation -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="text-white/45 text-sm hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a href="tel:2168083109" class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                216-808-3109
              </a>
            </li>
            <li>
              <a href="mailto:Acefluento@gmail.com" class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Acefluento@gmail.com
              </a>
            </li>
            <li>
              <a href="#contact" class="text-white/45 text-sm hover:text-white transition-colors">
                Book a Strategy Call
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Social -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Follow</h4>
          <ul class="space-y-3">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.iconPath" />
                </svg>
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
        <span>© {{ year }} Acefluento LLC. All rights reserved.</span>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white/60 transition-colors">Terms of Service</a>
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
      year: new Date().getFullYear(),
      navLinks: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'Work', href: '/#work' },
        { label: 'Process', href: '/#process' },
        { label: 'FAQs', href: '/#faqs' },
        { label: 'ALF Reputation Engine', href: '/alf-reputation-engine' },
        { label: 'Book a Call', href: '/#contact' },
      ],
      socials: [
        {
          name: 'Instagram',
          href: '#',
          iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
        },
        {
          name: 'LinkedIn',
          href: '#',
          iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
        },
        {
          name: 'YouTube',
          href: '#',
          iconPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
      ],
    }
  },
})
</script>
