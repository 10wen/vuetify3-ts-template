<!--
  * @description echart 饼状图Pie
  * @依赖 echarts 
  * @plugin echart
  * @author devin
-->

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import type { EChartsOption } from 'echarts'
import { useChart, ThemeType, RenderType } from '@/hooks/useChart'
import { useCustomizeThemeStore } from '@/stores/customizeTheme'
const customizeTheme = useCustomizeThemeStore()
const dataSet = ref([
  { value: 335, name: 'Direct' },
  { value: 310, name: 'Email' },
  { value: 274, name: 'Union Ads' },
  { value: 235, name: 'Video Ads' },
  { value: 400, name: 'Search Engine' }
])

const option = computed<EChartsOption>(() => ({
  backgroundColor: customizeTheme.darkTheme ? '#1E293B' : '#FFF',
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '75%',
      center: ['50%', '50%'],
      data: dataSet.value,
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#03a9f4',
        shadowBlur: 100,
        shadowColor: 'rgba(0, 0, 0, 0.2)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200
      }
    }
  ]
}))

const chartEl = ref<HTMLElement | null>(null)
const { setOption, showLoading } = useChart(
  chartEl as Ref<HTMLDivElement>,
  true,
  true,
  RenderType.SVGRenderer,
  ThemeType.Light
)

onMounted(() => {
  nextTick(() => {
    showLoading()
    // 网络请求
    setOption(option.value)
  })
})
</script>
<template>
  <v-card height="350" class="pa-2" rounded="md">
    <div ref="chartEl" :style="{ width: `100%`, height: `100%` }"></div>
  </v-card>
</template>
