<template>
  <div class="setting">
    <h1>Setting</h1>
    <div>
      先手（黒）
      <input type="text" placeholder="名前" v-model="player1">
    </div>
    <div>
      後手（白）
      <input type="text" placeholder="名前" v-model="player2">
    </div>
    <button @click="startGame">はじめる</button>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data: function() {
    return {
      player1: '',
      player2: ''
    }
  },
  methods: {
    startGame: function() {
      localStorage.setItem('player1', this.player1)
      localStorage.setItem('player2', this.player2)
    }
  }
}
</script>
