export default {
  target: 'static',

  head: {
  title: 'Acefluento | Web Design & Digital Marketing | Cleveland',

  htmlAttrs: { lang: 'en' },

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    {
      hid: 'description',
      name: 'description',
      content:
        'Acefluento is a Cleveland web design and digital marketing agency. We build websites, campaigns, and follow-up systems that turn attention into clients.',
    },

    { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#111315' },

    // Open Graph
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Acefluento' },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Acefluento | Web Design & Digital Marketing | Cleveland',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Acefluento is a Cleveland web design and digital marketing agency. We build websites, campaigns, and follow-up systems that turn attention into clients.',
    },
    { hid: 'og:url', property: 'og:url', content: 'https://acefluento.com/' },
    { hid: 'og:image', property: 'og:image', content: 'https://acefluento.com/og-image.png' },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '630' },

    // Twitter
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Acefluento | Web Design & Digital Marketing | Cleveland',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Acefluento is a Cleveland web design and digital marketing agency. We build websites, campaigns, and follow-up systems that turn attention into clients.',
    },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://acefluento.com/og-image.png' },
  ],

  link: [
    { rel: 'canonical', href: 'https://acefluento.com/' },

    // Favicons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },

    // Fonts
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
        '@type': 'LocalBusiness',
        name: 'Acefluento',
        url: 'https://acefluento.com/',
        logo: 'https://acefluento.com/logo.png',
        telephone: '+12168083109',
        email: 'hello@acefluento.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cleveland',
          addressRegion: 'OH',
          addressCountry: 'US',
        },
        areaServed: 'Cleveland, OH',
        priceRange: '$$',
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
