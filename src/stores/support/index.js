const state = {}

const getters = {}

const actions = {
  login({ commit, state }, payload) {
    console.log(payload)
    // return userService.findOne(payload).then(account => {
    //   commit(types.SET_TOKEN, account.token)
    //   commit(types.SET_EMAIL, account.email)
    // })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
