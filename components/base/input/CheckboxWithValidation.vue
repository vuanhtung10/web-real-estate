<template>
  <div class="checkbox-custom">
    <el-checkbox
      v-if="hideCheckAll"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >Chọn tất cả</el-checkbox
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
        :label="item"
        class="hover:bg-[#f2f2f2] py-1"
      >
        <div class="flex items-center">
          <!-- <img v-if="item.src" class="w-4 h-4 mr-2" :src="item.src" /> -->
          {{ item.name }}
        </div>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  props: {
    unCheckAll: { type: Boolean, default: false },
    // label: { type: String, default: '' },

    // eslint-disable-next-line vue/require-valid-default-prop
    value: { type: Array, default: [] },

    // eslint-disable-next-line vue/require-valid-default-prop
    valueOptions: { type: Array, default: [] },
    hideCheckAll: { type: Boolean, default: false },
  },
  data() {
    return {
      checkAll: false,
      listOptions: this.valueOptions,
      innerValue: [],
      // isIndeterminate: true,
    }
  },
  watch: {
    unCheckAll() {
      this.checkAll = false
    },

    innerValue(newVal) {
      console.log('innervalue', newVal)
      this.$emit('input', newVal)
    },
    value(newVal) {
      console.log('newVal', this.value)
      console.log('listOptions', this.listOptions)
      this.innerValue = newVal
    },
    valueOptions(newVal) {
      this.listOptions = newVal
    },
  },
  mounted() {
    if (this.value) {
      this.innerValue = this.value
      console.log('innnerValue', this.innerValue)
      console.log('value', this.value)
    }
  },
  methods: {
    handleCheckAllChange(val) {
      console.log('val', val)
      if (!this.value) {
        this.innerValue = this.listOptions
      }
      if (this.value && val) {
        console.log('value', this.value)
        console.log('innervalue', this.innervalue)
        console.log('listOptions', this.listOptions)
        this.innerValue = this.value.concat(this.listOptions)
      }
      if (this.value && !val) {
        console.log('value', this.value)
        const listOptionsCode = this.listOptions.map((item) => item.code)
        const newInnerValue = this.value.filter(
          (item) => !listOptionsCode.includes(item.code)
        )
        this.innerValue = newInnerValue
        console.log('innervalue', this.innervalue)
      }
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
.el-checkbox {
  padding: 0 6px;
}
</style>
