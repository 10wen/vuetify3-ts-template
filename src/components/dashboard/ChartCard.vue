<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BarChart from '@/components/echart/BarChart.vue'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
<template>
  <div v-if="loading" 
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h3 class="h-full d-flex align-center font-weight-bold">
      <span class="pa-5">Chart</span>
    </h3>
    <v-card variant="flat">
      <BarChart />
    </v-card>
  </div>
</template>
