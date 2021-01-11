import { reactive } from 'vue';

export default class Model {
  static #store;
  static entity;

  constructor() {
    this.#assign();
  }

  static fields() {
    return {};
  }

  // eslint-disable-next-line
  #assign() {
    Model.#store = reactive(this.constructor.fields());
    Object.keys(Model.#store).forEach(key => {
      Object.defineProperty(this, key, {
        get: function () {
          return Model.#store[key];
        },
      });
    });
  }

  set(key, value) {
    Model.#store[key] = value;
  }
}
