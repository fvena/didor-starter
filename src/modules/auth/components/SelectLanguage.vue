<template lang="pug">
a.selectLanguage__link(@click="setLanguage('en')" href="#") EN
a.selectLanguage__link(@click="setLanguage('es')" href="#") ES
a.selectLanguage__link(@click="setLanguage('fr')" href="#") FR
</template>

<script setup>
  import { setLanguage } from '/Core/services/Language.service';
</script>

<style lang="scss" scoped>
  .selectLanguage__link {
    margin: 0.5rem;
  }
</style>
