<template>


  <n-flex>

    <n-flex vertical>
      <n-avatar
        :style="{
      color: 'yellow',
      backgroundColor: 'red'
    }"
      >
        M
      </n-avatar>


      <n-split direction="horizontal"
               default-size="0.3"
               class=""
               :max="0.75" :min="0.25">
        <template #1>
          Pane 1
        </template>
        <template #2>




          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1">Click</div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>


          <button class="btn btn-red">One</button>
          <button class="btn btn-secondary">Two</button>
          <button class="btn btn-accent btn-outline">Three</button>



          <div  class="m-5 p-5 text-icon p4 gap4">
            test
          </div>

          <div class="btn p-2 m-2 text-primary">
            btn
          </div>


          <div class="m-5 p-5 text-icon" style="font-size: 40px; padding: 10px">
            test
          </div>
          <div class="m-5 p-5">
            Pane 2
          </div>


          <n-card size="medium" content-class="p-5 m-5">


            <n-row class="m-5 p-5">
              <n-carousel
                dot-placement="bottom"
                interval="2000"
                align="center"
                class="m-2"
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

        </template>
      </n-split>


      <n-skeleton text size="large"></n-skeleton>

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
