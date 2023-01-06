<template>
  <div class="relative w-[200px]">
    <div
      v-click-outside="close"
      class="border-l-[1px] border-r-[1px] p-4 hover:bg-[#f2f2f2] cursor-pointer"
      @click="show = !show"
    >
      <div class="flex justify-between">
        <span class="text-xs">Loại nhà đất</span>
        <span
          v-if="!show"
          class="el-icon-arrow-down text-[#C0C4CC] rotate-0 duration-300"
        ></span>
        <span
          v-else
          class="el-icon-arrow-down text-[#C0C4CC] -rotate-180 duration-300"
        ></span>
      </div>
      <p class="text-sm flex justify-start">{{ listOptions.text }}</p>
    </div>
    <div
      v-if="show"
      class="absolute shadow-2xl bg-white w-[300px] rounded z-10 p-4"
    >
      <checkbox-with-validation
        v-model="value"
        class="column-check-box"
        :value-options="listOptions"
        :close-on-backdrop="true"
        :close-on-esc="true"
      />
    </div>
  </div>
</template>
<script>
import { ClickOutside } from '~/directive/click-outside'
export default {
  components: {
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      show: false,
      listOptions: [
        {
          src: require('~/assets/icons/home-city-outline.svg'),
          name: 'Nhà đất',
          value: 'nha-dat',
        },
        {
          src: require('~/assets/icons/domain.svg'),
          name: 'Căn hộ chung cư',
          value: 'can-ho-chung-cu',
        },
        {
          src: require('~/assets/icons/svg+map+location+map+navigation+position+icon-1320184911918999577.svg'),
          name: 'Đất thổ cư',
          value: 'dat-tho-cu',
        },
      ],
    }
  },
  methods: {
    close(el) {
      this.show = false
    },
  },
}
</script>
<style lang="scss">
.column-check-box {
  .el-checkbox {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    margin-top: 16px;
  }
}
.css-rotate {
  transform: rotate(180deg);
  // transition-duration: 300ms;
  transition: 0.5s;
}
</style>
