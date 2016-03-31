<template>
<div class="content">

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
        <a href='javascript:;' class="open-panel" data-panel='#panel-left-demo'>筛选</a>
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
  <section class="goodslist-container">
    <v-goods-list
      :good-list='goodList'
      v-if='!card'
      v-lazy-load
      v-infinite-scroll='loadMore'
      v-pull-to-refresh="refresh"
      v-event-delegator='li'
      distance="55"
      >
    </v-goods-list>

    <v-goods-card
      :good-list='goodList'
      v-if='card'
      v-infinite-scroll='loadMore'
      >
    </v-goods-card>
  </section>
  <section> <!--侧边栏-->
      <div class="panel-overlay"></div>
      <!-- Left Panel with Reveal effect -->
      <div class="panel panel-right panel-reveal theme-dark" id='panel-left-demo'>
        <div class="content-block">
          <p>这是一个侧栏</p>
          <p>你可以在这里放用户设置页面</p>
          <p><a href="#" class="close-panel">关闭</a></p>
        </div>
        <div class="list-block">
          <!-- .... -->
        </div>
      </div>
      <div class="panel panel-right panel-reveal">
        <div class="content-block">
          <p>这是一个侧栏</p>
          <!-- Click on link with "close-panel" class will close panel -->
          <p><a href="#" class="close-panel">关闭</a></p>
        </div>
      </div>


  </section>

  <loading-bar
    :progress=50
    direction="left"
    error="true">
  </loading-bar>

</div>
</template>
<script>
  import VGoodsList from '../components/GoodsList';
  import VGoodsCard from '../components/GoodsCard';

  import Setting from "../config/setting";
  import {decodeURI} from "../service/Utils";

  import API from "../api/api";
  import loadingBar from "../components/vue-loading-bar.vue"
  import $ from "zepto";

  export default{
    created(){
      console.log("created");
    },
    ready () {
      $.init()
    },
    route:{
      data(){
        this.fetchList();
      }
    },
    events:{
      goodlistp: function(data){
        console.log(data);
      }
    },
    data(){
      return {
        card: false,
        goodList: [],
        showsubcate: false,
        priceorder: 2,
        startIndex: 0,
        pageStep: 8,
        isLoading: false,
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
            keyword: decodeURI(this.keyword)
          }
        });
      },
      fetchList(action='newadd'){

        this.isLoading = true;

        let params = this.$route.params;
        let query = this.$route.query;

        this.keyword = query.keyword || '';

        if( params.orderid == -1 ){
          return;
        }

        if( params.orderid > 0){
          this.startIndex = 0;
          $('.goodsList').scrollTop(0);
          $('.goodslist-container').trigger('scroll'); //触发 滚动 ，以触发图片懒加载
        }

        if( action == 'newadd' ){
            $.showIndicator();
        }

        const api = new API();

        api.http(this,{
          url: Setting.API.shop_online,
          method: 'POST',
          data:{
            'Act': 'GetShoppingMallGoodsList',
            'FirstTypeId': params.firstid,
            'ThirdTypeId': params.thirdid,
            'OrderTypeId': params.orderid || 1,
            'KeyWord': query.keyword || '',
            'StartIndex': this.startIndex,
            'Number': this.pageStep,
            'BrandId': params.brandid || 0,
            'MinPrice': params.minprice || 0,
            'MaxPrice': params.maxprice || 999999,
            'StockType':'ALL'
          }
        }).then( response => {
          console.log(response);
          this.isLoading = false;
          var data = response.data.ResponseData.GoodsData;
          //加载完毕
          if( data == null ){
            // $.detachInfiniteScroll($('.infinite-scroll'));
            $('.infinite-scroll-preloader').html('加载完毕');
            return;
          }
          if( action == 'newadd' || action == 'refresh' ){
              this.$set('goodList',data);
          }else if( action == 'pushdata' ){
              this.goodList = [...this.goodList,...data];

          }
          $.hideIndicator();

          if( action == 'refresh' ){ //上拉刷新
            $.pullToRefreshDone('.pull-to-refresh-content')
            $.hideIndicator();
          }

        }, function (response) {
            // error callback
        });
      },
      loadMore(){
        console.log('开始加载了');
        console.log(this.isLoading);
        if( this.isLoading ){ //正在加载中，停止
          return;
        }
        this.startIndex += this.pageStep;
        this.fetchList('pushdata');

      },
      refresh(){
        this.startIndex = 0;
        this.fetchList('refresh');
      }
    },
    components:{
      VGoodsList,
      VGoodsCard,
      loadingBar
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
  .conditon_selection{
    position: relative;
    z-index: 10;
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
