<template>
  <div class="tabbar-wrap">
    <div class="item" @click="TabIndexChange(0)">
      <router-link to="/index" :class="tabIndex==0?'active':''">首页</router-link>
    </div>
    <div class="item" @click="TabIndexChange(1)">
      <router-link to="/follow" :class="tabIndex==1?'active':''">熟人</router-link>
    </div>
    <div class="item" @click="TabIndexChange(2)">
      <router-link to="/index" :class="tabIndex==2?'active':''">
        <img src="../../static/imgs/add.png" alt />
      </router-link>
    </div>
    <div class="item" @click="TabIndexChange(3)">
      <router-link to="/index" :class="tabIndex==3?'active':''">消息</router-link>
    </div>
    <div class="item" @click="TabIndexChange(4)">
      <router-link to="/index" :class="tabIndex==4?'active':''">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    TabIndexChange(index) {
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
a {
  color: #ccc;
  text-decoration: none;
}
.tabbar-wrap {
  position: fixed;
  background-color: #000;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    color: #ccc;
    font-size: 18px;
    .active {
      color: #fff;
    }
    img {
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
}
</style>