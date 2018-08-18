<template>
  <div :class="{disc: status}" :status="status"></div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.disc {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto;
}

.disc[status='1'] {
  border: 1px solid #444;
  background-color: #444;
}

.disc[status='-1'] {
  border: 1px solid #666;
  background-color: #fff;
}
</style>
