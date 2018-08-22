<template>
  <div>
    <h2>Setting</h2>
    <div class="form-container">
      <div class="name-form">
        <span>先手(黒)：</span>
        <input type="text" placeholder="名前" v-model="names.player1">
      </div>
      <div class="name-form">
        <span>後手(白)：</span>
        <input type="text" placeholder="名前" v-model="names.player2">
      </div>
    </div>
    <Button text="はじめる" @click="startGame" :disabled="isBtnDisabled"></Button>
 </div>
</template>

<script>
import Button from '@/components/modules/Button'

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
    }
  },
  computed: {
    isBtnDisabled () {
      return (this.names.player1.trim() === "" || this.names.player2.trim() === "")
    }
  },
  components: { Button }
}
</script>

<style scoped>
.form-container {
  margin: 40px 0;
}

.name-form {
  margin: 20px 0;
}

input {
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: .9em;
  padding: 3px;
  outline: none;
}

input:focus {
  border-bottom-color: #4dbe80;
}
</style>
