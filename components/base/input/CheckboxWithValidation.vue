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
        :label="item.code"
        class="hover:bg-[#f2f2f2] items-center py-1"
      >
        <div class="flex items-center">
          <img v-if="item.src" class="w-4 h-4 mr-2" :src="item.src" />
          {{ item.name }}
        </div></el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    // eslint-disable-next-line vue/require-valid-default-prop
    value: { type: Array, default: [] },
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
      console.log('newVal', newVal)
      console.log('newVal', this.listOptions)
      this.innerValue = newVal
    },
    valueOptions(newVal) {
      this.listOptions = newVal
    },
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
    handleCheckedOptionsChange(data) {
      const checkedCount = data.length
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
