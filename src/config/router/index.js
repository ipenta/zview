import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const generateRoutesFromMenu = function(menus = [], routes = []) {
  menus.forEach(function(item) {
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    } else if (item.path !== undefined) {
      routes.push({
        path: item.path,
        name: (item.name === undefined ? item.path : item.name),
        component: resolve => require(['@/app' + (item.path === '' ? '/dashboard' : item.path) + '/views/index.vue'], resolve)
      })
    }
  })
  return routes
}

const menus = [{
  path: '',
  name: 'dashboard'
}, {
  name: 'user',
  children: [{
    path: '/user/profile'
  }, {
    path: '/user/detail'
  }]
}]

export default new Router({
  routes: [{
    path: '/login',
    component: resolve => require(['@/support/login/views/index.vue'], resolve)
  }, {
    path: '/register',
    component: resolve => require(['@/support/register/views/index.vue'], resolve)
  }, {
    path: '/modifypwd',
    component: resolve => require(['@/support/modifypwd/views/index.vue'], resolve)
  }, {
    path: '/',
    component: resolve => require(['@/support/layout/views/index.vue'], resolve),
    children: generateRoutesFromMenu(menus)
  }]
})
