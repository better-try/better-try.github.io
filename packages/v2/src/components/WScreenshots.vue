<template>
  <div>
    <div class="q-pa-lg">
      <q-carousel
        v-model="slide"
        :autoplay="autoplay"
        animated
        arrows
        infinite
        padding
        thumbnails
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="img in images"
          :key="img"
          :img-src="img"
          :name="img"
          class="q-pa-md"
        />
      </q-carousel>
    </div>

    <!--      todo x: 布局控制-->
    <n-flex justify="center">
      <n-carousel
        :interval="1500"
        align="center"
        autoplay
        dot-placement="bottom"
        show-arrow
        style="width: 90%"
      >
        <div v-for="img in images" :key="img" class="items-center">
          <n-image :src="img" style="width: 100%" width="100%"></n-image>
          <!--                <img :src="img" class="carousel-img" style="width: 100%" />-->
        </div>
      </n-carousel>
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
import { QCarousel, QCarouselSlide } from 'quasar'
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
  },
})

const slide = ref(1)
const autoplay = ref(true)

const imgs = [
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
]
</script>
