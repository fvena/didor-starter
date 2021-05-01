import ApiService from '/Core/services/Api.service';
import StorageService from '/Core/services/Storage.service';
import CONSTANTS from '/@/constant';

const login = async (email, password) => {
  try {
    const data = {
      grant_type: 'password',
      email: email,
      password: password,
      client_id: CONSTANTS.CONNECT.API_CLIENT_ID,
    };

    const response = await ApiService.post('oauth/token', data);

    //
    // Actualizo las cabeceras de axios con el bearer token
    // y almaceno los token en el local storage para futuras visitas
    //
    ApiService.setHeader(response.data.access_token);
    StorageService.setItem('access_token', response.data.access_token);
    StorageService.setItem('refresh_token', response.data.refresh_token);

    const user = await ApiService.get('profile');
    //
    // Transformo los datos al formato de nuestro modelo
    //
    // const user = {
    //   id: response.data._id,
    //   name: response.data.data.name,
    //   lastName: response.data.data.lastName,
    //   email: response.data.email,
    //   avatar: response.data.data.avatar,
    //   commercial: response.data.data.commercial,
    //   notification: response.data.config.notification,
    //   ampm: response.data.config.ampm,
    //   sundayFirst: response.data.config.sundayFirst,
    //   noHaptic: response.data.config.noHaptic,
    //   units: unitTempUtil.unitTotempunit(response.data.config.units),
    //   lang: response.data.config.lang,
    // };

    // log.success('AuthService/login');
    return user.data.data;
  } catch (error) {
    console.error(error);
    // throw new AuthError(error);
  }
};

const AuthService = { login };

export default AuthService;
