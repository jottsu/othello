<template>
  <div>
    <h2>Setting</h2>
    <div class="name-form">
      先手（黒）
      <input type="text" placeholder="名前" v-model="names.player1">
    </div>
    <div class="name-form">
      後手（白）
      <input type="text" placeholder="名前" v-model="names.player2">
    </div>
    <button @click="startGame" :disabled="isBtnDisabled">はじめる</button>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      names: {
        player1: '',
        player2: ''
      }
    }
  },
  methods: {
    startGame () {
      this.$store.dispatch('setUp', this.names)
      this.$router.push('game')
    }
  },
  computed: {
    isBtnDisabled () {
      return (this.names.player1.trim() === "" || this.names.player2.trim() === "")
    }
  }
}
</script>

<style>
.name-form {
  margin: 20px 0;
}
</style>
