import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/app/module'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: isDebugMode,
  modules: {
    app
  }
})

export default store
