<template>
  <div class="swiper-container" data-space-between='10'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="imgItem in imgs">
        <a href="javascript:;" v-touch:tap='redirect(imgItem.target)' >
          <img :src="imgItem.ImageUrl" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
import $ from 'zepto'

export default {
  props: {
    imgs: Array,
    config: Object
  },
  ready () {
    $.slider = $(this.$el).swiper({autoplay: 2000})
  },
  methods: {
    redirect (target) {
      location.href = `http://${target}`
    }
  }
}
</script>
<style lang='sass' scoped>
  $height: 150px;
  .swiper-container{
    height: $height;
  }
  .swiper-container{
    padding: 0;
  }
  .swiper-pagination{
    background: rgba(255,255,255,0.6);
    border-radius: 5px;
    width:35%;
    left:50%;
    transform:translateX(-50%);
    bottom: 30px;
  }
  img{
    width: 100%;
    max-width: 100%;
  }
</style>
