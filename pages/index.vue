<template>
  <div class="flex-1">
    <main-container> Trang chủ </main-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
export default {
  auth: false,
  components: {
    MainContainer: () => import('~/components/base/MainContainer'),
  },
  data() {
    return {
      //
    }
  },
}
</script>
