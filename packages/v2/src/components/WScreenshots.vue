<template>
    <n-flex justify="center" vertical>
        <n-carousel align="center" autoplay dot-placement="bottom" interval="1500" show-arrow style="width: 80%">
            <div v-for="img in images" :key="img" class="items-center">
                <n-image :src="img" style="width: 100%" width="100%"></n-image>
                <!--                <img :src="img" class="carousel-img" style="width: 100%" />-->
            </div>
        </n-carousel>
    </n-flex>
</template>

<script lang="ts" setup>
const props = defineProps({
    images: {
        type: Array,
    },
})

const imgs = [
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
]
</script>
