<template lang="pug">
h1 {{ t("home.title")}}
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
