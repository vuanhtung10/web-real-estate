<template>
  <div class="relative min-h-screen flex flex-col">
    <lazy-hydrate when-visible>
      <main-header />
    </lazy-hydrate>
    <nuxt />
    <lazy-hydrate when-visible>
      <main-footer />
    </lazy-hydrate>
    <scroll-up
      class="fixed z-10 right-[30px] bottom-[30px] overflow-hidden"
      style=""
    />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    ScrollUp: () => import('~/components/base/ScrollUp'),
    LazyHydrate: () => import('vue-lazy-hydration'),
    MainHeader: () => import('~/components/layout/MainHeader'),
    MainFooter: () => import('~/components/layout/MainFooter'),
  },
}
</script>
