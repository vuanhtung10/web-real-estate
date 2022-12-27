<template>
  <div>
    <div class="flex max-w-[936px] mx-auto">
      <div
        v-if="articleDetail"
        class="max-w-[666px] w-full mr-[30px]"
        v-html="articleDetail.content"
      ></div>
      <div class="flex flex-col space-y-[16px]">
        <div
          class="flex flex-col border border-solid rounded-lg p-2 max-w-[240px] max-h-[83px] h-full w-full space-y-2 border-gray-300"
        >
          <div class="flex justify-center items-center text-center text-xs">
            <svg
              class="h-6 w-6 my-auto mr-[4px]"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
            <span class="text-blue-800 font-semibold"
              >Nhận bản tin từ BĐS An Phát</span
            >
          </div>
          <div class="flex max-w-lg max-h-[30px] w-full mx-auto">
            <input-with-validation
              v-model="email"
              type="text"
              placeholder="Nhập e-mail"
              position="preffix"
              style="
                 {
                  padding: 0px !important;
                  border-radius: 0px !important;
                  border-top-left-radius: 0.25rem !important;
                  border-bottom-left-radius: 0.25rem !important;
                }
              "
            >
            </input-with-validation>
            <base-button
              class="max-w-[81px] w-full text-xs text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 transition duration-300 ease-in-out"
              style="
                padding: 0px !important;
                border-radius: 0px !important;
                border-top-right-radius: 0.25rem !important;
                border-bottom-right-radius: 0.25rem !important;
              "
              type="submit"
            >
              Đăng ký
            </base-button>
          </div>
        </div>
        <div class="rounded-lg max-w-[305px]">
          <div
            class="text-white text-center text-xs font-semibold bg-slate-700 leading-5 rounded-t-lg py-1 px-4"
          >
            <h2>CHỦ ĐỀ ĐƯỢC QUAN TÂM</h2>
          </div>
          <div class="border-x border-solid text-center">giữa</div>
          <div
            class="border border-solid rounded-b-lg text-center text-xs py-4 text-red-400 font-semibold"
          >
            Xem tất cả
          </div>
        </div>
        <div class="rounded-lg max-w-[305px]">
          <div
            class="text-white text-center text-xs font-semibold bg-slate-700 leading-5 rounded-t-lg py-1 px-4"
          >
            <h2>DÀNH CHO NGƯỜI XÂY NHÀ</h2>
          </div>
          <div
            class="p-2 border border-solid rounded-b-lg text-xs font-semibold divide-y"
          >
            <ul class="px-1 py-2">
              Quy trình xây nhà
            </ul>
            <ul class="px-1 py-2">
              Xem tuổi xây nhà
            </ul>
          </div>
        </div>
      </div>
    </div>
    <loading-overlay :loading="loading" />
  </div>
</template>
<script>
export default {
  components: {
    BaseButton: () => import('~/components/base/BaseButton'),
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    LoadingOverlay: () => import('~/components/base/LoadingOverlay'),
  },
  data() {
    return {
      articleDetail: null,
      slug: '',
      ArticleBtn: 'Đăng ký',
      loading: false,
    }
  },
  mounted() {
    this.slug = this.$route.params.slug
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      const { data } = await this.$axios.get('/article/findbyslug/' + this.slug)
      this.articleDetail = data
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>
<style>
.el-input__inner::placeholder {
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
}
</style>
