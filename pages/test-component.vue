<template>
  <div>
    <div>tesst</div>
    <input-with-validation v-model="email" label="email" />
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
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
}
</script>
