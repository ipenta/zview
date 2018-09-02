import router from '@/config/router'
// import _ from 'lodash'

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

const dynamicRouter = function(menus) {
  let rootRoutes = router.options.routes[0]
  rootRoutes.children.push(...generateRoutesFromMenu(menus))
  console.log(router.options)
  if (rootRoutes.children.length === 0) {
    router.addRoutes(router.options)
  }
}

export { dynamicRouter }
