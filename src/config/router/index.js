import Vue from 'vue'
import Router from 'vue-router'
import store from '@/config/store'
import defaultRoutes from '@/config/router/default'

Vue.use(Router)

const router = new Router({ routes: defaultRoutes })

router.beforeEach((to, from, next) => {
  if (store.getters.token !== null) {
    next()
  } else {
    to.path === ('/auth/login' || '/auth/register') ? next() : next({
      path: '/auth/login',
      query: { redirect: to.fullPath }
    })
  }
})

export default router
