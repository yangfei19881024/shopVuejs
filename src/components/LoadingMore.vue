<template>
  <div class="infinite-scroll-preloader">
      <div class="preloader"></div>
      <span class="loading-tips">{{tips}}</span>
  </div>
</template>
<script type="text/javascript">
  export default{
    props:{
      tips: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
    .loading-tips{
      color: #333;
      font-size: 14px;
      position: relative;
      top: -10px;
    }
</style>
