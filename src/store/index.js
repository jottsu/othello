import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import game from './modules/game'

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
    },
    resetState (state) {
      state.isPlaying = false
      state.names = {
        player1: '',
        player2: ''
      }
    }
  },
  actions: {
    setUp ({ commit }, names) {
      commit('setNames', names)
      commit('setIsPlaying', true)
    },
    reset ({ commit }) {
      commit('resetState')
    }
  },
  modules: { game },
  plugins: [createPersistedState()]
})
