import Vue from 'vue'
import Router from 'vue-router'
import facebook from '~/pages/auth/facebook'
import google from '~/pages/auth/google'
import index from '~/pages/index'
import login from '~/pages/login'
import register from '~/pages/register'
import testComponent from '~/pages/test-component'
import article from '~/pages/article'
import articleDetail from '~/pages/articleDetail'
import houseDetail from '~/pages/houseDetail'
import house from '~/pages/house'

// import page1 from '~/pages/page1'
Vue.use(Router)

// function interopDefault(promise) {
//   return promise.then((m) => m.default || m)
// }

export function createRouter() {
  return new Router({
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    mode: 'history',
    routes: [
      {
        path: '/auth/facebook',
        name: 'facebook',
        component: facebook,
        props: (route) => ({ code: route.query.code }),
      },
      {
        path: '/auth/google',
        name: 'google',
        component: google,
        props: (route) => ({ code: route.query.code }),
      },
      {
        path: '/',
        name: 'index',
        component: index,
      },
      {
        path: '/test-component',
        name: 'test-component',
        component: testComponent,
      },
      {
        path: '/login',
        name: 'login',
        component: login,
      },
      {
        path: '/register',
        name: 'register',
        component: register,
      },
      {
        path: '/tin-tuc',
        name: 'article',
        component: article,
      },
      {
        path: '/danh-sach-nha-dat',
        name: 'house',
        component: house,
      },
      {
        path: '/thong-tin-mua-ban-nha-dat/:slug',
        name: 'houseDetail',
        component: houseDetail,
      },
      {
        path: '/article/detail/:slug',
        name: 'articleDetail',
        component: articleDetail,
      },
      {
        path: '/tin-tuc/:slug',
        name: 'articleDetail',
        component: articleDetail,
      },
    ],
  })
}
