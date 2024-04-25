<template>
    <n-button @click="info">Help</n-button>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
    message.info('Help')
}
</script>
