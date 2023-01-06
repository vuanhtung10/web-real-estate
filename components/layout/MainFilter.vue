<template>
  <div
    class="container mb-4 flex items-center border-t-[1px] border-b-[1px] py-2"
  >
    <div>
      <filter-list-check-box ref="filterListCheckBox" />
    </div>
    <div>
      <house-filter @visible="visible" />
    </div>
    <div>
      <filter-province />
    </div>
  </div>
</template>
<script>
// import { areaRange } from '~/constants/FilterData'
export default {
  components: {
    FilterListCheckBox: () => import('~/components/base/FilterListCheckBox'),
    HouseFilter: () => import('~/components/base/HouseFilter'),
    FilterProvince: () => import('~/components/base/FilterProvince'),
  },
  data() {
    return {}
  },
  methods: {
    visible() {
      console.log('here123')
      this.$refs.filterListCheckBox.close()
    },
  },
}
</script>
