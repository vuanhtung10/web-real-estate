<template>
  <div
    class="flex grow px-4 bg-blueGray-50 rounded border border-gray-200 items-center justify-center"
  >
    <div v-if="position === 'preffix'" class="mr-2">
      <slot></slot>
    </div>
    <el-input
      ref="input"
      v-model="innerValue"
      :placeholder="placeholder"
      :type="type"
      class="input-box"
    />
    <slot v-if="position === 'suffix'"></slot>
  </div>
</template>
<script>
// <div class="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
// <input
//       v-model="innerValue"
//       placeholder="Enter your password"
//       class="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
//       type="password"
//     />
export default {
  name: 'InputWithValidation',
  components: {
    ElInput: () => import('element-ui/lib/input'),
  },
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    position: { type: String, default: 'suffix' },
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
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {},
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.input-box {
  .el-input__inner {
    border: none;
    background: transparent;
    padding-left: 0px;
    padding-right: 0px;
    font-weight: 600;
  }
  .el-input__inner::placeholder {
    color: #000;
    opacity: 0.4;
  }
}
</style>
