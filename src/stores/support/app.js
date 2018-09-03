import supportService from '@/services/support'
import { ADD_MENUS, SET_IDENTIFIER } from '@/stores/mutation-types'
import routeRegister from '@/config/router/register'

// ---------------------state----------------------------//
const state = {
  identifier: '',
  menus: []
}
// ---------------------getters--------------------------//
const getters = {
  identifier: state => state.identifier,
  menus: state => state.menus
}

// ----------------------mutations----------------------------//
const mutations = {
  [SET_IDENTIFIER]: (state, identifier) => {
    state.identifier = identifier
    localStorage.setItem('identifier', identifier)
  },
  [ADD_MENUS]: (state, menus) => {
    state.menus = menus
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
