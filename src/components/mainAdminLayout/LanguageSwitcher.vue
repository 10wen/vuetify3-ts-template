<!--
* @Component: LanguageSwitcher.vue
* @Description: 语言切换组件
-->
<script setup lang="ts">
import { onMounted } from "vue"
import config from "@/configs";
import { Icon } from "@iconify/vue";
import { useLocale } from "vuetify";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { useI18n } from "vue-i18n";
const { current } = useLocale();
const { availableLocales } = config.locales;
const customizeTheme = useCustomizeThemeStore();
const { t, locale } = useI18n()

onMounted(() => {
  setLocale(customizeTheme.localCode);
});

const setLocale = (lang: string) => {
  current.value = lang;
  locale.value = lang;
};
</script>
<template>
  <VMenu>
    <template v-slot:activator="{ props }">
      <VBtn icon v-bind="props">
        <VIcon color="primary">mdi-translate</VIcon>
      </VBtn>
    </template>
    <VList nav>
      <VListItem
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="setLocale(locale.code)"
        density="compact"
        :active="locale.code === current"
      >
        <template v-slot:prepend>
          <Icon :icon="`twemoji:flag-${locale.name}`" class="mr-2" />
        </template>
        <VListItemTitle> {{ locale.label }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>