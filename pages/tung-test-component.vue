<template>
  <div>
    <div>
      <main-filter />
    </div>
    <div>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in listOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <input-with-validation v-model="email" placeholder="Enter your Email">
      <button class="ml-4">
        <!-- <svg
          class="h-6 w-6 ml-4 my-auto text-blueGray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          ></path>
        </svg> -->
      </button>
    </input-with-validation>

    <input-with-validation
      v-model="password"
      :type="showPassword ? `text` : `password`"
      placeholder="Enter your password"
    >
      <button
        v-if="!showPassword"
        class="ml-4"
        @click="showPassword = !showPassword"
      >
        <!-- <svg
          class="h-6 w-6 my-auto text-blueGray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg> -->
      </button>
      <!-- <button v-else class="ml-4" @click="showPassword = !showPassword">
        <svg
          class="h-6 w-6 ml-4 my-auto text-blueGray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          ></path>
        </svg>
      </button> -->
    </input-with-validation>

    <div>
      <pagination
        :total-item="totalItem"
        @handleChangePage="handleChangePage"
        @handleSizeChange="handleSizeChange"
      ></pagination>
    </div>
    <switch-with-validation v-model="status" />
    <checkbox-with-validation v-model="value" :value-options="listOptions" />
    <!-- <filter-check-box label="Size" class="w-[290px]" /> -->
    <div>
      <list-article />
    </div>
    <house-filter />
    <br />
    <house-area-filter />
    <filter-province />
    <!-- <filter-province-test /> -->
  </div>
</template>
<script>
// import Form from 'vform'
// import cloneDeep from 'lodash/cloneDeep'
// const defaultForm = {
//   thumbnail: '',
// }
export default {
  name: 'Testcomponent',
  components: {
    // BSingleImageUploadWithValidation: () =>
    //   import('~/components/base/input/BSingleImageUploadWithValidation.vue'),
    // Input: () => import('~/components/base/input/input'),
    // InputWithValidation: () =>
    //   import('~/components/base/input/InputWithValidation'),
    // Pagination: () => import('~/components/base/Pagination'),
    // SwitchWithValidation: () =>
    //   import('~/components/base/input/SwitchWithValidation'),
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
    // FilterCheckBox: () => import('~/components/base/FilterCheckBox'),
    HouseFilter: () => import('~/components/base/HouseFilter'),
    HouseAreaFilter: () => import('~/components/base/HouseAreaFilter'),
    FilterProvince: () => import('~/components/base/FilterProvince'),
    // FilterProvinceTest: () => import('~/components/base/FilterProvinceTest'),
  },
  layout: 'fullscreen',
  data() {
    return {
      // form: cloneDeep(defaultForm),
      // vForm: new Form(),
      form: {
        thumbnail: '',
      },
      email: 'abc@gmail.com',
      password: '123456',
      status: true,
      listOptions: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
      ],
      showPassword: false,
      content: null,
    }
  },
  watch: {
    email(newVal) {
      console.log('email', this.email)
    },
    status(newVal) {
      console.log('status', this.status)
    },
  },
  methods: {
    loadData(page) {
      // viet api vao day
    },
    handleChangePage(val) {
      console.log('val', val)
      this.loadData(val)
    },
    handleSizeChange(val) {
      console.log('Page Size Change', val)
    },
    totalItem(val) {
      console.log('Page Size Change', val)
    },
  },
}
</script>
