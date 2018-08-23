<template>
  <div id="app">
    <Game v-if="isPlaying"></Game>
    <Top v-else></Top>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Top from '@/components/Top'
import Game from '@/components/Game'

export default {
  computed: mapState(['isPlaying']),
  components: { Top, Game }
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
