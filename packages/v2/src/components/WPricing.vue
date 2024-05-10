<template>
  <div>
    <n-space justify="space-between">
      <n-card
        v-for="d in dw"
        :key="d"
        style="min-width: 300px; min-height: 500px"
      >
        <n-flex class="py-5" vertical>
          <n-text class="text-2xl" type="warning">{{ d.title }} </n-text>
          <n-text
            align="center"
            class="text-4xl text-amber-500 py-5"
            type="info"
            >{{ d.price }}
          </n-text>

          <n-button
            class=""
            secondary
            size="large"
            strong
            type="success"
            @click="download(d.url)"
            >{{ d.dl }}

            <template #icon></template>
          </n-button>

          <n-flex class="py-5" vertical>
            <!--              version -->
            <n-gradient-text type="success">
              Latest Version:
              <n-gradient-text type="info">{{ d.version }}</n-gradient-text>
            </n-gradient-text>
          </n-flex>
        </n-flex>
      </n-card>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui' //
//
// todo x: check `.vitepress/theme/Layout.vue`
//
const message = useMessage()

const props = defineProps({
  downloads: {
    type: Array,
  },
})

//
// ref: https://icon-sets.iconify.design/?category=General
//
const dw = [
  {
    title: 'Basic', // basic // 免费版
    price: 'Free',
    icon: 'iconoir:windows', // <Icon icon="iconoir:windows" />
    color: 'blue',
    dl: 'Free Download',
    url: '#download',
    version: '1.0.0',
  },
  {
    title: 'Pro', // pro // 专业版
    price: '$5.99',
    icon: 'iconoir:apple-mac', // <Icon icon="iconoir:apple-mac" />
    color: 'white',
    dl: 'Buy Now',
    url: 'https://github.com/naive-ui/naive-ui/releases',
    version: '1.0.0',
  },
  {
    title: 'Ultimate', // ultimate // 旗舰版
    price: '$5.99',
    icon: 'iconoir:apple-mac', // <Icon icon="iconoir:apple-mac" />
    color: 'white',
    dl: 'Buy Now',
    url: 'https://github.com/naive-ui/naive-ui/releases',
    version: '1.0.0',
  },
]

function download(url: string) {
  if (url === '#download') {
    // open url
    window.open(url, '_blank')
    return
  }

  const msg = 'downloading... ' + url

  message.success(msg, {
    duration: 1500,
  })
}

function info() {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  })
}
</script>

<style module></style>
