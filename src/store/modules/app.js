import * as types from '@/store/mutation-types'

const state = {
  sidebar: {
    opened: true,
    hidden: false
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR](state, opened) {
    state.sidebar.opened = opened
  }
}

export default {
  state,
  mutations
}
