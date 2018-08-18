<template>
  <div>
    <h1>Game</h1>
    <div>
      <span>Player1: {{ names.player1 }}</span>
      <span>Player2: {{ names.player1 }}</span>
    </div>
    <button @click="finishGame">おわる</button>
  </div>
</template>

<script>
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
  }
}
</script>
