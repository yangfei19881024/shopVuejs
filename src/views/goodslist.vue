<template>
  <header>
    <div class="header">
      <div class='navigator'>
        <a v-link="{path:'/home'}"></a>
      </div>
      <div class="search_bar">
        <input type="text" placeholder='请输入搜索关键字' v-model='keyword' class='search_text'>
        <button v-touch:tap="search" type="button" class="search_btn">
      </div>
      <div class="operation">
        <i class='icon-cards' v-touch:tap='changeCard'></i>
        <a href='javascript:;'>筛选</a>
      </div>
    </div>
  </header>
  <section class="conditon_selection">
    <div class="conditon_selection_container">
      <ul>
        <li>
          <a
            v-link="{'path':'/list/f/'+firstid+'/t/'+thirdid+'/o/-1',replace:true}"
            v-touch:tap="showSubCate"
            :class="{'active': $route.params.orderid == -1 }">
            分类
            <i class="fa fa-caret-down"></i>
          </a>
        </li>
        <li>
          <a v-link="{'path': '/list/f/'+firstid+'/t/'+thirdid+'/o/1','query': {'keyword': keyword }, replace: true }"
            :class="{'active':$route.params.orderid == 1}">
            销量</a>
        </li>
        <li>
          <a v-link="{'path':'/list/f/'+firstid+'/t/'+thirdid+'/o/'+priceorder,'query': {'keyword': keyword }, replace: true }"
            v-touch:tap="changePrice"
            :class="{'active':($route.params.orderid == 2) || ($route.params.orderid == 3)}" >
            价格
            <i class="fa fa-long-arrow-down"
               :class="{'fa-long-arrow-up':$route.params.orderid == 3}"></i>
          </a>
        </li>
        <li>
          <a v-link="{'path':'/list/f/'+firstid+'/t/'+thirdid+'/o/4','query': {'keyword': keyword }, replace: true }"
            :class="{'active':$route.params.orderid == 4}">
          评论</a>
        </li>
      </ul>
    </div>
  </section>
  <section class="goodslist">
    <v-goods-list :good-list='goodList' v-if='!card'></v-goods-list>
    <v-goods-card :good-list='goodList' v-if='card'></v-goods-card>
  </section>
</template>
<script>
  import VGoodsList from '../components/GoodsList';
  import VGoodsCard from '../components/GoodsCard';

  import Setting from "../config/setting";
  import API from "../api/api";

  import $ from "zepto";

  export default{
    created(){
      console.log("created");
    },
    route:{

      data(){

        let params = this.$route.params;
        let query = this.$route.query;

        this.keyword = query.keyword || '';

        if( params.orderid == -1 ){
          return;
        }

        const api = new API();

        $.showPreloader();
        api.http(this,{
          url: Setting.API.shop_online,
          method: 'POST',
          data:{
            'Act': 'GetShoppingMallGoodsList',
            'FirstTypeId': params.firstid,
            'ThirdTypeId': params.thirdid,
            'OrderTypeId': params.orderid || 1,
            'KeyWord': query.keyword || '',
            'StartIndex': 0,
            'Number': 8,
            'BrandId': params.brandid || 0,
            'MinPrice': params.minprice || 0,
            'MaxPrice': params.maxprice || 999999,
            'StockType':'ALL'
          }
        }).then( response => {
          console.log(response);
          var data = response.data.ResponseData.GoodsData;
          this.$set('goodList',data);
          $.hidePreloader();
        }, function (response) {
            // error callback
        });
      }
    },
    data(){
      return {
        card: false,
        goodList: [],
        showsubcate: false,
        priceorder: 2,
        keyword: this.$route.query.keyword || '',
        //参数获取
        firstid: this.$route.params.firstid,
        thirdid: this.$route.params.thirdid,
        orderid: this.$route.params.orderid || 1,
        brandid: this.$route.params.brandid || 0,
        minprice: this.$route.params.minprice || 0,
        maxprice: this.$route.params.maxprice || 0,
      }
    },
    ready(){
      console.log('ready');
    },
    methods:{
      changeCard(){
        this.card = !this.card;
      },
      showSubCate(){
        this.showsubcate = !this.showsubcate;
        // alert("showsubcate");
      },
      changePrice(){
        if ( this.$route.params.orderid == 2 ){
          this.priceorder = 3;
        }else if( this.$route.params.orderid == 3 ){
          this.priceorder = 2;
        }
      },
      search(){
        if( !this.keyword ){
          $.toast("请输入搜索关键字");
          return;
        }
        this.$router.go({
          path: `/list/f/${this.firstid}/t/${this.thirdid}/o/${this.orderid}`,
          query:{
            keyword: this.keyword
          }
        });
      }
    },
    components:{
      VGoodsList,
      VGoodsCard
    }
  }
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
      z-index:2;
    }
    .search_btn{
      width: px2rem(36);
      height: px2rem(36);
      position: absolute;
      right: 5px;
      top: 3px;
      display: inline-block;
      border: none;
      z-index:3;
      opacity: 0;
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
    padding: px2rem(18) 0;
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

  .goodslist-container{
    top: px2rem(185);
  }

  .goodslist-container-card{
    @extend .goodslist-container;
  }

  @media screen and (device-aspect-ratio: 16/9) {
    .goodslist-container{
      top: px2rem(180);
    }
  }




</style>
