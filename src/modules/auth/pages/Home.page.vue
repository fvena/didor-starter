<template lang="pug">
h1 {{ t('home.title')}}
p {{ store.counter }}
</template>

<script setup>
  import { useState } from '/Auth/models/User.model';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const store = useState();
</script>
