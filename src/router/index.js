import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/AlphaShop/Purchases',
  },
  {
    path: '/AlphaShop/Purchases',
    name: 'purchases',
    component: () => import('../views/Purchases.vue'),
  },
  {
    path: '/NotFound',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]


const router = new VueRouter({
  linkExactActiveClass: 'active', // router-link-exact-active class change to active
  routes
})

export default router
