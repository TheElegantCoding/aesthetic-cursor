import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true
}, {
  rules: {
    'max-statements': 'off',
    'id-length': 'off'
  }
});

export default config;