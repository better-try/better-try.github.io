<template>
  <div>
    <div>
      <!--      todo x: 单行 icon = (shadow-1, inline-label) -->
      <q-tabs
        v-model="tab"
        align="justify"
        class="text-white shadow-up-1"
        dense
        indicator-color=""
        no-caps
        style="box-shadow: 0 0 0.2em lightblue"
      >
        <q-tab
          class="text-purple-4"
          icon="book"
          label="Description"
          name="desc"
        />
        <q-tab
          class="text-green-5"
          icon="preview"
          label="Preview"
          name="preview"
        />
        <q-tab
          class="text-blue-5"
          icon="download"
          label="Download"
          name="download"
        />
        <q-tab
          class="text-amber-5"
          icon="money"
          label="Pricing"
          name="pricing"
        />
        <q-tab class="text-red-5" icon="key" label="License" name="license" />
        <q-tab class="text-orange-3" icon="help" label="Help" name="help" />
      </q-tabs>

      <!--      tab views -->
      <q-tab-panels v-model="tab" animated class="q-my-md">
        <q-tab-panel name="desc">
          <n-gradient-text type="warning">
            <n-ellipsis expand-trigger="click" line-clamp="13">
              电灯熄灭 物换星移 泥牛入海<br />
              黑暗好像 一颗巨石 按在胸口<br />
              黑暗好像 一颗巨石 按在胸口<br />
              独脚大盗 百万富翁 摸爬滚打<br />
              电灯熄灭 物换星移 泥牛入海<br />
              黑暗好像 一颗巨石 按在胸口<br />
              独脚大盗 百万富翁 摸爬滚打<br />
              黑暗好像 一颗巨石 按在胸口
            </n-ellipsis>
          </n-gradient-text>

          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="preview">
          <!-- 截图 -->
          <w-screenshots :images="imgs"></w-screenshots>
        </q-tab-panel>

        <q-tab-panel name="download">
          <!-- 下载 -->
          <w-download></w-download>
        </q-tab-panel>

        <q-tab-panel name="pricing">
          <!-- 价格方案 -->
          <w-pricing></w-pricing>
        </q-tab-panel>

        <q-tab-panel name="license">
          <!-- 注册密钥 -->
          <w-license></w-license>
        </q-tab-panel>

        <q-tab-panel name="help">
          <!-- 帮助指南 -->
          <w-help></w-help>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import WScreenshots from '../components/WScreenshots.vue'
import WDownload from '../components/WDownload.vue'
import WPricing from '../components/WPricing.vue'
import WHelp from '../components/WHelp.vue'
import WLicense from '../components/WLicense.vue'

const count = ref(0)
const tab = ref('preview')

const imgs = [
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  'https://cdn.quasar.dev/img/parallax1.jpg',
  'https://cdn.quasar.dev/img/parallax2.jpg',
  'https://cdn.quasar.dev/img/material.png',
  'https://cdn.quasar.dev/img/donuts.png',
]

function download() {
  alert('download')
}

//
// todo x: check `.vitepress/theme/Layout.vue`
//
const message = useMessage()

function info() {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  })
}
</script>

<style scoped>
.myTab {
  font-weight: bold;
  font-size: 20px;
  font-family: 'JetBrains Mono', monospace;
}
</style>
