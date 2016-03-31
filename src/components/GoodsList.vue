<template>
    <ul class="goodslist-container">
        <v-good-item
          v-for="goodsItem in goodList"
          :item="goodsItem"
        ></v-good-item>

        <v-loading-more
          tips="加载更多..."
        >
        </v-loading-more>
    </ul>

</template>

<script>
  import $ from "zepto";
  import VLoadingMore from './LoadingMore'
  import VGoodItem  from './GoodItem'

  export default{
    props:['goodList'],
    created(){
      setTimeout(()=>{
        this.$dispatch('goodlistp','lalal');
      },2000);
    },
    components: {
      VLoadingMore,
      VGoodItem
    }
  }
</script>

<style lang='sass'>
</style>
