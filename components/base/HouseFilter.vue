<template>
  <div>
    <div>
      <el-select
        v-model="value"
        :value-key="value"
        placeholder="select"
        @change="handleChangeSelect"
      >
        <div class="flex flex-col px-4 pt-4 pb-3">
          <div class="flex items-center pb-4">
            <el-input
              v-model="input0"
              placeholder="Từ"
              @change="changeInput0"
            ></el-input>
            <span class="el-icon-right px-4"></span>
            <el-input
              v-model="input1"
              placeholder="Đến"
              @change="changeInput1"
            ></el-input>
          </div>
          <div class="slider-demo-block px-4">
            <el-slider
              ref="slider"
              v-model="slider_value"
              range
              :max="80"
              @change="handleChangeSlider"
            />
          </div>
        </div>
        <hr />
        <el-option
          v-for="(item, index) in priceRange"
          :key="item.value + index"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import { priceRange } from '~/constants/FilterData'
export default {
  components: {
    ElInput: () => import('element-ui/lib/input'),
    ElSelect: () => import('element-ui/lib/select'),
    ElSlider: () => import('element-ui/lib/slider'),
  },
  data() {
    return {
      priceRange,
      slider_value: [1, 80],
      value: null,
      unit: 'triệu/m²',
      input0: null,
      input1: null,
    }
  },
  watch: {
    slider_value(newVal) {
      if (newVal) {
        this.value = newVal
        this.value =
          this.slider_value[0] +
          ' ' +
          '-' +
          ' ' +
          this.slider_value[1] +
          ' ' +
          this.unit
      }
    },
    value(item) {
      this.$emit('input', this.value)
    },
    input0(newVal) {
      console.log('abc')
      if (newVal) {
        this.slider_value[0] = newVal
      } else {
        this.slider_value[0] = 0
      }
      this.$refs.slider.setValues()
    },
    input1(newVal) {
      if (newVal) {
        this.slider_value[1] = newVal
        this.slider_value[0] = this.input0
      } else {
        this.slider_value[1] = 80
        this.slider_value[0] = this.input0
        console.log('here2', this.slider_value[0])
      }
      this.$refs.slider.setValues()
    },
  },
  methods: {
    handleChangeSlider() {
      this.value =
        this.slider_value[0] +
        ' ' +
        '-' +
        ' ' +
        this.slider_value[1] +
        ' ' +
        this.unit
    },
    handleChangeSelect() {
      this.slider_value = cloneDeep(this.value)
      this.value = this.value[0] + '-' + this.value[1] + ' ' + this.unit
      this.input0 = this.slider_value[0]
      this.input1 = this.slider_value[1]
    },
    changeInput0(val) {
      // this.$refs.slider.setValues()
    },
    changeInput1(val) {
      // this.$refs.slider.setValues()
    },
  },
}
</script>
<style>
.el-input__inner {
  text-align: center;
}
</style>
