import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Didor starter template",
      home: "Home",
      about: "About",
    },
    home: {
      title: "Home Page",
    },
    about: {
      title: "About Page",
    },
  },
  es: {
    message: {
      hello: "Didor plantilla inicio",
      home: "Inicio",
      about: "Nosotros",
    },
    home: {
      title: "Página de inicio",
    },
    about: {
      title: "Página sobre nosotros",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "es",
  messages,
});

export default i18n;
