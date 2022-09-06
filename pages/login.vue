<template>
  <div class="bg-odd-bg w-full md:w-1/2 flex items-center justify-center">
    <div class="w-460px px-4 text-white">
      <img
        v-lazy="`/images/logo/history.png`"
        width="52"
        height="75"
        class="mx-auto"
      />
      <p class="text-2xl text-center mt-8">Đăng nhập</p>
      <p
        class="text-sm text-white text-opacity-60 text-center w-327px mx-auto mt-2"
      >
        Vui lòng nhập tài khoản để đăng nhập
      </p>
      <form class="w-full form-custom mx-auto mt-10" @submit="checkForm">
        <div class="relative w-full">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12 text-white"
          />
          <img src="/images/icon/mail.svg" class="absolute left-4 top-3.5" />
        </div>
        <p v-if="errors.fullname" class="text-red-500 mt-3">
          {{ errors.fullname }}
        </p>
        <div class="relative w-full mt-4">
          <input
            v-model="password"
            :type="[showPassword ? 'text' : 'password']"
            placeholder="Nhập mật khẩu"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12 text-white"
          />
          <img src="/images/icon/key.svg" class="absolute left-4 top-3.5" />
          <img
            v-if="!showPassword"
            src="/images/icon/eye.svg"
            class="absolute right-4 top-3 cursor-pointer"
            width="20"
            height="20"
            @click="showPassword = !showPassword"
          />
          <img
            v-else
            src="/images/icon/eye-off.svg"
            class="absolute right-4 top-3 cursor-pointer"
            width="20"
            height="20"
            @click="showPassword = !showPassword"
          />
        </div>
        <p v-if="errors.password" class="text-red-500 mt-3">
          {{ errors.password }}
        </p>
        <div class="flex mt-6 justify-end">
          <nuxt-link to="/" class="text-primary"> Quên mật khẩu </nuxt-link>
        </div>
        <base-button class="w-full mt-6 md:mt-10 block">Đăng nhập</base-button>
      </form>
      <p class="text-sm text-center mt-6 md:mt-9">Hoặc đăng nhập với</p>
      <base-button
        class="w-full mt-6 md:mt-9"
        :style="{ paddingTop: '12px', paddingBottom: '12px' }"
        class-bg="bg-facebook-bg"
        @click.native="loginFacebook"
      >
        <img
          src="/images/icon/facebook.svg"
          width="12.5"
          height="24"
          alt="icon-arrow"
          class="mr-3"
        />
        Facebook
      </base-button>
      <base-button
        class="w-full mt-4"
        :style="{ paddingTop: '12px', paddingBottom: '12px' }"
        class-bg="bg-google-bg"
        @click.native="loginGoogle"
      >
        <img
          src="/images/icon/google.svg"
          width="12.5"
          height="24"
          alt="icon-arrow"
          class="mr-3"
        />
        Google
      </base-button>
      <p class="text-center mt-8 md:mt-16">
        Bạn chưa có tài khoản?
        <nuxt-link to="register" class="text-primary">Đăng ký ngay</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '~/utils/validate'
export default {
  name: 'Login',
  components: {
    BaseButton: () => import('~/components/base/BaseButton'),
  },
  layout: 'auth',
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      showPassword: false,
      isLoading: false,
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
