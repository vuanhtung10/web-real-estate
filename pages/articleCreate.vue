<template>
  <div>
    <div class="bg-blueGray-50">
      <div class="flex m-auto box-border w-[696px] max-w-full">
        <div class="mt-6 p-6 bg-white rounded shadow w-full">
          <h1 class="text-2xl font-medium leading-8 mb-6">
            Thông tin bài viết
          </h1>
          <form @submit="checkForm">
            <p>Tiêu đề <span>*</span></p>
            <Input-With-Validation
              v-model="title"
              type="text"
              placeholder="VD: Nhà riêng"
            />
            <p>Tối thiểu 30 ký tự, tối đa 99 ký tự</p>
            <p>Mô tả <span>*</span></p>
            <b-single-image-upload-with-validation
              v-model="form.thumbnail"
              label="Thumbnail"
              placeholder="Thumbnail"
            />

            <client-only>
              <quill-editor
                v-model="form.content"
                :required="true"
                label="Nội dung"
                placeholder="Nội dung"
                rules="required"
                name="content"
                style="height: 500px"
              />
            </client-only>

            <p>Tối thiểu 30 ký tự, tối đa 3.000 ký tự</p>
            <base-button
              class="bg-blue-500 w-full mt-8 md:mt-10 block"
              type="submit"
            >
              Đăng bài
            </base-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isEmpty } from '~/utils/function'
export default {
  components: {
    BSingleImageUploadWithValidation: () =>
      import('~/components/base/input/BSingleImageUploadWithValidation.vue'),
    InputWithValidation: () =>
      import('~/components/base/input/InputWithValidation'),
    BaseButton: () => import('~/components/base/BaseButton'),
  },
  data() {
    return {
      title: '',
      description: '',
      errors: {},
      loading: false,
      error: null,
      isChecked: false,
      thumbnail: '',
      form: {
        thumbnail: '',
        content: '',
      },
    }
  },
  watch: {
    title(newVal) {
      console.log('title', this.title)
    },
    description(newVal) {
      console.log('description', this.description)
    },
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = {}
      if (!this.title) {
        this.errors.title = 'Vui lòng nhập họ tên'
      }
      if (!this.description) {
        this.errors.description = 'Vui lòng nhập địa chỉ description'
      }
      if (isEmpty(this.errors)) {
        this.post()
      }
    },
    post() {
      const form = {
        title: this.title,
        description: this.description,
      }
      console.log('post', form)
    },
    // async register() {
    //   try {
    //     this.loading = true
    //     const form = {
    //       title: this.title,
    //       description: this.description,
    //     }
    //     // const { data } = await this.$axios.post('user/', form)
    //     // if (data.errors && data.errors[0] === 'ERROR_EMAIL_IS_EXIST') {
    //     //   this.error = 'Email đăng nhập đã tồn tại'
    //     // } else {
    //     //   this.$auth.setUserToken(data.token)
    //     //   this.$router.push('/')
    //     // }
    //   } catch (e) {
    //     console.log(e.response)
    //   }
    //   console.log()
    //   this.loading = false
    // },
  },
}
</script>
<style>
.el-input__inner {
  width: 100% !important;
}
</style>
