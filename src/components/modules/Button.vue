<template>
  <button @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button{
  background-color: transparent;
  color: #3cbb71;
  border: 2px solid #3cbb71;
  border-radius: 18px;
  cursor: pointer;
  outline: none;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: bold;
}

button:hover {
  color: #51ca83;
  border-color: #51ca83;
}
</style>
