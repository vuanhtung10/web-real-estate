<template>
  <section
    class="py-3 lg:bg-red-500 main-header z-40 text-white"
    :class="{ open: open }"
  >
    <div class="mx-auto xl:px-0 max-w-6xl flex-wrap flex justify-between">
      Header
    </div>
  </section>
</template>
<script>
export default {
  name: 'MainHeader',
  directives: {
    'click-outside': {
      bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) {
            // eslint-disable-next-line no-unused-vars
            warn += `Found in component '${compName}'`
          }
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler
        // add Event Listeners
        document.addEventListener('click', handler)
      },
      unbind(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      },
    },
  },
  data() {
    return {
      menu: [
        {
          title: 'Điều khoản sử dụng',
          path: '/dieu-khoan-su-dung',
          name: 'termofuse',
        },
        {
          title: 'Chính sách bảo mật',
          path: '/chinh-sach-bao-mat',
          name: 'privacy-policy',
        },
        // { title: 'Danh mục', path: '/danh-muc', name: 'field' },
        // {
        //   title: 'Danh sách bài học',
        //   path: '/danh-sach-bai-hoc',
        //   name: 'topic',
        // },
        {
          title: 'Chỉnh sửa thông tin',
          path: '/trang-ca-nhan',
          name: 'profile',
          mobile: true,
        },
        {
          title: 'Kích hoạt tài khoản',
          path: '/kich-hoat-tai-khoan',
          name: 'activate-account',
          mobile: true,
        },
        {
          title: 'Lịch sử giao dịch',
          path: '/lich-su-giao-dich',
          name: 'history',
          mobile: true,
        },
        {
          title: 'Đổi mật khẩu',
          path: '/doi-mat-khau',
          name: 'change-password',
          mobile: true,
        },
      ],
      open: false,
      pages: ['/'],
      showInfo: false,
    }
  },
  computed: {
    nameRoute() {
      return this.$route.name
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    async loginFacebook() {
      await this.$auth.loginWith('facebook')
    },
    async loginGoogle() {
      await this.$auth.loginWith('google')
    },
    outside(e) {
      if (this.showInfo === true) {
        this.showInfo = false
      }
    },
    openShowInfo() {
      if (this.showInfo === false) {
        setTimeout(() => {
          this.showInfo = true
        }, 100)
      }
    },
  },
}
</script>
<style lang="scss">
.main-header {
  position: sticky;
  top: 0;
  background-color: #070816;
  ul {
    background-color: rgba(7, 8, 22, 0.8);
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  input:focus {
    outline: none;
  }
  .menu-open {
    transition: 0.55s all ease-out;
    cursor: pointer;

    &.open {
      background: transparent;
      -webkit-transition: all 0.8s ease-in-out;
      transition: 0.55s all ease-out;
      transform: rotate(360deg);
    }
  }
  .info-show {
    width: 300px;
    // height: 142px;
    position: absolute;
    top: 70px;
    // box-shadow: 0px -1px 4px rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    background-color: black;
    right: 0px;
    border: solid 1px rgb(65, 57, 57);
  }
  .triangle-with-shadow {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 45px;
    bottom: 100%;
    overflow: hidden;
  }

  .triangle-with-shadow:after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    transform: rotate(45deg);
    bottom: -9px;
    /* right: 18px; */
    border: solid 1px rgb(65, 57, 57);
    background-color: black;
    // box-shadow: 0px -1px 4px rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 1023px) {
    .main-header {
      background-color: red;
    }
    .menu-items {
      display: block;
      visibility: hidden;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 1;
      margin-top: 69.45px;
      z-index: 99;
      &.open {
        visibility: visible;
        display: block;
      }

      ul {
        display: block !important;
        height: 100%;
        transition: 0.3s all ease-out;
        transform: translateX(100%);
        li {
          width: 100%;
          float: none;
        }
      }
      .open {
        transform: translateX(0%);
      }
    }
  }
}
</style>
