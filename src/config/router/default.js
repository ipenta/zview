const defaultRoutes = [{
  path: '/',
  component: resolve => require(['@/views/support/layout/index.vue'], resolve),
  children: [{ path: '', component: resolve => require(['@/views/app/dashboard/index.vue'], resolve) }]
}, {
  path: '/auth/login',
  component: resolve => require(['@/views/support/login/index.vue'], resolve)
}, {
  path: '/auth/register',
  component: resolve => require(['@/views/support/register/index.vue'], resolve)
}, {
  path: '/auth/modifypwd',
  component: resolve => require(['@/views/support/modifypwd/index.vue'], resolve)
}, {
  path: '/404',
  component: resolve => require(['@/views/support/404/index.vue'], resolve)
}, {
  path: '*',
  redirect: '/404'
}]

export default defaultRoutes
