module.exports = {
  plugins: ['react-native', 'prettier'],
  extends: ['@react-native-community'],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 2,
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
}
