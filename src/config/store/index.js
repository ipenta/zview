import Vue from 'vue'
import Vuex from 'vuex'

import support from '@/support/module'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: isDebugMode,
  modules: {
    support
  }
})

export default store
