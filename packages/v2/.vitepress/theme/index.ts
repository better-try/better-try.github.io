// https://vitepress.dev/guide/custom-theme
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import naive from 'naive-ui' // import "unocss"
import {QAvatar, QBadge, QBar, QBtn, QCard, QCarousel, QCarouselSlide, QFooter, QForm, QHeader, QIcon, QImg, QInput, QLayout, QPage, QPageContainer, QSeparator, QTab, QTabPanel, QTabPanels, QTabs, QTree, Quasar,} from 'quasar' // Import icon libraries
import '@quasar/extras/material-icons/material-icons.css' // Import Quasar css
import 'quasar/src/css/index.sass'
import {createI18n} from 'vue-i18n'
import messages from '../../src/i18n'
import {createRouter, createWebHashHistory} from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
const Team = { template: '<div>Team</div>' }
const About = { template: '<div>About</div>' }

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
    // router
    console.log('router: ', router)

    // router.onBeforePageLoad = async (to) => {
    //   // Here you can set the routes you want to configure.
    //   if (to == '/about2' || to == '/about2.html') {
    //     router.route.path = to
    //     router.route.component = markRaw(About) // Here you set your .vue file
    //     router.route.data = {
    //       frontmatter: { sidebar: false, layout: 'page' },
    //     }
    //     return false
    //   }
    //   return true
    // }

    // 2. 定义一些路由
    // 每个路由都需要映射到一个组件。
    // 我们后面再讨论嵌套路由。
    const routes = [
      { path: '/team', component: Team },
      { path: '/about', component: About },
    ]

    // 3. 创建路由实例并传递 `routes` 配置
    // 你可以在这里输入更多的配置，但我们在这里
    // 暂时保持简单
    const myRouter = createRouter({
      // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
      history: createWebHashHistory(),
      routes, // `routes: routes` 的缩写
    })

    // 确保 _use_ 路由实例使
    // 整个应用支持路由。
    app.use(myRouter)

    //
    // todo x: naive-ui, 不使用, 620 KB, 使用, 1.9MB
    //
    app.use(naive) // todo x: 不使用, 620 KB, 使用, 1.9MB

    //
    // todo x: quasar
    //
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

    //
    // todo x: fix i18n
    //
    const i18n = createI18n({
      locale: 'en-US',
      fallbackLocale: 'en-US',
      legacy: false,
      messages,
    })
    app.use(i18n)

    // app.mount('#app')
  },
} satisfies Theme
