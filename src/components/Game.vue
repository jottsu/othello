<template>
  <div>
    <h2>Game</h2>
    <table>
      <tr>
        <td>黒: {{ names.player1 }}</td>
        <td>白: {{ names.player2 }}</td>
      </tr>
      <tr>
        <td>{{ getDiscsNum(1) }}</td>
        <td>{{ getDiscsNum(-1) }}</td>
      </tr>
    </table>
    <h3 v-if="isFinished">{{ getWinnerMessage }}</h3>
    <h3 v-else>{{ getNextPlayer }} の番です</h3>
    <Board></Board>
    <Button text="おわる" @click="resetGame"></Button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Board from '@/components/modules/Board'
import Button from '@/components/modules/Button'

export default {
  methods: {
    resetGame () {
      if (!confirm('本当に終了しますか？')) {
        return
      }
      this.$store.dispatch('reset');
      this.$store.dispatch('game/reset')
    },
    getDiscsNum (status) {
      return this.discs.filter(disc => {
        return disc === status
      }).length
    }
  },
  computed: {
    ...mapState(['names']),
    ...mapState('game', ['discs', 'isFinished']),
    ...mapGetters('game', ['getNextPlayer']),
    getWinnerMessage () {
      if (this.getDiscsNum(1) > this.getDiscsNum(-1)) {
        return `${this.names.player1}さんの勝ちです！`
      }
      if (this.getDiscsNum(1) < this.getDiscsNum(-1)) {
        return `${this.names.player2}さんの勝ちです！`
      }
      return `引き分けです！`
    }
  },
  components: { Board, Button }
}
</script>

<style scoped>
table {
  margin: 0 auto;
}
td {
  width: 120px;
  padding: 0 10px;
}
</style>
