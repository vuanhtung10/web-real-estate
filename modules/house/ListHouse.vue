<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="(item, index) in listHouse" :key="`house${index}`">
      {{ item.title }}
    </div>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
const listHouse = [
  { title: 'House 1', img: '~/assets/imgs/monst-logo.svg' },
  { title: 'House 2', img: '~/assets/imgs/monst-logo.svg' },
  { title: 'House 3', img: '~/assets/imgs/monst-logo.svg' },
  { title: 'House 4', img: '~/assets/imgs/monst-logo.svg' },
]
export default {
  data() {
    return {
      listHouse: cloneDeep(listHouse),
    }
  },
}
</script>
