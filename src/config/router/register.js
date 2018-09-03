import router from '@/config/router'
import defaultRoutes from '@/config/router/default'

const generateRoutesFromMenu = function(menus = [], routes = []) {
  menus.forEach(function(item) {
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    } else if (item.path !== undefined) {
      routes.push({
        path: item.path,
        name: (item.name === undefined ? item.path : item.name),
        component: (resolve) => require(['@/views/app' + (item.path === '' ? '/dashboard' : item.path) + '/index.vue'], resolve)
      })
    }
  })
  return routes
}

const routeRegister = function(menus) {
  if (defaultRoutes[0].children.length === 0) {
    defaultRoutes[0].children.push(...generateRoutesFromMenu(menus))
    router.addRoutes(defaultRoutes)
  }
}

export default routeRegister
