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
      $(this.$el).swiper(this.config);
  },
  methods: {
    redirect (target) {
      location.href = `http://${target}`
    }
  }
}
</script>
<style lang='sass'>
  .swiper-container{
    padding-bottom: 0;
  }
</style>
