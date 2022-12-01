<template>
  <div>
    <list-house />
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
