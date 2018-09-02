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

const generateDynamicRouters = function(dynamicRouters = []) {
  return [{
    path: '/',
    component: resolve => require(['@/views/support/layout/index.vue'], resolve),
    children: dynamicRouters
  }, {
    path: '*',
    name: '404',
    component: resolve => require(['@/views/support/404/index.vue'], resolve)
  }]
}

export {generateRoutesFromMenu, generateDynamicRouters}
