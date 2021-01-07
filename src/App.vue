<template lang="pug">
p
  img(alt="Vue logo" src="./assets/logo.png")

SelectLanguage

p
  router-link.link(to="/") {{ t('messages.home')}}
  ||
  router-link.link(to="/about") {{ t('messages.about') }}
  ||
  router-link.link(to="/login") {{ t('messages.login') }}

HelloWorld

p {{ store.counter }}

router-view
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import { useState } from '/Auth/models/User.model';
  import SelectLanguage from '/Auth/components/SelectLanguage.vue';
  import HelloWorld from '/Auth/components/HelloWorld.vue';
  import StorageService from '/Core/services/Storage.service';

  const store = useState();
  const { t } = useI18n();
</script>

<style lang="scss">
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
  }

  .link {
    margin: 0 0.5rem;
  }
</style>
