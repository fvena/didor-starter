module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier', 'prettier/vue'],
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Core', './src/modules/core'],
          ['Auth', './src/modules/auth'],
        ],
      },
    },
  },
  rules: {
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
  },
};
