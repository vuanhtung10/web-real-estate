<template>
  <validation-provider
    v-slot="{ errors }"
    :vid="vid"
    :name="$attrs.label"
    :rules="rules"
  >
    <b-form-group v-bind="$attrs" :label-class="required ? 'required' : null">
      <image-upload ref="imageUpload" v-model="innerValue" v-bind="$attrs" />
      <b-form-invalid-feedback :class="{ 'd-block': errors[0] || error }">{{
        errors[0] || error
      }}</b-form-invalid-feedback>
    </b-form-group>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import ImageUpload from '~/components/base/input/ImageUpload'

export default {
  components: {
    ImageUpload,
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
      default: null,
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    value: {
      type: null,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {
    getDimension() {
      return this.$refs.imageUpload.getDimension()
    },
  },
}
</script>
