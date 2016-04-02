<template>
  <div id='slider' class='swipe'>
    <div class='swipe-wrap'>
      <div v-for="imgItem in imgs">
        <a href="javascript:;" v-touch:tap='redirect(imgItem.target)' >
          <img :src="imgItem.ImageUrl" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import Swiper from "../assets/vendor/swiper.js"

export default {
  props: {
    imgs: Array,
    config: Object
  },
  data () {
    return {
      slider: null
    }
  },
  ready () {

    setTimeout(()=>{
      window.mySwipe = new Swiper(this.$el, {
        startSlide: 0,
        speed: 400,
        auto: 1000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {},
        transitionEnd: function(index, elem) {}
      });
    },300)

  },

  methods: {
    redirect (target) {
      location.href = `http://${target}`
    }
  }
}
</script>
<style lang='sass'>

  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    float:left;
    width:100%;
    position: relative;

  }
</style>
