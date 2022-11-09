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
    <div></div>
    <input-with-validation v-model="email" label="email" />
    <switch-with-validation v-model="status" />
    <checkbox-with-validation v-model="value" :value-options="listOptions" />
    <!-- <filter-check-box label="Size" class="w-[290px]" /> -->
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    Pagination: () => import('~/components/base/Pagination'),
    SwitchWithValidation: () =>
      import('~/components/base/input/SwitchWithValidation'),
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
    // FilterCheckBox: () => import('~/components/base/FilterCheckBox'),
  },
  layout: 'fullscreen',
  data() {
    return {
      email: 'abc@gmail.com',
      password: '123456',
      status: true,
      listOptions: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
      ],
    }
  },
  watch: {
    email(newVal) {
      console.log('email', this.email)
    },
    status(newVal) {
      console.log('status', this.status)
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
