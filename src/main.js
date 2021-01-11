import { createApp } from 'vue';
import i18n from '/Core/services/Language.service';
import router from '/Core/router';
import store from '/Core/plugins/vue-models';
import ApiService from '/Core/services/Api.service';
import CONSTANTS from '/@/constant';

// Modelos
import User from '/Auth/models/User.model';

// Aplicación
import App from '/@/App.vue';

// Estilos de la aplicación
import './design/main.scss';

ApiService.init(CONSTANTS.CONNECT.API_URL);

const app = createApp(App);
app.use(store, {
  models: [User],
});
app.use(router);
app.use(i18n);
app.mount('#app');
