<script setup lang="ts">
import { useCustomizeThemeStore } from '@/stores/customizeTheme'

const customizeTheme = useCustomizeThemeStore()
</script>
<template>
  <v-navigation-drawer border="none" elevation="1" v-model="customizeTheme.mainSideBar">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
        title="Jane Smith"
        subtitle="Logged in"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav color="primary">
      <v-list-item
        :to="{ name: 'Dashboard' }"
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item
        :to="{ name: 'Account' }"
        prepend-icon="mdi-account-box"
        title="Account"
        value="account"
      ></v-list-item>
      <v-list-item
        :to="{ name: 'Admin' }"
        prepend-icon="mdi-gavel"
        title="Admin"
        value="admin"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2 mb-2">
        <v-btn block class="font-weight-black"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
