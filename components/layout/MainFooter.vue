<template>
  <!--Footer 2-->
  <section class="relative footer-2 border-t border-gray-100">
    <div
      class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"
    ></div>
    <div class="container">
      <div class="relative flex flex-wrap -mx-4">
        <div
          class="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left"
        >
          <a
            class="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animated animate__fadeInUp animated"
            data-wow-delay=".1s"
            href="index.html"
          >
            <img class="h-10" src="assets/imgs/logos/monst-logo.svg" alt="" />
          </a>
          <div class="mt-12 mb-16">
            <p
              class="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".1s"
            >
              Subscribe and stay fully connected with product.
            </p>
            <div
              class="flex flex-wrap lg:flex-nowrap items-center wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".3s"
            >
              <input-with-validation
                v-model="email"
                type="text"
                placeholder="Type your e-mail"
                position="preffix"
              >
                <svg
                  class="h-6 w-6 my-auto"
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
              </input-with-validation>

              <button
                class="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div
            class="hidden lg:block wow animate__animated animate__fadeInUp animated"
            data-wow-delay=".5s"
          >
            <p class="text-xs text-blueGray-400">
              &copy; 2021. All rights reserved.
            </p>
            <div class="-mx-2 mt-4">
              <a class="inline-block px-2" href="#">
                <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
              </a>
              <a class="inline-block px-2" href="#">
                <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
              </a>
              <a class="inline-block px-2" href="#">
                <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
          <div class="flex flex-row flex-wrap justify-around mb-12">
            <div
              class="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".1s"
            >
              <h5 class="mb-6 text-lg font-bold">VỀ BẤT ĐỘNG SẢN AN PHÁT</h5>
              <ul class="space-y-3">
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Giới thiệu
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Tuyển Dụng
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Truyền Thông
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Blog
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div
              class="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".3s"
            >
              <h5 class="mb-6 text-lg font-bold">HỖ TRỢ KHÁCH HÀNG</h5>
              <ul class="space-y-3">
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Trung tâm trợ giúp
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    An toàn mua bán
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Quy định cần biết
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                  >
                    Liên hệ hỗ trợ
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div
              class="w-full lg:w-auto mb-4 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".5s"
            >
              <h5 class="mb-6 text-lg font-bold font-heading">CHỨNG NHẬN</h5>
              <img
                alt="Cetification"
                src="https://static.chotot.com/storage/default/certificate.webp"
              />
              <!-- <ul class="space-y-3">
                <li>
                  <a
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                    href="blog.html"
                    >Bussiness</a
                  >
                </li>
                <li>
                  <a
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                    href="blog-2.html"
                    >Marketing</a
                  >
                </li>
                <li>
                  <a
                    class="text-lg text-blueGray-400 hover:text-blueGray-500"
                    href="blog-single.html"
                    >Single</a
                  >
                </li>
              </ul> -->
            </div>
          </div>
          <div class="lg:hidden text-center">
            <p class="text-xs text-blueGray-400">
              &copy; 2021. All rights reserved.
            </p>
            <div class="-mx-2 mt-4">
              <a class="inline-block px-2" href="#">
                <img src="~/assets/imgs/facebook-blue.svg" alt="" />
              </a>
              <a class="inline-block px-2" href="#">
                <img src="~/assets/imgs/twitter-blue.svg" alt="" />
              </a>
              <a class="inline-block px-2" href="#">
                <img src="~/assets/imgs/instagram-blue.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End footer -->
</template>

<script>
export default {
  auth: 'guest',
  components: {
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
  },
  data() {
    return {
      email: '',
    }
  },
  watch: {
    email(newVal) {
      console.log('email', this.email)
    },
  },
}
</script>
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.input-box {
  .el-input__inner::placeholder {
    color: #000;
    opacity: 0.4;
  }
}
</style>
