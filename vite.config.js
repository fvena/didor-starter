import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import i18nResources from 'vite-plugin-i18n-resources';

export default {
  alias: {
    '/@': resolve(__dirname, './src'),
  },
  plugins: [
    vue(),
    i18nResources({
      path: resolve(__dirname, 'src'),
    }),
  ],
};
