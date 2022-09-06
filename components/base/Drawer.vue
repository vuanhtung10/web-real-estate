<template>
  <el-drawer
    :visible.sync="drawer"
    size="90%"
    class="drawer-custom"
    direction="btt"
  >
    <slot></slot>
  </el-drawer>
</template>

<script>
import $ from 'jquery'
export default {
  components: {
    ElDrawer: () => import('element-ui/lib/drawer'),
  },
  data() {
    return {
      drawer: false,
      header: null,
    }
  },
  watch: {
    drawer(newval) {
      if (newval === false) {
        this.$emit('closed')
      }
    },
  },
  mounted() {
    $('.drawer-custom .el-drawer__container .el-drawer__header').on(
      'click',
      (evt) => {
        this.drawer = false
      }
    )
  },
  updated() {
    $('.drawer-custom .el-drawer__container .el-drawer__header').on(
      'click',
      (evt) => {
        this.drawer = false
      }
    )
  },
  methods: {
    open() {
      this.drawer = true
    },
  },
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.drawer-custom {
  background-color: rgba(0, 0, 0, 0.65);
  .el-drawer__container {
    display: flex;
    align-items: end;
    .el-drawer {
      position: initial;
      background-color: black;
    }
    .el-drawer__header {
      position: absolute;
      width: 100%;
      top: 0;
      margin-bottom: 0px;
      padding: 0;
    }
    .el-drawer__close-btn {
      margin-top: 15px;
      margin-right: 15px;
    }
    .el-dialog__close {
      color: white;
    }
  }
}
@media (min-width: 768px) {
  .drawer-custom {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
