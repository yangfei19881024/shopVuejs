<template>
  <div class="detail-headers">
    <swiper :imgs='slider' :config='config'></swiper>
  </div>
  <div class="good-attr content-padded">
    <div class="good-title-container">
      <h4 class="good-title" v-text="goodDetail.GoodsTitle"></h4>
      <img v-if="goodDetail.IsGlobal" class="oversea-logo" src="http://stest.boqii.com/static/images/global/logo_global.png" alt="">
    </div>
    <p class="good-extra">
      {{goodDetail.SubTitle}}
    </p>
    <p class="good-price">
      {{goodDetail.GoodsPrice}} <span>元</span>
    </p>
    <p class="good-origin-price">
      原价 <span class="gop">{{goodDetail.GoodsOriPrice}}元</span>
      <span>已售{{goodDetail.GoodsSaledNum}}</span>
    </p>
  </div>
  <div class="oversea-profile content-padded">
    <img :src="goodDetail.CountryFlag" class="small-icon" alt="" />
    <span class="oversea-country">{{goodDetail.CountryName}}</span>
    <img src="../assets/bsq.png" class="small-icon" alt="" />
    <span class="oversea-bsq">{{goodDetail.DeliverGoodsInfo}}</span>
    <span class="server-desc">
      服务说明
      <i class="icon-detail"></i>
    </span>
    <p class="oversea-profile-words">
      商品由海外产地直接采购，并经海关核查和商检后送入保
      税区，您下单后现在海关处清关再将从保税区发货，3-5
      天即可送达。
    </p>
  </div>
  <div class="good-desc content-padded">
    <p>
      {{goodDetail.GoodsDescription}}
    </p>
  </div>
  <div class="good-comments">

  </div>
</template>

<script>
  import Swiper from "../components/Swiper";
  import { API_URI,swiperConfig } from "../config/setting";
  import {trimThumb} from "../service/Utils";

  import API from "../api/api";
  import $ from "zepto";

  export default{
    data: function(){
      return {
        goodId: this.$route.params.gid,
        goodDetail: {},
        slider: [],
        config: swiperConfig
      }
    },
    ready(){
      this.getGoodDetail(this.goodId);
    },
    methods:{
      getGoodDetail(id){
        const api = new API();
        $.showIndicator();
        api.http(this,{
          url: API_URI.shop_online,
          method: 'POST',
          data:{
            'Act': 'GetShoppingMallGoodsDetail',
            'GoodsId': id
          }
        }).then( response => {
          this.$set('goodDetail',response.data.ResponseData);

          $.hideIndicator();
        })
      },

    },
    computed: {
      'slider':function(){
          let images = this.goodDetail.GoodsImgList.split(','),
              sliderImage = [];

          images.map(item =>{
            sliderImage.push({
              target: '',
              ImageUrl: trimThumb(item)
            })
          });
          return sliderImage;
      }
    },
    components:{
      Swiper
    }
  }
</script>
<style lang="sass" scoped>
  @import "../styles/utils";
  @import "../styles/variables";
  @import "../styles/common";

  .page{
    overflow: auto !important;
  }
  .small-icon{
    width: 6%;
  }
  .oversea-profile{
    font-size: px2rem(30);
  }
  .oversea-country{
    color: #a2a2a2;
  }
  .oversea-bsq{
    color: #000000;
  }
  .server-desc{
    color: $mainColor;
    float: right;
  }
  .oversea-profile-words{
    font-size: px2rem(24);
    color: #959595;
    line-height: 25px;
    padding:10px 0;
  }
  .icon-detail{
    display: inline-block;
    width: px2rem(35);
    height: px2rem(35);
    background-image: url(../assets/lookmore.png);
    background-size: cover;
    transform: translate3D(0,3px,0);
  }
  .detail-headers{
    border-bottom: 1px solid #cbcbcb;
  }
  .good-title-container{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
  }
  .good-attr{
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 10px;
    @extend %bg_white;
  }
  .good-desc{
    color: #575757;
    font-size: px2rem(24);
    line-height: 20px;
  }
  .good-title{
    color: #000000;
    font-size: px2rem(30);
    font-weight: 200;
  }
  .oversea-logo{
    width: 20%;
  }
  .good-extra{
    color: $mainColor;
    font-size: px2rem(25);
  }
  .good-price{
    color: $mainColor;
    font-weight: bold;
    font-size: px2rem(36);
    padding: px2rem(16) 0;
    span{
      font-size: px2rem(25);
    }
  }
  .good-origin-price{
    color: #959595;
    font-size: px2rem(25);
    .gop{
      text-decoration: line-through;
      padding-right: px2rem(20);
    }
    span:nth-child(2){
      padding-left: px2rem(20);
      border-left: 1px solid #a8a8a8;
    }
  }
</style>
