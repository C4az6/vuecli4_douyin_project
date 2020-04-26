import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './static/iconfont/iconfont.css'
import 'swiper/css/swiper.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = "/api"

Vue.use(VueVideoPlayer)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
  // 注册路由
  router,
  render: h => h(App),
}).$mount('#app')