<template>
  <div>
    <div class="flex w-[936px] mx-auto space-x-[80px]">
      <div
        v-if="houseDetail"
        class="flex flex-col mb-[20px]"
        v-html="houseDetail.description"
      ></div>
    </div>
    <loading-overlay :loading="loading" />
  </div>
</template>
<script>
export default {
  components: {
    LoadingOverlay: () => import('~/components/base/LoadingOverlay'),
  },
  data() {
    return {
      houseDetail: null,
      slug: '',
      loading: false,
    }
  },
  mounted() {
    this.slug = this.$route.params.slug
    this.loadData()
    console.log(this.$route)
  },
  methods: {
    async loadData() {
      this.loading = true
      const { data } = await this.$axios.get('/house/findbyslug/' + this.slug)
      console.log('data', data)
      this.houseDetail = data
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>
<style></style>
