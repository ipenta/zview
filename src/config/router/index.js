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
        component: resolve => require(['@/views/app' + (item.path === '' ? '/dashboard' : item.path) + '/index.vue'], resolve)
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
    component: resolve => require(['@/views/support/login/index.vue'], resolve)
  }, {
    path: '/register',
    component: resolve => require(['@/views/support/register/index.vue'], resolve)
  }, {
    path: '/modifypwd',
    component: resolve => require(['@/views/support/modifypwd/index.vue'], resolve)
  }, {
    path: '/',
    component: resolve => require(['@/views/support/layout/index.vue'], resolve),
    children: generateRoutesFromMenu(menus)
  }]
})
