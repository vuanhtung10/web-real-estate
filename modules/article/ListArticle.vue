<template>
  <div>
    <div class="flex flex-wrap -mx-3">
      <div
        v-for="(item, index) in listArticle"
        :key="`house${index}`"
        class="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated hover-up-5"
        data-wow-delay=".1s"
        style="
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeInUp;
        "
      >
        <nuxt-link :to="{ name: 'articleDetail', params: { slug: item.slug } }">
          <img class="h-80 w-full object-cover rounded" :src="item.thumbnail" />
          <div class="mt-6 text-sm text-blue-400">
            {{ item.status }}
            <span> Mới Cập nhật: {{ item.create_at | changeFormatDate }} </span>
          </div>
          <h3 class="my-2 text-2xl font-bold font-heading line-clamp-2">
            {{ item.name }}
          </h3>
          <div class="text-blueGray-400 leading-loose line-clamp-3">
            {{ item.description }}
          </div>
        </nuxt-link>
      </div>
      <div class="w-full flex justify-end">
        <pagination
          :total-item="totalItem"
          :page-size="limit"
          class="mb-20"
          @handleChangePage="handleChangePage"
        ></pagination>
      </div>
      <loading-overlay :loading="loading" />
    </div>
  </div>
</template>
<script>
import * as dayjs from 'dayjs'
const updateLocale = require('dayjs/plugin/updateLocale')
dayjs.extend(updateLocale)
require('dayjs/locale/vi')
export default {
  components: {
    LoadingOverlay: () => import('~/components/base/LoadingOverlay'),
    Pagination: () => import('~/components/base/Pagination'),
  },
  filters: {
    changeFormatDate(value) {
      if (!value) return ''
      value = dayjs(value).locale('vi').format('dddd, D/MM/YYYY HH:mm')
      return value
    },
  },
  data() {
    return {
      listArticle: [],
      title: 'Articles',
      totalItem: 21,
      start: 0,
      limit: 6,
      loading: false,
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      const { data } = await this.$axios.get(
        `/article?start=${this.start}&limit=${this.limit}`
      )
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.listArticle = data.data
      this.totalItem = data.total
    },
    handleChangePage(val) {
      this.start = val - 1
      this.loadData(val)
    },
  },
}
</script>
