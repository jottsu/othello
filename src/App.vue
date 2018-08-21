<template>
  <div id="app">
    <Game v-if="isPlaying"></Game>
    <Setting v-else></Setting>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Setting from '@/components/Setting'
import Game from '@/components/Game'

export default {
  computed: mapState(['isPlaying']),
  components: { Setting, Game }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
