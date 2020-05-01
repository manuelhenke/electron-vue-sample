import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "name": ""
  },
  mutations: {
    setNameMutation(state, name) {
      state.name = name
    }
  },
  actions: {
    setNameAction({ commit }, name) {
      commit('setNameMutation', name)
    }
  },
  getters: {
    name(state) {
      return state.name
    }
  },
  modules: {
  }
})
