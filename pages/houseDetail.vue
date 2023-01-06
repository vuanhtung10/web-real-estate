<template>
  <div class="container">
    <div class="mx-auto max-w-[1140px]">
      <el-carousel
        ref="carousel"
        height="500px"
        :interval="5000"
        arrow="always"
        class="carousel-image"
        @change="handleChangeItem"
        @setActiveItem="setActiveItem"
      >
        <el-carousel-item
          v-for="(item, index) in images"
          :key="`item${index}`"
          :autoplay="false"
        >
          <img class="w-fit h-full object-cover mx-auto" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
      <div class="flex mt-4 justify-center">
        <div
          v-for="(item, index) in images"
          :key="`image${index}`"
          class="mr-2"
        >
          <img
            class="object-cover w-[107px] h-[80px] rounded"
            :class="{ 'border border-black': itemActive === index }"
            :src="item.src"
            @click="setActiveItem(index)"
          />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p>
        <span class="text-[#999]">Bán/Hồ Chí Minh/Phú Nhuận/</span>Nhà riêng tại
        đường Huỳnh Văn Bánh
      </p>
      <p class="font-bold text-2xl">
        Bán nhà hẻm thông tứ hướng Huỳnh Văn Bánh
      </p>
      <p>Đường Huỳnh Văn Bánh, Phường 15, Phú Nhuận, Hồ Chí Minh</p>
    </div>
    <div class="mt-4 border-t-2 border-b-2 py-6 flex justify-between">
      <div class="flex grid grid-cols-3 gap-20">
        <div>
          <p class="text-[#999]">Mức giá</p>
          <p class="font-bold text-2xl">6.5 tỷ</p>
          <p>~138.3 triệu/m²</p>
        </div>
        <div>
          <p class="text-[#999]">Diện tích</p>
          <p class="font-bold text-2xl">47 m²</p>
          <p>Mặt tiền 3.2 m</p>
        </div>
        <div>
          <p class="text-[#999]">Phòng ngủ</p>
          <p class="font-bold text-2xl">3 PN</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-10">
        <font-awesome-icon
          class="w-[24px] h-[24px] bg-white"
          icon="fa-solid fa-share-nodes"
        />
        <font-awesome-icon
          class="w-[24px] h-[24px]"
          icon="fa-solid fa-triangle-exclamation"
        />
        <font-awesome-icon class="w-[24px] h-[24px]" icon="fa-solid fa-heart" />
      </div>
    </div>
    <div class="flex mt-4 items-start bg-[#F0EAF4] p-4">
      <img class="mr-4" src="../assets/icons/expired-ldp.svg" />
      <div>
        <p>
          Tin này đã hết hạn nhưng có thể vẫn còn giá trị giao dịch hoặc tham
          khảo.
        </p>
        <p>Hãy sử dụng công cụ tìm kiếm để tìm những tin đăng mới nhất.</p>
      </div>
    </div>
    <div class="mt-4">
      <p class="font-bold mt-4">Thông tin mô tả</p>
      <p class="mt-4">
        - Chính chủ cần bán nhà 1 sẹc đầu đường Huỳnh Văn Bánh.<br />
        - Diện tích: 47m². - Nhà 1 trệt, 1 lầu (3PN, 2WC).<br />
        - Nhà hơi cũ nhưng chỉ cần 1 lớp sơn là mới ngay.<br />
        - Vị trí: Nhà 1 sẹc đầu đường Huỳnh Văn Bánh<br />
        - Nhà 2 mặt tiền hẻm thông tứ hướng trước và sau nhà. Xe hơi vào tới kế
        nhà.<br />
        - Rất thích hợp làm văn phòng, kinh doanh bán hàng online...<br />
        - Tiện ích: Nằm gần chợ, trường đại học, cao đẳng... Chỉ bán kính
        500m.<br />
        - Nhà chính chủ chưa qua kinh doanh, bán giá rẻ nhất khu vực.<br />
        - Giá bán: 6,5 tỷ, thương lượng.<br />
        - Liên hệ: Call/Zalo gặp Sơn.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img
                class="w-6 h-6 mr-4"
                src="../assets/icons/house-size-svgrepo-com.svg"
              />
              <p class="font-semibold">Diện tích</p>
            </div>
            <div>47 m²</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img
                class="w-6 h-6 mr-4"
                src="../assets/icons/home-variant-outline.svg"
              />
              <p class="font-semibold">Mặt tiền</p>
            </div>
            <div>3.2 m</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img
                class="w-6 h-6 mr-4"
                src="../assets/icons/arrow-decision.svg"
              />
              <p class="font-semibold">Hướng nhà</p>
            </div>
            <div>Tây - Nam</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img class="w-6 h-6 mr-4" src="../assets/icons/bed-outline.svg" />
              <p class="font-semibold">Số phòng ngủ</p>
            </div>
            <div>3 phòng</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] border-b-[1px] py-2 mb-4">
            <div class="flex">
              <img
                class="w-6 h-6 mr-4"
                src="../assets/icons/file-outline.svg"
              />
              <p class="font-semibold">Pháp lý</p>
            </div>
            <div>Sổ đỏ/ Sổ hồng</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img class="w-6 h-6 mr-4" src="../assets/icons/cash.svg" />
              <p class="font-semibold">Mức giá</p>
            </div>
            <div>6.5 tỷ</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img class="w-6 h-6 mr-4" src="../assets/icons/road.svg" />
              <p class="font-semibold">Đường vào</p>
            </div>
            <div>3 m</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img
                class="w-6 h-6 mr-4"
                src="../assets/icons/home-city-outline.svg"
              />
              <p class="font-semibold">Số tầng</p>
            </div>
            <div>2 tầng</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] py-2">
            <div class="flex">
              <img class="w-6 h-6 mr-4" src="../assets/icons/shower.svg" />
              <p class="font-semibold">Số toilet</p>
            </div>
            <div>2 phòng</div>
          </div>
          <div class="grid grid-cols-2 border-t-[1px] border-b-[1px] py-2 mb-4">
            <div class="flex">
              <img class="w-6 h-6 mr-4" src="../assets/icons/lamps.svg" />
              <p class="font-semibold">Nội thất</p>
            </div>
            <div>Cơ bản</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <pagination
        :total-item="totalItem"
        :page-size="limit"
        class="mb-20"
        @handleChangePage="handleChangePage"
      ></pagination>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Pagination: () => import('~/components/base/Pagination'),
  },
  data() {
    return {
      images: [
        { src: require('~/assets/imgs/house-images/house-1-1.jpeg') },
        { src: require('~/assets/imgs/house-images/house-1-2.jpeg') },
        { src: require('~/assets/imgs/house-images/house-1-3.jpeg') },
        { src: require('~/assets/imgs/house-images/house-1-4.jpeg') },
      ],
      itemActive: 0,
      data: null,
    }
  },
  methods: {
    handleChangeItem(index) {
      this.itemActive = index
    },
    setActiveItem(index) {
      this.$refs.carousel && this.$refs.carousel.setActiveItem(index)
      this.itemActive = index
    },
    loadData() {
      // cal api
    },
  },
}
</script>
<style lang="scss">
.el-carousel__item {
  background-color: rgba(0, 0, 0, 0.3);
}
.carousel-image {
  .el-carousel__indicators--horizontal {
    display: none;
  }
}
</style>
