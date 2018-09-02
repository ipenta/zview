import Vue from 'vue'
import Router from 'vue-router'
import store from '@/config/store'

Vue.use(Router)

const dynamicRouters = [{
  path: '',
  component: resolve => require(['@/views/app/dashboard/index.vue'], resolve)
}]

const defaultRoutes = [{
  path: '/auth/login',
  component: resolve => require(['@/views/support/login/index.vue'], resolve)
}, {
  path: '/auth/register',
  component: resolve => require(['@/views/support/register/index.vue'], resolve)
}, {
  path: '/auth/modifypwd',
  component: resolve => require(['@/views/support/modifypwd/index.vue'], resolve)
}, {
  path: '/',
  component: resolve => require(['@/views/support/layout/index.vue'], resolve),
  children: dynamicRouters
}, {
  path: '*',
  name: '404',
  component: resolve => require(['@/views/support/404/index.vue'], resolve)
}]

const router = new Router({ routes: defaultRoutes })

router.beforeEach((to, from, next) => {
  if (store.getters['token'] !== null) {
    next()
  } else {
    to.path === ('/auth/login' || '/auth/register') ? next() : next({
      path: '/auth/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
})

export default router
