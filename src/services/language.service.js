import { createI18n } from "vue-i18n";
import { messages } from "vite-i18n-resources";
import StorageService from "/Core/services/storage.service";
import CONSTANTS from "/Core/constant";

/**
 * Devuelve el idioma de la aplicación
 *
 * @return {String} - Idioma seleccionado
 */
const getAppLanguage = () => {
  const localStorageLanguage = StorageService.getItem("language");
  const navigatorLanguage = navigator.language.split("-");
  const defaultLanguage = CONSTANTS.LANGUAGE.DEFAULT;
  return localStorageLanguage || navigatorLanguage[0] || defaultLanguage || "en";
};

/**
 * Devuelve el idioma por defecto cuando no se encuentre una traducción
 *
 * @return {String} - Idioma por defecto
 */
const getFallbackLanguage = () => {
  return CONSTANTS.LANGUAGE.FALLBACK || "en";
};

/**
 * Crea una nueva instancia de i18n
 */
const i18n = createI18n({
  legacy: false,
  locale: getAppLanguage(),
  fallbackLocale: getFallbackLanguage(),
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

export default i18n;
