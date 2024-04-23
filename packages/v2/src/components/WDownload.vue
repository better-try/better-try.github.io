<template>

  <div style="padding: 5px">

  </div>
  <button :class="$style.button" @click="download()">Download</button>
  <button :class="$style.button" @click="">Buy</button>

  <div>
    The count is: {{count}}
  </div>
  <button :class="$style.button" @click="count++">Increment</button>


</template>

<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)

function download() {
  alert("download")
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
