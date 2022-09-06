<template>
  <div class="flex min-h-screen">
    <lazy-hydrate when-visible>
      <main-auth class="hidden md:flex" />
    </lazy-hydrate>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutAuth',
  components: {
    LazyHydrate: () => import('vue-lazy-hydration'),
    MainAuth: () => import('~/components/layout/MainAuth'),
  },
}
</script>
