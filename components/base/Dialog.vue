<template>
  <el-dialog
    :title="title"
    :visible.sync="isOpen"
    center
    class="dialog-custom w-full"
  >
    <slot></slot>
    <div
      v-if="showConfirm"
      slot="footer"
      class="dialog-footer flex justify-center"
    >
      <button
        class="px-8 py-3 rounded hover:bg-opacity-80 focus:bg-opacity-80 flex items-center justify-center bg-white text-black mr-4"
        @click="close"
      >
        {{ labelClose }}
      </button>
      <button
        class="px-8 py-3 rounded hover:bg-opacity-80 focus:bg-opacity-80 flex items-center justify-center bg-primary"
        @click="confirm"
      >
        {{ labelConfirm }}
      </button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {
    ElDialog: () => import('element-ui/lib/dialog'),
    // ElButton: () => import('element-ui/lib/button'),
  },
  props: {
    title: { type: String, default: 'Thông báo' },
    labelClose: { type: String, default: 'Đóng' },
    labelConfirm: { type: String, default: 'Đồng ý' },
    showConfirm: { type: Boolean, default: true },
    confirmed: { type: Function, default: () => {} },
    closed: { type: Function, default: () => {} },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen(val) {
      this.$emit('isOpen', val)
    },
  },
  methods: {
    open() {
      this.isOpen = true
    },
    confirm() {
      this.isOpen = false
      this.confirmed()
    },
    close() {
      this.isOpen = false
      this.closed()
    },
  },
}
</script>
<style lang="scss">
.dialog-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-dialog__title {
    color: rgba(255, 255, 255, 0.7);
  }
  .el-dialog {
    width: fit-content;
    padding: 42px 24px 42px 24px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .btn-confirm {
    color: white;
    &:hover {
      // opacity: 70%;
    }
  }
  .btn-close {
    color: #000000;
    &:hover {
      // opacity: 70%;
    }
  }
}
@media (min-width: 768px) {
  .dialog-custom {
    .el-dialog {
      padding: 64px 36px 64px 36px;
    }
  }
}
</style>
