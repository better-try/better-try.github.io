<template>
  <n-button @click="info">License Management</n-button>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info('License Management')
}
</script>
