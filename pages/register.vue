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
        <form
          class="w-full form-custom mx-auto mt-6 md:mt-10"
          @submit="checkForm"
        >
          <div class="relative w-full mt-4">
            <input-with-validation
              v-model="fullname"
              type="text"
              placeholder="Họ tên"
              :autocomplete="'disabled'"
              class="w-full rounded-md pl-12 pr-6 h-12"
            />
            <img
              src="/images/icon/person.svg"
              class="absolute left-4 top-3.5"
            />
          </div>
          <p v-if="errors.fullname" class="text-red-500 mt-3">
            {{ errors.fullname }}
          </p>
          <div class="relative w-full mt-4">
            <input-with-validation
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
            <input-with-validation
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
            <input-with-validation
              v-model="confirmPassword"
              :type="[showConfirmPassword ? 'text' : 'password']"
              placeholder="Nhập lại mật khẩu"
              :autocomplete="'disabled'"
              class="w-full rounded-md pl-12 pr-6 h-12"
            />
            <div
              class="float-left mt-4 mb-8 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <label class="inline-flex text-xs">
                <input
                  type="checkbox"
                  class="form-checkbox"
                  :checked="isChecked"
                />
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
            class="bg-blue-500 w-full mt-8 md:mt-10 block"
            type="submit"
          >
            Đăng ký
          </base-button>
          <p v-if="error" class="text-red-500 mt-3 text-center">
            {{ error }}
          </p>
        </form>
        <p class="my-6 text-xs text-blueGray-400 text-center font-semibold">
          Hoặc tiếp tục với
        </p>
        <button
          class="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
          href="#"
        >
          <img class="h-6 pr-10" src="../assets/imgs/facebook-sign.svg" />
          <span>Đăng Ký với Facebook</span>
        </button>
        <button
          class="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
          href="#"
        >
          <img class="h-6 pr-10" src="../assets/imgs/google-sign.svg" />
          <span>Đăng Ký với Google</span>
        </button>
        <p class="text-center mt-8 md:mt-16">
          Bạn đã có tài khoản?
          <nuxt-link to="login" class="text-blue-600">Đăng nhập ngay</nuxt-link>
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
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
  },
  // layout: 'auth',
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
      isChecked: false,
    }
  },
  watch: {
    fullname(newVal) {
      console.log('fullname', this.fullname)
    },
    email(newVal) {
      console.log('email', this.email)
    },
    password(newVal) {
      console.log('password', this.password)
    },
    confirmPassword(newVal) {
      console.log('confirmPassword', this.confirmPassword)
    },
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
<style lang="scss">
@import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
.form-checkbox {
  width: auto !important;
}
</style>
