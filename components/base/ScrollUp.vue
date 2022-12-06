<template>
  <div
    v-if="isVisible"
    class="w-10 h-10 leading-[50px] text-white rounded cursor-pointer flex items-center justify-center content-center self-center"
    style="background-color: #086ad8"
    @click="scrollToTop"
  >
    <svg
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
      // position: window.scrollY,
    }
  },
  watch: {
    // position(newVal) {
    //   console.log(newVal)
    // },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.isVisible = window.top.scrollY > 50
      // this.windowTop = window.top.scrollY
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
