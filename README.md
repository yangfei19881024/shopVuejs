# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm test
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

##注意项
```
1.使用 <style lang='sass'></style>
需要安装 sass-loader node-sass

2. 复名组件 比如 TemplateTwo 写成 模板: <v-template-two> </v-template-two>
   import VTemplateTwo from 'TemplateTwo.vue';

3. 同一路径的比如 由 /message/1 切换到 /message/2 在route 里做配置 比如

route:{

  data(transition){

    const api = new API();

     //注意的是 这里的 参数获取通过 this.$route.params['参数名'] 来动态获取

    api.http(this,{
      url: Setting.API.shop_online,
      method: 'POST',
      data:{
        'Act': 'GetShoppingMallGoodsList',
        //。。。。。其他参数
      }
    }).then( response => {
        // success callback
    }, function (response) {
        // error callback
    });

    transition.next();
  }

4.动态参数 注意 里面变量怎么放！！
v-link="{'path': '/list/f/'+firstid+'/t/'+thirdid+'/o/1','query': {'keyword': keyword }, replace: true }"

```
#需优化或完善
```
1.图片懒加载 指令
2.快速加载 css 样式资源
```
