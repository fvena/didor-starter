<template lang="pug">
h1 {{ t('home.title')}}
p {{ User.counter }}
</template>

<script setup>
  import { useStore } from '/Core/plugins/vue-models';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const { User } = useStore();
</script>
