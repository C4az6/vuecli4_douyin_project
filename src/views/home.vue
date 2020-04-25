<template>
  <div class="home">
    <!-- <router-view></router-view> -->
    Home
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '../components/home/TabBar'
export default {
  name: "home",
  data(){
    return {

    }
  },
  components: {
    TabBar
  }
}
</script>

<style lang="less">
  
</style>