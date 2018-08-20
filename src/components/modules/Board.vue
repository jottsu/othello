<template>
  <div>
    <h3>{{ getNextPlayer }} の番です</h3>
    <table>
      <tr v-for="i in 8" :key="i">
        <td v-for="j in 8" :key="j" @click="setDiscs([i, j])"
            :class="{ok: getChangableIndexes(i, j).length}"
        >
          <Disc :status="getDisc(i, j)"></Disc>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Disc from '@/components/modules/Disc'
import { mapState, mapGetters, mapActions } from 'vuex'
import { getChangableIndexes, getIndex } from '@/logics'

export default {
  methods: {
    ...mapActions('game', [
      'setDiscs'
    ]),
    getDisc: function (i, j) {
      return this.discs[getIndex(i, j)]
    },
    getChangableIndexes: function(i, j) {
      return getChangableIndexes(i, j, this.nextDisc, this.discs)
    }
  },
  computed: {
    ...mapState('game', [
      'discs',
      'nextDisc'
    ]),
    ...mapGetters('game', [
      'getNextPlayer'
    ])
  },
  components: {
    Disc
  }
}
</script>

<style scoped>
table {
  margin: 20px auto;
  border-collapse: collapse;
}

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
