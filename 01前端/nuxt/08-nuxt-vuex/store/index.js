export const state = function () {
  return {
    count: 0,
    list: [1, 2, 3, 4]
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
// 注册模块的方式
const moduleA = {
  state: () => ({
    str: "这里是 modulesA"
  }),
  mutations: {},
  actions: {},
  getters: {}
}

export const modules = {
  moduleA
}

