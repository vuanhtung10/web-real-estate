<template>
  <button :class="[classBg, classText, classBase, classCustom]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    classBg: { type: String, default: 'bg-primary' },
    classText: { type: String, default: 'text-white' },
    classCustom: { type: String, default: '' },
  },
  data() {
    return {
      classBase:
        'px-8 py-4 rounded hover:bg-opacity-80 focus:bg-opacity-80 flex items-center justify-center',
    }
  },
}
</script>
