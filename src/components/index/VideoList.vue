<template>
  <div class="Videolist-wrap">
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item,index) in videoList" :key="index">
        <div>
          <videos :videoList="item"></videos>
        </div>
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
      },
      videoList: [
        {url: 'http://vue.360lj.com/sv/2bb272dc-171301f995c/2bb272dc-171301f995c.mp4?auth_key=1587819316-6f47090f787d42e39c68aee06efc5751-0-57dd226c791a9f4816943650fde25022'},
        {url: 'http://vue.360lj.com/sv/20ada88c-1710a45ed1e/20ada88c-1710a45ed1e.mp4?auth_key=1587819316-f1cdd95d8ce1407d99d63799ae555aa1-0-da818681ef37c851773d0a6d31763005'},
        {url: 'http://vue.360lj.com/sv/193a966a-170cc567090/193a966a-170cc567090.mp4?auth_key=1587819317-0d7ad2e499aa4c818830cef3881f2038-0-2a0df93d84af5965851c0837cb7dc3ff'},
        {url: 'http://vue.360lj.com/sv/2edbbedb-16fad79eb24/2edbbedb-16fad79eb24.mp4?auth_key=1587819317-73f3aaa1b9b84958a0d5bfe2027138ba-0-ec615b789ad2038dd826596cc8dc8053'},
        {url: 'http://vue.360lj.com/sv/32ed9a73-17176455c13/32ed9a73-17176455c13.mp4?auth_key=1587819317-74ce4d8549164b5684b389446740ca9a-0-43a2c642ec60aeefdfe0c47324099b9d'},
        {url: 'http://vue.360lj.com/sv/109ef2c2-170e7ce8427/109ef2c2-170e7ce8427.mp4?auth_key=1587819317-03d9b918a6a5406ca377ed4e107a8d61-0-1310602d670068d89b3c3110b7f54803'},
      ]
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


/deep/ .video-js {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>