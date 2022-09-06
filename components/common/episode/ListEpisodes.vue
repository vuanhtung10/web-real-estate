<template>
  <div>
    <div class="w-full grid gap-9 h-fit" :class="classGrids">
      <div v-for="item in episodes" :key="item._id" @click="viewDetail(item)">
        <div v-if="item.cover">
          <div class="relative" style="padding-top: 143%">
            <img
              v-lazy="item.cover"
              class="w-full h-full absolute inset-0 rounded-2xl object-cover object-top"
            />
          </div>
          <p class="mt-4">{{ item.display_name }}</p>
        </div>
        <div v-else class="h-full w-full flex flex-col min-h-262px">
          <div
            class="flex items-center justify-center bg-secondary rounded-2xl flex-1 text-white text-4xl font-Anton"
          >
            {{ item.index }}
          </div>
          <p class="mt-4">
            {{ item.display_name }}{{ item.chapters_length | showChapter }}
          </p>
        </div>
      </div>
    </div>
    <Dialog ref="notification" :confirmed="confirmed">
      <p class="text-center text-white">Vui lòng đăng nhập để có thể đọc</p>
    </Dialog>
  </div>
</template>

<script>
export default {
  components: {
    Dialog: () => import('~/components/base/Dialog'),
  },
  filters: {
    showChapter(val) {
      if (val !== 0) {
        return ` (${val} chương)`
      } else {
        return ''
      }
    },
  },
  props: {
    episodes: { type: Array, default: () => [] },
    grids: { type: Array, default: () => [2, 6, 6] },
  },
  data() {
    return {
      awslink: process.env.awslink,
    }
  },
  computed: {
    classGrids() {
      const result =
        'grid-cols-' +
        this.grids[0] +
        ' md:grid-cols-' +
        this.grids[1] +
        ' lg:grid-cols-' +
        this.grids[2]
      return result
    },
  },
  methods: {
    confirmed() {
      this.$router.push('/login')
    },
    viewDetail(item) {
      if (!this.$auth.user) {
        this.$refs.notification.open()
      } else {
        this.$router.push({
          name: 'episode',
          params: { id: item._id },
        })
      }
    },
  },
}
</script>
