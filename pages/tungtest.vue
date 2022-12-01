<template>
  <div>
    <list-house-Copy />
  </div>
</template>
<script>
export default {
  components: {
    ListHouseCopy: () => import('~/modules/house/ListHousecopy'),
  },
  data() {
    return {
      //
    }
  },
}
</script>
