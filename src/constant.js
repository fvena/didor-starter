export default {
  /**
   * IS_PRODUCTION
   *
   * @constant {Boolean} - Indica si la aplicación se ha compilado en modo producción o desarrollo
   */
  IS_PRODUCTION: import.meta.env.PROD,

  /**
   * LANGUAGE
   *
   * @constant {Object} LANGUAGE - Parámetros de configuración de los idiomas
   * @property {String} DEFAULT - Idioma seleccionado por defecto
   * @property {String} FALLBACK - Idioma utilizado si no se encuentra una traducción en el idioma seleccionado
   */
  LANGUAGE: {
    DEFAULT: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',
    FALLBACK: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',
  },

  /**
   * LANGUAGES
   *
   * @constant {Object} LANGUAGES - Listado de idiomas disponibles
   */
  LANGUAGES: {
    de: 'Deutsch',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    pt: 'Portugues',
  },

  /**
   * @constant {Object} - Links de las App stores
   * @property {String} IOS - Links de la aplicación para iOS
   * @property {String} ANDROID - Links de la aplicación para Android
   */
  STORE: {
    IOS: import.meta.env.VITE_STORE_IOS,
    ANDROID: import.meta.env.VITE_STORE_ANDROID,
  },
};
