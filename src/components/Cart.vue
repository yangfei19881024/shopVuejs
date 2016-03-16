<template >
  <a href="javascript:;" class="shopcart">
    <i class="icon-shopcart"></i>
    <span class="shopcart-num">6</span>
  </a>
</template>

<script>

</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';

  .shopcart{
    position: fixed;
    bottom: 10px;
    right: 10px;
    .icon-shopcart{
      display: inline-block;
      width: px2rem(80);
      height: px2rem(80);
      background-image: url(../assets/cart.png);
      background-size: cover;
    }
    .shopcart-num{
      position: absolute;
      right: -5px;
      top: -10px;
      display: inline-block;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      background: $mainColor;
      color: #FFF;
      border-radius: 50%;
      font-size: 14px;
    }
  }
</style>
