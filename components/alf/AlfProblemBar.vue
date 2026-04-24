<template>
  <div class="bg-brand-navy-2 border-y border-white/[0.07] py-10">
    <div class="max-w-7xl mx-auto px-6">
      <p
        class="text-center text-white/30 text-xs uppercase tracking-widest font-medium mb-8"
      >
        The reality families face when choosing an ALF
      </p>
      <div v-stagger="80" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
        >
          <p class="text-2xl font-extrabold text-white mb-1">
            {{ stat.value }}
          </p>
          <p class="text-white/45 text-xs leading-relaxed">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AlfProblemBar',
  data() {
    return {
      stats: [
        {
          value: '3.2★',
          label: 'Average Google rating for unmanaged ALFs in Northeast Ohio',
        },
        {
          value: '90s',
          label: 'Time families spend reading reviews before deciding to call',
        },
        {
          value: '67%',
          label: 'Of families check online reviews before touring a facility',
        },
        {
          value: '$4K+',
          label: 'In lost monthly revenue for every move-in you miss',
        },
      ],
    }
  },
})
</script>
