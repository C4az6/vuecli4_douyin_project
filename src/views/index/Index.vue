<template>
  <div class="index-wrap">
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import topBar from '../../components/index/TopBar'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>
</style>