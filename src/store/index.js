import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// naming conventions: https://docs.vuestorefront.io/guide/vuex/vuex-conventions.html
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    "user_name": ""
  },
  mutations: {
    SET_USER_NAME(state, user_name) {
      state.user_name = user_name
    }
  },
  actions: {
    setUserName({ commit }, user_name) {
      commit('SET_USER_NAME', user_name)
    }
  },
  getters: {
    getUserName(state) {
      return state.user_name
    }
  },
  modules: {
  }
})
