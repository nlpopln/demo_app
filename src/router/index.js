import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import popapp1 from '../views/popapp1.vue'
import popapp2 from '../views/popapp2.vue'
import popapp3 from '../views/popapp3.vue'
import popapp4 from '../views/popapp4.vue'
import popapp5 from '../views/popapp5.vue'
import popapp6 from '../views/popapp6.vue'
import popapp7 from '../views/popapp7.vue'
import popapp8 from '../views/popapp8.vue'
import popapp9 from '../views/popapp9.vue'
import demo1 from '../views/demo1.vue'
import demo2 from '../views/demo2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/popapp1',
    name: 'popapp1',
    component: popapp1
  },
  {
    path: '/popapp2',
    name: 'popapp2',
    component: popapp2
  },
  {
    path: '/popapp3',
    name: 'popapp3',
    component: popapp3
  },
  {
    path: '/popapp4',
    name: 'popapp4',
    component: popapp4
  },
  {
    path: '/popapp5',
    name: 'popapp5',
    component: popapp5
  },  {
    path: '/popapp6',
    name: 'popapp6',
    component: popapp6
  },  {
    path: '/popapp7',
    name: 'popapp7',
    component: popapp7
  },  {
    path: '/popapp8',
    name: 'popapp8',
    component: popapp8
  },  {
    path: '/popapp9',
    name: 'popapp9',
    component: popapp9
  }
  ,  {
    path: '/demo1',
    name: 'demo1',
    component: demo1
  } ,{
    path: '/google',
    name: 'http://google.co.th',
  },{
    path: '/demo2',
    name: 'demo2',
    component: demo2
  } ,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
