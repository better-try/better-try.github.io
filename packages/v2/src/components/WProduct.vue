<template>
    <div>
        <div>
            <n-tabs default-value="screenshots" justify-content="space-evenly" pane-class="text-2xl " size="large" tab-class="text-2xl text-primary" trigger="hover" type="card">
                <n-tab-pane name="desc" tab="Desc">
                    <div>
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
                    </div>
                </n-tab-pane>

                <n-tab-pane name="screenshots" tab="Screenshots">
                    <n-carousel align="center" autoplay class="" dot-placement="bottom" interval="2000">
                        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
                        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
                        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
                    </n-carousel>
                </n-tab-pane>
                <n-tab-pane name="download" tab="Download">
                    <div>
                        <n-space>
                            <n-button strong type="success" @click="download()">Download</n-button>
                            <n-button strong type="info" @click="info()">Buy</n-button>
                        </n-space>
                    </div>

                    Download this app
                </n-tab-pane>
                <n-tab-pane name="buy" tab="Buy">
                    <div class="grid-2">
                        <n-text> The count is: {{ count }}</n-text>
                        <n-space>
                            <n-badge :value="count"> count</n-badge>
                            <n-button strong type="warning" @click="count++">Increment</n-button>
                        </n-space>
                    </div>

                    Buy this app
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const count = ref(0)

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
