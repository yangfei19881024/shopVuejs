import Home from "../views/home"
import GoodsLists from "../views/goodslists";

export default function(router){
  router.map({
      '/home': {
          component: Home
      },
      '/list': {
          component: GoodsLists
      }
  })

  router.redirect({
    '/': '/home'
  })

}
