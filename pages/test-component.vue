<template>
  <div>
    <div>test</div>
    <input-with-validation v-model="email" label="email" />
    <div>
      <pagination
        :total-item="totalItem"
        @handleChangePage="handleChangePage"
        @handleSizeChange="handleSizeChange"
      ></pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    Pagination: () => import('~/components/base/Pagination'),
  },
  layout: 'fullscreen',
  data() {
    return {
      email: 'abc@gmail.com',
      password: '123456',
    }
  },
  watch: {
    email(newVal) {
      console.log('email', this.email)
    },
  },
  methods: {
    loadData(page) {
      // viet api vao day
    },
    handleChangePage(val) {
      console.log('val', val)
      this.loadData(val)
    },
    handleSizeChange(val) {
      console.log('Page Size Change', val)
    },
    totalItem(val) {
      console.log('Page Size Change', val)
    },
  },
}
</script>
