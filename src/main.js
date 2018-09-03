import Vue from 'vue'
import App from '@/App'
import router from '@/config/router'
import routeRegister from '@/config/router/register'
import store from '@/config/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

if (sessionStorage.getItem('menus')) {
  routeRegister(JSON.parse(sessionStorage.getItem('menus')))
}
console.log(router.options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
