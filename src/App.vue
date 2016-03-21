<template>
  <div class="page page-current">
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
export default {
  ready () {
    this.options.items = [
      {
        path: '/home',
        icon: 'app',
        label: '首页'
      },
      {
        path: '/article',
        icon: 'star',
        label: '任务'
      },
      {
        path: '/user',
        icon: 'me',
        label: '我自己'
      },
      {
        path: '/more',
        icon: 'gift',
        label: '更多'
      }
    ]
  },
  data () {
    return {
      isIndex: true,
      title: '首页',
      options: {
        items: [],
        activeClass: 'active'
      }
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: all 0.6s ease-in-out;
  transform: translate3d(0,0px,0);
  opacity: 1;
}
.fade-enter,.fade-leave {
  opacity: 0;
  transform: translate3d(0,100px,0);
}
</style>
