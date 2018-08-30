import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: isDebugMode,
  actions,
  getters,
  modules: {
  }
})

export default store
