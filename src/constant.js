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
   * CONNECT
   *
   * @constant {Object} CONNECT - Parámetros de conexión con el backend
   * @property {API_URL} DEV - URL del api
   */
  CONNECT: {
    API_URL: import.meta.env.VITE_API_URL,
    API_CLIENT_ID: import.meta.env.VITE_API_CLIENT_ID,
  },

  /**
   * @constant {Object} - Links de las App stores
   */
  STORE: {
    IOS: import.meta.env.VITE_STORE_IOS,
    ANDROID: import.meta.env.VITE_STORE_ANDROID,
  },
};
