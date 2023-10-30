import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCustomizeThemeStore = defineStore('customizeTheme', () => {
  const mainSideBar = ref(false)
  const localCode = ref('en')

  const setLocalCode = (code: string) => {
    localCode.value = code
  }
  

  return { mainSideBar, localCode, setLocalCode }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["darkTheme", "primaryColor", "localCode", "mainSidebar"],
      },
    ],
  },
})
