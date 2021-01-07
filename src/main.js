import { createApp } from 'vue';
import i18n from '/Core/services/Language.service';
import router from '/Core/router';
import ApiService from '/Core/services/Api.service';
import { stateSymbol, createStore } from '/Auth/models/User.model';
import CONSTANTS from '/@/constant';

// Aplicación
import App from '/@/App.vue';

// Estilos de la aplicación
import './design/main.scss';

ApiService.init(CONSTANTS.CONNECT.API_URL);

const app = createApp(App);
app.provide(stateSymbol, createStore);
app.use(router);
app.use(i18n);
app.mount('#app');
