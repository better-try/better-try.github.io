// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import naive from 'naive-ui' // import "unocss"
import {
  QAvatar,
  QBadge,
  QBar,
  QBtn,
  QCard,
  QCarousel,
  QCarouselSlide,
  QFooter,
  QForm,
  QHeader,
  QIcon,
  QImg,
  QInput,
  QLayout,
  QPage,
  QPageContainer,
  QSeparator,
  QTab,
  QTabPanel,
  QTabPanels,
  QTabs,
  QTree,
  Quasar,
} from 'quasar' // Import icon libraries
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
    app.use(naive) // todo x: 不使用, 620 KB, 使用, 1.9MB
    app.use(
      Quasar,
      {
        plugins: {}, // import Quasar plugins and add here

        //
        // TODO X: 需要手动枚举一遍!!!
        //
        components: [
          QBtn,
          QCard,
          QForm,
          QHeader,
          QFooter,
          QTab,
          QTabs,
          QTabPanel,
          QTabPanels,
          QSeparator,
          QCarousel,
          QCarouselSlide,
          QAvatar,
          QBar,
          QBadge,
          QIcon,
          QInput,
          QImg,
          QTree,
          QPage,
          QLayout,
          QPageContainer,
        ],
      },
      {
        req: {
          headers: {},
        },
      }
    )
  },
} satisfies Theme
