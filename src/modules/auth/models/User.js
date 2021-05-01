/* eslint no-shadow: 0 */

import { Model } from '@vuex-orm/core';
import AuthService from 'Auth/services/auth.service';
import AuthError from 'Auth/services/errors.service';
import { hasProps } from 'Core/utils/validate.utils';
import CONSTANTS from 'Core/constant';

export default class User extends Model {
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

  static entity = 'user';

  /** *************************************************************
   * CAMPOS
   ************************************************************** */
  static fields() {
    return {
      id: this.string(null),
      userID: this.string(''),
      name: this.string(''),
      lastName: this.string(''),
      email: this.string(''),
      avatar: this.string(null),
      commercial: this.boolean(true),
      notification: this.boolean(true),
      ampm: this.boolean(false),
      sundayFirst: this.boolean(false),
      noHaptic: this.boolean(false),
      units: this.string(CONSTANTS.TEMP_UNITS.CELSIUS),
      lang: this.string('en'),
    };
  }

  static validation() {
    return {
      id: 'required',
      userID: 'required',
      name: 'required|boolean',
      lastName: 'required',
      email: 'required|email',
      password: 'required|size:8,64',
      commercial: 'boolean',
      notification: 'boolean',
      ampm: 'boolean',
      sundayFirst: 'boolean',
      noHaptic: 'boolean',
      units:'required',
      lang: 'required'
    };
  }

  /** *************************************************************
   * LIFECYCLE HOOKS
   ************************************************************** */

  static afterCreate(model) {
    //
    // Compruebo si he recibido los datos mínimos del usuario para que la aplicación funcione
    //
    const validate = hasProps(model, ['userID', 'name', 'lastName', 'email']);

    if (validate.length) throw new AuthError('invalidUserData', `Faltan los datos "${validate.join()}" del usuario`);
  }

  /** *************************************************************
   * ACCIONES
   ************************************************************** */

  /**
   * Loguea un usuario
   *
   * @param {String} email - Email del usuario
   * @param {String} password - Contraseña del usuario
   * @return {User}
   * @throws {AuthError} - Error de Autenticación
   */
  static loginUser = async (email, password) => {
    const user = await AuthService.login({ email, password });
    //
    // Almaceno el usuario en nuestra store (Vuex ORM)
    //
    await this.create({ data: user });
    return true;
  };

  /**
   * Comprueba si un usuario está logueado
   *
   * @param {String} token - Token de la sesión actual
   * @return {User} - Datos del usuario
   * @throws {AuthError} - Error de Autenticación
   */
  static isLogin = async token => {
    const user = await AuthService.isLogin(token);
    //
    // Actualizo el modelo de usuario en Vuex ORM
    //
    await this.create({ data: user });
  };

  /**
   * Registra un usuario. Recibe los parámetros desde la vista y le pasa al servicio el objeto esperado
   *
   * @param {String} name - Nombre del usuario
   * @param {String} lastName - Apellidos del usuario
   * @param {String} email - Correo del usuario
   * @param {String} password - Password introducido por el usuario
   */
  static registerUser = (name, lastName, email, password, language) => AuthService.register(this, { name, lastName, email, password, language });

  /**
   * Envía un email al usuario para que pueda validar su cuenta
   *
   * @param {String} email - Email del usuario
   * @return {Boolean} - Indica el resultado de enviar el email
   * @throws {AuthError} - Error de Autenticación
   */
  static sendConfirmEmail = email => AuthService.sendConfirmEmail(email);

  /**
   *
   * @param {User} user - Datos de usuario (personales y de configuración)
   */
  static editUser = async user => {
    const result = await AuthService.editUser(user);
    if (result === true) {
      await this.update({ where: 1, data: user }); // La id del usuario dentro del modelo siempre será 1
    }
  };

  /**
   * @param {String} email - Correo del usuario
   * @return {Boolean} - Indica el resultado de enviar el email
   */
  static rememberUser = email => AuthService.remember(email);

  /**
   *
   * @param {String} token - El token para confirmar la cuenta de usuario
   * @return {Boolean} - Indica el resultado de realizar la confiramción
   */
  static confirmUser = token => AuthService.confirm(token);

  /**
   *
   * @param {String} token - El token para confirmar la cuenta de usuario
   * @param {String} password - El nuevo password a modificar
   * @return {Boolean} - Indica el resultado de actualizar
   */
  static resetPassword = (resetToken, newPassword) => AuthService.resetPassword({ resetToken, newPassword });

  /**
   * @return {Boolean} - Indica si se ha borrado con éxito
   */
  static deleteUser = () => AuthService.deleteUser();

  /**
   * @return {Boolean} - Indica si se ha deslogueado con éxito
   */
  static logout = () => AuthService.logout();
}
