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
import classify from '@/components/classify'
import myOrder from '@/components/myOrder'
import exchangeDetail from '@/components/exchangeDetail'
import shareList from '@/components/shareList';
import sign from '@/components/sign'
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
    component: jiFen
  },
  {
    path: '/home/Exchange',
    component: Exchange,
  },
  {
    path: '/home/xianBao',
    component: xianBao,

  },
  {
    path: '/home/fuLi',
    component: fuLi,
  },
  {
    path: '/YouHui/subjects',
    component: subjects,
  },
  {
    path: '/YouHui/discount',
    component: discount,
  },
  {
    path: '/YouHui/essential',
    component: essential,
  },
  {
    path: '/home/hot',
    component: hot,
  },
  {
    path: '/home/classify',
    component: classify,
  },
  {
    path: '/PersonCenter/myOrder',
    component: myOrder,
  },
  {
    path:'/home/exchangeDetail',
    component:exchangeDetail,
  },
  {
    path:'/personCenter/shareList',
    component:shareList,
  },
  {
    path:'/personCenter/sign',
    component:sign
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

