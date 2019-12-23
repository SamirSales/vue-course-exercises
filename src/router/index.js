import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/exercise/1',
    name: 'Exercise1',
    component: () => import('../views/Exercise1.vue')
  },
  {
    path: '/exercise/2',
    name: 'Exercise2',
    component: () => import('../views/Exercise2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
