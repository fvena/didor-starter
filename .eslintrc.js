module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier", "prettier/vue"],
  plugins: ["vue"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["Core", "./src/modules/core"],
          ["Auth", "./src/modules/auth"],
        ],
      },
    },
  },
  rules: {
    "vue/no-unused-vars": "off",
    "no-unused-vars": "off",
  },
};
