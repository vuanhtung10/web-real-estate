<template>
  <div class="checkbox-custom">
    <el-checkbox v-model="checkAll" @change="handleCheckAllChange"
      >Check all</el-checkbox
    >
    <el-checkbox-group
      v-if="listOptions"
      v-model="innerValue"
      text-color="red"
      fill="#000000"
      @change="handleCheckedOptionsChange"
    >
      <el-checkbox
        v-for="(item, index) in listOptions"
        :key="item.toString() + index"
        :label="item.value"
        >{{ item.text }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    // eslint-disable-next-line vue/require-prop-types
    value: { default: '' },
    // eslint-disable-next-line vue/require-valid-default-prop
    valueOptions: { type: Array, default: [] },
  },
  data() {
    return {
      checkAll: false,
      listOptions: this.valueOptions,
      innerValue: [],
    }
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      this.innerValue = newVal
      console.log('newVal', newVal)
    },
  },
  mounted() {
    console.log(this.listOptions)
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.innerValue = val ? this.valueOptions.map((item) => item.value) : []
    },
    handleCheckedOptionsChange(value) {
      console.log('value', value)
      console.log('innerValue', this.innerValue)
      const checkedCount = value.length
      this.checkAll = checkedCount === this.listOptions.length
    },
  },
}
</script>
<style lang="scss">
.checkbox-custom {
  .el-checkbox__label {
    color: black !important;
  }
  .el-checkbox__inner::after {
    border: 1px solid black;
    border-left: 0;
    border-top: 0;
  }
  .el-checkbox__inner {
    border-color: black !important;
    background-color: white !important;
  }
}
</style>
