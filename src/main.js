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
import addressList from '@/components/addressList'
import addAddress from '@/components/addAddress'
import {AlertPlugin,ToastPlugin,AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(require('vue-wechat-title'))
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    meta: {
      showFooter: true,
      title:'微客'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true,
      title:'微客'
    }
  },
  {
    path: '/YouHui',
    component: YouHui,
    meta: {
      showFooter: true,
      title:'超实惠'
    }
  },
  {
    path: '/Search',
    component: Search,
    meta: {
      showFooter: true,
      title:'智搜'
    }
  },
  {
    path: '/Search/searchPage',
    component: SearchPage
  },
  {
    path: '/PersonCenter',
    component: PersonCenter,
    meta: {
      showFooter: true,
      title:'个人中心'
    }
  },
  {
    path: '/home/yuanBaoShop',
    component: yuanBaoShop,
    meta: {
      title:'元宝商城'
    }
  },
  {
    path: '/home/Exchange',
    component: Exchange,
    meta: {
      title:'兑换记录'
    }
  },
  {
    path: '/home/xianBao',
    component: xianBao,
    meta: {
      title:'超值线报'
    }
  },
  {
    path: '/home/fuLi',
    component: fuLi,
    meta: {
      title:'粉丝福利'
    }
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
    meta: {
      title:'热门'
    }
  },
  {
    path: '/home/classify/:id',
    name:'classify',
    component: classify,
  },
  {
    path: '/PersonCenter/myOrder',
    component: myOrder,
    meta: {
      title:'我的订单'
    }
  },
  {
    path: '/PersonCenter/userInfo',
    component: userInfo,
    meta: {
      title:'用户信息'
    }
  },
  {
    path:'/PersonCenter/notice',
    component:notice,
    meta: {
      title:'通知'
    }
  },
  {
    path:'/PersonCenter/myTracks',
    component:myTracks,
    meta: {
      title:'我的足迹'
    }
  },
  {
    path:'/home/exchangeDetail',
    component:exchangeDetail,
    meta: {
      title:'兑换详情'
    }
  },
  {
    path:'/personCenter/shareList',
    component:shareList,
    meta: {
      title:'晒单赚元宝'
    }
  },
  {
    path:'/personCenter/sign',
    component:sign,
    meta: {
      title:'每日签到'
    }
  },
  {
    path:'/personCenter/feedback',
    component:feedback,
    meta: {
      title:'意见反馈'
    }
  },
  {
    path:'/personCenter/toShowList',
    component:toShowList,
    meta: {
      title:'晒单'
    }
  },
  {
    path:'/personCenter/addressList',
    component:addressList,
    meta: {
      title:'收货管理'
    }
  },
  {
    path:'/personCenter/addAddress',
    component:addAddress,
    meta: {
      title:'地址管理'
    }
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

