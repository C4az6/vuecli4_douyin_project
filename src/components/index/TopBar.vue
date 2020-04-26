<template>
  <div class="topbar-wrap">
    <div class="left">
      <span class="iconfont icon-15"></span>
    </div>
    <div class="middle">
      <div class="item" @click="tabIndexChange(0)">
        <span :class="tabIndex==0?'active':''">同城</span>
      </div>
      <div class="item" @click="tabIndexChange(1)">
        <span :class="tabIndex==1?'active':''">关注</span>
      </div>
      <div class="item" @click="tabIndexChange(2)">
        <router-link to="/index/index" :class="tabIndex==2?'active':''">推荐</router-link>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      tabIndex: 2
    };
  },
  methods: {
    tabIndexChange(index) {
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.topbar-wrap {
  position: fixed;
  top: 0%;
  z-index: 99;
  display: flex;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #8c8a8a;
  // background-color: #000;
  .iconfont {
    font-size: 22px;
  }
  .left {
    flex: 1;
  }

  .middle {
    display: flex;
    width: 60%;
    .item {
      flex: 1;
    }
    .active {
      color: #fff;
      border-bottom: 2px solid #ffffff;
      padding-bottom: 8px;
    }
  }

  .right {
    flex: 1;
  }
}
</style>