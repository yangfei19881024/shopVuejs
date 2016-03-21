<template>
  <div class="content">
    <swiper :imgs='slider' :config='config'></swiper>
    <div class="">
      <ul class="tab-item">
        <li
          v-for='item in MainData'
          v-touch:tap='toggleTab(item.TabId)'
          :class="{'active':( ($index ===0 && isFirstTab == 0) || currentTab == item.TabId )}"
          data-id='{{item.TabId}}'>
            {{item.TabName}}
        </li>
      </ul>
      <div class="tab-content">
          <ul class="tab-content_items">
            <li v-for='item in TypeList'>
              <a
                v-link="{ path: '/list/f/'+item.firstId+'/t/'+item.TypeId+'/o/0' }">
                <img :src='item.TypeImg' alt="" />
                <span v-text='item.TypeName'></span>
              </a>
            </li>
            <li >
              <a href="">
                <img src='http://s.boqii.com/static/images/more.png' alt="" />
                <span>更多</span>
              </a>
            </li>
          </ul>
          <section class="tab-content-template">
            <template v-for='ad in AdList'>
              <div class="template-title">
                <span v-text='ad.TemplateName'></span>
              </div>

              <template v-for='t in ad.Template'>

                <v-template :data='t'></v-template>

              </template>
            </template>
          </section>
      </div>

    </div>

    <div class="userOperation">
      <div class="">
        <a href=''>登录</a>
        <a href=''>注册</a>
      </div>
      <div class="">
        <a href="javascript:;" v-touch:tap='toTop'>
          <i class='icon-top'></i>
        </a>
      </div>
    </div>

    <v-footer></v-footer>

    <v-cart></v-cart>

  </div>
</template>

<script>
  import $ from "zepto";
  import _ from "lodash";

  import Swiper from '../components/Swiper';
  import VFooter from '../components/Footer';
  import VCart from '../components/Cart';
  import VTemplate from '../components/Template';

  import Setting from "../config/setting";

  import API from '../api/api';

  export default {
    created(){
      $.showPreloader();
    },
    ready(){
      this.getApi();
    },
    data(){
      return {
        slider:[
          {
            ImageUrl:'//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg'
          }
        ],
        config: {
          autoplay: 1000
        },
        TypeList: [],
        AdList: [],
        currentTab: '',
        isFirstTab: 0,
      }
    },
    methods:{
      toggleTab(TabId){
        let data = _.filter(this.MainData,{'TabId':TabId});
        this.currentTab = TabId;
        this.isFirstTab = 1;
        this.TypeList = data[0].TypeList;
        this.TypeList = this.composedTypeList(data[0],data[0].TypeList);
        this.AdList = data[0].AdList;
      },

      getApi(){
        const api = new API();
        api.http(this,{
          url: Setting.API.shop_online,
          method: 'POST',
          data:{
            'Act': 'GetShoppingMallHomeData'
          }
        }).then( response => {
          console.log(response);
          var data = response.data.ResponseData;
          this.$set('slider',data.BannerList);
          this.$set('MainData',data.MainData);
          //
          let typelist = data.MainData[0].TypeList;
          //
          // typelist = typelist.map((item, index) => {
          //   return {
          //     ...typelist[index],
          //     firstId: data.MainData[0].TabId
          //   }
          // });

          typelist = this.composedTypeList(data.MainData[0],typelist);

          console.log('typelist');
          console.log(typelist);
          this.$set('TypeList',typelist);
          this.$set('AdList',data.MainData[0].AdList);
          $.hidePreloader();
        }, function (response) {
            // error callback
        });

      },
      composedTypeList(MainData,typelist){
        return typelist.map((item, index) => {
          return {
            ...typelist[index],
            firstId: MainData.TabId
          }
        });
      },
      toTop(){
        $('html').scrollTop(0);
      }
    },
    components:{
      Swiper,
      VFooter,
      VCart,
      VTemplate
    }
  }
</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';

  img{
    vertical-align: top;
  }
  .tab-item{
    display: flex;
    flex-flow: row nowrap;
    background: #f5f7f6;
    li{
      width: 25%;
      font-size: px2rem(28);
      color: #383838;
      text-align: center;
      padding: px2rem(20) 0;
      border-bottom: 1px solid $grayColor;
      &.active{
        background: #FFF;
        color: #fc4a00;
        border-bottom: 1px solid #FFF;
        border-right: 1px solid $grayColor;
        border-top: 2px solid $mainColor;
        position:relative;
        top:0;
        &:after{
          content:'';
          display:inline-block;
          width:6px;
          height:6px;
          background: $mainColor;
          transform:rotate(45deg) translateX(-50%);
          position:absolute;
          left:50%;
          top:-1px;
        }
      }
    }
  }

  .tab-content_items{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background: #FFF;
    border-bottom: 1px solid $grayColor;
    li{
      width: 25%;
      text-align:center;
      span{
        display: block;
        font-size: px2rem(24);
        color: #575757;
        transform: translate3D(0,-3px,0);
      }
      img{
        width:70%;
      }
    }
  }

  .userOperation{
    background: #FFF;
    border-bottom: 1px solid $grayColor;
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    a{
      color: $mainColor;
      font-size: px2rem(24);
      margin-right:10px;
    }
  }

  .app_device{
    margin-bottom: 10px;
    a{
      display: inline-block;
      font-size: px2rem(24);
      color: #575757;
      &:nth-child(1){
        border-right: 1px solid $grayColor;
        padding-right: 10px;
      }
      &:nth-child(2){
        padding-left: 5px;
      }
    }
  }
</style>
