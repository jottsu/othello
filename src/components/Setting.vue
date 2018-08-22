<template>
  <div>
    <h1>おせろげーむ</h1>
    <img src="../assets/board.png">
    <div class="form-container">
      <NameForm label="⚫️" :error="errors.player1" @change="changePlayer1Name"></NameForm>
      <NameForm label="⚪️" :error="errors.player2" @change="changePlayer2Name"></NameForm>
    </div>
    <Button text="はじめる" @click="startGame"></Button>
 </div>
</template>

<script>
import NameForm from '@/components/modules/NameForm'
import Button from '@/components/modules/Button'

export default {
  name: 'setting',
  data () {
    return {
      names: {
        player1: '',
        player2: ''
      },
      errors: {
        player1: false,
        player2: false
      }
    }
  },
  methods: {
    changePlayer1Name (name) {
      this.names.player1 = name
    },
    changePlayer2Name (name) {
      this.names.player2 = name
    },
    startGame () {
      this.errors.player1 = (this.names.player1.trim() === '')
      this.errors.player2 = (this.names.player2.trim() === '')
      if (this.errors.player1 || this.errors.player2) {
        return
      }
      this.$store.dispatch('setUp', this.names)
    }
  },
  components: { Button, NameForm }
}
</script>

<style scoped>
h1 {
  font-size: 1.6em;
}

img {
  width: 300px;
  height: 300px;
}

.form-container {
  margin: 36px 0;
}
</style>
