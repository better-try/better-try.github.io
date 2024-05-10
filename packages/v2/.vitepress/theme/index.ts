// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import naive from 'naive-ui' // import "unocss"
import { Quasar } from 'quasar' // Import icon libraries
import '@quasar/extras/material-icons/material-icons.css' // Import Quasar css
import 'quasar/src/css/index.sass'

export default {
  extends: DefaultTheme,

  // todo x: https://vitepress.dev/zh/guide/i18n#separate-directory-for-each-locale
  Layout,

  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(naive)
    app.use(
      Quasar,
      {
        plugins: {}, // import Quasar plugins and add here
      },
      {
        req: {
          headers: {},
        },
      }
    )
  },
} satisfies Theme
