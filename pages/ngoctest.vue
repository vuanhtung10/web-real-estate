<template>
  <div>
    <list-house />
    <div class="grid grid-cols-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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
