import { createApp } from 'vue';
import router from '/@/router';
import i18n from '/@/services/Language.service';
import ApiService from '/@/services/Api.service';
import App from '/@/App.vue';
import CONSTANTS from '/@/constant';

console.log(CONSTANTS);

ApiService.init(CONSTANTS.CONNECT.API_URL);

const data = {
  grant_type: 'password',
  email: 'user_1@email.com',
  password: 'foobarfoo',
  client_id: CONSTANTS.CONNECT.API_CLIENT_ID,
};

const result = ApiService.post('oauth/token', data);
console.log(result);

createApp(App).use(router).use(i18n).mount('#app');
