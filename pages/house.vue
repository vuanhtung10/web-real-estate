<template>
  <div class="container">
    <div class="mb-4">
      <p>
        <span class="text-[#999]">Bán/Hồ Chí Minh/Phú Nhuận/</span>Nhà riêng tại
        đường Huỳnh Văn Bánh
      </p>
    </div>
    <div class="mb-4">
      <div
        class="text-sm flex rounded border border-solid border-[#F2F2F2] shadow-[0px 4px 6px 0px rgb(44 44 44 / 4%)] w-fit"
      >
        <div class="rounded">
          <el-carousel
            class="w-[240px] h-[200px] relative carousel-image"
            indicator-position="outside"
          >
            <el-carousel-item
              v-for="(item, index) in images"
              :key="`item${index}`"
              :autoplay="true"
              class="w-60 h-[200px]"
            >
              <img
                class="w-[240px] h-[200px] object-cover mx-auto"
                :src="item.src"
              />
            </el-carousel-item>
            <div
              class="absolute bottom-2 right-4 z-10 flex justify-end items-end"
            >
              <img
                class="w-6 h-6"
                src="../assets/icons/file-image-outline.svg"
              />
              <span class="text-white">{{ images.length }}</span>
            </div>
          </el-carousel>
        </div>
        <div class="max-w-[570px] p-2 relative">
          <div>
            <div class="text-[#FF661F]">
              Bán nhà mới vào ở ngay - Huỳnh Văn Bánh - Phú Nhuận 64m2, 3 lầu -
              xe hơi trong nhà"
            </div>
            <div class="flex">
              <div class="font-semibold">12.5 tỷ</div>
              <span class="text-sm mb-2 ml-4 mr-4 text-[#999]">.</span>
              <div class="font-semibold">195.31 triệu/m²</div>
              <span class="text-sm mb-2 ml-4 mr-4 text-[#999]">.</span>
              <div class="font-semibold">64 m²</div>
              <span class="text-sm mb-2 ml-4 mr-4 text-[#999]">.</span>
              <div>Phú Nhuận, Hồ Chí Minh</div>
            </div>
            <div class="line-clamp-2">
              Bán nhà mới vào ở ngay - Huỳnh Văn Bánh - Phú Nhuận 64m² - xe hơi
              trong nhà.+ Diện tích ngang 4.1m, dài 16m vuông vức. + Kết cấu:
              1Trệt, 2 lầu, 4 PN, 5WC, 1 phòng khách, đầy đủ công năng.+ Nhà
              thiết kế hiện đại tặng nội thất đầy đủ. + Hẻm trước nhà hơn 5m.
              Cách mặt mặt tiền tầm 50M.+ Nhà mới tinh, nội thất hiện đại, vào ở
              ngay. + Gần bệnh viện an sinh, gần trường học các cấp. + Thuận
              tiện duy chuyển sang các quận lân cận. + Pháp lý chuẩn, sổ đẹp ...
            </div>
          </div>
          <div class="h-fit absolute bottom-4 right-4 cursor-pointer">
            <img
              v-if="!like"
              class="w-6 h-6 unLike"
              src="../assets/icons/cards-heart-outline.svg"
              @click="like = true"
            />
            <img
              v-else
              class="w-6 h-6 Like"
              src="../assets/icons/cards-red-heart.svg"
              @click="like = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
      like: false,
    }
  },
  // methods: {
  //   click() {
  //     if ((this.changeColor = 'like')) {
  //       this.changeColor = 'unLike'
  //     } else this.changeColor = 'like'
  //   },
  // },
}
</script>
<style lang="scss">
.carousel-image {
  .el-carousel__indicators--horizontal {
    display: none;
  }
  .el-carousel__arrow {
    display: none;
  }
}
.el-carousel__container {
  height: 200px;
}
.like {
  color: red;
  display: none;
}
.unlike {
  display: none;
}
</style>
