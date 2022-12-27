<template>
  <div class="container">
    <div class="max-w-[1140px] mx-auto">
      <list-house />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ListHouse: () => import('~/modules/house/ListHouse'),
  },
  data() {
    return {
      //
    }
  },
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
</style>
