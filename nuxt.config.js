export default {
  target: 'static',

  head: {
    title: 'Acefluento — Meta Ads & Digital Marketing Agency',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Acefluento helps brands scale with high-converting Meta Ads, creative strategy, and data-driven paid social campaigns. Turn cold traffic into loyal customers.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Acefluento — Meta Ads & Digital Marketing Agency' },
      {
        property: 'og:description',
        content: 'Scale your brand with Meta Ads that actually convert. Book a free strategy call today.',
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
