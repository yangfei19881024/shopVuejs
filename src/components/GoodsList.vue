<template>
  <ul class="goodslist-container content">
      <li v-for='item in goodList'>
          <div class="good-image">
            <img data-src="{{item.GoodsImg}}" class='lazy' alt="" />
          </div>
          <div class="good-profile">
          <!-- <div class="oversea">
            <div class="">
              <img src="../assets/usa.png" alt="" class='flag'/>
              <span>美国</span>
            </div>
            <div class="">
              <img src="http://stest.boqii.com/static/images/global/logo_global.png" alt="" class='oversea-profile'/>
            </div>
          </div> -->

            <div class="good-profile-container">
              <div class="good-title" v-text='item.GoodsTitle'></div>
              <div class="good-details">
                <div class="good-tags" v-if='item.GoodsActionList'>
                  <span class="manjian">满减</span>
                  <span class="huangou">换购</span>
                </div>
                <div class="good-price-profile">
                  <span class="good-price" v-text='item.GoodsPrice'></span>
                  <span class="good-comments">评价{{item.GoodsCommentNum}}</span>
                  <span class="good-sold">已售{{item.GoodsSaledNum}}</span>
                </div>
              </div>
            </div>
          </div>
      </li>

    <!--加载指示器-->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>
  </ul>
</template>

<script>
  import $ from "zepto";

  export default{
    props:['goodList'],
  }
</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';
  /**商品列表**/
  .goodslist-container{
    overflow-x: hidden;
  }
  .goodslist-container li{
    padding-top: 8px;
    height: px2rem(220);
    background: #FFF;
    margin-bottom: 1px;
    display: flex;
    flex-flow: row nowrap;
    .good-image{
      width: px2rem(190);
      background-image: url(../assets/default.jpg);
      background-size: cover;
      background-position: center center;
    }
    .good-profile{
      flex: 1;
      transform: translate3D(10px,0,0);
    }
    .oversea{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      div{
        flex: 1;
        padding-top: px2rem(10);
        &:first-child{
          color: #a2a2a2;
          img{
            width: 18%;
          }
          span{
            font-size: px2rem(24);
            position: relative;
            left: 2px;
            top: -2px;
          }
        }
        &:last-child{
          text-align: center;
          img{
            width: 50%;
          }
        }
      }
    }

    .good-profile-container{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // height: px2rem(220);
      .good-title{
        color: #343434;
        font-size: px2rem(30);
        width: 90%;
        /**控制显示行数**/
        // position:relative;
        // line-height:1.5em;
        // /* 高度为需要显示的行数*行高，比如这里我们显示两行，则为3 */
        // height:3em;
        // overflow:hidden;
        @include column(2);
      }

      .good-price{
        color: $mainColor;
        font-size: px2rem(30);
      }
      .good-comments{
        color: #989898;
        font-size: px2rem(25);
      }
      .good-sold{
        @extend .good-comments;
        margin-left:10%;
      }
      .good-tags{
        span{
          padding: 2px;
          border-radius: 2px;
          color: #FFF;
          font-size: px2rem(20);
          &.manjian{
            background: $mainColor;
          }
          &.huangou{
            background: #997ee6;
          }
        }
      }
    }
  }
</style>
