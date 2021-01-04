<template lang="pug">
button(@click="state.count++") count is: {{ state.count }}
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
$color: hsl(346, 73%, 50%);

a {
  color: $color;
}
</style>
