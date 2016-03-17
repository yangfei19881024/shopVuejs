<template>
  <header>
    <div class="header">
      <div class='navigator'>
        <a href=""></a>
      </div>
      <div class="search_bar">
        <input type="text" placeholder='请输入搜索关键字' class='search_text'>
      </div>
      <div class="operation">
        <i class='icon-cards'></i>
        <a href=''>筛选</a>
      </div>
    </div>
  </header>
  <section class="conditon_selection">
    <div class="conditon_selection_container">
      <ul>
        <li>
          <a href="" class='active'>
            分类
            <i class="fa fa-caret-down"></i>
          </a>
        </li>
        <li>
          <a href="">销量</a>
        </li>
        <li>
          <a href="">
            价格
            <i class="fa fa-long-arrow-down"></i>
          </a>
        </li>
        <li>
          <a href="">评论</a>
        </li>
      </ul>
    </div>
  </section>

  <section class="goodslist">
    <ul class="goodslist-container">
      <li>
        <div class="good-image">
          <img src="http://img.boqiicdn.com/Data/Shop/0/0/42/shoppicpath11457078044.jpg" alt="" />
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
            <div class="good-title">
              宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg
            </div>
            <div class="good-details">

              <div class="good-tags">
                <span class="manjian">满减</span>
                <span class="huangou">换购</span>
              </div>
              <div class="good-price-profile">
                <span class="good-price">168.00元</span>
                <span class="good-comments">评价5000</span>
                <span class="good-sold">已售5689</span>
              </div>

            </div>
          </div>

        </div>
      </li>

      <li>
        <div class="good-image">
          <img src="http://img.boqiicdn.com/Data/Shop/0/0/42/shoppicpath11457078044.jpg" alt="" />
        </div>
        <div class="good-profile">
        <div class="oversea">
          <div class="">
            <img src="../assets/usa.png" alt="" class='flag'/>
            <span>美国</span>
          </div>
          <div class="">
            <img src="http://stest.boqii.com/static/images/global/logo_global.png" alt="" class='oversea-profile'/>
          </div>
        </div>

          <div class="good-profile-container">
            <div class="good-title">
              宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg
            </div>
            <div class="good-details">

            <!--   <div class="good-tags">
              <span class="manjian">满减</span>
              <span class="huangou">换购</span>
            </div> -->
              <div class="good-price-profile">
                <span class="good-price">168.00元</span>
                <span class="good-comments">评价5000</span>
                <span class="good-sold">已售5689</span>
              </div>

            </div>
          </div>

        </div>
      </li>

    </ul>
  </section>
</template>
<script>

</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';

  .header{
    display: flex;
    flex-flow: row nowrap;
    padding: px2rem(12) 20px;
    padding-top: px2rem(20);
    background: #FFF;
  }

  .search_bar{
    flex: 1;
    margin-left: px2rem(10);
    margin-right: px2rem(20);
    position: relative;
    &:after{
      content: '';
      width: px2rem(36);
      height: px2rem(36);
      background-image: url(../assets/search.png);
      background-size: cover;
      position: absolute;
      right: 5px;
      top: 3px;
    }
    .search_text{
      width: 100%;
      border:none;
      padding:9px 5px;
      background: #dedede;
      transform: translate3D(0,px2rem(-10),0);
      border-radius: 2px;
      font-size: 15px;
    }
  }

  .operation{
    width: 65px;
    text-align: right;
    .icon-cards{
      float: left;
    }
    a{
      float: right;
      font-size: px2rem(30);
      color: #fc4a00;
    }
  }
  /**条件选择**/
  .conditon_selection_container{
    background: #FFF;
    padding: px2rem(25) 0;
    border-top: 1px solid $grayColor;
    border-bottom: 1px solid $grayColor;

    ul{
      display: flex;
      flex: row nowrap;
      li{
        width: 25%;
        a{
          display: block;
          font-size: px2rem(30);
          color: #383838;
          text-align: center;
          border-right: 1px solid $grayColor;
          &.active{
            color: $mainColor;
          }
        }
        &:last-child{
          a{
            border-right: none;
          }
        }
      }
    }
  }

  /**商品列表**/
  .goodslist-container li{
    height: px2rem(220);
    background: #FFF;
    margin-bottom: 1px;
    display: flex;
    flex-flow: row nowrap;
    .good-image{
      width: px2rem(190);
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
