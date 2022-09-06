<template>
  <div class="w-full grid gap-9" :class="classGrids">
    <nuxt-link
      v-for="item in items"
      :key="item._id"
      class="flex cursor-pointer"
      :to="{ name: 'chapter', params: { id: item._id } }"
    >
      <img
        v-if="item.cover"
        v-lazy="item.cover"
        class="rounded-2xl object-cover object-top w-28 h-32 mr-6"
      />
      <div
        v-else
        class="flex items-center justify-center bg-secondary rounded-xl flex-1 text-white text-2xl font-Anton h-36 w-36 mr-6"
      >
        Chương {{ item.index }}
      </div>
      <div class="flex-1">
        <p class="text-lg">{{ item.display_name | truncate }}</p>
        <p class="text-black text-opacity-70 mt-3">Số trang: 9</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import truncate from 'lodash/truncate'
export default {
  filters: {
    truncate(text) {
      return truncate(text, {
        length: 50,
        separator: ' ',
      })
    },
  },
  props: {
    items: { type: Array, default: () => [] },
    grids: { type: Array, default: () => [1, 3, 3] },
  },
  data() {
    return {
      awslink: process.env.awslink,
    }
  },
  computed: {
    classGrids() {
      const result =
        'grid-cols-' +
        this.grids[0] +
        ' md:grid-cols-' +
        this.grids[1] +
        ' lg:grid-cols-' +
        this.grids[2]
      return result
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/css/font-awesome.min.css';
</style>
