import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueTouch from "vue-touch"
import VueResource from "vue-resource"
import routerConfig from './config/router'
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

/* eslint-disable no-new */
router.start(App, '#app')
