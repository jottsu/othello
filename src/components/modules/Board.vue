<template>
  <table class="borad">
    <tr v-for="i in 8" :key="i">
      <td v-for="j in 8" :key="j" @click="setDisc(i, j)"
          :class="{ok: getChangableIndexes(i, j).length}"
      >
        <Disc :status="getDisc(i, j)"></Disc>
      </td>
    </tr>
  </table>
</template>

<script>
import Disc from '@/components/modules/Disc'
import { getChangableIndexes } from '@/logics'

export default {
  data: function() {
    return {
      discs: [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, -1, 1, 0, 0, 0,
        0, 0, 0, 1, -1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
      ],
      nextDisc: 1
    }
  },
  methods: {
    getDisc: function (i, j) {
      const index = this.getIndex(i, j)
      switch (this.discs[index]) {
        case 1:
          return 1
        case -1:
          return -1
        default:
          return 0
      }
    },
    setDisc: function (i, j) {
      const index = this.getIndex(i, j)
      if (this.discs[index] !== 0) {
        return
      }
      const changableIndexes = this.getChangableIndexes(i, j)
      if (!changableIndexes.length) {
        return
      }
      this.discs.splice(index, 1, this.nextDisc)
      changableIndexes.forEach(idx => {
        this.discs.splice(idx, 1, this.nextDisc)
      });
      this.nextDisc *= -1
    },
    getChangableIndexes: function(i, j) {
      const changableIndexes = getChangableIndexes(i, j, this.nextDisc, this.discs)
      return changableIndexes
    },
    getIndex: function(i, j) {
      return (i - 1) * 8 + j - 1
    }
  },
  components: {
    Disc
  }
}
</script>

<style scoped>
.borad {
  margin: 20px auto;
}

table {
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
