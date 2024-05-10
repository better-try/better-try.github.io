<template>
  <div>
    <n-flex justify="center">
      <n-card style="min-width: 300px; max-width: 500px">
        <n-space vertical>
          <n-space align="center" vertical>
            <n-text class="text-2xl" type="warning">License Management</n-text>
          </n-space>

          <n-form
            ref="formRef"
            :model="model"
            :rules="rules"
            :style="{
              maxWidth: '640px',
            }"
            class="p-5"
            label-width="auto"
            require-mark-placement="right-hanging"
            show-feedback
            size="large"
          >
            <n-form-item label="Product Version" path="radioGroupValue">
              <n-radio-group
                v-model:value="model.radioGroupValue"
                name="radioGroup"
              >
                <n-space>
                  <n-radio value="v1"> Version 1</n-radio>
                  <n-radio value="v2"> Version 2</n-radio>
                  <n-radio value="v3"> Version 3</n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item>

            <n-form-item label="License Email" path="inputValue">
              <n-input v-model:value="model.inputValue" placeholder="Email" />
            </n-form-item>

            <n-form-item label="License Key" path="textareaValue">
              <n-input
                v-model:value="model.textareaValue"
                :autosize="{
                  minRows: 3,
                  maxRows: 5,
                }"
                placeholder="License Key"
                type="textarea"
              />
            </n-form-item>

            <n-space align="center" vertical>
              <n-button quaternary type="error" @click="info"
                >Forgot Your Key?
              </n-button>
              <n-button type="info" @click="info">Activate</n-button>
            </n-space>
          </n-form>
        </n-space>
      </n-card>
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
import { FormRules, useMessage } from 'naive-ui'
import { ref } from 'vue'

const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null,
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null,
})

const rules: FormRules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: 'Please Input Email',
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: 'Please Input License Key',
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 selectValue',
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 multipleSelectValue',
  },
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue',
  },
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入 nestedValue.path1',
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入 nestedValue.path2',
    },
  },
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请选择 checkboxGroupValue',
  },
  radioGroupValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 radioGroupValue',
  },
}

const message = useMessage()

function info() {
  message.info('License Management')
}
</script>
