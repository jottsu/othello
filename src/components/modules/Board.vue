<template>
  <div>
    <table>
      <tr v-for="i in 8" :key="i">
        <Square v-for="j in 8" :key="j" :i="i" :j="j"></Square>
      </tr>
    </table>
  </div>
</template>

<script>
import Square from '@/components/modules/Square'

export default {
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
