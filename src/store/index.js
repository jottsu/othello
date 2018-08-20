import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import game from './modules/game'

Vue.use(Vuex)

const initialState = {
  isPlaying: false,
  names: {
    player1: '',
    player2: ''
  }
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setNames (state, names) {
      state.names = names
    },
    setIsPlaying (state, isPlaying) {
      state.isPlaying = isPlaying
    },
    resetState (state) {
      Object.keys(state).forEach(key => {
        state[key] = initialState[key]
      })
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
