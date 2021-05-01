import { inject, reactive } from 'vue';

/**
 * Plugin Store
 *
 * Permite almacenar globalmente instancias de clases
 */
const StoreSymbol = Symbol('state');

/**
 * Permite utilizar la base de datos en cualquier componente
 */
export const useStore = () => {
  const symbol = inject(StoreSymbol);

  if (!symbol) throw new Error('no store provided');

  return symbol;
};

export default {
  /**
   *
   * @param {*} app - Instancia de la aplicación
   * @param {Object} options - Opciones del plugin
   */
  install: (app, options) => {
    console.log(options);
    //
    // Combina todos los modelos en una base de datos
    //
    const models = options.models.reduce((database, model) => {
      const entity = model.entity;
      database[entity] = new model();
      return database;
    }, {});

    const store = {};
    this.store = reactive(models);

    //
    // Hacemos que nuestra base de datos esté disponible en toda la aplicación
    //
    app.provide(StoreSymbol, store);
  },
};
