// import { reactive, readonly, provide, inject, ref  } from 'vue';
// // import ApiService from '../../core/services/Api.service';
// // import CONSTANTS from '/@/constant';

// class Base {
//   constructor() {
//     this.assign(this.fields)
//     console.log(this.fields);
//   }

//   // fields = {}

//   assign(fields) {
//     Object.keys(fields).forEach(key => {
//       Object.defineProperty(this, key, {
//         get: function() { return this.fields[key] }
//       })
//     })
//   }
// }

// class Store extends Base {
//   constructor() {
//     super()
//     console.log(this.fields)
//   }

//   fields = reactive({
//     counter: 0
//   })

//   increment() {
//     this.fields.counter++
//   }
// }

// export const stateSymbol = Symbol('state');
// export const createStore = new Store();
// export const useState = () => {
//   const store = inject(stateSymbol);

//   if (!store) throw new Error('no store provided');

//   return store
// }

// export const provideState = () => provide(
//   stateSymbol,
//   createStore()
// );

// export default function useUser() {
//   const state = reactive({
//     name: '',
//     lastName: '',
//   })

//   const login = async () => {
//     try {
//       const data = {
//         grant_type: 'password',
//         email: 'user_1@email.com',
//         password: 'foobarfoo',
//         client_id: CONSTANTS.CONNECT.API_CLIENT_ID,
//       };

//       const user = await ApiService.post('oauth/token', data);
//       state.name = user.name;
//       state.lastName = user.lastName;
//       console.log(user)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return { state, login };
//   return { ...toRefs(state), login };
// }
