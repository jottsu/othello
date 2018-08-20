<template>
  <div>
    <h3>{{ getNextPlayer }} の番です</h3>
    <table>
      <tr v-for="i in 8" :key="i">
        <Square v-for="j in 8" :key="j" :i="i" :j="j"></Square>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Square from '@/components/modules/Square'
import Disc from '@/components/modules/Disc'

export default {
  computed: mapGetters('game', ['getNextPlayer']),
  components: { Square }
}
</script>

<style scoped>
table {
  margin: 20px auto;
  border-collapse: collapse;
  border: 3px solid #666;
}
</style>
