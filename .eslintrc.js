module.exports = {
  plugins: ['prettier'],
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    parser: '@babel/eslint-parser',
  },
};
