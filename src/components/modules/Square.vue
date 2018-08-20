<template>
  <td @click="setDiscs([i, j])" :class="{ok: getChangableIndexes(i, j).length}">
    <Disc :status="getDisc(i, j)"></Disc>
  </td>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Disc from '@/components/modules/Disc'
import { getChangableIndexes, getIndex } from '@/logics'

export default {
  props: {
    i: Number,
    j: Number,
  },
  methods: {
    ...mapActions('game', ['setDiscs']),
    getDisc (i, j) {
      return this.discs[getIndex(i, j)]
    },
    getChangableIndexes (i, j) {
      return getChangableIndexes(i, j, this.nextDisc, this.discs)
    }
  },
  computed: {
    ...mapState('game', [
      'discs',
      'nextDisc'
    ])
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
