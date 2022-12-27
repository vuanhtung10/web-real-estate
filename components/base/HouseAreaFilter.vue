<template>
  <div>
    <div>
      <el-cascader
        placeholder="Khu vực và dự án"
        :options="houseDistrict"
        :props="props"
        filterable
      >
        <!-- <hr />
        <div class="flex justify-between mt-2">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            style="background-color: transparent; color: black"
            >Đặt lại</el-button
          >
          <el-button type="primary" icon="el-icon-search">Tìm kiếm</el-button>
        </div> -->
      </el-cascader>
      <el-select
        v-model="value"
        :value-key="value"
        placeholder="Khu vực và dự án"
      >
        <el-option
          v-for="(item, index) in houseDistrict"
          :key="item.value + index"
          :label="item.label"
          :value="item.value"
          class="el-icon-arrow-right flex items-center justify-between p-3 max-w-[360px]"
        >
          <!-- <el-option
            v-for="(item, index) in houseDistrictDetail"
            :key="item.value + index"
            :label="item.label"
            :value="item.value"
          >
          </el-option> -->
        </el-option>
        <hr />
        <div class="flex justify-between mt-2">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            style="background-color: transparent; color: black"
            >Đặt lại</el-button
          >
          <el-button type="primary" icon="el-icon-search">Tìm kiếm</el-button>
        </div>
      </el-select>
    </div>
  </div>
</template>
<script>
// import cloneDeep from 'lodash/cloneDeep'
import {
  houseDistrict,
  houseDistrictDetail,
  houseAddressHK,
} from '~/constants/FilterData'
export default {
  components: {
    ElSelect: () => import('element-ui/lib/select'),
    ElButton: () => import('element-ui/lib/button'),
    ElCascader: () => import('element-ui/lib/cascader'),
    // ElCheckbox: () => import('element-ui/lib/checkbox'),
  },
  data() {
    return {
      houseDistrict,
      houseDistrictDetail,
      houseAddressHK,
      value: null,
      clicked: false,
      props: {
        multiple: true,
      },
    }
  },
  watch: {},
  methods: {},
}
</script>
<style>
.el-input__inner {
  text-align: center;
}
.el-select-dropdown__item {
  border: solid 1px rgb(209 213 219);
  border-radius: 4px;
  margin-bottom: 8px;
}
.el-select-dropdown__list {
  padding: 16px;
}
.el-icon-arrow-right:before {
  display: none;
}
.el-icon-arrow-right:after {
  content: '\e6e0';
}
.el-scrollbar {
  width: 360px;
}
.el-button {
  background: rgb(224, 60, 49);
  padding: 5px 11px !important;
}
</style>
