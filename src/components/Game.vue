<template>
  <div>
    <h1>Game</h1>
    <div>
      <span class="black-name">黒: {{ names.player1 }}</span>
      <span class="white-name">白: {{ names.player2 }}</span>
    </div>
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
    }
  },
  computed: mapState(['names']),
  components: { Board }
}
</script>

<style scoped>
.black-name {
  margin-right: 60px;
}

.white-name {
  margin-left: 60px;
}
</style>
