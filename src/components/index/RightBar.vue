<template>
  <div class="rightbar-wrap">
<!--     <div class="item">
      <div class="avartar-border">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2505690794,1448952644&fm=26&gp=0.jpg"
          alt=""
        >
        <span class="iconfont icon-add1"></span>
      </div>
    </div>
    <div class="item-icon"><span class="iconfont icon-xin">99.1W</span></div>
    <div class="item-icon"><span class="iconfont icon-comment">99.1W</span></div>
    <div class="item-icon"><span></span></div>
    <div class="item"><span></span></div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.rightbar-wrap {
  position: absolute;
  bottom: 50%;
  right: 0%;
  height: 200px;

  .avartar-border {
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .icon-add1 {
      position: absolute;
      bottom: -42%;
      left: 50%;
      transform: translate(-50%, 0%);
      color: #ff4161;
      font-size: 24px;
    }
  }
}
</style>