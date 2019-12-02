import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (r) =>require([],()=>r(require('@/App')),'index'),
      redirect:"/home",
      children:[
        {
          path:"/item",
          name:"item",
          component:(r) =>require([],()=>r(require('@/pages/item')),'item')
        },
        {
          path:"/score",
          name:"score",
          component:(r) =>require([],() =>r(require('@/pages/score')),'score')
        },
        {
          path:"/home",
          name:"home",
          component:(r) =>require([],()=>r(require('@/pages/index')),'home')
        },
      ]
    }
  ]
})
