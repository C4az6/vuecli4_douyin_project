import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './views/home.vue'
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: 'index'
    },
    {
      path: "/",
      name: 'home',
      component: Home,
      children: [{
          path: '/index',
          name: 'index',
          component: () => import('./views/index/Index.vue'),
          children: [{
            path: 'index',
            name: 'Index',
            component: () => import('./components/index/VideoList.vue')
          }]
        },
        {
          path: '/follow',
          name: 'follow',
          component: () => import('./views/follow/Follow.vue')
        }
      ]
    }
  ]
})


export default router