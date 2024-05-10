<template>
  <!--  todo x: style="justify-content: center"-->
  <div style="">
    <n-space justify="space-between">
      <n-card
        v-for="d in dw"
        :key="d"
        :title="d.title"
        style="min-width: 300px; align-items: center"
      >
        <n-flex vertical>
          <n-button
            secondary
            size="large"
            strong
            type="success"
            @click="download(d.url)"
            >{{ d.dl }}

            <template #icon>
              <n-icon :color="d.color" size="30px">
                <Icon :icon="d.icon" />
              </n-icon>
            </template>
          </n-button>

          <!--              version -->
          <n-gradient-text type="success">
            Latest Version:
            <n-gradient-text type="info">{{ d.version }}</n-gradient-text>
          </n-gradient-text>
        </n-flex>
      </n-card>
    </n-space>
  </div>

  <div>
    <q-card>
      <q-btn color="primary" outline>Hello Quasar</q-btn>

      <br />

      <q-btn color="red" type="success">test</q-btn>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" label="Standard" text-color="black" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
      </div>

      <q-tree></q-tree>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui' //
import { Icon } from '@iconify/vue'
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
    title: 'Windows',
    icon: 'iconoir:windows', // <Icon icon="iconoir:windows" />
    color: 'blue',
    dl: 'Download for Windows',
    url: 'https://github.com/naive-ui/naive-ui/releases',
    version: '1.0.0',
  },
  {
    title: 'macOS',
    icon: 'iconoir:apple-mac', // <Icon icon="iconoir:apple-mac" />
    color: 'white',
    dl: 'Download for macOS',
    url: 'https://github.com/naive-ui/naive-ui/releases',
    version: '1.0.0',
  },
  {
    title: 'Linux',
    icon: 'uil:linux', // <Icon icon="uil:linux" />
    color: 'orange',
    dl: 'Download for Linux',
    url: 'https://github.com/naive-ui/naive-ui/releases',
    version: '1.0.0',
  },
]

function download(url: string) {
  const msg = 'downloading... ' + url

  message.success(msg, {
    duration: 3000,
  })
}

function info() {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  })
}
</script>

<style module></style>
