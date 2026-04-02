export default {
  target: 'static',

  head: {
    title: 'Acefluento | Websites, Marketing & Growth Systems for Modern Businesses',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Acefluento builds websites, campaigns, and follow-up systems that help businesses turn attention into clients. Book a strategy call.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Acefluento | Websites, Marketing & Growth Systems for Modern Businesses' },
      {
        property: 'og:description',
        content: 'Acefluento builds websites, campaigns, and follow-up systems that help businesses turn attention into clients. Book a strategy call.',
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
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-4MQGGBPE9B', async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4MQGGBPE9B');`,
      },
      { src: 'https://assets.calendly.com/assets/external/widget.js', defer: true },
    ],
    __dangerouslyDisableSanitizersByTagID: { gtag: ['innerHTML'] },
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
