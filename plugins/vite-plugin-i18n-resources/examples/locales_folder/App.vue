<template>
  <form>
    <label>{{ t('language') }}</label>

    <select v-model="locale">
      <option value="en">en</option>
      <option value="es">es</option>
      <option value="fr">fr</option>
    </select>
  </form>

  <p>{{ t('hello') }}</p>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
  setup() {
    const { t, locale } = useI18n();

    return { t, locale }
  }
}
</script>
