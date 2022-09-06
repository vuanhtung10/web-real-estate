<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold pb-6">Đăng nhập</h1>
    <loading
      :active.sync="isConfirm"
      class="bg-transparent flex justify-center"
      :color="'#34d399'"
      :is-full-page="true"
      :opacity="0"
    ></loading>
  </div>
</template>

<script>
export default {
  name: 'LoginWithGoogle',
  components: { Loading: () => import('vue-loading-overlay') },
  layout: 'fullscreen',
  auth: 'guest',
  data: () => ({ isConfirm: true }),
  mounted() {
    this.authenticate()
  },
  methods: {
    async authenticate() {
      try {
        const { data } = await this.$axios.get(
          'user/google/oauth/callback?code=' + this.$route.query.code
        )
        if (data) {
          this.$auth.setStrategy('local')
          this.$auth.setUserToken(data.token)
          this.$auth.fetchUser()
          this.$router.push('/')
          // this.$router.go({
          //   name: 'index',
          //   query: {},
          // })
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
