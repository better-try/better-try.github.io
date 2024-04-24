<template>


  <n-flex>

    <n-flex vertical>


      <n-split direction="horizontal"
               default-size="0.3"
               class="m-5 p-5"
               :max="0.75" :min="0.25">
        <template #1>


          <n-flex vertical>
            <div>
              <n-avatar
                class="bg-red-400 text-4xl"
                size="large"
              >
                M
              </n-avatar>
            </div>


            <div>
              <li>Awesome Wallet Application</li>
              <li>support Windows/macOS/Linux</li>
              <li>support multiple blockchains</li>
              <li>support multiple languages</li>
            </div>
          </n-flex>


        </template>
        <template #2>

          <div class="px-5">
            <n-card content-class="">
              <n-row class="">
                <n-carousel
                  dot-placement="bottom"
                  interval="2000"
                  align="center"
                  class=""
                  autoplay>
                  <img
                    class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                  >
                  <img
                    class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                  >
                  <img
                    class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                  >
                </n-carousel>
              </n-row>

            </n-card>
          </div>


        </template>
      </n-split>

    </n-flex>


    <n-card theme="dark">
      <n-space>
        <n-button strong type="success" @click="download()">Download</n-button>
        <n-button strong type="info" @click="info()">Buy</n-button>
      </n-space>


      <div class="grid-2">
        <n-text> The count is: {{ count }}</n-text>

        <n-space>
          <n-badge :value="count"> count</n-badge>

          <n-button strong type="warning" @click="count++">Increment</n-button>
        </n-space>
      </div>

    </n-card>

  </n-flex>


</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useMessage} from "naive-ui";

const count = ref(0)

function download() {
  alert("download")
}


//
// todo x: check `.vitepress/theme/Layout.vue`
//
const message = useMessage()

function info() {
  message.info(
    "I don't know why nobody told you how to unfold your love",
    {
      keepAliveOnHover: true
    }
  )
}

</script>

<style module>
.button {
  margin: 5px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: orange;
}

.button:hover {
  background-color: blue;
}

</style>
