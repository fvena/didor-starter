<template lang="pug">
h1 {{ t('about.title')}}
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
