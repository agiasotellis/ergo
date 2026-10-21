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
      // A component named after a JS global (e.g. Symbol) breaks React Compiler output at runtime.
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'FunctionDeclaration[id.name=/^(Symbol|Object|Array|Map|Set|WeakMap|Promise|Error|Number|String|Boolean|Date|JSON|Math|Proxy|Reflect|Intl|Function)$/], ClassDeclaration[id.name=/^(Symbol|Object|Array|Map|Set|WeakMap|Promise|Error|Number|String|Boolean|Date|JSON|Math|Proxy|Reflect|Intl|Function)$/], VariableDeclarator[id.name=/^(Symbol|Object|Array|Map|Set|WeakMap|Promise|Error|Number|String|Boolean|Date|JSON|Math|Proxy|Reflect|Intl|Function)$/], ImportSpecifier[local.name=/^(Symbol|Object|Array|Map|Set|WeakMap|Promise|Error|Number|String|Boolean|Date|JSON|Math|Proxy|Reflect|Intl|Function)$/]',
          message: 'Do not name things after JavaScript globals (React Compiler output calls e.g. Symbol.for).',
        },
      ],
    },
  },
]);
