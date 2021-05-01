import { reactive } from 'vue';

export default class Model {
  static store;
  static entity;

  /**
   * Creates a new instance, called when using 'new'.
   */
  constructor() {
    this.initStore(this.constructor.fields());
    this.registerFields();
  }

  static fields() {
    return {};
  }

  static mutations() {
    return {};
  }

  static beforeCreate(fields) {
    return fields;
  }

  static afterCreate(fields) {
    return fields;
  }

  static beforeUpdate(fields) {
    return fields;
  }

  static afterUpdate(fields) {
    return fields;
  }

  static beforeDelete() {}

  static afterDelete() {}

  /**
   * Create a new vue reactive store with the defined fields
   *
   * @param {Object} fields
   */
  initStore(fields) {
    this.store = reactive(fields);
  }

  /**
   * Registers all fields on this model so that it can be accessed directly
   * on the model, passing through `get`.
   */
  registerFields() {
    Object.keys(this.store).forEach(key => {
      Object.defineProperty(this, key, {
        get: function () {
          return this.store[key];
        },
      });
    });
  }

  get className() {
    return this.constructor.name;
  }

  /**
   * Modifica el valor de una propiedad
   *
   * @param {String} key - Nombre de la propiedad
   * @param {*} value - Nuevo valor de la propiedad
   */
  /**
   * Sets the value of an field and registers.
   * This method should always be used when setting the value
   * of an attribute.
   *
   * @param  {string|Object}  field
   * @param  {*}              value
   *
   * @returns {*} The value that was set.
   */
  static set(field, value) {
    // Allow batch set of multiple fields at once, ie. set({...});
    if (typeof field === 'object' && field !== null) {
      Object.keys(field).forEach(key => {
        this.set(key, field[key]);
      });

      return;
    }

    // Check if the field exists
    console.log(this);
    const defined = Object.prototype.hasOwnProperty.call(this.store, field);

    if (!defined) {
      throw new Error(`'${this.constructor.entity}' model does not have '${field}' field`);
    }

    // Only consider a change if the value has really changed.
    // const previous = this.get(field);
    // const changed = !isEqual(previous, value);

    // if (changed) {
    //   // Validate on change only if it's not the first time it's set.
    //   // if (this.getOption('validateOnChange')) {
    //   //     Vue.nextTick(() => this.validateAttribute(attribute));
    //   // }

    //   // Emit the change event after
    //   this.emit('change', { field, previous, value });
    // }

    // Save the new value
    this.store[field] = value;

    return value;
  }

  /**
   * Crea una nueva instancia del modelo con los datos necesarios
   *
   * @param {String} key - Nombre de la propiedad
   * @param {*} value - Nuevo valor de la propiedad
   */
  static create(data) {
    const beforeData = this.beforeCreate(data);
    this.set(beforeData);
    this.afterCreate(beforeData);

    // should have required property 'username'
  }
}
