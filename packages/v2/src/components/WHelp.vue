<template>
  <q-layout>
    <q-page-container>
      <q-card class="q-ma-sm q-py-md q-gutter-lg" flat>
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary" outline>Hello Quasar</q-btn>
          <q-btn color="red" type="success">test</q-btn>
          <q-btn color="white" label="Standard" text-color="black" />
          <q-btn color="primary" label="Primary" />
          <q-btn color="amber" glossy label="Amber" />
          <q-btn color="brown-5" label="Brown 5" />
          <q-btn color="purple" label="Purple" />
          <q-btn color="black" label="Black" />
        </div>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
// todo x: 需要手动引入 or 全局注册(.vitepress/theme/index.ts)
import { QBtn } from 'quasar'

const message = useMessage()

function info() {
  message.info('Help')
}
</script>
