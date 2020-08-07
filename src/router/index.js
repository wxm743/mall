import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const shopCart=()=>import("@/views/shopcart/shopCart")
const category=()=>import("@/views/Category/category")
const profile=()=>import("@/views/profile/profile")
const home=()=>import("@/views/Home/home")
const routes = [
  {path:"/",
    redirect:'/home'},{
    path: "/home",
    component: home
  },{
    path: "/shopcart",
    component: shopCart
  },{
    path: "/category",
    component: category
  },{
    path: "/profile",
    component: profile
  }

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
