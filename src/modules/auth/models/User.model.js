import { Model } from '../../core/plugins/vue-models';
// import AuthService from 'Auth/services/auth.service';

// import ApiService from '../../core/services/Api.service';
// import CONSTANTS from '/@/constant';

/**
 * @typedef {Object} User
 * @property {Number} id - identificador dentro de entities del modelo Vuex ORM
 * @property {Number} userID - identificador dentro del sistema
 * @property {String} name - Nombre del usuario
 * @property {String} lastName - Apellidos del usuario
 * @property {String} email - Email del usuario
 * @property {String} avatar - Imagen del usuario
 * @property {Boolean} commercial - Comercial activo o no
 * @property {Boolean} toc - Activo o no
 * @property {Boolean} notification - Notificaciones activas o no
 * @property {Boolean} ampm - Modo AM/PM activo o no
 * @property {Boolean} sundayFirst - Primer día de la semana activo o no
 * @property {Boolean} noHaptic - Sensación háptica en algunas funciones
 * @property {Number} units - Número de unidades asignadas
 * @property {String} lang - Lenguaje del usuario
 */
export default class User extends Model {
  static entity = 'User';

  static fields() {
    return {
      counter: 0,
      name: 'pepe',
    };
  }

  increment() {
    // const data = {
    //   counter: this.counter + 1,
    //   name: 'Juan'
    // }
    // this.update(data)
    this.set('counter', this.counter + 1);
  }
}

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
