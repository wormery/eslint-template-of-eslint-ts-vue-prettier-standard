module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
