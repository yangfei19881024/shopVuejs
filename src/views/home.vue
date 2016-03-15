<template>
  <div class="content">
    <swiper :imgs='slider' :config='config'></swiper>
  </div>
</template>

<script>
  import $ from "zepto";
  import Swiper from '../components/Swiper';
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
        slider:[],
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

<style lang='sass' scoped>
  @import '../styles/utils';
  .cat{
    font-size:px2rem(28);
    color: #383838;
  }

</style>
