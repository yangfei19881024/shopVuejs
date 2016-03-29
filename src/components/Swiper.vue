<template>
  <!-- <div class="swiper-container" data-space-between='10'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="imgItem in imgs">
        <a href="javascript:;" v-touch:tap='redirect(imgItem.target)' >
          <img :src="imgItem.ImageUrl" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->


  <div id="islider"></div>
</template>

<script>
import $ from 'zepto'
import ISlider from '../assets/vendor/swiper.js'

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
    let cimgs = [];

    setTimeout(()=>{
      this.imgs.map(item=>{
        cimgs.push({
          'content': item.ImageUrl
        });
      })

    },300)

    setTimeout(()=>{
      this.slider = new ISlider({
        dom: this.$el,
        data: cimgs,
        isVertical: false,
        isLooping: true,
        isDebug: false,
        isAutoplay: true
      })
    },600)

    console.log(cimgs.length);
  },
  methods: {
    redirect (target) {
      location.href = `http://${target}`
    }
  }
}
</script>
<style lang='sass'>
  #islider {
    height: 112px;
    width: 100%;
    overflow: hidden;
    position: relative;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    li {
      position: absolute;
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-pack: start;
      list-style: none;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
