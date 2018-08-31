import supportService from '@/services/support'

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
  'identifier': (state, identifier) => {
    localStorage.setItem('identifier', identifier)
    state.identifier = identifier
  },
  'menus': (state, menus) => {
    state.menus = menus
  }
}
// ----------------------actions-----------------------------//
const initApp = ({ commit, state }) => {
  supportService.getAuthInfo().then(result => {
    if (result.status === 'success') {
      commit('identifier', result.data.identifier)
      commit('menus', result.data.menus)
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
