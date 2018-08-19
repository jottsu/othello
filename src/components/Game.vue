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
import Board from '@/components/modules/Board'

export default {
  data: function() {
    return {
      names: this.$store.state.names
    }
  },
  methods: {
    finishGame: function() {
      this.$store.dispatch('finishGame')
      this.$router.push('setting')
    }
  },
  components: {
    Board
  }
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
