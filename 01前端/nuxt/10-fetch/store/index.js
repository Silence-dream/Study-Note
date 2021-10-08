export const state = function() {
  return {
    list: [],
    test: "123"
  };
};

export const mutations = {
  update(state, payload) {
    state.list = payload;
  }
};
