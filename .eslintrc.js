module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': ['error', {
      'code': 200,
    }],
    'quotes': ['error', 'single'],
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': ['error', {
      'ObjectExpression': 'always',
      'ObjectPattern': 'always',
      'ImportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
      'ExportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
    }],
    'object-property-newline': 'error',
  },
};
