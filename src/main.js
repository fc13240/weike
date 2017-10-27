// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Tmall from './components/Tmall'
import YouHui from '@/components/YouHui'
import Search from '@/components/Search'
import PersonCenter from '@/components/PersonCenter'
import jiFen from '@/components/jiFen'
import Exchange from '@/components/Exchange'
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  component:Home
},
{
  path: '/Tmall',
  component: Tmall
},
  {
    path: '/YouHui',
    component: YouHui
  },
  {
    path: '/Search',
    component: Search
  },
  {
    path: '/PersonCenter',
    component: PersonCenter
  },
  {
    path: '/home/jiFen',
    component: jiFen
  },
  {
    path: '/home/jiFen/Exchange',
    component: Exchange
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

