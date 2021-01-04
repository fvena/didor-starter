<template lang="pug">
a.selectLanguage__link(@click="toggleLocales('en')" href="#") EN
a.selectLanguage__link(@click="toggleLocales('es')" href="#") ES
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const toggleLocales = lang => i18n.locale.value = lang;
</script>

<style lang="scss" scoped>
.selectLanguage__link {
  margin: 0.5rem;
}
</style>
