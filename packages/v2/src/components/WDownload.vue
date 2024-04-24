<template>
    <n-flex>
        <n-flex vertical>
            <n-split :min="0.25" class="m-5 p-5" default-size="0.3" direction="horizontal">
                <template #1>
                    <n-flex class="px-5">
                        <n-card>
                            <div>
                                <n-avatar class="bg-red-400 text-4xl" size="large"> M</n-avatar>
                            </div>
                            <n-gradient-text class="text-2xl" type="info"> Desc</n-gradient-text>
                            <br />

                            <n-gradient-text type="warning">
                                <n-ellipsis expand-trigger="click" line-clamp="13">
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    黑暗好像 一颗巨石 按在胸口<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    黑暗好像 一颗巨石 按在胸口<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    黑暗好像 一颗巨石 按在胸口<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    电灯熄灭 物换星移 泥牛入海<br />
                                    黑暗好像 一颗巨石 按在胸口<br />
                                    独脚大盗 百万富翁 摸爬滚打<br />
                                    黑暗好像 一颗巨石 按在胸口
                                </n-ellipsis>
                            </n-gradient-text>
                        </n-card>
                    </n-flex>
                </template>
                <template #2>
                    <div class="px-5">
                        <n-card content-class="">
                            <n-row class="">
                                <n-carousel align="center" autoplay class="" dot-placement="bottom" interval="2000">
                                    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
                                    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
                                    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
                                </n-carousel>
                            </n-row>
                        </n-card>
                    </div>
                </template>
            </n-split>
        </n-flex>
    </n-flex>
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
