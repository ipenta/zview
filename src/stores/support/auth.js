import authService from '@/services/support'
import router from '@/config/router'

// -------------------------------------------------//
const state = {
  get token() {
    return localStorage.getItem('token')
  },
  set token(token) {
    localStorage.setItem('token', token)
  }
}

// -------------------------------------------------//
const getters = {
  token: state => state.token
}

// -------------------------------------------------//
const mutations = {
  'token': (state, token) => {
    state.token = token
  }
}

// -------------------------------------------------//
const login = ({ commit, state }, payload) => {
  return authService.login(payload).then(result => {
    if (result.status === 'success') {
      commit('token', result.data.token)
      router.push({'path': '/'})
    }
  })
}

const register = ({ commit, state }, payload) => {
  return authService.register(payload).then(result => {
    if (result.status === 'success') {
      router.push({'path': '/login'})
    }
  })
}

const logout = ({ commit, state }) => {
  commit('token', '')
  router.push({'path': '/login'})
}

const actions = { login: login, register: register, logout: logout }

export default {
  state,
  getters,
  actions,
  mutations
}
