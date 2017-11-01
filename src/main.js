// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import YouHui from '@/components/YouHui'
import Search from '@/components/Search'
import PersonCenter from '@/components/PersonCenter'
import jiFen from '@/components/jiFen'
import Exchange from '@/components/Exchange'
import xianBao from '@/components/xianBao'
import fuLi from '@/components/fuLi';
import subjects from '@/components/subjects';
import discount from '@/components/discount';
import essential from '@/components/essential';
import hot from '@/components/hot'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    meta: {showFooter: true}
  },
  {
    path: '/home',
    component: Home,
    meta: {showFooter: true}
  },
  {
    path: '/YouHui',
    component: YouHui,
    meta: {showFooter: true}
  },
  {
    path: '/Search',
    component: Search,
    meta: {showFooter: true}
  },
  {
    path: '/PersonCenter',
    component: PersonCenter,
    meta: {showFooter: true}
  },
  {
    path: '/home/jiFen',
    component: jiFen,
    meta: {showFooter: false}
  },
  {
    path: '/home/Exchange',
    component: Exchange,
    meta: {showFooter: false}
  },
  {
    path: '/home/xianBao',
    component: xianBao,
    meta: {showFooter: false}

  },
  {
    path: '/home/fuLi',
    component: fuLi,
    meta: {showFooter: false}
  },
  {
    path: '/YouHui/subjects',
    component: subjects,
    meta: {showFooter: false}
  },
  {
    path:'/YouHui/discount',
    component: discount,
    meta: {showFooter: false}
  },
  {
    path:'/YouHui/essential',
    component: essential,
    meta: {showFooter: false}
  },
  {
    path:'/home/hot',
    component: hot,
    meta: {showFooter: false}
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

