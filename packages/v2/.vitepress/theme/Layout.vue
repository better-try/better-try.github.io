<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {inBrowser, useData} from 'vitepress'
import {ref, watchEffect} from 'vue'
import {darkTheme, lightTheme} from 'naive-ui'

import {useDark, useToggle} from '@vueuse/core'
import {useColorMode} from '@vueuse/core'

// const isDark = ref(false)
// isDark.value = useColorMode().value === 'dark';

//
// todo x: dark theme change
//  - https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api
//
const {isDark} = useData()
const {lang} = useData()


watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2050 00:00:00 UTC; path=/`
  }
})
</script>

<template>

  <!--  todo x:
          - 此文件相当于 app.vue
          - naive ui 的一些涉及 全局样式的设置, 都在此修改
          - naive ui 组件配置:
            - https://www.naiveui.com/zh-CN/dark/components/message
          - dark mode:
            - https://vueuse.org/core/useDark/#basic-usage

  -->
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-message-provider>

      <!--    默认-->
      <DefaultTheme.Layout/>
    </n-message-provider>
  </n-config-provider>
</template>
