/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error' // 对于不符合prettier报eslint错误
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
