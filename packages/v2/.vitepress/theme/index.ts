// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import naive from "naive-ui";
// import "unocss"

export default {

  extends: DefaultTheme,

  // todo x: https://vitepress.dev/zh/guide/i18n#separate-directory-for-each-locale
  Layout,

  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({app, router, siteData}) {
    // ...
    app.use(naive)
  }
} satisfies Theme
