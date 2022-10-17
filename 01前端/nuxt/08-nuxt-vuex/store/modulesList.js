// 直接导出 nuxt 会识别 modulesLIst 为模块
export const state = function () {
  return {
    list: [1, 2, 3, 4]
  }
}

export const mutations = {
  addList(state, payload) {
    state.list.push(payload)
  }
}