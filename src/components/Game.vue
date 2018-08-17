<template>
  <div>
    <h1>Game</h1>
    <div>
      <span>Player1: {{ player1 }}</span>
      <span>Player2: {{ player2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      player1: '',
      player2: ''
    }
  },
  mounted: function() {
    this.player1 = localStorage.getItem('player1')
    this.player2 = localStorage.getItem('player2')
  }
}
</script>
