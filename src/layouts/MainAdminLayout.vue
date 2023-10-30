<script setup lang="ts">
import MainSideBar from '@/components/mainAdminLayout/MainSideBar.vue'
import MainAppBar from '@/components/mainAdminLayout/MainAppBar.vue'
</script>

<template>
  <!-- Main SideBar -->
  <MainSideBar />
  <!-- Top Bar -->
  <MainAppBar />
  <!-- Main View -->
  <VMain
    class="main-view"
  >
    <div class="flex-fill">
      <RouterView />
    </div>
  </VMain>
</template>

<style scoped>
.main-view {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
