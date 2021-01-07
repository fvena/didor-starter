import log from '/Core/services/Log.service';

/**
 * Genera un error personalizados dentro de la aplicación
 *
 * @param {Object|String} error - Nombre del error
 * @param {String} module - Módulo donde se produce el error para buscar los textos de los errores
 * @param {String} prefix - Prefijo para el código de error
 * @param {Object} mapError - Listado de errores
 * @param {String} customDescription - Descripción personalizada del error
 */
class AppError extends Error {
  constructor(error, module, prefix, mapError, customDescription) {
    super();

    this.module = module;
    this.prefix = prefix;
    this.mapError = mapError;

    if (error.code) {
      /**
       * Se trata de un error generado por nosotros, lo vuelvo a reenviar
       */
      this.code = error.code;
      this.name = error.name;
      this.description = customDescription || error.description;
      this.isBlocking = error.isBlocking;
    } else if (typeof error === 'string') {
      /**
       * Nuevo error generado en la aplicación
       */
      this.getErrorData(error, customDescription);
    } else if (error.response && error.response.data) {
      /**
       * Nuevo error recibido del backend
       */
      console.error(error.response.data);
      // const errorName = error.response.data;
      // this.getErrorData(errorName, customDescription);

      // // Si recibimos más información del error, lo almacenamos
      // if (errorName === "badParams") {
      //   this.info = {
      //     param: error.response.data.data.argument,
      //     value: error.response.data.data.cause,
      //   };
      // }
    }
  }

  /**
   * Obtiene los datos del error del listado de errores
   */
  getErrorData(name, customDescription) {
    const errorItem = this.mapError[name];
    const errorDefault = this.mapError.default;

    this.code = errorItem ? this.prefix + errorItem[0] : this.prefix + errorDefault[0];
    this.name = name;
    this.isBlocking = errorItem && errorItem[2] ? errorItem[2] : false;
    if (customDescription) {
      this.description = customDescription;
    } else {
      this.description = errorItem ? errorItem[1] : errorDefault[1];
    }

    log.error(`${this.name} (${this.code}) - ${this.description}`);
  }
}

export default AppError;
