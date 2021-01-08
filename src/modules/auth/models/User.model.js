import Model from '/Core/models/Model.model';
import { reactive, readonly, provide, inject, ref, computed } from 'vue';
// import ApiService from '../../core/services/Api.service';
// import CONSTANTS from '/@/constant';

class MyClass extends Model {
  // static entity = 'Store Entity'
  // static fields() {
  //   return {
  //     counter: 0,
  //     name: 'pepe'
  //   }
  // }
  // increment() {
  //   // const data = {
  //   //   counter: this.counter + 1,
  //   //   name: 'Juan'
  //   // }
  //   // this.update(data)
  //   this.set('counter', this.counter + 1)
  //   // this.counter++;
  // }
}

export const stateSymbol = Symbol('state');
export const createStore = new MyClass();
console.log(createStore);
console.log(MyClass.entity);
console.log(MyClass.fields());
// console.log(createStore.counter = 13)
export const useState = () => {
  const store = inject(stateSymbol);

  if (!store) throw new Error('no store provided');

  return store;
};

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
