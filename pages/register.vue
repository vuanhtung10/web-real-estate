<template>
  <div class="bg-odd-bg w-full md:w-1/2 flex items-center justify-center">
    <div class="w-460px px-4 text-black">
      <img
        v-lazy="`/images/logo/celebrity.svg`"
        width="52"
        height="75"
        class="mx-auto"
      />
      <p class="text-2xl text-center mt-6 md:mt-8">Đăng kí</p>
      <p
        class="text-sm text-white text-opacity-60 text-center w-327px mx-auto mt-2"
      >
        Vui lòng cung cấp thông tin cá nhân để tạo tài khoản nhân
      </p>
      <form
        class="w-full form-custom mx-auto mt-6 md:mt-10"
        @submit="checkForm"
      >
        <div class="relative w-full">
          <input
            v-model="fullname"
            type="text"
            placeholder="Họ tên"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12"
          />
          <img src="/images/icon/person.svg" class="absolute left-4 top-3.5" />
        </div>
        <p v-if="errors.fullname" class="text-red-500 mt-3">
          {{ errors.fullname }}
        </p>
        <div class="relative w-full mt-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12"
          />
          <img src="/images/icon/mail.svg" class="absolute left-4 top-3.5" />
        </div>
        <p v-if="errors.email" class="text-red-500 mt-3">
          {{ errors.email }}
        </p>
        <div class="relative w-full mt-4">
          <input
            v-model="password"
            :type="[showPassword ? 'text' : 'password']"
            placeholder="Nhập mật khẩu"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12"
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
        <div class="relative w-full mt-4">
          <input
            v-model="confirmPassword"
            :type="[showConfirmPassword ? 'text' : 'password']"
            placeholder="Nhập lại mật khẩu"
            :autocomplete="'disabled'"
            class="w-full rounded-md pl-12 pr-6 h-12"
          />
          <img src="/images/icon/key.svg" class="absolute left-4 top-3.5" />
          <img
            v-if="!showConfirmPassword"
            src="/images/icon/eye.svg"
            class="absolute right-4 top-3 cursor-pointer"
            width="20"
            height="20"
            @click="showConfirmPassword = !showConfirmPassword"
          />
          <img
            v-else
            src="/images/icon/eye-off.svg"
            class="absolute right-4 top-3 cursor-pointer"
            width="20"
            height="20"
            @click="showConfirmPassword = !showConfirmPassword"
          />
        </div>
        <p v-if="errors.confirmPassword" class="text-red-500 mt-3">
          {{ errors.confirmPassword }}
        </p>
        <base-button
          class="w-full mt-8 md:mt-10 block"
          type="submit"
          @click="register"
        >
          Đăng ký
        </base-button>
        <p v-if="error" class="text-red-500 mt-3 text-center">
          {{ error }}
        </p>
      </form>
      <p class="text-center mt-8 md:mt-16">
        Bạn đã có tài khoản?
        <nuxt-link to="login" class="text-primary">Đăng nhập ngay</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '~/utils/validate'
import { isEmpty } from '~/utils/function'
export default {
  name: 'Register',
  auth: 'guest',
  components: {
    BaseButton: () => import('~/components/base/BaseButton'),
  },
  layout: 'auth',
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      showPassword: false,
      showConfirmPassword: false,
      loading: false,
      error: null,
    }
  },
  created() {
    if (this.$auth.user) {
      this.$router.push('/')
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = {}
      if (!this.fullname) {
        this.errors.fullname = 'Vui lòng nhập họ tên'
      }
      if (!validateEmail(this.email)) {
        this.errors.email = 'Email chưa đúng định dạng'
      }
      if (!this.email) {
        this.errors.email = 'Vui lòng nhập địa chỉ email'
      }
      if (!this.password) {
        this.errors.password = 'Vui lòng nhập mật khẩu'
      }
      if (this.password && this.password.length < 8) {
        this.errors.confirmPassword = 'Mật khẩu phải có ít nhất 8 kí tự!'
      }
      if (!this.confirmPassword) {
        this.errors.confirmPassword = 'Vui lòng nhập lại mật khẩu'
      }
      if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Mật khẩu nhập lại không khớp'
      }
      if (isEmpty(this.errors)) {
        this.register()
      }
    },
    async register() {
      try {
        this.loading = true
        const form = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        }
        const { data } = await this.$axios.post('user/', form)
        if (data.errors && data.errors[0] === 'ERROR_EMAIL_IS_EXIST') {
          this.error = 'Email đăng nhập đã tồn tại'
        } else {
          // this.$auth.setUserToken(data.token)
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          this.$router.push('/')
        }
      } catch (e) {
        console.log(e.response)
      }
      this.loading = false
    },
  },
}
</script>
