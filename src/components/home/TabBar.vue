<template>
  <div class="tabbar-wrap">
    <div class="item" @click="TabIndexChange(0)">
      <span :class="tabIndex==0?'active':''">首页</span>
    </div>
    <div class="item" @click="TabIndexChange(1)">
      <span :class="tabIndex==1?'active':''">熟人</span>
    </div>
    <div class="item" @click="TabIndexChange(2)">
      <span :class="tabIndex==2?'active':''">
        <img src="../../static/imgs/add.png" alt="">
      </span>
    </div>
    <div class="item" @click="TabIndexChange(3)">
      <span :class="tabIndex==3?'active':''">消息</span>
    </div>
    <div class="item" @click="TabIndexChange(4)">
      <span :class="tabIndex==4?'active':''">我</span>
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
.tabbar-wrap {
  position: fixed;
  background-color: #000;
  bottom: 0;
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
      padding-top: 10px;
    }
  }
}
</style>