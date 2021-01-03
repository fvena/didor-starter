<template lang="pug">
h1 {{ msg }}

p
  a(href="https://vitejs.dev/guide/features.html" target="_blank") Vite Documentation |
  a(href="https://v3.vuejs.org/" target="_blank") Vue 3 Documentation

button(@click="state.count++") count is: {{ state.count }}

p Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
