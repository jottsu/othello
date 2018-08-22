<template>
  <div>
    <table>
      <tr>
        <td><strong>⚫️{{ names.player1 }}</strong></td>
        <td><strong>⚪️{{ names.player2 }}</strong></td>
      </tr>
      <tr>
        <td class="point">{{ getDiscsNum(1) }}</td>
        <td class="point">{{ getDiscsNum(-1) }}</td>
      </tr>
    </table>
    <p v-if="isFinished"><strong>{{ getResultMessage }}</strong></p>
    <p v-else><strong>{{ getNextPlayer }}</strong>さんの番です</p>
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
    getResultMessage () {
      if (this.getDiscsNum(1) > this.getDiscsNum(-1)) {
        return `⚫️${this.names.player1}さんの勝ち！`
      }
      if (this.getDiscsNum(1) < this.getDiscsNum(-1)) {
        return `⚪️${this.names.player2}さんの勝ち！`
      }
      return `引き分け！`
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
  width: 150px;
  padding: 0 10px;
}

td.point {
  font-size: 1.2em;
}

p {
  font-size: 1.2em;
}

</style>
