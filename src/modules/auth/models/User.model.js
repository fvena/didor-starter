import { Model } from '../../core/plugins/vue-models';
import AuthService from '/Auth/services/auth.service';
// import AuthError from '/Auth/services/errors.service';

/**
 * @typedef {Object} User
 * @property {String} email - Email del usuario
 * @property {String} locale - Lenguaje del usuario
 * @property {String} name - Nombre del usuario
 * @property {String} surname - Apellidos del usuario
 * @property {String} timezone - Zona horario del usuario
 */
export default class User extends Model {
  static entity = 'User';

  static fields() {
    return {
      email: '',
      locale: '',
      name: '',
      surname: '',
      timezone: '',
    };
  }

  mutations() {
    return {
      name: 'Leo',
    };
  }

  /**
   * Loguea un usuario
   *
   * @param {String} email - Email del usuario
   * @param {String} password - Contraseña del usuario
   * @return {User}
   * @throws {AuthError} - Error de Autenticación
   */
  static loginUser = async (email, password) => {
    const user = await AuthService.login(email, password);
    this.create(user);
    return user;
  };

  increment() {
    // const data = {
    //   counter: this.counter + 1,
    //   name: 'Juan'
    // }
    // this.update(data)
    this.set('counter', this.counter + 1);
  }

  beforeCreate(fields) {
    console.log('beforeCreate', fields);
    fields.name = 'Paco';
    console.log(this);
    return fields;
  }

  afterCreate(fields) {
    console.log('afterCreate', fields);
    return fields;
  }

  beforeUpdate(fields) {
    console.log('beforeUpdate', fields);
    return fields;
  }

  afterUpdate(fields) {
    console.log('afterUpdate', fields);
    return fields;
  }
}
