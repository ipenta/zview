import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

import supportStore from '@/stores/support'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const defaultStore = _.merge({strict: isDebugMode}, supportStore)

const store = new Vuex.Store(defaultStore)

export default store
