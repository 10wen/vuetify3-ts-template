<script lang="ts" setup>
const p = defineProps<{
  isWitchColor: boolean
}>()
</script>

<template>
  <VCard class="mx-5 my-2 pa-3">
    <VRow>
      <VCol v-for="i in 200" :key="i" cols="4" sm="3" md="2" lg="1">
        <VCard>
          <VImg
            :src="`https://picsum.photos/400/300?image=${i * 5 + 10}${
              p.isWitchColor ? '' : '&grayscale'
            }`"
            :lazy-src="`https://picsum.photos/4/3?image=${i * 5 + 10}`"
          >
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <VProgressCircular color="grey-lighten-4" indeterminate></VProgressCircular>
              </div>
            </template>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
