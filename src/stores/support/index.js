import * as authService from '@/services/support'
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
  token: state => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViN2QxYjRiYjczN2I5MDAzYWVmYWM5ZCIsImlkZW50aWZpZXIiOiJ5aXllcm5AeWFob28uY29tIiwiaWF0IjoxNTM1NzAzNzIxfQ.PRSlhmTHxwAsjdLTES3VZ8PGtTZ8WXzES047liaS-ug'
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

const actions = {
  login: login
}

export default {
  state,
  getters,
  actions,
  mutations
}
