import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";

Vue.use(VueRouter)

const routes = [
/*  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },*/
  {
    path:'/',
    name:'导航一',
    show:true,
    component:() => import("../views/main"),
    redirect:'/pageOne',
    children:[
      {
        path:'/pageOne',
        name:'pageOne',
        component:() => import('../views/PageOne.vue')
      },
      {
        path:'/pageTwo',
        name:'pageTwo',
        component:() => import('../views/PageTwo')
      },
    ]
  },
  {
    path:'/',
    show:true,
    name:'导航二',
    component:() => import('../views/main'),
    children:[
      {
        path:'/pageThree',
        name:'pageThree',
        component:() => import('../views/PageThree')
      },
      {
        path:'/pageFour',
        name:'PageFour',
        component:() => import('../views/PageFour')
      },
      {
        path:'/update',
        name:'修改页面',
        component:() => import('../views/update')
      }
    ]
  },

  {
    path:'/',
    name:'修改页面',
    show:false,
    component:() => import('../views/main'),
    children:[
      {
        path:'/update',
        name:'update',
        component:() => import('../views/update')
      }
    ]
  }




  /*{
    path: '/book',
    name: 'Book',
    component: () => import("../views/Book")
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
