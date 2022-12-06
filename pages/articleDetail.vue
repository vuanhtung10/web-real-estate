<template>
  <div>
    <div class="flex w-[936px] mx-auto space-x-[80px]">
      <div
        v-if="articleDetail"
        class="flex flex-col mb-[20px]"
        v-html="articleDetail.content"
      ></div>
      <div class="w-[240px] bg-red-300">
        <div
          class="flex flex-col border-2 border-solid rounded p-2 w-[240px] space-y-2 mb-[20px]"
        >
          <div class="text-center">Nhận bản tin</div>
          <div class="flex bg-black">
            <input-with-validation
              v-model="email"
              placeholder="nhập email"
              :class="input"
            />
            <base-button
              class="w-full md:w-auto py-3 px-1 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded-r transition duration-300 ease-in-out"
              type="submit"
              :class="Btn"
            >
              {{ ArticleBtn }}
            </base-button>
          </div>
        </div>
        <div
          class="flex flex-col border-2 border-solid rounded p-2 w-[240px] space-y-2 mb-[20px] bg-red-600"
        >
          <div class="text-center">Nhận bản tin</div>
          <div class="flex bg-black">
            <input-with-validation
              v-model="email"
              placeholder="nhập email"
              :class="input"
            />
            <base-button
              class="w-full md:w-auto py-3 px-1 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded-r transition duration-300 ease-in-out"
              type="submit"
            >
              {{ ArticleBtn }}
            </base-button>
          </div>
        </div>
        <div
          class="flex flex-col border-2 border-solid rounded p-2 w-[240px] space-y-2 bg-slate-400"
        >
          <div class="text-center">Nhận bản tin</div>
          <div class="flex bg-black">
            <input-with-validation
              v-model="email"
              placeholder="nhập email"
              :class="input"
            />
            <base-button
              class="w-full md:w-auto py-3 px-1 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded-r transition duration-300 ease-in-out"
              type="submit"
            >
              {{ ArticleBtn }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
    <loading-overlay :loading="loading" />
  </div>
</template>
<script>
import nha from 'assets/imgs/articleimgs-2.jpg'
export default {
  components: {
    BaseButton: () => import('~/components/base/BaseButton'),
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    // BaseButton: () => import('~/components/base/BaseButton'),
    LoadingOverlay: () => import('~/components/base/LoadingOverlay'),
  },
  data() {
    return {
      articleDetail: null,
      slug: '',
      nha,
      ArticleBtn: 'Đăng ký',
      Btn: 'px-1 py-3 rounded-l hover:bg-opacity-80 focus:bg-opacity-80 flex items-center justify-center',
      loading: false,
    }
  },
  mounted() {
    this.slug = this.$route.params.slug
    this.loadData()
    console.log(this.$route)
  },
  methods: {
    async loadData() {
      this.loading = true
      const { data } = await this.$axios.get('/article/findbyslug/' + this.slug)
      setTimeout(() => {
        this.loading = false
      }, 2000)
      console.log(data)
      this.articleDetail = data
    },
  },
}
</script>
<style>
.input {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
</style>
