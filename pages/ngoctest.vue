<template>
  <div>
    <div class="w-full mx-auto px-4">
      <h2 class="text-3xl lg:text-4xl mb-8 font-bold font-heading">
        {{ title }}
      </h2>
    </div>
    <list-top-article />
    <list-article />
  </div>
</template>
<script>
export default {
  components: {
    ListArticle: () => import('~/modules/article/ListArticle'),
    ListTopArticle: () => import('~/modules/article/ListTopArticle'),
  },
  data() {
    return {
      title: 'Articles',
    }
  },
}
</script>
