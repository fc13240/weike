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
import yuanBaoShop from '@/components/yuanBaoShop'
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
import sign from '@/components/sign';
import userInfo from '@/components/userInfo'
import notice from '@/components/notice';
import myTracks from '@/components/myTracks'
import feedback from '@/components/feedback'
import SearchPage from '@/components/searchPage'
import toShowList from '@/components/toShowList'
import {AlertPlugin,ToastPlugin} from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
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
    path: '/Search/searchPage',
    component: SearchPage
  },
  {
    path: '/PersonCenter',
    component: PersonCenter,
    meta: {showFooter: true}
  },
  {
    path: '/home/yuanBaoShop',
    component: yuanBaoShop
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
    path: '/PersonCenter/userInfo',
    component: userInfo,
  },
  {
    path:'/PersonCenter/notice',
    component:notice
  },
  {
    path:'/PersonCenter/myTracks',
    component:myTracks
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
  },
  {
    path:'/personCenter/feedback',
    component:feedback
  },
  {
    path:'/personCenter/toShowList',
    component:toShowList
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

