import Home from "../views/home"
import GoodsList from "../views/goodslist";

export default function(router){
  router.map({
      '/home': {
          component: Home
      },
      '/list/f/:firstid/t/:thirdid/o/:orderid': {
          component: GoodsList
      }
  })

  router.redirect({
    '/': '/home'
  })

}
