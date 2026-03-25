export default {
  target: 'static',

  head: {
    title: 'Acefluento — Occupancy Growth for Assisted Living Facilities',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Acefluento LLC — We help assisted living facilities increase occupancy using digital systems. Fill more rooms in 30–90 days. Cleveland, OH. Call 216-808-3109.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Acefluento — Occupancy Growth for Assisted Living Facilities' },
      {
        property: 'og:description',
        content: 'Fill more rooms in 30–90 days with a digital system built for care facilities. Book a free occupancy audit today.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      },
      { rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css' },
    ],
    script: [
      { src: 'https://assets.calendly.com/assets/external/widget.js', defer: true },
    ],
  },

  css: ['~/assets/css/main.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios'],

  axios: { baseURL: '/' },

  build: {},

  telemetry: false,
}
