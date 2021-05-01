import axios from 'axios';
import Router from '/Core/router';
import AuthService from '/Auth/services/auth.service';
import CoreError from '/Core/services/Errors.service';
import StorageService from '/Core/services/Storage.service';
import log from '/Core/services/Log.service';

const ApiService = {
  /**
   * Inicializa el Servicio API
   *
   * @param {String} baseURL - Url base del API
   */
  init(baseURL) {
    // Configuración base
    axios.defaults.baseURL = `${baseURL}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post.Accept = 'application/json';
    axios.defaults.headers.get['Content-Type'] = 'application/json';
    axios.defaults.headers.get.Accept = 'application/json';
    axios.defaults.timeout = 10000;

    // Interceptor
    /* prettier-ignore */
    axios.interceptors.response.use(
      response => response,
      // eslint-disable-next-line consistent-return
      async error => {
        /*
         * Sin conexión a internet
         * La petición no puede realizarse porque no hay conexión a internet
         * redirijo a la página de error
         */
        if (error.message === 'Network Error') {
          if (!window.navigator.onLine) throw new CoreError('offline');
          throw new CoreError('backendDown');
          // Router.push({ name: 'error', query: { reason: 'networkError' } });
          // throw new CoreError('networkError');
        }

        /*
         * Tiempo excedido
         * La petición es abortada porque ha tardado más del tiempo definido en la variable 'timeout'
         */
        else if (error.code === 'ECONNABORTED') {
          throw new CoreError('timeout');
        }

        /*
         * Backend no responde
         * La petición no puede realizarse porque el backend no nos responde
         * redirijo a la página de error
         */
        else if (!error.response) {
          // Router.push({ name: 'error', query: { reason: 'backendDown' } });
          throw new CoreError('backendDown');
        }

        /*
         * Sesión expirada
         * La sesión del usuario ha expirado, intentamos obtener un nuevo token con el refreshToken,
         * y volvemos realizar la petición.
         */
        else if (error.response.status === 401) {
          log.info('Api Service: Ha expirado la sesión, pruebo con el refreshtoken');
          const token = await AuthService.refreshToken();
          error.config.headers.Authorization = `Bearer ${token}`;
          return axios(error.config);
        }

        /*
         * El refresh token ha caducado
         * Cierro la sesión y redirijo al login
         */
        else if (error.response.data._id === 'tokenNotFound' && error.response.config.url.include('auth/')) {
          this.cleanData();
          Router.push({ name: 'login', query: { reason: 'sessionExpired' } });
          // throw new CoreError('sessionExpired');
        }

        /*
         * Sesión cerrada
         * La petición no puede realizarse porque el usuario no tiene ninguna sesión abierta,
         */
        else if (error.response.status === 403 && error.response.config.url.include('auth/')) {
          this.cleanData();
          Router.push({ name: 'login', query: { reason: 'sessionClosed' } });
          // throw new CoreError('sessionClosed');
        }

        /*
         * Ruta no encontrado
         * La petición no puede realizarse porque la ruta no se ha encontrado,
         */
        else if (error.response.status === 404) {
          throw new CoreError('endPointNotFound');
        }

        return Promise.reject(error);
      },
    );
  },

  setBaseURL(baseURL) {
    axios.defaults.baseURL = `${baseURL}`;
    this.removeHeader();
  },

  setHeader(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  /**
   * Limpia los datos del usuario almacenados en el navegador
   */
  cleanData() {
    // Reset data
    StorageService.removeItem('access_token');
    StorageService.removeItem('refresh_token');
    StorageService.removeItem('language');
    this.removeHeader();
  },

  get(resource, data) {
    if (data) return axios.get(resource, data);
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  patch(resource, data) {
    return axios.patch(resource, data);
  },

  delete(resource, data) {
    if (data) return axios.delete(resource, { data });
    return axios.delete(resource, data);
  },
};

export default ApiService;
