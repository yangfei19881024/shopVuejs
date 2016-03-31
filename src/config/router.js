export default function(router){
  router.map({
      '/home': {
          component: function (resolve) {
            require(['../views/home'], resolve)
          }
      },
      '/list/f/:firstid/t/:thirdid/o/:orderid': {
          component: function (resolve) {
            require(['../views/goodslist'], resolve)
          }
      },
      '/detail/:gid': {
          component: function (resolve) {
            require(['../views/gooddetail'], resolve)
          }
      },
      '/sui': {
        component: function (resolve) {
          require(['../views/sui'], resolve)
        }
      }
  })

  router.redirect({
    '/': '/home'
  })

}
