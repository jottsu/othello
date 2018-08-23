<template>
  <div>
    <div class="form-container">
      <NameForm label="⚫️" :error="errors.player1" @change="changePlayer1Name"></NameForm>
      <NameForm label="⚪️" :error="errors.player2" @change="changePlayer2Name"></NameForm>
    </div>
    <Button text="はじめる" @click="onSubmit"></Button>
 </div>
</template>

<script>
import NameForm from '@/components/modules/NameForm'
import Button from '@/components/modules/Button'

export default {
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
    onSubmit (names) {
      this.errors.player1 = (this.names.player1.trim() === '')
      this.errors.player2 = (this.names.player2.trim() === '')
      if (this.errors.player1 || this.errors.player2) {
        return
      }
      this.$emit('submit', this.names)
    }
  },
  components: { Button, NameForm }
}
</script>

<style scoped>
.form-container {
  margin: 36px 0;
}
</style>
