<!-- docs/.vitepress/theme/Layout.vue -->
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData, useRoute, useRouter } from 'vitepress'
import { watchEffect } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const { Layout } = DefaultTheme
const route = useRoute()
const router = useRouter()

// const isDark = ref(false)
// isDark.value = useColorMode().value === 'dark';

//
// todo x: dark theme change
//  - https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api
//
const { isDark } = useData()
const { lang } = useData()
const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })

watchEffect(() => {
  //
  // todo x: fix for quasar, dark mode change
  //
  $q.dark.set(isDark.value)

  //
  // todo x: fix i18n for quasar, need update locale
  //
  locale.value = lang.value
  // console.log('lang: ', lang.value)
  console.log('update i18n locale: ', locale.value)

  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2050 00:00:00 UTC; path=/`
  }

  // change language
  document.documentElement.lang = lang.value
})
</script>

<template>
  <router-view>
    <!--  todo x:
            - 此文件相当于 app.vue
            - naive ui 的一些涉及 全局样式的设置, 都在此修改
            - naive ui 组件配置:
              - https://www.naiveui.com/zh-CN/dark/components/message
            - dark mode:
              - https://www.naiveui.com/zh-CN/dark/docs/customize-theme
              - https://vitepress.dev/zh/guide/custom-theme
              - https://vueuse.org/core/useDark/#basic-usage

    -->
    <n-config-provider :theme="isDark ? darkTheme : lightTheme">
      <n-message-provider>
        <!--    默认-->
        <!--      <DefaultTheme.Layout />-->
        <Layout>
          <!--          todo x: -->
          <template #aside-outline-before>
            <!--            My custom sidebar top content-->
            <!--            <router-view></router-view>-->
          </template>
        </Layout>
      </n-message-provider>
    </n-config-provider>
  </router-view>
</template>
