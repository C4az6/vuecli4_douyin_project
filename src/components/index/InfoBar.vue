<template>
  <div class="infobar-wrap">
    <div class="info-bar">
      <span>@Alexander</span>
    </div>
    <div class="info-bar">
      <span>学习学习学习学习</span>
    </div>
    <div class="info-bar music">
      <span class="music-icon">🎶</span>
      <div class="desc">
        <span data-text="努力学习,努力工作,努力自己成为更牛逼的人!">努力学习,努力工作,努力自己成为更牛逼的人!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoBar"
};
</script>

<style lang="less" scoped>
.infobar-wrap {
  position: absolute;
  bottom: 10%;
  width: 100%;
  padding: 10px;
  .info-bar {
    margin-top: 10px;
  }
  .music {
    display: flex;
  }
  .music-icon {
    padding-right: 10px;
  }
  .desc {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    span {
      display: inline-block;
      animation: scroll 5s linear infinite;
      &::after {
        content: attr(data-text);
        margin-left: 20px;
      }
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - 20px));
    }
  }
}
</style>