<template>
  <table class="borad">
    <tr v-for="i in 8" :key="i">
      <td v-for="j in 8" :key="j" @click="setDisc(i, j)">
        {{ getDisc(i, j) }}
      </td>
    </tr>
  </table>
</template>

<script>
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
      const index = (i - 1) * 8 + j - 1
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
      const index = (i - 1) * 8 + j - 1
      if (this.discs[index] !== 0) {
        return
      }
      this.discs.splice(index, 1, this.nextDisc)
      this.nextDisc *= -1
    }
  }
}
</script>

<style scoped>
.borad {
  margin: 20px auto;
}

td {
  cursor: pointer;
}
</style>
