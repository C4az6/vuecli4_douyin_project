<template>
  <div class="Videolist-wrap">
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item,index) in videoList" :key="index">
        <div>
          <videos ref="videos" :videoList="item" :index="index"></videos>
        </div>
        <div class="infobar-wrap">
          <info-bar></info-bar>
          <right-bar></right-bar>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import InfoBar from "./InfoBar";
import RightBar from './RightBar'
import videos from "./Videos";
export default {
  name: "videoList",
  data() {
    return {
      page: 1,
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
        observeParents: true,
        on: {
          tap: ()=>{
            this.playAction(this.page - 1);
          },
          // 下滑结束
          slideNextTransitionStart: ()=>{
            this.page += 1;
            console.log(this.page);
          },
          // 上滑结束
          slidePrevTransitionEnd: ()=>{
            if(this.page>1) {
              this.page -= 1;
              console.log(this.page);
            }
          }
        }
      },
      videoList: []
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    videos,
    InfoBar,
    RightBar
  },
  mounted() {
    this.$axios
      .post("/api/SmallProgram/SerachVideoList", {
        pageIndex: 1,
        pageSize: 5,
        name: ""
      })
      .then(res => {
        this.videoList = res.data.ResultObject;
      });
  },
  methods: {
    playAction(index){
      this.$refs.videos[index].playOrStop()
    }
  },
};
</script>

<style lang="less" scoped>
.Videolist-wrap {
  background-color: #000;
  color: #ffffff;
}

/deep/ .vjs-custom-skin > .video-js .vjs-big-play-button {
  font-size: 1.5em;
/*   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}

/deep/ .video-js {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}



</style>