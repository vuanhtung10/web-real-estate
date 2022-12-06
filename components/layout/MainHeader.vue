<template>
  <!--Header-->
  <header class="bg-transparent sticky-bar mt-4">
    <div class="container bg-transparent">
      <nav class="bg-transparent flex justify-between items-center py-3">
        <a class="text-3xl font-semibold leading-none" href="index.html">
          <img class="h-10" src="assets/imgs/monst-logo.svg" alt="" />
        </a>
        <ul
          class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12 hover:text-blueGray-500"
        >
          <li
            v-for="(child, index) in menuConfig"
            :key="`child${index}`"
            class="group relative pt-4 pb-4"
            :class="{ 'has-child': child.submenu?.length > 0 }"
          >
            <a
              :href="child.page"
              class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 cursor-pointer"
            >
              {{ child.title }}
            </a>
            <ul v-if="child.submenu" class="drop-down-menu min-w-200">
              <li v-for="(sub, x) in child.submenu" :key="`sub${x}`">
                <a
                  href="index.html"
                  class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500"
                  >{{ sub.title }}</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="hidden lg:block">
          <a class="btn-accent hover-up-2" :href="Login">Log In</a>
          <a class="btn-primary hover-up-2" href="signup.html">Sign Up</a>
        </div>
        <div class="lg:hidden">
          <button
            class="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
          >
            <svg
              class="fill-current h-4 w-4"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import { cloneDeep } from 'lodash'
import menuConfig from '~/constants/MenuConfig'
export default {
  data() {
    return {
      menuConfig: cloneDeep(menuConfig),
    }
  },
  computed: {
    menuToDisplay() {
      return this.getDisplayMenus(this.menuConfig)
    },
  },
  mounted() {
    console.log(this.menuConfig)
  },
  methods: {
    getDisplayMenus(menus) {
      return menus.filter((item) => {
        if (item.submenu) {
          item.submenu = this.getDisplayMenus(item.submenu)
          return item.submenu.length > 0
        } else {
          return this.$canPermission(item.permission)
        }
      })
    },
  },
}
</script>
