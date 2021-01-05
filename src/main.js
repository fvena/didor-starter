import { createApp } from "vue";
import router from "./router";
import i18n from "./i18n";
import App from "./App.vue";
import constant from "./plugins/Constants.plugin";

createApp(App).use(router).use(i18n).use(constant).mount("#app");
