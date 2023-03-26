<template>
  <div class="w-[200px]">
    <div
      class="relative w-[210px] border border-solid border-white bg-slate-200 cursor-pointer p-4"
      @click="OpenMenu()"
    >
      <div class="flex justify-between">
        <span class="text-xs">Trên toàn quốc</span>
        <span
          v-if="show"
          class="el-icon-arrow-down text-[#C0C4CC] rotate-0 duration-300"
        ></span>
        <span
          v-else
          class="el-icon-arrow-down text-[#C0C4CC] -rotate-180 duration-300"
        ></span>
      </div>
    </div>
    <div v-if="show" class="absolute w-[400px] shadow-2xl rounded">
      <div v-show="!typeShow" class="px-4 pt-4">
        <h1 class="mb-3 font-semibold">khu vực và dự án</h1>
        <div
          v-for="(item, index) in menuOptions"
          :key="'menuOptions' + index"
          ref="menuItem"
          class="flex justify-between items-center px-[15px] py-[13px] border border-solid border-inherit rounded-md mb-3 cursor-pointer"
          :class="[
            item.type === 'district' || item.type === 'ward' ? cursorImage : '',
          ]"
          @click="handleSelect(item)"
        >
          <div class="flex-1">
            <span>{{ item.title }}</span>
            <div v-if="item.type === 'city' && city">{{ city.name }}</div>
            <div v-if="item.type === 'district' && districts" class="flex">
              <div
                v-for="(item, index) in districts"
                :key="'districts' + index"
              >
                {{ item.name }},
              </div>
            </div>
            <div v-if="item.type === 'ward' && wards" class="flex">
              <div v-for="(item, index) in wards" :key="'wards' + index">
                {{ item.name }},
              </div>
            </div>
          </div>
          <i
            v-show="item.type === 'city' && !city"
            class="el-icon-arrow-right"
          ></i>
          <i
            v-if="item.type === 'district' && !districts"
            class="el-icon-arrow-right"
          ></i>
          <i
            v-if="item.type === 'ward' && !wards"
            class="el-icon-arrow-right"
          ></i>
          <!--
          <i
            :class="[item.type === 'city' && !city ? arrowClass : closeClass]"
            @click="(event) => deleteCity(event)"
          ></i> -->
          <i
            v-if="item.type === 'city' && city"
            class="el-icon-close cursor-pointer"
            @click="(event) => deleteCity(event)"
          ></i>

          <i
            v-if="item.type === 'district' && districts"
            class="el-icon-close cursor-pointer"
            @click="(event) => deleteDistricts(event)"
          ></i>
          <i
            v-if="item.type === 'ward' && wards"
            class="el-icon-close cursor-pointer"
            @click="(event) => deleteWards(event)"
          ></i>
        </div>
      </div>
      <!-- menuchild -->

      <div v-if="typeShow === 'city'">
        <div class="flex items-center p-4">
          <i
            class="el-icon-back text-base cursor-pointer"
            @click="onBack()"
          ></i>
          <span class="m-auto font-semibold">Chọn Tỉnh/Thành</span>
        </div>
        <div class="h-[300px] overflow-y-auto listtopic">
          <p class="px-4 py-[6px] text-xs text-[#74150F]">Tất cả Tỉnh/Thành</p>
          <div
            v-for="(item, index) in listOptionsCity"
            :key="'city' + index"
            class="flex justify-between items-center px-4 py-[6px] hover:bg-[#f2f2f2] cursor-pointer"
            @click="selectCity(item)"
          >
            <span>{{ item.name }}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div v-if="typeShow === 'district'">
        <div class="flex items-center p-4">
          <i class="el-icon-back text-base" @click="typeShow = null"></i>
          <span class="m-auto font-semibold">Chọn Quận/Huyện</span>
        </div>
        <div class="h-[300px] overflow-y-auto mt-5 listtopic">
          <checkbox-with-validation
            v-model="districts"
            class="column-check-box"
            :value-options="listOptionsDistrict"
            :close-on-backdrop="true"
            :close-on-esc="true"
          />
        </div>
      </div>
      <div v-if="typeShow === 'ward'">
        <div class="flex items-center p-4">
          <i class="el-icon-back text-base" @click="typeShow = null"></i>
          <span class="m-auto font-semibold">Chọn Phường/Xã</span>
        </div>
        <div class="h-[300px] overflow-y-auto mt-5 listtopic">
          <div
            v-for="(item, index) in listOptionsWard"
            :key="'listOptionsWard' + index"
          >
            <span class="px-4 py-3 text-xs text-[#999]">{{ item.name }}</span>
            <checkbox-with-validation
              v-model="wards"
              class="column-check-box"
              :value-options="item.wards"
              :close-on-backdrop="true"
              :close-on-esc="true"
              :hide-check-all="true"
              :un-check-all="unCheckAll"
            />
          </div>
        </div>
      </div>
      <div
        v-if="onHide"
        class="flex justify-between border-t border-solid border-inherit"
      >
        <div
          class="flex m-[7px] border border-solid border-transparent py-[5px] px-[11px] hover:bg-[#FAFAFA] items-center"
          @click="clear()"
        >
          <i class="el-icon-refresh"></i>
          <span class="ml-2">Đặt lại</span>
        </div>
        <span
          class="m-[7px] text-white rounded bg-[#E03C31] border border-solid border-[#E03C31] py-[5px] px-[11px] hover:bg-[#FF837A]"
          @click="handleSubmit()"
          >Áp dụng</span
        >
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { menuOptions } from '~/constants/FilterData'
export default {
  components: {
    CheckboxWithValidation: () =>
      import('~/components/base/input/CheckboxWithValidation'),
  },
  data() {
    return {
      cursorImage: 'cursorImage',
      show: false,
      typeShow: null,
      menuOptions,
      listOptionsCity: [],
      listOptionsDistrict: [],
      listOptionsDistrictCode: {},
      listOptionsWard: [],
      city: null,
      districts: null,
      wards: null,
      onHide: true,
      unCheckAll: false,
    }
  },
  computed: {
    //
  },
  watch: {
    // '$refs.listitem.filteredItems'(value) {
    //   console.log('tung', value)
    // },
    city() {
      console.log('ref', this.$refs.menuItem)
      if (this.city) {
        console.log('ref', this.$refs.menuItem)
        this.$refs.menuItem[1].classList.add('pointer')
        this.districts = null
        this.wards = null
      } else {
        this.$refs.menuItem[1].classList.remove('pointer')
      }
    },
    districts() {
      console.log('districts', this.districts)
      if (this.districts && this.districts.length !== 0) {
        this.$refs.menuItem[2].classList.add('pointer')
        const newDistricts = this.districts.map((item) => {
          return item.code
        })
        console.log('newDistricts', newDistricts)
        if (this.listOptionsWard && this.listOptionsWard.length !== 0) {
          const result = this.listOptionsWard.filter((item) =>
            newDistricts.includes(item.code)
          )
          this.listOptionsWard = result
          console.log('listOptionsWard', this.listOptionsWard)
          if (this.wards) {
            console.log('wards', this.wards)
            const resultwards = this.wards.filter((item) =>
              newDistricts.includes(item.district_code)
            )
            console.log('resultwards', this.resultwards)
            this.wards = resultwards
            // console.log('wards', this.wards)
          }
        }
      } else {
        this.$refs.menuItem[2].classList.remove('pointer')
      }
    },
    wards() {
      console.log('wards', this.wards)
    },
  },
  mounted() {
    console.log('ref', this.$refs.menuItem)
  },
  created() {
    this.loadCity()
  },
  methods: {
    async loadCity() {
      const response = await this.$axios.get(
        `https://provinces.open-api.vn/api/p`
      )
      return (this.listOptionsCity = response.data)
    },

    async loadDistrict() {
      const response = await this.$axios.get(
        `https://provinces.open-api.vn/api/p/${this.city.code}?depth=2`
      )
      console.log('code', this.city.code)
      console.log('response', response)
      console.log('listOptionsDistrictCode', this.listOptionsDistrictCode)
      if (
        response.data?.districts &&
        this.city.code !== this.listOptionsDistrictCode.code
      ) {
        this.listOptionsDistrict = response.data.districts
        this.listOptionsDistrictCode = response.data
      }

      console.log('listOptionsDistrict', this.listOptionsDistrict)
    },

    async loadWard(code) {
      const response = await this.$axios.get(
        `https://provinces.open-api.vn/api/d/${code}?depth=2`
      )
      console.log('response', response)
      this.listOptionsWard.push(response.data)
      // const found = this.listOptionsWard.find((item) => item.code === code)
      // console.log('found', found)
      // if (!found) {
      //   console.log('aaaaaaaaa')
      //   this.listOptionsWard.push(response.data)
      // }
      console.log('wards', this.wards)
      console.log('listOptionsWards', this.listOptionsWard)
    },
    OpenMenu() {
      // console.log('ref', this.$refs.listitem)
      // this.$refs.listitem.forEach((item) => {
      //   console.log('item', item.innerText)
      //   if (item.innerText === 'Tỉnh/Thành') {
      //     console.log('tung')
      //     this.isActive = false
      //   } else {
      //     this.isActive = true
      //   }
      // })
      this.show = !this.show
    },
    cursorChange(item) {
      console.log('item', item)
      if (item.type === 'city') {
        this.isActive = false
      }
    },
    onBack() {
      this.typeShow = null
      this.onHide = true
    },

    clear() {
      if (this.typeShow === 'district') {
        this.districts = []
        this.wards = []
      }
      if (this.typeShow === 'ward') {
        this.wards = []
        this.unCheckAll = true
      }
      console.log('districts', this.districts)
    },

    handleSelect(value) {
      if (value.type === 'city') {
        this.typeShow = 'city'
        this.onHide = false
      }
      if (value.type === 'district' && this.city) {
        this.typeShow = 'district'
        console.log('quynh', this.districts)
      }
      if (
        value.type === 'ward' &&
        this.districts &&
        this.districts.length !== 0
      ) {
        this.typeShow = 'ward'
        if (this.districts) {
          this.districts.forEach((item) => {
            console.log('item-code', item.code)
            if (this.listOptionsWard.length === 0) {
              this.loadWard(item.code)
            } else {
              const found = this.listOptionsWard.find(
                (OptionWard) => OptionWard.code === item.code
              )
              console.log('found', found)
              if (!found) {
                this.loadWard(item.code)
              }
            }
          })
        }
      }
    },

    selectCity(value) {
      this.onHide = true
      this.typeShow = null
      this.city = value
      console.log('city', this.city)
      this.loadDistrict()
    },

    handleSubmit() {
      this.typeShow = null
    },
    deleteCity(event) {
      event.stopPropagation()
      console.log('event', event)
      this.city = null
      this.districts = null
      this.wards = null
    },
    deleteDistricts(event) {
      event.stopPropagation()
      this.districts = null
      this.wards = null
    },
    deleteWards(event) {
      event.stopPropagation()
      this.wards = null
    },
  },
}
</script>
<style>
.cursorImage {
  cursor: url(https://staticfile.batdongsan.com.vn/images/Product/cursors-block.svg),
    auto !important;
}
.pointer {
  cursor: pointer !important;
}

.listtopic {
  overflow-y: scroll;
}
.listtopic::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  background-color: #fff;
  width: 5px;
}

.listtopic::-webkit-scrollbar {
  width: 5px;
  background-color: #fff;
}

.listtopic::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background-color: #ccc;
}
</style>
