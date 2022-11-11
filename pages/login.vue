<template>
  <div class="section relative pb-20">
    <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto">
      <div
        class="flex items-center h-full wow animate__animated animate__fadeIn animated"
        data-wow-delay=".1s"
      >
        <img class="lg:max-w-lg mx-auto" :src="LoginPicture" />
      </div>
    </div>

    <div class="container">
      <div class="relative flex flex-wrap pt-12">
        <div class="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
          <div
            class="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated"
            data-wow-delay=".3s"
          >
            <span class="text-sm text-blueGray-400">Đăng nhập</span>
            <h4 class="mb-6 text-3xl text-black">{{ title }}</h4>
            <form class="w-full form-custom mx-auto mt-10" @submit="checkForm">
              <input-with-validation
                v-model="email"
                placeholder="Enter your Email"
                :autocomplete="'disabled'"
              >
                <button class="ml-4">
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
                  <svg
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
                  </svg>
                </button>
                <button
                  v-else
                  class="ml-4"
                  @click="showPassword = !showPassword"
                >
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
                </button>
              </input-with-validation>
              <p v-if="errors.password" class="text-red-500 mt-3">
                {{ errors.password }}
              </p>

              <div class="">
                <div class="flex items-center justify-between mb-6">
                  <div
                    class="max-w-[300px] w-full wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".1s"
                  >
                    <label class="flex text-xs text-black max-w-[300px]">
                      <input type="checkbox" class="form-checkbox" checked />
                      <span class="ml-2"
                        >Tôi đồng ý với
                        <a class="underline hover:text-blueGray-500" href="#"
                          >Chính sách</a
                        >
                        và
                        <a class="underline hover:text-blueGray-500" href="#"
                          >Điều khoản sử dụng</a
                        ></span
                      >
                    </label>
                  </div>
                  <div class="">
                    <nuxt-link to="/" class="text-primary text-xs">
                      Quên mật khẩu?
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <base-button
                type="submit"
                class="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
              >
                Đăng nhập
              </base-button>
            </form>
            <p class="my-6 text-xs text-blueGray-400 text-center font-semibold">
              hoặc
            </p>
            <base-button
              class="bg-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-black font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
              href="#"
              @click.native="loginFacebook"
            >
              <img class="h-6 pr-10" :src="FacebookSign" />
              <span class="text-gray-500">Đăng nhập với Facebook</span>
            </base-button>
            <base-button
              class="bg-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-gray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
              href="#"
              @click.native="loginGoogle"
            >
              <img class="h-6 pr-10" :src="GoogleSign" />
              <span>Đăng nhập với Google</span>
            </base-button>
            <div class="w-full mt-12 mx-auto text-center">
              <p class="text-black text-base">
                Bạn chưa có tài khoản?
                <a
                  class="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                  href="signup.html"
                  >Đăng ký ngay</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookSign from 'assets/imgs/logos/facebook-sign.png'
import GoogleSign from 'assets/imgs/logos/google-sign.png'
import LoginPicture from 'assets/imgs/building.png'
import { validateEmail } from '~/utils/validate'
export default {
  name: 'Login',
  components: {
    BaseButton: () => import('~/components/base/BaseButton'),
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
  },
  // layout: 'auth',
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      showPassword: false,
      isLoading: false,
      FacebookSign,
      GoogleSign,
      LoginPicture,
      title: 'Bất Động Sản An Phát',
    }
  },
  mounted() {
    if (this.$auth.user) {
      this.$router.push('/')
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = {}
      if (!validateEmail(this.email)) {
        this.errors.email = 'Email chưa đúng định dạng'
      }
      if (!this.email) {
        this.errors.email = 'Vui lòng nhập địa chỉ email'
      }
      if (!this.password) {
        this.errors.password = 'Vui lòng nhập mật khẩu'
      }
      this.login()
    },
    async login() {
      try {
        this.isLoading = true

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.isLoading = false

        this.$router.go(-1)
      } catch (e) {}
      this.isLoading = false
    },
    async loginFacebook() {
      await this.$auth.loginWith('facebook')
    },
    async loginGoogle() {
      await this.$auth.loginWith('google')
    },
  },
}
</script>
<style>
.form-checkbox {
  width: 8% !important;
}
</style>
