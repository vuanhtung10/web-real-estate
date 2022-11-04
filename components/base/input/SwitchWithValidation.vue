<template>
  <div class="flex items-center">
    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        v-model="innerValue"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        :active-value="activeValue"
        :inactive-value="inactiveValue"
      >
      </el-switch>
    </el-tooltip>
    <p class="ml-1">Active</p>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    // eslint-disable-next-line vue/require-prop-types
    value: { default: '' },
    activeColor: { type: String, default: '	#409EFF' },
    inactiveColor: { type: String, default: '#C0CCDA' },
    activeValue: { type: Boolean, default: true },
    inactiveValue: { type: Boolean, default: false },
  },
  data() {
    return {
      innerValue: false,
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
}
</script>
