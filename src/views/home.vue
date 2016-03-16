<template>
  <div class="content">
    <swiper :imgs='slider' :config='config'></swiper>
    <div class="">
      <ul class="tab-item">
        <li class="active">狗狗</li>
        <li>猫猫</li>
        <li>小宠</li>
        <li>水族</li>
      </ul>
      <div class="tab-content">
          <ul class="tab-content_items">
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="http://img.boqiicdn.com/Data/Shop/0/0/1/shopmobile_index_icon1423710611.png" alt="" />
                <span>狗粮</span>
              </a>
            </li>
          </ul>
          <section class="tab-content-template">
            <div class="template-one">
              <div class="template-title">
                <span>热卖推荐</span>
              </div>
              <div class="template-content">
                <div class="template-content_left">
                  <a href="">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11457623866_y.jpg" alt="" />
                  </a>
                </div>
                <div class="template-content_right">
                  <a href="">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath21457623866_y.jpg" alt="" />
                  </a>
                  <a href="">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath31457623866_y.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div class="template-two">
              <div class="template-title">
                <span>狗粮专区</span>
              </div>
              <ul class="template-content">
                <li>
                  <a href="#">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11457608689_y.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11457608689_y.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11457608689_y.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11457608689_y.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="template-three">
              <div class="template-title">
                <span>狗粮专区</span>
              </div>
              <div class="template-content">
                <a href="#">
                  <img src="http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath11458052623_y.jpg" alt="" />
                </a>
              </div>
            </div>

          </section>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "zepto";
  import Swiper from '../components/Swiper';
  import API from '../api/api';

  export default {
    created(){
      // $.showPreloader();
    },
    ready(){
      //this.getApi();
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
        }
      }
    },
    methods:{

      getApi(){
        const api = new API();
        api.http(this,{
          url: 'http://s.boqii.com/apidemo.php',
          method: 'POST',
          data:{
            'Act': 'GetShoppingMallHomeData'
          }
        }).then( response => {
          console.log(response);
          this.$set('slider',response.data.ResponseData.BannerList);
          $.hidePreloader();
        }, function (response) {
            // error callback
        });
      }
    },
    components:{
      Swiper
    }
  }
</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';

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
        transform: translate3D(0,-7px,0);
      }
      img{
        width:70%;
      }
    }
  }

  .template-title{
    background: #f9f9f9;
    padding:px2rem(20) px2rem(8);
    margin-top:10px;
    border-top: 1px solid $grayColor;
    border-bottom: 1px solid $grayColor;
    padding-left: 20px;
    position: relative;

    span{
      color: #575757;
      font-size: px2rem(28);
      letter-spacing: 0px;
      font-weight: 550;
      &:before{
        content: '';
        position: absolute;
        left:10px;
        top:15px;
        display: inline-block;
        width: px2rem(8);
        background: $mainColor;
        height: 40%;
        border-radius:6px;
      }
    }
  }

  .tab-content-template > div{
    border-bottom: 1px solid $grayColor;
  }

  .template-one{
    .template-content{
      display: flex;
      flex-flow: row nowrap;
      height:px2rem(320);

    }
    .template-content_left{
      padding-right:1px;
      a{
        display:inline-block;
        height:px2rem(320);
      }
    }
    .template-content_right{
      display: flex;
      flex-flow: column nowrap;
      a{
        display:inline-block;
        height:px2rem(160);
        &:first-child{
          padding-bottom: 1px;
        }
      }
    }
    img{
      float:left;
    }
  }

  .template-two{
    .template-content{
      display:flex;
      flex-flow:row wrap;
      li{
        width:50%;
        padding-bottom:1px;
        &:nth-child(odd){
          padding-right: 1px;
        }
        img{
          float:left;
        }
      }
    }

  }
</style>
