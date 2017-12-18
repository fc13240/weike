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
import goodsDetail from '@/components/goodsDetail'
import draw from '@/components/draw';
import searchResult from '@/components/searchResult';
import '../static/css/main.css'
import { ConfirmPlugin ,AlertPlugin,ToastPlugin,AjaxPlugin ,LoadingPlugin} from 'vux'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(require('vue-wechat-title'))
Vue.use(ConfirmPlugin)
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
    path: '/goodsDetail',
    name:'goodsDetail',
    component: goodsDetail,
    meta: {
      showFooter: false,
      title:'商品详情'
    }
  },
  {
    path: '/goodsDetail/draw',
    name:'draw',
    component: draw,
    meta: {
      showFooter: false,
      title:'浏览器领券'
    }
  },
  {
    path: '/Search/searchPage',
    component: SearchPage
  },
  {
    path: '/Search/searchResult',
    name:'searchResult',
    component: searchResult
  },
  {
    path: '/PersonCenter',
    name:'PersonCenter',
    component: PersonCenter,
    meta: {
      showFooter: true,
      title:'个人中心'
    }
  },
  {
    path: '/home/yuanBaoShop',
    name:'yuanBaoShop',
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
    name:'subjects',
    component: subjects,
  },
  {
    path: '/YouHui/discount',
    name:'discount',
    component: discount,
  },
  {
    path: '/YouHui/essential',
    name:'essential',
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
    path: '/PersonCenter/myOrder/:type',
    name:'myOrder',
    component: myOrder,
    meta: {
      title:'我的订单'
    }
  },
  {
    path: '/PersonCenter/userInfo',
    name:'userInfo',
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
    name:'exchangeDetail',
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
    name:'sign',
    component:sign,
    meta: {
      title:'每日签到'
    }
  },
  {
    path:'/personCenter/feedback',
    name:'feedback',
    component:feedback,
    meta: {
      title:'意见反馈'
    }
  },
  {
    path:'/personCenter/toShowList',
    name:'toShowList',
    component:toShowList,
    meta: {
      title:'晒单'
    }
  },
  {
    path:'/personCenter/addressList',
    name:'addressList',
    component:addressList,
    meta: {
      title:'收货管理'
    }
  },
  {
    path:'/personCenter/addAddress',
    name:'addAddress',
    component:addAddress,
    meta: {
      title:'地址管理'
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

// getQueryString=function(name){
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//   var r = window.location.search.substr(1).match(reg);
//   if (r != null) return unescape(r[2]);
//   return null;
// }
// global.browserQuery = {
//   appid: getQueryString('appid'),
//   cpid: getQueryString('cpid'),
//   page: getQueryString('page')
// }
// router.beforeEach(({ meta, path, query }, from, next) => {
//   if (browserQuery.appid && browserQuery.cpid) {
//     store.commit('appid', browserQuery.appid);
//     store.commit('cpid', browserQuery.cpid);
//     delete browserQuery.appid;
//     return next('/');
//   }
//   ///其它代码
// })
// router.afterEach(route => {
//   if (browserQuery.page) {
//     let p = browserQuery.page;
//     browserQuery = {};
//     router.push(p);//因为没有next对象，直接调用router跳转
//   }
// }

