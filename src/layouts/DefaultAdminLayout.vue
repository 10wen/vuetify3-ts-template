<script lang="ts" setup>
import { ref } from 'vue';
import SideBar from '@/components/defaultAdminLayout/SideBar.vue';
import ImageGallary from '@/components/defaultAdminLayout/ImageGallary.vue';

const isWitchColor = ref(true)
const handleSelectOption = (isColor: boolean) => {
  isWitchColor.value = isColor
}

</script>

<template>
  <VApp>
    <SideBar @selectOption="handleSelectOption" />
    <VMain>
      <ImageGallary :isWitchColor="isWitchColor"></ImageGallary>
    </VMain>
  </VApp>
</template>
