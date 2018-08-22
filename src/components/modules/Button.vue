<template>
  <button @click="onClick" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default: false
    }
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
  color: #4dbe80;
  border: 2px solid #4dbe80;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: bold;
}

button:hover {
  color: #58d49c;
  border-color: #58d49c;
}

button:disabled {
  color: #aaa;
  border-color: #aaa;
}
</style>
