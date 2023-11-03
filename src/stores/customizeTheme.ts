import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Color {
  colorId: number
  colorName: string
  colorValue: string
}

interface State {
  miniSidebar: boolean
  darkTheme: boolean
  primaryColor: Color
  mainSidebar: boolean
  localCode: string
}

export const useCustomizeThemeStore = defineStore(
  'customizeTheme',
  () => {
    const mainSideBar = ref(true)
    const localCode = ref('en')
    const darkTheme = ref(false)
    const primaryColor = ref({
      colorId: 2,
      colorName: 'grey',
      colorValue: '#344767'
    })
    const miniSidebar = ref(false)

    const setLocalCode = (code: string) => {
      localCode.value = code
    }
    const setMiniSideBar = (payload: boolean) => {
      miniSidebar.value = payload
    }
    const setPrimaryColor = (payload: Color) => {
      primaryColor.value = payload
    }

    return {
      mainSideBar,
      localCode,
      darkTheme,
      primaryColor,
      miniSidebar,
      setLocalCode,
      setMiniSideBar,
      setPrimaryColor
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
          paths: ['darkTheme', 'primaryColor', 'localCode', 'mainSidebar']
        }
      ]
    }
  }
)
