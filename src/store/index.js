import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlaying: false,
    names: {
      player1: '',
      player2: ''
    }
  },
  mutations: {
    setNames (state, names) {
      state.names = names
    },
    setIsPlaying (state, isPlaying) {
      state.isPlaying = isPlaying
    }
  },
  actions: {
    startGame ({ commit }, names) {
      commit('setNames', names)
      commit('setIsPlaying', true)
    },
    finishGame ({ commit }) {
      commit('setNames', {
        player1: '',
        player2: ''
      })
      commit('setIsPlaying', false)
    }
  },
  plugins: [createPersistedState()]
})
