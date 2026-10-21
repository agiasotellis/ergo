// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'android/*', 'ios/*', 'plugins/*'],
  },
  {
    rules: {
      // Screens load data from Supabase in effects (async fetch, then setState).
      // That is intentional here, so report it as a warning rather than an error.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]);
