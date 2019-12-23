import Vue from 'vue';
import VueRouter from 'vue-router';
import Exercise1 from '../views/Exercise1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "*", 
    redirect: '/exercise/1'
  },
  {
    path: '/exercise/1',
    name: 'Exercise1',
    component: Exercise1
  },
  {
    path: '/exercise/2',
    name: 'Exercise2',
    component: () => import('../views/Exercise2.vue')
  },
  {
    path: '/exercise/3',
    name: 'Exercise3',
    component: () => import('../views/Exercise3.vue')
  },
  {
    path: '/exercise/4',
    name: 'Exercise4',
    component: () => import('../views/Exercise4.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
