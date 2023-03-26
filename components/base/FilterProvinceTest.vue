<template>
  <div class="w-[200px]">
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
    </div>
    <div
      v-if="show"
      class="absolute shadow-2xl bg-white w-[300px] rounded z-10 p-4"
    >
      <div v-if="!typeShow">
        <div
          class="border border-[#ccc] rounded-lg px-[15px] py-[13px] flex items-center justify-between cursor-pointer"
        >
          <div class="flex flex-col" @click="typeShow = 'city'">
            <span class="text-sm">Tỉnh/Thành</span>
            <span v-if="city" class="text-sm font-semibold">{{
              city.name
            }}</span>
          </div>
          <span v-if="!city">></span>
          <span v-if="city" @click="city = ''">x</span>
        </div>
        <div
          :class="{ cursorImage: isActive }"
          class="border border-[#ccc] rounded-lg px-[15px] py-[13px] mt-3 flex items-center justify-between cursor-pointer"
          @click="openDistrict"
        >
          <div class="text-sm">Quận/Huyện</div>
          <div v-if="districts" class="text-sm font-semibold">
            <span v-for="(item, i) in districtsObject" :key="'districts' + i"
              >{{ item.name }}
            </span>
          </div>
          <span v-if="!districts">></span>
          <span v-if="districts" @click="deleteDistricts()">x</span>
        </div>
        <div
          :class="{ cursorImage: isActive }"
          class="border border-[#ccc] rounded-lg px-[15px] py-[13px] mt-3 flex items-center justify-between cursor-pointer"
          @click="openWard"
        >
          <span class="text-sm">Phường/Xã</span>
          <span>></span>
        </div>
      </div>
      <div v-if="typeShow === 'city'">
        <p class="font-medium text-sm text-center">
          <span class="absolute left-[13px]" @click="typeShow = null">
            &lt;
          </span>
          Chọn tỉnh thành
        </p>
        <div class="h-[300px] overflow-y-auto mt-5">
          <div
            v-for="(item, i) in listOptionsCity"
            :key="'city' + i"
            class="py-[6px] hover:bg-[#f2f2f2] text-sm"
            @click="selectCity(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div v-if="typeShow === 'district'">
        <p class="font-medium text-sm text-center">
          <span class="absolute left-[13px]" @click="typeShow = null">
            &lt;
          </span>
          Quận huyện
        </p>
        <div class="h-[300px] overflow-y-auto mt-5">
          <checkbox-with-validation
            v-model="districts"
            class="column-check-box"
            :value-options="listOptionsDistricts"
            :close-on-backdrop="true"
            :close-on-esc="true"
          />
        </div>
      </div>
      <div v-if="typeShow === 'ward'">
        <p class="font-medium text-sm text-center">
          <span class="absolute left-[13px]" @click="typeShow = null">
            &lt;
          </span>
          Phường xã
        </p>
        <div class="h-[300px] overflow-y-auto mt-5">
          <div v-for="(item, i) in listOptionsWards" :key="'wards' + i">
            {{ item.name }}
            <checkbox-with-validation
              v-model="wards"
              class="column-check-box"
              :value-options="item.wards"
              :close-on-backdrop="true"
              :close-on-esc="true"
            />
          </div>
        </div>
        listOptionsWard
      </div>
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
      isActive: true,
      show: false,
      typeShow: null,
      listOptionsCity: [],
      listOptionsDistricts: [],
      listOptionsWards: [],
      city: null,
      districts: null,
      wards: null,
    }
  },
  computed: {
    districtsObject() {
      if (!this.districts) return []
      const tmp = this.listOptionsDistricts.filter((item) =>
        this.districts.includes(item.code)
      )
      return tmp
    },
  },
  watch: {
    city() {
      if (this.city) {
        this.isActive = false
      }
    },

    districts() {
      console.log('districts', this.districts)
      if (this.listOptionsWards) {
        const result = this.listOptionsWards.filter((item) =>
          this.districts.includes(item.code)
        )
        this.listOptionsWards = result
        console.log('listOptionsWards', this.listOptionsWards)
      }
    },
    wards() {
      console.log('wards', this.wards)
    },
  },
  created() {
    this.loadCity()
  },
  methods: {
    async loadCity() {
      const response = await this.$axios.get(
        `https://provinces.open-api.vn/api/p`
      )
      if (response.data) this.listOptionsCity = response.data
    },
    async loadDistrict() {
      if (this.city.code) {
        const response = await this.$axios.get(
          `https://provinces.open-api.vn/api/p/${this.city.code}?depth=2`
        )
        if (response.data?.districts)
          this.listOptionsDistricts = response.data.districts
        console.log('listOptionsDistricts', this.listOptionsDistricts)
      }
    },
    async loadWards(code) {
      if (this.city?.code) {
        const response = await this.$axios.get(
          `https://provinces.open-api.vn/api/d/${code}?depth=2`
        )
        // if (response.data?.districts)
        //   this.listOptionsDistricts = response.data.districts

        const found = this.listOptionsWards.find((item) => item.code === code)
        if (!found) {
          console.log('aaaaaaaaa')
          this.listOptionsWards.push(response.data)
        }
        console.log('listOptionsWards', this.listOptionsWards)
      }
    },
    selectCity(data) {
      this.city = data
      console.log('city', this.city)
      this.typeShow = null
    },
    openDistrict() {
      this.typeShow = 'district'
      this.loadDistrict()
    },
    openWard() {
      this.typeShow = 'ward'
      console.log('districtsObject', this.districtsObject)
      this.districts.forEach((code) => {
        this.loadWards(code)
      })
      // this.listOptionsWards = this.result
    },
  },
  deleteDistricts(event) {
    this.districts = null
  },
}
</script>
<style>
.cursorImage {
  cursor: url(https://staticfile.batdongsan.com.vn/images/Product/cursors-block.svg),
    auto !important;
}
</style>
