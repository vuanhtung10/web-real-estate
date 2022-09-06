<template>
  <div class="min-h-screen flex flex-col">
    <lazy-hydrate when-visible>
      <main-header />
    </lazy-hydrate>
    <nuxt />
    <lazy-hydrate when-visible>
      <main-footer />
    </lazy-hydrate>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    LazyHydrate: () => import('vue-lazy-hydration'),
    MainHeader: () => import('~/components/layout/MainHeader'),
    MainFooter: () => import('~/components/layout/MainFooter'),
  },
}
</script>
