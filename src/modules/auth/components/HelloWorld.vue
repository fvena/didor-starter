<template lang="pug">
button(@click="User.increment") counter is: {{ User.counter }}
</template>

<script setup>
  import { useStore } from '/Core/plugins/vue-models';

  const { User } = useStore();
</script>

<style lang="scss" scoped>
  $color: hsl(346, 73%, 50%);

  a {
    color: $color;
  }
</style>
