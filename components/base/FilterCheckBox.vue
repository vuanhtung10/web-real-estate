<template>
  <div>
    <div
      class="bg-black w-[190px] h-[50px] text-white text-2xl p-4 min-w-[220px]"
    >
      {{ label }}
    </div>
    <checkbox-with-validation v-model="value" :value-options="listOptions" />
  </div>
</template>
<script>
export default {
  components: {
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
  },
  props: {
    label: { type: String, default: '' },
  },
  data() {
    return {
      listOptions: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
      ],
      value: [],
    }
  },
  watch: {
    value(newVal) {
      this.innerValue = newVal
      console.log('here', newVal)
    },
  },
}
</script>
