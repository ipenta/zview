import Vue from 'vue'
import Router from 'vue-router'
import menus from './menus.json'

Vue.use(Router)

const registerRoutes = function(menus = [], routes = []) {
  menus.forEach(function(item) {
    if (item.children) {
      registerRoutes(item.children, routes)
    } else if (item.path !== undefined) {
      routes.push({
        path: item.path,
        name: item.path,
        component: resolve => require(['@/views' + item.path + '/index.vue'], resolve)
      })
    }
  })
  return routes
}
console.log(registerRoutes(menus))

export default new Router({
  routes: [{
    path: '/login',
    component: resolve => require(['@/views/support/login.vue'], resolve)
  }, {
    path: '/register',
    component: resolve => require(['@/views/support/register.vue'], resolve)
  }, {
    path: '/changepwd',
    component: resolve => require(['@/views/support/changepwd.vue'], resolve)
  }, {
    path: '/',
    component: resolve => require(['@/views/support/layout.vue'], resolve),
    children: registerRoutes(menus)
  }]
})
