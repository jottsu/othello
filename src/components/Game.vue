<template>
  <div>
    <h1>Game</h1>
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
    <Board></Board>
    <button @click="finishGame">おわる</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from '@/components/modules/Board'

export default {
  methods: {
    finishGame () {
      if (!confirm('本当に終了しますか？')) {
        return
      }
      this.$store.dispatch('reset');
      this.$store.dispatch('game/reset')
      this.$router.push('setting')
    },
    getDiscsNum (status) {
      return this.discs.filter(disc => {
        return disc === status
      }).length
    }
  },
  computed: {
    ...mapState(['names']),
    ...mapState('game', ['discs'])
  },
  components: { Board }
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
