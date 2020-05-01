import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "name": ""
  },
  mutations: {
    setNameMutation(state, payload) {
      state.name = payload
    }
  },
  actions: {
    setNameAction({ commit }, payload) {
      commit('setNameMutation', payload)
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
