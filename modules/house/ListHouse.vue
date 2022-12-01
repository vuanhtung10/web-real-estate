<template>
  <div class="container">
    <div class="grid grid-cols-5 gap-4">
      <div
        v-for="(item, index) in listHouse"
        :key="`house${index}`"
        class="p-3 shadow-hover"
      >
        <nuxt-link :to="{ name: 'articleDetail', params: { slug: item.slug } }">
          <div class="relative w-full pt-[100%]">
            <img
              class="absolute h-full object-cover inset-0"
              :src="item.thumbnail"
            />
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
    <Pagination
      :total-item="totalItem"
      :page-size="limit"
      :start="start"
      class="float-right pb-20"
      @handleChangePage="handleChangePage"
    />
    <Loading :loading="loading" />
  </div>
</template>
<script>
import iconCamera from 'assets/imgs/number-image.svg'
export default {
  components: {
    Pagination: () => import('~/components/base/Pagination.vue'),
    Loading: () => import('~/components/base/loading.vue'),
  },
  data() {
    return {
      listHouse: [],
      iconCamera,
      totalItem: 0,
      start: 1,
      limit: 4,
      loading: false,
    }
  },
  watch: {
    '$route.query.page'(search) {
      if (
        this.$route.query.page &&
        Number.isInteger(parseInt(this.$route.query.page)) &&
        parseInt(this.$route.query.page)
      ) {
        this.start = parseInt(this.$route.query.page)
      }
      this.loadData()
    },
  },
  mounted() {
    if (
      this.$route.query.page &&
      Number.isInteger(parseInt(this.$route.query.page)) &&
      parseInt(this.$route.query.page)
    ) {
      this.start = parseInt(this.$route.query.page)
      console.log('tung')
    }
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      const { data } = await this.$axios.get(
        `/article?start=${this.start - 1}&limit=${this.limit}`
      )
      // setTimeout(() => {
      //   this.loading = false
      // }, 2000)
      this.loading = false
      this.listHouse = data.data
      this.totalItem = data.total
    },
    handleChangePage(val) {
      // console.log('val la:', val)
      // this.start = val - 1
      // this.loadData(val)
      this.$router.replace({ path: 'article', query: { page: val } })
    },
  },
}
</script>
