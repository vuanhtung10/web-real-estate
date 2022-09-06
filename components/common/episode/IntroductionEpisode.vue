<template>
  <div class="flex">
    <div class="w-2/3">
      <h3 class="font-Anton text-2xl md:text-42px">
        {{ item.display_name }}
      </h3>
      <!-- <p class="text-sm text-black text-opacity-60 mt-4">
        {{ short_description }}
      </p> -->
      <p class="text-lg font-bold text-black text-opacity-70 mt-4">Tóm Tắt</p>
      <p class="max-w-lg text-lg mt-3">
        {{ shortDescription(summary) }}
      </p>
      <p
        class="text-primary text-lg cursor-pointer"
        @click="viewFull = !viewFull"
      >
        {{ viewFull ? '[Đóng]' : '[Xem thêm]' }}
      </p>
      <div class="mt-9 flex">
        <base-button class="mr-6" @click.native="onclickStart">
          <img src="/images/icon/book.svg" class="mr-3" />
          Bắt đầu đọc
        </base-button>
      </div>
    </div>
    <div class="w-1/3">
      <img v-lazy="item.cover" class="rounded-xl" />
    </div>
  </div>
</template>

<script>
import truncate from 'lodash/truncate'
export default {
  props: {
    item: { type: Object, default: () => {} },
    onclickStart: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      viewFull: false,
      videoId: null,
      // short_description: '1000 -1990',
      summary:
        'Lịch sử tiêu chuẩn của tất cả các quốc gia và chủng tộc: chứa một bản ghi chép về tất cả các dân tộc trên thế giới từ những thời kỳ lịch sử đầu tiên, với mô tả về nhà cửa, phong tục và tôn giáo của họ; của họ (Tập 1, RACES) bởi Ellis, Edward Sylvester, 1840-1916 Ngày xuất bản 1899 Chủ đề Lịch sử thế giới Nhà xuất bản Chicago: Landis borhters Ngôn ngữ tiếng anh Tập 1 10 v .: 27 cm Vols. 1-4, 5-10 trang liên tục Vols. 5-10 cũng được phát hành riêng như lịch sử của Ellis về Hoa Kỳ Tập 1-2. Các chủng tộc. - v. 3-4. Các quốc gia -- v. 5-10. Hoa Kỳ Ngày thêm 2018-07-03 16:12:03 Tên liên quan Yaggy, Levi W; Cutler, H. G. (Harry Gardner), 1856-; Vaughan, L. Brent, 1873-1950 ',
    }
  },
  methods: {
    shortDescription(text) {
      if (this.viewFull) {
        return text
      } else {
        return truncate(text, {
          length: 180,
          separator: ' ',
        })
      }
    },
  },
}
</script>
