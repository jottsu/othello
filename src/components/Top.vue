<template>
  <div>
    <h1>おせろげーむ</h1>
    <img src="../assets/board.png">
    <Setting @submit="startGame"></Setting>
 </div>
</template>

<script>
import Setting from '@/components/modules/Setting'

export default {
  methods: {
    startGame (names) {
      this.$store.dispatch('setUp', names)
    }
  },
  components: { Setting }
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
</style>
