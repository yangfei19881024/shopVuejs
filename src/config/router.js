import Home from "../views/home"
import GoodsList from "../views/goodslist";
import Sui from "../views/sui";

export default function(router){
  router.map({
      '/home': {
          component: Home
      },
      '/list/f/:firstid/t/:thirdid/o/:orderid': {
          component: GoodsList
      },
      '/sui': {
        component: Sui
      }
  })

  router.redirect({
    '/': '/home'
  })

}
