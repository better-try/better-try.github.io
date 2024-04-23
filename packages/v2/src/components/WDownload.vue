<template>

  <n-message-provider>
    <n-card theme="dark">
      <n-space>
        <n-button strong type="success" @click="download()">Download</n-button>
        <n-button strong type="info" @click="info()">Buy</n-button>
      </n-space>


      <div class="grid-2">
        <n-text> The count is: {{ count }}</n-text>

        <n-space>
          <n-badge :value="count"> count </n-badge>

          <n-button strong type="warning" @click="count++">Increment</n-button>
        </n-space>
      </div>

    </n-card>


  </n-message-provider>


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
