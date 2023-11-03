import { type Ref, unref, nextTick, onMounted, onUnmounted } from 'vue';
import echarts from '@/plugins/echart'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from 'echarts';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
  Default = 'default',
}

export enum RenderType {
  SVGRenderer = "SVGRenderer",
  CanvasRenderer = "CanvasRenderer",
}

export function useChart(
  elRef: Ref<HTMLDivElement>,
  autoChartSize: boolean = false,
  animation: boolean = false,
  render: RenderType = RenderType.SVGRenderer,
  theme: ThemeType = ThemeType.Default,
) {
  // 渲染模式
  let renderType = render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer;
  echarts.use(renderType)
  // echart 实例
  let chartInstance: echarts.ECharts | null = null;

  // 初始化echart
  const initChart = () => {
    const el = unref(elRef);
    if (!el || !unref(elRef)) return;
    chartInstance = echarts.init(el, theme);
  }

  // 更新设置配置
  const setOption = (option: EChartsOption) => {
    nextTick(() => {
      if (!chartInstance) {
        initChart();
        if (!chartInstance) return;
      }
      
      chartInstance.setOption(option);
      hideLoading();
    })
  }

  // 获取echart实例
  const getChartInstance = () :echarts.ECharts | null => {
    if (!chartInstance) {
      initChart();
    }
    return chartInstance;
  }

  // 更新大小
  const chartResize = () => {
    chartInstance?.resize()
  }

  // 监听元素大小
  const watchElSize = () => {
    // 给元素添加过度
    if (animation) {
      elRef.value.style.transition = 'width 1s, height 1s';
    }
    const resizeObserver = new ResizeObserver((entries) => chartResize())
    resizeObserver.observe(elRef.value);
  }
  
  // 显示加载状态
  const showLoading = () => {
    if (!chartInstance) {
      initChart()
    }
    chartInstance?.showLoading()
  }
  // 隐藏隐藏状态
  const hideLoading = () => {
    if (!chartInstance) {
      initChart();
    }
    chartInstance?.hideLoading()
  }

  onMounted(() => {
    window.addEventListener('resize', chartResize)
    if (autoChartSize) watchElSize()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', chartResize)
  })

  return {
    getChartInstance,
    setOption,
    showLoading,
    hideLoading,
  }
}