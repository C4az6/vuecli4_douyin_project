<template>
  <div class="Videolist-wrap">
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide>
        <videos></videos>
      </swiper-slide>
      <swiper-slide>
        <videos></videos>
      </swiper-slide>
      <swiper-slide>
        <videos></videos>
      </swiper-slide>
      <swiper-slide>
        <videos></videos>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import videos from "./Videos";
export default {
  name: "videoList",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    videos
  }
};
</script>

<style lang="less" scoped>
.Videolist-wrap {
  background-color: #000;
  color: #ffffff;
}

/deep/ .vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>