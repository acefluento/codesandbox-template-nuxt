<template>
  <section class="py-16 border-y border-white/8 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-10">
        Trusted by growth-stage brands
      </p>
      <div class="flex flex-wrap justify-center items-center gap-10 opacity-40 hover:opacity-60 transition-opacity duration-500">
        <div
          v-for="brand in brands"
          :key="brand"
          class="text-white font-bold text-lg tracking-tight"
        >
          {{ brand }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LogoBar',
  data() {
    return {
      brands: ['NŌRD', 'Fluxify', 'Stackhouse', 'Velara', 'Omniplex', 'Kōre', 'Drifty', 'Lunara'],
    }
  },
})
</script>
