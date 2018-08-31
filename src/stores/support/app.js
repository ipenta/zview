import supportService from '@/services/support'

// ---------------------state----------------------------//
const state = {
  identifier: ''
}
// ---------------------getters--------------------------//
const getters = {
  identifier: state => state.identifier
}
// ----------------------mutations----------------------------//
const mutations = {
  'identifier': (state, identifier) => {
    localStorage.setItem('identifier', identifier)
    state.identifier = identifier
  }
}
// ----------------------actions-----------------------------//
const init = ({ commit, state }) => {
  supportService.getAuthInfo().then(result => {
    if (result.status === 'success') {
      commit('identifier', result.data.identifier)
    }
  })
}

const actions = { init: init }
// --------------------------------------------------//

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
