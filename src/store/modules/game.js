import { getIndex, getChangableIndexes } from '../../logics'

const initialState = {
  discs: [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, -1, 1, 0, 0, 0,
    0, 0, 0, 1, -1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ],
  nextDisc: 1
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    getNextPlayer(state, getters, rootState) {
      return (state.nextDisc === 1) ? `${rootState.names.player1}さん(黒)` : `${rootState.names.player2}さん(白)`
    }
  },
  mutations: {
    setDisc (state, index) {
      state.discs.splice(index, 1, state.nextDisc)
    },
    changeNextDisc (state) {
      state.nextDisc *= -1
    },
    resetState (state) {
      Object.keys(state).forEach(key => {
        state[key] = initialState[key]
      })
    }
  },
  actions: {
    setDiscs ({ commit, state }, [i, j]) {
      const index = getIndex(i, j)
      if (state.discs[index] !== 0) {
        return
      }
      const changableIndexes = getChangableIndexes(i, j, state.nextDisc, state.discs)
      if (!changableIndexes.length) {
        return
      }
      commit('setDisc', index)
      changableIndexes.forEach(idx => {
        commit('setDisc', idx)
      });
      commit('changeNextDisc')
    },
    reset ({ commit }) {
      commit('resetState')
    }
  }
}
