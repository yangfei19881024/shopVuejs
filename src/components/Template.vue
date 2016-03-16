<template>
  <div v-if='t.TemplateType == 2' class="template-two"> <!--模板2-->
    <ul class="template-content">
      <li>
        <a href="#">
          <img :src='t.Template[0].ImageUrl' alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src='t.Template[1].ImageUrl' alt="" />
        </a>
      </li>
    </ul>
  </div>

  <div v-if='t.TemplateType == 4' class="template-four"><!--模板4-->
    <div class="template-content">
      <div class="template-content_left">
        <a href="">
          <img :src="t.Template[0].ImageUrl" alt="" />
        </a>
      </div>
      <div class="template-content_right">
        <a href="">
          <img :src="t.Template[1].ImageUrl" alt="" />
        </a>
        <a href="">
          <img :src="t.Template[2].ImageUrl" alt="" />
        </a>
      </div>
    </div>
  </div>

  <div v-if='t.TemplateType == 5' class="template-two"> <!--模板5-->
    <ul class="template-content">
      <li>
        <a href="#">
          <img :src='t.Template[0].ImageUrl' alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src='t.Template[1].ImageUrl' alt="" />
        </a>
      </li>
    </ul>
  </div>

  <div v-if='t.TemplateType == 6' class="template-six"> <!--模板6-->
    <div class="template-content">
      <a href="#">
        <img :src="t.Template[0].ImageUrl" alt="" />
      </a>
    </div>
  </div>

</template>

<script>
    export default{
      created(){

      },
      props: ['data'],
      data() {
        return{
          t: this.data
        }
      }
    }
</script>

<style lang='sass'>
  @import '../styles/utils';
  @import '../styles/variables';
  @import '../styles/common';

  .template-two{
    .template-content{
      display:flex;
      flex-flow:row wrap;
      li{
        width:50%;
        padding-bottom:1px;
        &:nth-child(odd){
          padding-right: 2px;
        }
        img{
          float:left;
        }
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

  .template-four{
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

</style>
