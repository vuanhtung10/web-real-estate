<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-full mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl mb-8 font-bold font-heading">
          {{ title }}
        </h2>
      </div>
      <list-top-article />
      <list-article />
    </div>
    <section class="bg-blue-500">
      <div class="w-full mx-auto py-20">
        <div class="text-center max-w-xl mx-auto">
          <h2
            class="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading"
          >
            <span>Đăng ký ngay </span>
            <span class="text-blue-200">Email</span>
            <br />
            <span>Để nhận những tin tức mới nhất</span>
          </h2>
          <p class="mb-8 text-blueGray-200">
            All your information is completely confidential
          </p>
          <div class="flex flex-wrap max-w-lg mx-auto">
            <div
              class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded"
            >
              <svg
                class="h-6 w-6 my-auto text-blue-300"
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
              <input-with-validation
                class="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
                :class="input"
                type="text"
                placeholder="Type your e-mail"
              />
            </div>
            <base-button
              class="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
              type="submit"
            >
              {{ ArticleBtn }}
            </base-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    BaseButton: () => import('~/components/base/BaseButton'),
    ListArticle: () => import('~/modules/article/ListArticle'),
    ListTopArticle: () => import('~/modules/article/ListTopArticle'),
  },
  data() {
    return {
      title: 'Articles',
      ArticleBtn: 'Đăng ký',
    }
  },
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.input {
  width: 100% !important;
  padding-left: 12px !important;
  color: rgb(255 255 255) !important;
  font-weight: 600 !important;
  font-size: 12px !important;
  line-height: 1 !important;
}
</style>
