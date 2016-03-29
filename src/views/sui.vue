<template>
  <input type="text" id='city-picker'/>
</template>
<script>
  export default{
    props: [],
    ready(){
      $("#city-picker").cityPicker({
        toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-right close-picker">确定</button>\
        <h1 class="title">选择收货地址</h1>\
        </header>'
      });
    },
    data:()=>{
      return{
        'switch': true,
        'myPhotoBrowserStandalone' : $.photoBrowser({
            photos : [
              '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
              '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
              '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
            ]
        }),
      }
    },
    methods:{

      open(){
        this.myPhotoBrowserStandalone.open();
      }
    },
    watch: {
      'switch': (value)=>{
        console.log(value);
      }
    }
  }
</script>
<style media="screen">

</style>
