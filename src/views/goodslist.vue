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
</style>
