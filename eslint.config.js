import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true
});

export default config;