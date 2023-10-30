<script lang="ts" setup>
const emit = defineEmits<(e: 'selectOption', isColor: boolean) => void>()
const selectOption = (isColor: boolean) => {
  emit('selectOption', isColor)
}
</script>

<template>
  <VNavigationDrawer expand-on-hover rail>
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-image"
        title="Color Gallary"
        value="color"
        @click="selectOption(true)"
      ></VListItem>
      <VListItem
        prepend-icon="mdi-dialpad"
        title="Grayspace Gallary"
        value="grayspace"
        @click="selectOption(false)"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>
