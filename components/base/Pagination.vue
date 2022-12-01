<template>
  <el-pagination
    v-if="!loading && totalItem > 0"
    :key="keyPagination"
    class="pagination-custom"
    background
    layout=" prev, pager, next"
    :total="totalItem"
    :current-page.sync="currentPage"
    :page-size.sync="pageSize"
    :default-current-page="currentPage"
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
      default: 10,
    },
    start: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
      newItem: '',
      keyPagination: 0,
      loading: true,
    }
  },
  watch: {
    newItem(newval) {
      this.$emit('handleSizeChange', newval)
    },
  },
  mounted() {
    if (this.start) {
      this.currentPage = this.start
      this.keyPagination = +1
    }
    this.loading = false
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
      border: solid 1px black;
      &:hover {
        background-color: black !important;
        color: white !important;
      }
      &.active {
        background-color: black !important;
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
      background-color: black !important;
      color: white !important;
    }
  }
}
</style>
