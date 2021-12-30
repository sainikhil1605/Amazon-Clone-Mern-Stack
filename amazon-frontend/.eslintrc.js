module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react-jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
};
