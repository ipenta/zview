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
    component: resolve => require(['@/support/views/login.vue'], resolve)
  }, {
    path: '/register',
    component: resolve => require(['@/support/views/register.vue'], resolve)
  }, {
    path: '/changepwd',
    component: resolve => require(['@/support/views/changepwd.vue'], resolve)
  }, {
    path: '/',
    component: resolve => require(['@/support/views/layout.vue'], resolve),
    children: generateRoutesFromMenu(menus)
  }]
})