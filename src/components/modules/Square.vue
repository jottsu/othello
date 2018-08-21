<template>
  <td @click="setDiscs([i, j])" :class="{ok: isOk}">
    <Disc :status="getDisc"></Disc>
  </td>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Disc from '@/components/modules/Disc'
import { getIndex } from '@/logics'

export default {
  props: {
    i: Number,
    j: Number,
  },
  methods: mapActions('game', ['setDiscs']),
  computed: {
    ...mapState('game', [
      'discs',
      'okIndexes',
      'nextDisc'
    ]),
    getDisc () {
      return this.discs[getIndex(this.i, this.j)]
    },
    isOk() {
      return this.okIndexes.includes(getIndex(this.i, this.j))
    }
  },
  components: { Disc }
}
</script>

<style scoped>
td {
  cursor: pointer;
  height: 50px;
  width: 50px;
  padding: 0;
  border: solid 1px #888;
  background-color: #9fa;
}

td.ok:hover {
  background-color: #cfc;
}
</style>
