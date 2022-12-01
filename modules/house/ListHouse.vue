<template>
  <div class="container">
    <div class="grid grid-cols-5 gap-4">
      <div
        v-for="(item, index) in listHouse"
        :key="`house${index}`"
        class="p-3 shadow-hover"
      >
        <nuxt-link :to="{ name: 'index' }">
          <div class="relative w-full pt-[100%]">
            <img class="absolute h-full object-cover inset-0" :src="item.img" />
            <div
              class="bg-auto absolute top-3 left-3 z-10 bg-no-repeat flex justify-center item-center w-6 h-5"
              :style="{ backgroundImage: `url(${iconCamera})` }"
            >
              <span class="text-white text-xs">12</span>
            </div>
          </div>
          <div class="text-sm mt-2 line-clamp-3">{{ item.description }}</div>
          <div class="mt-[2px] text-[#9b9b9b]">{{ item.name }}</div>
          <div class="text-sm">
            {{ item.area }}
            <span>m2</span>
            - {{ item.numbersRoom }}
            <span>phòng ngủ</span>
          </div>
          <div class="mt-[2px] text-[#d0021b] text-base font-bold">
            {{ item.price }} <span>tỷ đồng</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Pagination />
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
import iconCamera from 'assets/imgs/number-image.svg'
const listHouse = [
  {
    img: require('~/assets/imgs/anh-chu-meo-de-thuong_020434248.jpg'),
    description:
      'NHÀ 360 XÃ ĐÀN, S=33M, 6 TẦNG, MT= 3M, GIÁ 3.5 TỶ NHÀ 360 XÃ ĐÀN, S=33M, 6 TẦNG, MT= 3M, GIÁ 3.5 TỶNHÀ 360 XÃ ĐÀN, S=33M, 6 TẦNG, MT= 3M, GIÁ 3.5 TỶNHÀ 360 XÃ ĐÀN, S=33M, 6 TẦNG, MT= 3M, GIÁ 3.5 TỶ',
    name: 'House 1',
    area: 33,
    numbersRoom: 4,
    price: 3.5,
  },
  {
    img: require('~/assets/imgs/anh-chu-meo-de-thuong_020434248.jpg'),
    description: '',
    name: 'House 2',
    area: '',
    numbersRoom: '',
    price: '',
  },
  {
    img: require('~/assets/imgs/anh-chu-meo-de-thuong_020434248.jpg'),
    description: '',
    name: 'House 3',
    area: '',
    numbersRoom: '',
    price: '',
  },
  {
    img: require('~/assets/imgs/anh-chu-meo-de-thuong_020434248.jpg'),
    description: '',
    name: 'House 4',
    area: '',
    numbersRoom: '',
    price: '',
  },
  {
    img: require('~/assets/imgs/anh-chu-meo-de-thuong_020434248.jpg'),
    description: '',
    name: 'House 5',
    area: '',
    numbersRoom: '',
    price: '',
  },
]
export default {
  components: {
    Pagination: () => import('~/components/base/Pagination.vue'),
  },
  data() {
    return {
      listHouse: cloneDeep(listHouse),
      iconCamera,
    }
  },
}
</script>
