import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

import Home from './components/home'
import Register from './components/register'
import Product from './components/product'
import Checkout from './components/checkout'
import About from './components/about'
import Account from './components/account'
const routers = [
  {
    name: 'Home',
    path: '',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Account',
    path: '/login',
    component: Account
  },
  {
    name: 'Product',
    path: '/product',
    component: Product
  },
  {
    name: 'Checkout',
    path: '/checkout',
    component: Checkout
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
]
const router = new VueRouter({ mode: 'history', routes: routers })
new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
