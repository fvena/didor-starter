<template lang="pug">
.auth--login
  h5.auth__title {{ t("auth.login.title") }}
  .auth__subtitle {{ t("auth.login.subtitle") }}

  form(@submit.prevent="loginUser" novalidate)
    p
      input(
        type="email"
        name="email"
        v-model.trim="email"
      )
    p
      input(
        type="password"
        name="password"
        v-model.trim="password"
      )

    //- Errores de validación del formulario
    .margin-bottom.margin-top-half
      .auth__error(v-if="userNotExist") {{ $t("auth.userNotExist") }}

    //- Botón enviar
    button.margin-bottom-half(type="submit") {{ t("auth.send") }}

  //- Enlaces a otras páginas
  div
    router-link.auth__link(to='/auth/forgot') {{ t("auth.forgot") }}
    router-link.auth__link(to='/auth/register') {{ t("auth.register") }}
</template>

<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  // Data
  const email = ref('');
  const password = ref('');
  const errors = ref({});
  const userNotExist = ref(false);
  const isLoading = ref(false);

  // Methods
  const { t } = useI18n();

  const clearForm = () => {
    email.value = '';
    password.value = '';
  };

  const loginUser = () => {
    console.log('login user');
  };
</script>
