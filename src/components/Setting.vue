<template>
  <div>
    <h2>Setting</h2>
    <div class="form-container">
      <NameForm label="先手(黒)" :error="errors.player1" @change="changePlayer1Name"></NameForm>
      <NameForm label="後手(白)" :error="errors.player2" @change="changePlayer2Name"></NameForm>
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
.form-container {
  margin: 40px 0;
}
</style>
