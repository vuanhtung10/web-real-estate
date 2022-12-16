<template>
  <div v-loading.fullscreen="loading" type="primary"></div>
</template>
<script>
export default {
  props: {
    loading: { type: Boolean, default: false },
  },
}
</script>
<style>
.el-loading-spinner {
  text-align: -webkit-center;
}
</style>
