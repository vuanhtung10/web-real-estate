<template>
  <el-pagination
    v-if="!loading && totalItem > 0"
    :key="keyPagination"
    class="pagination-custom"
    primary
    background
    layout="prev, pager, next"
    :total="totalItem"
    :current-page.sync="currentPage"
    :page-size="pageSize"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  >
    <slot></slot>
  </el-pagination>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
export default {
  components: {
    ElPagination: () => import('element-ui/lib/pagination'),
  },
  props: {
    totalItem: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      currentPage: 1,
      newItem: '',
      loading: false,
    }
  },
  watch: {
    newItem(newval) {
      this.$emit('handleSizeChange', newval)
    },
  },
  mounted() {
    console.log('totalItem', this.totalItem)
    console.log('pageSize', this.pageSize)
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleChangePage', val)
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
  },
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.pagination-custom {
  display: flex;
  .el-pagination__sizes,
  .el-select,
  .el-input__inner {
    width: 100px;
    height: 40px;
    color: black;
    font-weight: 800;
  }
  .el-pager {
    display: flex;
    .number {
      background-color: white !important;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      // border: solid 1px black;
      &:hover {
        background-color: rgb(59 130 246) !important;
        color: white !important;
      }
      &.active {
        background-color: rgb(96 165 250) !important;
        color: white !important;
      }
    }
    .btn-quicknext,
    .btn-quickprev {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: end;
      background-color: white !important;
    }
  }
  .btn-next,
  .btn-prev {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: white !important;
    // border: solid 1px black;
    &:hover {
      background-color: rgb(59 130 246) !important;
      color: white !important;
    }
  }
}
</style>
