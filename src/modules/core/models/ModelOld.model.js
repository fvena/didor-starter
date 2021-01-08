// import { reactive } from 'vue';

// let store = {};

// export default class Model {
//   /**
//    * The name that is going be used as module name in Vuex Store.
//    */
//   static entity

//   /**
//    * Create a new model instance.
//    */
//   constructor() {
//     this.#assign();
//   }

//   /**
//    * The definition of the fields of the model and its relations.
//    */
//   static fields() {
//     return {}
//   }

//   #assign() {
//     store = reactive(this.constructor.fields());

//     Object.keys(store).forEach(key => {
//       Object.defineProperty(this, key, {
//         get: function() { return store[key] },
//         // set: (value) => { store[key] = value }
//       })
//     })
//   }

//   update(payload) {
//     Object.keys(payload).forEach(key => {
//       store[key] = payload[key];
//     })
//   }

//   set(key, value) {
//     store[key] = value;
//   }
// }
