<template>
  <div>
    <span>{{label}}</span>
    <input type="text" placeholder="名前" @keyup="onChange" :class="{invalid: error}">
    <p v-if="error">入力してください</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    error: Boolean
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>
div {
  margin: 20px 0;
}

input {
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: .9em;
  padding: 3px;
  outline: none;
}

input:focus {
  border-bottom-color: #3cbb71;
}

input.invalid {
  border-bottom-color: #e55;
}

p {
  margin: 3px 0 0 25px;
  color: #e55;
  font-size: .8em;
}
</style>
