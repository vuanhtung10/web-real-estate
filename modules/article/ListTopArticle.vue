<template>
  <div>
    <div class="container w-full mx-auto px-4">
      <div class="flex flex-wrap -mx-3">
        <div
          v-for="(item, index) in listTopArticle"
          :key="`house${index}`"
          class="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated hover-up-5"
          data-wow-delay=".1s"
          style="
            visibility: visible;
            animation-delay: 0.1s;
            animation-name: fadeInUp;
          "
          :class="{ active: index == 1 }"
        >
          <nuxt-link :to="{ name: 'index' }">
            <img class="h-80 w-full object-cover rounded" :src="item.img" />
            <div class="mt-6 text-sm text-blue-400">
              {{ item.status }}
              <span>Mới Cập nhật: 3/12/2021 </span>
              - {{ item.time }}
              <span> 9:50:43 AM</span>
            </div>
            <h3 class="my-2 text-2xl font-bold font-heading">
              {{ item.name }}
            </h3>
            <div class="text-blueGray-400 leading-loose">
              {{ item.description }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <slot></slot>
    </div>

    <section></section>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
const listTopArticle = [
  {
    img: require('~/assets/imgs/articleimgs-1.jpg'),
    description:
      'Giới đầu tư có xu hướng ưu tiên những dự án được ưu đãi thanh toán, hỗ trợ tài chính để giảm áp lực tài chính và đảm bảo lợi nhuận. ',
    name: 'Hướng đi của nhà đầu tư khi dòng vốn tín dụng gặp khó',
    status: 33,
    time: 4,
  },
  {
    img: require('~/assets/imgs/articleimgs-2.jpg'),
    description:
      'Nhiều chuyên gia cho rằng, thị trường bất động sản đứng trước nhiều khó khăn, song vẫn có cơ hội nhờ kinh tế vĩ mô phục hồi khá và đòn bẩy hạ tầng.',
    name: 'Cơ hội nào cho nhà đầu tư khi bất động sản giảm tốc',
    status: '',
    time: '',
  },
]
export default {
  data() {
    return {
      listTopArticle: cloneDeep(listTopArticle),
      title: 'Articles',
    }
  },
}
</script>
<style>
.active {
  flex-grow: 1;
}
</style>
