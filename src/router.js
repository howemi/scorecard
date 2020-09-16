import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Game from './views/Game.vue'
// import Credits from './views/Credits.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scorecard',
      component: Game
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/scorecard',
    //   name: 'scorecard',
    //   component: Game
    // },
    // {
    //   path: '/credits',
    //   name: 'credits',
    //   component: Credits
    // }
  ]
})
