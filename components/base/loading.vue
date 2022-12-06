<template>
  <el-button v-loading.fullscreen.lock="loading" type="primary"> </el-button>
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
.el-button {
  border: none;
  padding: 0;
}
</style>
