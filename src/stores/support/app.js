import supportService from '@/services/support'
import * as types from '@/stores/mutation-types'
import routeRegister from '@/config/router/register'

// ---------------------state----------------------------//
const state = {
  sidebar: { collapse: false, defaultActive: '/' },
  identifier: '',
  menus: []
}
// ---------------------getters--------------------------//
const getters = {
  identifier: state => state.identifier,
  menus: state => state.menus,
  isCollapse: state => state.sidebar.collapse,
  defaultActive: state => state.sidebar.defaultActive
}

// ----------------------mutations----------------------------//
const mutations = {
  [types.TOGGLE_SIDEBAR]: state => {
    state.sidebar.collapse = !state.sidebar.collapse
  },
  [types.SET_DEFAULT_ACTIVE]: (state, defaultActive) => {
    state.sidebar.defaultActive = defaultActive
  },
  [types.SET_IDENTIFIER]: (state, identifier) => {
    state.identifier = identifier
    localStorage.setItem('identifier', identifier)
  },
  [types.ADD_MENUS]: (state, menus) => {
    state.menus.length = 0
    state.menus.push({path: '', name: '首页', icon: 'el-icon-star-off'}, ...menus)
    sessionStorage.setItem('menus', JSON.stringify(menus))
    routeRegister(menus)
  }
}
// ----------------------actions-----------------------------//
const initApp = ({ commit, state }) => {
  supportService.getAuthInfo().then(result => {
    if (result.status === 'success') {
      commit('SET_IDENTIFIER', result.data.identifier)
      commit('ADD_MENUS', result.data.menus)
    }
  })
}

const actions = { initApp: initApp }
// --------------------------------------------------//

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
