<template>
  <ul class="goodslist-container-card content">
    <li v-for='item in goodList'>
      <a v-link=" {path: '/detail/'+item.GoodsId} ">
        <img :src="item.GoodsImg" alt="" />
        <p class="good-title" v-text='item.GoodsTitle'></p>
        <p class='good-price-container'>
          <span class="good-price">{{item.GoodsPrice}}元</span>
          <img class='oversea-logo' src="http://stest.boqii.com/static/images/global/logo_global.png" alt="" />
        </p>
        <p class="custom-feedback">
          <span>评价{{item.GoodsCommentNum}}</span>
          <span>已售{{item.GoodsSaledNum}}</span>
        </p>
      </a>
    </li>
    <v-loading-more
      tips="加载更多了..."
    >
    </v-loading-more>
  </ul>
</template>
<script>
  import VLoadingMore from './LoadingMore'

  export default{
    props: ['goodList'],
    ready(){

    },
    components:{
      VLoadingMore
    }
  }
</script>
<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';

  .goodslist-container-card{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: px2rem(8);
    li{
      background: #FFF;
      width: 50%;
      padding: px2rem(10);
      margin-bottom: 1px;
      &:nth-child(odd){
        border-right: 1px solid #efefef;
      }
      .good-title{
        color: #000000;
        font-size: px2rem(24);
        @include column(2);
      }
      .good-price-container{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: px2rem(10) 0;
      }
      .good-price{
        color: $mainColor;
        font-size: px2rem(24);
        font-weight: bold;
      }
      .oversea-logo{
        width: 40%;
      }
      .custom-feedback{
        @extend .good-price-container;
        padding: 0;
        span{
          color: #959595;
          font-size: px2rem(24);
        }
      }
    }
  }

</style>
