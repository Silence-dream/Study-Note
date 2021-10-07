export const state = function () {
  return {
    count: 0
  }
}

export const mutations = {
  add(state, params) {
    state.count += params
  }
}

export const actions = {
  asyncAdd({commit}, payload) {
    commit("add", payload)
  }
}