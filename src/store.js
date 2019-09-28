import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: "EN",
    players: [],
    rounds: [],
    scores: []
  },
  mutations: {
    mutateStateField(state, payload) {
      for (var field in payload) {
        Vue.set(state, field, payload[field])
      }
    }
  },
  actions: {
    
  }
})
