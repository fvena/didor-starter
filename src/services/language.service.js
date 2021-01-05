import { createI18n } from "vue-i18n";
import { messages } from "vite-i18n-resources";
import StorageService from "./Storage.service";
import Constant from '../constant';

/**
 * Devuelve el idioma de la aplicación
 *
 * @return {String} - Idioma seleccionado
 */
const getAppLanguage = () => {
  const localStorageLanguage = StorageService.getItem("locale");
  const navigatorLanguage = navigator.language.split("-");
  const defaultLanguage = Constant.LANGUAGE.DEFAULT;
  return localStorageLanguage || navigatorLanguage[0] || defaultLanguage || "en";
};

/**
 * Crea una nueva instancia de i18n
 */
const i18n = createI18n({
  legacy: false,
  locale: getAppLanguage(),
  fallbackLocale: Constant.LANGUAGE.FALLBACK,
  messages,
});

/**
 * Actualiza las traducciones automaticamente al modificar los archivos de idiomas
 */
if (import.meta.hot) {
  import.meta.hot.on("locales-update", (data) => {
    Object.keys(data).forEach((lang) => {
      i18n.global.setLocaleMessage(lang, data[lang]);
    });
  });
}

/**
 * Cambia el idioma de la aplicación
 *
 * @param {String} lang - Código del idioma seleccionado
 * @return {String} - Código del idioma seleccionado
 * @throws {CoreError} - langNotFound
 */
const setLanguage = (locale = i18n.global.locale.value) => {
  //
  // Si el idioma es el mismo que está seleccionado, no hago nada
  //
  if (i18n.global.locale.value === locale) return locale;

  //
  // Compruebo si el nuevo idioma se encuentra entre los idiomas disponibles
  //
  if (!i18n.global.availableLocales.includes(locale)) {
    throw new Error('langNotFound');
  }

  //
  // Actualizo el idioma
  //
  i18n.global.locale.value = locale;
  StorageService.setItem('locale', locale);
  document.querySelector('html').setAttribute('lang', locale);

  return locale;
};

export { setLanguage };
export default i18n;
