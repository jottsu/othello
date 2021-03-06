import { getIndex, getRow, getCol, getChangableIndexes } from '../../logics'

export default {
  namespaced: true,
  state: {
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
    okIndexes: [19, 26, 37, 44],
    nextDisc: 1,
    isFinished: false
  },
  getters: {
    getNextPlayer (state, getters, rootState) {
      return (state.nextDisc === 1) ? `⚫${rootState.names.player1}` : `⚪️${rootState.names.player2}`
    },
    getOkIndexes (state) {
      const okIndexes = []
      state.discs.filter((disc, index) => {
        const i = getRow(index)
        const j = getCol(index)
        if (!getChangableIndexes(i, j, state.nextDisc, state.discs).length) {
          return
        }
        okIndexes.push(index)
      })
      return okIndexes
    }
  },
  mutations: {
    setDisc (state, index) {
      state.discs.splice(index, 1, state.nextDisc)
    },
    setOkIndexes (state, okIndexes) {
      state.okIndexes = okIndexes
    },
    changeNextDisc (state) {
      state.nextDisc *= -1
    },
    finishGame (state) {
      state.isFinished = true
    },
    resetState (state) {
      state.discs = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, -1, 1, 0, 0, 0,
        0, 0, 0, 1, -1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
      ]
      state.okIndexes = [19, 26, 37, 44]
      state.nextDisc = 1
      state.isFinished = false
    }
  },
  actions: {
    setDiscs (context, [i, j]) {
      const index = getIndex(i, j)
      if (context.state.discs[index] !== 0) {
        return
      }
      const changableIndexes = getChangableIndexes(i, j, context.state.nextDisc, context.state.discs)
      if (!changableIndexes.length) {
        return
      }
      context.commit('setDisc', index)
      changableIndexes.forEach(idx => {
        context.commit('setDisc', idx)
      });
      context.commit('changeNextDisc')

      let okIndexes = context.getters.getOkIndexes
      if (okIndexes.length) {
        context.commit('setOkIndexes', okIndexes)
        return
      }
      context.commit('changeNextDisc')

      okIndexes = context.getters.getOkIndexes
      context.commit('setOkIndexes', okIndexes)
      if (okIndexes.length) {
        return
      }
      context.commit('finishGame')
    },
    reset ({ commit }) {
      commit('resetState')
    }
  }
}
