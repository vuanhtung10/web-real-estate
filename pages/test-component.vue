<template>
  <div>
    <div></div>
    <!-- <input-with-validation v-model="email" label="email" />
    <switch-with-validation v-model="status" />
    <checkbox-with-validation /> -->
    <filter-check-box label="Size" />
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {
    // InputWithValidation: () =>
    //   import('~/components/base/input/InputWithValidation'),
    // SwitchWithValidation: () =>
    //   import('~/components/base/input/SwitchWithValidation'),
    // CheckboxWithValidation: () =>
    //   import('~/components/base/input/CheckboxWithValidation'),
    FilterCheckBox: () => import('~/components/base/FilterCheckBox'),
  },
  layout: 'fullscreen',
  data() {
    return {
      email: 'abc@gmail.com',
      password: '123456',
      status: true,
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
}
</script>
