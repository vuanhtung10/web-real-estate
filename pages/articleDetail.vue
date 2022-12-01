<template>
  <div>
    <div v-if="articleDetail" v-html="articleDetail.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleDetail: null,
      slug: '',
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
      const { data } = await this.$axios.get('/article/findbyslug/' + this.slug)
      setTimeout(() => {
        this.loading = false
      }, 2000)
      console.log(data)
      this.articleDetail = data
    },
  },
}
</script>
