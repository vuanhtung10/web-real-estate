<template>
  <div>
    <p v-if="label">{{ label }}</p>
    <input v-model="innerValue" class="border border-black" />
  </div>
</template>
<script>
export default {
  name: 'InputWithValidation',
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
  },
  data() {
    return {
      innerValue: '',
    }
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // value(newVal) {
    //   this.innerValue = newVal
    // },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
}
</script>
