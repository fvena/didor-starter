import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from "vite-i18n-resources"
import App from './App.vue'

const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "es",
  messages,
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
