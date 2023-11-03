<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import PieChart from '@/components/echart/PieChart.vue'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
<template>
  <div v-if="loading" 
    class="h-full d-flex align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h3 class="h-full d-flex align-center font-weight-bold">
      <span class="pa-5">Pie</span>
    </h3>
    <v-card variant="flat">
      <PieChart />
    </v-card>
  </div>
</template>
