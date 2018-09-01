import supportService from '@/services/support'
import router from '@/config/router'
import { SET_TOKEN, REMOVE_TOKEN } from '@/stores/mutation-types'

// -------------------------------------------------//
const state = {
  token: localStorage.getItem('token')
}

// -------------------------------------------------//
const getters = {
  token: state => state.token
}

// -------------------------------------------------//
const mutations = {
  [SET_TOKEN]: (state, token) => {
    state.token = token
    localStorage.setItem('token', token)
  },
  [REMOVE_TOKEN]: (state) => {
    state.token = ''
    localStorage.removeItem('token')
  }
}

// -------------------------------------------------//
const login = ({ commit, state }, payload) => {
  return supportService.login(payload).then(result => {
    if (result.status === 'success') {
      commit('SET_TOKEN', result.data.token)
      router.push({'path': '/'})
    }
  })
}

const register = ({ commit, state }, payload) => {
  return supportService.register(payload).then(result => {
    if (result.status === 'success') {
      router.push({'path': '/auth/login'})
    }
  })
}

const logout = ({ commit, state }) => {
  commit('REMOVE_TOKEN')
  router.push({'path': '/auth/login'})
}

const actions = { login: login, register: register, logout: logout }

export default {
  state,
  getters,
  actions,
  mutations
}
