<template lang="pug">
button(@click="store.increment") counter is: {{ store.counter }}
</template>

<script setup>
  import { useState } from '/Auth/models/User.model';

  const store = useState();
</script>

<style lang="scss" scoped>
  $color: hsl(346, 73%, 50%);

  a {
    color: $color;
  }
</style>
