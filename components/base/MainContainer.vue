<template>
  <section
    class="py-7 md:py-14"
    :class="{ 'bg-odd-bg': odd, 'bg-primary': primary, 'text-white': primary }"
  >
    <div class="mx-auto max-w-6xl px-4">
      <h3
        v-if="title"
        class="text-2xl md:text-34px font-semibold text-center leading-9 md:leading-12"
      >
        {{ title }}
      </h3>
      <p v-if="desc" class="text-lg mt-4 text-center">{{ desc }}</p>

      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainContainer',
  props: {
    odd: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
  },
}
</script>
