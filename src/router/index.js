import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Eletronics from '../views/Eletronics.vue'
import Jewelery from '../views/Jewelery.vue'
import MensClothing from '../views/MensClothing.vue'
import WomensClothing from '../views/WomensClothing.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Eletronics',
    path: '/electronics',
    component: Eletronics
  },
  {
    name: 'Jewelery',
    path: '/jewelery',
    component: Jewelery
  },
  {
    name: 'MensClothing',
    path: '/mensclothing',
    component: MensClothing
  },
  {
    name: 'WomensClothing',
    path: '/womensclothing',
    component: WomensClothing
  },
  {
    name: 'products',
    path: '/products/:id',
    component: Products,
    props: true
  }
]

const router = new VueRouter({ routes });

export default router