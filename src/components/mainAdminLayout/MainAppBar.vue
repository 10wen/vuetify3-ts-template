<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { useCustomizeThemeStore } from '@/stores/customizeTheme'
import LanguageSwitcher from '@/components/mainAdminLayout/LanguageSwitcher.vue'
import ToolbarUser from '@/components/mainAdminLayout/ToolbarUser.vue'
import ToolbarNotifications from '@/components/mainAdminLayout/ToolbarNotifications.vue'

const { mdAndUp } = useDisplay()
const customizeTheme = useCustomizeThemeStore()
const clickNavIcon = () => {
  customizeTheme.mainSideBar = !customizeTheme.mainSideBar
}
const showMobileSearch = ref(false)
</script>
<template>
  <v-app-bar :density="mdAndUp ? 'default' : 'compact'">
    <!-- search input -->
    <div v-if="showMobileSearch" class="w-100 d-flex flex-fill align-center">
      <v-text-field
        color="primary"
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        append-inner-icon="mdi-close"
        @click:append-inner="showMobileSearch = false"
        hide-details
        placeholder="Search"
      ></v-text-field>
    </div>

    <div v-else class="px-2 w-100 d-flex align-center justify-space-between">
      <!-- navigation icon -->
      <v-app-bar-nav-icon @click="clickNavIcon"></v-app-bar-nav-icon>
      <div>
        <v-text-field
          v-if="mdAndUp"
          class="ml-2"
          style="width: 400px"
          color="primary"
          variant="solo"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          hide-details
          placeholder="Search"
        ></v-text-field>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex">
        <v-btn icon v-if="!mdAndUp">
          <v-icon @click="showMobileSearch = true">mdi-magnify</v-icon>
        </v-btn>

        <v-btn v-if="mdAndUp" icon>
          <v-badge dot color="success">
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-badge>
        </v-btn>

        <ToolbarNotifications />

        <v-divider vertical class="ml-5 mr-1"></v-divider>
        <LanguageSwitcher />
        <ToolbarUser />
      </div>
    </div>
  </v-app-bar>
</template>
