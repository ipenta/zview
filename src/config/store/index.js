import Vue from 'vue'
import Vuex from 'vuex'

import supportStore from '@/stores/support'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const defaultStore = Object.assign({
  strict: isDebugMode
}, supportStore)

console.log(defaultStore)

const store = new Vuex.Store(defaultStore)

export default store
