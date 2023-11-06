# vuetify-ts-template
- Vue 3 + Vite + Vuetify 3 + TypeScript
- apexcharts + vue3 apexcharts
- [reference](https://www.craft.me/s/tAMVv4hUxZIH6G)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



-  参考第三方包

```js
"dependencies": {
    "@formkit/auto-animate": "^0.7.0",
    "@mdi/font": "7.2.96",
    "@tiptap/pm": "^2.0.2",
    "@tiptap/starter-kit": "^2.0.2",
    "@tiptap/vue-3": "^2.0.2",
    "@vueup/vue-quill": "^1.1.1",
    "@vueuse/core": "^9.13.0",
    "@vueuse/integrations": "^9.13.0",
    "@yeger/vue-masonry-wall": "^3.4.4",
    "apexcharts": "^3.37.3",
    "axios": "^1.3.5",
    "clipboard": "^2.0.11",
    "echarts": "^5.4.2",
    "firebase": "^9.19.1",
    "flag-icons": "^6.6.6",
    "focus-trap": "^7.4.0",
    "happy-dom": "^9.6.1",
    "md-editor-v3": "^2.11.2",
    "microsoft-cognitiveservices-speech-sdk": "^1.27.0",
    "moment": "^2.29.4",
    "openai": "^3.2.1",
    "pinia": "^2.0.34",
    "pinia-plugin-persist": "^1.0.0",
    "plantuml-encoder": "^1.4.0",
    "roboto-fontface": "*",
    "unsplash-js": "^7.0.15",
    "vue": "^3.2.47",
    "vue-echarts": "^6.5.4",
    "vue-i18n": "^9.2.2",
    "vue-router": "^4.1.6",
    "vue-virtual-scroller": "^2.0.0-beta.8",
    "vue-waterfall-plugin-next": "^2.2.0",
    "vue3-apexcharts": "^1.4.1",
    "vue3-lottie": "^2.5.0",
    "vue3-perfect-scrollbar": "^1.6.1",
    "vuedraggable": "^4.1.0",
    "vuetify": "^3.3.6",
    "webfontloader": "^1.6.28"
  },
  "devDependencies": {
    "@faker-js/faker": "^7.6.0",
    "@fortawesome/fontawesome-free": "^6.4.0",
    "@iconify/vue": "^4.1.1",
    "@types/node": "^18.15.11",
    "@vitejs/plugin-vue": "^4.1.0",
    "@vitest/ui": "^0.30.1",
    "@vue/test-utils": "^2.0.0-rc.18",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "sass": "^1.61.0",
    "tailwindcss": "^3.3.1",
    "unplugin-auto-import": "^0.15.2",
    "vite": "^4.3.2",
    "vite-plugin-vuetify": "^1.0.2",
    "vitest": "^0.30.1"
  }

```