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
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Acefluento' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Acefluento | Websites, Marketing & Growth Systems for Modern Businesses',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Acefluento builds websites, campaigns, and follow-up systems that help businesses turn attention into clients. Book a strategy call.',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://acefluento.com/' },
      { hid: 'og:image', property: 'og:image', content: 'https://acefluento.com/og-image.svg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Acefluento | Websites, Marketing & Growth Systems for Modern Businesses' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Acefluento builds websites, campaigns, and follow-up systems that help businesses turn attention into clients. Book a strategy call.',
      },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://acefluento.com/og-image.svg' },
    ],
    link: [
      { rel: 'canonical', href: 'https://acefluento.com/' },
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      { rel: 'apple-touch-icon', href: '/icon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        hid: 'org-schema',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Acefluento',
          url: 'https://acefluento.com/',
          logo: 'https://acefluento.com/logo.svg',
          sameAs: [],
        }),
      },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-4MQGGBPE9B', async: true },
      {
        hid: 'gtag',
        innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4MQGGBPE9B');`,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      gtag: ['innerHTML'],
      'org-schema': ['innerHTML'],
    },
  },

  css: ['~/assets/css/main.css'],

  plugins: ['~/plugins/animations.client.js'],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios'],

  axios: { baseURL: '/' },

  build: {},

  telemetry: false,
}
