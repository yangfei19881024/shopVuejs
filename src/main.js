import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueTouch from "vue-touch"
import VueResource from "vue-resource"
import routerConfig from './config/router'
import loadMore from "./directive/loadMore"
import lazyLoad from "./directive/lazyLoad"

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

Vue.directive('loadMore', loadMore)
Vue.directive('lazyLoad', lazyLoad)

router.start(App, '#app')
