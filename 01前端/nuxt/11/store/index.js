
const cookieparser =  require('cookieparser');
export const state = () => {
  return {
    auth:null
  }
}

export const mutations = {
  setAuth (state, payload) {
    state.auth = payload;
  }
}

export const actions = {
  nuxtServerInit ({commit}, { req }) {
    console.log('nuxtServerInit执行了');
    let auth = null;
    if (req.headers.cookie) {
      console.log(req.headers.cookie,'req.headers.cookie');
      auth = cookieparser.parse(req.headers.cookie);
    }
    commit('setAuth',auth);
  }
}
