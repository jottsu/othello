<template>
  <div>
    <h1>Setting</h1>
    <div>
      先手（黒）
      <input type="text" placeholder="名前" v-model="names.player1">
    </div>
    <div>
      後手（白）
      <input type="text" placeholder="名前" v-model="names.player2">
    </div>
    <button @click="startGame">はじめる</button>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data: function() {
    return {
      names: {
        player1: '',
        player2: ''
      }
    }
  },
  methods: {
    startGame: function() {
      this.$store.dispatch('startGame', this.names)
      this.$router.push('game')
    }
  }
}
</script>
