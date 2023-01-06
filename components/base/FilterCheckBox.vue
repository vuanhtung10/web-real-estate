<template>
  <div class="border border-[#e6e6e6] w-full">
    <!-- <div
      class="bg-[black] text-white p-[15px] flex justify-between items-center"
    >
      <span class="text-lg font-semibold">{{ label }}</span>
      <button @click="showBox">
        <font-awesome-icon v-if="show" icon="fa-solid fa-minus" />
        <font-awesome-icon v-else icon="fa-solid fa-plus" />
      </button>
    </div> -->
    <div class="block" :class="{ 'p-[15px]': show }">
      <checkbox-with-validation
        v-if="show"
        v-model="value"
        :value-options="listOptions"
      />
    </div>
  </div>
</template>
<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    // FontAwesomeIcon,
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
  },
  props: {
    label: { type: String, default: '' },
  },
  data() {
    return {
      listOptions: [
        {
          src: require('~/assets/icons/home-city-outline.svg'),
          text: 'One',
          value: 1,
        },
        {
          src: require('~/assets/icons/home-city-outline.svg'),
          text: 'One',
          value: 1,
        },
      ],
      value: [],
      show: true,
    }
  },
  watch: {
    value(newVal) {
      this.innerValue = newVal
      console.log('here', newVal)
    },
  },
  methods: {
    showBox() {
      this.show = !this.show
    },
  },
}
</script>
