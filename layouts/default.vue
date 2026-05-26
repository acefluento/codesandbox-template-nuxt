<template>
  <Nuxt />
</template>

<script>
import Vue from 'vue'

const SITE_ORIGIN = 'https://acefluento.com'

export default Vue.extend({
  name: 'DefaultLayout',
  head() {
    const path = (this.$route && this.$route.path) || '/'
    const normalized = path === '/' ? '/' : path.replace(/\/+$/, '')
    const url = `${SITE_ORIGIN}${normalized}`

    return {
      link: [{ hid: 'canonical', rel: 'canonical', href: url }],
      meta: [{ hid: 'og:url', property: 'og:url', content: url }],
    }
  },
})
</script>
