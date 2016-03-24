import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueTouch from "vue-touch"
import VueResource from "vue-resource"
import routerConfig from './config/router'
import lazyLoad from "./directive/lazyLoad"
import infiniteScroll from "./directive/infiniteScroll"
import pullToRefresh from "./directive/pullToRefresh"

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

// 使用 移动端touch事件
Vue.use(VueTouch)

// Resource
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

Vue.directive('lazyLoad', lazyLoad)
Vue.directive('infiniteScroll', infiniteScroll)
Vue.directive('pullToRefresh', pullToRefresh)

router.start(App, '#app')
